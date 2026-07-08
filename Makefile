.PHONY: help setup test lint validate bench bench-replay report docker clean

PYTHON ?= .venv/bin/python3
PIP ?= .venv/bin/pip
PYTEST ?= .venv/bin/pytest
AGENTBENCH ?= .venv/bin/agentbench

help:
	@echo "AgentBench-Lite targets:"
	@echo "  setup         Install dependencies in editable mode"
	@echo "  test          Run unit tests with coverage"
	@echo "  lint          Run ruff or code checks"
	@echo "  validate      Validate all scenarios against FR-SCEN-2 rules"
	@echo "  bench-replay  Run offline benchmark replay with zero network"
	@echo "  bench         Run live benchmark suite"
	@echo "  report        Generate report for the latest replay run"
	@echo "  docker        Build non-root Docker container image"
	@echo "  clean         Remove build artifacts and temporary run files"

setup:
	$(PIP) install -e ".[dev]"

test:
	$(PYTHON) -m pytest tests/

lint:
	$(PYTHON) -m py_compile src/agentbench/**/*.py tests/**/*.py

validate:
	$(PYTHON) -m agentbench.cli validate-scenarios scenarios/

bench-replay:
	$(PYTHON) -m agentbench.cli run --agent scripted:oracle --scenarios scenarios/ --trials 1 --replay --out runs/bench_replay
	$(PYTHON) -m agentbench.cli report runs/bench_replay

bench:
	$(PYTHON) -m agentbench.cli run --agent scripted:oracle --scenarios scenarios/ --trials 1 --out runs/bench_live
	$(PYTHON) -m agentbench.cli report runs/bench_live

report:
	$(PYTHON) -m agentbench.cli report runs/bench_replay

docker:
	docker build -t agentbench-lite:latest .

clean:
	rm -rf dist build *.egg-info .pytest_cache .coverage runs/bench_*
