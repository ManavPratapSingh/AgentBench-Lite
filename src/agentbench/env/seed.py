"""Deterministic database seeding for AgentBench-Lite.

FR-ENV-3: seed(seed: int) -> sqlite3.Connection creates a fresh, isolated,
fully deterministic in-memory database using a seeded random.Random instance.
"""
from datetime import date, timedelta
import math
import random
import re
import sqlite3
from typing import List

from agentbench.env.clock import FAKE_NOW
from agentbench.env.db import init_db

# 50 bundled fixed names (no external dependencies)
NAMES: List[str] = [
    "Alice Smith", "Bob Jones", "Charlie Brown", "Diana Prince", "Evan Wright",
    "Fiona Gallagher", "George Clark", "Hannah Abbott", "Ian Malcolm", "Julia Roberts",
    "Kevin Bacon", "Laura Croft", "Michael Scott", "Nancy Wheeler", "Oscar Martinez",
    "Pam Beesly", "Quinn Fabray", "Ryan Howard", "Sarah Connor", "Toby Flenderson",
    "Ursula Buffay", "Victor Vance", "Wendy Darling", "Xander Harris", "Yvonne Strahovski",
    "Zack Morris", "Arthur Dent", "Beth Harmon", "Carlos Sainz", "David Rose",
    "Elena Gilbert", "Frank Castle", "Grace Hopper", "Harry Potter", "Iris West",
    "Jack Sparrow", "Karen Filippelli", "Luke Skywalker", "Mona Lisa", "Nathan Drake",
    "Olivia Pope", "Peter Parker", "Rachel Green", "Steve Rogers", "Tara Maclay",
    "Uma Thurman", "Vito Corleone", "Walter White", "Xena Warrior", "Zoey Deschanel",
]


def _slug(name: str) -> str:
    """Generate a clean slug for emails."""
    return re.sub(r"[^a-z0-9]", ".", name.lower())


def seed(seed_val: int) -> sqlite3.Connection:
    """Create and seed a fresh in-memory SQLite database.
    
    FR-ENV-3: Deterministic seeding using local RNG only.
    """
    conn = sqlite3.connect(":memory:")
    init_db(conn)

    rng = random.Random(seed_val)

    # 1. Generate 50 users (ids 1..50)
    start_date = date(2023, 1, 1)
    end_date = date(2025, 5, 31)
    date_range_days = (end_date - start_date).days

    users_data = []
    active_user_ids = []

    for user_id, name in enumerate(NAMES, start=1):
        email = f"{_slug(name)}.{user_id}@example.com"
        random_days = rng.randint(0, date_range_days)
        signup = (start_date + timedelta(days=random_days)).isoformat()
        
        # ~80% active, ~15% suspended, ~5% closed
        status = rng.choices(["active", "suspended", "closed"], weights=[80, 15, 5])[0]
        if status == "active":
            active_user_ids.append(user_id)

        users_data.append((user_id, name, email, signup, status))

    conn.executemany(
        "INSERT INTO users (id, name, email, signup_date, status) VALUES (?, ?, ?, ?, ?)",
        users_data,
    )

    # 2. Accounts (balances: log-uniform $0 to $5,000 in integer cents)
    accounts_data = []
    max_cents = 500_000
    for user_id in range(1, 51):
        # ponytail: log-uniform in integer cents: exp(uniform(0, log(max_cents + 1))) - 1
        val = rng.uniform(0, math.log(max_cents + 1))
        balance_cents = int(math.exp(val) - 1)
        accounts_data.append((user_id, balance_cents))

    conn.executemany(
        "INSERT INTO accounts (user_id, balance_cents) VALUES (?, ?)",
        accounts_data,
    )

    # 3. 100 historical transactions between active users
    if len(active_user_ids) >= 2:
        tx_list = []
        base_tx_start = date(2024, 1, 1)
        tx_day_range = (end_date - base_tx_start).days

        for _ in range(100):
            from_u = rng.choice(active_user_ids)
            # choose a different destination user
            to_u = rng.choice([u for u in active_user_ids if u != from_u])
            amount_cents = rng.randint(100, 50_000)  # $1.00 to $500.00
            
            d_offset = rng.randint(0, tx_day_range)
            sec_offset = rng.randint(0, 86399)
            tx_dt = (base_tx_start + timedelta(days=d_offset)).isoformat()
            h = sec_offset // 3600
            m = (sec_offset % 3600) // 60
            s = sec_offset % 60
            tx_timestamp = f"{tx_dt}T{h:02d}:{m:02d}:{s:02d}Z"

            tx_list.append((from_u, to_u, amount_cents, tx_timestamp))

        # Sort chronologically so auto-increment IDs match transaction time order
        tx_list.sort(key=lambda x: x[3])
        conn.executemany(
            "INSERT INTO transactions (from_user, to_user, amount_cents, created_at) VALUES (?, ?, ?, ?)",
            tx_list,
        )

    # notifications and audit_log start empty
    conn.commit()
    return conn


def dump(conn: sqlite3.Connection) -> str:
    """Return canonical text dump of SQLite database."""
    return "\n".join(conn.iterdump())

