"""OpenAI provider agent adapter for AgentBench-Lite.

FR-AGENT-1, FR-AGENT-3:
Thin swappable adapter targeting OpenAI Chat Completions API.
Parses tool calls safely, preserving raw string on malformed JSON.
"""
import json
import os
import time
from typing import Any, Dict, List, Optional
from agentbench.agents.base import AgentError, AgentTurn, ToolCall, Usage


class OpenAIAgent:
    """Agent adapter for OpenAI-compatible LLM endpoints."""

    def __init__(
        self,
        model: str = "gpt-4o-mini",
        api_key: Optional[str] = None,
        base_url: Optional[str] = None,
        temperature: float = 0.0,
        max_tokens: int = 1024,
    ):
        self.model = model
        self.name = f"openai:{model}"
        self.api_key = api_key or os.environ.get("OPENAI_API_KEY")
        self.base_url = base_url or os.environ.get("OPENAI_BASE_URL", "https://api.openai.com/v1")
        self.temperature = temperature
        self.max_tokens = max_tokens

    def step(self, messages: List[Dict[str, Any]], tools: List[Dict[str, Any]]) -> AgentTurn:
        """Call OpenAI chat completion API and translate response into AgentTurn."""
        if not self.api_key:
            raise AgentError("Missing OPENAI_API_KEY", kind="auth_error")

        # ponytail: use urllib.request from stdlib instead of adding full openai SDK dependency
        import urllib.request
        import urllib.error

        url = f"{self.base_url.rstrip('/')}/chat/completions"
        payload = {
            "model": self.model,
            "messages": messages,
            "tools": tools if tools else None,
            "temperature": self.temperature,
            "max_tokens": self.max_tokens,
        }
        # Filter None values
        payload = {k: v for k, v in payload.items() if v is not None}
        data = json.dumps(payload).encode("utf-8")

        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {self.api_key}",
        }
        req = urllib.request.Request(url, data=data, headers=headers, method="POST")

        t0 = time.perf_counter()
        try:
            with urllib.request.urlopen(req, timeout=60) as resp:
                status = resp.status
                body = json.loads(resp.read().decode("utf-8"))
        except urllib.error.HTTPError as e:
            err_body = e.read().decode("utf-8", errors="replace")
            kind = "rate_limit" if e.code == 429 else "server_error" if e.code >= 500 else "client_error"
            raise AgentError(f"HTTP {e.code}: {err_body}", kind=kind)
        except Exception as e:
            raise AgentError(f"Network error: {str(e)}", kind="network_error")
        latency = (time.perf_counter() - t0) * 1000.0

        choice = body.get("choices", [{}])[0].get("message", {})
        text = choice.get("content")
        raw_tool_calls = choice.get("tool_calls", [])

        tool_calls = []
        for rtc in raw_tool_calls:
            cid = rtc.get("id", "call_default")
            fn = rtc.get("function", {})
            fname = fn.get("name", "")
            raw_args = fn.get("arguments", "{}")
            try:
                parsed_args = json.loads(raw_args)
            except Exception:
                # FR-AGENT-1: Invalid JSON preserved as __raw__
                parsed_args = {"__raw__": raw_args}
            tool_calls.append(ToolCall(id=cid, name=fname, arguments=parsed_args))

        usage_dict = body.get("usage", {})
        usage = Usage(
            input_tokens=usage_dict.get("prompt_tokens", 0),
            output_tokens=usage_dict.get("completion_tokens", 0),
        )

        return AgentTurn(text=text, tool_calls=tool_calls, usage=usage, latency_ms=latency)
