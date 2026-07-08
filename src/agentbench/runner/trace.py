"""Execution trace structures for AgentBench-Lite.

FR-TRACE-1: Complete execution trace per trial.
"""
from typing import Any, Dict, List, Optional
from pydantic import BaseModel, Field
from agentbench.agents.base import Usage
from agentbench.tools.models import ToolResult


class ToolCallRecord(BaseModel):
    """Detailed record of a single tool invocation and its result."""
    call_id: str
    tool: str
    arguments: Dict[str, Any]
    result: ToolResult


class StepTrace(BaseModel):
    """Trace record for a single agent turn."""
    step: int
    text: Optional[str] = None
    usage: Usage = Field(default_factory=Usage)
    latency_ms: float = 0.0
    tool_calls: List[ToolCallRecord] = Field(default_factory=list)


class Trace(BaseModel):
    """Full execution trace of a scenario trial."""
    run_id: str
    scenario_id: str
    trial: int = 0
    agent: str
    harness_version: str = "1.0.0"
    prompt_version: str = "1"
    terminated: str
    final_text: Optional[str] = None
    steps: List[StepTrace] = Field(default_factory=list)
    faults_fired: List[Dict[str, Any]] = Field(default_factory=list)
    grades: Dict[str, Any] = Field(default_factory=dict)

