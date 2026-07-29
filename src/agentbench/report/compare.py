"""Run comparison utility for AgentBench-Lite."""
from pathlib import Path
from typing import Dict, List, Set
from agentbench.report.aggregate import aggregate_run, load_results_and_manifest, RunSummary
from agentbench.runner.pool import ResultRow


def _calc_delta(val_b: float, val_a: float) -> str:
    """Format delta string with + or - sign."""
    d = val_b - val_a
    sign = "+" if d > 0 else ""
    return f"{sign}{d:.2f}"


def _calc_pct_delta(val_b: float, val_a: float) -> str:
    """Format delta percentage."""
    d = val_b - val_a
    sign = "+" if d > 0 else ""
    return f"{sign}{d:.1%}"


def compare_runs(run_a_dir: Path, run_b_dir: Path) -> str:
    """Compare two benchmark runs and return a side-by-side markdown delta report."""
    sum_a = aggregate_run(run_a_dir)
    sum_b = aggregate_run(run_b_dir)

    rows_a, _ = load_results_and_manifest(run_a_dir)
    rows_b, _ = load_results_and_manifest(run_b_dir)

    # Compute scenario-level pass status for regressions / improvements
    # A scenario is passed in a run if all of its non-harness trials passed (or majority/any)
    # Let's define scenario passed if pass_rate == 1.0 (or > 0)
    def scenario_status(rows: List[ResultRow]) -> Dict[str, bool]:
        scs: Dict[str, List[ResultRow]] = {}
        for r in rows:
            if r.terminated != "harness_error":
                scs.setdefault(r.scenario_id, []).append(r)
        status = {}
        for sc_id, trials in scs.items():
            # True if all trials passed
            status[sc_id] = all(t.passed for t in trials)
        return status

    status_a = scenario_status(rows_a)
    status_b = scenario_status(rows_b)

    common_scenarios = sorted(set(status_a.keys()) & set(status_b.keys()))
    regressions = [sc for sc in common_scenarios if status_a[sc] and not status_b[sc]]
    improvements = [sc for sc in common_scenarios if not status_a[sc] and status_b[sc]]

    ha = sum_a.headline
    hb = sum_b.headline

    lines = []
    lines.append(f"# Benchmark Comparison: Run A vs Run B")
    lines.append("")
    lines.append(f"- **Run A**: `{sum_a.header.get('run_id')}` (Agent: `{sum_a.header.get('agent')}`)")
    lines.append(f"- **Run B**: `{sum_b.header.get('run_id')}` (Agent: `{sum_b.header.get('agent')}`)")
    lines.append("")

    lines.append("## Headline Metrics Delta")
    lines.append("")
    lines.append("| Metric | Run A | Run B | Delta (B − A) |")
    lines.append("| :--- | :--- | :--- | :--- |")
    lines.append(f"| **Pass Rate** | {ha.pass_rate:.1%} | {hb.pass_rate:.1%} | **{_calc_pct_delta(hb.pass_rate, ha.pass_rate)}** |")
    lines.append(f"| **pass@1** | {ha.pass_at_1:.1%} | {hb.pass_at_1:.1%} | {_calc_pct_delta(hb.pass_at_1, ha.pass_at_1)} |")
    
    eff_a_str = f"{ha.mean_efficiency:.1%}" if ha.mean_efficiency is not None else "N/A"
    eff_b_str = f"{hb.mean_efficiency:.1%}" if hb.mean_efficiency is not None else "N/A"
    eff_delta = (
        _calc_pct_delta(hb.mean_efficiency, ha.mean_efficiency)
        if (ha.mean_efficiency is not None and hb.mean_efficiency is not None)
        else "N/A"
    )
    lines.append(f"| **Mean Efficiency** | {eff_a_str} | {eff_b_str} | {eff_delta} |")
    lines.append(f"| **Schema Violations / Trial** | {ha.schema_violations_per_trial:.2f} | {hb.schema_violations_per_trial:.2f} | {_calc_delta(hb.schema_violations_per_trial, ha.schema_violations_per_trial)} |")
    lines.append(f"| **Hallucinated IDs / Trial** | {ha.hallucinated_ids_per_trial:.2f} | {hb.hallucinated_ids_per_trial:.2f} | {_calc_delta(hb.hallucinated_ids_per_trial, ha.hallucinated_ids_per_trial)} |")
    
    cost_a = f"${ha.cost_usd_per_trial:.6f}" if ha.cost_usd_per_trial is not None else "N/A"
    cost_b = f"${hb.cost_usd_per_trial:.6f}" if hb.cost_usd_per_trial is not None else "N/A"
    cost_delta = (
        f"{hb.cost_usd_per_trial - ha.cost_usd_per_trial:+.6f}"
        if (ha.cost_usd_per_trial is not None and hb.cost_usd_per_trial is not None)
        else "N/A"
    )
    lines.append(f"| **Cost / Trial** | {cost_a} | {cost_b} | {cost_delta} |")
    lines.append(f"| **Latency p50** | {ha.latency_p50:.1f}ms | {hb.latency_p50:.1f}ms | {_calc_delta(hb.latency_p50, ha.latency_p50)}ms |")
    lines.append(f"| **Latency p95** | {ha.latency_p95:.1f}ms | {hb.latency_p95:.1f}ms | {_calc_delta(hb.latency_p95, ha.latency_p95)}ms |")
    lines.append("")

    lines.append("## Regressions (Pass in A → Fail in B)")
    lines.append("")
    if regressions:
        for r in regressions:
            lines.append(f"- ❌ `{r}`")
    else:
        lines.append("None. Zero regressions observed.")
    lines.append("")

    lines.append("## Improvements (Fail in A → Pass in B)")
    lines.append("")
    if improvements:
        for im in improvements:
            lines.append(f"- ✅ `{im}`")
    else:
        lines.append("None. Zero improvements observed.")
    lines.append("")

    return "\n".join(lines)

