"""Unit tests for Phase 2 tool layer, schemas, validation, and fault injection.

Covers FR-2, FR-3, FR-TOOL-1, FR-TOOL-2, FR-TOOL-3, FR-TOOL-4, FR-FAULT-1, FR-FAULT-2.
"""
import pytest

from agentbench.env.seed import dump, seed
from agentbench.tools.faults import FaultConfig, FaultInjector
from agentbench.tools.models import ErrorClass, TOOL_ARG_MODELS
from agentbench.tools.registry import ToolRegistry


def test_tool_defs_export():
    """FR-TOOL-2: Tool registry exports valid provider definitions."""
    conn = seed(42)
    try:
        registry = ToolRegistry(conn)
        openai_tools = registry.tool_defs(provider="openai")
        assert len(openai_tools) == len(TOOL_ARG_MODELS)
        assert all(t["type"] == "function" for t in openai_tools)
        assert all("parameters" in t["function"] for t in openai_tools)

        anthropic_tools = registry.tool_defs(provider="anthropic")
        assert len(anthropic_tools) == len(TOOL_ARG_MODELS)
        assert all("input_schema" in t for t in anthropic_tools)
    finally:
        conn.close()


def test_unknown_tool():
    """FR-TOOL-3: Calling an unregistered or disallowed tool returns UNKNOWN_TOOL."""
    conn = seed(42)
    try:
        registry = ToolRegistry(conn, allowed_tools=["get_user", "get_balance"])
        res = registry.call("transfer", {"from_user_id": 1, "to_user_id": 2, "amount": 10.0})
        assert res.error_class == ErrorClass.UNKNOWN_TOOL
        assert res.status_code is None
        assert "transfer" in res.body["message"]
        assert res.body["available_tools"] == ["get_balance", "get_user"]
    finally:
        conn.close()


def test_schema_violations():
    """FR-TOOL-3: Schema violations return clean error text without stack traces."""
    conn = seed(42)
    try:
        registry = ToolRegistry(conn)

        # 1. Non-dict arguments
        res = registry.call("get_user", "not_a_dict")
        assert res.error_class == ErrorClass.SCHEMA_VIOLATION
        assert res.status_code is None

        # 2. Missing required field
        res = registry.call("get_user", {})
        assert res.error_class == ErrorClass.SCHEMA_VIOLATION
        assert "user_id" in res.body["message"]
        assert "Traceback" not in res.body["message"]

        # 3. Wrong type
        res = registry.call("get_user", {"user_id": "twenty"})
        assert res.error_class == ErrorClass.SCHEMA_VIOLATION
        assert "user_id" in res.body["message"]

        # 4. Extra forbidden field
        res = registry.call("get_user", {"user_id": 1, "extra_field": "disallowed"})
        assert res.error_class == ErrorClass.SCHEMA_VIOLATION
        assert "extra_field" in res.body["message"]

        # 5. Value out of bounds (limit > 50)
        res = registry.call("list_users", {"limit": 100})
        assert res.error_class == ErrorClass.SCHEMA_VIOLATION
        assert "limit" in res.body["message"]
    finally:
        conn.close()


def test_successful_executions_and_mutation_flags():
    """FR-TOOL-1, FR-TOOL-3: Successful tool calls set error_class=OK and accurate mutated flag."""
    conn = seed(42)
    try:
        registry = ToolRegistry(conn)

        # Read-only call: mutated must be False
        res = registry.call("get_user", {"user_id": 1})
        assert res.error_class == ErrorClass.OK
        assert res.status_code == 200
        assert res.mutated is False

        # Mutating call: transfer updates state, mutated must be True
        res = registry.call("transfer", {"from_user_id": 1, "to_user_id": 2, "amount": 5.0})
        assert res.error_class == ErrorClass.OK
        assert res.status_code == 200
        assert res.mutated is True

        # Mutating call that fails semantically (insufficient funds): mutated must be False
        res = registry.call("transfer", {"from_user_id": 1, "to_user_id": 2, "amount": 999999.0})
        assert res.error_class == ErrorClass.API_4XX
        assert res.status_code == 400
        assert res.mutated is False
    finally:
        conn.close()


