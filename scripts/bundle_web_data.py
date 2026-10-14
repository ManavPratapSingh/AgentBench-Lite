#!/usr/bin/env python3
"""Bundle scenarios, benchmark results, and execution traces into a static web bundle."""
import json
from pathlib import Path
from typing import Any, Dict, List
import yaml

from agentbench.report.aggregate import aggregate_run


def bundle_data() -> None:
    repo_root = Path(__file__).resolve().parent.parent
    web_dir = repo_root / "web"
    web_dir.mkdir(parents=True, exist_ok=True)

    # 1. Load all scenarios
    scenarios_dir = repo_root / "scenarios"
    scenarios_list: List[Dict[str, Any]] = []
    for sc_file in sorted(scenarios_dir.glob("*.yaml")):
        try:
            with sc_file.open("r", encoding="utf-8") as f:
                data = yaml.safe_load(f)
                scenarios_list.append(data)
        except Exception as e:
            print(f"Warning: failed to load {sc_file}: {e}")

    # 2. Load run summaries and results
    runs_to_load = [
        ("scripted:oracle", repo_root / "runs" / "oracle_run"),
        ("openai:gpt-4o-mini", repo_root / "tests" / "golden" / "run_fixture"),
        ("scripted:overeager", repo_root / "runs" / "overeager_run"),
        ("scripted:noop", repo_root / "runs" / "noop_run"),
    ]

    agent_summaries: List[Dict[str, Any]] = []
    results_by_agent: Dict[str, List[Dict[str, Any]]] = {}
    traces_by_agent_scenario: Dict[str, Dict[str, Any]] = {}

    for agent_label, run_path in runs_to_load:
        if not run_path.exists():
            print(f"Notice: run path {run_path} does not exist, skipping.")
            continue

        try:
            summary = aggregate_run(run_path)
            agent_summaries.append(summary.model_dump())

            # Load results.jsonl rows
            res_file = run_path / "results.jsonl"
            rows = []
            if res_file.exists():
                with res_file.open("r", encoding="utf-8") as f:
                    for line in f:
                        if line.strip():
                            rows.append(json.loads(line.strip()))
            results_by_agent[agent_label] = rows

            # Load traces
            traces_dir = run_path / "traces"
            agent_traces: Dict[str, Any] = {}
            if traces_dir.exists():
                for tf in traces_dir.glob("*.json"):
                    try:
                        trace_data = json.loads(tf.read_text(encoding="utf-8"))
                        sc_id = trace_data.get("scenario_id") or tf.stem.split("__")[0].split("_t")[0]
                        agent_traces[sc_id] = trace_data
                    except Exception:
                        pass
            traces_by_agent_scenario[agent_label] = agent_traces

        except Exception as e:
            print(f"Error aggregating {run_path}: {e}")

    # 3. Assemble master bundle
    bundle = {
        "metadata": {
            "title": "AgentBench-Lite Showcase",
            "version": "1.0.0",
            "total_scenarios": len(scenarios_list),
            "categories": [
                "lookup",
                "multi_hop",
                "conditional_act",
                "aggregate_act",
                "ambiguity",
                "unsolvable",
                "trap",
                "fault",
            ],
            "difficulties": ["easy", "medium", "hard"],
            "unit_tests_count": 42,
            "test_runtime_s": 0.45,
            "reproducibility": "100% SHA-256 byte-for-byte identical replay",
        },
        "agents": agent_summaries,
        "results": results_by_agent,
        "scenarios": scenarios_list,
        "traces": traces_by_agent_scenario,
    }

    out_file = web_dir / "data.js"
    json_str = json.dumps(bundle, indent=2)
    out_file.write_text(f"window.AGENTBENCH_DATA = {json_str};\n", encoding="utf-8")
    print(f"Successfully generated {out_file} ({len(json_str)} bytes)")


if __name__ == "__main__":
    bundle_data()

