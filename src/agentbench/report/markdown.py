"""Markdown report generator for AgentBench-Lite benchmark runs."""
from agentbench.report.aggregate import RunSummary


def generate_markdown_report(summary: RunSummary) -> str:
    """Render a RunSummary into a standardized report.md document."""
    h = summary.header
    hl = summary.headline

    lines = []
    lines.append(f"# Benchmark Report: {h.get('agent', 'unknown')}")
    lines.append("")

    # Section 1: Header metadata
    lines.append("## 1. Run Metadata")
    lines.append("")
    lines.append(f"- **Agent**: `{h.get('agent')}`")
    lines.append(f"- **Run ID**: `{h.get('run_id')}`")
    lines.append(f"- **Harness Version**: `{h.get('harness_version')}`")
    lines.append(f"- **Scenarios**: {h.get('scenarios_count')}")
    lines.append(f"- **Trials per Scenario**: {h.get('trials_per_scenario')}")
    lines.append(f"- **Total Executed Trials**: {hl.total_trials} ({hl.eval_trials} evaluated, {hl.harness_errors} harness errors)")
    lines.append(f"- **Replay Mode**: `{h.get('replay_mode')}`")
    lines.append("")

    # Section 2: Headline table
    lines.append("## 2. Headline Results")
    lines.append("")
    
    ci_low, ci_high = hl.wilson_ci
    ci_str = f"[{ci_low:.1%}, {ci_high:.1%}]"
    eff_str = f"{hl.mean_efficiency:.1%}" if hl.mean_efficiency is not None else "N/A"
    rec_str = f"{hl.recovery_rate:.1%}" if hl.recovery_rate is not None else "N/A"
    cost_trial_str = f"${hl.cost_usd_per_trial:.6f}" if hl.cost_usd_per_trial is not None else "N/A"
    cost_solved_str = f"${hl.cost_usd_per_solved:.6f}" if hl.cost_usd_per_solved is not None else "N/A"
    tok_solved_str = f"{hl.tokens_per_solved:.1f}" if hl.tokens_per_solved is not None else "N/A"

    lines.append("| Metric | Value | 95% CI / Notes |")
    lines.append("| :--- | :--- | :--- |")
    lines.append(f"| **Pass Rate** | **{hl.pass_rate:.1%}** ({hl.passed_trials}/{hl.eval_trials}) | {ci_str} (Wilson) |")
    lines.append(f"| **pass@1** | {hl.pass_at_1:.1%} | Average pass@1 across scenarios |")
    lines.append(f"| **pass@{hl.k_val}** | {hl.pass_at_k:.1%} | Probability of ≥1 success in {hl.k_val} trials |")
    lines.append(f"| **pass^{hl.k_val}** | {hl.pass_pow_k:.1%} | Probability of all {hl.k_val} trials succeeding |")
    lines.append(f"| **Mean Efficiency** | {eff_str} | Optimal steps / actual calls on passes |")
    lines.append(f"| **Schema Violations / Trial** | {hl.schema_violations_per_trial:.2f} | Pydantic validation failures |")
    lines.append(f"| **Hallucinated IDs / Trial** | {hl.hallucinated_ids_per_trial:.2f} | IDs not in prompt or prior results |")
    lines.append(f"| **Fault Recovery Rate** | {rec_str} | Successful recovery from injected faults |")
    lines.append(f"| **Tokens / Trial** | {hl.tokens_per_trial:.1f} tokens | Average input + output |")
    lines.append(f"| **Cost / Trial** | {cost_trial_str} | Evaluated model pricing |")
    lines.append(f"| **Tokens / Solved Task** | {tok_solved_str} | Total tokens / passed trials |")
    lines.append(f"| **Cost / Solved Task** | {cost_solved_str} | Total cost / passed trials |")
    lines.append(f"| **Latency p50 / p95 / p99** | {hl.latency_p50:.1f}ms / {hl.latency_p95:.1f}ms / {hl.latency_p99:.1f}ms | Nearest-rank percentiles |")
    lines.append("")

    # Section 3: Breakdown
    lines.append("## 3. Breakdown by Difficulty & Category")
    lines.append("")
    lines.append("### By Difficulty")
    lines.append("")
    lines.append("| Difficulty | Trials | Passes | Pass Rate | Mean Efficiency |")
    lines.append("| :--- | :--- | :--- | :--- | :--- |")
    for g in summary.by_difficulty:
        eff = f"{g.mean_efficiency:.1%}" if g.mean_efficiency is not None else "N/A"
        lines.append(f"| **{g.name}** | {g.trials} | {g.passes} | {g.pass_rate:.1%} | {eff} |")
    lines.append("")

    lines.append("### By Category")
    lines.append("")
    lines.append("| Category | Trials | Passes | Pass Rate | Mean Efficiency |")
    lines.append("| :--- | :--- | :--- | :--- | :--- |")
    for g in summary.by_category:
        eff = f"{g.mean_efficiency:.1%}" if g.mean_efficiency is not None else "N/A"
        lines.append(f"| **{g.name}** | {g.trials} | {g.passes} | {g.pass_rate:.1%} | {eff} |")
    lines.append("")

    # Section 4: Failure taxonomy
    lines.append("## 4. Failure Taxonomy")
    lines.append("")
    lines.append("| Mode | Count | % of Failures |")
    lines.append("| :--- | :--- | :--- |")
    for t in summary.taxonomy:
        lines.append(f"| `{t.mode}` | {t.count} | {t.pct:.1f}% |")
    lines.append("")

    # Section 5: Five worst scenarios
    lines.append("## 5. Five Worst Scenarios")
    lines.append("")
    if not summary.worst_scenarios:
        lines.append("No scenarios evaluated.")
    else:
        for idx, w in enumerate(summary.worst_scenarios, 1):
            f_mode = f"`{w.failure_mode}`" if w.failure_mode else "None"
            lines.append(f"### {idx}. `{w.scenario_id}` ({w.category} - {w.difficulty})")
            lines.append(f"- **Pass Rate**: {w.pass_rate:.1%} ({w.passes}/{w.trials} passed)")
            lines.append(f"- **Primary Failure Mode**: {f_mode}")
            lines.append(f"- **Trace Excerpt**: `{w.trace_excerpt}`")
            lines.append("")

    # Section 6: Reproduction command
    lines.append("## 6. Reproduction Command")
    lines.append("")
    lines.append("```bash")
    lines.append(summary.repro_command)
    lines.append("```")
    lines.append("")

    return "\n".join(lines)
