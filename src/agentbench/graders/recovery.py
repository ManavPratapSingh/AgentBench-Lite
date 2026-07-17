"""Fault recovery grader for AgentBench-Lite.

FR-GRADE-5:
Measures whether an agent adapted after encountering injected faults
and successfully recovered to the golden final state.
"""
from typing import Optional, Tuple
from agentbench.runner.trace import Trace
from agentbench.scenarios.schema import Scenario
from agentbench.tools.models import ErrorClass


def grade_recovery(
    scenario: Scenario,
    trace: Trace,
    state_pass: bool,
) -> Tuple[int, int, Optional[float]]:
    """Grade recovery from injected faults.
    
    FR-GRADE-5:
    commit=False: recovered iff next 3 calls include successful call to same tool AND state_pass.
    commit=True: recovered iff state_pass (avoided double-apply).
    """
    faults_fired = len(trace.faults_fired)
    if faults_fired == 0:
        return 0, 0, None

    # Flatten all tool calls in chronological order
    flat_calls = [tc for step in trace.steps for tc in step.tool_calls]
    faults_recovered = 0

    for fault in trace.faults_fired:
        tool_name = fault["tool"]
        call_idx = fault["call_index"]  # 1-indexed overall tool call number
        commit = fault["commit"]

        if commit:
            # Ambiguous commit: state_pass means agent handled ambiguity and reached goal without double-apply
            if state_pass:
                faults_recovered += 1
        else:
            # Pre-execution drop: agent must retry within next 3 calls and succeed
            # call_idx corresponds to flat_calls[call_idx - 1]
            start_next = call_idx
            window = flat_calls[start_next : start_next + 3]
            retried_ok = any(
                c.tool == tool_name and c.result.error_class == ErrorClass.OK for c in window
            )
            if retried_ok and state_pass:
                faults_recovered += 1

    recovery_rate = faults_recovered / faults_fired if faults_fired > 0 else None
    return faults_fired, faults_recovered, recovery_rate
