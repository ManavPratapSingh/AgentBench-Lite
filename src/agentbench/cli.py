"""Command-line interface for AgentBench-Lite.

FR-CLI-1:
seed, validate-scenarios, generate-scenarios, run.
"""
from pathlib import Path
import sys
from typing import Optional
import typer

from agentbench.agents.base import ToolCall
from agentbench.agents.cassette import RecordingAgent, ReplayAgent
from agentbench.agents.openai_agent import OpenAIAgent
from agentbench.agents.scripted import LoopAgent, NoopAgent, OvereagerAgent, ScriptedAgent
from agentbench.env.seed import dump, seed
from agentbench.runner.pool import run_suite
from agentbench.scenarios.generator import generate_scenario_set, write_scenarios_to_disk
from agentbench.scenarios.loader import load_scenario_dir, validate_scenario
from agentbench.scenarios.schema import Scenario

app = typer.Typer(help="AgentBench-Lite: Deterministic Agent Evaluation Harness")


@app.command()
def seed_cmd(
    seed_val: int = typer.Option(42, "--seed", "-s", help="Database seed"),
    do_dump: bool = typer.Option(False, "--dump", "-d", help="Print canonical database SQL dump"),
) -> None:
    """Initialize an in-memory database and optionally print its dump."""
    conn = seed(seed_val)
    raw_dump = dump(conn)
    conn.close()
    if do_dump:
        typer.echo(raw_dump)
    else:
        import hashlib
        h = hashlib.sha256(raw_dump.encode("utf-8")).hexdigest()
        typer.echo(f"Seeded DB (seed={seed_val}) dump sha256: {h}")


@app.command()
def validate_scenarios(
    path: str = typer.Argument("scenarios", help="Path to scenario directory"),
) -> None:
    """Validate all scenarios in a directory against FR-SCEN-2 rules."""
    scenarios = load_scenario_dir(path)
    typer.echo(f"Loaded {len(scenarios)} scenarios from {path}. Validating...")

    total_errors = 0
    for sc in scenarios:
        errs = validate_scenario(sc)
        if errs:
            total_errors += len(errs)
            typer.secho(f"Validation failure in {sc.id}:", fg=typer.colors.RED)
            for e in errs:
                typer.echo(f"  - {e}")

    if total_errors > 0:
        typer.secho(f"FAILED: {total_errors} validation errors found.", fg=typer.colors.RED)
        raise typer.Exit(code=1)
    else:
        typer.secho(f"SUCCESS: All {len(scenarios)} scenarios valid.", fg=typer.colors.GREEN)


@app.command()
def generate_scenarios(
    seed_val: int = typer.Option(42, "--seed", "-s", help="Generator seed"),
    out: str = typer.Option("scenarios", "--out", "-o", help="Output directory"),
    count: int = typer.Option(52, "--count", "-c", help="Scenario count to generate"),
) -> None:
    """Generate deterministic scenario suite across 8 categories."""
    scenarios = generate_scenario_set(seed_val=seed_val, count=count)
    write_scenarios_to_disk(scenarios, out)
    typer.secho(f"Generated {len(scenarios)} scenarios in '{out}'.", fg=typer.colors.GREEN)


def _resolve_agent(agent_spec: str, scenario: Scenario, cassette_dir: str, record: bool, replay: bool):
    """Factory creating an Agent instance from spec string."""
    if replay:
        return ReplayAgent(model_name=agent_spec, cassette_dir=cassette_dir)

    if agent_spec == "scripted:oracle":
        calls = [
            ToolCall(id=f"c_{i}", name=step["tool"], arguments=step.get("args", {}))
            for i, step in enumerate(scenario.oracle, start=1)
        ]
        agent = ScriptedAgent(calls=calls, final_text=scenario.oracle_text or "Done")
    elif agent_spec == "scripted:noop":
        agent = NoopAgent()
    elif agent_spec == "scripted:overeager":
        agent = OvereagerAgent()
    elif agent_spec == "scripted:loop":
        agent = LoopAgent()
    elif agent_spec.startswith("openai:"):
        model = agent_spec.split("openai:", 1)[1]
        agent = OpenAIAgent(model=model)
    else:
        raise ValueError(f"Unknown agent spec: '{agent_spec}'")

    if record:
        return RecordingAgent(inner=agent, cassette_dir=cassette_dir)
    return agent


