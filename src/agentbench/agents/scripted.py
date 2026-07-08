"""Scripted agents and test doubles for AgentBench-Lite.

FR-AGENT-3:
ScriptedAgent: Oracle/deterministic sequence player.
NoopAgent: Immediately completes without tools.
OvereagerAgent: Prematurely mutates state.
LoopAgent: Repeats the exact same call forever.
"""
from typing import Any, Dict, List, Optional, Union
from agentbench.agents.base import AgentTurn, ToolCall, Usage


class ScriptedAgent:
    """Replays a predetermined sequence of tool calls, then gives a final answer."""

    def __init__(
        self,
        calls: List[Union[ToolCall, List[ToolCall]]],
        final_text: str = "Task completed successfully.",
        name: str = "scripted:oracle",
    ):
        self.name = name
        self.turns: List[List[ToolCall]] = []
        for item in calls:
            if isinstance(item, list):
                self.turns.append(item)
            else:
                self.turns.append([item])
        self.final_text = final_text
        self.index = 0

    def step(self, messages: List[Dict[str, Any]], tools: List[Dict[str, Any]]) -> AgentTurn:
        # ponytail: simple index pointer through pre-scripted turns
        if self.index < len(self.turns):
            turn_calls = self.turns[self.index]
            self.index += 1
            return AgentTurn(
                text=None,
                tool_calls=turn_calls,
                usage=Usage(input_tokens=100, output_tokens=25),
            )
        return AgentTurn(
            text=self.final_text,
            tool_calls=[],
            usage=Usage(input_tokens=100, output_tokens=10),
        )


class NoopAgent:
    """Agent that immediately produces a final answer without taking action."""

    def __init__(self, name: str = "scripted:noop", text: str = "I have reviewed and took no action."):
        self.name = name
        self.text = text

    def step(self, messages: List[Dict[str, Any]], tools: List[Dict[str, Any]]) -> AgentTurn:
        return AgentTurn(
            text=self.text,
            tool_calls=[],
            usage=Usage(input_tokens=50, output_tokens=10),
        )


class OvereagerAgent:
    """Agent that immediately mutates state before returning a final answer."""

    def __init__(self, name: str = "scripted:overeager"):
        self.name = name
        self.called = False

    def step(self, messages: List[Dict[str, Any]], tools: List[Dict[str, Any]]) -> AgentTurn:
        if not self.called:
            self.called = True
            return AgentTurn(
                text=None,
                tool_calls=[
                    ToolCall(
                        id="overeager_call_1",
                        name="update_status",
                        arguments={"user_id": 1, "status": "suspended"},
                    )
                ],
                usage=Usage(input_tokens=50, output_tokens=20),
            )
        return AgentTurn(
            text="Completed speculative action.",
            tool_calls=[],
            usage=Usage(input_tokens=60, output_tokens=10),
        )


class LoopAgent:
    """Agent that repeats the same identical tool call forever."""

    def __init__(
        self,
        tool: str = "get_user",
        arguments: Optional[Dict[str, Any]] = None,
        name: str = "scripted:loop",
    ):
        self.name = name
        self.tool = tool
        self.arguments = arguments if arguments is not None else {"user_id": 1}

    def step(self, messages: List[Dict[str, Any]], tools: List[Dict[str, Any]]) -> AgentTurn:
        return AgentTurn(
            text=None,
            tool_calls=[
                ToolCall(
                    id="loop_call",
                    name=self.tool,
                    arguments=dict(self.arguments),
                )
            ],
            usage=Usage(input_tokens=50, output_tokens=15),
        )

