"""Aggregator for AgentBench-Lite benchmark run results."""
import json
from pathlib import Path
from typing import Any, Dict, List, Optional
from pydantic import BaseModel

from agentbench.report.stats import pass_at_k, pass_power_k, percentile, wilson_ci
from agentbench.runner.pool import ResultRow


class GroupStats(BaseModel):
    name: str
    trials: int
    passes: int
    pass_rate: float
    mean_efficiency: Optional[float] = None


class TaxonomyEntry(BaseModel):
    mode: str
    count: int
    pct: float


class WorstScenario(BaseModel):
    scenario_id: str
    category: str
    difficulty: str
    trials: int
    passes: int
    pass_rate: float
    failure_mode: Optional[str] = None
    trace_excerpt: str = ""


class HeadlineStats(BaseModel):
    total_trials: int
    eval_trials: int
    harness_errors: int
    passed_trials: int
    pass_rate: float
    wilson_ci: tuple[float, float]
    pass_at_1: float
    pass_at_k: float
    pass_pow_k: float
    k_val: int
    mean_efficiency: Optional[float] = None
    schema_violations_per_trial: float
    hallucinated_ids_per_trial: float
    recovery_rate: Optional[float] = None
    tokens_per_trial: float
    cost_usd_per_trial: Optional[float] = None
    tokens_per_solved: Optional[float] = None
    cost_usd_per_solved: Optional[float] = None
    latency_p50: float
    latency_p95: float
    latency_p99: float


class RunSummary(BaseModel):
    header: Dict[str, Any]
    headline: HeadlineStats
    by_difficulty: List[GroupStats]
    by_category: List[GroupStats]
    taxonomy: List[TaxonomyEntry]
    worst_scenarios: List[WorstScenario]
    repro_command: str


