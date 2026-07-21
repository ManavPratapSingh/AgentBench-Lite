"""Agents package for AgentBench-Lite."""
from agentbench.agents.base import Agent, AgentError, AgentTurn, ToolCall, Usage
from agentbench.agents.cassette import (
    CassetteMiss,
    RecordingAgent,
    ReplayAgent,
    compute_cassette_key,
)
from agentbench.agents.prompts import PROMPT_VERSION, SYSTEM_PROMPT
from agentbench.agents.scripted import LoopAgent, NoopAgent, OvereagerAgent, ScriptedAgent
from agentbench.agents.openai_agent import OpenAIAgent

__all__ = [
    "Agent",
    "AgentError",
    "AgentTurn",
    "CassetteMiss",
    "LoopAgent",
    "NoopAgent",
    "OpenAIAgent",
    "OvereagerAgent",
    "PROMPT_VERSION",
    "RecordingAgent",
    "ReplayAgent",
    "SYSTEM_PROMPT",
    "ScriptedAgent",
    "ToolCall",
    "Usage",
    "compute_cassette_key",
]

