"""Golden snapshot test and comparison tests for reporting."""
from pathlib import Path
from typer.testing import CliRunner

from agentbench.cli import app
from agentbench.report.aggregate import aggregate_run
from agentbench.report.compare import compare_runs
from agentbench.report.markdown import generate_markdown_report

runner = CliRunner()


def test_golden_report_snapshot():
    """FR-REP-4: Verify report generated from fixture matches committed golden report.md."""
    golden_dir = Path("tests/golden/run_fixture")
    summary = aggregate_run(golden_dir)
    rendered_md = generate_markdown_report(summary)

    committed_md = (golden_dir / "report.md").read_text(encoding="utf-8")
    assert rendered_md == committed_md, "Rendered report does not match golden snapshot!"


def test_compare_runs_identical():
    """Verify comparing a run against itself reports zero deltas and zero regressions."""
    golden_dir = Path("tests/golden/run_fixture")
    comparison = compare_runs(golden_dir, golden_dir)

    assert "# Benchmark Comparison: Run A vs Run B" in comparison
    assert "+0.0%**" in comparison or "0.0%" in comparison
    assert "None. Zero regressions observed." in comparison
    assert "None. Zero improvements observed." in comparison


def test_cli_report_and_compare(tmp_path: Path):
    """Verify CLI report and compare subcommands execute with exit code 0."""
    golden_dir = Path("tests/golden/run_fixture")
    out_report = tmp_path / "cli_report.md"

    # Test report command
    res_report = runner.invoke(app, ["report", str(golden_dir), "--out", str(out_report)])
    assert res_report.exit_code == 0
    assert out_report.is_file()
    assert "Report written to:" in res_report.stdout

    # Test compare command
    res_compare = runner.invoke(app, ["compare", str(golden_dir), str(golden_dir)])
    assert res_compare.exit_code == 0
    assert "Benchmark Comparison" in res_compare.stdout

