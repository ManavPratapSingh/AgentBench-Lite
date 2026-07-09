"""Tool registry managing validation, execution, and fault injection.

FR-TOOL-1, FR-TOOL-2, FR-TOOL-3:
Single source of truth for tool definitions.
Pydantic validation with clean, stable schema violation errors.
Seeded fault injection with safe (commit=False) and ambiguous (commit=True) failures.
Never raises to caller on agent errors.
"""
import sqlite3
from typing import Any, Dict, List, Optional, Set
from pydantic import ValidationError

from agentbench.env import api
from agentbench.tools.faults import FaultConfig, FaultInjector
from agentbench.tools.models import (
    ErrorClass,
    TOOL_ARG_MODELS,
    ToolResult,
)

MUTATING_TOOLS: Set[str] = {"transfer", "update_status", "send_notification"}

API_DISPATCH = {
    "list_users": api.list_users,
    "get_user": api.get_user,
    "get_balance": api.get_balance,
    "get_transactions": api.get_transactions,
    "transfer": api.transfer,
    "update_status": api.update_status,
    "send_notification": api.send_notification,
}


def _clean_validation_error(e: ValidationError) -> str:
    """Format Pydantic ValidationError into a short, stable message <= 300 chars."""
    messages = []
    for err in e.errors():
        loc = ".".join(str(x) for x in err["loc"]) if err["loc"] else "root"
        messages.append(f"{loc}: {err['msg']}")
    full_msg = "; ".join(messages)
    # ponytail: short stable error text without stack traces
    return full_msg[:300]


class ToolRegistry:
    """Central registry for tool schemas, validation, execution, and faults."""

    def __init__(
        self,
        conn: sqlite3.Connection,
        allowed_tools: Optional[List[str]] = None,
        faults: Optional[List[FaultConfig]] = None,
        scenario_seed: int = 0,
    ):
        self.conn = conn
        self.allowed_tools: Set[str] = (
            set(allowed_tools) if allowed_tools is not None else set(TOOL_ARG_MODELS.keys())
        )
        self.fault_injector = FaultInjector(faults=faults, scenario_seed=scenario_seed)

    def call(self, name: str, raw_args: Any, call_id: str = "") -> ToolResult:
        """Validate arguments and invoke tool against environment.
        
        FR-TOOL-3: Classifies call into exactly one ErrorClass.
        Never raises exceptions for agent-caused errors.
        """
        # 1. Unknown tool
        if name not in self.allowed_tools or name not in TOOL_ARG_MODELS:
            return ToolResult(
                call_id=call_id,
                tool=name,
                error_class=ErrorClass.UNKNOWN_TOOL,
                status_code=None,
                body={
                    "error": "unknown_tool",
                    "message": f"Tool '{name}' is not recognized or not allowed",
                    "available_tools": sorted(list(self.allowed_tools)),
                },
                injected=False,
                mutated=False,
            )

        # 2. Schema validation
        args_cls = TOOL_ARG_MODELS[name]
        if not isinstance(raw_args, dict):
            return ToolResult(
                call_id=call_id,
                tool=name,
                error_class=ErrorClass.SCHEMA_VIOLATION,
                status_code=None,
                body={
                    "error": "schema_violation",
                    "message": "Tool arguments must be a JSON object / dictionary",
                },
                injected=False,
                mutated=False,
            )

        try:
            validated_args = args_cls.model_validate(raw_args)
        except ValidationError as e:
            # Notice: even schema-invalid calls increment the fault counter
            self.fault_injector.call_counts[name] += 1
            return ToolResult(
                call_id=call_id,
                tool=name,
                error_class=ErrorClass.SCHEMA_VIOLATION,
                status_code=None,
                body={
                    "error": "schema_violation",
                    "message": _clean_validation_error(e),
                },
                injected=False,
                mutated=False,
            )

        # 3. Check fault injection
        fault = self.fault_injector.check_fault(name)
        if fault is not None:
            err_class = ErrorClass.API_4XX if fault.error == 429 else ErrorClass.API_5XX
            err_body = FaultInjector.error_body(fault.error)

            if not fault.commit:
                # Fail before executing: safe to retry
                return ToolResult(
                    call_id=call_id,
                    tool=name,
                    error_class=err_class,
                    status_code=fault.error,
                    body=err_body,
                    injected=True,
                    mutated=False,
                )
            else:
                # Ambiguous failure: execute first, then return error
                status_code, _ = API_DISPATCH[name](self.conn, **validated_args.model_dump())
                did_mutate = (name in MUTATING_TOOLS) and (status_code == 200)
                return ToolResult(
                    call_id=call_id,
                    tool=name,
                    error_class=err_class,
                    status_code=fault.error,
                    body=err_body,
                    injected=True,
                    mutated=did_mutate,
                )

        # 4. Normal execution
        try:
            status_code, body = API_DISPATCH[name](self.conn, **validated_args.model_dump())
        except Exception as e:
            # ponytail: catch unexpected harness DB errors and return 500 without crashing
            return ToolResult(
                call_id=call_id,
                tool=name,
                error_class=ErrorClass.API_5XX,
                status_code=500,
                body={"error": "internal_error", "message": str(e)},
                injected=False,
                mutated=False,
            )

        err_class = ErrorClass.OK if status_code == 200 else ErrorClass.API_4XX
        did_mutate = (name in MUTATING_TOOLS) and (status_code == 200)

        return ToolResult(
            call_id=call_id,
            tool=name,
            error_class=err_class,
            status_code=status_code,
            body=body,
            injected=False,
            mutated=did_mutate,
        )

    def tool_defs(self, provider: str = "openai") -> List[Dict[str, Any]]:
        """Export tool definitions for LLM provider function calling."""
        defs = []
        for name in sorted(self.allowed_tools):
            if name not in TOOL_ARG_MODELS:
                continue
            model_cls = TOOL_ARG_MODELS[name]
            schema = model_cls.model_json_schema()
            description = model_cls.__doc__ or f"Execute {name}"

            if provider == "openai":
                defs.append(
                    {
                        "type": "function",
                        "function": {
                            "name": name,
                            "description": description,
                            "parameters": schema,
                        },
                    }
                )
            elif provider == "anthropic":
                defs.append(
                    {
                        "name": name,
                        "description": description,
                        "input_schema": schema,
                    }
                )
            else:
                defs.append({"name": name, "description": description, "parameters": schema})
        return defs
