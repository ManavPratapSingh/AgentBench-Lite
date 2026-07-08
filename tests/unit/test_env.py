"""Unit tests for Phase 1 deterministic environment and mock API tools.

Covers FR-1, FR-ENV-1, FR-ENV-2, FR-ENV-3, FR-ENV-4, FR-TOOL-2.
"""
import hashlib
import json
import sqlite3
import pytest

from agentbench.env.clock import FAKE_NOW
from agentbench.env.seed import dump, seed
from agentbench.env import api


def _hash_dump(conn: sqlite3.Connection) -> str:
    return hashlib.sha256(dump(conn).encode("utf-8")).hexdigest()


def test_seed_determinism_identical():
    """FR-1, FR-ENV-4: seed(42) twice produces byte-identical DB dump."""
    conn1 = seed(42)
    conn2 = seed(42)
    try:
        h1 = _hash_dump(conn1)
        h2 = _hash_dump(conn2)
        assert h1 == h2
        assert dump(conn1) == dump(conn2)
    finally:
        conn1.close()
        conn2.close()


def test_seed_determinism_different_seeds():
    """FR-ENV-4: Different seeds produce different dumps."""
    conn1 = seed(42)
    conn2 = seed(43)
    try:
        assert _hash_dump(conn1) != _hash_dump(conn2)
    finally:
        conn1.close()
        conn2.close()


def test_seed_initial_state_invariants():
    """FR-ENV-3: Initial state invariants (50 users, empty audit/notifications, tx < FAKE_NOW)."""
    conn = seed(123)
    try:
        cur = conn.cursor()
        
        # 50 users
        cur.execute("SELECT COUNT(*), MIN(id), MAX(id) FROM users")
        count, min_id, max_id = cur.fetchone()
        assert count == 50
        assert min_id == 1
        assert max_id == 50

        # Accounts for each user
        cur.execute("SELECT COUNT(*) FROM accounts")
        assert cur.fetchone()[0] == 50

        cur.execute("SELECT MIN(balance_cents), MAX(balance_cents) FROM accounts")
        min_bal, max_bal = cur.fetchone()
        assert min_bal >= 0
        assert max_bal <= 500_000

        # Empty notifications and audit log
        cur.execute("SELECT COUNT(*) FROM notifications")
        assert cur.fetchone()[0] == 0
        cur.execute("SELECT COUNT(*) FROM audit_log")
        assert cur.fetchone()[0] == 0

        # Transactions have timestamps before FAKE_NOW
        cur.execute("SELECT created_at FROM transactions")
        for (created_at,) in cur.fetchall():
            assert created_at < FAKE_NOW
    finally:
        conn.close()


def test_list_users():
    """FR-TOOL-2: list_users filtering, pagination, and date range checks."""
    conn = seed(42)
    try:
        # Default pagination
        status, res = api.list_users(conn, limit=10, offset=0)
        assert status == 200
        assert len(res["users"]) == 10
        assert res["total"] == 50
        assert res["limit"] == 10
        assert res["offset"] == 0

        # Ordering is by id ascending
        ids = [u["id"] for u in res["users"]]
        assert ids == sorted(ids)

        # Filtering by status
        status, res = api.list_users(conn, status="active", limit=50)
        assert status == 200
        assert all(u["status"] == "active" for u in res["users"])

        # Invalid date range
        status, res = api.list_users(
            conn, signup_before="2024-01-01", signup_after="2024-06-01"
        )
        assert status == 400
        assert res["error"] == "invalid_date_range"

        # Invalid limits
        status, res = api.list_users(conn, limit=0)
        assert status == 400
        status, res = api.list_users(conn, limit=51)
        assert status == 400
        status, res = api.list_users(conn, offset=-1)
        assert status == 400
    finally:
        conn.close()


def test_get_user():
    """FR-TOOL-2: get_user success and 404."""
    conn = seed(42)
    try:
        status, res = api.get_user(conn, user_id=1)
        assert status == 200
        assert res["id"] == 1
        assert "name" in res
        assert "email" in res
        assert res["status"] in ("active", "suspended", "closed")

        status, res = api.get_user(conn, user_id=999)
        assert status == 404
        assert res["error"] == "user_not_found"
    finally:
        conn.close()


def test_get_balance():
    """FR-TOOL-2: get_balance success and 404."""
    conn = seed(42)
    try:
        status, res = api.get_balance(conn, user_id=1)
        assert status == 200
        assert res["user_id"] == 1
        assert isinstance(res["balance"], float)
        assert res["balance"] >= 0.0

        status, res = api.get_balance(conn, user_id=999)
        assert status == 404
    finally:
        conn.close()


def test_get_transactions():
    """FR-TOOL-2: get_transactions success, descending order, limit, and 404."""
    conn = seed(42)
    try:
        # Find a user with transactions
        cur = conn.cursor()
        cur.execute("SELECT from_user FROM transactions LIMIT 1")
        uid = cur.fetchone()[0]

        status, res = api.get_transactions(conn, user_id=uid, limit=5)
        assert status == 200
        txs = res["transactions"]
        assert len(txs) <= 5
        # Order must be id descending
        ids = [t["id"] for t in txs]
        assert ids == sorted(ids, reverse=True)

        # 404 for nonexistent user
        status, res = api.get_transactions(conn, user_id=999)
        assert status == 404
    finally:
        conn.close()


