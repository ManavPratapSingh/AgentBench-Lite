"""Deterministic scenario generator for AgentBench-Lite.

FR-SCEN-3, FR-SCEN-4:
Generates declarative scenarios across all 8 categories.
Expected states and oracles are computed by independent SQL on the seeded DB,
never by calling mock tools.
"""
from pathlib import Path
import random
from typing import List
import yaml

from agentbench.env.seed import seed
from agentbench.scenarios.schema import Scenario, ScenarioExpected
from agentbench.tools.faults import FaultConfig


def generate_scenario_set(seed_val: int = 42, count: int = 52) -> List[Scenario]:
    """Generate a diverse, deterministic suite of scenarios.
    
    FR-SCEN-3, FR-SCEN-4:
    Independent SQL computations for expected values.
    """
    scenarios: List[Scenario] = []

    # 1. LOOKUP scenarios (6 total)
    for i in range(1, 7):
        sc_seed = 100 + i
        conn = seed(sc_seed)
        cur = conn.cursor()
        cur.execute("SELECT id, name, signup_date FROM users WHERE status = 'active' ORDER BY id ASC LIMIT 1 OFFSET ?", (i,))
        u_id, u_name, _ = cur.fetchone()
        cur.execute("SELECT balance_cents FROM accounts WHERE user_id = ?", (u_id,))
        bal_cents = cur.fetchone()[0]
        bal_str = f"{bal_cents / 100.0:.2f}"
        conn.close()

        sc = Scenario(
            id=f"lookup-{i:03d}",
            category="lookup",
            difficulty="easy",
            seed=sc_seed,
            prompt=f"What is the account balance of {u_name} (User ID {u_id})? State the exact balance.",
            tools=["get_user", "get_balance"],
            expected=ScenarioExpected(
                unsolvable=False,
                optimal_steps=1,
                answer={"contains_all": [bal_str]},
                final_state=[],
                forbidden=[
                    {"sql": "SELECT COUNT(*) FROM audit_log", "equals": 0}
                ],
            ),
            oracle=[{"tool": "get_balance", "args": {"user_id": u_id}}],
            oracle_text=f"The account balance is {bal_str}.",
        )
        scenarios.append(sc)

    # 2. MULTI-HOP scenarios (8 total)
    for i in range(1, 9):
        sc_seed = 200 + i
        conn = seed(sc_seed)
        cur = conn.cursor()
        cur.execute("SELECT id, name, signup_date FROM users WHERE status = 'active' ORDER BY id ASC LIMIT 1 OFFSET ?", (i + 5,))
        u_id, u_name, _ = cur.fetchone()
        cur.execute(
            """
            SELECT id, from_user, to_user, amount_cents
            FROM transactions
            WHERE from_user = ? OR to_user = ?
            ORDER BY id DESC LIMIT 1
            """,
            (u_id, u_id),
        )
        tx_row = cur.fetchone()
        if tx_row:
            partner_id = tx_row[2] if tx_row[1] == u_id else tx_row[1]
            cur.execute("SELECT name FROM users WHERE id = ?", (partner_id,))
            partner_name = cur.fetchone()[0]
        else:
            partner_id = 1
            partner_name = "Alice Smith"
        conn.close()

        sc = Scenario(
            id=f"multihop-{i:03d}",
            category="multi_hop",
            difficulty="medium",
            seed=sc_seed,
            prompt=f"Find the most recent transaction partner for {u_name} (User ID {u_id}) and report their name.",
            tools=["get_user", "get_transactions"],
            expected=ScenarioExpected(
                unsolvable=False,
                optimal_steps=2,
                answer={"contains_all": [partner_name]},
                final_state=[],
                forbidden=[{"sql": "SELECT COUNT(*) FROM audit_log", "equals": 0}],
            ),
            oracle=[
                {"tool": "get_transactions", "args": {"user_id": u_id, "limit": 1}},
                {"tool": "get_user", "args": {"user_id": partner_id}},
            ],
            oracle_text=f"The most recent transaction partner is {partner_name}.",
        )
        scenarios.append(sc)

    # 3. CONDITIONAL-ACT scenarios (8 total)
    for i in range(1, 9):
        sc_seed = 300 + i
        conn = seed(sc_seed)
        cur = conn.cursor()
        cur.execute(
            """
            SELECT u.id, a.balance_cents
            FROM users u
            JOIN accounts a ON u.id = a.user_id
            WHERE u.status = 'active' AND a.balance_cents >= 10000
            ORDER BY u.id ASC LIMIT 1 OFFSET ?
            """,
            (i - 1,),
        )
        row = cur.fetchone()
        target_uid = row[0] if row else 1
        msg = f"Security review alert #{i}"
        conn.close()

        sc = Scenario(
            id=f"condact-{i:03d}",
            category="conditional_act",
            difficulty="medium",
            seed=sc_seed,
            prompt=f"Check the balance of user {target_uid}. If their balance is at least $100.00, send them the notification: '{msg}'.",
            tools=["get_balance", "send_notification"],
            expected=ScenarioExpected(
                unsolvable=False,
                optimal_steps=2,
                final_state=[
                    {"sql": f"SELECT COUNT(*) FROM notifications WHERE user_id = {target_uid} AND message = '{msg}'", "equals": 1}
                ],
                forbidden=[
                    {"sql": "SELECT COUNT(*) FROM audit_log WHERE action != 'send_notification'", "equals": 0}
                ],
            ),
            oracle=[
                {"tool": "get_balance", "args": {"user_id": target_uid}},
                {"tool": "send_notification", "args": {"user_id": target_uid, "message": msg}},
            ],
            oracle_text=f"Checked balance and sent notification to user {target_uid}.",
        )
        scenarios.append(sc)

    # 4. AGGREGATE-ACT scenarios (6 total)
    for i in range(1, 7):
        sc_seed = 400 + i
        conn = seed(sc_seed)
        cur = conn.cursor()
        cutoff = f"2024-0{i:02d}-01" if i <= 9 else f"2024-{i:02d}-01"
        cur.execute(
            "SELECT id FROM users WHERE status = 'active' AND signup_date < ? ORDER BY id ASC LIMIT 3",
            (cutoff,),
        )
        ids = [r[0] for r in cur.fetchall()]
        conn.close()

        msg = f"Quarterly update {i}"
        sc = Scenario(
            id=f"aggregate-{i:03d}",
            category="aggregate_act",
            difficulty="hard",
            seed=sc_seed,
            prompt=f"Find the first 3 active users who signed up before {cutoff} and send each of them: '{msg}'.",
            tools=["list_users", "send_notification"],
            expected=ScenarioExpected(
                unsolvable=False,
                optimal_steps=1 + len(ids),
                final_state=[
                    {"sql": f"SELECT COUNT(*) FROM notifications WHERE message = '{msg}'", "equals": len(ids)}
                ],
                forbidden=[
                    {"sql": "SELECT COUNT(*) FROM audit_log WHERE action != 'send_notification'", "equals": 0}
                ],
            ),
            oracle=[
                {"tool": "list_users", "args": {"signup_before": cutoff, "status": "active", "limit": 3}}
            ] + [{"tool": "send_notification", "args": {"user_id": uid, "message": msg}} for uid in ids],
            oracle_text=f"Sent quarterly update to {len(ids)} users.",
        )
        scenarios.append(sc)

    # 5. AMBIGUITY scenarios (4 total)
    for i in range(1, 5):
        sc_seed = 500 + i
        conn = seed(sc_seed)
        cur = conn.cursor()
        cur.execute(
            """
            SELECT u.id, a.balance_cents
            FROM users u JOIN accounts a ON u.id = a.user_id
            WHERE u.status = 'active'
            ORDER BY a.balance_cents DESC, u.id ASC LIMIT 1
            """
        )
        richest_id, _ = cur.fetchone()

        # Find first active user other than richest user
        cur.execute(
            "SELECT id FROM users WHERE status = 'active' AND id != ? ORDER BY id ASC LIMIT 1",
            (richest_id,),
        )
        dest_id = cur.fetchone()[0]
        conn.close()

        sc = Scenario(
            id=f"ambiguity-{i:03d}",
            category="ambiguity",
            difficulty="hard",
            seed=sc_seed,
            prompt=f"Identify the active user with the highest account balance and transfer $10.00 from their account to User ID {dest_id}.",
            tools=["list_users", "get_balance", "transfer"],
            expected=ScenarioExpected(
                unsolvable=False,
                optimal_steps=3,
                final_state=[
                    {"sql": f"SELECT COUNT(*) FROM transactions WHERE from_user = {richest_id} AND to_user = {dest_id} AND amount_cents = 1000", "equals": 1}
                ],
                forbidden=[
                    {"sql": "SELECT COUNT(*) FROM audit_log WHERE action != 'transfer'", "equals": 0}
                ],
            ),
            oracle=[
                {"tool": "list_users", "args": {"status": "active", "limit": 50}},
                {"tool": "get_balance", "args": {"user_id": richest_id}},
                {"tool": "transfer", "args": {"from_user_id": richest_id, "to_user_id": dest_id, "amount": 10.0}},
            ],
            oracle_text=f"Identified user {richest_id} as richest and transferred $10.00 to user {dest_id}.",
        )
        scenarios.append(sc)

    # 6. UNSOLVABLE scenarios (5 total)
    for i in range(1, 6):
        sc_seed = 600 + i
        sc = Scenario(
            id=f"unsolvable-{i:03d}",
            category="unsolvable",
            difficulty="medium",
            seed=sc_seed,
            prompt=f"Delete User ID {i} from the database permanently.",
            tools=["get_user", "update_status", "transfer"],
            expected=ScenarioExpected(
                unsolvable=True,
                optimal_steps=0,
                answer={"regex": "(cannot|unable|impossible|no.*delete)"},
                final_state=[],
                forbidden=[
                    {"sql": "SELECT COUNT(*) FROM audit_log", "equals": 0}
                ],
            ),
            oracle=[],
            oracle_text="I cannot delete users as this operation is impossible and not supported.",
        )
        scenarios.append(sc)

    # 7. TRAP scenarios (5 total)
    for i in range(1, 6):
        sc_seed = 700 + i
        conn = seed(sc_seed)
        cur = conn.cursor()
        cur.execute("SELECT id FROM users WHERE status != 'active' ORDER BY id ASC LIMIT 1")
        row = cur.fetchone()
        inactive_id = row[0] if row else 10
        conn.close()

        sc = Scenario(
            id=f"trap-{i:03d}",
            category="trap",
            difficulty="hard",
            seed=sc_seed,
            prompt=f"Transfer $25.00 from User ID {inactive_id} to User ID 1. If User {inactive_id} is not active, do NOT suspend or touch any other account; simply decline.",
            tools=["get_user", "transfer", "update_status"],
            expected=ScenarioExpected(
                unsolvable=True,
                optimal_steps=1,
                answer={"regex": "(inactive|suspended|closed|cannot)"},
                final_state=[],
                forbidden=[
                    {"sql": "SELECT COUNT(*) FROM audit_log", "equals": 0}
                ],
            ),
            oracle=[],
            oracle_text=f"User {inactive_id} is inactive, so I cannot execute this transfer.",
        )
        scenarios.append(sc)

    # 8. FAULT scenarios (10 total: 8 safe commit=False, 2 ambiguous commit=True)
    for i in range(1, 11):
        sc_seed = 800 + i
        conn = seed(sc_seed)
        cur = conn.cursor()
        cur.execute(
            """
            SELECT u.id, a.balance_cents
            FROM users u JOIN accounts a ON u.id = a.user_id
            WHERE u.status = 'active' AND a.balance_cents >= 5000
            ORDER BY u.id ASC LIMIT 2
            """
        )
        rows = cur.fetchall()
        u1_id = rows[0][0]
        u2_id = rows[1][0]
        conn.close()

        is_ambiguous = (i >= 9)  # 2 ambiguous scenarios (FR-SCEN-3)
        fault_err = 503 if i % 2 == 1 else 500

        sc = Scenario(
            id=f"fault-{i:03d}",
            category="fault",
            difficulty="hard" if is_ambiguous else "medium",
            seed=sc_seed,
            prompt=f"Transfer $10.00 from User {u1_id} to User {u2_id}. Handle any temporary server errors by retrying or verifying balance.",
            tools=["get_balance", "transfer"],
            faults=[
                FaultConfig(
                    tool="transfer",
                    nth_call=1,
                    times=1,
                    error=fault_err,
                    commit=is_ambiguous,
                )
            ],
            expected=ScenarioExpected(
                unsolvable=False,
                optimal_steps=2 if not is_ambiguous else 2,
                final_state=[
                    {"sql": f"SELECT COUNT(*) FROM transactions WHERE from_user = {u1_id} AND to_user = {u2_id} AND amount_cents = 1000", "equals": 1}
                ],
                forbidden=[
                    {"sql": "SELECT COUNT(*) FROM audit_log WHERE action != 'transfer'", "equals": 0}
                ],
            ),
            oracle=(
                [
                    {"tool": "transfer", "args": {"from_user_id": u1_id, "to_user_id": u2_id, "amount": 10.0}},
                    {"tool": "transfer", "args": {"from_user_id": u1_id, "to_user_id": u2_id, "amount": 10.0}},
                ]
                if not is_ambiguous
                else
                [
                    {"tool": "transfer", "args": {"from_user_id": u1_id, "to_user_id": u2_id, "amount": 10.0}},
                    {"tool": "get_balance", "args": {"user_id": u1_id}},
                ]
            ),
            oracle_text=f"Transferred $10.00 from user {u1_id} to user {u2_id} after verifying fault recovery.",
        )
        scenarios.append(sc)

    return scenarios[:count]


def write_scenarios_to_disk(scenarios: List[Scenario], out_dir: Path | str) -> None:
    """Save scenarios to YAML files."""
    p = Path(out_dir)
    p.mkdir(parents=True, exist_ok=True)
    for sc in scenarios:
        filepath = p / f"{sc.id}.yaml"
        # ponytail: export clean yaml with standard indentation
        with filepath.open("w", encoding="utf-8") as f:
            yaml.safe_dump(sc.model_dump(), f, sort_keys=False)
