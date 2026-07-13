"""The core execution loop for AgentBench-Lite.

FR-RUN-1, FR-RUN-2:
Strict limit enforcement: max_steps, max_tool_calls, max_total_tokens.
Consecutive call loop detection.
Closed set of termination reasons.
"""
import json
import sqlite3
import time
from typing import Any, Dict, List, Optional, Tuple

from agentbench.agents.base import Agent, AgentError, AgentTurn
from agentbench.agents.prompts import PROMPT_VERSION, SYSTEM_PROMPT
from agentbench.env.seed import seed
from agentbench.runner.trace import StepTrace, ToolCallRecord, Trace
from agentbench.scenarios.schema import Scenario
from agentbench.tools.registry import ToolRegistry


def _canonical_json(obj: Any) -> str:
    """Format JSON deterministically with sorted keys."""
    return json.dumps(obj, sort_keys=True, separators=(",", ":"))


def run_task(
    scenario: Scenario,
    agent: Agent,
    trial: int = 0,
    run_id: str = "run_default",
    conn: Optional[sqlite3.Connection] = None,
) -> Tuple[Trace, sqlite3.Connection]:
    """Execute a scenario trial with an agent under strict limits.
    
    FR-RUN-2: Returns the completed Trace and final database connection.
    """
    if conn is None:
        conn = seed(scenario.seed)

    registry = ToolRegistry(
        conn=conn,
        allowed_tools=scenario.tools,
        faults=scenario.faults,
        scenario_seed=scenario.seed,
    )

    messages: List[Dict[str, Any]] = [
        {"role": "system", "content": SYSTEM_PROMPT},
        {"role": "user", "content": scenario.prompt},
    ]

    max_steps = scenario.limits.max_steps
    max_tool_calls = scenario.limits.max_tool_calls
    max_total_tokens = scenario.limits.max_total_tokens

    step_traces: List[StepTrace] = []
    call_history: List[Tuple[str, str, str]] = []  # (tool, canonical_args, canonical_body)

    total_tool_calls = 0
    total_tokens = 0
    final_text: Optional[str] = None
    termination_reason = "max_steps"

    for step_num in range(1, max_steps + 1):
        # 1. Agent step
        t0 = time.perf_counter()
        try:
            turn: AgentTurn = agent.step(messages, registry.tool_defs(provider="openai"))
        except AgentError:
            termination_reason = "agent_error"
            break
        except Exception:
            termination_reason = "harness_error"
            break
        step_latency = (time.perf_counter() - t0) * 1000.0

        total_tokens += turn.usage.input_tokens + turn.usage.output_tokens

        # Check final answer (turn with 0 tool calls)
        if len(turn.tool_calls) == 0:
            final_text = turn.text
            termination_reason = "final_answer"
            step_traces.append(
                StepTrace(
                    step=step_num,
                    text=turn.text,
                    usage=turn.usage,
                    latency_ms=turn.latency_ms or step_latency,
                    tool_calls=[],
                )
            )
            break

        # Record assistant tool-call turn
        assistant_tool_calls = [
            {
                "id": tc.id,
                "type": "function",
                "function": {
                    "name": tc.name,
                    "arguments": _canonical_json(tc.arguments),
                },
            }
            for tc in turn.tool_calls
        ]
        messages.append(
            {
                "role": "assistant",
                "content": turn.text,
                "tool_calls": assistant_tool_calls,
            }
        )

        step_call_records: List[ToolCallRecord] = []
        loop_halt = False
        tool_limit_halt = False

        for tc in turn.tool_calls:
            if total_tool_calls >= max_tool_calls:
                termination_reason = "max_tool_calls"
                tool_limit_halt = True
                break

            # Execute tool
            res = registry.call(tc.name, tc.arguments, call_id=tc.id)
            total_tool_calls += 1

            record = ToolCallRecord(
                call_id=tc.id,
                tool=tc.name,
                arguments=tc.arguments,
                result=res,
            )
            step_call_records.append(record)

            # Append tool response message
            messages.append(
                {
                    "role": "tool",
                    "tool_call_id": tc.id,
                    "name": tc.name,
                    "content": _canonical_json(res.body),
                }
            )

            # Loop detection: same (tool, canonical_args) with identical result body 3 times consecutively
            canonical_sig = (tc.name, _canonical_json(tc.arguments), _canonical_json(res.body))
            call_history.append(canonical_sig)
            if len(call_history) >= 3 and call_history[-1] == call_history[-2] == call_history[-3]:
                termination_reason = "loop"
                loop_halt = True
                break

        step_traces.append(
            StepTrace(
                step=step_num,
                text=turn.text,
                usage=turn.usage,
                latency_ms=turn.latency_ms or step_latency,
                tool_calls=step_call_records,
            )
        )

        if loop_halt or tool_limit_halt:
            break

        if total_tokens > max_total_tokens:
            termination_reason = "token_budget"
            break

    # Build trace
    trace = Trace(
        run_id=run_id,
        scenario_id=scenario.id,
        trial=trial,
        agent=agent.name,
        harness_version="1.0.0",
        prompt_version=PROMPT_VERSION,
        terminated=termination_reason,
        final_text=final_text,
        steps=step_traces,
        faults_fired=[
            {
                "tool": f.tool,
                "call_index": f.call_index,
                "error": f.error,
                "commit": f.commit,
            }
            for f in registry.fault_injector.faults_fired
        ],
    )

    return trace, conn
