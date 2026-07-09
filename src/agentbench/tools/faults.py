"""Deterministic fault injection for AgentBench-Lite tools.

FR-FAULT-1, FR-FAULT-2:
Declared in scenario YAML.
Counters are per-tool and increment on every call.
Deterministic probability via SHA-256 seed derivation.
"""
from collections import defaultdict
import hashlib
import random
from typing import Any, Dict, List, Literal, Optional
from pydantic import BaseModel, Field, model_validator


class FaultConfig(BaseModel):
    """Configuration for an injected tool fault."""
    tool: str
    nth_call: Optional[int] = Field(default=None, ge=1)
    times: int = Field(default=1, ge=1)
    probability: Optional[float] = Field(default=None, ge=0.0, le=1.0)
    error: Literal[429, 500, 503]
    commit: bool = False

    @model_validator(mode="after")
    def check_trigger_mode(self) -> "FaultConfig":
        has_nth = self.nth_call is not None
        has_prob = self.probability is not None
        if has_nth == has_prob:
            raise ValueError("FaultConfig must define exactly one of 'nth_call' or 'probability'")
        return self


class FaultRecord(BaseModel):
    """Record of a fired fault during trial execution."""
    tool: str
    call_index: int
    error: int
    commit: bool


class FaultInjector:
    """Manages per-trial tool invocation counts and fires declared faults."""

    def __init__(self, faults: Optional[List[FaultConfig]] = None, scenario_seed: int = 0):
        self.faults = faults or []
        self.scenario_seed = scenario_seed
        self.call_counts: Dict[str, int] = defaultdict(int)
        self.faults_fired: List[FaultRecord] = []

    def check_fault(self, tool_name: str) -> Optional[FaultConfig]:
        """Check if a fault triggers for this tool invocation.
        
        Increments the per-tool call counter (1-indexed).
        """
        self.call_counts[tool_name] += 1
        current_count = self.call_counts[tool_name]

        for fault in self.faults:
            if fault.tool != tool_name:
                continue

            triggered = False
            if fault.nth_call is not None:
                if fault.nth_call <= current_count < fault.nth_call + fault.times:
                    triggered = True
            elif fault.probability is not None:
                # FR-FAULT-2: Seed derived from scenario_seed:tool:index
                key = f"{self.scenario_seed}:{tool_name}:{current_count}".encode("utf-8")
                seed_int = int.from_bytes(hashlib.sha256(key).digest()[:8], "big")
                # ponytail: isolated local seeded RNG for reproducible probability
                local_rng = random.Random(seed_int)
                if local_rng.random() < fault.probability:
                    triggered = True

            if triggered:
                self.faults_fired.append(
                    FaultRecord(
                        tool=tool_name,
                        call_index=current_count,
                        error=fault.error,
                        commit=fault.commit,
                    )
                )
                return fault

        return None

    @staticmethod
    def error_body(status_code: int) -> Dict[str, Any]:
        """Return standardized error body for injected faults."""
        if status_code == 429:
            return {"error": "rate_limited", "retry_after_s": 1}
        if status_code == 500:
            return {"error": "internal_error"}
        if status_code == 503:
            return {"error": "unavailable"}
        return {"error": "error"}
