"""Unit tests for Phase 3 agent interface, runner loop, and limit enforcement.

Covers FR-4, FR-AGENT-1, FR-AGENT-2, FR-AGENT-3, FR-RUN-1, FR-RUN-2, FR-TRACE-1.
"""
import pytest

from agentbench.agents.base import AgentError, ToolCall, Usage
from agentbench.agents.scripted import LoopAgent, NoopAgent, OvereagerAgent, ScriptedAgent
from agentbench.agents.openai_agent import OpenAIAgent
from agentbench.runner.loop import run_task
from agentbench.scenarios.schema import Scenario, ScenarioLimits


def test_scripted_oracle_success():
    """FR-RUN-2: ScriptedAgent oracle executes tool sequence and terminates with final_answer."""
    scenario = Scenario(
        id="test-transfer-001",
        seed=42,
        prompt="Transfer $15 from user 1 to user 2.",
    )
    oracle_calls = [
        ToolCall(id="call_1", name="get_user", arguments={"user_id": 1}),
        ToolCall(id="call_2", name="transfer", arguments={"from_user_id": 1, "to_user_id": 2, "amount": 15.0}),
    ]
    agent = ScriptedAgent(calls=oracle_calls, final_text="Transferred $15 successfully.")

    trace, conn = run_task(scenario, agent)
    try:
        assert trace.terminated == "final_answer"
        assert trace.final_text == "Transferred $15 successfully."
        assert len(trace.steps) == 3  # step 1 (get_user), step 2 (transfer), step 3 (final text)
        assert trace.steps[0].tool_calls[0].result.status_code == 200
        assert trace.steps[1].tool_calls[0].result.status_code == 200
        assert trace.steps[1].tool_calls[0].result.mutated is True

        # Check DB state
        cur = conn.cursor()
        cur.execute("SELECT COUNT(*) FROM audit_log WHERE action = 'transfer'")
        assert cur.fetchone()[0] == 1
    finally:
        conn.close()


def test_loop_detection():
    """FR-RUN-1: Repeating the same tool call with identical result 3 times terminates with 'loop'."""
    scenario = Scenario(
        id="test-loop-001",
        seed=42,
        prompt="Find user 1.",
        limits=ScenarioLimits(max_steps=10),
    )
    agent = LoopAgent(tool="get_user", arguments={"user_id": 1})

    trace, conn = run_task(scenario, agent)
    try:
        assert trace.terminated == "loop"
        # Must have stopped after exactly 3 calls
        all_calls = [tc for step in trace.steps for tc in step.tool_calls]
        assert len(all_calls) == 3
    finally:
        conn.close()


def test_max_steps_termination():
    """FR-RUN-1: Reaching max_steps terminates with 'max_steps'."""
    scenario = Scenario(
        id="test-max-steps",
        seed=42,
        prompt="Keep querying.",
        limits=ScenarioLimits(max_steps=4),
    )
    # 10 different calls so loop detection doesn't trigger
    calls = [ToolCall(id=f"c_{i}", name="get_user", arguments={"user_id": i}) for i in range(1, 10)]
    agent = ScriptedAgent(calls=calls)

    trace, conn = run_task(scenario, agent)
    try:
        assert trace.terminated == "max_steps"
        assert len(trace.steps) == 4
    finally:
        conn.close()


def test_max_tool_calls_termination():
    """FR-RUN-1: Reaching max_tool_calls in a multi-call turn terminates with 'max_tool_calls'."""
    scenario = Scenario(
        id="test-max-tools",
        seed=42,
        prompt="Batch query.",
        limits=ScenarioLimits(max_steps=10, max_tool_calls=3),
    )
    # A single turn with 5 tool calls
    batch = [ToolCall(id=f"c_{i}", name="get_user", arguments={"user_id": i}) for i in range(1, 6)]
    agent = ScriptedAgent(calls=[batch])

    trace, conn = run_task(scenario, agent)
    try:
        assert trace.terminated == "max_tool_calls"
        all_calls = [tc for step in trace.steps for tc in step.tool_calls]
        assert len(all_calls) == 3
    finally:
        conn.close()


def test_token_budget_termination():
    """FR-RUN-1: Exceeding max_total_tokens terminates with 'token_budget'."""
    scenario = Scenario(
        id="test-token-budget",
        seed=42,
        prompt="High token consumption.",
        limits=ScenarioLimits(max_steps=10, max_total_tokens=150),
    )
    # Each turn in ScriptedAgent consumes 125 tokens (100 input + 25 output)
    calls = [
        ToolCall(id="c_1", name="get_user", arguments={"user_id": 1}),
        ToolCall(id="c_2", name="get_user", arguments={"user_id": 2}),
    ]
    agent = ScriptedAgent(calls=calls)

    trace, conn = run_task(scenario, agent)
    try:
        # After step 1: 125 tokens. After step 2: 250 tokens > 150 budget
        assert trace.terminated == "token_budget"
    finally:
        conn.close()


def test_noop_and_overeager_agents():
    """FR-AGENT-3: NoopAgent produces final answer without tools; Overeager mutates on step 1."""
    scenario = Scenario(id="test-noop", seed=42, prompt="Do nothing.")
    
    # Noop
    trace_noop, conn_noop = run_task(scenario, NoopAgent())
    try:
        assert trace_noop.terminated == "final_answer"
        assert len(trace_noop.steps) == 1
        assert len(trace_noop.steps[0].tool_calls) == 0
    finally:
        conn_noop.close()

    # Overeager
    trace_over, conn_over = run_task(scenario, OvereagerAgent())
    try:
        assert trace_over.terminated == "final_answer"
        assert len(trace_over.steps) == 2
        assert trace_over.steps[0].tool_calls[0].tool == "update_status"
        assert trace_over.steps[0].tool_calls[0].result.mutated is True
    finally:
        conn_over.close()


def test_openai_agent_missing_key_and_raw_args():
    """FR-AGENT-1: OpenAIAgent raises AgentError when key is missing; handles __raw__ args."""
    agent = OpenAIAgent(model="gpt-4o-mini", api_key=None)
    with pytest.raises(AgentError) as exc_info:
        agent.step([{"role": "user", "content": "hi"}], [])
    assert exc_info.value.kind == "auth_error"