def test_transfer_success_and_audit():
    """FR-TOOL-2: transfer success updates balances, creates tx, and logs audit."""
    conn = seed(42)
    try:
        # Find two active users with balance
        cur = conn.cursor()
        cur.execute(
            """
            SELECT u.id, a.balance_cents
            FROM users u
            JOIN accounts a ON u.id = a.user_id
            WHERE u.status = 'active' AND a.balance_cents >= 1000
            ORDER BY u.id ASC
            LIMIT 2
            """
        )
        rows = cur.fetchall()
        u1_id, u1_bal = rows[0]
        u2_id, u2_bal = rows[1]

        status, res = api.transfer(conn, from_user_id=u1_id, to_user_id=u2_id, amount=5.50)
        assert status == 200
        assert res["from_balance"] == round((u1_bal - 550) / 100.0, 2)
        assert res["to_balance"] == round((u2_bal + 550) / 100.0, 2)

        # Check audit log written
        cur.execute("SELECT action, target_user, details FROM audit_log ORDER BY id DESC LIMIT 1")
        audit = cur.fetchone()
        assert audit[0] == "transfer"
        assert audit[1] == u1_id
        details = json.loads(audit[2])
        assert details["amount_cents"] == 550
        assert details["to_user_id"] == u2_id
    finally:
        conn.close()


def test_transfer_validation_and_errors():
    """FR-TOOL-2: transfer failure modes leave database unmodified."""
    conn = seed(42)
    try:
        dump_before = dump(conn)

        # 1. Same user
        status, res = api.transfer(conn, 1, 1, 10.0)
        assert status == 400
        assert res["error"] == "same_user"

        # 2. Invalid amounts
        status, res = api.transfer(conn, 1, 2, -5.0)
        assert status == 400
        assert res["error"] == "invalid_amount"

        status, res = api.transfer(conn, 1, 2, 5.009)
        assert status == 400
        assert res["error"] == "invalid_amount"

        # 3. Nonexistent user
        status, res = api.transfer(conn, 1, 999, 5.0)
        assert status == 404

        # 4. Inactive user (find a suspended or closed user)
        cur = conn.cursor()
        cur.execute("SELECT id FROM users WHERE status != 'active' LIMIT 1")
        row = cur.fetchone()
        if row:
            inactive_id = row[0]
            status, res = api.transfer(conn, 1, inactive_id, 1.0)
            assert status == 409
            assert res["error"] == "user_not_active"

        # 5. Insufficient funds
        status, res = api.transfer(conn, 1, 2, 999999.0)
        assert status == 400
        assert res["error"] == "insufficient_funds"

        # State must remain identical after all failed attempts
        assert dump(conn) == dump_before
    finally:
        conn.close()


def test_update_status():
    """FR-TOOL-2: update_status success and errors."""
    conn = seed(42)
    try:
        # Check current status of user 1
        _, user1 = api.get_user(conn, 1)
        curr_status = user1["status"]
        new_status = "suspended" if curr_status == "active" else "active"

        # Success
        status, res = api.update_status(conn, user_id=1, status=new_status)
        assert status == 200
        assert res["status"] == new_status

        # Audit log written
        cur = conn.cursor()
        cur.execute("SELECT action, target_user, details FROM audit_log ORDER BY id DESC LIMIT 1")
        audit = cur.fetchone()
        assert audit[0] == "update_status"
        assert audit[1] == 1
        details = json.loads(audit[2])
        assert details["old_status"] == curr_status
        assert details["new_status"] == new_status

        # 409 if already that status
        status, res = api.update_status(conn, user_id=1, status=new_status)
        assert status == 409
        assert res["error"] == "already_in_status"

        # 400 for invalid status
        status, res = api.update_status(conn, user_id=1, status="deleted")
        assert status == 400

        # 404 for unknown user
        status, res = api.update_status(conn, user_id=999, status="active")
        assert status == 404
    finally:
        conn.close()


def test_send_notification():
    """FR-TOOL-2: send_notification success and errors."""
    conn = seed(42)
    try:
        # Find an active user
        cur = conn.cursor()
        cur.execute("SELECT id FROM users WHERE status = 'active' LIMIT 1")
        active_id = cur.fetchone()[0]

        # Success
        status, res = api.send_notification(conn, user_id=active_id, message="Hello test!")
        assert status == 200
        notif_id = res["notification_id"]
        assert notif_id > 0

        # Verify notification table
        cur.execute("SELECT message, created_at FROM notifications WHERE id = ?", (notif_id,))
        notif = cur.fetchone()
        assert notif[0] == "Hello test!"
        assert notif[1] == FAKE_NOW

        # Audit log written
        cur.execute("SELECT action, target_user, details FROM audit_log ORDER BY id DESC LIMIT 1")
        audit = cur.fetchone()
        assert audit[0] == "send_notification"
        assert audit[1] == active_id

        # 400 for empty or too long message
        status, _ = api.send_notification(conn, user_id=active_id, message="")
        assert status == 400
        status, _ = api.send_notification(conn, user_id=active_id, message="x" * 281)
        assert status == 400

        # 404 for unknown user
        status, _ = api.send_notification(conn, user_id=999, message="Hi")
        assert status == 404

        # 409 for closed user
        cur.execute("SELECT id FROM users WHERE status = 'closed' LIMIT 1")
        closed_row = cur.fetchone()
        if not closed_row:
            # Set one to closed for test
            api.update_status(conn, user_id=active_id, status="closed")
            closed_id = active_id
        else:
            closed_id = closed_row[0]
        status, res = api.send_notification(conn, user_id=closed_id, message="Hi")
        assert status == 409
        assert res["error"] == "user_closed"
    finally:
        conn.close()
