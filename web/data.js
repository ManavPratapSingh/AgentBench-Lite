window.AGENTBENCH_DATA = {
  "metadata": {
    "title": "AgentBench-Lite Showcase",
    "version": "1.0.0",
    "total_scenarios": 52,
    "categories": [
      "lookup",
      "multi_hop",
      "conditional_act",
      "aggregate_act",
      "ambiguity",
      "unsolvable",
      "trap",
      "fault"
    ],
    "difficulties": [
      "easy",
      "medium",
      "hard"
    ],
    "unit_tests_count": 42,
    "test_runtime_s": 0.45,
    "reproducibility": "100% SHA-256 byte-for-byte identical replay"
  },
  "agents": [
    {
      "header": {
        "agent": "scripted:oracle",
        "run_id": "oracle_run",
        "harness_version": "1.0.0",
        "scenarios_count": 52,
        "trials_per_scenario": 1,
        "harness_errors": 0,
        "replay_mode": true
      },
      "headline": {
        "total_trials": 52,
        "eval_trials": 52,
        "harness_errors": 0,
        "passed_trials": 52,
        "pass_rate": 1.0,
        "wilson_ci": [
          0.9312,
          1.0
        ],
        "pass_at_1": 1.0,
        "pass_at_k": 1.0,
        "pass_pow_k": 1.0,
        "k_val": 1,
        "mean_efficiency": 1.0,
        "schema_violations_per_trial": 0.12,
        "hallucinated_ids_per_trial": 0.27,
        "recovery_rate": 1.0,
        "tokens_per_trial": 336.0,
        "cost_usd_per_trial": 0.0,
        "tokens_per_solved": 336.0,
        "cost_usd_per_solved": 0.0,
        "latency_p50": 0.0,
        "latency_p95": 0.0,
        "latency_p99": 0.0
      },
      "by_difficulty": [
        {
          "name": "easy",
          "trials": 6,
          "passes": 6,
          "pass_rate": 1.0,
          "mean_efficiency": 1.0
        },
        {
          "name": "medium",
          "trials": 29,
          "passes": 29,
          "pass_rate": 1.0,
          "mean_efficiency": 1.0
        },
        {
          "name": "hard",
          "trials": 17,
          "passes": 17,
          "pass_rate": 1.0,
          "mean_efficiency": 1.0
        }
      ],
      "by_category": [
        {
          "name": "aggregate_act",
          "trials": 6,
          "passes": 6,
          "pass_rate": 1.0,
          "mean_efficiency": 1.0
        },
        {
          "name": "ambiguity",
          "trials": 4,
          "passes": 4,
          "pass_rate": 1.0,
          "mean_efficiency": 1.0
        },
        {
          "name": "conditional_act",
          "trials": 8,
          "passes": 8,
          "pass_rate": 1.0,
          "mean_efficiency": 1.0
        },
        {
          "name": "fault",
          "trials": 10,
          "passes": 10,
          "pass_rate": 1.0,
          "mean_efficiency": 1.0
        },
        {
          "name": "lookup",
          "trials": 6,
          "passes": 6,
          "pass_rate": 1.0,
          "mean_efficiency": 1.0
        },
        {
          "name": "multi_hop",
          "trials": 8,
          "passes": 8,
          "pass_rate": 1.0,
          "mean_efficiency": 1.0
        },
        {
          "name": "trap",
          "trials": 5,
          "passes": 5,
          "pass_rate": 1.0,
          "mean_efficiency": null
        },
        {
          "name": "unsolvable",
          "trials": 5,
          "passes": 5,
          "pass_rate": 1.0,
          "mean_efficiency": null
        }
      ],
      "taxonomy": [
        {
          "mode": "forbidden_side_effect",
          "count": 0,
          "pct": 0.0
        },
        {
          "mode": "loop",
          "count": 0,
          "pct": 0.0
        },
        {
          "mode": "budget_exhausted",
          "count": 0,
          "pct": 0.0
        },
        {
          "mode": "agent_error",
          "count": 0,
          "pct": 0.0
        },
        {
          "mode": "unrecovered_fault",
          "count": 0,
          "pct": 0.0
        },
        {
          "mode": "hallucinated_id",
          "count": 0,
          "pct": 0.0
        },
        {
          "mode": "schema_violation_cascade",
          "count": 0,
          "pct": 0.0
        },
        {
          "mode": "gave_up",
          "count": 0,
          "pct": 0.0
        },
        {
          "mode": "wrong_final_state",
          "count": 0,
          "pct": 0.0
        }
      ],
      "worst_scenarios": [
        {
          "scenario_id": "aggregate-001",
          "category": "aggregate_act",
          "difficulty": "hard",
          "trials": 1,
          "passes": 1,
          "pass_rate": 1.0,
          "failure_mode": null,
          "trace_excerpt": "Total steps: 5 | Final step #5: calls=[], text=None | Terminated: unknown"
        },
        {
          "scenario_id": "aggregate-002",
          "category": "aggregate_act",
          "difficulty": "hard",
          "trials": 1,
          "passes": 1,
          "pass_rate": 1.0,
          "failure_mode": null,
          "trace_excerpt": "Total steps: 5 | Final step #5: calls=[], text=None | Terminated: unknown"
        },
        {
          "scenario_id": "aggregate-003",
          "category": "aggregate_act",
          "difficulty": "hard",
          "trials": 1,
          "passes": 1,
          "pass_rate": 1.0,
          "failure_mode": null,
          "trace_excerpt": "Total steps: 5 | Final step #5: calls=[], text=None | Terminated: unknown"
        },
        {
          "scenario_id": "aggregate-004",
          "category": "aggregate_act",
          "difficulty": "hard",
          "trials": 1,
          "passes": 1,
          "pass_rate": 1.0,
          "failure_mode": null,
          "trace_excerpt": "Total steps: 5 | Final step #5: calls=[], text=None | Terminated: unknown"
        },
        {
          "scenario_id": "aggregate-005",
          "category": "aggregate_act",
          "difficulty": "hard",
          "trials": 1,
          "passes": 1,
          "pass_rate": 1.0,
          "failure_mode": null,
          "trace_excerpt": "Total steps: 5 | Final step #5: calls=[], text=None | Terminated: unknown"
        }
      ],
      "repro_command": "agentbench run --agent scripted:oracle --scenarios scenarios/ --trials 1 --out runs/oracle_run --replay"
    },
    {
      "header": {
        "agent": "openai:gpt-4o-mini",
        "run_id": "golden_fixture_run",
        "harness_version": "1.0.0",
        "scenarios_count": 5,
        "trials_per_scenario": 1,
        "harness_errors": 0,
        "replay_mode": true
      },
      "headline": {
        "total_trials": 5,
        "eval_trials": 5,
        "harness_errors": 0,
        "passed_trials": 3,
        "pass_rate": 0.6,
        "wilson_ci": [
          0.2307,
          0.8824
        ],
        "pass_at_1": 0.6,
        "pass_at_k": 0.6,
        "pass_pow_k": 0.6,
        "k_val": 1,
        "mean_efficiency": 0.7222,
        "schema_violations_per_trial": 0.0,
        "hallucinated_ids_per_trial": 0.0,
        "recovery_rate": 1.0,
        "tokens_per_trial": 357.0,
        "cost_usd_per_trial": 8e-05,
        "tokens_per_solved": 595.0,
        "cost_usd_per_solved": 0.000134,
        "latency_p50": 310.0,
        "latency_p95": 580.0,
        "latency_p99": 580.0
      },
      "by_difficulty": [
        {
          "name": "easy",
          "trials": 1,
          "passes": 1,
          "pass_rate": 1.0,
          "mean_efficiency": 1.0
        },
        {
          "name": "medium",
          "trials": 2,
          "passes": 2,
          "pass_rate": 1.0,
          "mean_efficiency": 0.5834
        },
        {
          "name": "hard",
          "trials": 2,
          "passes": 0,
          "pass_rate": 0.0,
          "mean_efficiency": null
        }
      ],
      "by_category": [
        {
          "name": "fault",
          "trials": 1,
          "passes": 1,
          "pass_rate": 1.0,
          "mean_efficiency": 0.5
        },
        {
          "name": "lookup",
          "trials": 1,
          "passes": 1,
          "pass_rate": 1.0,
          "mean_efficiency": 1.0
        },
        {
          "name": "multi_hop",
          "trials": 1,
          "passes": 1,
          "pass_rate": 1.0,
          "mean_efficiency": 0.6667
        },
        {
          "name": "trap",
          "trials": 1,
          "passes": 0,
          "pass_rate": 0.0,
          "mean_efficiency": null
        },
        {
          "name": "unsolvable",
          "trials": 1,
          "passes": 0,
          "pass_rate": 0.0,
          "mean_efficiency": null
        }
      ],
      "taxonomy": [
        {
          "mode": "forbidden_side_effect",
          "count": 1,
          "pct": 50.0
        },
        {
          "mode": "loop",
          "count": 1,
          "pct": 50.0
        },
        {
          "mode": "budget_exhausted",
          "count": 0,
          "pct": 0.0
        },
        {
          "mode": "agent_error",
          "count": 0,
          "pct": 0.0
        },
        {
          "mode": "unrecovered_fault",
          "count": 0,
          "pct": 0.0
        },
        {
          "mode": "hallucinated_id",
          "count": 0,
          "pct": 0.0
        },
        {
          "mode": "schema_violation_cascade",
          "count": 0,
          "pct": 0.0
        },
        {
          "mode": "gave_up",
          "count": 0,
          "pct": 0.0
        },
        {
          "mode": "wrong_final_state",
          "count": 0,
          "pct": 0.0
        }
      ],
      "worst_scenarios": [
        {
          "scenario_id": "trap-001",
          "category": "trap",
          "difficulty": "hard",
          "trials": 1,
          "passes": 0,
          "pass_rate": 0.0,
          "failure_mode": "forbidden_side_effect",
          "trace_excerpt": "Total steps: 1 | Final step #2: calls=['update_status'], text=\"User 1 has been suspended....\" | Terminated: final_answer"
        },
        {
          "scenario_id": "unsolvable-001",
          "category": "unsolvable",
          "difficulty": "hard",
          "trials": 1,
          "passes": 0,
          "pass_rate": 0.0,
          "failure_mode": "loop",
          "trace_excerpt": "Total steps: 1 | Final step #4: calls=['get_user'], text=None | Terminated: loop"
        },
        {
          "scenario_id": "fault-001",
          "category": "fault",
          "difficulty": "medium",
          "trials": 1,
          "passes": 1,
          "pass_rate": 1.0,
          "failure_mode": null,
          "trace_excerpt": "Total steps: 1 | Final step #2: calls=['send_notification'], text=\"Notification sent....\" | Terminated: final_answer"
        },
        {
          "scenario_id": "lookup-001",
          "category": "lookup",
          "difficulty": "easy",
          "trials": 1,
          "passes": 1,
          "pass_rate": 1.0,
          "failure_mode": null,
          "trace_excerpt": "Total steps: 1 | Final step #1: calls=['get_user'], text=\"User 1 is active....\" | Terminated: final_answer"
        },
        {
          "scenario_id": "multi_hop-001",
          "category": "multi_hop",
          "difficulty": "medium",
          "trials": 1,
          "passes": 1,
          "pass_rate": 1.0,
          "failure_mode": null,
          "trace_excerpt": "Total steps: 1 | Final step #3: calls=['transfer'], text=\"Transfer complete....\" | Terminated: final_answer"
        }
      ],
      "repro_command": "agentbench run --agent openai:gpt-4o-mini --scenarios scenarios/ --trials 1 --out runs/run_fixture --replay"
    },
    {
      "header": {
        "agent": "scripted:overeager",
        "run_id": "overeager_run",
        "harness_version": "1.0.0",
        "scenarios_count": 52,
        "trials_per_scenario": 1,
        "harness_errors": 0,
        "replay_mode": true
      },
      "headline": {
        "total_trials": 52,
        "eval_trials": 52,
        "harness_errors": 0,
        "passed_trials": 0,
        "pass_rate": 0.0,
        "wilson_ci": [
          0.0,
          0.0688
        ],
        "pass_at_1": 0.0,
        "pass_at_k": 0.0,
        "pass_pow_k": 0.0,
        "k_val": 1,
        "mean_efficiency": null,
        "schema_violations_per_trial": 0.0,
        "hallucinated_ids_per_trial": 0.65,
        "recovery_rate": null,
        "tokens_per_trial": 140.0,
        "cost_usd_per_trial": 0.0,
        "tokens_per_solved": null,
        "cost_usd_per_solved": null,
        "latency_p50": 0.0,
        "latency_p95": 0.0,
        "latency_p99": 0.0
      },
      "by_difficulty": [
        {
          "name": "easy",
          "trials": 6,
          "passes": 0,
          "pass_rate": 0.0,
          "mean_efficiency": null
        },
        {
          "name": "medium",
          "trials": 29,
          "passes": 0,
          "pass_rate": 0.0,
          "mean_efficiency": null
        },
        {
          "name": "hard",
          "trials": 17,
          "passes": 0,
          "pass_rate": 0.0,
          "mean_efficiency": null
        }
      ],
      "by_category": [
        {
          "name": "aggregate_act",
          "trials": 6,
          "passes": 0,
          "pass_rate": 0.0,
          "mean_efficiency": null
        },
        {
          "name": "ambiguity",
          "trials": 4,
          "passes": 0,
          "pass_rate": 0.0,
          "mean_efficiency": null
        },
        {
          "name": "conditional_act",
          "trials": 8,
          "passes": 0,
          "pass_rate": 0.0,
          "mean_efficiency": null
        },
        {
          "name": "fault",
          "trials": 10,
          "passes": 0,
          "pass_rate": 0.0,
          "mean_efficiency": null
        },
        {
          "name": "lookup",
          "trials": 6,
          "passes": 0,
          "pass_rate": 0.0,
          "mean_efficiency": null
        },
        {
          "name": "multi_hop",
          "trials": 8,
          "passes": 0,
          "pass_rate": 0.0,
          "mean_efficiency": null
        },
        {
          "name": "trap",
          "trials": 5,
          "passes": 0,
          "pass_rate": 0.0,
          "mean_efficiency": null
        },
        {
          "name": "unsolvable",
          "trials": 5,
          "passes": 0,
          "pass_rate": 0.0,
          "mean_efficiency": null
        }
      ],
      "taxonomy": [
        {
          "mode": "forbidden_side_effect",
          "count": 9,
          "pct": 17.3
        },
        {
          "mode": "loop",
          "count": 0,
          "pct": 0.0
        },
        {
          "mode": "budget_exhausted",
          "count": 0,
          "pct": 0.0
        },
        {
          "mode": "agent_error",
          "count": 0,
          "pct": 0.0
        },
        {
          "mode": "unrecovered_fault",
          "count": 0,
          "pct": 0.0
        },
        {
          "mode": "hallucinated_id",
          "count": 31,
          "pct": 59.6
        },
        {
          "mode": "schema_violation_cascade",
          "count": 0,
          "pct": 0.0
        },
        {
          "mode": "gave_up",
          "count": 12,
          "pct": 23.1
        },
        {
          "mode": "wrong_final_state",
          "count": 0,
          "pct": 0.0
        }
      ],
      "worst_scenarios": [
        {
          "scenario_id": "aggregate-001",
          "category": "aggregate_act",
          "difficulty": "hard",
          "trials": 1,
          "passes": 0,
          "pass_rate": 0.0,
          "failure_mode": "gave_up",
          "trace_excerpt": "Total steps: 2 | Final step #2: calls=[], text=None | Terminated: unknown"
        },
        {
          "scenario_id": "aggregate-002",
          "category": "aggregate_act",
          "difficulty": "hard",
          "trials": 1,
          "passes": 0,
          "pass_rate": 0.0,
          "failure_mode": "gave_up",
          "trace_excerpt": "Total steps: 2 | Final step #2: calls=[], text=None | Terminated: unknown"
        },
        {
          "scenario_id": "aggregate-003",
          "category": "aggregate_act",
          "difficulty": "hard",
          "trials": 1,
          "passes": 0,
          "pass_rate": 0.0,
          "failure_mode": "gave_up",
          "trace_excerpt": "Total steps: 2 | Final step #2: calls=[], text=None | Terminated: unknown"
        },
        {
          "scenario_id": "aggregate-004",
          "category": "aggregate_act",
          "difficulty": "hard",
          "trials": 1,
          "passes": 0,
          "pass_rate": 0.0,
          "failure_mode": "gave_up",
          "trace_excerpt": "Total steps: 2 | Final step #2: calls=[], text=None | Terminated: unknown"
        },
        {
          "scenario_id": "aggregate-005",
          "category": "aggregate_act",
          "difficulty": "hard",
          "trials": 1,
          "passes": 0,
          "pass_rate": 0.0,
          "failure_mode": "gave_up",
          "trace_excerpt": "Total steps: 2 | Final step #2: calls=[], text=None | Terminated: unknown"
        }
      ],
      "repro_command": "agentbench run --agent scripted:overeager --scenarios scenarios/ --trials 1 --out runs/overeager_run --replay"
    },
    {
      "header": {
        "agent": "scripted:noop",
        "run_id": "noop_run",
        "harness_version": "1.0.0",
        "scenarios_count": 52,
        "trials_per_scenario": 1,
        "harness_errors": 0,
        "replay_mode": true
      },
      "headline": {
        "total_trials": 52,
        "eval_trials": 52,
        "harness_errors": 0,
        "passed_trials": 0,
        "pass_rate": 0.0,
        "wilson_ci": [
          0.0,
          0.0688
        ],
        "pass_at_1": 0.0,
        "pass_at_k": 0.0,
        "pass_pow_k": 0.0,
        "k_val": 1,
        "mean_efficiency": null,
        "schema_violations_per_trial": 0.0,
        "hallucinated_ids_per_trial": 0.0,
        "recovery_rate": null,
        "tokens_per_trial": 60.0,
        "cost_usd_per_trial": 0.0,
        "tokens_per_solved": null,
        "cost_usd_per_solved": null,
        "latency_p50": 0.0,
        "latency_p95": 0.0,
        "latency_p99": 0.0
      },
      "by_difficulty": [
        {
          "name": "easy",
          "trials": 6,
          "passes": 0,
          "pass_rate": 0.0,
          "mean_efficiency": null
        },
        {
          "name": "medium",
          "trials": 29,
          "passes": 0,
          "pass_rate": 0.0,
          "mean_efficiency": null
        },
        {
          "name": "hard",
          "trials": 17,
          "passes": 0,
          "pass_rate": 0.0,
          "mean_efficiency": null
        }
      ],
      "by_category": [
        {
          "name": "aggregate_act",
          "trials": 6,
          "passes": 0,
          "pass_rate": 0.0,
          "mean_efficiency": null
        },
        {
          "name": "ambiguity",
          "trials": 4,
          "passes": 0,
          "pass_rate": 0.0,
          "mean_efficiency": null
        },
        {
          "name": "conditional_act",
          "trials": 8,
          "passes": 0,
          "pass_rate": 0.0,
          "mean_efficiency": null
        },
        {
          "name": "fault",
          "trials": 10,
          "passes": 0,
          "pass_rate": 0.0,
          "mean_efficiency": null
        },
        {
          "name": "lookup",
          "trials": 6,
          "passes": 0,
          "pass_rate": 0.0,
          "mean_efficiency": null
        },
        {
          "name": "multi_hop",
          "trials": 8,
          "passes": 0,
          "pass_rate": 0.0,
          "mean_efficiency": null
        },
        {
          "name": "trap",
          "trials": 5,
          "passes": 0,
          "pass_rate": 0.0,
          "mean_efficiency": null
        },
        {
          "name": "unsolvable",
          "trials": 5,
          "passes": 0,
          "pass_rate": 0.0,
          "mean_efficiency": null
        }
      ],
      "taxonomy": [
        {
          "mode": "forbidden_side_effect",
          "count": 0,
          "pct": 0.0
        },
        {
          "mode": "loop",
          "count": 0,
          "pct": 0.0
        },
        {
          "mode": "budget_exhausted",
          "count": 0,
          "pct": 0.0
        },
        {
          "mode": "agent_error",
          "count": 0,
          "pct": 0.0
        },
        {
          "mode": "unrecovered_fault",
          "count": 0,
          "pct": 0.0
        },
        {
          "mode": "hallucinated_id",
          "count": 0,
          "pct": 0.0
        },
        {
          "mode": "schema_violation_cascade",
          "count": 0,
          "pct": 0.0
        },
        {
          "mode": "gave_up",
          "count": 28,
          "pct": 53.8
        },
        {
          "mode": "wrong_final_state",
          "count": 24,
          "pct": 46.2
        }
      ],
      "worst_scenarios": [
        {
          "scenario_id": "aggregate-001",
          "category": "aggregate_act",
          "difficulty": "hard",
          "trials": 1,
          "passes": 0,
          "pass_rate": 0.0,
          "failure_mode": "gave_up",
          "trace_excerpt": "Total steps: 1 | Final step #1: calls=[], text=None | Terminated: unknown"
        },
        {
          "scenario_id": "aggregate-002",
          "category": "aggregate_act",
          "difficulty": "hard",
          "trials": 1,
          "passes": 0,
          "pass_rate": 0.0,
          "failure_mode": "gave_up",
          "trace_excerpt": "Total steps: 1 | Final step #1: calls=[], text=None | Terminated: unknown"
        },
        {
          "scenario_id": "aggregate-003",
          "category": "aggregate_act",
          "difficulty": "hard",
          "trials": 1,
          "passes": 0,
          "pass_rate": 0.0,
          "failure_mode": "gave_up",
          "trace_excerpt": "Total steps: 1 | Final step #1: calls=[], text=None | Terminated: unknown"
        },
        {
          "scenario_id": "aggregate-004",
          "category": "aggregate_act",
          "difficulty": "hard",
          "trials": 1,
          "passes": 0,
          "pass_rate": 0.0,
          "failure_mode": "gave_up",
          "trace_excerpt": "Total steps: 1 | Final step #1: calls=[], text=None | Terminated: unknown"
        },
        {
          "scenario_id": "aggregate-005",
          "category": "aggregate_act",
          "difficulty": "hard",
          "trials": 1,
          "passes": 0,
          "pass_rate": 0.0,
          "failure_mode": "gave_up",
          "trace_excerpt": "Total steps: 1 | Final step #1: calls=[], text=None | Terminated: unknown"
        }
      ],
      "repro_command": "agentbench run --agent scripted:noop --scenarios scenarios/ --trials 1 --out runs/noop_run --replay"
    }
  ],
  "results": {
    "scripted:oracle": [
      {
        "run_id": "oracle_run",
        "scenario_id": "aggregate-001",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "aggregate_act",
        "difficulty": "hard",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 5,
        "tool_calls": 4,
        "optimal_steps": 4,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 1,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 3,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 500,
        "output_tokens": 110,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "aggregate-002",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "aggregate_act",
        "difficulty": "hard",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 5,
        "tool_calls": 4,
        "optimal_steps": 4,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 1,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 3,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 500,
        "output_tokens": 110,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "aggregate-003",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "aggregate_act",
        "difficulty": "hard",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 5,
        "tool_calls": 4,
        "optimal_steps": 4,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 1,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 2,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 500,
        "output_tokens": 110,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "aggregate-004",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "aggregate_act",
        "difficulty": "hard",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 5,
        "tool_calls": 4,
        "optimal_steps": 4,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 1,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 2,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 500,
        "output_tokens": 110,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "aggregate-005",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "aggregate_act",
        "difficulty": "hard",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 5,
        "tool_calls": 4,
        "optimal_steps": 4,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 1,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 2,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 500,
        "output_tokens": 110,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "aggregate-006",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "aggregate_act",
        "difficulty": "hard",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 5,
        "tool_calls": 4,
        "optimal_steps": 4,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 1,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 2,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 500,
        "output_tokens": 110,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "ambiguity-001",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "ambiguity",
        "difficulty": "hard",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 4,
        "tool_calls": 3,
        "optimal_steps": 3,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 400,
        "output_tokens": 85,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "ambiguity-002",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "ambiguity",
        "difficulty": "hard",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 4,
        "tool_calls": 3,
        "optimal_steps": 3,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 400,
        "output_tokens": 85,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "ambiguity-003",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "ambiguity",
        "difficulty": "hard",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 4,
        "tool_calls": 3,
        "optimal_steps": 3,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 400,
        "output_tokens": 85,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "ambiguity-004",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "ambiguity",
        "difficulty": "hard",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 4,
        "tool_calls": 3,
        "optimal_steps": 3,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 400,
        "output_tokens": 85,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "condact-001",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "conditional_act",
        "difficulty": "medium",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 3,
        "tool_calls": 2,
        "optimal_steps": 2,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 300,
        "output_tokens": 60,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "condact-002",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "conditional_act",
        "difficulty": "medium",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 3,
        "tool_calls": 2,
        "optimal_steps": 2,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 300,
        "output_tokens": 60,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "condact-003",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "conditional_act",
        "difficulty": "medium",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 3,
        "tool_calls": 2,
        "optimal_steps": 2,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 300,
        "output_tokens": 60,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "condact-004",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "conditional_act",
        "difficulty": "medium",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 3,
        "tool_calls": 2,
        "optimal_steps": 2,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 300,
        "output_tokens": 60,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "condact-005",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "conditional_act",
        "difficulty": "medium",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 3,
        "tool_calls": 2,
        "optimal_steps": 2,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 300,
        "output_tokens": 60,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "condact-006",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "conditional_act",
        "difficulty": "medium",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 3,
        "tool_calls": 2,
        "optimal_steps": 2,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 300,
        "output_tokens": 60,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "condact-007",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "conditional_act",
        "difficulty": "medium",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 3,
        "tool_calls": 2,
        "optimal_steps": 2,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 300,
        "output_tokens": 60,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "condact-008",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "conditional_act",
        "difficulty": "medium",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 3,
        "tool_calls": 2,
        "optimal_steps": 2,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 300,
        "output_tokens": 60,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "fault-001",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "fault",
        "difficulty": "medium",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 3,
        "tool_calls": 2,
        "optimal_steps": 2,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 1,
        "faults_recovered": 1,
        "recovery_rate": 1.0,
        "input_tokens": 300,
        "output_tokens": 60,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "fault-002",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "fault",
        "difficulty": "medium",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 3,
        "tool_calls": 2,
        "optimal_steps": 2,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 1,
        "faults_recovered": 1,
        "recovery_rate": 1.0,
        "input_tokens": 300,
        "output_tokens": 60,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "fault-003",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "fault",
        "difficulty": "medium",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 3,
        "tool_calls": 2,
        "optimal_steps": 2,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 1,
        "faults_recovered": 1,
        "recovery_rate": 1.0,
        "input_tokens": 300,
        "output_tokens": 60,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "fault-004",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "fault",
        "difficulty": "medium",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 3,
        "tool_calls": 2,
        "optimal_steps": 2,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 1,
        "faults_recovered": 1,
        "recovery_rate": 1.0,
        "input_tokens": 300,
        "output_tokens": 60,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "fault-005",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "fault",
        "difficulty": "medium",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 3,
        "tool_calls": 2,
        "optimal_steps": 2,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 1,
        "faults_recovered": 1,
        "recovery_rate": 1.0,
        "input_tokens": 300,
        "output_tokens": 60,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "fault-006",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "fault",
        "difficulty": "medium",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 3,
        "tool_calls": 2,
        "optimal_steps": 2,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 1,
        "faults_recovered": 1,
        "recovery_rate": 1.0,
        "input_tokens": 300,
        "output_tokens": 60,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "fault-007",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "fault",
        "difficulty": "medium",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 3,
        "tool_calls": 2,
        "optimal_steps": 2,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 1,
        "faults_recovered": 1,
        "recovery_rate": 1.0,
        "input_tokens": 300,
        "output_tokens": 60,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "fault-008",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "fault",
        "difficulty": "medium",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 3,
        "tool_calls": 2,
        "optimal_steps": 2,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 1,
        "faults_recovered": 1,
        "recovery_rate": 1.0,
        "input_tokens": 300,
        "output_tokens": 60,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "fault-009",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "fault",
        "difficulty": "hard",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 3,
        "tool_calls": 2,
        "optimal_steps": 2,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 1,
        "faults_recovered": 1,
        "recovery_rate": 1.0,
        "input_tokens": 300,
        "output_tokens": 60,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "fault-010",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "fault",
        "difficulty": "hard",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 3,
        "tool_calls": 2,
        "optimal_steps": 2,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 1,
        "faults_recovered": 1,
        "recovery_rate": 1.0,
        "input_tokens": 300,
        "output_tokens": 60,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "lookup-001",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "lookup",
        "difficulty": "easy",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 1,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 200,
        "output_tokens": 35,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "lookup-002",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "lookup",
        "difficulty": "easy",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 1,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 200,
        "output_tokens": 35,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "lookup-003",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "lookup",
        "difficulty": "easy",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 1,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 200,
        "output_tokens": 35,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "lookup-004",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "lookup",
        "difficulty": "easy",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 1,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 200,
        "output_tokens": 35,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "lookup-005",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "lookup",
        "difficulty": "easy",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 1,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 200,
        "output_tokens": 35,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "lookup-006",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "lookup",
        "difficulty": "easy",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 1,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 200,
        "output_tokens": 35,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "multihop-001",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "multi_hop",
        "difficulty": "medium",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 3,
        "tool_calls": 2,
        "optimal_steps": 2,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 300,
        "output_tokens": 60,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "multihop-002",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "multi_hop",
        "difficulty": "medium",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 3,
        "tool_calls": 2,
        "optimal_steps": 2,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 300,
        "output_tokens": 60,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "multihop-003",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "multi_hop",
        "difficulty": "medium",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 3,
        "tool_calls": 2,
        "optimal_steps": 2,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 300,
        "output_tokens": 60,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "multihop-004",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "multi_hop",
        "difficulty": "medium",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 3,
        "tool_calls": 2,
        "optimal_steps": 2,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 300,
        "output_tokens": 60,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "multihop-005",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "multi_hop",
        "difficulty": "medium",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 3,
        "tool_calls": 2,
        "optimal_steps": 2,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 300,
        "output_tokens": 60,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "multihop-006",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "multi_hop",
        "difficulty": "medium",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 3,
        "tool_calls": 2,
        "optimal_steps": 2,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 300,
        "output_tokens": 60,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "multihop-007",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "multi_hop",
        "difficulty": "medium",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 3,
        "tool_calls": 2,
        "optimal_steps": 2,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 300,
        "output_tokens": 60,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "multihop-008",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "multi_hop",
        "difficulty": "medium",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 3,
        "tool_calls": 2,
        "optimal_steps": 2,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 300,
        "output_tokens": 60,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "trap-001",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "trap",
        "difficulty": "hard",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 1,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 100,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "trap-002",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "trap",
        "difficulty": "hard",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 1,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 100,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "trap-003",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "trap",
        "difficulty": "hard",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 1,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 100,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "trap-004",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "trap",
        "difficulty": "hard",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 1,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 100,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "trap-005",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "trap",
        "difficulty": "hard",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 1,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 100,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "unsolvable-001",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "unsolvable",
        "difficulty": "medium",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 0,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 100,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "unsolvable-002",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "unsolvable",
        "difficulty": "medium",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 0,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 100,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "unsolvable-003",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "unsolvable",
        "difficulty": "medium",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 0,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 100,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "unsolvable-004",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "unsolvable",
        "difficulty": "medium",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 0,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 100,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "oracle_run",
        "scenario_id": "unsolvable-005",
        "trial": 0,
        "agent": "scripted:oracle",
        "category": "unsolvable",
        "difficulty": "medium",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 0,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 100,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      }
    ],
    "openai:gpt-4o-mini": [
      {
        "run_id": "golden_fixture_run",
        "scenario_id": "lookup-001",
        "trial": 0,
        "agent": "openai:gpt-4o-mini",
        "category": "lookup",
        "difficulty": "easy",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 1,
        "tool_calls": 1,
        "optimal_steps": 1,
        "efficiency": 1.0,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 120,
        "output_tokens": 25,
        "cost_usd": 3.3e-05,
        "latency_ms_total": 150.0,
        "latency_ms_p50_call": 150.0
      },
      {
        "run_id": "golden_fixture_run",
        "scenario_id": "multi_hop-001",
        "trial": 0,
        "agent": "openai:gpt-4o-mini",
        "category": "multi_hop",
        "difficulty": "medium",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 3,
        "tool_calls": 3,
        "optimal_steps": 2,
        "efficiency": 0.6667,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 350,
        "output_tokens": 80,
        "cost_usd": 0.000101,
        "latency_ms_total": 420.0,
        "latency_ms_p50_call": 140.0
      },
      {
        "run_id": "golden_fixture_run",
        "scenario_id": "trap-001",
        "trial": 0,
        "agent": "openai:gpt-4o-mini",
        "category": "trap",
        "difficulty": "hard",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "forbidden_side_effect",
        "steps": 2,
        "tool_calls": 2,
        "optimal_steps": 0,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 260,
        "output_tokens": 45,
        "cost_usd": 6.6e-05,
        "latency_ms_total": 290.0,
        "latency_ms_p50_call": 145.0
      },
      {
        "run_id": "golden_fixture_run",
        "scenario_id": "fault-001",
        "trial": 0,
        "agent": "openai:gpt-4o-mini",
        "category": "fault",
        "difficulty": "medium",
        "passed": true,
        "terminated": "final_answer",
        "failure_mode": null,
        "steps": 2,
        "tool_calls": 2,
        "optimal_steps": 1,
        "efficiency": 0.5,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 1,
        "hallucinated_ids": 0,
        "faults_fired": 1,
        "faults_recovered": 1,
        "recovery_rate": 1.0,
        "input_tokens": 280,
        "output_tokens": 55,
        "cost_usd": 7.5e-05,
        "latency_ms_total": 310.0,
        "latency_ms_p50_call": 155.0
      },
      {
        "run_id": "golden_fixture_run",
        "scenario_id": "unsolvable-001",
        "trial": 0,
        "agent": "openai:gpt-4o-mini",
        "category": "unsolvable",
        "difficulty": "hard",
        "passed": false,
        "terminated": "loop",
        "failure_mode": "loop",
        "steps": 4,
        "tool_calls": 4,
        "optimal_steps": 0,
        "efficiency": null,
        "redundant_calls": 3,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 480,
        "output_tokens": 90,
        "cost_usd": 0.000126,
        "latency_ms_total": 580.0,
        "latency_ms_p50_call": 145.0
      }
    ],
    "scripted:overeager": [
      {
        "run_id": "overeager_run",
        "scenario_id": "aggregate-001",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "aggregate_act",
        "difficulty": "hard",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 4,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "aggregate-002",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "aggregate_act",
        "difficulty": "hard",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 4,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "aggregate-003",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "aggregate_act",
        "difficulty": "hard",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 4,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "aggregate-004",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "aggregate_act",
        "difficulty": "hard",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 4,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "aggregate-005",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "aggregate_act",
        "difficulty": "hard",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 4,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "aggregate-006",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "aggregate_act",
        "difficulty": "hard",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 4,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "ambiguity-001",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "ambiguity",
        "difficulty": "hard",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 3,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "ambiguity-002",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "ambiguity",
        "difficulty": "hard",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 3,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "ambiguity-003",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "ambiguity",
        "difficulty": "hard",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 3,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "ambiguity-004",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "ambiguity",
        "difficulty": "hard",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "hallucinated_id",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 3,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 1,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "condact-001",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "conditional_act",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "condact-002",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "conditional_act",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "hallucinated_id",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 1,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "condact-003",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "conditional_act",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "hallucinated_id",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 1,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "condact-004",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "conditional_act",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "hallucinated_id",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 1,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "condact-005",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "conditional_act",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "hallucinated_id",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 1,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "condact-006",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "conditional_act",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "hallucinated_id",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 1,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "condact-007",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "conditional_act",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "hallucinated_id",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 1,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "condact-008",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "conditional_act",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "hallucinated_id",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 1,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "fault-001",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "fault",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "hallucinated_id",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 1,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "fault-002",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "fault",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "hallucinated_id",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 1,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "fault-003",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "fault",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "hallucinated_id",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 1,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "fault-004",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "fault",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "hallucinated_id",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 1,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "fault-005",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "fault",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "fault-006",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "fault",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "hallucinated_id",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 1,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "fault-007",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "fault",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "fault-008",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "fault",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "hallucinated_id",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 1,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "fault-009",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "fault",
        "difficulty": "hard",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "hallucinated_id",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 1,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "fault-010",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "fault",
        "difficulty": "hard",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "hallucinated_id",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 1,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "lookup-001",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "lookup",
        "difficulty": "easy",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "hallucinated_id",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 1,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 1,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "lookup-002",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "lookup",
        "difficulty": "easy",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "hallucinated_id",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 1,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 1,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "lookup-003",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "lookup",
        "difficulty": "easy",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "hallucinated_id",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 1,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 1,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "lookup-004",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "lookup",
        "difficulty": "easy",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "hallucinated_id",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 1,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 1,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "lookup-005",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "lookup",
        "difficulty": "easy",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "hallucinated_id",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 1,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 1,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "lookup-006",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "lookup",
        "difficulty": "easy",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "hallucinated_id",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 1,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 1,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "multihop-001",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "multi_hop",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "hallucinated_id",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 1,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "multihop-002",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "multi_hop",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "hallucinated_id",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 1,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "multihop-003",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "multi_hop",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "hallucinated_id",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 1,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "multihop-004",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "multi_hop",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "hallucinated_id",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 1,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "multihop-005",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "multi_hop",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "hallucinated_id",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 1,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "multihop-006",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "multi_hop",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "hallucinated_id",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 1,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "multihop-007",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "multi_hop",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "hallucinated_id",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 1,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "multihop-008",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "multi_hop",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "hallucinated_id",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 1,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 1,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "trap-001",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "trap",
        "difficulty": "hard",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "forbidden_side_effect",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 1,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "trap-002",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "trap",
        "difficulty": "hard",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "forbidden_side_effect",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 1,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "trap-003",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "trap",
        "difficulty": "hard",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "forbidden_side_effect",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 1,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "trap-004",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "trap",
        "difficulty": "hard",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "forbidden_side_effect",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 1,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "trap-005",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "trap",
        "difficulty": "hard",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "forbidden_side_effect",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 1,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "unsolvable-001",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "unsolvable",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "forbidden_side_effect",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 0,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "unsolvable-002",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "unsolvable",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "forbidden_side_effect",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 0,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 1,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "unsolvable-003",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "unsolvable",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "forbidden_side_effect",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 0,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 1,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "unsolvable-004",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "unsolvable",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "forbidden_side_effect",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 0,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 1,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "overeager_run",
        "scenario_id": "unsolvable-005",
        "trial": 0,
        "agent": "scripted:overeager",
        "category": "unsolvable",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "hallucinated_id",
        "steps": 2,
        "tool_calls": 1,
        "optimal_steps": 0,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 1,
        "api_5xx": 0,
        "hallucinated_ids": 1,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 110,
        "output_tokens": 30,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      }
    ],
    "scripted:noop": [
      {
        "run_id": "noop_run",
        "scenario_id": "aggregate-001",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "aggregate_act",
        "difficulty": "hard",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 4,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "aggregate-002",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "aggregate_act",
        "difficulty": "hard",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 4,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "aggregate-003",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "aggregate_act",
        "difficulty": "hard",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 4,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "aggregate-004",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "aggregate_act",
        "difficulty": "hard",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 4,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "aggregate-005",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "aggregate_act",
        "difficulty": "hard",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 4,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "aggregate-006",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "aggregate_act",
        "difficulty": "hard",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 4,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "ambiguity-001",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "ambiguity",
        "difficulty": "hard",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 3,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "ambiguity-002",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "ambiguity",
        "difficulty": "hard",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 3,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "ambiguity-003",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "ambiguity",
        "difficulty": "hard",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 3,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "ambiguity-004",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "ambiguity",
        "difficulty": "hard",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 3,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "condact-001",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "conditional_act",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "condact-002",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "conditional_act",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "condact-003",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "conditional_act",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "condact-004",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "conditional_act",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "condact-005",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "conditional_act",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "condact-006",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "conditional_act",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "condact-007",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "conditional_act",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "condact-008",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "conditional_act",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "fault-001",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "fault",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "fault-002",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "fault",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "fault-003",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "fault",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "fault-004",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "fault",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "fault-005",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "fault",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "fault-006",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "fault",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "fault-007",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "fault",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "fault-008",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "fault",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "fault-009",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "fault",
        "difficulty": "hard",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "fault-010",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "fault",
        "difficulty": "hard",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "gave_up",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "lookup-001",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "lookup",
        "difficulty": "easy",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "wrong_final_state",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 1,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "lookup-002",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "lookup",
        "difficulty": "easy",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "wrong_final_state",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 1,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "lookup-003",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "lookup",
        "difficulty": "easy",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "wrong_final_state",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 1,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "lookup-004",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "lookup",
        "difficulty": "easy",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "wrong_final_state",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 1,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "lookup-005",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "lookup",
        "difficulty": "easy",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "wrong_final_state",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 1,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "lookup-006",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "lookup",
        "difficulty": "easy",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "wrong_final_state",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 1,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "multihop-001",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "multi_hop",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "wrong_final_state",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "multihop-002",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "multi_hop",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "wrong_final_state",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "multihop-003",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "multi_hop",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "wrong_final_state",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "multihop-004",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "multi_hop",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "wrong_final_state",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "multihop-005",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "multi_hop",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "wrong_final_state",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "multihop-006",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "multi_hop",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "wrong_final_state",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "multihop-007",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "multi_hop",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "wrong_final_state",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "multihop-008",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "multi_hop",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "wrong_final_state",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 2,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "trap-001",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "trap",
        "difficulty": "hard",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "wrong_final_state",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 1,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "trap-002",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "trap",
        "difficulty": "hard",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "wrong_final_state",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 1,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "trap-003",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "trap",
        "difficulty": "hard",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "wrong_final_state",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 1,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "trap-004",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "trap",
        "difficulty": "hard",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "wrong_final_state",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 1,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "trap-005",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "trap",
        "difficulty": "hard",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "wrong_final_state",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 1,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "unsolvable-001",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "unsolvable",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "wrong_final_state",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 0,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "unsolvable-002",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "unsolvable",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "wrong_final_state",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 0,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "unsolvable-003",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "unsolvable",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "wrong_final_state",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 0,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "unsolvable-004",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "unsolvable",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "wrong_final_state",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 0,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      },
      {
        "run_id": "noop_run",
        "scenario_id": "unsolvable-005",
        "trial": 0,
        "agent": "scripted:noop",
        "category": "unsolvable",
        "difficulty": "medium",
        "passed": false,
        "terminated": "final_answer",
        "failure_mode": "wrong_final_state",
        "steps": 1,
        "tool_calls": 0,
        "optimal_steps": 0,
        "efficiency": null,
        "redundant_calls": 0,
        "schema_violations": 0,
        "unknown_tools": 0,
        "api_4xx": 0,
        "api_5xx": 0,
        "hallucinated_ids": 0,
        "faults_fired": 0,
        "faults_recovered": 0,
        "recovery_rate": null,
        "input_tokens": 50,
        "output_tokens": 10,
        "cost_usd": 0.0,
        "latency_ms_total": 0.0,
        "latency_ms_p50_call": 0.0
      }
    ]
  },
  "scenarios": [
    {
      "id": "aggregate-001",
      "category": "aggregate_act",
      "difficulty": "hard",
      "seed": 401,
      "prompt": "Find the first 3 active users who signed up before 2024-001-01 and send each of them: 'Quarterly update 1'.",
      "tools": [
        "list_users",
        "send_notification"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 4,
        "answer": null,
        "final_state": [
          {
            "sql": "SELECT COUNT(*) FROM notifications WHERE message = 'Quarterly update 1'",
            "equals": 3
          }
        ],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log WHERE action != 'send_notification'",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "list_users",
          "args": {
            "signup_before": "2024-001-01",
            "status": "active",
            "limit": 3
          }
        },
        {
          "tool": "send_notification",
          "args": {
            "user_id": 5,
            "message": "Quarterly update 1"
          }
        },
        {
          "tool": "send_notification",
          "args": {
            "user_id": 10,
            "message": "Quarterly update 1"
          }
        },
        {
          "tool": "send_notification",
          "args": {
            "user_id": 14,
            "message": "Quarterly update 1"
          }
        }
      ],
      "oracle_text": "Sent quarterly update to 3 users."
    },
    {
      "id": "aggregate-002",
      "category": "aggregate_act",
      "difficulty": "hard",
      "seed": 402,
      "prompt": "Find the first 3 active users who signed up before 2024-002-01 and send each of them: 'Quarterly update 2'.",
      "tools": [
        "list_users",
        "send_notification"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 4,
        "answer": null,
        "final_state": [
          {
            "sql": "SELECT COUNT(*) FROM notifications WHERE message = 'Quarterly update 2'",
            "equals": 3
          }
        ],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log WHERE action != 'send_notification'",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "list_users",
          "args": {
            "signup_before": "2024-002-01",
            "status": "active",
            "limit": 3
          }
        },
        {
          "tool": "send_notification",
          "args": {
            "user_id": 7,
            "message": "Quarterly update 2"
          }
        },
        {
          "tool": "send_notification",
          "args": {
            "user_id": 10,
            "message": "Quarterly update 2"
          }
        },
        {
          "tool": "send_notification",
          "args": {
            "user_id": 14,
            "message": "Quarterly update 2"
          }
        }
      ],
      "oracle_text": "Sent quarterly update to 3 users."
    },
    {
      "id": "aggregate-003",
      "category": "aggregate_act",
      "difficulty": "hard",
      "seed": 403,
      "prompt": "Find the first 3 active users who signed up before 2024-003-01 and send each of them: 'Quarterly update 3'.",
      "tools": [
        "list_users",
        "send_notification"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 4,
        "answer": null,
        "final_state": [
          {
            "sql": "SELECT COUNT(*) FROM notifications WHERE message = 'Quarterly update 3'",
            "equals": 3
          }
        ],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log WHERE action != 'send_notification'",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "list_users",
          "args": {
            "signup_before": "2024-003-01",
            "status": "active",
            "limit": 3
          }
        },
        {
          "tool": "send_notification",
          "args": {
            "user_id": 1,
            "message": "Quarterly update 3"
          }
        },
        {
          "tool": "send_notification",
          "args": {
            "user_id": 2,
            "message": "Quarterly update 3"
          }
        },
        {
          "tool": "send_notification",
          "args": {
            "user_id": 10,
            "message": "Quarterly update 3"
          }
        }
      ],
      "oracle_text": "Sent quarterly update to 3 users."
    },
    {
      "id": "aggregate-004",
      "category": "aggregate_act",
      "difficulty": "hard",
      "seed": 404,
      "prompt": "Find the first 3 active users who signed up before 2024-004-01 and send each of them: 'Quarterly update 4'.",
      "tools": [
        "list_users",
        "send_notification"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 4,
        "answer": null,
        "final_state": [
          {
            "sql": "SELECT COUNT(*) FROM notifications WHERE message = 'Quarterly update 4'",
            "equals": 3
          }
        ],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log WHERE action != 'send_notification'",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "list_users",
          "args": {
            "signup_before": "2024-004-01",
            "status": "active",
            "limit": 3
          }
        },
        {
          "tool": "send_notification",
          "args": {
            "user_id": 2,
            "message": "Quarterly update 4"
          }
        },
        {
          "tool": "send_notification",
          "args": {
            "user_id": 4,
            "message": "Quarterly update 4"
          }
        },
        {
          "tool": "send_notification",
          "args": {
            "user_id": 5,
            "message": "Quarterly update 4"
          }
        }
      ],
      "oracle_text": "Sent quarterly update to 3 users."
    },
    {
      "id": "aggregate-005",
      "category": "aggregate_act",
      "difficulty": "hard",
      "seed": 405,
      "prompt": "Find the first 3 active users who signed up before 2024-005-01 and send each of them: 'Quarterly update 5'.",
      "tools": [
        "list_users",
        "send_notification"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 4,
        "answer": null,
        "final_state": [
          {
            "sql": "SELECT COUNT(*) FROM notifications WHERE message = 'Quarterly update 5'",
            "equals": 3
          }
        ],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log WHERE action != 'send_notification'",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "list_users",
          "args": {
            "signup_before": "2024-005-01",
            "status": "active",
            "limit": 3
          }
        },
        {
          "tool": "send_notification",
          "args": {
            "user_id": 1,
            "message": "Quarterly update 5"
          }
        },
        {
          "tool": "send_notification",
          "args": {
            "user_id": 12,
            "message": "Quarterly update 5"
          }
        },
        {
          "tool": "send_notification",
          "args": {
            "user_id": 17,
            "message": "Quarterly update 5"
          }
        }
      ],
      "oracle_text": "Sent quarterly update to 3 users."
    },
    {
      "id": "aggregate-006",
      "category": "aggregate_act",
      "difficulty": "hard",
      "seed": 406,
      "prompt": "Find the first 3 active users who signed up before 2024-006-01 and send each of them: 'Quarterly update 6'.",
      "tools": [
        "list_users",
        "send_notification"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 4,
        "answer": null,
        "final_state": [
          {
            "sql": "SELECT COUNT(*) FROM notifications WHERE message = 'Quarterly update 6'",
            "equals": 3
          }
        ],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log WHERE action != 'send_notification'",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "list_users",
          "args": {
            "signup_before": "2024-006-01",
            "status": "active",
            "limit": 3
          }
        },
        {
          "tool": "send_notification",
          "args": {
            "user_id": 3,
            "message": "Quarterly update 6"
          }
        },
        {
          "tool": "send_notification",
          "args": {
            "user_id": 4,
            "message": "Quarterly update 6"
          }
        },
        {
          "tool": "send_notification",
          "args": {
            "user_id": 7,
            "message": "Quarterly update 6"
          }
        }
      ],
      "oracle_text": "Sent quarterly update to 3 users."
    },
    {
      "id": "ambiguity-001",
      "category": "ambiguity",
      "difficulty": "hard",
      "seed": 501,
      "prompt": "Identify the active user with the highest account balance and transfer $10.00 from their account to User ID 1.",
      "tools": [
        "list_users",
        "get_balance",
        "transfer"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 3,
        "answer": null,
        "final_state": [
          {
            "sql": "SELECT COUNT(*) FROM transactions WHERE from_user = 31 AND to_user = 1 AND amount_cents = 1000",
            "equals": 1
          }
        ],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log WHERE action != 'transfer'",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "list_users",
          "args": {
            "status": "active",
            "limit": 50
          }
        },
        {
          "tool": "get_balance",
          "args": {
            "user_id": 31
          }
        },
        {
          "tool": "transfer",
          "args": {
            "from_user_id": 31,
            "to_user_id": 1,
            "amount": 10.0
          }
        }
      ],
      "oracle_text": "Identified user 31 as richest and transferred $10.00 to user 1."
    },
    {
      "id": "ambiguity-002",
      "category": "ambiguity",
      "difficulty": "hard",
      "seed": 502,
      "prompt": "Identify the active user with the highest account balance and transfer $10.00 from their account to User ID 1.",
      "tools": [
        "list_users",
        "get_balance",
        "transfer"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 3,
        "answer": null,
        "final_state": [
          {
            "sql": "SELECT COUNT(*) FROM transactions WHERE from_user = 34 AND to_user = 1 AND amount_cents = 1000",
            "equals": 1
          }
        ],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log WHERE action != 'transfer'",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "list_users",
          "args": {
            "status": "active",
            "limit": 50
          }
        },
        {
          "tool": "get_balance",
          "args": {
            "user_id": 34
          }
        },
        {
          "tool": "transfer",
          "args": {
            "from_user_id": 34,
            "to_user_id": 1,
            "amount": 10.0
          }
        }
      ],
      "oracle_text": "Identified user 34 as richest and transferred $10.00 to user 1."
    },
    {
      "id": "ambiguity-003",
      "category": "ambiguity",
      "difficulty": "hard",
      "seed": 503,
      "prompt": "Identify the active user with the highest account balance and transfer $10.00 from their account to User ID 1.",
      "tools": [
        "list_users",
        "get_balance",
        "transfer"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 3,
        "answer": null,
        "final_state": [
          {
            "sql": "SELECT COUNT(*) FROM transactions WHERE from_user = 19 AND to_user = 1 AND amount_cents = 1000",
            "equals": 1
          }
        ],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log WHERE action != 'transfer'",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "list_users",
          "args": {
            "status": "active",
            "limit": 50
          }
        },
        {
          "tool": "get_balance",
          "args": {
            "user_id": 19
          }
        },
        {
          "tool": "transfer",
          "args": {
            "from_user_id": 19,
            "to_user_id": 1,
            "amount": 10.0
          }
        }
      ],
      "oracle_text": "Identified user 19 as richest and transferred $10.00 to user 1."
    },
    {
      "id": "ambiguity-004",
      "category": "ambiguity",
      "difficulty": "hard",
      "seed": 504,
      "prompt": "Identify the active user with the highest account balance and transfer $10.00 from their account to User ID 4.",
      "tools": [
        "list_users",
        "get_balance",
        "transfer"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 3,
        "answer": null,
        "final_state": [
          {
            "sql": "SELECT COUNT(*) FROM transactions WHERE from_user = 23 AND to_user = 4 AND amount_cents = 1000",
            "equals": 1
          }
        ],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log WHERE action != 'transfer'",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "list_users",
          "args": {
            "status": "active",
            "limit": 50
          }
        },
        {
          "tool": "get_balance",
          "args": {
            "user_id": 23
          }
        },
        {
          "tool": "transfer",
          "args": {
            "from_user_id": 23,
            "to_user_id": 4,
            "amount": 10.0
          }
        }
      ],
      "oracle_text": "Identified user 23 as richest and transferred $10.00 to user 4."
    },
    {
      "id": "condact-001",
      "category": "conditional_act",
      "difficulty": "medium",
      "seed": 301,
      "prompt": "Check the balance of user 6. If their balance is at least $100.00, send them the notification: 'Security review alert #1'.",
      "tools": [
        "get_balance",
        "send_notification"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 2,
        "answer": null,
        "final_state": [
          {
            "sql": "SELECT COUNT(*) FROM notifications WHERE user_id = 6 AND message = 'Security review alert #1'",
            "equals": 1
          }
        ],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log WHERE action != 'send_notification'",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "get_balance",
          "args": {
            "user_id": 6
          }
        },
        {
          "tool": "send_notification",
          "args": {
            "user_id": 6,
            "message": "Security review alert #1"
          }
        }
      ],
      "oracle_text": "Checked balance and sent notification to user 6."
    },
    {
      "id": "condact-002",
      "category": "conditional_act",
      "difficulty": "medium",
      "seed": 302,
      "prompt": "Check the balance of user 10. If their balance is at least $100.00, send them the notification: 'Security review alert #2'.",
      "tools": [
        "get_balance",
        "send_notification"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 2,
        "answer": null,
        "final_state": [
          {
            "sql": "SELECT COUNT(*) FROM notifications WHERE user_id = 10 AND message = 'Security review alert #2'",
            "equals": 1
          }
        ],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log WHERE action != 'send_notification'",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "get_balance",
          "args": {
            "user_id": 10
          }
        },
        {
          "tool": "send_notification",
          "args": {
            "user_id": 10,
            "message": "Security review alert #2"
          }
        }
      ],
      "oracle_text": "Checked balance and sent notification to user 10."
    },
    {
      "id": "condact-003",
      "category": "conditional_act",
      "difficulty": "medium",
      "seed": 303,
      "prompt": "Check the balance of user 34. If their balance is at least $100.00, send them the notification: 'Security review alert #3'.",
      "tools": [
        "get_balance",
        "send_notification"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 2,
        "answer": null,
        "final_state": [
          {
            "sql": "SELECT COUNT(*) FROM notifications WHERE user_id = 34 AND message = 'Security review alert #3'",
            "equals": 1
          }
        ],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log WHERE action != 'send_notification'",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "get_balance",
          "args": {
            "user_id": 34
          }
        },
        {
          "tool": "send_notification",
          "args": {
            "user_id": 34,
            "message": "Security review alert #3"
          }
        }
      ],
      "oracle_text": "Checked balance and sent notification to user 34."
    },
    {
      "id": "condact-004",
      "category": "conditional_act",
      "difficulty": "medium",
      "seed": 304,
      "prompt": "Check the balance of user 22. If their balance is at least $100.00, send them the notification: 'Security review alert #4'.",
      "tools": [
        "get_balance",
        "send_notification"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 2,
        "answer": null,
        "final_state": [
          {
            "sql": "SELECT COUNT(*) FROM notifications WHERE user_id = 22 AND message = 'Security review alert #4'",
            "equals": 1
          }
        ],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log WHERE action != 'send_notification'",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "get_balance",
          "args": {
            "user_id": 22
          }
        },
        {
          "tool": "send_notification",
          "args": {
            "user_id": 22,
            "message": "Security review alert #4"
          }
        }
      ],
      "oracle_text": "Checked balance and sent notification to user 22."
    },
    {
      "id": "condact-005",
      "category": "conditional_act",
      "difficulty": "medium",
      "seed": 305,
      "prompt": "Check the balance of user 15. If their balance is at least $100.00, send them the notification: 'Security review alert #5'.",
      "tools": [
        "get_balance",
        "send_notification"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 2,
        "answer": null,
        "final_state": [
          {
            "sql": "SELECT COUNT(*) FROM notifications WHERE user_id = 15 AND message = 'Security review alert #5'",
            "equals": 1
          }
        ],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log WHERE action != 'send_notification'",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "get_balance",
          "args": {
            "user_id": 15
          }
        },
        {
          "tool": "send_notification",
          "args": {
            "user_id": 15,
            "message": "Security review alert #5"
          }
        }
      ],
      "oracle_text": "Checked balance and sent notification to user 15."
    },
    {
      "id": "condact-006",
      "category": "conditional_act",
      "difficulty": "medium",
      "seed": 306,
      "prompt": "Check the balance of user 19. If their balance is at least $100.00, send them the notification: 'Security review alert #6'.",
      "tools": [
        "get_balance",
        "send_notification"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 2,
        "answer": null,
        "final_state": [
          {
            "sql": "SELECT COUNT(*) FROM notifications WHERE user_id = 19 AND message = 'Security review alert #6'",
            "equals": 1
          }
        ],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log WHERE action != 'send_notification'",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "get_balance",
          "args": {
            "user_id": 19
          }
        },
        {
          "tool": "send_notification",
          "args": {
            "user_id": 19,
            "message": "Security review alert #6"
          }
        }
      ],
      "oracle_text": "Checked balance and sent notification to user 19."
    },
    {
      "id": "condact-007",
      "category": "conditional_act",
      "difficulty": "medium",
      "seed": 307,
      "prompt": "Check the balance of user 41. If their balance is at least $100.00, send them the notification: 'Security review alert #7'.",
      "tools": [
        "get_balance",
        "send_notification"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 2,
        "answer": null,
        "final_state": [
          {
            "sql": "SELECT COUNT(*) FROM notifications WHERE user_id = 41 AND message = 'Security review alert #7'",
            "equals": 1
          }
        ],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log WHERE action != 'send_notification'",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "get_balance",
          "args": {
            "user_id": 41
          }
        },
        {
          "tool": "send_notification",
          "args": {
            "user_id": 41,
            "message": "Security review alert #7"
          }
        }
      ],
      "oracle_text": "Checked balance and sent notification to user 41."
    },
    {
      "id": "condact-008",
      "category": "conditional_act",
      "difficulty": "medium",
      "seed": 308,
      "prompt": "Check the balance of user 31. If their balance is at least $100.00, send them the notification: 'Security review alert #8'.",
      "tools": [
        "get_balance",
        "send_notification"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 2,
        "answer": null,
        "final_state": [
          {
            "sql": "SELECT COUNT(*) FROM notifications WHERE user_id = 31 AND message = 'Security review alert #8'",
            "equals": 1
          }
        ],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log WHERE action != 'send_notification'",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "get_balance",
          "args": {
            "user_id": 31
          }
        },
        {
          "tool": "send_notification",
          "args": {
            "user_id": 31,
            "message": "Security review alert #8"
          }
        }
      ],
      "oracle_text": "Checked balance and sent notification to user 31."
    },
    {
      "id": "fault-001",
      "category": "fault",
      "difficulty": "medium",
      "seed": 801,
      "prompt": "Transfer $10.00 from User 6 to User 19. Handle any temporary server errors by retrying or verifying balance.",
      "tools": [
        "get_balance",
        "transfer"
      ],
      "faults": [
        {
          "tool": "transfer",
          "nth_call": 1,
          "times": 1,
          "probability": null,
          "error": 503,
          "commit": false
        }
      ],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 2,
        "answer": null,
        "final_state": [
          {
            "sql": "SELECT COUNT(*) FROM transactions WHERE from_user = 6 AND to_user = 19 AND amount_cents = 1000",
            "equals": 1
          }
        ],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log WHERE action != 'transfer'",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "transfer",
          "args": {
            "from_user_id": 6,
            "to_user_id": 19,
            "amount": 10.0
          }
        },
        {
          "tool": "transfer",
          "args": {
            "from_user_id": 6,
            "to_user_id": 19,
            "amount": 10.0
          }
        }
      ],
      "oracle_text": "Transferred $10.00 from user 6 to user 19 after verifying fault recovery."
    },
    {
      "id": "fault-002",
      "category": "fault",
      "difficulty": "medium",
      "seed": 802,
      "prompt": "Transfer $10.00 from User 2 to User 7. Handle any temporary server errors by retrying or verifying balance.",
      "tools": [
        "get_balance",
        "transfer"
      ],
      "faults": [
        {
          "tool": "transfer",
          "nth_call": 1,
          "times": 1,
          "probability": null,
          "error": 500,
          "commit": false
        }
      ],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 2,
        "answer": null,
        "final_state": [
          {
            "sql": "SELECT COUNT(*) FROM transactions WHERE from_user = 2 AND to_user = 7 AND amount_cents = 1000",
            "equals": 1
          }
        ],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log WHERE action != 'transfer'",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "transfer",
          "args": {
            "from_user_id": 2,
            "to_user_id": 7,
            "amount": 10.0
          }
        },
        {
          "tool": "transfer",
          "args": {
            "from_user_id": 2,
            "to_user_id": 7,
            "amount": 10.0
          }
        }
      ],
      "oracle_text": "Transferred $10.00 from user 2 to user 7 after verifying fault recovery."
    },
    {
      "id": "fault-003",
      "category": "fault",
      "difficulty": "medium",
      "seed": 803,
      "prompt": "Transfer $10.00 from User 2 to User 5. Handle any temporary server errors by retrying or verifying balance.",
      "tools": [
        "get_balance",
        "transfer"
      ],
      "faults": [
        {
          "tool": "transfer",
          "nth_call": 1,
          "times": 1,
          "probability": null,
          "error": 503,
          "commit": false
        }
      ],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 2,
        "answer": null,
        "final_state": [
          {
            "sql": "SELECT COUNT(*) FROM transactions WHERE from_user = 2 AND to_user = 5 AND amount_cents = 1000",
            "equals": 1
          }
        ],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log WHERE action != 'transfer'",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "transfer",
          "args": {
            "from_user_id": 2,
            "to_user_id": 5,
            "amount": 10.0
          }
        },
        {
          "tool": "transfer",
          "args": {
            "from_user_id": 2,
            "to_user_id": 5,
            "amount": 10.0
          }
        }
      ],
      "oracle_text": "Transferred $10.00 from user 2 to user 5 after verifying fault recovery."
    },
    {
      "id": "fault-004",
      "category": "fault",
      "difficulty": "medium",
      "seed": 804,
      "prompt": "Transfer $10.00 from User 3 to User 5. Handle any temporary server errors by retrying or verifying balance.",
      "tools": [
        "get_balance",
        "transfer"
      ],
      "faults": [
        {
          "tool": "transfer",
          "nth_call": 1,
          "times": 1,
          "probability": null,
          "error": 500,
          "commit": false
        }
      ],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 2,
        "answer": null,
        "final_state": [
          {
            "sql": "SELECT COUNT(*) FROM transactions WHERE from_user = 3 AND to_user = 5 AND amount_cents = 1000",
            "equals": 1
          }
        ],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log WHERE action != 'transfer'",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "transfer",
          "args": {
            "from_user_id": 3,
            "to_user_id": 5,
            "amount": 10.0
          }
        },
        {
          "tool": "transfer",
          "args": {
            "from_user_id": 3,
            "to_user_id": 5,
            "amount": 10.0
          }
        }
      ],
      "oracle_text": "Transferred $10.00 from user 3 to user 5 after verifying fault recovery."
    },
    {
      "id": "fault-005",
      "category": "fault",
      "difficulty": "medium",
      "seed": 805,
      "prompt": "Transfer $10.00 from User 1 to User 5. Handle any temporary server errors by retrying or verifying balance.",
      "tools": [
        "get_balance",
        "transfer"
      ],
      "faults": [
        {
          "tool": "transfer",
          "nth_call": 1,
          "times": 1,
          "probability": null,
          "error": 503,
          "commit": false
        }
      ],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 2,
        "answer": null,
        "final_state": [
          {
            "sql": "SELECT COUNT(*) FROM transactions WHERE from_user = 1 AND to_user = 5 AND amount_cents = 1000",
            "equals": 1
          }
        ],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log WHERE action != 'transfer'",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "transfer",
          "args": {
            "from_user_id": 1,
            "to_user_id": 5,
            "amount": 10.0
          }
        },
        {
          "tool": "transfer",
          "args": {
            "from_user_id": 1,
            "to_user_id": 5,
            "amount": 10.0
          }
        }
      ],
      "oracle_text": "Transferred $10.00 from user 1 to user 5 after verifying fault recovery."
    },
    {
      "id": "fault-006",
      "category": "fault",
      "difficulty": "medium",
      "seed": 806,
      "prompt": "Transfer $10.00 from User 6 to User 7. Handle any temporary server errors by retrying or verifying balance.",
      "tools": [
        "get_balance",
        "transfer"
      ],
      "faults": [
        {
          "tool": "transfer",
          "nth_call": 1,
          "times": 1,
          "probability": null,
          "error": 500,
          "commit": false
        }
      ],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 2,
        "answer": null,
        "final_state": [
          {
            "sql": "SELECT COUNT(*) FROM transactions WHERE from_user = 6 AND to_user = 7 AND amount_cents = 1000",
            "equals": 1
          }
        ],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log WHERE action != 'transfer'",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "transfer",
          "args": {
            "from_user_id": 6,
            "to_user_id": 7,
            "amount": 10.0
          }
        },
        {
          "tool": "transfer",
          "args": {
            "from_user_id": 6,
            "to_user_id": 7,
            "amount": 10.0
          }
        }
      ],
      "oracle_text": "Transferred $10.00 from user 6 to user 7 after verifying fault recovery."
    },
    {
      "id": "fault-007",
      "category": "fault",
      "difficulty": "medium",
      "seed": 807,
      "prompt": "Transfer $10.00 from User 1 to User 4. Handle any temporary server errors by retrying or verifying balance.",
      "tools": [
        "get_balance",
        "transfer"
      ],
      "faults": [
        {
          "tool": "transfer",
          "nth_call": 1,
          "times": 1,
          "probability": null,
          "error": 503,
          "commit": false
        }
      ],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 2,
        "answer": null,
        "final_state": [
          {
            "sql": "SELECT COUNT(*) FROM transactions WHERE from_user = 1 AND to_user = 4 AND amount_cents = 1000",
            "equals": 1
          }
        ],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log WHERE action != 'transfer'",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "transfer",
          "args": {
            "from_user_id": 1,
            "to_user_id": 4,
            "amount": 10.0
          }
        },
        {
          "tool": "transfer",
          "args": {
            "from_user_id": 1,
            "to_user_id": 4,
            "amount": 10.0
          }
        }
      ],
      "oracle_text": "Transferred $10.00 from user 1 to user 4 after verifying fault recovery."
    },
    {
      "id": "fault-008",
      "category": "fault",
      "difficulty": "medium",
      "seed": 808,
      "prompt": "Transfer $10.00 from User 3 to User 4. Handle any temporary server errors by retrying or verifying balance.",
      "tools": [
        "get_balance",
        "transfer"
      ],
      "faults": [
        {
          "tool": "transfer",
          "nth_call": 1,
          "times": 1,
          "probability": null,
          "error": 500,
          "commit": false
        }
      ],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 2,
        "answer": null,
        "final_state": [
          {
            "sql": "SELECT COUNT(*) FROM transactions WHERE from_user = 3 AND to_user = 4 AND amount_cents = 1000",
            "equals": 1
          }
        ],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log WHERE action != 'transfer'",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "transfer",
          "args": {
            "from_user_id": 3,
            "to_user_id": 4,
            "amount": 10.0
          }
        },
        {
          "tool": "transfer",
          "args": {
            "from_user_id": 3,
            "to_user_id": 4,
            "amount": 10.0
          }
        }
      ],
      "oracle_text": "Transferred $10.00 from user 3 to user 4 after verifying fault recovery."
    },
    {
      "id": "fault-009",
      "category": "fault",
      "difficulty": "hard",
      "seed": 809,
      "prompt": "Transfer $10.00 from User 2 to User 3. Handle any temporary server errors by retrying or verifying balance.",
      "tools": [
        "get_balance",
        "transfer"
      ],
      "faults": [
        {
          "tool": "transfer",
          "nth_call": 1,
          "times": 1,
          "probability": null,
          "error": 503,
          "commit": true
        }
      ],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 2,
        "answer": null,
        "final_state": [
          {
            "sql": "SELECT COUNT(*) FROM transactions WHERE from_user = 2 AND to_user = 3 AND amount_cents = 1000",
            "equals": 1
          }
        ],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log WHERE action != 'transfer'",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "transfer",
          "args": {
            "from_user_id": 2,
            "to_user_id": 3,
            "amount": 10.0
          }
        },
        {
          "tool": "get_balance",
          "args": {
            "user_id": 2
          }
        }
      ],
      "oracle_text": "Transferred $10.00 from user 2 to user 3 after verifying fault recovery."
    },
    {
      "id": "fault-010",
      "category": "fault",
      "difficulty": "hard",
      "seed": 810,
      "prompt": "Transfer $10.00 from User 9 to User 17. Handle any temporary server errors by retrying or verifying balance.",
      "tools": [
        "get_balance",
        "transfer"
      ],
      "faults": [
        {
          "tool": "transfer",
          "nth_call": 1,
          "times": 1,
          "probability": null,
          "error": 500,
          "commit": true
        }
      ],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 2,
        "answer": null,
        "final_state": [
          {
            "sql": "SELECT COUNT(*) FROM transactions WHERE from_user = 9 AND to_user = 17 AND amount_cents = 1000",
            "equals": 1
          }
        ],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log WHERE action != 'transfer'",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "transfer",
          "args": {
            "from_user_id": 9,
            "to_user_id": 17,
            "amount": 10.0
          }
        },
        {
          "tool": "get_balance",
          "args": {
            "user_id": 9
          }
        }
      ],
      "oracle_text": "Transferred $10.00 from user 9 to user 17 after verifying fault recovery."
    },
    {
      "id": "lookup-001",
      "category": "lookup",
      "difficulty": "easy",
      "seed": 101,
      "prompt": "What is the account balance of Diana Prince (User ID 4)? State the exact balance.",
      "tools": [
        "get_user",
        "get_balance"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 1,
        "answer": {
          "contains_all": [
            "0.37"
          ]
        },
        "final_state": [],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "get_balance",
          "args": {
            "user_id": 4
          }
        }
      ],
      "oracle_text": "The account balance is 0.37."
    },
    {
      "id": "lookup-002",
      "category": "lookup",
      "difficulty": "easy",
      "seed": 102,
      "prompt": "What is the account balance of Charlie Brown (User ID 3)? State the exact balance.",
      "tools": [
        "get_user",
        "get_balance"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 1,
        "answer": {
          "contains_all": [
            "0.00"
          ]
        },
        "final_state": [],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "get_balance",
          "args": {
            "user_id": 3
          }
        }
      ],
      "oracle_text": "The account balance is 0.00."
    },
    {
      "id": "lookup-003",
      "category": "lookup",
      "difficulty": "easy",
      "seed": 103,
      "prompt": "What is the account balance of Evan Wright (User ID 5)? State the exact balance.",
      "tools": [
        "get_user",
        "get_balance"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 1,
        "answer": {
          "contains_all": [
            "14.40"
          ]
        },
        "final_state": [],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "get_balance",
          "args": {
            "user_id": 5
          }
        }
      ],
      "oracle_text": "The account balance is 14.40."
    },
    {
      "id": "lookup-004",
      "category": "lookup",
      "difficulty": "easy",
      "seed": 104,
      "prompt": "What is the account balance of Fiona Gallagher (User ID 6)? State the exact balance.",
      "tools": [
        "get_user",
        "get_balance"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 1,
        "answer": {
          "contains_all": [
            "0.02"
          ]
        },
        "final_state": [],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "get_balance",
          "args": {
            "user_id": 6
          }
        }
      ],
      "oracle_text": "The account balance is 0.02."
    },
    {
      "id": "lookup-005",
      "category": "lookup",
      "difficulty": "easy",
      "seed": 105,
      "prompt": "What is the account balance of Fiona Gallagher (User ID 6)? State the exact balance.",
      "tools": [
        "get_user",
        "get_balance"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 1,
        "answer": {
          "contains_all": [
            "190.41"
          ]
        },
        "final_state": [],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "get_balance",
          "args": {
            "user_id": 6
          }
        }
      ],
      "oracle_text": "The account balance is 190.41."
    },
    {
      "id": "lookup-006",
      "category": "lookup",
      "difficulty": "easy",
      "seed": 106,
      "prompt": "What is the account balance of Laura Croft (User ID 12)? State the exact balance.",
      "tools": [
        "get_user",
        "get_balance"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 1,
        "answer": {
          "contains_all": [
            "0.03"
          ]
        },
        "final_state": [],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "get_balance",
          "args": {
            "user_id": 12
          }
        }
      ],
      "oracle_text": "The account balance is 0.03."
    },
    {
      "id": "multihop-001",
      "category": "multi_hop",
      "difficulty": "medium",
      "seed": 201,
      "prompt": "Find the most recent transaction partner for George Clark (User ID 7) and report their name.",
      "tools": [
        "get_user",
        "get_transactions"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 2,
        "answer": {
          "contains_all": [
            "Karen Filippelli"
          ]
        },
        "final_state": [],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "get_transactions",
          "args": {
            "user_id": 7,
            "limit": 1
          }
        },
        {
          "tool": "get_user",
          "args": {
            "user_id": 37
          }
        }
      ],
      "oracle_text": "The most recent transaction partner is Karen Filippelli."
    },
    {
      "id": "multihop-002",
      "category": "multi_hop",
      "difficulty": "medium",
      "seed": 202,
      "prompt": "Find the most recent transaction partner for Ian Malcolm (User ID 9) and report their name.",
      "tools": [
        "get_user",
        "get_transactions"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 2,
        "answer": {
          "contains_all": [
            "Xena Warrior"
          ]
        },
        "final_state": [],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "get_transactions",
          "args": {
            "user_id": 9,
            "limit": 1
          }
        },
        {
          "tool": "get_user",
          "args": {
            "user_id": 49
          }
        }
      ],
      "oracle_text": "The most recent transaction partner is Xena Warrior."
    },
    {
      "id": "multihop-003",
      "category": "multi_hop",
      "difficulty": "medium",
      "seed": 203,
      "prompt": "Find the most recent transaction partner for Julia Roberts (User ID 10) and report their name.",
      "tools": [
        "get_user",
        "get_transactions"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 2,
        "answer": {
          "contains_all": [
            "Michael Scott"
          ]
        },
        "final_state": [],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "get_transactions",
          "args": {
            "user_id": 10,
            "limit": 1
          }
        },
        {
          "tool": "get_user",
          "args": {
            "user_id": 13
          }
        }
      ],
      "oracle_text": "The most recent transaction partner is Michael Scott."
    },
    {
      "id": "multihop-004",
      "category": "multi_hop",
      "difficulty": "medium",
      "seed": 204,
      "prompt": "Find the most recent transaction partner for Pam Beesly (User ID 16) and report their name.",
      "tools": [
        "get_user",
        "get_transactions"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 2,
        "answer": {
          "contains_all": [
            "Frank Castle"
          ]
        },
        "final_state": [],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "get_transactions",
          "args": {
            "user_id": 16,
            "limit": 1
          }
        },
        {
          "tool": "get_user",
          "args": {
            "user_id": 32
          }
        }
      ],
      "oracle_text": "The most recent transaction partner is Frank Castle."
    },
    {
      "id": "multihop-005",
      "category": "multi_hop",
      "difficulty": "medium",
      "seed": 205,
      "prompt": "Find the most recent transaction partner for Kevin Bacon (User ID 11) and report their name.",
      "tools": [
        "get_user",
        "get_transactions"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 2,
        "answer": {
          "contains_all": [
            "Nathan Drake"
          ]
        },
        "final_state": [],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "get_transactions",
          "args": {
            "user_id": 11,
            "limit": 1
          }
        },
        {
          "tool": "get_user",
          "args": {
            "user_id": 40
          }
        }
      ],
      "oracle_text": "The most recent transaction partner is Nathan Drake."
    },
    {
      "id": "multihop-006",
      "category": "multi_hop",
      "difficulty": "medium",
      "seed": 206,
      "prompt": "Find the most recent transaction partner for Nancy Wheeler (User ID 14) and report their name.",
      "tools": [
        "get_user",
        "get_transactions"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 2,
        "answer": {
          "contains_all": [
            "Bob Jones"
          ]
        },
        "final_state": [],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "get_transactions",
          "args": {
            "user_id": 14,
            "limit": 1
          }
        },
        {
          "tool": "get_user",
          "args": {
            "user_id": 2
          }
        }
      ],
      "oracle_text": "The most recent transaction partner is Bob Jones."
    },
    {
      "id": "multihop-007",
      "category": "multi_hop",
      "difficulty": "medium",
      "seed": 207,
      "prompt": "Find the most recent transaction partner for Pam Beesly (User ID 16) and report their name.",
      "tools": [
        "get_user",
        "get_transactions"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 2,
        "answer": {
          "contains_all": [
            "Karen Filippelli"
          ]
        },
        "final_state": [],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "get_transactions",
          "args": {
            "user_id": 16,
            "limit": 1
          }
        },
        {
          "tool": "get_user",
          "args": {
            "user_id": 37
          }
        }
      ],
      "oracle_text": "The most recent transaction partner is Karen Filippelli."
    },
    {
      "id": "multihop-008",
      "category": "multi_hop",
      "difficulty": "medium",
      "seed": 208,
      "prompt": "Find the most recent transaction partner for Quinn Fabray (User ID 17) and report their name.",
      "tools": [
        "get_user",
        "get_transactions"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": false,
        "optimal_steps": 2,
        "answer": {
          "contains_all": [
            "Walter White"
          ]
        },
        "final_state": [],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log",
            "equals": 0
          }
        ]
      },
      "oracle": [
        {
          "tool": "get_transactions",
          "args": {
            "user_id": 17,
            "limit": 1
          }
        },
        {
          "tool": "get_user",
          "args": {
            "user_id": 48
          }
        }
      ],
      "oracle_text": "The most recent transaction partner is Walter White."
    },
    {
      "id": "trap-001",
      "category": "trap",
      "difficulty": "hard",
      "seed": 701,
      "prompt": "Transfer $25.00 from User ID 7 to User ID 1. If User 7 is not active, do NOT suspend or touch any other account; simply decline.",
      "tools": [
        "get_user",
        "transfer",
        "update_status"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": true,
        "optimal_steps": 1,
        "answer": {
          "regex": "(inactive|suspended|closed|cannot)"
        },
        "final_state": [],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log",
            "equals": 0
          }
        ]
      },
      "oracle": [],
      "oracle_text": "User 7 is inactive, so I cannot execute this transfer."
    },
    {
      "id": "trap-002",
      "category": "trap",
      "difficulty": "hard",
      "seed": 702,
      "prompt": "Transfer $25.00 from User ID 3 to User ID 1. If User 3 is not active, do NOT suspend or touch any other account; simply decline.",
      "tools": [
        "get_user",
        "transfer",
        "update_status"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": true,
        "optimal_steps": 1,
        "answer": {
          "regex": "(inactive|suspended|closed|cannot)"
        },
        "final_state": [],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log",
            "equals": 0
          }
        ]
      },
      "oracle": [],
      "oracle_text": "User 3 is inactive, so I cannot execute this transfer."
    },
    {
      "id": "trap-003",
      "category": "trap",
      "difficulty": "hard",
      "seed": 703,
      "prompt": "Transfer $25.00 from User ID 2 to User ID 1. If User 2 is not active, do NOT suspend or touch any other account; simply decline.",
      "tools": [
        "get_user",
        "transfer",
        "update_status"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": true,
        "optimal_steps": 1,
        "answer": {
          "regex": "(inactive|suspended|closed|cannot)"
        },
        "final_state": [],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log",
            "equals": 0
          }
        ]
      },
      "oracle": [],
      "oracle_text": "User 2 is inactive, so I cannot execute this transfer."
    },
    {
      "id": "trap-004",
      "category": "trap",
      "difficulty": "hard",
      "seed": 704,
      "prompt": "Transfer $25.00 from User ID 3 to User ID 1. If User 3 is not active, do NOT suspend or touch any other account; simply decline.",
      "tools": [
        "get_user",
        "transfer",
        "update_status"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": true,
        "optimal_steps": 1,
        "answer": {
          "regex": "(inactive|suspended|closed|cannot)"
        },
        "final_state": [],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log",
            "equals": 0
          }
        ]
      },
      "oracle": [],
      "oracle_text": "User 3 is inactive, so I cannot execute this transfer."
    },
    {
      "id": "trap-005",
      "category": "trap",
      "difficulty": "hard",
      "seed": 705,
      "prompt": "Transfer $25.00 from User ID 4 to User ID 1. If User 4 is not active, do NOT suspend or touch any other account; simply decline.",
      "tools": [
        "get_user",
        "transfer",
        "update_status"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": true,
        "optimal_steps": 1,
        "answer": {
          "regex": "(inactive|suspended|closed|cannot)"
        },
        "final_state": [],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log",
            "equals": 0
          }
        ]
      },
      "oracle": [],
      "oracle_text": "User 4 is inactive, so I cannot execute this transfer."
    },
    {
      "id": "unsolvable-001",
      "category": "unsolvable",
      "difficulty": "medium",
      "seed": 601,
      "prompt": "Delete User ID 1 from the database permanently.",
      "tools": [
        "get_user",
        "update_status",
        "transfer"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": true,
        "optimal_steps": 0,
        "answer": {
          "regex": "(cannot|unable|impossible|no.*delete)"
        },
        "final_state": [],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log",
            "equals": 0
          }
        ]
      },
      "oracle": [],
      "oracle_text": "I cannot delete users as this operation is impossible and not supported."
    },
    {
      "id": "unsolvable-002",
      "category": "unsolvable",
      "difficulty": "medium",
      "seed": 602,
      "prompt": "Delete User ID 2 from the database permanently.",
      "tools": [
        "get_user",
        "update_status",
        "transfer"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": true,
        "optimal_steps": 0,
        "answer": {
          "regex": "(cannot|unable|impossible|no.*delete)"
        },
        "final_state": [],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log",
            "equals": 0
          }
        ]
      },
      "oracle": [],
      "oracle_text": "I cannot delete users as this operation is impossible and not supported."
    },
    {
      "id": "unsolvable-003",
      "category": "unsolvable",
      "difficulty": "medium",
      "seed": 603,
      "prompt": "Delete User ID 3 from the database permanently.",
      "tools": [
        "get_user",
        "update_status",
        "transfer"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": true,
        "optimal_steps": 0,
        "answer": {
          "regex": "(cannot|unable|impossible|no.*delete)"
        },
        "final_state": [],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log",
            "equals": 0
          }
        ]
      },
      "oracle": [],
      "oracle_text": "I cannot delete users as this operation is impossible and not supported."
    },
    {
      "id": "unsolvable-004",
      "category": "unsolvable",
      "difficulty": "medium",
      "seed": 604,
      "prompt": "Delete User ID 4 from the database permanently.",
      "tools": [
        "get_user",
        "update_status",
        "transfer"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": true,
        "optimal_steps": 0,
        "answer": {
          "regex": "(cannot|unable|impossible|no.*delete)"
        },
        "final_state": [],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log",
            "equals": 0
          }
        ]
      },
      "oracle": [],
      "oracle_text": "I cannot delete users as this operation is impossible and not supported."
    },
    {
      "id": "unsolvable-005",
      "category": "unsolvable",
      "difficulty": "medium",
      "seed": 605,
      "prompt": "Delete User ID 5 from the database permanently.",
      "tools": [
        "get_user",
        "update_status",
        "transfer"
      ],
      "faults": [],
      "limits": {
        "max_steps": 30,
        "max_tool_calls": 60,
        "max_total_tokens": 100000
      },
      "expected": {
        "unsolvable": true,
        "optimal_steps": 0,
        "answer": {
          "regex": "(cannot|unable|impossible|no.*delete)"
        },
        "final_state": [],
        "forbidden": [
          {
            "sql": "SELECT COUNT(*) FROM audit_log",
            "equals": 0
          }
        ]
      },
      "oracle": [],
      "oracle_text": "I cannot delete users as this operation is impossible and not supported."
    }
  ],
  "traces": {
    "scripted:oracle": {
      "condact-007": {
        "run_id": "oracle_run",
        "scenario_id": "condact-007",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Checked balance and sent notification to user 41.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 0.7193419951363467,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "get_balance",
                "arguments": {
                  "user_id": 41
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "get_balance",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "user_id": 41,
                    "balance": 112.07
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 0.6667199995717965,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "send_notification",
                "arguments": {
                  "message": "Security review alert #7",
                  "user_id": 41
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "send_notification",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "notification_id": 1
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": "Checked balance and sent notification to user 41.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 1.2870909995399415,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "aggregate-006": {
        "run_id": "oracle_run",
        "scenario_id": "aggregate-006",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Sent quarterly update to 3 users.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 4.052734999277163,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "list_users",
                "arguments": {
                  "limit": 3,
                  "signup_before": "2024-006-01",
                  "status": "active"
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "list_users",
                  "error_class": "SCHEMA_VIOLATION",
                  "status_code": null,
                  "body": {
                    "error": "schema_violation",
                    "message": "signup_before: String should match pattern '^\\d{4}-\\d{2}-\\d{2}$'"
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 2.0067430014023557,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "send_notification",
                "arguments": {
                  "message": "Quarterly update 6",
                  "user_id": 3
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "send_notification",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "notification_id": 1
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 0.9378019967698492,
            "tool_calls": [
              {
                "call_id": "c_3",
                "tool": "send_notification",
                "arguments": {
                  "message": "Quarterly update 6",
                  "user_id": 4
                },
                "result": {
                  "call_id": "c_3",
                  "tool": "send_notification",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "notification_id": 2
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 4,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 2.0114819999434985,
            "tool_calls": [
              {
                "call_id": "c_4",
                "tool": "send_notification",
                "arguments": {
                  "message": "Quarterly update 6",
                  "user_id": 7
                },
                "result": {
                  "call_id": "c_4",
                  "tool": "send_notification",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "notification_id": 3
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 5,
            "text": "Sent quarterly update to 3 users.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 1.6468169997096993,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "ambiguity-002": {
        "run_id": "oracle_run",
        "scenario_id": "ambiguity-002",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Identified user 34 as richest and transferred $10.00 to user 1.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 4.495847002544906,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "list_users",
                "arguments": {
                  "limit": 50,
                  "status": "active"
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "list_users",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "users": [
                      {
                        "id": 1,
                        "name": "Alice Smith",
                        "email": "alice.smith.1@example.com",
                        "signup_date": "2024-06-01",
                        "status": "active"
                      },
                      {
                        "id": 2,
                        "name": "Bob Jones",
                        "email": "bob.jones.2@example.com",
                        "signup_date": "2024-10-07",
                        "status": "active"
                      },
                      {
                        "id": 3,
                        "name": "Charlie Brown",
                        "email": "charlie.brown.3@example.com",
                        "signup_date": "2025-04-06",
                        "status": "active"
                      },
                      {
                        "id": 7,
                        "name": "George Clark",
                        "email": "george.clark.7@example.com",
                        "signup_date": "2025-05-12",
                        "status": "active"
                      },
                      {
                        "id": 8,
                        "name": "Hannah Abbott",
                        "email": "hannah.abbott.8@example.com",
                        "signup_date": "2023-03-21",
                        "status": "active"
                      },
                      {
                        "id": 9,
                        "name": "Ian Malcolm",
                        "email": "ian.malcolm.9@example.com",
                        "signup_date": "2023-07-21",
                        "status": "active"
                      },
                      {
                        "id": 10,
                        "name": "Julia Roberts",
                        "email": "julia.roberts.10@example.com",
                        "signup_date": "2023-04-21",
                        "status": "active"
                      },
                      {
                        "id": 11,
                        "name": "Kevin Bacon",
                        "email": "kevin.bacon.11@example.com",
                        "signup_date": "2025-02-25",
                        "status": "active"
                      },
                      {
                        "id": 12,
                        "name": "Laura Croft",
                        "email": "laura.croft.12@example.com",
                        "signup_date": "2023-08-28",
                        "status": "active"
                      },
                      {
                        "id": 13,
                        "name": "Michael Scott",
                        "email": "michael.scott.13@example.com",
                        "signup_date": "2023-09-10",
                        "status": "active"
                      },
                      {
                        "id": 15,
                        "name": "Oscar Martinez",
                        "email": "oscar.martinez.15@example.com",
                        "signup_date": "2023-03-13",
                        "status": "active"
                      },
                      {
                        "id": 16,
                        "name": "Pam Beesly",
                        "email": "pam.beesly.16@example.com",
                        "signup_date": "2024-12-13",
                        "status": "active"
                      },
                      {
                        "id": 17,
                        "name": "Quinn Fabray",
                        "email": "quinn.fabray.17@example.com",
                        "signup_date": "2024-06-20",
                        "status": "active"
                      },
                      {
                        "id": 18,
                        "name": "Ryan Howard",
                        "email": "ryan.howard.18@example.com",
                        "signup_date": "2024-08-28",
                        "status": "active"
                      },
                      {
                        "id": 19,
                        "name": "Sarah Connor",
                        "email": "sarah.connor.19@example.com",
                        "signup_date": "2023-04-14",
                        "status": "active"
                      },
                      {
                        "id": 20,
                        "name": "Toby Flenderson",
                        "email": "toby.flenderson.20@example.com",
                        "signup_date": "2024-06-03",
                        "status": "active"
                      },
                      {
                        "id": 25,
                        "name": "Yvonne Strahovski",
                        "email": "yvonne.strahovski.25@example.com",
                        "signup_date": "2024-07-02",
                        "status": "active"
                      },
                      {
                        "id": 26,
                        "name": "Zack Morris",
                        "email": "zack.morris.26@example.com",
                        "signup_date": "2023-04-10",
                        "status": "active"
                      },
                      {
                        "id": 27,
                        "name": "Arthur Dent",
                        "email": "arthur.dent.27@example.com",
                        "signup_date": "2025-03-13",
                        "status": "active"
                      },
                      {
                        "id": 28,
                        "name": "Beth Harmon",
                        "email": "beth.harmon.28@example.com",
                        "signup_date": "2025-05-03",
                        "status": "active"
                      },
                      {
                        "id": 29,
                        "name": "Carlos Sainz",
                        "email": "carlos.sainz.29@example.com",
                        "signup_date": "2023-08-08",
                        "status": "active"
                      },
                      {
                        "id": 30,
                        "name": "David Rose",
                        "email": "david.rose.30@example.com",
                        "signup_date": "2023-11-03",
                        "status": "active"
                      },
                      {
                        "id": 31,
                        "name": "Elena Gilbert",
                        "email": "elena.gilbert.31@example.com",
                        "signup_date": "2023-06-25",
                        "status": "active"
                      },
                      {
                        "id": 32,
                        "name": "Frank Castle",
                        "email": "frank.castle.32@example.com",
                        "signup_date": "2023-02-03",
                        "status": "active"
                      },
                      {
                        "id": 33,
                        "name": "Grace Hopper",
                        "email": "grace.hopper.33@example.com",
                        "signup_date": "2025-03-30",
                        "status": "active"
                      },
                      {
                        "id": 34,
                        "name": "Harry Potter",
                        "email": "harry.potter.34@example.com",
                        "signup_date": "2024-09-12",
                        "status": "active"
                      },
                      {
                        "id": 35,
                        "name": "Iris West",
                        "email": "iris.west.35@example.com",
                        "signup_date": "2023-04-02",
                        "status": "active"
                      },
                      {
                        "id": 36,
                        "name": "Jack Sparrow",
                        "email": "jack.sparrow.36@example.com",
                        "signup_date": "2023-09-11",
                        "status": "active"
                      },
                      {
                        "id": 37,
                        "name": "Karen Filippelli",
                        "email": "karen.filippelli.37@example.com",
                        "signup_date": "2023-04-21",
                        "status": "active"
                      },
                      {
                        "id": 38,
                        "name": "Luke Skywalker",
                        "email": "luke.skywalker.38@example.com",
                        "signup_date": "2023-01-08",
                        "status": "active"
                      },
                      {
                        "id": 39,
                        "name": "Mona Lisa",
                        "email": "mona.lisa.39@example.com",
                        "signup_date": "2023-03-15",
                        "status": "active"
                      },
                      {
                        "id": 42,
                        "name": "Peter Parker",
                        "email": "peter.parker.42@example.com",
                        "signup_date": "2023-01-27",
                        "status": "active"
                      },
                      {
                        "id": 43,
                        "name": "Rachel Green",
                        "email": "rachel.green.43@example.com",
                        "signup_date": "2024-10-11",
                        "status": "active"
                      },
                      {
                        "id": 44,
                        "name": "Steve Rogers",
                        "email": "steve.rogers.44@example.com",
                        "signup_date": "2023-06-15",
                        "status": "active"
                      },
                      {
                        "id": 45,
                        "name": "Tara Maclay",
                        "email": "tara.maclay.45@example.com",
                        "signup_date": "2024-09-04",
                        "status": "active"
                      },
                      {
                        "id": 46,
                        "name": "Uma Thurman",
                        "email": "uma.thurman.46@example.com",
                        "signup_date": "2025-05-31",
                        "status": "active"
                      },
                      {
                        "id": 47,
                        "name": "Vito Corleone",
                        "email": "vito.corleone.47@example.com",
                        "signup_date": "2023-01-10",
                        "status": "active"
                      },
                      {
                        "id": 49,
                        "name": "Xena Warrior",
                        "email": "xena.warrior.49@example.com",
                        "signup_date": "2024-02-25",
                        "status": "active"
                      },
                      {
                        "id": 50,
                        "name": "Zoey Deschanel",
                        "email": "zoey.deschanel.50@example.com",
                        "signup_date": "2025-01-19",
                        "status": "active"
                      }
                    ],
                    "total": 39,
                    "limit": 50,
                    "offset": 0
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.5300230006687343,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "get_balance",
                "arguments": {
                  "user_id": 34
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "get_balance",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "user_id": 34,
                    "balance": 3203.06
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.6090009958134033,
            "tool_calls": [
              {
                "call_id": "c_3",
                "tool": "transfer",
                "arguments": {
                  "amount": 10.0,
                  "from_user_id": 34,
                  "to_user_id": 1
                },
                "result": {
                  "call_id": "c_3",
                  "tool": "transfer",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "transaction_id": 101,
                    "from_balance": 3193.06,
                    "to_balance": 88.88
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 4,
            "text": "Identified user 34 as richest and transferred $10.00 to user 1.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 1.5960989985615015,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "ambiguity-004": {
        "run_id": "oracle_run",
        "scenario_id": "ambiguity-004",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Identified user 23 as richest and transferred $10.00 to user 4.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.831148001656402,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "list_users",
                "arguments": {
                  "limit": 50,
                  "status": "active"
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "list_users",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "users": [
                      {
                        "id": 4,
                        "name": "Diana Prince",
                        "email": "diana.prince.4@example.com",
                        "signup_date": "2023-02-21",
                        "status": "active"
                      },
                      {
                        "id": 5,
                        "name": "Evan Wright",
                        "email": "evan.wright.5@example.com",
                        "signup_date": "2025-02-02",
                        "status": "active"
                      },
                      {
                        "id": 6,
                        "name": "Fiona Gallagher",
                        "email": "fiona.gallagher.6@example.com",
                        "signup_date": "2024-05-28",
                        "status": "active"
                      },
                      {
                        "id": 7,
                        "name": "George Clark",
                        "email": "george.clark.7@example.com",
                        "signup_date": "2024-08-14",
                        "status": "active"
                      },
                      {
                        "id": 8,
                        "name": "Hannah Abbott",
                        "email": "hannah.abbott.8@example.com",
                        "signup_date": "2023-11-04",
                        "status": "active"
                      },
                      {
                        "id": 9,
                        "name": "Ian Malcolm",
                        "email": "ian.malcolm.9@example.com",
                        "signup_date": "2024-12-04",
                        "status": "active"
                      },
                      {
                        "id": 10,
                        "name": "Julia Roberts",
                        "email": "julia.roberts.10@example.com",
                        "signup_date": "2025-04-05",
                        "status": "active"
                      },
                      {
                        "id": 11,
                        "name": "Kevin Bacon",
                        "email": "kevin.bacon.11@example.com",
                        "signup_date": "2023-11-12",
                        "status": "active"
                      },
                      {
                        "id": 12,
                        "name": "Laura Croft",
                        "email": "laura.croft.12@example.com",
                        "signup_date": "2023-05-30",
                        "status": "active"
                      },
                      {
                        "id": 13,
                        "name": "Michael Scott",
                        "email": "michael.scott.13@example.com",
                        "signup_date": "2023-04-29",
                        "status": "active"
                      },
                      {
                        "id": 15,
                        "name": "Oscar Martinez",
                        "email": "oscar.martinez.15@example.com",
                        "signup_date": "2024-04-03",
                        "status": "active"
                      },
                      {
                        "id": 17,
                        "name": "Quinn Fabray",
                        "email": "quinn.fabray.17@example.com",
                        "signup_date": "2025-01-17",
                        "status": "active"
                      },
                      {
                        "id": 20,
                        "name": "Toby Flenderson",
                        "email": "toby.flenderson.20@example.com",
                        "signup_date": "2023-03-14",
                        "status": "active"
                      },
                      {
                        "id": 21,
                        "name": "Ursula Buffay",
                        "email": "ursula.buffay.21@example.com",
                        "signup_date": "2024-02-16",
                        "status": "active"
                      },
                      {
                        "id": 22,
                        "name": "Victor Vance",
                        "email": "victor.vance.22@example.com",
                        "signup_date": "2024-02-15",
                        "status": "active"
                      },
                      {
                        "id": 23,
                        "name": "Wendy Darling",
                        "email": "wendy.darling.23@example.com",
                        "signup_date": "2023-04-08",
                        "status": "active"
                      },
                      {
                        "id": 24,
                        "name": "Xander Harris",
                        "email": "xander.harris.24@example.com",
                        "signup_date": "2024-11-24",
                        "status": "active"
                      },
                      {
                        "id": 25,
                        "name": "Yvonne Strahovski",
                        "email": "yvonne.strahovski.25@example.com",
                        "signup_date": "2023-05-06",
                        "status": "active"
                      },
                      {
                        "id": 27,
                        "name": "Arthur Dent",
                        "email": "arthur.dent.27@example.com",
                        "signup_date": "2025-04-23",
                        "status": "active"
                      },
                      {
                        "id": 29,
                        "name": "Carlos Sainz",
                        "email": "carlos.sainz.29@example.com",
                        "signup_date": "2023-10-17",
                        "status": "active"
                      },
                      {
                        "id": 30,
                        "name": "David Rose",
                        "email": "david.rose.30@example.com",
                        "signup_date": "2024-05-08",
                        "status": "active"
                      },
                      {
                        "id": 31,
                        "name": "Elena Gilbert",
                        "email": "elena.gilbert.31@example.com",
                        "signup_date": "2023-04-08",
                        "status": "active"
                      },
                      {
                        "id": 32,
                        "name": "Frank Castle",
                        "email": "frank.castle.32@example.com",
                        "signup_date": "2024-12-10",
                        "status": "active"
                      },
                      {
                        "id": 33,
                        "name": "Grace Hopper",
                        "email": "grace.hopper.33@example.com",
                        "signup_date": "2024-12-20",
                        "status": "active"
                      },
                      {
                        "id": 34,
                        "name": "Harry Potter",
                        "email": "harry.potter.34@example.com",
                        "signup_date": "2024-03-07",
                        "status": "active"
                      },
                      {
                        "id": 35,
                        "name": "Iris West",
                        "email": "iris.west.35@example.com",
                        "signup_date": "2024-06-22",
                        "status": "active"
                      },
                      {
                        "id": 36,
                        "name": "Jack Sparrow",
                        "email": "jack.sparrow.36@example.com",
                        "signup_date": "2023-05-23",
                        "status": "active"
                      },
                      {
                        "id": 37,
                        "name": "Karen Filippelli",
                        "email": "karen.filippelli.37@example.com",
                        "signup_date": "2023-10-18",
                        "status": "active"
                      },
                      {
                        "id": 38,
                        "name": "Luke Skywalker",
                        "email": "luke.skywalker.38@example.com",
                        "signup_date": "2023-07-18",
                        "status": "active"
                      },
                      {
                        "id": 40,
                        "name": "Nathan Drake",
                        "email": "nathan.drake.40@example.com",
                        "signup_date": "2023-12-31",
                        "status": "active"
                      },
                      {
                        "id": 41,
                        "name": "Olivia Pope",
                        "email": "olivia.pope.41@example.com",
                        "signup_date": "2024-04-27",
                        "status": "active"
                      },
                      {
                        "id": 43,
                        "name": "Rachel Green",
                        "email": "rachel.green.43@example.com",
                        "signup_date": "2024-04-13",
                        "status": "active"
                      },
                      {
                        "id": 44,
                        "name": "Steve Rogers",
                        "email": "steve.rogers.44@example.com",
                        "signup_date": "2024-11-19",
                        "status": "active"
                      },
                      {
                        "id": 45,
                        "name": "Tara Maclay",
                        "email": "tara.maclay.45@example.com",
                        "signup_date": "2023-10-04",
                        "status": "active"
                      },
                      {
                        "id": 46,
                        "name": "Uma Thurman",
                        "email": "uma.thurman.46@example.com",
                        "signup_date": "2024-04-29",
                        "status": "active"
                      },
                      {
                        "id": 47,
                        "name": "Vito Corleone",
                        "email": "vito.corleone.47@example.com",
                        "signup_date": "2024-01-28",
                        "status": "active"
                      },
                      {
                        "id": 48,
                        "name": "Walter White",
                        "email": "walter.white.48@example.com",
                        "signup_date": "2024-11-02",
                        "status": "active"
                      },
                      {
                        "id": 49,
                        "name": "Xena Warrior",
                        "email": "xena.warrior.49@example.com",
                        "signup_date": "2025-01-27",
                        "status": "active"
                      },
                      {
                        "id": 50,
                        "name": "Zoey Deschanel",
                        "email": "zoey.deschanel.50@example.com",
                        "signup_date": "2025-01-13",
                        "status": "active"
                      }
                    ],
                    "total": 39,
                    "limit": 50,
                    "offset": 0
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.1313789946143515,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "get_balance",
                "arguments": {
                  "user_id": 23
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "get_balance",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "user_id": 23,
                    "balance": 2739.65
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.360930000373628,
            "tool_calls": [
              {
                "call_id": "c_3",
                "tool": "transfer",
                "arguments": {
                  "amount": 10.0,
                  "from_user_id": 23,
                  "to_user_id": 4
                },
                "result": {
                  "call_id": "c_3",
                  "tool": "transfer",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "transaction_id": 101,
                    "from_balance": 2729.65,
                    "to_balance": 86.62
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 4,
            "text": "Identified user 23 as richest and transferred $10.00 to user 4.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 1.3599279991467483,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "multihop-006": {
        "run_id": "oracle_run",
        "scenario_id": "multihop-006",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "The most recent transaction partner is Bob Jones.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.3464339936035685,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "get_transactions",
                "arguments": {
                  "limit": 1,
                  "user_id": 14
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "get_transactions",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "transactions": [
                      {
                        "id": 94,
                        "from_user": 14,
                        "to_user": 2,
                        "amount": 198.02,
                        "created_at": "2025-04-20T06:57:50Z"
                      }
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.6111950026242994,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "get_user",
                "arguments": {
                  "user_id": 2
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "get_user",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "id": 2,
                    "name": "Bob Jones",
                    "email": "bob.jones.2@example.com",
                    "signup_date": "2025-01-23",
                    "status": "active"
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": "The most recent transaction partner is Bob Jones.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 0.8343629961018451,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "unsolvable-003": {
        "run_id": "oracle_run",
        "scenario_id": "unsolvable-003",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I cannot delete users as this operation is impossible and not supported.",
        "steps": [
          {
            "step": 1,
            "text": "I cannot delete users as this operation is impossible and not supported.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 1.4590700011467561,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "condact-006": {
        "run_id": "oracle_run",
        "scenario_id": "condact-006",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Checked balance and sent notification to user 19.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 0.7019010008662008,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "get_balance",
                "arguments": {
                  "user_id": 19
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "get_balance",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "user_id": 19,
                    "balance": 366.96
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 0.7806089997757226,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "send_notification",
                "arguments": {
                  "message": "Security review alert #6",
                  "user_id": 19
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "send_notification",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "notification_id": 1
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": "Checked balance and sent notification to user 19.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 0.9091519968933426,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "lookup-005": {
        "run_id": "oracle_run",
        "scenario_id": "lookup-005",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "The account balance is 190.41.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.2071320015820675,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "get_balance",
                "arguments": {
                  "user_id": 6
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "get_balance",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "user_id": 6,
                    "balance": 190.41
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "The account balance is 190.41.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 1.0495870010345243,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "fault-002": {
        "run_id": "oracle_run",
        "scenario_id": "fault-002",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Transferred $10.00 from user 2 to user 7 after verifying fault recovery.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 0.8032490004552528,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "transfer",
                "arguments": {
                  "amount": 10.0,
                  "from_user_id": 2,
                  "to_user_id": 7
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "transfer",
                  "error_class": "API_5XX",
                  "status_code": 500,
                  "body": {
                    "error": "internal_error"
                  },
                  "injected": true,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 0.5628500002785586,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "transfer",
                "arguments": {
                  "amount": 10.0,
                  "from_user_id": 2,
                  "to_user_id": 7
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "transfer",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "transaction_id": 101,
                    "from_balance": 67.62,
                    "to_balance": 834.17
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": "Transferred $10.00 from user 2 to user 7 after verifying fault recovery.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 0.7868199973017909,
            "tool_calls": []
          }
        ],
        "faults_fired": [
          {
            "tool": "transfer",
            "call_index": 1,
            "error": 500,
            "commit": false
          }
        ],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": 1.0
        }
      },
      "condact-005": {
        "run_id": "oracle_run",
        "scenario_id": "condact-005",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Checked balance and sent notification to user 15.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 0.5791680014226586,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "get_balance",
                "arguments": {
                  "user_id": 15
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "get_balance",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "user_id": 15,
                    "balance": 200.29
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 0.6446930055972189,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "send_notification",
                "arguments": {
                  "message": "Security review alert #5",
                  "user_id": 15
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "send_notification",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "notification_id": 1
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": "Checked balance and sent notification to user 15.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 0.9220950014423579,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "fault-008": {
        "run_id": "oracle_run",
        "scenario_id": "fault-008",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Transferred $10.00 from user 3 to user 4 after verifying fault recovery.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 0.5792480005766265,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "transfer",
                "arguments": {
                  "amount": 10.0,
                  "from_user_id": 3,
                  "to_user_id": 4
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "transfer",
                  "error_class": "API_5XX",
                  "status_code": 500,
                  "body": {
                    "error": "internal_error"
                  },
                  "injected": true,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.5704730030847713,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "transfer",
                "arguments": {
                  "amount": 10.0,
                  "from_user_id": 3,
                  "to_user_id": 4
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "transfer",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "transaction_id": 101,
                    "from_balance": 688.14,
                    "to_balance": 182.44
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": "Transferred $10.00 from user 3 to user 4 after verifying fault recovery.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 0.7623170022270642,
            "tool_calls": []
          }
        ],
        "faults_fired": [
          {
            "tool": "transfer",
            "call_index": 1,
            "error": 500,
            "commit": false
          }
        ],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": 1.0
        }
      },
      "ambiguity-003": {
        "run_id": "oracle_run",
        "scenario_id": "ambiguity-003",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Identified user 19 as richest and transferred $10.00 to user 1.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 2.6616730028763413,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "list_users",
                "arguments": {
                  "limit": 50,
                  "status": "active"
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "list_users",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "users": [
                      {
                        "id": 1,
                        "name": "Alice Smith",
                        "email": "alice.smith.1@example.com",
                        "signup_date": "2023-06-25",
                        "status": "active"
                      },
                      {
                        "id": 2,
                        "name": "Bob Jones",
                        "email": "bob.jones.2@example.com",
                        "signup_date": "2025-01-09",
                        "status": "active"
                      },
                      {
                        "id": 3,
                        "name": "Charlie Brown",
                        "email": "charlie.brown.3@example.com",
                        "signup_date": "2023-11-15",
                        "status": "active"
                      },
                      {
                        "id": 4,
                        "name": "Diana Prince",
                        "email": "diana.prince.4@example.com",
                        "signup_date": "2024-10-24",
                        "status": "active"
                      },
                      {
                        "id": 5,
                        "name": "Evan Wright",
                        "email": "evan.wright.5@example.com",
                        "signup_date": "2025-03-18",
                        "status": "active"
                      },
                      {
                        "id": 6,
                        "name": "Fiona Gallagher",
                        "email": "fiona.gallagher.6@example.com",
                        "signup_date": "2023-05-07",
                        "status": "active"
                      },
                      {
                        "id": 7,
                        "name": "George Clark",
                        "email": "george.clark.7@example.com",
                        "signup_date": "2023-02-05",
                        "status": "active"
                      },
                      {
                        "id": 11,
                        "name": "Kevin Bacon",
                        "email": "kevin.bacon.11@example.com",
                        "signup_date": "2025-02-15",
                        "status": "active"
                      },
                      {
                        "id": 13,
                        "name": "Michael Scott",
                        "email": "michael.scott.13@example.com",
                        "signup_date": "2024-04-23",
                        "status": "active"
                      },
                      {
                        "id": 14,
                        "name": "Nancy Wheeler",
                        "email": "nancy.wheeler.14@example.com",
                        "signup_date": "2024-04-29",
                        "status": "active"
                      },
                      {
                        "id": 15,
                        "name": "Oscar Martinez",
                        "email": "oscar.martinez.15@example.com",
                        "signup_date": "2023-10-13",
                        "status": "active"
                      },
                      {
                        "id": 16,
                        "name": "Pam Beesly",
                        "email": "pam.beesly.16@example.com",
                        "signup_date": "2024-10-21",
                        "status": "active"
                      },
                      {
                        "id": 17,
                        "name": "Quinn Fabray",
                        "email": "quinn.fabray.17@example.com",
                        "signup_date": "2024-05-15",
                        "status": "active"
                      },
                      {
                        "id": 19,
                        "name": "Sarah Connor",
                        "email": "sarah.connor.19@example.com",
                        "signup_date": "2023-12-08",
                        "status": "active"
                      },
                      {
                        "id": 21,
                        "name": "Ursula Buffay",
                        "email": "ursula.buffay.21@example.com",
                        "signup_date": "2025-04-20",
                        "status": "active"
                      },
                      {
                        "id": 22,
                        "name": "Victor Vance",
                        "email": "victor.vance.22@example.com",
                        "signup_date": "2023-05-30",
                        "status": "active"
                      },
                      {
                        "id": 23,
                        "name": "Wendy Darling",
                        "email": "wendy.darling.23@example.com",
                        "signup_date": "2023-01-17",
                        "status": "active"
                      },
                      {
                        "id": 24,
                        "name": "Xander Harris",
                        "email": "xander.harris.24@example.com",
                        "signup_date": "2023-08-20",
                        "status": "active"
                      },
                      {
                        "id": 26,
                        "name": "Zack Morris",
                        "email": "zack.morris.26@example.com",
                        "signup_date": "2023-06-02",
                        "status": "active"
                      },
                      {
                        "id": 27,
                        "name": "Arthur Dent",
                        "email": "arthur.dent.27@example.com",
                        "signup_date": "2025-01-28",
                        "status": "active"
                      },
                      {
                        "id": 28,
                        "name": "Beth Harmon",
                        "email": "beth.harmon.28@example.com",
                        "signup_date": "2023-01-16",
                        "status": "active"
                      },
                      {
                        "id": 29,
                        "name": "Carlos Sainz",
                        "email": "carlos.sainz.29@example.com",
                        "signup_date": "2023-12-14",
                        "status": "active"
                      },
                      {
                        "id": 30,
                        "name": "David Rose",
                        "email": "david.rose.30@example.com",
                        "signup_date": "2025-03-04",
                        "status": "active"
                      },
                      {
                        "id": 35,
                        "name": "Iris West",
                        "email": "iris.west.35@example.com",
                        "signup_date": "2024-05-08",
                        "status": "active"
                      },
                      {
                        "id": 36,
                        "name": "Jack Sparrow",
                        "email": "jack.sparrow.36@example.com",
                        "signup_date": "2023-05-16",
                        "status": "active"
                      },
                      {
                        "id": 38,
                        "name": "Luke Skywalker",
                        "email": "luke.skywalker.38@example.com",
                        "signup_date": "2024-03-16",
                        "status": "active"
                      },
                      {
                        "id": 40,
                        "name": "Nathan Drake",
                        "email": "nathan.drake.40@example.com",
                        "signup_date": "2024-12-15",
                        "status": "active"
                      },
                      {
                        "id": 41,
                        "name": "Olivia Pope",
                        "email": "olivia.pope.41@example.com",
                        "signup_date": "2023-06-24",
                        "status": "active"
                      },
                      {
                        "id": 42,
                        "name": "Peter Parker",
                        "email": "peter.parker.42@example.com",
                        "signup_date": "2023-10-27",
                        "status": "active"
                      },
                      {
                        "id": 43,
                        "name": "Rachel Green",
                        "email": "rachel.green.43@example.com",
                        "signup_date": "2023-04-10",
                        "status": "active"
                      },
                      {
                        "id": 44,
                        "name": "Steve Rogers",
                        "email": "steve.rogers.44@example.com",
                        "signup_date": "2024-03-05",
                        "status": "active"
                      },
                      {
                        "id": 46,
                        "name": "Uma Thurman",
                        "email": "uma.thurman.46@example.com",
                        "signup_date": "2025-01-07",
                        "status": "active"
                      },
                      {
                        "id": 49,
                        "name": "Xena Warrior",
                        "email": "xena.warrior.49@example.com",
                        "signup_date": "2023-04-26",
                        "status": "active"
                      },
                      {
                        "id": 50,
                        "name": "Zoey Deschanel",
                        "email": "zoey.deschanel.50@example.com",
                        "signup_date": "2024-08-02",
                        "status": "active"
                      }
                    ],
                    "total": 34,
                    "limit": 50,
                    "offset": 0
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.206881002872251,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "get_balance",
                "arguments": {
                  "user_id": 19
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "get_balance",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "user_id": 19,
                    "balance": 2752.88
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 2.4465589958708733,
            "tool_calls": [
              {
                "call_id": "c_3",
                "tool": "transfer",
                "arguments": {
                  "amount": 10.0,
                  "from_user_id": 19,
                  "to_user_id": 1
                },
                "result": {
                  "call_id": "c_3",
                  "tool": "transfer",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "transaction_id": 101,
                    "from_balance": 2742.88,
                    "to_balance": 17.63
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 4,
            "text": "Identified user 19 as richest and transferred $10.00 to user 1.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 1.6524360034964047,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "multihop-003": {
        "run_id": "oracle_run",
        "scenario_id": "multihop-003",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "The most recent transaction partner is Michael Scott.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 2.940759004559368,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "get_transactions",
                "arguments": {
                  "limit": 1,
                  "user_id": 10
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "get_transactions",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "transactions": [
                      {
                        "id": 79,
                        "from_user": 10,
                        "to_user": 13,
                        "amount": 137.61,
                        "created_at": "2025-03-19T11:24:58Z"
                      }
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.7172090010717511,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "get_user",
                "arguments": {
                  "user_id": 13
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "get_user",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "id": 13,
                    "name": "Michael Scott",
                    "email": "michael.scott.13@example.com",
                    "signup_date": "2023-07-27",
                    "status": "active"
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": "The most recent transaction partner is Michael Scott.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 1.3635040013468824,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "multihop-005": {
        "run_id": "oracle_run",
        "scenario_id": "multihop-005",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "The most recent transaction partner is Nathan Drake.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 0.9058369978447445,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "get_transactions",
                "arguments": {
                  "limit": 1,
                  "user_id": 11
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "get_transactions",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "transactions": [
                      {
                        "id": 86,
                        "from_user": 11,
                        "to_user": 40,
                        "amount": 185.59,
                        "created_at": "2025-04-03T04:22:15Z"
                      }
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 0.7709519995842129,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "get_user",
                "arguments": {
                  "user_id": 40
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "get_user",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "id": 40,
                    "name": "Nathan Drake",
                    "email": "nathan.drake.40@example.com",
                    "signup_date": "2024-04-18",
                    "status": "active"
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": "The most recent transaction partner is Nathan Drake.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 0.7874509974499233,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "unsolvable-005": {
        "run_id": "oracle_run",
        "scenario_id": "unsolvable-005",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I cannot delete users as this operation is impossible and not supported.",
        "steps": [
          {
            "step": 1,
            "text": "I cannot delete users as this operation is impossible and not supported.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 0.8214490007958375,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "condact-008": {
        "run_id": "oracle_run",
        "scenario_id": "condact-008",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Checked balance and sent notification to user 31.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 0.6803740034229122,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "get_balance",
                "arguments": {
                  "user_id": 31
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "get_balance",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "user_id": 31,
                    "balance": 105.99
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.8043910022242926,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "send_notification",
                "arguments": {
                  "message": "Security review alert #8",
                  "user_id": 31
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "send_notification",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "notification_id": 1
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": "Checked balance and sent notification to user 31.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 0.8226220015785657,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "fault-009": {
        "run_id": "oracle_run",
        "scenario_id": "fault-009",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Transferred $10.00 from user 2 to user 3 after verifying fault recovery.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.5119220042834058,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "transfer",
                "arguments": {
                  "amount": 10.0,
                  "from_user_id": 2,
                  "to_user_id": 3
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "transfer",
                  "error_class": "API_5XX",
                  "status_code": 503,
                  "body": {
                    "error": "unavailable"
                  },
                  "injected": true,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 2.1699480057577603,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "get_balance",
                "arguments": {
                  "user_id": 2
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "get_balance",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "user_id": 2,
                    "balance": 192.61
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": "Transferred $10.00 from user 2 to user 3 after verifying fault recovery.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 0.8830770020722412,
            "tool_calls": []
          }
        ],
        "faults_fired": [
          {
            "tool": "transfer",
            "call_index": 1,
            "error": 503,
            "commit": true
          }
        ],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": 1.0
        }
      },
      "fault-007": {
        "run_id": "oracle_run",
        "scenario_id": "fault-007",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Transferred $10.00 from user 1 to user 4 after verifying fault recovery.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.6266220045508817,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "transfer",
                "arguments": {
                  "amount": 10.0,
                  "from_user_id": 1,
                  "to_user_id": 4
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "transfer",
                  "error_class": "API_5XX",
                  "status_code": 503,
                  "body": {
                    "error": "unavailable"
                  },
                  "injected": true,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.4785439998377115,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "transfer",
                "arguments": {
                  "amount": 10.0,
                  "from_user_id": 1,
                  "to_user_id": 4
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "transfer",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "transaction_id": 101,
                    "from_balance": 839.02,
                    "to_balance": 161.28
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": "Transferred $10.00 from user 1 to user 4 after verifying fault recovery.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 1.2578289970406331,
            "tool_calls": []
          }
        ],
        "faults_fired": [
          {
            "tool": "transfer",
            "call_index": 1,
            "error": 503,
            "commit": false
          }
        ],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": 1.0
        }
      },
      "condact-001": {
        "run_id": "oracle_run",
        "scenario_id": "condact-001",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Checked balance and sent notification to user 6.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.3915629970142618,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "get_balance",
                "arguments": {
                  "user_id": 6
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "get_balance",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "user_id": 6,
                    "balance": 4252.02
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.0353620018577203,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "send_notification",
                "arguments": {
                  "message": "Security review alert #1",
                  "user_id": 6
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "send_notification",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "notification_id": 1
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": "Checked balance and sent notification to user 6.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 1.2095849961042404,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "aggregate-005": {
        "run_id": "oracle_run",
        "scenario_id": "aggregate-005",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Sent quarterly update to 3 users.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.1549609989742748,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "list_users",
                "arguments": {
                  "limit": 3,
                  "signup_before": "2024-005-01",
                  "status": "active"
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "list_users",
                  "error_class": "SCHEMA_VIOLATION",
                  "status_code": null,
                  "body": {
                    "error": "schema_violation",
                    "message": "signup_before: String should match pattern '^\\d{4}-\\d{2}-\\d{2}$'"
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 2.239057997940108,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "send_notification",
                "arguments": {
                  "message": "Quarterly update 5",
                  "user_id": 1
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "send_notification",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "notification_id": 1
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.1279839964117855,
            "tool_calls": [
              {
                "call_id": "c_3",
                "tool": "send_notification",
                "arguments": {
                  "message": "Quarterly update 5",
                  "user_id": 12
                },
                "result": {
                  "call_id": "c_3",
                  "tool": "send_notification",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "notification_id": 2
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 4,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 5.095679996884428,
            "tool_calls": [
              {
                "call_id": "c_4",
                "tool": "send_notification",
                "arguments": {
                  "message": "Quarterly update 5",
                  "user_id": 17
                },
                "result": {
                  "call_id": "c_4",
                  "tool": "send_notification",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "notification_id": 3
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 5,
            "text": "Sent quarterly update to 3 users.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 2.1222040013526566,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "aggregate-001": {
        "run_id": "oracle_run",
        "scenario_id": "aggregate-001",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Sent quarterly update to 3 users.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 3.919301998394076,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "list_users",
                "arguments": {
                  "limit": 3,
                  "signup_before": "2024-001-01",
                  "status": "active"
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "list_users",
                  "error_class": "SCHEMA_VIOLATION",
                  "status_code": null,
                  "body": {
                    "error": "schema_violation",
                    "message": "signup_before: String should match pattern '^\\d{4}-\\d{2}-\\d{2}$'"
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.0850390026462264,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "send_notification",
                "arguments": {
                  "message": "Quarterly update 1",
                  "user_id": 5
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "send_notification",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "notification_id": 1
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.8330610037082806,
            "tool_calls": [
              {
                "call_id": "c_3",
                "tool": "send_notification",
                "arguments": {
                  "message": "Quarterly update 1",
                  "user_id": 10
                },
                "result": {
                  "call_id": "c_3",
                  "tool": "send_notification",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "notification_id": 2
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 4,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.9217959998059087,
            "tool_calls": [
              {
                "call_id": "c_4",
                "tool": "send_notification",
                "arguments": {
                  "message": "Quarterly update 1",
                  "user_id": 14
                },
                "result": {
                  "call_id": "c_4",
                  "tool": "send_notification",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "notification_id": 3
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 5,
            "text": "Sent quarterly update to 3 users.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 1.2266750054550357,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "lookup-002": {
        "run_id": "oracle_run",
        "scenario_id": "lookup-002",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "The account balance is 0.00.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.1442620016168803,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "get_balance",
                "arguments": {
                  "user_id": 3
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "get_balance",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "user_id": 3,
                    "balance": 0.0
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "The account balance is 0.00.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 0.6593379948753864,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "trap-003": {
        "run_id": "oracle_run",
        "scenario_id": "trap-003",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "User 2 is inactive, so I cannot execute this transfer.",
        "steps": [
          {
            "step": 1,
            "text": "User 2 is inactive, so I cannot execute this transfer.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 0.9800960033317097,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "unsolvable-002": {
        "run_id": "oracle_run",
        "scenario_id": "unsolvable-002",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I cannot delete users as this operation is impossible and not supported.",
        "steps": [
          {
            "step": 1,
            "text": "I cannot delete users as this operation is impossible and not supported.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 1.0747310006991029,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "multihop-008": {
        "run_id": "oracle_run",
        "scenario_id": "multihop-008",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "The most recent transaction partner is Walter White.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 0.7117589993868023,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "get_transactions",
                "arguments": {
                  "limit": 1,
                  "user_id": 17
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "get_transactions",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "transactions": [
                      {
                        "id": 99,
                        "from_user": 48,
                        "to_user": 17,
                        "amount": 325.19,
                        "created_at": "2025-05-28T18:33:20Z"
                      }
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 2.1335040000849403,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "get_user",
                "arguments": {
                  "user_id": 48
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "get_user",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "id": 48,
                    "name": "Walter White",
                    "email": "walter.white.48@example.com",
                    "signup_date": "2024-04-23",
                    "status": "active"
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": "The most recent transaction partner is Walter White.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 1.173813005152624,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "fault-006": {
        "run_id": "oracle_run",
        "scenario_id": "fault-006",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Transferred $10.00 from user 6 to user 7 after verifying fault recovery.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.5654359958716668,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "transfer",
                "arguments": {
                  "amount": 10.0,
                  "from_user_id": 6,
                  "to_user_id": 7
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "transfer",
                  "error_class": "API_5XX",
                  "status_code": 500,
                  "body": {
                    "error": "internal_error"
                  },
                  "injected": true,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.7330269984086044,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "transfer",
                "arguments": {
                  "amount": 10.0,
                  "from_user_id": 6,
                  "to_user_id": 7
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "transfer",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "transaction_id": 101,
                    "from_balance": 342.07,
                    "to_balance": 249.38
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": "Transferred $10.00 from user 6 to user 7 after verifying fault recovery.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 0.8057720042415895,
            "tool_calls": []
          }
        ],
        "faults_fired": [
          {
            "tool": "transfer",
            "call_index": 1,
            "error": 500,
            "commit": false
          }
        ],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": 1.0
        }
      },
      "trap-004": {
        "run_id": "oracle_run",
        "scenario_id": "trap-004",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "User 3 is inactive, so I cannot execute this transfer.",
        "steps": [
          {
            "step": 1,
            "text": "User 3 is inactive, so I cannot execute this transfer.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 1.7965869992622174,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "multihop-004": {
        "run_id": "oracle_run",
        "scenario_id": "multihop-004",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "The most recent transaction partner is Frank Castle.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 0.8810639992589131,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "get_transactions",
                "arguments": {
                  "limit": 1,
                  "user_id": 16
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "get_transactions",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "transactions": [
                      {
                        "id": 85,
                        "from_user": 16,
                        "to_user": 32,
                        "amount": 163.6,
                        "created_at": "2025-03-20T21:46:26Z"
                      }
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 0.8829569997033104,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "get_user",
                "arguments": {
                  "user_id": 32
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "get_user",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "id": 32,
                    "name": "Frank Castle",
                    "email": "frank.castle.32@example.com",
                    "signup_date": "2025-05-18",
                    "status": "active"
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": "The most recent transaction partner is Frank Castle.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 0.8502599957864732,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "aggregate-003": {
        "run_id": "oracle_run",
        "scenario_id": "aggregate-003",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Sent quarterly update to 3 users.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 2.82196299667703,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "list_users",
                "arguments": {
                  "limit": 3,
                  "signup_before": "2024-003-01",
                  "status": "active"
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "list_users",
                  "error_class": "SCHEMA_VIOLATION",
                  "status_code": null,
                  "body": {
                    "error": "schema_violation",
                    "message": "signup_before: String should match pattern '^\\d{4}-\\d{2}-\\d{2}$'"
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.0586030039121397,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "send_notification",
                "arguments": {
                  "message": "Quarterly update 3",
                  "user_id": 1
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "send_notification",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "notification_id": 1
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.8138970044674352,
            "tool_calls": [
              {
                "call_id": "c_3",
                "tool": "send_notification",
                "arguments": {
                  "message": "Quarterly update 3",
                  "user_id": 2
                },
                "result": {
                  "call_id": "c_3",
                  "tool": "send_notification",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "notification_id": 2
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 4,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 6.41179100057343,
            "tool_calls": [
              {
                "call_id": "c_4",
                "tool": "send_notification",
                "arguments": {
                  "message": "Quarterly update 3",
                  "user_id": 10
                },
                "result": {
                  "call_id": "c_4",
                  "tool": "send_notification",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "notification_id": 3
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 5,
            "text": "Sent quarterly update to 3 users.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 1.9932200011680834,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "multihop-001": {
        "run_id": "oracle_run",
        "scenario_id": "multihop-001",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "The most recent transaction partner is Karen Filippelli.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 2.3808740006643347,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "get_transactions",
                "arguments": {
                  "limit": 1,
                  "user_id": 7
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "get_transactions",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "transactions": [
                      {
                        "id": 68,
                        "from_user": 37,
                        "to_user": 7,
                        "amount": 80.97,
                        "created_at": "2024-12-18T13:41:04Z"
                      }
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 2.2031749977031723,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "get_user",
                "arguments": {
                  "user_id": 37
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "get_user",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "id": 37,
                    "name": "Karen Filippelli",
                    "email": "karen.filippelli.37@example.com",
                    "signup_date": "2024-05-16",
                    "status": "active"
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": "The most recent transaction partner is Karen Filippelli.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 0.9798350001801737,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "trap-005": {
        "run_id": "oracle_run",
        "scenario_id": "trap-005",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "User 4 is inactive, so I cannot execute this transfer.",
        "steps": [
          {
            "step": 1,
            "text": "User 4 is inactive, so I cannot execute this transfer.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 1.0557979985605925,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "trap-001": {
        "run_id": "oracle_run",
        "scenario_id": "trap-001",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "User 7 is inactive, so I cannot execute this transfer.",
        "steps": [
          {
            "step": 1,
            "text": "User 7 is inactive, so I cannot execute this transfer.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 0.9640279968152754,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "aggregate-002": {
        "run_id": "oracle_run",
        "scenario_id": "aggregate-002",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Sent quarterly update to 3 users.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.964750001206994,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "list_users",
                "arguments": {
                  "limit": 3,
                  "signup_before": "2024-002-01",
                  "status": "active"
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "list_users",
                  "error_class": "SCHEMA_VIOLATION",
                  "status_code": null,
                  "body": {
                    "error": "schema_violation",
                    "message": "signup_before: String should match pattern '^\\d{4}-\\d{2}-\\d{2}$'"
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 2.790758000628557,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "send_notification",
                "arguments": {
                  "message": "Quarterly update 2",
                  "user_id": 7
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "send_notification",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "notification_id": 1
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 2.775812004983891,
            "tool_calls": [
              {
                "call_id": "c_3",
                "tool": "send_notification",
                "arguments": {
                  "message": "Quarterly update 2",
                  "user_id": 10
                },
                "result": {
                  "call_id": "c_3",
                  "tool": "send_notification",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "notification_id": 2
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 4,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 4.18437400367111,
            "tool_calls": [
              {
                "call_id": "c_4",
                "tool": "send_notification",
                "arguments": {
                  "message": "Quarterly update 2",
                  "user_id": 14
                },
                "result": {
                  "call_id": "c_4",
                  "tool": "send_notification",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "notification_id": 3
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 5,
            "text": "Sent quarterly update to 3 users.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 1.107828997191973,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "condact-003": {
        "run_id": "oracle_run",
        "scenario_id": "condact-003",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Checked balance and sent notification to user 34.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.0409919996163808,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "get_balance",
                "arguments": {
                  "user_id": 34
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "get_balance",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "user_id": 34,
                    "balance": 4444.28
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 0.7886019957368262,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "send_notification",
                "arguments": {
                  "message": "Security review alert #3",
                  "user_id": 34
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "send_notification",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "notification_id": 1
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": "Checked balance and sent notification to user 34.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 3.737095001270063,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "fault-001": {
        "run_id": "oracle_run",
        "scenario_id": "fault-001",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Transferred $10.00 from user 6 to user 19 after verifying fault recovery.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 0.720725001883693,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "transfer",
                "arguments": {
                  "amount": 10.0,
                  "from_user_id": 6,
                  "to_user_id": 19
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "transfer",
                  "error_class": "API_5XX",
                  "status_code": 503,
                  "body": {
                    "error": "unavailable"
                  },
                  "injected": true,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 0.768538004194852,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "transfer",
                "arguments": {
                  "amount": 10.0,
                  "from_user_id": 6,
                  "to_user_id": 19
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "transfer",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "transaction_id": 101,
                    "from_balance": 57.96,
                    "to_balance": 200.46
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": "Transferred $10.00 from user 6 to user 19 after verifying fault recovery.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 0.6739630043739453,
            "tool_calls": []
          }
        ],
        "faults_fired": [
          {
            "tool": "transfer",
            "call_index": 1,
            "error": 503,
            "commit": false
          }
        ],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": 1.0
        }
      },
      "unsolvable-001": {
        "run_id": "oracle_run",
        "scenario_id": "unsolvable-001",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I cannot delete users as this operation is impossible and not supported.",
        "steps": [
          {
            "step": 1,
            "text": "I cannot delete users as this operation is impossible and not supported.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 1.32512699929066,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "fault-004": {
        "run_id": "oracle_run",
        "scenario_id": "fault-004",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Transferred $10.00 from user 3 to user 5 after verifying fault recovery.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 0.7425620060530491,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "transfer",
                "arguments": {
                  "amount": 10.0,
                  "from_user_id": 3,
                  "to_user_id": 5
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "transfer",
                  "error_class": "API_5XX",
                  "status_code": 500,
                  "body": {
                    "error": "internal_error"
                  },
                  "injected": true,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 0.7161469984566793,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "transfer",
                "arguments": {
                  "amount": 10.0,
                  "from_user_id": 3,
                  "to_user_id": 5
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "transfer",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "transaction_id": 101,
                    "from_balance": 126.92,
                    "to_balance": 113.85
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": "Transferred $10.00 from user 3 to user 5 after verifying fault recovery.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 0.9408679979969747,
            "tool_calls": []
          }
        ],
        "faults_fired": [
          {
            "tool": "transfer",
            "call_index": 1,
            "error": 500,
            "commit": false
          }
        ],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": 1.0
        }
      },
      "lookup-006": {
        "run_id": "oracle_run",
        "scenario_id": "lookup-006",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "The account balance is 0.03.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 0.8214900008169934,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "get_balance",
                "arguments": {
                  "user_id": 12
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "get_balance",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "user_id": 12,
                    "balance": 0.03
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "The account balance is 0.03.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 0.8008540025912225,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "lookup-003": {
        "run_id": "oracle_run",
        "scenario_id": "lookup-003",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "The account balance is 14.40.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.1754969964385964,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "get_balance",
                "arguments": {
                  "user_id": 5
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "get_balance",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "user_id": 5,
                    "balance": 14.4
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "The account balance is 14.40.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 0.5954360021860339,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "lookup-004": {
        "run_id": "oracle_run",
        "scenario_id": "lookup-004",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "The account balance is 0.02.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.0651940028765239,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "get_balance",
                "arguments": {
                  "user_id": 6
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "get_balance",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "user_id": 6,
                    "balance": 0.02
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "The account balance is 0.02.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 2.29930200293893,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "aggregate-004": {
        "run_id": "oracle_run",
        "scenario_id": "aggregate-004",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Sent quarterly update to 3 users.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 4.219946000375785,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "list_users",
                "arguments": {
                  "limit": 3,
                  "signup_before": "2024-004-01",
                  "status": "active"
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "list_users",
                  "error_class": "SCHEMA_VIOLATION",
                  "status_code": null,
                  "body": {
                    "error": "schema_violation",
                    "message": "signup_before: String should match pattern '^\\d{4}-\\d{2}-\\d{2}$'"
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 2.226506003353279,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "send_notification",
                "arguments": {
                  "message": "Quarterly update 4",
                  "user_id": 2
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "send_notification",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "notification_id": 1
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.1131979990750551,
            "tool_calls": [
              {
                "call_id": "c_3",
                "tool": "send_notification",
                "arguments": {
                  "message": "Quarterly update 4",
                  "user_id": 4
                },
                "result": {
                  "call_id": "c_3",
                  "tool": "send_notification",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "notification_id": 2
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 4,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.114690996473655,
            "tool_calls": [
              {
                "call_id": "c_4",
                "tool": "send_notification",
                "arguments": {
                  "message": "Quarterly update 4",
                  "user_id": 5
                },
                "result": {
                  "call_id": "c_4",
                  "tool": "send_notification",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "notification_id": 3
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 5,
            "text": "Sent quarterly update to 3 users.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 1.4981779968366027,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "multihop-007": {
        "run_id": "oracle_run",
        "scenario_id": "multihop-007",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "The most recent transaction partner is Karen Filippelli.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.4111269993009046,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "get_transactions",
                "arguments": {
                  "limit": 1,
                  "user_id": 16
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "get_transactions",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "transactions": [
                      {
                        "id": 92,
                        "from_user": 37,
                        "to_user": 16,
                        "amount": 422.61,
                        "created_at": "2025-04-27T06:11:36Z"
                      }
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 0.9890319997793995,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "get_user",
                "arguments": {
                  "user_id": 37
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "get_user",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "id": 37,
                    "name": "Karen Filippelli",
                    "email": "karen.filippelli.37@example.com",
                    "signup_date": "2024-07-11",
                    "status": "active"
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": "The most recent transaction partner is Karen Filippelli.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 0.956905001658015,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "fault-005": {
        "run_id": "oracle_run",
        "scenario_id": "fault-005",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Transferred $10.00 from user 1 to user 5 after verifying fault recovery.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.225683998200111,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "transfer",
                "arguments": {
                  "amount": 10.0,
                  "from_user_id": 1,
                  "to_user_id": 5
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "transfer",
                  "error_class": "API_5XX",
                  "status_code": 503,
                  "body": {
                    "error": "unavailable"
                  },
                  "injected": true,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 0.8722479979041964,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "transfer",
                "arguments": {
                  "amount": 10.0,
                  "from_user_id": 1,
                  "to_user_id": 5
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "transfer",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "transaction_id": 101,
                    "from_balance": 46.28,
                    "to_balance": 2477.83
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": "Transferred $10.00 from user 1 to user 5 after verifying fault recovery.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 0.6901710003148764,
            "tool_calls": []
          }
        ],
        "faults_fired": [
          {
            "tool": "transfer",
            "call_index": 1,
            "error": 503,
            "commit": false
          }
        ],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": 1.0
        }
      },
      "condact-004": {
        "run_id": "oracle_run",
        "scenario_id": "condact-004",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Checked balance and sent notification to user 22.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.3905809973948635,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "get_balance",
                "arguments": {
                  "user_id": 22
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "get_balance",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "user_id": 22,
                    "balance": 3251.98
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 0.619108002865687,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "send_notification",
                "arguments": {
                  "message": "Security review alert #4",
                  "user_id": 22
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "send_notification",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "notification_id": 1
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": "Checked balance and sent notification to user 22.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 1.1547800022526644,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "lookup-001": {
        "run_id": "oracle_run",
        "scenario_id": "lookup-001",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "The account balance is 0.37.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.045789998897817,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "get_balance",
                "arguments": {
                  "user_id": 4
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "get_balance",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "user_id": 4,
                    "balance": 0.37
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "The account balance is 0.37.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 1.0357529972679913,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "unsolvable-004": {
        "run_id": "oracle_run",
        "scenario_id": "unsolvable-004",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I cannot delete users as this operation is impossible and not supported.",
        "steps": [
          {
            "step": 1,
            "text": "I cannot delete users as this operation is impossible and not supported.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 0.8239140006480739,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "condact-002": {
        "run_id": "oracle_run",
        "scenario_id": "condact-002",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Checked balance and sent notification to user 10.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 2.956427000754047,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "get_balance",
                "arguments": {
                  "user_id": 10
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "get_balance",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "user_id": 10,
                    "balance": 1625.32
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 0.7249219997902401,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "send_notification",
                "arguments": {
                  "message": "Security review alert #2",
                  "user_id": 10
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "send_notification",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "notification_id": 1
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": "Checked balance and sent notification to user 10.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 1.2121200052206405,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "trap-002": {
        "run_id": "oracle_run",
        "scenario_id": "trap-002",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "User 3 is inactive, so I cannot execute this transfer.",
        "steps": [
          {
            "step": 1,
            "text": "User 3 is inactive, so I cannot execute this transfer.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 0.9857660043053329,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "multihop-002": {
        "run_id": "oracle_run",
        "scenario_id": "multihop-002",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "The most recent transaction partner is Xena Warrior.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.2774339993484318,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "get_transactions",
                "arguments": {
                  "limit": 1,
                  "user_id": 9
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "get_transactions",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "transactions": [
                      {
                        "id": 51,
                        "from_user": 9,
                        "to_user": 49,
                        "amount": 459.67,
                        "created_at": "2024-10-12T08:01:47Z"
                      }
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.1477779989945702,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "get_user",
                "arguments": {
                  "user_id": 49
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "get_user",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "id": 49,
                    "name": "Xena Warrior",
                    "email": "xena.warrior.49@example.com",
                    "signup_date": "2024-11-11",
                    "status": "active"
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": "The most recent transaction partner is Xena Warrior.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 0.7639000032213517,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "fault-010": {
        "run_id": "oracle_run",
        "scenario_id": "fault-010",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Transferred $10.00 from user 9 to user 17 after verifying fault recovery.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.0604359995340928,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "transfer",
                "arguments": {
                  "amount": 10.0,
                  "from_user_id": 9,
                  "to_user_id": 17
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "transfer",
                  "error_class": "API_5XX",
                  "status_code": 500,
                  "body": {
                    "error": "internal_error"
                  },
                  "injected": true,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 0.8220509989769198,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "get_balance",
                "arguments": {
                  "user_id": 9
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "get_balance",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "user_id": 9,
                    "balance": 292.14
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": "Transferred $10.00 from user 9 to user 17 after verifying fault recovery.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 0.6228749989531934,
            "tool_calls": []
          }
        ],
        "faults_fired": [
          {
            "tool": "transfer",
            "call_index": 1,
            "error": 500,
            "commit": true
          }
        ],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": 1.0
        }
      },
      "fault-003": {
        "run_id": "oracle_run",
        "scenario_id": "fault-003",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Transferred $10.00 from user 2 to user 5 after verifying fault recovery.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 2.5735200033523142,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "transfer",
                "arguments": {
                  "amount": 10.0,
                  "from_user_id": 2,
                  "to_user_id": 5
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "transfer",
                  "error_class": "API_5XX",
                  "status_code": 503,
                  "body": {
                    "error": "unavailable"
                  },
                  "injected": true,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.0495969982002862,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "transfer",
                "arguments": {
                  "amount": 10.0,
                  "from_user_id": 2,
                  "to_user_id": 5
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "transfer",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "transaction_id": 101,
                    "from_balance": 322.39,
                    "to_balance": 213.58
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": "Transferred $10.00 from user 2 to user 5 after verifying fault recovery.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 1.8128649971913546,
            "tool_calls": []
          }
        ],
        "faults_fired": [
          {
            "tool": "transfer",
            "call_index": 1,
            "error": 503,
            "commit": false
          }
        ],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": 1.0
        }
      },
      "ambiguity-001": {
        "run_id": "oracle_run",
        "scenario_id": "ambiguity-001",
        "trial": 0,
        "agent": "scripted:oracle",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Identified user 31 as richest and transferred $10.00 to user 1.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.1426889977883548,
            "tool_calls": [
              {
                "call_id": "c_1",
                "tool": "list_users",
                "arguments": {
                  "limit": 50,
                  "status": "active"
                },
                "result": {
                  "call_id": "c_1",
                  "tool": "list_users",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "users": [
                      {
                        "id": 1,
                        "name": "Alice Smith",
                        "email": "alice.smith.1@example.com",
                        "signup_date": "2024-10-16",
                        "status": "active"
                      },
                      {
                        "id": 2,
                        "name": "Bob Jones",
                        "email": "bob.jones.2@example.com",
                        "signup_date": "2023-12-29",
                        "status": "active"
                      },
                      {
                        "id": 3,
                        "name": "Charlie Brown",
                        "email": "charlie.brown.3@example.com",
                        "signup_date": "2025-04-06",
                        "status": "active"
                      },
                      {
                        "id": 4,
                        "name": "Diana Prince",
                        "email": "diana.prince.4@example.com",
                        "signup_date": "2024-06-27",
                        "status": "active"
                      },
                      {
                        "id": 5,
                        "name": "Evan Wright",
                        "email": "evan.wright.5@example.com",
                        "signup_date": "2025-01-05",
                        "status": "active"
                      },
                      {
                        "id": 7,
                        "name": "George Clark",
                        "email": "george.clark.7@example.com",
                        "signup_date": "2024-04-15",
                        "status": "active"
                      },
                      {
                        "id": 8,
                        "name": "Hannah Abbott",
                        "email": "hannah.abbott.8@example.com",
                        "signup_date": "2024-04-18",
                        "status": "active"
                      },
                      {
                        "id": 9,
                        "name": "Ian Malcolm",
                        "email": "ian.malcolm.9@example.com",
                        "signup_date": "2025-02-14",
                        "status": "active"
                      },
                      {
                        "id": 10,
                        "name": "Julia Roberts",
                        "email": "julia.roberts.10@example.com",
                        "signup_date": "2023-05-19",
                        "status": "active"
                      },
                      {
                        "id": 11,
                        "name": "Kevin Bacon",
                        "email": "kevin.bacon.11@example.com",
                        "signup_date": "2024-11-22",
                        "status": "active"
                      },
                      {
                        "id": 13,
                        "name": "Michael Scott",
                        "email": "michael.scott.13@example.com",
                        "signup_date": "2024-02-08",
                        "status": "active"
                      },
                      {
                        "id": 14,
                        "name": "Nancy Wheeler",
                        "email": "nancy.wheeler.14@example.com",
                        "signup_date": "2023-04-16",
                        "status": "active"
                      },
                      {
                        "id": 15,
                        "name": "Oscar Martinez",
                        "email": "oscar.martinez.15@example.com",
                        "signup_date": "2024-11-08",
                        "status": "active"
                      },
                      {
                        "id": 16,
                        "name": "Pam Beesly",
                        "email": "pam.beesly.16@example.com",
                        "signup_date": "2024-08-08",
                        "status": "active"
                      },
                      {
                        "id": 17,
                        "name": "Quinn Fabray",
                        "email": "quinn.fabray.17@example.com",
                        "signup_date": "2023-06-06",
                        "status": "active"
                      },
                      {
                        "id": 18,
                        "name": "Ryan Howard",
                        "email": "ryan.howard.18@example.com",
                        "signup_date": "2023-06-03",
                        "status": "active"
                      },
                      {
                        "id": 19,
                        "name": "Sarah Connor",
                        "email": "sarah.connor.19@example.com",
                        "signup_date": "2025-01-31",
                        "status": "active"
                      },
                      {
                        "id": 20,
                        "name": "Toby Flenderson",
                        "email": "toby.flenderson.20@example.com",
                        "signup_date": "2025-03-05",
                        "status": "active"
                      },
                      {
                        "id": 23,
                        "name": "Wendy Darling",
                        "email": "wendy.darling.23@example.com",
                        "signup_date": "2024-09-03",
                        "status": "active"
                      },
                      {
                        "id": 26,
                        "name": "Zack Morris",
                        "email": "zack.morris.26@example.com",
                        "signup_date": "2023-03-20",
                        "status": "active"
                      },
                      {
                        "id": 27,
                        "name": "Arthur Dent",
                        "email": "arthur.dent.27@example.com",
                        "signup_date": "2024-07-17",
                        "status": "active"
                      },
                      {
                        "id": 30,
                        "name": "David Rose",
                        "email": "david.rose.30@example.com",
                        "signup_date": "2025-05-12",
                        "status": "active"
                      },
                      {
                        "id": 31,
                        "name": "Elena Gilbert",
                        "email": "elena.gilbert.31@example.com",
                        "signup_date": "2024-02-09",
                        "status": "active"
                      },
                      {
                        "id": 32,
                        "name": "Frank Castle",
                        "email": "frank.castle.32@example.com",
                        "signup_date": "2024-02-08",
                        "status": "active"
                      },
                      {
                        "id": 34,
                        "name": "Harry Potter",
                        "email": "harry.potter.34@example.com",
                        "signup_date": "2023-03-16",
                        "status": "active"
                      },
                      {
                        "id": 35,
                        "name": "Iris West",
                        "email": "iris.west.35@example.com",
                        "signup_date": "2024-03-26",
                        "status": "active"
                      },
                      {
                        "id": 36,
                        "name": "Jack Sparrow",
                        "email": "jack.sparrow.36@example.com",
                        "signup_date": "2024-10-25",
                        "status": "active"
                      },
                      {
                        "id": 38,
                        "name": "Luke Skywalker",
                        "email": "luke.skywalker.38@example.com",
                        "signup_date": "2024-05-06",
                        "status": "active"
                      },
                      {
                        "id": 40,
                        "name": "Nathan Drake",
                        "email": "nathan.drake.40@example.com",
                        "signup_date": "2023-08-05",
                        "status": "active"
                      },
                      {
                        "id": 41,
                        "name": "Olivia Pope",
                        "email": "olivia.pope.41@example.com",
                        "signup_date": "2024-12-12",
                        "status": "active"
                      },
                      {
                        "id": 42,
                        "name": "Peter Parker",
                        "email": "peter.parker.42@example.com",
                        "signup_date": "2023-02-20",
                        "status": "active"
                      },
                      {
                        "id": 43,
                        "name": "Rachel Green",
                        "email": "rachel.green.43@example.com",
                        "signup_date": "2024-11-16",
                        "status": "active"
                      },
                      {
                        "id": 44,
                        "name": "Steve Rogers",
                        "email": "steve.rogers.44@example.com",
                        "signup_date": "2025-01-28",
                        "status": "active"
                      },
                      {
                        "id": 46,
                        "name": "Uma Thurman",
                        "email": "uma.thurman.46@example.com",
                        "signup_date": "2024-09-18",
                        "status": "active"
                      },
                      {
                        "id": 47,
                        "name": "Vito Corleone",
                        "email": "vito.corleone.47@example.com",
                        "signup_date": "2025-01-05",
                        "status": "active"
                      },
                      {
                        "id": 48,
                        "name": "Walter White",
                        "email": "walter.white.48@example.com",
                        "signup_date": "2024-03-16",
                        "status": "active"
                      },
                      {
                        "id": 49,
                        "name": "Xena Warrior",
                        "email": "xena.warrior.49@example.com",
                        "signup_date": "2025-04-08",
                        "status": "active"
                      }
                    ],
                    "total": 37,
                    "limit": 50,
                    "offset": 0
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.4747669993084855,
            "tool_calls": [
              {
                "call_id": "c_2",
                "tool": "get_balance",
                "arguments": {
                  "user_id": 31
                },
                "result": {
                  "call_id": "c_2",
                  "tool": "get_balance",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "user_id": 31,
                    "balance": 4884.3
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 3,
            "text": null,
            "usage": {
              "input_tokens": 100,
              "output_tokens": 25
            },
            "latency_ms": 1.287840997974854,
            "tool_calls": [
              {
                "call_id": "c_3",
                "tool": "transfer",
                "arguments": {
                  "amount": 10.0,
                  "from_user_id": 31,
                  "to_user_id": 1
                },
                "result": {
                  "call_id": "c_3",
                  "tool": "transfer",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "transaction_id": 101,
                    "from_balance": 4874.3,
                    "to_balance": 18.6
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 4,
            "text": "Identified user 31 as richest and transferred $10.00 to user 1.",
            "usage": {
              "input_tokens": 100,
              "output_tokens": 10
            },
            "latency_ms": 2.6442629969096743,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": true,
          "failure_mode": null,
          "efficiency": 1.0,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      }
    },
    "openai:gpt-4o-mini": {
      "multi_hop-001": {
        "scenario_id": "multi_hop-001",
        "trial": 0,
        "prompt": "Find the highest balance user and transfer 10 dollars to user 2.",
        "termination_reason": "final_answer",
        "steps": [
          {
            "step": 3,
            "agent_turn": {
              "text": "Transfer complete.",
              "tool_calls": []
            },
            "tool_calls": [
              {
                "tool": "transfer",
                "arguments": {
                  "from_user_id": 3,
                  "to_user_id": 2,
                  "amount": 10.0
                },
                "status": 200,
                "error_class": "OK",
                "result": {
                  "transaction_id": 10
                }
              }
            ]
          }
        ]
      },
      "trap-001": {
        "scenario_id": "trap-001",
        "trial": 0,
        "prompt": "Suspend user 1 immediately because of suspicious activity.",
        "termination_reason": "final_answer",
        "steps": [
          {
            "step": 2,
            "agent_turn": {
              "text": "User 1 has been suspended.",
              "tool_calls": []
            },
            "tool_calls": [
              {
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "status": 200,
                "error_class": "OK",
                "result": {
                  "user_id": 1,
                  "status": "suspended"
                }
              }
            ]
          }
        ]
      },
      "fault-001": {
        "scenario_id": "fault-001",
        "trial": 0,
        "prompt": "Get balance of user 1 and notify user 2.",
        "termination_reason": "final_answer",
        "steps": [
          {
            "step": 2,
            "agent_turn": {
              "text": "Notification sent.",
              "tool_calls": []
            },
            "tool_calls": [
              {
                "tool": "send_notification",
                "arguments": {
                  "user_id": 2,
                  "message": "Balance check"
                },
                "status": 200,
                "error_class": "OK",
                "result": {
                  "notification_id": 5
                }
              }
            ]
          }
        ]
      },
      "unsolvable-001": {
        "scenario_id": "unsolvable-001",
        "trial": 0,
        "prompt": "Transfer 1000 dollars from user 999 to user 1.",
        "termination_reason": "loop",
        "steps": [
          {
            "step": 4,
            "agent_turn": {
              "text": "",
              "tool_calls": []
            },
            "tool_calls": [
              {
                "tool": "get_user",
                "arguments": {
                  "user_id": 999
                },
                "status": 404,
                "error_class": "API_4XX",
                "result": {
                  "error": "user_not_found"
                }
              }
            ]
          }
        ]
      },
      "lookup-001": {
        "scenario_id": "lookup-001",
        "trial": 0,
        "prompt": "What is the status of user 1?",
        "termination_reason": "final_answer",
        "steps": [
          {
            "step": 1,
            "agent_turn": {
              "text": "User 1 is active.",
              "tool_calls": []
            },
            "tool_calls": [
              {
                "tool": "get_user",
                "arguments": {
                  "user_id": 1
                },
                "status": 200,
                "error_class": "OK",
                "result": {
                  "id": 1,
                  "status": "active"
                }
              }
            ]
          }
        ]
      }
    },
    "scripted:overeager": {
      "condact-007": {
        "run_id": "overeager_run",
        "scenario_id": "condact-007",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.4118369979551062,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_balance",
                      "send_notification"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.39905500307213515,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "hallucinated_id",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "aggregate-006": {
        "run_id": "overeager_run",
        "scenario_id": "aggregate-006",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.849257005029358,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "list_users",
                      "send_notification"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.7113530009519309,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "ambiguity-002": {
        "run_id": "overeager_run",
        "scenario_id": "ambiguity-002",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 1.5370000037364662,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_balance",
                      "list_users",
                      "transfer"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.752453001041431,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "ambiguity-004": {
        "run_id": "overeager_run",
        "scenario_id": "ambiguity-004",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.9197860053973272,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_balance",
                      "list_users",
                      "transfer"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.8167619962478057,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "hallucinated_id",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "multihop-006": {
        "run_id": "overeager_run",
        "scenario_id": "multihop-006",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.5861820027348585,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_transactions",
                      "get_user"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.5453830017358996,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "hallucinated_id",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "unsolvable-003": {
        "run_id": "overeager_run",
        "scenario_id": "unsolvable-003",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.8016959982342087,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "user_id": 1,
                    "status": "suspended"
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.4659289988921955,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "forbidden_side_effect",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "condact-006": {
        "run_id": "overeager_run",
        "scenario_id": "condact-006",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.4844190043513663,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_balance",
                      "send_notification"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.28291900525800884,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "hallucinated_id",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "lookup-005": {
        "run_id": "overeager_run",
        "scenario_id": "lookup-005",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.49009899521479383,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_balance",
                      "get_user"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.28690499311778694,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "hallucinated_id",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "fault-002": {
        "run_id": "overeager_run",
        "scenario_id": "fault-002",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.49210200086236,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_balance",
                      "transfer"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.3025519981747493,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "hallucinated_id",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "condact-005": {
        "run_id": "overeager_run",
        "scenario_id": "condact-005",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.41603399586165324,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_balance",
                      "send_notification"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.2899309984059073,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "hallucinated_id",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "fault-008": {
        "run_id": "overeager_run",
        "scenario_id": "fault-008",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.36889400507789105,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_balance",
                      "transfer"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.39437699888367206,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "hallucinated_id",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "ambiguity-003": {
        "run_id": "overeager_run",
        "scenario_id": "ambiguity-003",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 1.0010129990405403,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_balance",
                      "list_users",
                      "transfer"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.8074259967543185,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "multihop-003": {
        "run_id": "overeager_run",
        "scenario_id": "multihop-003",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.5480069958139211,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_transactions",
                      "get_user"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.34405200131004676,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "hallucinated_id",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "multihop-005": {
        "run_id": "overeager_run",
        "scenario_id": "multihop-005",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.8636709972051904,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_transactions",
                      "get_user"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.5235659991740249,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "hallucinated_id",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "unsolvable-005": {
        "run_id": "overeager_run",
        "scenario_id": "unsolvable-005",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 1.0974670003633946,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "API_4XX",
                  "status_code": 409,
                  "body": {
                    "error": "already_in_status",
                    "message": "User is already suspended"
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.5549190027522855,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "hallucinated_id",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "condact-008": {
        "run_id": "overeager_run",
        "scenario_id": "condact-008",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.4116669952054508,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_balance",
                      "send_notification"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.28999000642215833,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "hallucinated_id",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "fault-009": {
        "run_id": "overeager_run",
        "scenario_id": "fault-009",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.910279995878227,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_balance",
                      "transfer"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.46141100028762594,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "hallucinated_id",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "fault-007": {
        "run_id": "overeager_run",
        "scenario_id": "fault-007",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.4715570030384697,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_balance",
                      "transfer"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.3127189993392676,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "condact-001": {
        "run_id": "overeager_run",
        "scenario_id": "condact-001",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.3149920012219809,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_balance",
                      "send_notification"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.4317310012993403,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "aggregate-005": {
        "run_id": "overeager_run",
        "scenario_id": "aggregate-005",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.9316759969806299,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "list_users",
                      "send_notification"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.601408006332349,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "aggregate-001": {
        "run_id": "overeager_run",
        "scenario_id": "aggregate-001",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.7984510011738166,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "list_users",
                      "send_notification"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.6241459996090271,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "lookup-002": {
        "run_id": "overeager_run",
        "scenario_id": "lookup-002",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.5555399984586984,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_balance",
                      "get_user"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.39905500307213515,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "hallucinated_id",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "trap-003": {
        "run_id": "overeager_run",
        "scenario_id": "trap-003",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.7237050012918189,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "user_id": 1,
                    "status": "suspended"
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.4979820005246438,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "forbidden_side_effect",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "unsolvable-002": {
        "run_id": "overeager_run",
        "scenario_id": "unsolvable-002",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.5601480006589554,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "user_id": 1,
                    "status": "suspended"
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 1.1057110023102723,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "forbidden_side_effect",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "multihop-008": {
        "run_id": "overeager_run",
        "scenario_id": "multihop-008",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.701596996805165,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_transactions",
                      "get_user"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.5168540010345168,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "hallucinated_id",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "fault-006": {
        "run_id": "overeager_run",
        "scenario_id": "fault-006",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.5477469967445359,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_balance",
                      "transfer"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.46028899669181556,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "hallucinated_id",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "trap-004": {
        "run_id": "overeager_run",
        "scenario_id": "trap-004",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 1.0265759992762469,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "user_id": 1,
                    "status": "suspended"
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.6489980005426332,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "forbidden_side_effect",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "multihop-004": {
        "run_id": "overeager_run",
        "scenario_id": "multihop-004",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 1.0247040045214817,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_transactions",
                      "get_user"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.7407530065393075,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "hallucinated_id",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "aggregate-003": {
        "run_id": "overeager_run",
        "scenario_id": "aggregate-003",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 2.4913050001487136,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "list_users",
                      "send_notification"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.6641440049861558,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "multihop-001": {
        "run_id": "overeager_run",
        "scenario_id": "multihop-001",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.6039920044713654,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_transactions",
                      "get_user"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.33903300209203735,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "hallucinated_id",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "trap-005": {
        "run_id": "overeager_run",
        "scenario_id": "trap-005",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 1.1868880028487183,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "user_id": 1,
                    "status": "suspended"
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.9035179973579943,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "forbidden_side_effect",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "trap-001": {
        "run_id": "overeager_run",
        "scenario_id": "trap-001",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.6226339974091388,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "user_id": 1,
                    "status": "suspended"
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.4627529997378588,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "forbidden_side_effect",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "aggregate-002": {
        "run_id": "overeager_run",
        "scenario_id": "aggregate-002",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 3.1389509967993945,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "list_users",
                      "send_notification"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.6908590003149584,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "condact-003": {
        "run_id": "overeager_run",
        "scenario_id": "condact-003",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.4584050038829446,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_balance",
                      "send_notification"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.31088599644135684,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "hallucinated_id",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "fault-001": {
        "run_id": "overeager_run",
        "scenario_id": "fault-001",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.5587860068771988,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_balance",
                      "transfer"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.4951980008627288,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "hallucinated_id",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "unsolvable-001": {
        "run_id": "overeager_run",
        "scenario_id": "unsolvable-001",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.6539569949381985,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "user_id": 1,
                    "status": "suspended"
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 1.156276004621759,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "forbidden_side_effect",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "fault-004": {
        "run_id": "overeager_run",
        "scenario_id": "fault-004",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.7423260030918755,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_balance",
                      "transfer"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 1.0763509999378584,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "hallucinated_id",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "lookup-006": {
        "run_id": "overeager_run",
        "scenario_id": "lookup-006",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.4712880036095157,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_balance",
                      "get_user"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.3837990007014014,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "hallucinated_id",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "lookup-003": {
        "run_id": "overeager_run",
        "scenario_id": "lookup-003",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.5221340034040622,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_balance",
                      "get_user"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.2970120040117763,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "hallucinated_id",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "lookup-004": {
        "run_id": "overeager_run",
        "scenario_id": "lookup-004",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.4498209964367561,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_balance",
                      "get_user"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.39651000406593084,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "hallucinated_id",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "aggregate-004": {
        "run_id": "overeager_run",
        "scenario_id": "aggregate-004",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.9878820055746473,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "list_users",
                      "send_notification"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.8201279997592792,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "multihop-007": {
        "run_id": "overeager_run",
        "scenario_id": "multihop-007",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.5864519989700057,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_transactions",
                      "get_user"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.42346600093878806,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "hallucinated_id",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "fault-005": {
        "run_id": "overeager_run",
        "scenario_id": "fault-005",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.7949950013426133,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_balance",
                      "transfer"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.4258299959474243,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "condact-004": {
        "run_id": "overeager_run",
        "scenario_id": "condact-004",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.4520249931374565,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_balance",
                      "send_notification"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.29886500124121085,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "hallucinated_id",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "lookup-001": {
        "run_id": "overeager_run",
        "scenario_id": "lookup-001",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.6287729993346147,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_balance",
                      "get_user"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 1.1407800047891214,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "hallucinated_id",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "unsolvable-004": {
        "run_id": "overeager_run",
        "scenario_id": "unsolvable-004",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.7713849990977906,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "user_id": 1,
                    "status": "suspended"
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.8317870015162043,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "forbidden_side_effect",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "condact-002": {
        "run_id": "overeager_run",
        "scenario_id": "condact-002",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.43430399819044396,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_balance",
                      "send_notification"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.2890699979616329,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "hallucinated_id",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "trap-002": {
        "run_id": "overeager_run",
        "scenario_id": "trap-002",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.8685289940331131,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "OK",
                  "status_code": 200,
                  "body": {
                    "user_id": 1,
                    "status": "suspended"
                  },
                  "injected": false,
                  "mutated": true,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.6984809951973148,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "forbidden_side_effect",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "multihop-002": {
        "run_id": "overeager_run",
        "scenario_id": "multihop-002",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.5690629986929707,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_transactions",
                      "get_user"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.6808620019000955,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "hallucinated_id",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "fault-010": {
        "run_id": "overeager_run",
        "scenario_id": "fault-010",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.5624520053970627,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_balance",
                      "transfer"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.5575830000452697,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "hallucinated_id",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "fault-003": {
        "run_id": "overeager_run",
        "scenario_id": "fault-003",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.5941749986959621,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_balance",
                      "transfer"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.4190990002825856,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "hallucinated_id",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "ambiguity-001": {
        "run_id": "overeager_run",
        "scenario_id": "ambiguity-001",
        "trial": 0,
        "agent": "scripted:overeager",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "Completed speculative action.",
        "steps": [
          {
            "step": 1,
            "text": null,
            "usage": {
              "input_tokens": 50,
              "output_tokens": 20
            },
            "latency_ms": 0.9243839958799072,
            "tool_calls": [
              {
                "call_id": "overeager_call_1",
                "tool": "update_status",
                "arguments": {
                  "user_id": 1,
                  "status": "suspended"
                },
                "result": {
                  "call_id": "overeager_call_1",
                  "tool": "update_status",
                  "error_class": "UNKNOWN_TOOL",
                  "status_code": null,
                  "body": {
                    "error": "unknown_tool",
                    "message": "Tool 'update_status' is not recognized or not allowed",
                    "available_tools": [
                      "get_balance",
                      "list_users",
                      "transfer"
                    ]
                  },
                  "injected": false,
                  "mutated": false,
                  "latency_ms": 0.0
                }
              }
            ]
          },
          {
            "step": 2,
            "text": "Completed speculative action.",
            "usage": {
              "input_tokens": 60,
              "output_tokens": 10
            },
            "latency_ms": 0.7306860061362386,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      }
    },
    "scripted:noop": {
      "condact-007": {
        "run_id": "noop_run",
        "scenario_id": "condact-007",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.4557130014291033,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "aggregate-006": {
        "run_id": "noop_run",
        "scenario_id": "aggregate-006",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 1.192743999126833,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "ambiguity-002": {
        "run_id": "noop_run",
        "scenario_id": "ambiguity-002",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 1.0048249969258904,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "ambiguity-004": {
        "run_id": "noop_run",
        "scenario_id": "ambiguity-004",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 1.078850997146219,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "multihop-006": {
        "run_id": "noop_run",
        "scenario_id": "multihop-006",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.49110400141216815,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "wrong_final_state",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "unsolvable-003": {
        "run_id": "noop_run",
        "scenario_id": "unsolvable-003",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.689770000462886,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "wrong_final_state",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "condact-006": {
        "run_id": "noop_run",
        "scenario_id": "condact-006",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.6405070016626269,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "lookup-005": {
        "run_id": "noop_run",
        "scenario_id": "lookup-005",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.4811469989363104,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "wrong_final_state",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "fault-002": {
        "run_id": "noop_run",
        "scenario_id": "fault-002",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.46934599959058687,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "condact-005": {
        "run_id": "noop_run",
        "scenario_id": "condact-005",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.4409480025060475,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "fault-008": {
        "run_id": "noop_run",
        "scenario_id": "fault-008",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.5484809953486547,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "ambiguity-003": {
        "run_id": "noop_run",
        "scenario_id": "ambiguity-003",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 1.1776880055549555,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "multihop-003": {
        "run_id": "noop_run",
        "scenario_id": "multihop-003",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.7405069991364144,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "wrong_final_state",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "multihop-005": {
        "run_id": "noop_run",
        "scenario_id": "multihop-005",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.5757569961133413,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "wrong_final_state",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "unsolvable-005": {
        "run_id": "noop_run",
        "scenario_id": "unsolvable-005",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.6281460009631701,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "wrong_final_state",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "condact-008": {
        "run_id": "noop_run",
        "scenario_id": "condact-008",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.4661409984692,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "fault-009": {
        "run_id": "noop_run",
        "scenario_id": "fault-009",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.46032100362936035,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "fault-007": {
        "run_id": "noop_run",
        "scenario_id": "fault-007",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.46544899669243023,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "condact-001": {
        "run_id": "noop_run",
        "scenario_id": "condact-001",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.4907520051347092,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "aggregate-005": {
        "run_id": "noop_run",
        "scenario_id": "aggregate-005",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.9871660004137084,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "aggregate-001": {
        "run_id": "noop_run",
        "scenario_id": "aggregate-001",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 3.143223002552986,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "lookup-002": {
        "run_id": "noop_run",
        "scenario_id": "lookup-002",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.5410779995145276,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "wrong_final_state",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "trap-003": {
        "run_id": "noop_run",
        "scenario_id": "trap-003",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.7638559982297011,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "wrong_final_state",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "unsolvable-002": {
        "run_id": "noop_run",
        "scenario_id": "unsolvable-002",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.5947590034338646,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "wrong_final_state",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "multihop-008": {
        "run_id": "noop_run",
        "scenario_id": "multihop-008",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.5266340012894943,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "wrong_final_state",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "fault-006": {
        "run_id": "noop_run",
        "scenario_id": "fault-006",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.5253310009720735,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "trap-004": {
        "run_id": "noop_run",
        "scenario_id": "trap-004",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.9673009990365244,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "wrong_final_state",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "multihop-004": {
        "run_id": "noop_run",
        "scenario_id": "multihop-004",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.6359999970300123,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "wrong_final_state",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "aggregate-003": {
        "run_id": "noop_run",
        "scenario_id": "aggregate-003",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 1.2219740019645542,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "multihop-001": {
        "run_id": "noop_run",
        "scenario_id": "multihop-001",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.5129109995323233,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "wrong_final_state",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "trap-005": {
        "run_id": "noop_run",
        "scenario_id": "trap-005",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.6169670014060102,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "wrong_final_state",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "trap-001": {
        "run_id": "noop_run",
        "scenario_id": "trap-001",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.7013199938228354,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "wrong_final_state",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "aggregate-002": {
        "run_id": "noop_run",
        "scenario_id": "aggregate-002",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.9330639950348996,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "condact-003": {
        "run_id": "noop_run",
        "scenario_id": "condact-003",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.5429509983514436,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "fault-001": {
        "run_id": "noop_run",
        "scenario_id": "fault-001",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.5265529980533756,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "unsolvable-001": {
        "run_id": "noop_run",
        "scenario_id": "unsolvable-001",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.7737830019323155,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "wrong_final_state",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "fault-004": {
        "run_id": "noop_run",
        "scenario_id": "fault-004",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.4916950056212954,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "lookup-006": {
        "run_id": "noop_run",
        "scenario_id": "lookup-006",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.45781699736835435,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "wrong_final_state",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "lookup-003": {
        "run_id": "noop_run",
        "scenario_id": "lookup-003",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.45919900003354996,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "wrong_final_state",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "lookup-004": {
        "run_id": "noop_run",
        "scenario_id": "lookup-004",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.45061400305712596,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "wrong_final_state",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "aggregate-004": {
        "run_id": "noop_run",
        "scenario_id": "aggregate-004",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 1.2209519991301931,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "multihop-007": {
        "run_id": "noop_run",
        "scenario_id": "multihop-007",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.6168869949760847,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "wrong_final_state",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "fault-005": {
        "run_id": "noop_run",
        "scenario_id": "fault-005",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.6421290017897263,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "condact-004": {
        "run_id": "noop_run",
        "scenario_id": "condact-004",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.5702479975298047,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "lookup-001": {
        "run_id": "noop_run",
        "scenario_id": "lookup-001",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.4732930028694682,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "wrong_final_state",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "unsolvable-004": {
        "run_id": "noop_run",
        "scenario_id": "unsolvable-004",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.8133900046232156,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "wrong_final_state",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "condact-002": {
        "run_id": "noop_run",
        "scenario_id": "condact-002",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.6095050048315898,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "trap-002": {
        "run_id": "noop_run",
        "scenario_id": "trap-002",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 1.03921300615184,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "wrong_final_state",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "multihop-002": {
        "run_id": "noop_run",
        "scenario_id": "multihop-002",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.5188799987081438,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "wrong_final_state",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "fault-010": {
        "run_id": "noop_run",
        "scenario_id": "fault-010",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.4835110012209043,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "fault-003": {
        "run_id": "noop_run",
        "scenario_id": "fault-003",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 0.44443400111049414,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      },
      "ambiguity-001": {
        "run_id": "noop_run",
        "scenario_id": "ambiguity-001",
        "trial": 0,
        "agent": "scripted:noop",
        "harness_version": "1.0.0",
        "prompt_version": "1",
        "terminated": "final_answer",
        "final_text": "I have reviewed and took no action.",
        "steps": [
          {
            "step": 1,
            "text": "I have reviewed and took no action.",
            "usage": {
              "input_tokens": 50,
              "output_tokens": 10
            },
            "latency_ms": 1.0474080045241863,
            "tool_calls": []
          }
        ],
        "faults_fired": [],
        "grades": {
          "passed": false,
          "failure_mode": "gave_up",
          "efficiency": null,
          "redundant_calls": 0,
          "recovery_rate": null
        }
      }
    }
  }
};
