"""VCR-style record and replay cassette mechanisms for AgentBench-Lite.

FR-AGENT-4, FR-TRACE-3:
Exact replay of agent turns keyed by SHA-256 hash of canonical request.
Replay mode makes zero network calls and guarantees byte-identical results.
"""
import hashlib
import json
from pathlib import Path
from typing import Any, Dict, List, Optional
from pydantic import BaseModel

from agentbench.agents.base import Agent, AgentTurn
from agentbench.agents.prompts import PROMPT_VERSION, SYSTEM_PROMPT


def _canonical_json(obj: Any) -> str:
    """Format object into canonical JSON with sorted keys and no whitespace."""
    return json.dumps(obj, sort_keys=True, separators=(",", ":"))


def compute_cassette_key(
    model: str,
    messages: List[Dict[str, Any]],
    tools: List[Dict[str, Any]],
    prompt_version: str = PROMPT_VERSION,
    params: Optional[Dict[str, Any]] = None,
) -> str:
    """Generate deterministic SHA-256 key for an agent inference turn."""
    req = {
        "model": model,
        "prompt_version": prompt_version,
        "messages": messages,
        "tools": tools,
        "params": params or {},
    }
    raw = _canonical_json(req).encode("utf-8")
    return hashlib.sha256(raw).hexdigest()


class CassetteMiss(Exception):
    """Raised when replaying an agent turn that has no stored cassette."""
    def __init__(self, key: str, path: Path):
        super().__init__(f"Cassette miss for key '{key}' at '{path}'. Offline replay requires recorded cassette.")
        self.key = key
        self.path = path


class RecordingAgent:
    """Wraps an agent and writes each turn to a cassette on disk."""

    def __init__(self, inner: Agent, cassette_dir: Path | str):
        self.inner = inner
        self.name = inner.name
        self.cassette_dir = Path(cassette_dir)
        # Model slug e.g. "openai_gpt-4o-mini"
        self.model_slug = inner.name.replace(":", "_").replace("/", "_")
        self.target_dir = self.cassette_dir / self.model_slug
        self.target_dir.mkdir(parents=True, exist_ok=True)

    def step(self, messages: List[Dict[str, Any]], tools: List[Dict[str, Any]]) -> AgentTurn:
        turn = self.inner.step(messages, tools)
        key = compute_cassette_key(model=self.inner.name, messages=messages, tools=tools)
        filepath = self.target_dir / f"{key}.json"

        # ponytail: record turn and metadata with zero secrets or auth headers
        cassette_data = {
            "key": key,
            "turn": turn.model_dump(),
            "recorded_with": {"model": self.inner.name, "date": "2025-06-01"},
        }
        with filepath.open("w", encoding="utf-8") as f:
            f.write(_canonical_json(cassette_data))

        return turn


class ReplayAgent:
    """Replays agent turns strictly from cassettes without contacting any network."""

    def __init__(self, model_name: str, cassette_dir: Path | str):
        self.name = model_name
        self.cassette_dir = Path(cassette_dir)
        self.model_slug = model_name.replace(":", "_").replace("/", "_")
        self.target_dir = self.cassette_dir / self.model_slug

    def step(self, messages: List[Dict[str, Any]], tools: List[Dict[str, Any]]) -> AgentTurn:
        key = compute_cassette_key(model=self.name, messages=messages, tools=tools)
        filepath = self.target_dir / f"{key}.json"

        if not filepath.is_file():
            raise CassetteMiss(key=key, path=filepath)

        with filepath.open("r", encoding="utf-8") as f:
            data = json.load(f)

        turn_dict = data["turn"]
        # In replay mode, latency is fixed to cassette's recorded latency (or 0.0)
        return AgentTurn.model_validate(turn_dict)
