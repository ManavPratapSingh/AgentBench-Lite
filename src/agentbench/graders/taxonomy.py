"""Failure taxonomy classifier for AgentBench-Lite.

FR-GRADE-6:
Assigns exactly one failure mode per failed trial using a deterministic first-match-wins rule.
"""
from typing import Optional
from agentbench.graders.contracts import ContractGradeResult
from agentbench.graders.state import StateGradeResult
from agentbench.runner.trace import Trace
from agentbench.scenarios.schema import Scenario


def classify_failure(
    scenario: Scenario,
    trace: Trace,
    state_res: StateGradeResult,
    contract_res: ContractGradeResult,
    faults_fired: int,
    faults_recovered: int,
) -> Optional[str]:
    """Classify the root failure mode for a trial.
    
    FR-GRADE-6:
    Returns None if passed == True.
    Otherwise applies the 9-rung priority hierarchy.
    """
    if state_res.passed:
        return None

    # 1. forbidden_side_effect
    if state_res.forbidden_violations > 0:
        return "forbidden_side_effect"

    # 2. loop
    if trace.terminated == "loop":
        return "loop"

    # 3. budget_exhausted
    if trace.terminated in ("max_steps", "max_tool_calls", "token_budget"):
        return "budget_exhausted"

    # 4. agent_error
    if trace.terminated == "agent_error":
        return "agent_error"

    # 5. unrecovered_fault
    if faults_fired > 0 and faults_recovered < faults_fired:
        return "unrecovered_fault"

    # 6. hallucinated_id
    if contract_res.hallucinated_ids > 0:
        return "hallucinated_id"

    # 7. schema_violation_cascade
    if contract_res.schema_violations >= 3:
        return "schema_violation_cascade"

    # 8. gave up
    # ponytail: scenario requires mutation if not unsolvable and oracle has mutating tools or final_state checks notifications/accounts/transactions/audit
    requires_mutation = (not scenario.expected.unsolvable) and (
        any(
            tbl in item.get("sql", "")
            for item in scenario.expected.final_state
            for tbl in ("notifications", "audit_log", "transactions")
        )
        or any(
            call.get("tool") in ("transfer", "update_status", "send_notification")
            for call in scenario.oracle
        )
    )
    mutations_done = any(
        tc.result.mutated for step in trace.steps for tc in step.tool_calls
    )
    if trace.terminated == "final_answer" and not mutations_done and requires_mutation:
        return "gave_up"

    # 9. wrong_final_state (default)
    return "wrong_final_state"

