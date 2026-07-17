"""Agent protocol and turn data structures for AgentBench-Lite.

FR-AGENT-1: Common protocol for provider models and test doubles.
"""
from typing import Any, Dict, List, Optional, Protocol, runtime_checkable
from pydantic import BaseModel, Field


class ToolCall(BaseModel):
    """Represents a single tool invocation request from an agent turn."""
    id: str = "call_default"
    name: str
    arguments: Dict[str, Any] = Field(default_factory=dict)


class Usage(BaseModel):
    """Token consumption accounting for a turn."""
    input_tokens: int = 0
    output_tokens: int = 0


class AgentTurn(BaseModel):
    """The outcome of a single model step."""
    text: Optional[str] = None
    tool_calls: List[ToolCall] = Field(default_factory=list)
    usage: Usage = Field(default_factory=Usage)
    latency_ms: float = 0.0

    @property
    def is_final_answer(self) -> bool:
        """A turn with zero tool calls is a final answer."""
        return len(self.tool_calls) == 0


class AgentError(Exception):
    """Provider-level exception raised during model inference."""
    def __init__(self, message: str, kind: str = "unhandled"):
        super().__init__(message)
        self.kind = kind


@runtime_checkable
class Agent(Protocol):
    """Protocol that all agent adapters and test doubles must satisfy."""
    name: str

    def step(self, messages: List[Dict[str, Any]], tools: List[Dict[str, Any]]) -> AgentTurn:
        """Perform one agent step given current conversation messages and tool schemas."""
        ...

