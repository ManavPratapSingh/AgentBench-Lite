"""Efficiency grader for AgentBench-Lite.

FR-GRADE-3:
Path efficiency = min(1.0, optimal_steps / tool_calls) for passed trials.
Redundant calls = duplicate reads without intervening mutation.
"""
import json
from typing import Any, Optional, Set, Tuple
from agentbench.runner.trace import Trace
from agentbench.scenarios.schema import Scenario


def _canonical_json(obj: Any) -> str:
    return json.dumps(obj, sort_keys=True, separators=(",", ":"))


def grade_efficiency(
    scenario: Scenario,
    trace: Trace,
    passed: bool,
) -> Tuple[Optional[float], int]:
    """Calculate path efficiency and count redundant tool calls.
    
    FR-GRADE-3:
    efficiency is None for failed trials.
    redundant calls count repeated OK calls with no mutating call in between.
    """
    total_calls = 0
    redundant_calls = 0
    seen_reads: Set[Tuple[str, str]] = set()

    for step in trace.steps:
        for tc in step.tool_calls:
            total_calls += 1
            if tc.result.mutated:
                # Mutating call invalidates cached reads
                seen_reads.clear()
            elif tc.result.error_class == "OK":
                sig = (tc.tool, _canonical_json(tc.arguments))
                if sig in seen_reads:
                    redundant_calls += 1
                else:
                    seen_reads.add(sig)

    if not passed or total_calls == 0:
        efficiency = None
    elif scenario.expected.optimal_steps == 0:
        efficiency = 1.0 if total_calls == 0 else 0.0
    else:
        efficiency = min(1.0, scenario.expected.optimal_steps / total_calls)

    return efficiency, redundant_calls

