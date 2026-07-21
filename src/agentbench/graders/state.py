"""State and answer graders for AgentBench-Lite.

FR-GRADE-1, FR-GRADE-2:
Evaluates final SQLite database state using SQL assertions and forbidden checks.
Evaluates natural language answers for read-only scenarios without LLM judge.
"""
import re
import sqlite3
from typing import Any, Dict, List, Optional
from pydantic import BaseModel

from agentbench.runner.trace import Trace
from agentbench.scenarios.schema import Scenario


class StateGradeResult(BaseModel):
    """Result of SQL state and answer evaluations."""
    state_pass: bool
    final_state_ok: bool
    forbidden_violations: int
    answer_ok: bool
    passed: bool
    details: List[str] = []


def _normalize_text(text: str) -> str:
    """Normalize text by lowercasing and collapsing whitespace."""
    return " ".join(text.lower().split())


def grade_state_and_answer(
    conn: sqlite3.Connection,
    scenario: Scenario,
    trace: Trace,
) -> StateGradeResult:
    """Evaluate database state assertions and answer text.
    
    FR-GRADE-1: Checks final_state SQL queries and forbidden side-effect queries.
    FR-GRADE-2: Checks contains_all or regex on final_text for read-only tasks.
    """
    details: List[str] = []
    cur = conn.cursor()

    # 1. Evaluate final_state assertions
    final_state_ok = True
    for item in scenario.expected.final_state:
        sql = item["sql"]
        cur.execute(sql)
        if "equals" in item:
            expected_val = item["equals"]
            row = cur.fetchone()
            actual_val = row[0] if row else None
            if actual_val != expected_val:
                final_state_ok = False
                details.append(f"final_state failed: {sql} returned {actual_val}, expected {expected_val}")
        elif "rows" in item:
            expected_rows = [list(r) for r in item["rows"]]
            actual_rows = [list(r) for r in cur.fetchall()]
            if actual_rows != expected_rows:
                final_state_ok = False
                details.append(f"final_state rows mismatch: {sql} returned {actual_rows}, expected {expected_rows}")

    # 2. Evaluate forbidden side-effect checks
    forbidden_violations = 0
    for item in scenario.expected.forbidden:
        sql = item["sql"]
        cur.execute(sql)
        expected_val = item.get("equals", 0)
        row = cur.fetchone()
        actual_val = row[0] if row else None
        if actual_val != expected_val:
            forbidden_violations += 1
            details.append(f"forbidden violation: {sql} returned {actual_val}, expected {expected_val}")

    # 3. For unsolvable scenarios: require ZERO mutations
    if scenario.expected.unsolvable:
        mutating_calls = [
            tc for step in trace.steps for tc in step.tool_calls if tc.result.mutated
        ]
        if mutating_calls:
            final_state_ok = False
            forbidden_violations += len(mutating_calls)
            details.append(f"unsolvable scenario had {len(mutating_calls)} mutating calls")

    state_pass = final_state_ok and (forbidden_violations == 0)

    # 4. Answer check (FR-GRADE-2)
    answer_ok = True
    if scenario.expected.answer:
        final_text = trace.final_text or ""
        norm_final = _normalize_text(final_text)

        if "contains_all" in scenario.expected.answer:
            for term in scenario.expected.answer["contains_all"]:
                if _normalize_text(str(term)) not in norm_final:
                    answer_ok = False
                    details.append(f"answer check failed: missing required term '{term}'")

        if "regex" in scenario.expected.answer:
            pattern = scenario.expected.answer["regex"]
            if not re.search(pattern, final_text, re.IGNORECASE):
                answer_ok = False
                details.append(f"answer check failed: did not match regex '{pattern}'")

    passed = state_pass and answer_ok

    return StateGradeResult(
        state_pass=state_pass,
        final_state_ok=final_state_ok,
        forbidden_violations=forbidden_violations,
        answer_ok=answer_ok,
        passed=passed,
        details=details,
    )

