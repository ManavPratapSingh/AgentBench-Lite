"""Unit tests for Phase 4 graders and failure taxonomy.

Covers FR-5, FR-GRADE-1, FR-GRADE-2, FR-GRADE-3, FR-GRADE-4, FR-GRADE-5, FR-GRADE-6.
"""
import pytest

from agentbench.env.seed import seed
from agentbench.graders.contracts import grade_contracts
from agentbench.graders.efficiency import grade_efficiency
from agentbench.graders.recovery import grade_recovery
from agentbench.graders.state import grade_state_and_answer
from agentbench.graders.taxonomy import classify_failure
from agentbench.runner.trace import StepTrace, ToolCallRecord, Trace
from agentbench.scenarios.schema import Scenario, ScenarioExpected
from agentbench.tools.models import ErrorClass, ToolResult


def _make_trace(
    steps: list[StepTrace],
    terminated: str = "final_answer",
    final_text: str | None = None,
    faults_fired: list[dict] | None = None,
) -> Trace:
    return Trace(
        run_id="test_run",
        scenario_id="sc_test",
        trial=0,
        agent="test_agent",
        terminated=terminated,
        final_text=final_text,
        steps=steps,
        faults_fired=faults_fired or [],
    )


def test_state_grader_sql_assertions():
    """FR-GRADE-1: SQL assertions, equals, and rows."""
    conn = seed(42)
    try:
        scenario = Scenario(
            id="state-test",
            seed=42,
            prompt="Test prompt",
            expected=ScenarioExpected(
                final_state=[
                    {"sql": "SELECT COUNT(*) FROM users", "equals": 50},
                    {"sql": "SELECT id FROM users ORDER BY id ASC LIMIT 2", "rows": [[1], [2]]},
                ],
                forbidden=[
                    {"sql": "SELECT COUNT(*) FROM audit_log", "equals": 0}
                ],
            ),
        )
        trace = _make_trace(steps=[])
        res = grade_state_and_answer(conn, scenario, trace)
        assert res.passed is True
        assert res.state_pass is True
        assert res.forbidden_violations == 0

        # Now test failure when forbidden check violates
        cur = conn.cursor()
        cur.execute("INSERT INTO audit_log (action, details, created_at) VALUES ('x', '{}', '2025-06-01')")
        res_fail = grade_state_and_answer(conn, scenario, trace)
        assert res_fail.passed is False
        assert res_fail.forbidden_violations == 1
    finally:
        conn.close()


def test_answer_grader_contains_and_regex():
    """FR-GRADE-2: Text matching for read-only scenarios."""
    conn = seed(42)
    try:
        scenario = Scenario(
            id="ans-test",
            seed=42,
            prompt="Report Alice",
            expected=ScenarioExpected(
                answer={"contains_all": ["Alice", "Smith"], "regex": r"\$100"},
            ),
        )
        # Passing trace
        t_pass = _make_trace(steps=[], final_text="Alice Smith has $100 in savings.")
        res_pass = grade_state_and_answer(conn, scenario, t_pass)
        assert res_pass.passed is True

        # Missing term
        t_fail1 = _make_trace(steps=[], final_text="Alice has $100.")
        assert grade_state_and_answer(conn, scenario, t_fail1).passed is False

        # Regex mismatch
        t_fail2 = _make_trace(steps=[], final_text="Alice Smith has 100 dollars.")
        assert grade_state_and_answer(conn, scenario, t_fail2).passed is False
    finally:
        conn.close()


def test_efficiency_grader():
    """FR-GRADE-3: Optimal ratio and redundant call detection."""
    scenario = Scenario(
        id="eff-test",
        prompt="Efficiency test",
        expected=ScenarioExpected(optimal_steps=2),
    )

    tc1 = ToolCallRecord(
        call_id="c1",
        tool="get_user",
        arguments={"user_id": 1},
        result=ToolResult(tool="get_user", error_class=ErrorClass.OK, body={}, status_code=200),
    )
    # Duplicate call without mutation
    tc2 = ToolCallRecord(
        call_id="c2",
        tool="get_user",
        arguments={"user_id": 1},
        result=ToolResult(tool="get_user", error_class=ErrorClass.OK, body={}, status_code=200),
    )
    # Mutating call
    tc_mut = ToolCallRecord(
        call_id="c3",
        tool="transfer",
        arguments={"from_user_id": 1, "to_user_id": 2, "amount": 5.0},
        result=ToolResult(tool="transfer", error_class=ErrorClass.OK, body={}, status_code=200, mutated=True),
    )
    # Call after mutation (no longer redundant)
    tc3 = ToolCallRecord(
        call_id="c4",
        tool="get_user",
        arguments={"user_id": 1},
        result=ToolResult(tool="get_user", error_class=ErrorClass.OK, body={}, status_code=200),
    )

    trace = _make_trace(steps=[StepTrace(step=1, tool_calls=[tc1, tc2, tc_mut, tc3])])
    eff, red = grade_efficiency(scenario, trace, passed=True)
    assert red == 1
    assert eff == round(2.0 / 4.0, 4)

    # Failed trial yields None efficiency
    eff_fail, red_fail = grade_efficiency(scenario, trace, passed=False)
    assert eff_fail is None
    assert red_fail == 1


