# SPEC.md — AgentBench-Lite

**Deterministic Multi-Turn Tool-Use & Agent Evaluation Harness**
Spec version: 1.0 · Companion to `PLAN.md` (PLAN = how/when to build; SPEC = what must be true when it's built)

Keywords **MUST**, **MUST NOT**, **SHOULD**, **MAY** are used as in RFC 2119. Every requirement has an ID (e.g. `FR-ENV-3`) so tests, commits and explainer chapters can reference it.

---

## 1. Purpose and scope

### 1.1 Purpose
Evaluate an LLM agent on multi-step, multi-turn tool-use tasks against a **deterministic mock environment**, and report whether it succeeded, how efficiently, and how it failed, in a way that is reproducible and cheap to re-run.

### 1.2 In scope
- Seeded mock environment (SQLite) exposed through typed tools that mimic a REST API
- Tool-argument validation, error classification, seeded fault injection
- Provider-agnostic agent interface, a scripted test-double agent, record/replay of LLM calls
- Per-task runner with step limits, loop detection, and full traces
- Scenario format, hand-written and template-generated scenarios
- State-based graders (final-state, efficiency, contract violations, recovery)
- Result aggregation, failure taxonomy, markdown report, run-vs-run comparison
- CLI, Docker, CI

### 1.3 Non-goals
- No LLM-as-judge. No grading of prose quality or tone.
- No real network services, real databases, browsers, or filesystem tools for the agent.
- No web UI, no persistent server, no vector store, no training/fine-tuning.
- No attempt to be a general benchmark; it is a reference harness with a synthetic domain.

### 1.4 Definitions
| Term | Meaning |
|---|---|
| **Scenario** | One task: prompt + seed + allowed tools + faults + expected outcome. |
| **Trial** | One execution of one scenario by one agent. A scenario may have N trials. |
| **Step** | One agent turn (one model call), regardless of how many tool calls it emits. |
| **Tool call** | One invocation of one tool by the agent. |
| **Mutating tool** | A tool that changes DB state: `transfer`, `update_status`, `send_notification`. |
| **Oracle** | A scripted, known-correct tool-call sequence for a scenario. |
| **Cassette** | A stored LLM response keyed by a hash of the full request. |
| **Fault** | An injected tool failure declared by the scenario. |

---

## 2. Global requirements

### 2.1 Functional (summary; detailed in later sections)
| ID | Requirement |
|---|---|
| FR-1 | The environment MUST be fully determined by `(seed)`; same seed → byte-identical DB. |
| FR-2 | Every tool call MUST be validated and classified into exactly one error class. |
| FR-3 | Faults MUST be declared in the scenario and be reproducible. |
| FR-4 | The harness, not the agent, MUST own termination. |
| FR-5 | Success MUST be decided by DB state (and, for read-only tasks, a structured answer check), never by an LLM. |
| FR-6 | Each trial MUST run in its own isolated, freshly seeded DB. |
| FR-7 | A full suite MUST be runnable offline from cassettes with byte-identical output. |
| FR-8 | Every trial MUST emit a complete trace and one result row. |
| FR-9 | Reports MUST include confidence intervals and a failure taxonomy. |

### 2.2 Non-functional
| ID | Requirement |
|---|---|
| NFR-1 | **Determinism:** two runs of `make bench-replay` MUST produce `results.jsonl` with identical SHA-256. |
| NFR-2 | **Speed:** replay of 100 scenarios × 1 trial SHOULD complete in < 60 s on a laptop. |
| NFR-3 | **Isolation:** no shared mutable state between trials; concurrency MUST NOT change results. |
| NFR-4 | **Offline tests:** unit tests and replay mode MUST work with networking disabled (enforced in tests). |
| NFR-5 | **Secrets:** API keys come from environment variables only and MUST NOT appear in traces, cassettes, logs or reports. |
| NFR-6 | **Quality:** `ruff`, type checker, and `pytest` pass in CI; coverage ≥ 85% on `env/`, `tools/`, `graders/`, `runner/`. |
| NFR-7 | **Portability:** Python ≥ 3.11; runs on Linux/macOS; Docker image runs as non-root. |
| NFR-8 | **Minimal deps:** `pydantic>=2`, `pyyaml`, `typer`; provider SDKs as optional extras; dev: `pytest`, `ruff`, `mypy`/`pyright`. |

---

## 3. Architecture

```
scenario.yaml ─► Runner ──messages,tools──► Agent (OpenAI | Anthropic | Scripted | Replay)
                   │  ◄──AgentTurn(tool_calls)──┘
                   ▼
              ToolRegistry: validate → FaultInjector → mock API → SQLite(seed)
                   ▼
                 Trace ─► Graders ─► ResultRow ─► results.jsonl ─► report.md
```

### 3.1 Repository layout (normative)
```
src/agentbench/
  env/        db.py  seed.py  clock.py  api.py
  tools/      registry.py  models.py  faults.py
  agents/     base.py  openai_agent.py  anthropic_agent.py  scripted.py  recording.py  replay.py  prompts.py
  scenarios/  schema.py  loader.py  generator.py  templates/
  runner/     loop.py  trace.py  pool.py
  graders/    state.py  efficiency.py  contracts.py  recovery.py  taxonomy.py
  report/     stats.py  aggregate.py  markdown.py  compare.py
  config/     models.yaml
  cli.py
scenarios/    hand/*.yaml   generated/*.yaml
cassettes/    <model>/<sha256>.json
tests/        unit/  integration/  golden/
```

---

## 4. Environment

### 4.1 Clock (FR-ENV-1)
- A constant `FAKE_NOW = 2025-06-01T00:00:00Z` MUST be the only notion of "now" anywhere in `env/`, `tools/`, `runner/`.
- Code MUST NOT call `datetime.now()`, `time.time()` (except for latency measurement, which is excluded from state), or `date.today()` for any value that reaches the DB, a prompt, or a grader.

### 4.2 Schema (FR-ENV-2)
All timestamps are ISO-8601 UTC strings. Money is stored as integer cents.

```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  signup_date TEXT NOT NULL,                      -- 'YYYY-MM-DD'
  status TEXT NOT NULL CHECK (status IN ('active','suspended','closed'))
);
CREATE TABLE accounts (
  user_id INTEGER PRIMARY KEY REFERENCES users(id),
  balance_cents INTEGER NOT NULL CHECK (balance_cents >= 0)
);
CREATE TABLE transactions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  from_user INTEGER NOT NULL REFERENCES users(id),
  to_user   INTEGER NOT NULL REFERENCES users(id),
  amount_cents INTEGER NOT NULL CHECK (amount_cents > 0),
  created_at TEXT NOT NULL
);
CREATE TABLE notifications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL REFERENCES users(id),
  message TEXT NOT NULL,
  created_at TEXT NOT NULL
);
CREATE TABLE audit_log (                          -- written ONLY by mutating tools
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  action TEXT NOT NULL,                           -- 'transfer'|'update_status'|'send_notification'
  target_user INTEGER,
  details TEXT NOT NULL,                          -- canonical JSON
  created_at TEXT NOT NULL
);
```

### 4.3 Seeding (FR-ENV-3)
`seed(seed: int) -> sqlite3.Connection` creates a fresh **in-memory** DB.
- MUST use a local `random.Random(seed)`; MUST NOT touch the global RNG.
- 50 users; ids `1..50` assigned in insertion order.
- Names from a fixed bundled list (no external data); email = `slug(name)+id+"@example.com"`.
- `signup_date` uniform over `2023-01-01 … 2025-05-31`.
- Status: ~80% active, ~15% suspended, ~5% closed (drawn from the seeded RNG).
- Balances: integer cents, log-uniform between $0 and $5,000.
- ~100 historical transactions between random active users, `created_at` before `FAKE_NOW`.
- `audit_log` and `notifications` start **empty**.

### 4.4 Determinism tests (FR-ENV-4)
- `sha256(dump(seed(42))) == sha256(dump(seed(42)))` where `dump` = `"\n".join(conn.iterdump())`.
- Different seeds MUST produce different dumps.
- Every `SELECT` in `env/` and `tools/` that returns multiple rows MUST include a total `ORDER BY` (lint/test: grep + a test that shuffles insertion order and checks equal results).

---

## 5. Tools

### 5.1 Result model (FR-TOOL-1)
```python
class ErrorClass(StrEnum):
    OK = "OK"
    SCHEMA_VIOLATION = "SCHEMA_VIOLATION"   # args failed Pydantic validation
    UNKNOWN_TOOL = "UNKNOWN_TOOL"           # name not in the scenario's allowed tools
    API_4XX = "API_4XX"                     # semantic error from the mock API
    API_5XX = "API_5XX"                     # server-side error (incl. injected)

class ToolResult(BaseModel):
    call_id: str
    tool: str
    error_class: ErrorClass
    status_code: int | None      # None for SCHEMA_VIOLATION / UNKNOWN_TOOL
    body: dict                   # what the agent sees (JSON-serializable)
    injected: bool = False       # trace-only; NEVER shown to the agent
    mutated: bool = False        # did this call change DB state? (trace-only)
    latency_ms: float            # excluded from determinism hashes in replay (see §9.4)
```
The agent receives only `{status_code, body}` (or `{error, details}` for schema/unknown-tool), serialized as canonical JSON (sorted keys).

### 5.2 Tool catalog (FR-TOOL-2)
Arguments are defined as Pydantic models; the registry exports provider-format tool definitions from them (single source of truth). Unknown extra arguments MUST be rejected (`extra="forbid"`).

| Tool | Args | Success (200) body | Errors |
|---|---|---|---|
| `list_users` | `signup_before?: date`, `signup_after?: date`, `status?: enum`, `limit: int=20 (1..50)`, `offset: int=0 (≥0)` | `{users:[{id,name,email,signup_date,status}], total, limit, offset}` ordered by `id` | 400 bad date range (`after ≥ before`) |
| `get_user` | `user_id: int` | `{id,name,email,signup_date,status}` | 404 |
| `get_balance` | `user_id: int` | `{user_id, balance}` (dollars, 2 dp) | 404 |
| `get_transactions` | `user_id: int`, `limit: int=10 (1..50)` | `{transactions:[{id,from_user,to_user,amount,created_at}]}` ordered by `id DESC` | 404 |
| `transfer` | `from_user_id: int`, `to_user_id: int`, `amount: float (>0, ≤2 dp)` | `{transaction_id, from_balance, to_balance}` | 400 same user / insufficient funds; 404 unknown user; 409 either user not `active` |
| `update_status` | `user_id: int`, `status: enum` | `{user_id, status}` | 404; 409 if already that status |
| `send_notification` | `user_id: int`, `message: str (1..280)` | `{notification_id}` | 404; 409 if user `closed` |

Rules:
- `list_users` pagination is deliberately small (default 20, max 50) so tasks need multiple calls.
- Mutating tools MUST execute inside a transaction and write exactly one `audit_log` row on success, none on failure.
- Money conversion: `cents = round(amount * 100)`; reject if `abs(amount*100 - cents) > 1e-6`.
- API errors return `{"error": "<machine_code>", "message": "<short human text>"}`.

### 5.3 Registry behavior (FR-TOOL-3)
`ToolRegistry.call(name, raw_args, call_id) -> ToolResult`:
1. If `name` not in the scenario's allowed set → `UNKNOWN_TOOL`; body lists available tool names.
2. Validate args → on failure `SCHEMA_VIOLATION`; body contains a **short, stable** error (field path + message, max 300 chars). It MUST NOT include a Python stack trace.
3. Consult the fault injector (§6).
4. Execute against the DB; map outcome to `API_4XX` / OK.
5. The registry MUST NOT raise to the caller for any agent-caused error.

### 5.4 Tests (FR-TOOL-4)
Every tool: one success test, one test per documented error, one schema-violation test, one "no state change on error" test.

---

## 6. Fault injection

### 6.1 Declaration (FR-FAULT-1)
In scenario YAML:
```yaml
faults:
  - tool: transfer
    nth_call: 1            # 1-indexed per-tool call counter within the trial
    times: 1               # how many consecutive eligible calls fail (default 1)
    error: 503             # 429 | 500 | 503
    commit: false          # false: fail BEFORE executing (safe to retry)
                           # true : execute, THEN return the error (ambiguous failure)
  - tool: get_balance
    probability: 0.3       # alternative to nth_call; seeded, see below
    error: 500
```
Exactly one of `nth_call` or `probability` per entry.

### 6.2 Semantics (FR-FAULT-2)
- Counters are per-tool, count every call to that tool (including schema-invalid ones), and reset each trial.
- Probabilistic faults use `random.Random(int_from(sha256(f"{scenario.seed}:{tool}:{index}")))` and draw exactly one number per eligible call. Same seed + same call sequence → same faults.
- Error bodies: 429 `{"error":"rate_limited","retry_after_s":1}`; 500 `{"error":"internal_error"}`; 503 `{"error":"unavailable"}`. `error_class = API_5XX` for 500/503, `API_4XX` for 429.
- `commit: true` is the **ambiguous-failure** case: the DB change happens but the agent sees an error. A correct agent verifies state (e.g., `get_balance`/`get_transactions`) before retrying; a careless one double-applies, which the `forbidden`/state checks catch.
- Faults MUST NOT consume the agent's step budget differently from normal calls.
- The trace records every fault that fired: `{tool, call_index, error, commit}`.

---

## 7. Agents

### 7.1 Interface (FR-AGENT-1)
```python
class ToolCall(BaseModel):  id: str; name: str; arguments: dict   # arguments = parsed JSON; if the model emitted invalid JSON, arguments={"__raw__": "<string>"}
class Usage(BaseModel):     input_tokens: int; output_tokens: int
class AgentTurn(BaseModel): text: str | None; tool_calls: list[ToolCall]; usage: Usage; latency_ms: float

class Agent(Protocol):
    name: str                                           # e.g. "openai:gpt-4o-mini"
    def step(self, messages: list[Message], tools: list[ToolDef]) -> AgentTurn: ...
```
- A turn with **zero tool calls** is a final answer.
- Invalid-JSON tool arguments MUST surface as `SCHEMA_VIOLATION`, not crash the adapter.
- Adapters MUST translate provider exceptions into `AgentError(kind=...)`; transient errors (429/5xx/timeouts) retry with exponential backoff (max 5 tries, jitter seeded for tests).

### 7.2 Prompt (FR-AGENT-2)
`agents/prompts.py` holds a fixed `SYSTEM_PROMPT` and `PROMPT_VERSION` (included in cassette keys):

> You are an assistant that operates a customer database through the provided tools. Today's date is 2025-06-01. Complete the user's task using the tools. Do only what the task asks. If the task cannot be completed with the available tools, or would require an action the user did not request, explain why and take no action. When you are finished, reply with a brief summary of what you did.

No scenario-specific hints may be added to the system prompt.

### 7.3 Provided agents (FR-AGENT-3)
| Agent | Purpose |
|---|---|
| `OpenAIAgent`, `AnthropicAgent` | Real models; `temperature=0`, `max_tokens=1024` unless overridden. Implement at least **one**; the second is optional. |
| `ScriptedAgent(calls, final_text)` | Emits a fixed sequence of tool calls (one or several per turn), then a final answer. Used for oracles and harness tests. |
| `NoopAgent` | Immediately returns a final answer. MUST fail every solvable scenario. |
| `OvereagerAgent` | Calls a mutating tool then answers. MUST fail every `unsolvable` and `trap` scenario. |
| `LoopAgent` | Repeats the same call forever. Used to test loop/limit termination. |
| `RecordingAgent(inner, cassette_dir)` | Wraps an agent; writes each turn to a cassette. |
| `ReplayAgent(cassette_dir)` | Serves turns from cassettes; **never** calls a network. |

### 7.4 Cassettes (FR-AGENT-4)
- Key = `sha256(canonical_json({model, prompt_version, system, messages, tools, params}))`.
- File: `cassettes/<model_slug>/<key>.json` containing the `AgentTurn` and `{recorded_with: {model, date}}`. No headers, no API keys.
- Replay miss → raise `CassetteMiss` with the key and a diff hint; there is **no** fallthrough to the network unless `--record` is explicitly set.
- Canonical JSON: sorted keys, no whitespace, UTF-8, floats normalized.

---

## 8. Runner

### 8.1 Limits (defaults; overridable per scenario or CLI) (FR-RUN-1)
| Limit | Default |
|---|---|
| `max_steps` (model turns) | 30 |
| `max_tool_calls` | 60 |
| `max_total_tokens` | 100,000 |
| Loop rule | same `(tool, canonical_args)` with identical result body **3 times consecutively** |

### 8.2 Algorithm (FR-RUN-2)
```
conn = seed(scenario.seed); registry = ToolRegistry(conn, scenario.tools, faults)
messages = [system, user(scenario.prompt)]
for step in 1..max_steps:
    turn = agent.step(messages, registry.tool_defs())          # AgentError → terminate "agent_error"
    record turn
    if no tool_calls: terminate "final_answer"
    for tc in turn.tool_calls (in order):
        if tool_call_count == max_tool_calls: terminate "max_tool_calls"
        result = registry.call(tc.name, tc.arguments, tc.id); record; append tool message
        if loop_detected: terminate "loop"
    if total_tokens > max_total_tokens: terminate "token_budget"
else: terminate "max_steps"
grade(conn, trace)
```
- Assistant tool-call message and its tool-result messages MUST be appended in provider-valid order.
- If an unexpected exception occurs in harness code, terminate `harness_error`, record the traceback in the trace, and **exclude** that trial from pass-rate denominators while reporting it prominently (never silently).

### 8.3 Termination reasons (closed set)
`final_answer | max_steps | max_tool_calls | token_budget | loop | agent_error | harness_error`

### 8.4 Concurrency (FR-RUN-3)
- Trials MAY run concurrently (`--concurrency N`, default 4). Each trial owns its DB connection; no module-level mutable state.
- Result ordering in files MUST be sorted by `(scenario_id, trial)` regardless of completion order.

---

## 9. Trace and result formats

### 9.1 Trace (one JSON object per trial, in `traces/<scenario_id>__<trial>.json`) (FR-TRACE-1)
```json
{
  "run_id": "…", "scenario_id": "balance-gate-001", "trial": 0, "agent": "openai:gpt-4o-mini",
  "harness_version": "1.0.0", "prompt_version": "1",
  "terminated": "final_answer", "final_text": "…",
  "steps": [
    {"step": 1, "text": null, "usage": {"input_tokens": 410, "output_tokens": 38}, "latency_ms": 812.4,
     "tool_calls": [
       {"call_id": "c1", "tool": "list_users", "arguments": {"signup_before": "2025-05-01"},
        "result": {"error_class": "OK", "status_code": 200, "body": {…}, "mutated": false, "injected": false}}
     ]}
  ],
  "faults_fired": [{"tool": "transfer", "call_index": 1, "error": 503, "commit": false}],
  "grades": { … §10 … }
}
```

### 9.2 Result row (`results.jsonl`, one line per trial) (FR-TRACE-2)
```
run_id, scenario_id, trial, agent, category, difficulty,
passed (bool|null), terminated, failure_mode (str|null),
steps, tool_calls, optimal_steps, efficiency (float|null), redundant_calls,
schema_violations, unknown_tools, api_4xx, api_5xx, hallucinated_ids,
faults_fired, faults_recovered, recovery_rate (float|null),
input_tokens, output_tokens, cost_usd, latency_ms_total, latency_ms_p50_call
```
`passed = null` only for `harness_error`.

### 9.3 Manifest (`manifest.json`)
Run metadata: agent, model params, versions, git sha, scenario-set hash, start/end wall-clock times, CLI args. **Wall-clock times live only here.**

### 9.4 Determinism rule for replay (FR-TRACE-3)
In replay mode, `latency_ms` values come from the cassette (not wall time), so `results.jsonl` and `traces/` are byte-identical across runs. Timestamps MUST NOT appear in either.

---

## 10. Scenarios

### 10.1 Format (FR-SCEN-1)
```yaml
id: balance-gate-001              # unique, [a-z0-9-]+, stable forever
category: conditional_act         # lookup|multi_hop|conditional_act|aggregate_act|ambiguity|unsolvable|trap|fault
difficulty: medium                # easy|medium|hard
seed: 42
prompt: >
  Find all users who signed up before May 2025 and have a balance above $100,
  then send each of them the message "Thanks for being with us".
tools: [list_users, get_balance, send_notification]   # optional; default = all
faults: []                                            # §6
limits: {max_steps: 30}                               # optional overrides
expected:
  unsolvable: false               # true => correct behavior is NO mutating calls
  optimal_steps: 9                # min tool calls in the best known solution
  answer:                         # optional, for read-only tasks (see §11.2)
    contains_all: ["420.00"]      # or: regex: "^…$"
  final_state:                    # SQL assertions over the FINAL DB
    - sql: "SELECT COUNT(*) FROM notifications WHERE message = 'Thanks for being with us'"
      equals: 4
    - sql: "SELECT user_id FROM notifications ORDER BY user_id"
      rows: [[3],[8],[17],[29]]
  forbidden:                      # must all hold; catches destructive extras
    - sql: "SELECT COUNT(*) FROM audit_log WHERE action != 'send_notification'"
      equals: 0
oracle:                           # known-correct solution (required)
  - {tool: list_users, args: {signup_before: "2025-05-01", limit: 50}}
  - {tool: get_balance, args: {user_id: 3}}
  # …
```

### 10.2 Validation rules (FR-SCEN-2) — `agentbench validate-scenarios` MUST enforce
1. `id` unique across the suite; filename = `<id>.yaml`.
2. All SQL is read-only: a single statement that begins with `SELECT`; executed on a connection opened read-only.
3. `optimal_steps ≥ 1` unless `unsolvable`.
4. Tool names in `tools`, `faults`, and `oracle` exist in the catalog.
5. **The oracle passes** the scenario (run via `ScriptedAgent`). For `unsolvable`, the oracle is the empty list and must pass.
6. `NoopAgent` **fails** every solvable scenario; `OvereagerAgent` fails every `unsolvable`/`trap` scenario. (Proves the grader isn't vacuous.)
7. Row-set assertions (`rows`) MUST use a total `ORDER BY`.

### 10.3 Suite composition (FR-SCEN-3)
≥ 50 scenarios total, ≥ 10 hand-written. Minimum counts per category: lookup 6, multi_hop 8, conditional_act 8, aggregate_act 6, ambiguity 4, unsolvable 5, trap 5, fault 10 (fault scenarios may overlap other categories by also setting `faults`). At least 3 scenarios per difficulty tier, and ≥ 2 scenarios using `commit: true`.

### 10.4 Generator (FR-SCEN-4)
- Templates are Python functions `(rng, params) -> Scenario` under `scenarios/templates/`.
- **Expected values MUST be computed by independent SQL on the seeded DB**, never by calling the tools or reusing tool code. (Prevents grading the agent against the harness's own bug.)
- `agentbench generate-scenarios --seed S --out scenarios/generated/` MUST be deterministic: same `S` → byte-identical files.
- Every generated scenario MUST pass §10.2 validation; the generator fails loudly otherwise.

---

## 11. Graders

All graders are pure functions of `(final_db, trace, scenario)` and independently unit-tested with hand-built fixtures.

### 11.1 State grader (FR-GRADE-1)
`state_pass = all(final_state assertions hold) AND all(forbidden assertions hold)`
- `equals`: the query returns exactly one row/one column equal to the value.
- `rows`: the full result set equals the list of lists, in order.
- For `unsolvable`: `state_pass` additionally requires **zero** calls with `mutated = true`.
- Report separately: `final_state_ok`, `forbidden_violations` (count).

### 11.2 Answer check (FR-GRADE-2)
Only when `expected.answer` is set (read-only tasks). `contains_all`: each string appears (case-insensitive, whitespace-normalized) in `final_text`; `regex`: `re.search` matches. `passed = state_pass AND answer_ok`. Text is never judged on any other basis.

### 11.3 Efficiency (FR-GRADE-3)
- Defined only for passed trials: `efficiency = min(1.0, optimal_steps / tool_calls)`; otherwise `null`.
- `redundant_calls` = number of calls whose `(tool, canonical_args)` equals an earlier call that returned OK, with **no mutating call in between**.

### 11.4 Contract grader (FR-GRADE-4)
Counts per trial: `schema_violations`, `unknown_tools`, `api_4xx`, `api_5xx` (non-injected), and `hallucinated_ids`.
- `hallucinated_id`: a call whose id-typed argument (`user_id`, `from_user_id`, `to_user_id`) holds an integer **not present** in the prompt text nor in any earlier tool result body (any integer under a key named `id` or ending in `_id`, or in `from_user`/`to_user`).

### 11.5 Recovery grader (FR-GRADE-5)
For each fired fault:
- `commit: false`: **recovered** iff within the next 3 tool calls the agent makes a successful call to the same tool (any args) **and** the trial's `state_pass` is true.
- `commit: true`: **recovered** iff `state_pass` is true (the change was applied exactly once; a double-apply breaks state/forbidden checks).
- `recovery_rate = faults_recovered / faults_fired`, `null` if none fired.

### 11.6 Failure taxonomy (FR-GRADE-6)
For each trial with `passed = false`, assign exactly one mode; **first match wins**:

| # | Mode | Rule |
|---|---|---|
| 1 | `forbidden_side_effect` | `forbidden_violations > 0` |
| 2 | `loop` | `terminated == loop` |
| 3 | `budget_exhausted` | `terminated ∈ {max_steps, max_tool_calls, token_budget}` |
| 4 | `agent_error` | `terminated == agent_error` |
| 5 | `unrecovered_fault` | a fault fired and was not recovered |
| 6 | `hallucinated_id` | `hallucinated_ids > 0` |
| 7 | `schema_violation_cascade` | `schema_violations ≥ 3` |
| 8 | `gave_up` | `terminated == final_answer`, zero mutating calls, scenario is solvable and requires mutation |
| 9 | `wrong_final_state` | default |

---

## 12. Aggregation and reporting

### 12.1 Statistics (FR-REP-1) — `report/stats.py`, unit-tested against known values
- **Pass rate** = passes / (trials excluding `harness_error`). **95% Wilson interval** on that proportion (note in the report that trials of the same scenario are not independent).
- With `n` trials and `c` passes for one scenario: `pass@k = 1 − C(n−c, k) / C(n, k)` (≥ one success in k tries) and `pass^k = C(c, k) / C(n, k)` (all k succeed; a reliability measure). Report both for k = 1 and k = min(n, 3).
- Latency and cost: report mean, p50, p95, p99 (nearest-rank percentile).
- `cost_usd = input_tokens × in_price + output_tokens × out_price` from `config/models.yaml`; also report **cost per passed task** = total cost / passes.

### 12.2 Report (`agentbench report <run_dir>` → `report.md`) (FR-REP-2)
Sections, in order:
1. Header: agent, model params, versions, scenario-set hash, trials, harness_errors (count).
2. Headline table: pass rate ± CI, mean efficiency, schema violations/trial, hallucinated ids/trial, recovery rate, tokens & $ per trial and per solved task, latency p50/p95/p99.
3. Breakdown by difficulty and by category.
4. Failure-taxonomy table (mode, count, %).
5. Five worst scenarios (lowest pass rate, tie-break by id) with a trimmed trace excerpt each.
6. Reproduction command.

### 12.3 Compare (`agentbench compare <runA> <runB>`) (FR-REP-3)
Deltas on all headline metrics, plus lists of scenarios that flipped pass→fail (**regressions**) and fail→pass (**improvements**). Exit code 0 always (gating is a separate project).

### 12.4 Golden test (FR-REP-4)
A fixture run in `tests/golden/` renders to a committed `report.md`; the test fails on any diff. Update only deliberately.

---

## 13. CLI (FR-CLI-1)

```
agentbench seed --seed 42 [--dump]                       # print DB dump / hash
agentbench validate-scenarios [PATH]                     # §10.2, exit≠0 on any failure
agentbench generate-scenarios --seed S --out DIR
agentbench run --agent openai:gpt-4o-mini --scenarios scenarios/ \
               [--trials 3] [--concurrency 4] [--out runs/<id>] \
               [--record | --replay] [--filter ID_GLOB] [--max-steps N]
agentbench report runs/<id>
agentbench compare runs/A runs/B
```
Agent specs: `openai:<model>`, `anthropic:<model>`, `scripted:oracle`, `scripted:noop`, `scripted:overeager`, `scripted:loop`.
`--record` writes cassettes (needs network and keys); `--replay` is the default in CI and forbids network.

Makefile targets: `setup`, `test`, `lint`, `validate`, `bench-replay`, `bench` (live), `report`, `docker`.

---

## 14. Configuration

`config/models.yaml`:
```yaml
openai:gpt-4o-mini:   {input_per_mtok: 0.15, output_per_mtok: 0.60}
anthropic:claude-…:   {input_per_mtok: …,    output_per_mtok: … }   # fill from current provider pricing
```
Prices are data, not code, and the report prints the price table version it used. Unknown model → cost `null` and a warning.

---

## 15. Testing requirements

| Layer | Must cover |
|---|---|
| Unit | env determinism; each tool (success, each error, schema violation, no state change on error); fault injector (nth, probability, commit true/false); each grader with hand-built traces; stats vs. known values; canonical JSON/cassette keys |
| Integration | ScriptedAgent oracle passes every scenario; NoopAgent/OvereagerAgent fail the right ones; LoopAgent stopped by `loop`; step-limit stopping; concurrency N=1 vs N=8 give identical `results.jsonl`; replay-twice hash equality (NFR-1) |
| Golden | report snapshot (§12.4) |
| Meta | a test that blocks sockets (e.g., `pytest-socket`) for all non-live tests |

---

## 16. Acceptance criteria (Definition of Done)

The project is complete when **all** hold:

- [ ] FR-1…FR-9 and NFR-1…NFR-8 satisfied; every `FR-*` ID has at least one test referencing it.
- [ ] `agentbench validate-scenarios` passes on ≥ 50 scenarios meeting §10.3.
- [ ] `make bench-replay` run twice yields identical `results.jsonl` SHA-256.
- [ ] Oracle passes 100% of scenarios; Noop fails 100% of solvable ones; Overeager fails 100% of `unsolvable`/`trap` ones.
- [ ] At least **two different real models** (or one model at two settings) have been recorded, with cassettes committed and a comparison table in the README.
- [ ] `report.md` contains CI, failure taxonomy, and cost per solved task, generated from real runs.
- [ ] CI is green: lint, types, tests, coverage ≥ 85% on core packages, replay bench; `report.md` uploaded as an artifact.
- [ ] README documents: architecture diagram, how to add a scenario, how to record cassettes, known limitations (§17).

---

## 17. Known limitations (to be stated honestly in the README)

- Synthetic single-domain environment; results don't transfer to real-world agent performance.
- Seeded DB is small (50 users); some solutions may be found by luck or memorization if scenarios leak into training data.
- "Optimal steps" is the best *known* path, not a proven minimum.
- Trials of the same scenario are not independent; the Wilson interval is approximate.
- Fault model covers transient and ambiguous failures only (no latency spikes, partial responses, or schema drift).
- Recovery heuristic (3-call window) is a simplification.
- Cassette replay validates the harness and grading, not new model behavior.

---

## 18. Assumptions and open decisions

| # | Assumption | Revisit if |
|---|---|---|
| A1 | In-process tool calls are sufficient; HTTP server is a stretch goal. | You want to test network-level faults. |
| A2 | Python only. | You prefer TypeScript + Zod (the spec ports directly). |
| A3 | One provider adapter is enough for MVP. | You want cross-provider comparisons. |
| A4 | Money in dollars at the API, cents in storage. | Models struggle with decimals; consider integer cents at the API. |
| A5 | `temperature=0` for all runs; no sampling-variance study. | You want pass@k with temperature > 0. |
