# Architectural Decisions

### D-001: In-Memory SQLite with Seeded PRNG
- **Context:** The harness requires fast, isolated, deterministic database state per trial.
- **Decision:** Use `sqlite3.connect(":memory:")` populated by a local `random.Random(seed)`.
- **Alternatives Considered:** Dockerized PostgreSQL per trial (slow, high overhead, network dependencies); file-based SQLite (IO overhead, cleanup complexity).
- **Trade-offs:** Fast (<1ms per seed) and 100% deterministic, but limited to single-machine SQLite SQL dialect.
- **Status:** Active

### D-002: Injected Constant Clock
- **Context:** Agent evaluations often compare timestamps or filter by signup dates. Calling system time introduces non-determinism across runs.
- **Decision:** Use a constant `FAKE_NOW = "2025-06-01T00:00:00Z"`.
- **Alternatives Considered:** Freezegun/libfaketime (external dependencies, complex monkeypatching).
- **Trade-offs:** Pure stdlib zero-cost determinism, but requires discipline never to call `datetime.now()` in business logic.
- **Status:** Active

### D-003: Integer Cents in DB, Dollars in Tool Interface
- **Context:** LLMs reason in decimal dollars (e.g., $10.50), but floating-point arithmetic in databases causes precision errors and non-determinism.
- **Decision:** Store `balance_cents` and `amount_cents` in integer cents; convert to/from float dollars at the API boundary with strict validation.
- **Trade-offs:** Extra conversion step in tools, but guarantees exact balances and clean SQLite CHECK constraints.
- **Status:** Active

### D-004: Pydantic Single Source of Truth for Tool Defs & Validation
- **Context:** LLMs require provider-specific JSON schemas (e.g. OpenAI function calling, Anthropic tool definitions), while tool execution requires type and bounds validation. Maintaining separate schemas invites drift.
- **Decision:** Define one Pydantic model (`StrictArgsModel`) per tool with `extra="forbid"`. Automatically generate OpenAI/Anthropic schemas via `model_json_schema()` and validate incoming agent arguments against the same class.
- **Alternatives Considered:** Manual JSON schema dicts + jsonschema validator; raw python type annotations.
- **Trade-offs:** Pydantic is an external dependency, but eliminates schema drift and outputs standard JSON Schema.
- **Status:** Active

### D-005: Dual Fault Modes (Safe vs Ambiguous)
- **Context:** In real distributed architectures, network/server errors can occur before processing (safe to retry) or after committing (retrying causes double-spend/duplication).
- **Decision:** Support `commit: false` (pre-execution failure) and `commit: true` (execute SQL, then return 500/503).
- **Alternatives Considered:** Only pre-execution failures (cannot test agent idempotency or state verification).
- **Trade-offs:** Ambiguous failures require agents to verify database state before retrying, making scenario evaluation realistic.
- **Status:** Active

### D-006: Harness Ownership of Run Termination
- **Context:** Agents can hallucinate loops, stall, or refuse to stop. If an agent manages its own lifecycle, broken agents run forever or exhaust budgets.
- **Decision:** The runner loop strictly dictates termination using a closed set of reasons (`final_answer`, `max_steps`, `max_tool_calls`, `token_budget`, `loop`, `agent_error`, `harness_error`).
- **Alternatives Considered:** Letting agents declare when they are stuck; arbitrary timeout threads.
- **Trade-offs:** Enforces deterministic stopping conditions, making test runs predictable and finite.
- **Status:** Active

### D-007: Stdlib Urllib for OpenAI-Compatible Adapter
- **Context:** The harness needs an adapter for OpenAI chat completions, but importing the heavy `openai` package brings dozens of transitive dependencies.
- **Decision:** Implement `OpenAIAgent` using Python's stdlib `urllib.request`.
- **Alternatives Considered:** Adding `openai>=1.0` dependency.
- **Trade-offs:** Zero extra dependencies, minimal footprint, and direct control over payload formatting and JSON error translation.
- **Status:** Active

