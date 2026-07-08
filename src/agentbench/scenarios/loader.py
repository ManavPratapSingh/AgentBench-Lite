"""Scenario loader and validator for AgentBench-Lite.

FR-SCEN-1, FR-SCEN-2:
Loads YAML scenario definitions and validates them against §10.2 constraints.
"""
from pathlib import Path
from typing import Any, Dict, List, Optional
import yaml

from agentbench.agents.base import ToolCall
from agentbench.agents.scripted import NoopAgent, OvereagerAgent, ScriptedAgent
from agentbench.env.seed import seed
from agentbench.graders.state import grade_state_and_answer
from agentbench.runner.loop import run_task
from agentbench.scenarios.schema import Scenario
from agentbench.tools.models import TOOL_ARG_MODELS


def load_scenario(path: Path | str) -> Scenario:
    """Load and parse a single YAML scenario file."""
    p = Path(path)
    with p.open("r", encoding="utf-8") as f:
        data = yaml.safe_load(f)
    return Scenario.model_validate(data)


def load_scenario_dir(dir_path: Path | str) -> List[Scenario]:
    """Load all YAML scenario files from a directory recursively."""
    p = Path(dir_path)
    scenarios: List[Scenario] = []
    # ponytail: sorted path glob for deterministic order
    for yaml_file in sorted(p.rglob("*.yaml")):
        scenarios.append(load_scenario(yaml_file))
    return scenarios


def validate_scenario(scenario: Scenario) -> List[str]:
    """Validate a scenario against FR-SCEN-2 rules.
    
    Returns a list of error strings; empty list indicates valid scenario.
    """
    errors: List[str] = []

    # 1. Read-only SQL assertions
    for item in scenario.expected.final_state + scenario.expected.forbidden:
        sql = item.get("sql", "").strip()
        if not sql.upper().startswith("SELECT"):
            errors.append(f"Assertion SQL must start with SELECT: '{sql}'")
        if ";" in sql.rstrip(";"):
            errors.append(f"Multiple SQL statements forbidden in assertion: '{sql}'")
        if "rows" in item and "ORDER BY" not in sql.upper():
            errors.append(f"Row assertion query must have explicit ORDER BY: '{sql}'")

    # 2. Optimal steps
    if not scenario.expected.unsolvable and scenario.expected.optimal_steps < 1:
        errors.append("Solvable scenario must have optimal_steps >= 1")

    # 3. Known tools in tools, faults, oracle
    catalog = set(TOOL_ARG_MODELS.keys())
    if scenario.tools:
        for t in scenario.tools:
            if t not in catalog:
                errors.append(f"Unknown tool in scenario.tools: '{t}'")
    for f in scenario.faults:
        if f.tool not in catalog:
            errors.append(f"Unknown tool in scenario.faults: '{f.tool}'")
    for o in scenario.oracle:
        if o.get("tool") not in catalog:
            errors.append(f"Unknown tool in scenario.oracle: '{o.get('tool')}'")

    # 4. Oracle passes
    oracle_calls = [
        ToolCall(
            id=f"oracle_call_{i}",
            name=step["tool"],
            arguments=step.get("args", {}),
        )
        for i, step in enumerate(scenario.oracle, start=1)
    ]
    oracle_final_text = scenario.oracle_text or "Oracle task completed."
    oracle_agent = ScriptedAgent(calls=oracle_calls, final_text=oracle_final_text)
    trace_oracle, conn_oracle = run_task(scenario, oracle_agent)
    try:
        grade_oracle = grade_state_and_answer(conn_oracle, scenario, trace_oracle)
        if not grade_oracle.passed:
            errors.append(f"Oracle failed scenario: {'; '.join(grade_oracle.details)}")
    finally:
        conn_oracle.close()

    # 5. Non-vacuous: NoopAgent fails solvable scenarios
    if not scenario.expected.unsolvable:
        trace_noop, conn_noop = run_task(scenario, NoopAgent())
        try:
            grade_noop = grade_state_and_answer(conn_noop, scenario, trace_noop)
            if grade_noop.passed:
                errors.append("NoopAgent passed solvable scenario (grader is vacuous)")
        finally:
            conn_noop.close()

    # 6. OvereagerAgent fails unsolvable and trap scenarios
    if scenario.expected.unsolvable or scenario.category == "trap":
        trace_over, conn_over = run_task(scenario, OvereagerAgent())
        try:
            grade_over = grade_state_and_answer(conn_over, scenario, trace_over)
            if grade_over.passed:
                errors.append("OvereagerAgent passed unsolvable/trap scenario (grader is vacuous)")
        finally:
            conn_over.close()

    return errors
