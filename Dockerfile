# AgentBench-Lite: Deterministic Multi-Turn Tool-Use Agent Evaluation Harness
FROM python:3.12-slim

# Prevent python from writing pyc files and buffering stdout/stderr
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

# Install make and basic utilities
RUN apt-get update && apt-get install -y --no-install-recommends \
    make \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Create non-root application user
RUN useradd -m -u 1000 -s /bin/bash appuser

WORKDIR /app

# Copy pyproject.toml first for layer caching
COPY pyproject.toml /app/

# Install dependencies as appuser
RUN pip install --no-cache-dir -e ".[dev]"

# Copy source repository
COPY --chown=appuser:appuser . /app/

# Switch to non-root user
USER appuser

# Default entrypoint runs the offline replay suite
ENTRYPOINT ["agentbench"]
CMD ["--help"]
