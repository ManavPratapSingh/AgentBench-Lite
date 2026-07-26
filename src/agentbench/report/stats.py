"""Statistical metrics for AgentBench-Lite reporting."""
import math
from typing import Sequence


def wilson_ci(successes: int, total: int, confidence: float = 0.95) -> tuple[float, float]:
    """Calculate 95% (or custom) Wilson score confidence interval for a proportion.
    
    Returns (lower_bound, upper_bound) clamped to [0.0, 1.0].
    """
    if total <= 0:
        return (0.0, 0.0)
    
    # 95% confidence z-value is approx 1.959963984540054
    # # ponytail: standard z-values for 95% and 99% without scipy dependency
    if abs(confidence - 0.95) < 1e-4:
        z = 1.959963984540054
    elif abs(confidence - 0.99) < 1e-4:
        z = 2.5758293035489004
    elif abs(confidence - 0.90) < 1e-4:
        z = 1.6448536269514722
    else:
        # Default fallback to 95%
        z = 1.959963984540054

    p_hat = successes / total
    z_sq = z * z
    denom = 1.0 + (z_sq / total)
    center = (p_hat + (z_sq / (2.0 * total))) / denom
    margin = (z * math.sqrt((p_hat * (1.0 - p_hat) / total) + (z_sq / (4.0 * total * total)))) / denom
    
    lower = max(0.0, center - margin)
    upper = min(1.0, center + margin)
    return (round(lower, 4), round(upper, 4))


def pass_at_k(n: int, c: int, k: int) -> float:
    """Calculate pass@k: probability of at least one success in k draws without replacement.
    
    pass@k = 1 - C(n - c, k) / C(n, k)
    If k > n, returns None or 0.0.
    """
    if n <= 0 or k <= 0 or k > n:
        return 0.0
    if c >= n:
        return 1.0
    if c <= 0:
        return 0.0
    if n - c < k:
        return 1.0
    
    comb_fail = math.comb(n - c, k)
    comb_total = math.comb(n, k)
    if comb_total == 0:
        return 0.0
    return round(1.0 - (comb_fail / comb_total), 4)


def pass_power_k(n: int, c: int, k: int) -> float:
    """Calculate pass^k: probability that all k draws succeed without replacement.
    
    pass^k = C(c, k) / C(n, k)
    """
    if n <= 0 or k <= 0 or k > n or c < k:
        return 0.0
    comb_success = math.comb(c, k)
    comb_total = math.comb(n, k)
    if comb_total == 0:
        return 0.0
    return round(comb_success / comb_total, 4)


def percentile(data: Sequence[float], p: float) -> float:
    """Calculate nearest-rank percentile p in [0, 100].
    
    Formula: r = ceil(p / 100 * N). Index = r - 1.
    """
    if not data:
        return 0.0
    sorted_data = sorted(data)
    n = len(sorted_data)
    if p <= 0:
        return float(sorted_data[0])
    if p >= 100:
        return float(sorted_data[-1])
    
    rank = math.ceil((p / 100.0) * n)
    idx = max(0, min(n - 1, rank - 1))
    return float(sorted_data[idx])
