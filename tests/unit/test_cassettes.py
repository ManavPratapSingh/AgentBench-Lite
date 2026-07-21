"""Unit tests for Phase 5 VCR-style cassettes and pricing.

Covers FR-7, FR-AGENT-4, FR-TRACE-3, §14.
"""
from pathlib import Path
import pytest

from agentbench.agents.base import ToolCall
from agentbench.agents.cassette import (
    CassetteMiss,
    RecordingAgent,
    ReplayAgent,
    compute_cassette_key,
)
from agentbench.agents.scripted import ScriptedAgent
from agentbench.config.pricing import calculate_cost


def test_cassette_key_determinism():
    """FR-AGENT-4: Canonical request hash is deterministic regardless of key insertion order."""
    msgs1 = [{"role": "user", "content": "hi", "extra": 1}]
    msgs2 = [{"extra": 1, "role": "user", "content": "hi"}]
    tools1 = [{"name": "tool_a", "desc": "a"}]
    tools2 = [{"desc": "a", "name": "tool_a"}]

    k1 = compute_cassette_key("gpt-4o-mini", msgs1, tools1)
    k2 = compute_cassette_key("gpt-4o-mini", msgs2, tools2)
    assert k1 == k2


def test_recording_and_replay_agent(tmp_path: Path):
    """FR-AGENT-4: Recording agent saves cassette; Replay agent serves it without network."""
    cassette_dir = tmp_path / "cassettes"
    oracle_agent = ScriptedAgent(
        calls=[ToolCall(name="get_user", arguments={"user_id": 1})],
        final_text="Found user 1.",
        name="test_model",
    )

    # 1. Record
    rec_agent = RecordingAgent(inner=oracle_agent, cassette_dir=cassette_dir)
    messages = [{"role": "user", "content": "Who is user 1?"}]
    tools = [{"name": "get_user"}]
    turn1 = rec_agent.step(messages, tools)
    assert len(turn1.tool_calls) == 1

    # 2. Replay
    replay_agent = ReplayAgent(model_name="test_model", cassette_dir=cassette_dir)
    turn_replayed = replay_agent.step(messages, tools)
    assert len(turn_replayed.tool_calls) == 1
    assert turn_replayed.tool_calls[0].name == "get_user"
    assert turn_replayed.tool_calls[0].arguments == {"user_id": 1}

    # 3. Cassette miss
    with pytest.raises(CassetteMiss):
        replay_agent.step([{"role": "user", "content": "Unseen prompt"}], tools)


def test_pricing_calculation():
    """§14: Cost calculation per million tokens."""
    # gpt-4o-mini: 0.15 in, 0.60 out per MTok
    cost = calculate_cost("openai:gpt-4o-mini", input_tokens=1_000_000, output_tokens=1_000_000)
    assert cost == 0.75

    # Unknown model returns None
    assert calculate_cost("unknown:model", 100, 100) is None
