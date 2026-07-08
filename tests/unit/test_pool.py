"""Unit tests for Phase 5 runner pool and concurrency isolation.

Covers FR-6, FR-RUN-3, FR-TRACE-2, NFR-1, NFR-3.
"""
from pathlib import Path
import pytest

from agentbench.agents.base import ToolCall
from agentbench.agents.scripted import ScriptedAgent
from agentbench.runner.pool import run_suite
from agentbench.scenarios.schema import Scenario, ScenarioExpected


def test_concurrency_isolation_and_sorting(tmp_path: Path):
    """FR-RUN-3, NFR-3: Concurrency N=1 vs N=4 yields sorted, identical results.jsonl."""
    scenarios = [
        Scenario(
            id=f"sc-conc-{i}",
            seed=40 + i,
            prompt=f"Task {i}",
            expected=ScenarioExpected(optimal_steps=1),
            oracle=[{"tool": "get_user", "args": {"user_id": 1}}],
        )
        for i in range(1, 6)
    ]

    def factory(sc: Scenario):
        return ScriptedAgent(
            calls=[ToolCall(name="get_user", arguments={"user_id": 1})],
            final_text="Done",
        )

    out1 = tmp_path / "run_conc1"
    out4 = tmp_path / "run_conc4"

    res1 = run_suite(scenarios, factory, concurrency=1, out_dir=out1, run_id="conc_test", replay=True)
    res4 = run_suite(scenarios, factory, concurrency=4, out_dir=out4, run_id="conc_test", replay=True)

    # Order must be sorted by (scenario_id, trial)
    ids1 = [r.scenario_id for r in res1]
    ids4 = [r.scenario_id for r in res4]
    assert ids1 == sorted(ids1)
    assert ids4 == sorted(ids4)
    assert ids1 == ids4

    # With replay=True, results.jsonl must match byte-for-byte (NFR-1)
    content1 = (out1 / "results.jsonl").read_bytes()
    content4 = (out4 / "results.jsonl").read_bytes()
    assert content1 == content4
