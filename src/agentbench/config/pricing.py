"""Model pricing configuration and token cost calculator.

FR-TRACE-2, §14:
Calculates cost_usd = (input_tokens * in_price + output_tokens * out_price) / 1M
from config/models.yaml. Unknown models return None with a warning.
"""
from pathlib import Path
from typing import Dict, Optional, Tuple
import yaml

DEFAULT_CONFIG_PATH = Path(__file__).resolve().parents[3] / "config" / "models.yaml"


def load_pricing_table(path: Optional[Path | str] = None) -> Dict[str, Dict[str, float]]:
    """Load model token pricing table from YAML file."""
    p = Path(path) if path else DEFAULT_CONFIG_PATH
    if not p.is_file():
        return {}
    with p.open("r", encoding="utf-8") as f:
        return yaml.safe_load(f) or {}


def calculate_cost(
    agent_name: str,
    input_tokens: int,
    output_tokens: int,
    pricing_table: Optional[Dict[str, Dict[str, float]]] = None,
) -> Optional[float]:
    """Calculate USD cost for a given agent and token count."""
    table = pricing_table if pricing_table is not None else load_pricing_table()
    if agent_name not in table:
        return None

    rates = table[agent_name]
    in_rate = rates.get("input_per_mtok", 0.0)
    out_rate = rates.get("output_per_mtok", 0.0)

    # ponytail: exact dollar calculation per million tokens
    cost = (input_tokens * in_rate + output_tokens * out_rate) / 1_000_000.0
    return round(cost, 6)
