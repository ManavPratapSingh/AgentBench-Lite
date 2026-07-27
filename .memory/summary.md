# AgentBench-Lite Project Summary

AgentBench-Lite is a deterministic, multi-turn tool-use evaluation harness for AI agents.
It replaces brittle and expensive LLM-as-judge grading with exact SQLite state assertions, deterministic seeding, and offline replay cassettes.

### Completed Subsystems
- **Deterministic Environment (Phase 1)**:
  - Seed-controlled in-memory SQLite schema (`users`, `accounts`, `transactions`, `notifications`, `audit_log`).
  - Strict CHECK constraints and foreign keys enabled.
  - Frozen clock (`FAKE_NOW = "2025-06-01T00:00:00Z"`).
  - Isolated seeded PRNG (`random.Random(seed)`).
  - 7 REST-like mock tools (`list_users`, `get_user`, `get_balance`, `get_transactions`, `transfer`, `update_status`, `send_notification`).
  - Atomic transactions with audit logging for mutating actions.

- **Tool Layer (Phase 2)**:
  - Pydantic models for argument schemas (`extra="forbid"`).
  - Provider schema export (`tool_defs(provider="openai"|"anthropic")`).
  - Tool classification into closed `ErrorClass` (`OK`, `SCHEMA_VIOLATION`, `UNKNOWN_TOOL`, `API_4XX`, `API_5XX`).
  - Deterministic seeded fault injection with per-tool call counters, support for `commit: false` and `commit: true` ambiguous failures.
  - Zero unhandled exceptions returned to callers on agent mistakes.

- **Agent Interface & Runner Loop (Phase 3)**:
  - `Agent` protocol and `AgentTurn` / `ToolCall` / `Usage` models.
  - Standardized `SYSTEM_PROMPT` and `PROMPT_VERSION = "1"`.
  - Test doubles: `ScriptedAgent` (oracle player), `NoopAgent`, `OvereagerAgent`, `LoopAgent`.
  - `OpenAIAgent` adapter implemented cleanly via stdlib `urllib.request`.
  - Multi-turn execution loop `run_task` enforcing limits (`max_steps`, `max_tool_calls`, `max_total_tokens`).
  - 3-consecutive-call loop detection over `(tool, canonical_args, result_body)`.
  - Closed set of termination reasons and complete `Trace` serialization.

- **Scenarios & Graders (Phase 4)**:
  - State and answer grader (`grade_state_and_answer`) with SQL row/count checks and `forbidden` side-effect assertions.
  - Path efficiency grader (`grade_efficiency`) calculating optimal/actual steps and redundant call detection.
  - Contract grader (`grade_contracts`) auditing schema violations, API errors, and hallucinated IDs.
  - Recovery grader (`grade_recovery`) measuring safe vs ambiguous fault recovery.
  - Failure taxonomy (`classify_failure`) with 9-priority root-cause categorization.
  - 52 deterministic scenarios generated across 8 categories (lookup, multi_hop, conditional_act, aggregate_act, ambiguity, unsolvable, trap, fault), all strictly verified against non-vacuous criteria.

- **Runner Pool, Record/Replay & CLI (Phase 5)**:
  - Model pricing configuration (`config/models.yaml`, `calculate_cost`).
  - SHA-256 canonical message/tools hashing for replay keys (`compute_cassette_key`).
  - `RecordingAgent` and `ReplayAgent` wrappers for recording live completions and offline replay.
  - Byte-for-byte replay determinism via pinned 0.0 ms replay latency.
  - Multi-worker concurrent trial runner (`run_suite` with `ThreadPoolExecutor`).
  - Thread-isolated in-memory SQLite per trial.
  - Unified Typer CLI (`agentbench seed`, `agentbench validate-scenarios`, `agentbench generate-scenarios`, `agentbench run`).

- **Reporting & Failure Taxonomy (Phase 6)**:
  - Statistical foundation (`stats.py`): Wilson 95% score CI, pass@k, pass^k, nearest-rank percentiles (p50/p95/p99).
  - Run aggregation (`aggregate.py`): groups metrics by difficulty and category, aggregates failure taxonomy, extracts 5 worst scenarios with trace excerpts.
  - Markdown report generation (`markdown.py`): 6-section formatted `report.md`.
  - Side-by-side run comparison (`compare.py`): calculates deltas on all headline metrics and enumerates regressions / improvements.
  - Golden snapshot testing (`tests/golden/run_fixture/`): fixture run verified against committed `report.md`.




