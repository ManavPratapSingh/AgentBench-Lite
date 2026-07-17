"""Contract violation grader for AgentBench-Lite.

FR-GRADE-4:
Counts schema violations, unknown tools, non-injected 4xx/5xx errors,
and hallucinated entity IDs.
"""
import re
from typing import Any, Dict, List, Set
from pydantic import BaseModel
from agentbench.runner.trace import Trace
from agentbench.scenarios.schema import Scenario
from agentbench.tools.models import ErrorClass

ID_KEYS = {"id", "from_user", "to_user"}


def _extract_ids_from_obj(obj: Any, found_ids: Set[int]) -> None:
    """Recursively extract entity IDs from JSON-like tool response structures."""
    if isinstance(obj, dict):
        for k, v in obj.items():
            if (k in ID_KEYS or k.endswith("_id")) and isinstance(v, int):
                found_ids.add(v)
            _extract_ids_from_obj(v, found_ids)
    elif isinstance(obj, list):
        for item in obj:
            _extract_ids_from_obj(item, found_ids)


class ContractGradeResult(BaseModel):
    """Counts of contract violations throughout trial execution."""
    schema_violations: int = 0
    unknown_tools: int = 0
    api_4xx: int = 0
    api_5xx: int = 0
    hallucinated_ids: int = 0


def grade_contracts(scenario: Scenario, trace: Trace) -> ContractGradeResult:
    """Audit tool calls for contract violations and hallucinated IDs.
    
    FR-GRADE-4:
    Tracks schema violations, unknown tools, API 4xx/5xx, and fabricated IDs.
    """
    schema_violations = 0
    unknown_tools = 0
    api_4xx = 0
    api_5xx = 0
    hallucinated_ids = 0

    # Seed known IDs from numbers mentioned in prompt
    known_ids: Set[int] = {int(x) for x in re.findall(r"\b\d+\b", scenario.prompt)}

    target_id_args = {"user_id", "from_user_id", "to_user_id"}

    for step in trace.steps:
        for tc in step.tool_calls:
            err = tc.result.error_class
            injected = tc.result.injected

            if err == ErrorClass.SCHEMA_VIOLATION:
                schema_violations += 1
            elif err == ErrorClass.UNKNOWN_TOOL:
                unknown_tools += 1
            elif err == ErrorClass.API_4XX and not injected:
                api_4xx += 1
            elif err == ErrorClass.API_5XX and not injected:
                api_5xx += 1

            # Check for hallucinated IDs
            for arg_name, arg_val in tc.arguments.items():
                if arg_name in target_id_args and isinstance(arg_val, int):
                    if arg_val not in known_ids:
                        hallucinated_ids += 1

            # Add IDs revealed by this tool's response body
            _extract_ids_from_obj(tc.result.body, known_ids)

    return ContractGradeResult(
        schema_violations=schema_violations,
        unknown_tools=unknown_tools,
        api_4xx=api_4xx,
        api_5xx=api_5xx,
        hallucinated_ids=hallucinated_ids,
    )
