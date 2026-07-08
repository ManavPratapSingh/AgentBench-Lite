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