def test_fault_injection_nth_call_safe():
    """FR-FAULT-1, FR-FAULT-2: Fault nth_call with commit=False fails before execution."""
    conn = seed(42)
    try:
        fault = FaultConfig(tool="transfer", nth_call=2, times=1, error=503, commit=False)
        registry = ToolRegistry(conn, faults=[fault])

        dump_before = dump(conn)

        # Call 1: Success
        res1 = registry.call("transfer", {"from_user_id": 1, "to_user_id": 2, "amount": 5.0})
        assert res1.error_class == ErrorClass.OK
        assert res1.injected is False
        assert res1.mutated is True

        dump_after_1 = dump(conn)

        # Call 2: Injected 503 fault, commit=False -> state remains dump_after_1
        res2 = registry.call("transfer", {"from_user_id": 1, "to_user_id": 2, "amount": 5.0})
        assert res2.error_class == ErrorClass.API_5XX
        assert res2.status_code == 503
        assert res2.injected is True
        assert res2.mutated is False
        assert res2.body["error"] == "unavailable"
        assert dump(conn) == dump_after_1

        # Call 3: Recovery call succeeds
        res3 = registry.call("transfer", {"from_user_id": 1, "to_user_id": 2, "amount": 5.0})
        assert res3.error_class == ErrorClass.OK
        assert res3.injected is False
        assert res3.mutated is True

        # Registry recorded the fired fault
        assert len(registry.fault_injector.faults_fired) == 1
        record = registry.fault_injector.faults_fired[0]
        assert record.tool == "transfer"
        assert record.call_index == 2
        assert record.error == 503
        assert record.commit is False
    finally:
        conn.close()


def test_fault_injection_nth_call_ambiguous_commit():
    """FR-FAULT-1, FR-FAULT-2: Fault nth_call with commit=True executes and returns error."""
    conn = seed(42)
    try:
        # User 1 sends money to User 2 on 1st call; commit=True, error=500
        fault = FaultConfig(tool="transfer", nth_call=1, times=1, error=500, commit=True)
        registry = ToolRegistry(conn, faults=[fault])

        dump_before = dump(conn)

        res = registry.call("transfer", {"from_user_id": 1, "to_user_id": 2, "amount": 10.0})
        assert res.error_class == ErrorClass.API_5XX
        assert res.status_code == 500
        assert res.injected is True
        assert res.mutated is True  # Ambiguous failure mutated the DB!
        assert res.body["error"] == "internal_error"

        # The state MUST have changed despite returning 500
        assert dump(conn) != dump_before

        # Query balance to verify money moved
        bal_res = registry.call("get_balance", {"user_id": 2})
        assert bal_res.error_class == ErrorClass.OK
    finally:
        conn.close()


def test_fault_injection_probabilistic_determinism():
    """FR-FAULT-2: Probabilistic faults are 100% deterministic with same seed."""
    fault1 = FaultConfig(tool="get_balance", probability=0.5, error=500)
    fault2 = FaultConfig(tool="get_balance", probability=0.5, error=500)

    injector1 = FaultInjector([fault1], scenario_seed=42)
    injector2 = FaultInjector([fault2], scenario_seed=42)
    injector3 = FaultInjector([fault1], scenario_seed=999)

    seq1 = [injector1.check_fault("get_balance") is not None for _ in range(20)]
    seq2 = [injector2.check_fault("get_balance") is not None for _ in range(20)]
    seq3 = [injector3.check_fault("get_balance") is not None for _ in range(20)]

    # Same seed -> identical fault pattern
    assert seq1 == seq2
    # Different seed -> different fault pattern
    assert seq1 != seq3