def load_results_and_manifest(run_dir: Path) -> tuple[List[ResultRow], Dict[str, Any]]:
    """Load results.jsonl and manifest.json from a run directory."""
    results_path = run_dir / "results.jsonl"
    manifest_path = run_dir / "manifest.json"

    if not results_path.is_file():
        raise FileNotFoundError(f"Missing results file: {results_path}")

    rows: List[ResultRow] = []
    with results_path.open("r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if line:
                rows.append(ResultRow.model_validate_json(line))

    manifest: Dict[str, Any] = {}
    if manifest_path.is_file():
        with manifest_path.open("r", encoding="utf-8") as f:
            manifest = json.load(f)

    return rows, manifest


def _get_trace_excerpt(run_dir: Path, scenario_id: str, trial: int) -> str:
    """Read a trimmed trace excerpt from the recorded trace file if present."""
    trace_file = run_dir / "traces" / f"{scenario_id}__{trial}.json"
    if not trace_file.is_file():
        # Fallback to alternate trace naming if any
        trace_file = run_dir / "traces" / f"{scenario_id}_t{trial}.json"
    if not trace_file.is_file():
        return "(trace file not found)"

    try:
        data = json.loads(trace_file.read_text(encoding="utf-8"))
        steps = data.get("steps", [])
        total_steps = len(steps)
        if not steps:
            return f"Prompt: {data.get('prompt', '')[:100]}... [No steps executed]"
        
        # Take the last 2 steps or last step
        last_step = steps[-1]
        calls_summary = [c.get("tool") for c in last_step.get("tool_calls", [])]
        term = data.get("termination_reason", "unknown")
        text = last_step.get("agent_turn", {}).get("text") or ""
        text_preview = f'"{text[:80]}..."' if text else "None"
        return (
            f"Total steps: {total_steps} | Final step #{last_step.get('step')}: "
            f"calls={calls_summary}, text={text_preview} | Terminated: {term}"
        )
    except Exception as e:
        return f"(failed to parse trace: {e})"


def aggregate_run(run_dir: Path) -> RunSummary:
    """Aggregate a run directory into a complete RunSummary."""
    rows, manifest = load_results_and_manifest(run_dir)

    total_trials = len(rows)
    harness_errors = sum(1 for r in rows if r.terminated == "harness_error")
    eval_rows = [r for r in rows if r.terminated != "harness_error"]
    eval_trials = len(eval_rows)

    passed_rows = [r for r in eval_rows if r.passed]
    passed_trials = len(passed_rows)

    pass_rate = round(passed_trials / eval_trials, 4) if eval_trials > 0 else 0.0
    ci = wilson_ci(passed_trials, eval_trials, 0.95)

    # Efficiency (mean over passed trials)
    passed_efficiencies = [r.efficiency for r in passed_rows if r.efficiency is not None]
    mean_efficiency = (
        round(sum(passed_efficiencies) / len(passed_efficiencies), 4)
        if passed_efficiencies
        else None
    )

    # Per-scenario pass@k and pass^k
    # Group trials by scenario_id
    scenarios_map: Dict[str, List[ResultRow]] = {}
    for r in eval_rows:
        scenarios_map.setdefault(r.scenario_id, []).append(r)

    # Determine max trials per scenario to choose k
    max_trials_per_sc = max((len(t) for t in scenarios_map.values()), default=1)
    k_val = min(max_trials_per_sc, 3)

    p_at_1_list = []
    p_at_k_list = []
    p_pow_k_list = []

    for sc_id, sc_trials in scenarios_map.items():
        n = len(sc_trials)
        c = sum(1 for t in sc_trials if t.passed)
        p_at_1_list.append(pass_at_k(n, c, 1))
        p_at_k_list.append(pass_at_k(n, c, k_val))
        p_pow_k_list.append(pass_power_k(n, c, k_val))

    pass_at_1 = round(sum(p_at_1_list) / len(p_at_1_list), 4) if p_at_1_list else 0.0
    p_at_k = round(sum(p_at_k_list) / len(p_at_k_list), 4) if p_at_k_list else 0.0
    p_pow_k = round(sum(p_pow_k_list) / len(p_pow_k_list), 4) if p_pow_k_list else 0.0

    # Rates and averages
    schema_viols = sum(r.schema_violations for r in eval_rows)
    hallucinated_ids = sum(r.hallucinated_ids for r in eval_rows)
    schema_viols_per_trial = round(schema_viols / eval_trials, 2) if eval_trials > 0 else 0.0
    hallucinated_ids_per_trial = round(hallucinated_ids / eval_trials, 2) if eval_trials > 0 else 0.0

    # Fault recovery
    fired = sum(r.faults_fired for r in eval_rows)
    recovered = sum(r.faults_recovered for r in eval_rows)
    recovery_rate = round(recovered / fired, 4) if fired > 0 else None

    # Tokens and cost
    tot_input = sum(r.input_tokens for r in eval_rows)
    tot_output = sum(r.output_tokens for r in eval_rows)
    tot_tokens = tot_input + tot_output
    tokens_per_trial = round(tot_tokens / eval_trials, 1) if eval_trials > 0 else 0.0

    costs = [r.cost_usd for r in eval_rows if r.cost_usd is not None]
    tot_cost = sum(costs) if costs else None
    cost_per_trial = round(tot_cost / eval_trials, 6) if (tot_cost is not None and eval_trials > 0) else None

    tokens_per_solved = round(tot_tokens / passed_trials, 1) if passed_trials > 0 else None
    cost_per_solved = round(tot_cost / passed_trials, 6) if (tot_cost is not None and passed_trials > 0) else None

    # Latencies
    latencies = [r.latency_ms_total for r in eval_rows]
    lat_p50 = percentile(latencies, 50)
    lat_p95 = percentile(latencies, 95)
    lat_p99 = percentile(latencies, 99)

    headline = HeadlineStats(
        total_trials=total_trials,
        eval_trials=eval_trials,
        harness_errors=harness_errors,
        passed_trials=passed_trials,
        pass_rate=pass_rate,
        wilson_ci=ci,
        pass_at_1=pass_at_1,
        pass_at_k=p_at_k,
        pass_pow_k=p_pow_k,
        k_val=k_val,
        mean_efficiency=mean_efficiency,
        schema_violations_per_trial=schema_viols_per_trial,
        hallucinated_ids_per_trial=hallucinated_ids_per_trial,
        recovery_rate=recovery_rate,
        tokens_per_trial=tokens_per_trial,
        cost_usd_per_trial=cost_per_trial,
        tokens_per_solved=tokens_per_solved,
        cost_usd_per_solved=cost_per_solved,
        latency_p50=lat_p50,
        latency_p95=lat_p95,
        latency_p99=lat_p99,
    )

    # Breakdown by difficulty
    by_diff: Dict[str, List[ResultRow]] = {}
    for r in eval_rows:
        by_diff.setdefault(r.difficulty, []).append(r)
    
    diff_order = ["easy", "medium", "hard"]
    diff_stats: List[GroupStats] = []
    for diff in diff_order + [d for d in sorted(by_diff.keys()) if d not in diff_order]:
        if diff in by_diff:
            g_rows = by_diff[diff]
            p_count = sum(1 for r in g_rows if r.passed)
            effs = [r.efficiency for r in g_rows if r.passed and r.efficiency is not None]
            m_eff = round(sum(effs) / len(effs), 4) if effs else None
            diff_stats.append(GroupStats(
                name=diff,
                trials=len(g_rows),
                passes=p_count,
                pass_rate=round(p_count / len(g_rows), 4) if g_rows else 0.0,
                mean_efficiency=m_eff,
            ))

    # Breakdown by category
    by_cat: Dict[str, List[ResultRow]] = {}
    for r in eval_rows:
        by_cat.setdefault(r.category, []).append(r)

    cat_stats: List[GroupStats] = []
    for cat in sorted(by_cat.keys()):
        g_rows = by_cat[cat]
        p_count = sum(1 for r in g_rows if r.passed)
        effs = [r.efficiency for r in g_rows if r.passed and r.efficiency is not None]
        m_eff = round(sum(effs) / len(effs), 4) if effs else None
        cat_stats.append(GroupStats(
            name=cat,
            trials=len(g_rows),
            passes=p_count,
            pass_rate=round(p_count / len(g_rows), 4) if g_rows else 0.0,
            mean_efficiency=m_eff,
        ))

    # Failure taxonomy
    # SPEC §11.6 modes in priority order
    taxonomy_modes = [
        "forbidden_side_effect",
        "loop",
        "budget_exhausted",
        "agent_error",
        "unrecovered_fault",
        "hallucinated_id",
        "schema_violation_cascade",
        "gave_up",
        "wrong_final_state",
    ]
    failed_rows = [r for r in eval_rows if not r.passed]
    failed_count = len(failed_rows)
    tax_counts: Dict[str, int] = {m: 0 for m in taxonomy_modes}
    for r in failed_rows:
        mode = r.failure_mode or "wrong_final_state"
        tax_counts[mode] = tax_counts.get(mode, 0) + 1

    taxonomy: List[TaxonomyEntry] = []
    for mode in taxonomy_modes:
        cnt = tax_counts.get(mode, 0)
        pct = round((cnt / failed_count) * 100.0, 1) if failed_count > 0 else 0.0
        taxonomy.append(TaxonomyEntry(mode=mode, count=cnt, pct=pct))

    # Top-5 worst scenarios (lowest pass rate, tie-break by scenario_id)
    sc_aggregates = []
    for sc_id, sc_trials in scenarios_map.items():
        n = len(sc_trials)
        p = sum(1 for t in sc_trials if t.passed)
        pr = round(p / n, 4) if n > 0 else 0.0
        sample = sc_trials[0]
        # pick a failed trial to extract excerpt and failure_mode if any
        failed_sample = next((t for t in sc_trials if not t.passed), sc_trials[0])
        sc_aggregates.append({
            "scenario_id": sc_id,
            "category": sample.category,
            "difficulty": sample.difficulty,
            "trials": n,
            "passes": p,
            "pass_rate": pr,
            "failure_mode": failed_sample.failure_mode,
            "trial_idx": failed_sample.trial,
        })

    # Sort worst: lowest pass_rate first, then scenario_id
    sc_aggregates.sort(key=lambda x: (x["pass_rate"], x["scenario_id"]))
    worst_5 = sc_aggregates[:5]

    worst_scenarios: List[WorstScenario] = []
    for w in worst_5:
        excerpt = _get_trace_excerpt(run_dir, w["scenario_id"], w["trial_idx"])
        worst_scenarios.append(WorstScenario(
            scenario_id=w["scenario_id"],
            category=w["category"],
            difficulty=w["difficulty"],
            trials=w["trials"],
            passes=w["passes"],
            pass_rate=w["pass_rate"],
            failure_mode=w["failure_mode"],
            trace_excerpt=excerpt,
        ))

    agent_name = manifest.get("agent") or (rows[0].agent if rows else "unknown")
    header = {
        "agent": agent_name,
        "run_id": manifest.get("run_id", run_dir.name),
        "harness_version": manifest.get("harness_version", "1.0.0"),
        "scenarios_count": len(scenarios_map),
        "trials_per_scenario": max_trials_per_sc,
        "harness_errors": harness_errors,
        "replay_mode": manifest.get("replay_mode", False),
    }

    repro_cmd = f"agentbench run --agent {agent_name} --scenarios scenarios/ --trials {max_trials_per_sc} --out runs/{run_dir.name}"
    if manifest.get("replay_mode"):
        repro_cmd += " --replay"

    return RunSummary(
        header=header,
        headline=headline,
        by_difficulty=diff_stats,
        by_category=cat_stats,
        taxonomy=taxonomy,
        worst_scenarios=worst_scenarios,
        repro_command=repro_cmd,
    )