def test_contract_grader_and_hallucinations():
    """FR-GRADE-4: Contract violations and hallucinated ID detection."""
    scenario = Scenario(id="contract-test", prompt="Check user 5 and send message.")

    # Call 1: valid known ID 5 from prompt, returns user 10 in body
    tc1 = ToolCallRecord(
        call_id="c1",
        tool="get_user",
        arguments={"user_id": 5},
        result=ToolResult(
            tool="get_user",
            error_class=ErrorClass.OK,
            body={"id": 5, "partner_id": 10},
            status_code=200,
        ),
    )
    # Call 2: valid user 10 (revealed in previous body)
    tc2 = ToolCallRecord(
        call_id="c2",
        tool="get_user",
        arguments={"user_id": 10},
        result=ToolResult(tool="get_user", error_class=ErrorClass.OK, body={}, status_code=200),
    )
    # Call 3: hallucinated ID 999 (never mentioned in prompt or bodies)
    tc3 = ToolCallRecord(
        call_id="c3",
        tool="get_user",
        arguments={"user_id": 999},
        result=ToolResult(tool="get_user", error_class=ErrorClass.API_4XX, body={"error": "user_not_found"}, status_code=404),
    )
    # Call 4: Schema violation
    tc4 = ToolCallRecord(
        call_id="c4",
        tool="get_user",
        arguments={"user_id": "bad"},
        result=ToolResult(tool="get_user", error_class=ErrorClass.SCHEMA_VIOLATION, body={"error": "schema_violation"}),
    )

    trace = _make_trace(steps=[StepTrace(step=1, tool_calls=[tc1, tc2, tc3, tc4])])
    res = grade_contracts(scenario, trace)
    assert res.schema_violations == 1
    assert res.api_4xx == 1
    assert res.hallucinated_ids == 1
    assert res.unknown_tools == 0


def test_recovery_grader_safe_and_ambiguous():
    """FR-GRADE-5: Recovery measurement for safe vs ambiguous faults."""
    scenario = Scenario(id="rec-test", prompt="Transfer test")

    # Safe fault: call 1 failed, call 2 retried OK within 3 calls, state_pass is True
    tc_fail = ToolCallRecord(
        call_id="c1",
        tool="transfer",
        arguments={},
        result=ToolResult(tool="transfer", error_class=ErrorClass.API_5XX, body={}, status_code=503, injected=True),
    )
    tc_ok = ToolCallRecord(
        call_id="c2",
        tool="transfer",
        arguments={},
        result=ToolResult(tool="transfer", error_class=ErrorClass.OK, body={}, status_code=200),
    )
    t_safe = _make_trace(
        steps=[StepTrace(step=1, tool_calls=[tc_fail, tc_ok])],
        faults_fired=[{"tool": "transfer", "call_index": 1, "error": 503, "commit": False}],
    )
    fired, rec, rate = grade_recovery(scenario, t_safe, state_pass=True)
    assert fired == 1
    assert rec == 1
    assert rate == 1.0

    # Ambiguous fault: commit=True, state_pass=True -> recovered
    t_amb = _make_trace(
        steps=[StepTrace(step=1, tool_calls=[tc_fail])],
        faults_fired=[{"tool": "transfer", "call_index": 1, "error": 500, "commit": True}],
    )
    fired, rec, rate = grade_recovery(scenario, t_amb, state_pass=True)
    assert rec == 1
    assert rate == 1.0


def test_taxonomy_classification_hierarchy():
    """FR-GRADE-6: Hierarchy of failure modes."""
    scenario = Scenario(id="tax-test", prompt="Taxonomy test")
    from agentbench.graders.contracts import ContractGradeResult
    from agentbench.graders.state import StateGradeResult

    trace = _make_trace(steps=[], terminated="final_answer")

    # 1. forbidden_side_effect wins if forbidden_violations > 0
    state_res = StateGradeResult(state_pass=False, final_state_ok=False, forbidden_violations=2, answer_ok=True, passed=False)
    mode = classify_failure(scenario, trace, state_res, ContractGradeResult(), 0, 0)
    assert mode == "forbidden_side_effect"

    # 2. loop wins if terminated == 'loop'
    trace_loop = _make_trace(steps=[], terminated="loop")
    state_clean = StateGradeResult(state_pass=False, final_state_ok=False, forbidden_violations=0, answer_ok=True, passed=False)
    assert classify_failure(scenario, trace_loop, state_clean, ContractGradeResult(), 0, 0) == "loop"

    # 3. budget_exhausted
    trace_budget = _make_trace(steps=[], terminated="max_steps")
    assert classify_failure(scenario, trace_budget, state_clean, ContractGradeResult(), 0, 0) == "budget_exhausted"

    # 4. hallucinated_id
    contract_hall = ContractGradeResult(hallucinated_ids=1)
    assert classify_failure(scenario, trace, state_clean, contract_hall, 0, 0) == "hallucinated_id"

    # 5. default wrong_final_state
    assert classify_failure(scenario, trace, state_clean, ContractGradeResult(), 0, 0) == "wrong_final_state"
