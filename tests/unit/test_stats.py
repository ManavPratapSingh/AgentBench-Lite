"""Unit tests for reporting statistical functions."""
import math
import pytest
from agentbench.report.stats import pass_at_k, pass_power_k, percentile, wilson_ci


def test_wilson_ci():
    # 0 total
    assert wilson_ci(0, 0) == (0.0, 0.0)

    # 10 successes out of 10: p_hat = 1.0
    low, high = wilson_ci(10, 10)
    assert 0.65 < low < 0.75
    assert high == 1.0

    # 0 successes out of 10: p_hat = 0.0
    low, high = wilson_ci(0, 10)
    assert low == 0.0
    assert 0.25 < high < 0.35

    # 50 out of 100: p_hat = 0.5
    low, high = wilson_ci(50, 100)
    # Approx 0.4038 to 0.5962 for 95% Wilson
    assert math.isclose(low, 0.4038, abs_tol=0.01)
    assert math.isclose(high, 0.5962, abs_tol=0.01)


def test_pass_at_k():
    # If c == 0 -> 0.0
    assert pass_at_k(5, 0, 1) == 0.0
    assert pass_at_k(5, 0, 3) == 0.0

    # If c == n -> 1.0
    assert pass_at_k(5, 5, 1) == 1.0
    assert pass_at_k(5, 5, 3) == 1.0

    # If n=3, c=1, k=1 -> pass@1 = 1/3 ~ 0.3333
    assert math.isclose(pass_at_k(3, 1, 1), 0.3333, abs_tol=1e-3)

    # If n=3, c=1, k=3 -> pass@3 = 1.0
    assert pass_at_k(3, 1, 3) == 1.0

    # If n=5, c=2, k=2:
    # 1 - C(3, 2)/C(5, 2) = 1 - 3/10 = 0.7
    assert math.isclose(pass_at_k(5, 2, 2), 0.7, abs_tol=1e-4)

    # Invalid k > n
    assert pass_at_k(3, 2, 4) == 0.0


def test_pass_power_k():
    # If c < k -> 0.0
    assert pass_power_k(5, 1, 2) == 0.0

    # If c == n -> 1.0
    assert pass_power_k(5, 5, 2) == 1.0

    # If n=5, c=3, k=2:
    # C(3, 2)/C(5, 2) = 3/10 = 0.3
    assert math.isclose(pass_power_k(5, 3, 2), 0.3, abs_tol=1e-4)


def test_percentile_nearest_rank():
    data = [15.0, 20.0, 35.0, 40.0, 50.0]
    # N=5
    # p=50: rank = ceil(0.50 * 5) = ceil(2.5) = 3 -> index 2 -> 35.0
    assert percentile(data, 50) == 35.0
    # p=95: rank = ceil(0.95 * 5) = ceil(4.75) = 5 -> index 4 -> 50.0
    assert percentile(data, 95) == 50.0
    # p=0 -> min = 15.0
    assert percentile(data, 0) == 15.0
    # empty
    assert percentile([], 50) == 0.0