@app.command()
def run(
    agent: str = typer.Option("scripted:oracle", "--agent", "-a", help="Agent spec (e.g. scripted:oracle, openai:gpt-4o-mini)"),
    scenarios_dir: str = typer.Option("scenarios", "--scenarios", "-s", help="Scenarios directory"),
    trials: int = typer.Option(1, "--trials", "-t", help="Number of trials per scenario"),
    concurrency: int = typer.Option(4, "--concurrency", "-c", help="Worker thread count"),
    out: str = typer.Option("runs/default", "--out", "-o", help="Output run directory"),
    record: bool = typer.Option(False, "--record", help="Record turns into cassettes"),
    replay: bool = typer.Option(False, "--replay", help="Replay turns strictly from cassettes"),
    cassettes: str = typer.Option("cassettes", "--cassettes", help="Cassette storage directory"),
) -> None:
    """Run an evaluation suite across scenarios."""
    scenarios = load_scenario_dir(scenarios_dir)
    typer.echo(f"Starting run '{out}' with agent '{agent}' on {len(scenarios)} scenarios (trials={trials}, concurrency={concurrency})...")

    def factory(sc: Scenario):
        return _resolve_agent(agent, sc, cassettes, record, replay)

    results = run_suite(
        scenarios=scenarios,
        agent_factory=factory,
        trials=trials,
        concurrency=concurrency,
        out_dir=out,
        run_id=Path(out).name,
        replay=replay,
    )

    passes = sum(1 for r in results if r.passed)
    pass_rate = (passes / len(results)) * 100 if results else 0.0
    typer.secho(f"Completed {len(results)} trials. Passed: {passes}/{len(results)} ({pass_rate:.1f}%).", fg=typer.colors.GREEN)
    typer.echo(f"Results written to: {out}/results.jsonl")


@app.command()
def report(
    run_dir: str = typer.Argument(..., help="Path to run directory containing results.jsonl"),
    out: Optional[str] = typer.Option(None, "--out", "-o", help="Optional output path for report.md"),
) -> None:
    """Generate markdown report from a benchmark run directory."""
    from agentbench.report.aggregate import aggregate_run
    from agentbench.report.markdown import generate_markdown_report

    path = Path(run_dir)
    if not path.is_dir():
        typer.secho(f"Run directory not found: {run_dir}", fg=typer.colors.RED)
        raise typer.Exit(code=1)

    summary = aggregate_run(path)
    md = generate_markdown_report(summary)

    out_file = Path(out) if out else path / "report.md"
    out_file.write_text(md, encoding="utf-8")
    typer.secho(f"Report written to: {out_file}", fg=typer.colors.GREEN)

    hl = summary.headline
    typer.echo(
        f"Agent: {summary.header.get('agent')} | "
        f"Pass Rate: {hl.pass_rate:.1%} ({hl.passed_trials}/{hl.eval_trials}) | "
        f"Latency p50: {hl.latency_p50:.1f}ms"
    )


@app.command()
def compare(
    run_a: str = typer.Argument(..., help="Path to baseline run directory (Run A)"),
    run_b: str = typer.Argument(..., help="Path to candidate run directory (Run B)"),
    out: Optional[str] = typer.Option(None, "--out", "-o", help="Optional output file for comparison markdown"),
) -> None:
    """Compare two benchmark runs side-by-side."""
    from agentbench.report.compare import compare_runs

    path_a = Path(run_a)
    path_b = Path(run_b)
    if not path_a.is_dir():
        typer.secho(f"Run directory A not found: {run_a}", fg=typer.colors.RED)
        raise typer.Exit(code=1)
    if not path_b.is_dir():
        typer.secho(f"Run directory B not found: {run_b}", fg=typer.colors.RED)
        raise typer.Exit(code=1)

    comp_md = compare_runs(path_a, path_b)
    if out:
        Path(out).write_text(comp_md, encoding="utf-8")
        typer.secho(f"Comparison report written to: {out}", fg=typer.colors.GREEN)

    typer.echo(comp_md)


def main():
    app()


if __name__ == "__main__":
    main()

