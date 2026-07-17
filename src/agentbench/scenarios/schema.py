"""Scenario schema definition for AgentBench-Lite.

FR-SCEN-1: Declarative scenario format.
"""
from typing import Any, Dict, List, Literal, Optional
from pydantic import BaseModel, Field
from agentbench.tools.faults import FaultConfig


class ScenarioLimits(BaseModel):
    """Execution limits for a scenario trial."""
    max_steps: int = 30
    max_tool_calls: int = 60
    max_total_tokens: int = 100_000


class ScenarioExpected(BaseModel):
    """Expected outcome and grading criteria."""
    unsolvable: bool = False
    optimal_steps: int = 1
    answer: Optional[Dict[str, Any]] = None
    final_state: List[Dict[str, Any]] = Field(default_factory=list)
    forbidden: List[Dict[str, Any]] = Field(default_factory=list)


class Scenario(BaseModel):
    """Declarative task specification."""
    id: str
    category: str = "lookup"
    difficulty: Literal["easy", "medium", "hard"] = "medium"
    seed: int = 42
    prompt: str
    tools: Optional[List[str]] = None
    faults: List[FaultConfig] = Field(default_factory=list)
    limits: ScenarioLimits = Field(default_factory=ScenarioLimits)
    expected: ScenarioExpected = Field(default_factory=ScenarioExpected)
    oracle: List[Dict[str, Any]] = Field(default_factory=list)
    oracle_text: Optional[str] = None

