"""Tool argument schemas and result models for AgentBench-Lite.

FR-TOOL-1, FR-TOOL-2:
Strict Pydantic argument validation models with extra="forbid".
Standardized ErrorClass enum and ToolResult structure.
"""
from enum import StrEnum
from typing import Any, Dict, Literal, Optional
from pydantic import BaseModel, ConfigDict, Field


class ErrorClass(StrEnum):
    OK = "OK"
    SCHEMA_VIOLATION = "SCHEMA_VIOLATION"  # Args failed Pydantic validation
    UNKNOWN_TOOL = "UNKNOWN_TOOL"          # Tool name not in scenario allowed tools
    API_4XX = "API_4XX"                    # Semantic error from mock API (e.g. 404, 400, 409)
    API_5XX = "API_5XX"                    # Server-side or injected error (e.g. 500, 503)


class ToolResult(BaseModel):
    """Result of a single tool invocation."""
    call_id: str = ""
    tool: str
    error_class: ErrorClass
    status_code: Optional[int] = None
    body: Dict[str, Any]
    injected: bool = False
    mutated: bool = False
    latency_ms: float = 0.0


# --- Tool Argument Models ---

class StrictArgsModel(BaseModel):
    """Base model forbidding extra/unknown arguments."""
    model_config = ConfigDict(extra="forbid")


class ListUsersArgs(StrictArgsModel):
    """Arguments for listing and filtering users."""
    signup_before: Optional[str] = Field(
        default=None,
        description="Filter users who signed up before this date (YYYY-MM-DD)",
        pattern=r"^\d{4}-\d{2}-\d{2}$",
    )
    signup_after: Optional[str] = Field(
        default=None,
        description="Filter users who signed up after this date (YYYY-MM-DD)",
        pattern=r"^\d{4}-\d{2}-\d{2}$",
    )
    status: Optional[Literal["active", "suspended", "closed"]] = Field(
        default=None,
        description="Filter users by account status",
    )
    limit: int = Field(default=20, ge=1, le=50, description="Max users to return (1-50)")
    offset: int = Field(default=0, ge=0, description="Pagination offset (>=0)")


class GetUserArgs(StrictArgsModel):
    """Arguments for retrieving user profile."""
    user_id: int = Field(description="Unique ID of the user")


class GetBalanceArgs(StrictArgsModel):
    """Arguments for checking user account balance."""
    user_id: int = Field(description="Unique ID of the user")


class GetTransactionsArgs(StrictArgsModel):
    """Arguments for retrieving user transaction history."""
    user_id: int = Field(description="Unique ID of the user")
    limit: int = Field(default=10, ge=1, le=50, description="Max transactions to return (1-50)")


class TransferArgs(StrictArgsModel):
    """Arguments for transferring money between active accounts."""
    from_user_id: int = Field(description="Sender user ID (must be active)")
    to_user_id: int = Field(description="Recipient user ID (must be active)")
    amount: float = Field(gt=0, description="Transfer amount in dollars (e.g. 15.50, max 2 decimals)")


class UpdateStatusArgs(StrictArgsModel):
    """Arguments for updating user account status."""
    user_id: int = Field(description="Target user ID")
    status: Literal["active", "suspended", "closed"] = Field(description="New account status")


class SendNotificationArgs(StrictArgsModel):
    """Arguments for sending a notification to an active or suspended user."""
    user_id: int = Field(description="Target user ID")
    message: str = Field(min_length=1, max_length=280, description="Notification message (1-280 chars)")


TOOL_ARG_MODELS: Dict[str, type[StrictArgsModel]] = {
    "list_users": ListUsersArgs,
    "get_user": GetUserArgs,
    "get_balance": GetBalanceArgs,
    "get_transactions": GetTransactionsArgs,
    "transfer": TransferArgs,
    "update_status": UpdateStatusArgs,
    "send_notification": SendNotificationArgs,
}

