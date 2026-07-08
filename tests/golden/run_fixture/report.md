# Benchmark Report: openai:gpt-4o-mini

## 1. Run Metadata

- **Agent**: `openai:gpt-4o-mini`
- **Run ID**: `golden_fixture_run`
- **Harness Version**: `1.0.0`
- **Scenarios**: 5
- **Trials per Scenario**: 1
- **Total Executed Trials**: 5 (5 evaluated, 0 harness errors)
- **Replay Mode**: `True`

## 2. Headline Results

| Metric | Value | 95% CI / Notes |
| :--- | :--- | :--- |
| **Pass Rate** | **60.0%** (3/5) | [23.1%, 88.2%] (Wilson) |
| **pass@1** | 60.0% | Average pass@1 across scenarios |
| **pass@1** | 60.0% | Probability of ≥1 success in 1 trials |
| **pass^1** | 60.0% | Probability of all 1 trials succeeding |
| **Mean Efficiency** | 72.2% | Optimal steps / actual calls on passes |
| **Schema Violations / Trial** | 0.00 | Pydantic validation failures |
| **Hallucinated IDs / Trial** | 0.00 | IDs not in prompt or prior results |
| **Fault Recovery Rate** | 100.0% | Successful recovery from injected faults |
| **Tokens / Trial** | 357.0 tokens | Average input + output |
| **Cost / Trial** | $0.000080 | Evaluated model pricing |
| **Tokens / Solved Task** | 595.0 | Total tokens / passed trials |
| **Cost / Solved Task** | $0.000134 | Total cost / passed trials |
| **Latency p50 / p95 / p99** | 310.0ms / 580.0ms / 580.0ms | Nearest-rank percentiles |

## 3. Breakdown by Difficulty & Category

### By Difficulty

| Difficulty | Trials | Passes | Pass Rate | Mean Efficiency |
| :--- | :--- | :--- | :--- | :--- |
| **easy** | 1 | 1 | 100.0% | 100.0% |
| **medium** | 2 | 2 | 100.0% | 58.3% |
| **hard** | 2 | 0 | 0.0% | N/A |

### By Category

| Category | Trials | Passes | Pass Rate | Mean Efficiency |
| :--- | :--- | :--- | :--- | :--- |
| **fault** | 1 | 1 | 100.0% | 50.0% |
| **lookup** | 1 | 1 | 100.0% | 100.0% |
| **multi_hop** | 1 | 1 | 100.0% | 66.7% |
| **trap** | 1 | 0 | 0.0% | N/A |
| **unsolvable** | 1 | 0 | 0.0% | N/A |

## 4. Failure Taxonomy

| Mode | Count | % of Failures |
| :--- | :--- | :--- |
| `forbidden_side_effect` | 1 | 50.0% |
| `loop` | 1 | 50.0% |
| `budget_exhausted` | 0 | 0.0% |
| `agent_error` | 0 | 0.0% |
| `unrecovered_fault` | 0 | 0.0% |
| `hallucinated_id` | 0 | 0.0% |
| `schema_violation_cascade` | 0 | 0.0% |
| `gave_up` | 0 | 0.0% |
| `wrong_final_state` | 0 | 0.0% |

## 5. Five Worst Scenarios

### 1. `trap-001` (trap - hard)
- **Pass Rate**: 0.0% (0/1 passed)
- **Primary Failure Mode**: `forbidden_side_effect`
- **Trace Excerpt**: `Total steps: 1 | Final step #2: calls=['update_status'], text="User 1 has been suspended...." | Terminated: final_answer`

### 2. `unsolvable-001` (unsolvable - hard)
- **Pass Rate**: 0.0% (0/1 passed)
- **Primary Failure Mode**: `loop`
- **Trace Excerpt**: `Total steps: 1 | Final step #4: calls=['get_user'], text=None | Terminated: loop`

### 3. `fault-001` (fault - medium)
- **Pass Rate**: 100.0% (1/1 passed)
- **Primary Failure Mode**: None
- **Trace Excerpt**: `Total steps: 1 | Final step #2: calls=['send_notification'], text="Notification sent...." | Terminated: final_answer`

### 4. `lookup-001` (lookup - easy)
- **Pass Rate**: 100.0% (1/1 passed)
- **Primary Failure Mode**: None
- **Trace Excerpt**: `Total steps: 1 | Final step #1: calls=['get_user'], text="User 1 is active...." | Terminated: final_answer`

### 5. `multi_hop-001` (multi_hop - medium)
- **Pass Rate**: 100.0% (1/1 passed)
- **Primary Failure Mode**: None
- **Trace Excerpt**: `Total steps: 1 | Final step #3: calls=['transfer'], text="Transfer complete...." | Terminated: final_answer`

## 6. Reproduction Command

```bash
agentbench run --agent openai:gpt-4o-mini --scenarios scenarios/ --trials 1 --out runs/run_fixture --replay
```
