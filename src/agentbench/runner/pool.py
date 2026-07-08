"""Parallel trial runner and results aggregator for AgentBench-Lite.

FR-RUN-3, FR-TRACE-2, FR-TRACE-3:
Executes scenario trials in parallel threads with complete database isolation.
Writes sorted results.jsonl, individual traces, and manifest.json.
"""
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timezone
import json
from pathlib import Path
from typing import Any, Callable, Dict, List, Optional, Tuple
from pydantic import BaseModel

from agentbench.agents.base import Agent
from agentbench.config.pricing import calculate_cost
from agentbench.env.seed import seed
from agentbench.runner.loop import run_task
from agentbench.runner.trace import Trace
from agentbench.scenarios.schema import Scenario


class ResultRow(BaseModel):
    """A single evaluation trial summary row in results.jsonl."""
    run_id: str
    scenario_id: str
    trial: int
    agent: str
    category: str
    difficulty: str
    passed: Optional[bool]
    terminated: str
    failure_mode: Optional[str]
    steps: int
    tool_calls: int
    optimal_steps: int
    efficiency: Optional[float]
    redundant_calls: int
    schema_violations: int
    unknown_tools: int
    api_4xx: int
    api_5xx: int
    hallucinated_ids: int
    faults_fired: int
    faults_recovered: int
    recovery_rate: Optional[float]
    input_tokens: int
    output_tokens: int
    cost_usd: Optional[float]
    latency_ms_total: float
    latency_ms_p50_call: float


def _p50(latencies: List[float]) -> float:
    """Calculate nearest-rank p50 latency."""
    if not latencies:
        return 0.0
    s = sorted(latencies)
    idx = int(round(0.50 * (len(s) - 1)))
    return round(s[idx], 2)


def run_single_trial(
    scenario: Scenario,
    agent: Agent,
    trial: int,
    run_id: str,
    out_dir: Path,
    replay: bool = False,
) -> Tuple[ResultRow, Trace]:
    """Execute one trial in thread isolation and compute all grades."""
    # Isolated in-memory database connection per trial
    conn = seed(scenario.seed)

    trace, conn = run_task(
        scenario=scenario,
        agent=agent,
        trial=trial,
        run_id=run_id,
        conn=conn,
    )

    try:
        # 1. Graders (imported locally to avoid circular dependencies)
        from agentbench.graders.contracts import grade_contracts
        from agentbench.graders.efficiency import grade_efficiency
        from agentbench.graders.recovery import grade_recovery
        from agentbench.graders.state import grade_state_and_answer
        from agentbench.graders.taxonomy import classify_failure

        state_res = grade_state_and_answer(conn, scenario, trace)
        efficiency, redundant_calls = grade_efficiency(scenario, trace, passed=state_res.passed)
        contract_res = grade_contracts(scenario, trace)
        faults_fired, faults_recovered, recovery_rate = grade_recovery(scenario, trace, state_pass=state_res.state_pass)
        failure_mode = classify_failure(
            scenario=scenario,
            trace=trace,
            state_res=state_res,
            contract_res=contract_res,
            faults_fired=faults_fired,
            faults_recovered=faults_recovered,
        )

        # 2. Token & Latency accounting
        tot_input = sum(step.usage.input_tokens for step in trace.steps)
        tot_output = sum(step.usage.output_tokens for step in trace.steps)
        cost = calculate_cost(agent.name, tot_input, tot_output)

        call_latencies = [
            tc.result.latency_ms
            for step in trace.steps
            for tc in step.tool_calls
        ]
        # In replay mode, latency is fixed to 0.0 or replay values for byte determinism
        lat_total = 0.0 if replay else round(sum(step.latency_ms for step in trace.steps), 2)
        lat_p50 = 0.0 if replay else _p50(call_latencies)

        total_tool_calls = sum(len(step.tool_calls) for step in trace.steps)

        row = ResultRow(
            run_id=run_id,
            scenario_id=scenario.id,
            trial=trial,
            agent=agent.name,
            category=scenario.category,
            difficulty=scenario.difficulty,
            passed=state_res.passed,
            terminated=trace.terminated,
            failure_mode=failure_mode,
            steps=len(trace.steps),
            tool_calls=total_tool_calls,
            optimal_steps=scenario.expected.optimal_steps,
            efficiency=efficiency,
            redundant_calls=redundant_calls,
            schema_violations=contract_res.schema_violations,
            unknown_tools=contract_res.unknown_tools,
            api_4xx=contract_res.api_4xx,
            api_5xx=contract_res.api_5xx,
            hallucinated_ids=contract_res.hallucinated_ids,
            faults_fired=faults_fired,
            faults_recovered=faults_recovered,
            recovery_rate=recovery_rate,
            input_tokens=tot_input,
            output_tokens=tot_output,
            cost_usd=cost,
            latency_ms_total=lat_total,
            latency_ms_p50_call=lat_p50,
        )

        # Attach grades to trace for archiving
        trace.grades = {
            "passed": state_res.passed,
            "failure_mode": failure_mode,
            "efficiency": efficiency,
            "redundant_calls": redundant_calls,
            "recovery_rate": recovery_rate,
        }

        # Write trace
        trace_dir = out_dir / "traces"
        trace_dir.mkdir(parents=True, exist_ok=True)
        trace_file = trace_dir / f"{scenario.id}__{trial}.json"
        with trace_file.open("w", encoding="utf-8") as f:
            f.write(trace.model_dump_json(indent=2))

        return row, trace
    finally:
        conn.close()


def run_suite(
    scenarios: List[Scenario],
    agent_factory: Callable[[Scenario], Agent],
    trials: int = 1,
    concurrency: int = 4,
    out_dir: Path | str = "runs/run_default",
    run_id: str = "run_default",
    replay: bool = False,
) -> List[ResultRow]:
    """Execute an evaluation suite with thread concurrency and output results.jsonl.
    
    FR-RUN-3, FR-TRACE-2: Thread pool execution; sorted canonical results.jsonl.
    """
    out_path = Path(out_dir)
    out_path.mkdir(parents=True, exist_ok=True)

    start_time = datetime.now(timezone.utc).isoformat()
    tasks = []

    for sc in scenarios:
        for t in range(trials):
            tasks.append((sc, t))

    results: List[ResultRow] = []

    # ponytail: ThreadPoolExecutor for lightweight, multi-threaded isolation
    with ThreadPoolExecutor(max_workers=concurrency) as executor:
        future_map = {
            executor.submit(
                run_single_trial,
                sc,
                agent_factory(sc),
                t,
                run_id,
                out_path,
                replay,
            ): (sc.id, t)
            for sc, t in tasks
        }
        for future in as_completed(future_map):
            row, _ = future.result()
            results.append(row)

    # FR-RUN-3: Guarantee deterministic ordering by (scenario_id, trial)
    results.sort(key=lambda r: (r.scenario_id, r.trial))

    # Write results.jsonl
    jsonl_path = out_path / "results.jsonl"
    with jsonl_path.open("w", encoding="utf-8") as f:
        for r in results:
            f.write(r.model_dump_json() + "\n")

    end_time = datetime.now(timezone.utc).isoformat()

    # Write manifest.json
    manifest = {
        "run_id": run_id,
        "agent": results[0].agent if results else "unknown",
        "harness_version": "1.0.0",
        "scenarios_count": len(scenarios),
        "trials_per_scenario": trials,
        "concurrency": concurrency,
        "replay_mode": replay,
        "start_time": start_time,
        "end_time": end_time,
    }
    with (out_path / "manifest.json").open("w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2)

    return results
