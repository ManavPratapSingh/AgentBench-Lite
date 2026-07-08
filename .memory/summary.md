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
