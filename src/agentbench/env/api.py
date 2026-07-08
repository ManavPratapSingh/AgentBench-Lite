"""Mock REST API tools executing against SQLite.

FR-ENV-2, FR-TOOL-2:
Tools: list_users, get_user, get_balance, get_transactions,
transfer, update_status, send_notification.
All multi-row queries use total ORDER BY.
Mutating operations run inside transactions and record to audit_log on success.
"""
import json
import sqlite3
from typing import Any, Dict, Optional, Tuple

from agentbench.env.clock import FAKE_NOW


def _canonical_json(obj: Any) -> str:
    """Format JSON with sorted keys and no unnecessary whitespace."""
    return json.dumps(obj, sort_keys=True, separators=(",", ":"))


def list_users(
    conn: sqlite3.Connection,
    signup_before: Optional[str] = None,
    signup_after: Optional[str] = None,
    status: Optional[str] = None,
    limit: int = 20,
    offset: int = 0,
) -> Tuple[int, Dict[str, Any]]:
    """List users with filtering and pagination."""
    if limit < 1 or limit > 50:
        return 400, {"error": "invalid_limit", "message": "Limit must be between 1 and 50"}
    if offset < 0:
        return 400, {"error": "invalid_offset", "message": "Offset must be non-negative"}

    if signup_before and signup_after and signup_after >= signup_before:
        return 400, {
            "error": "invalid_date_range",
            "message": "signup_after must be earlier than signup_before",
        }

    conditions = []
    params = []

    if signup_before:
        conditions.append("signup_date < ?")
        params.append(signup_before)
    if signup_after:
        conditions.append("signup_date > ?")
        params.append(signup_after)
    if status:
        conditions.append("status = ?")
        params.append(status)

    where_clause = f"WHERE {' AND '.join(conditions)}" if conditions else ""

    # Total count
    count_cur = conn.cursor()
    count_cur.execute(f"SELECT COUNT(*) FROM users {where_clause}", params)
    total = count_cur.fetchone()[0]

    # Paginated select with total ORDER BY id ASC
    query = f"""
        SELECT id, name, email, signup_date, status
        FROM users
        {where_clause}
        ORDER BY id ASC
        LIMIT ? OFFSET ?
    """
    cur = conn.cursor()
    cur.execute(query, params + [limit, offset])
    rows = cur.fetchall()

    users = [
        {
            "id": r[0],
            "name": r[1],
            "email": r[2],
            "signup_date": r[3],
            "status": r[4],
        }
        for r in rows
    ]
    return 200, {"users": users, "total": total, "limit": limit, "offset": offset}


def get_user(conn: sqlite3.Connection, user_id: int) -> Tuple[int, Dict[str, Any]]:
    """Get user details by ID."""
    cur = conn.cursor()
    cur.execute(
        "SELECT id, name, email, signup_date, status FROM users WHERE id = ?",
        (user_id,),
    )
    row = cur.fetchone()
    if not row:
        return 404, {"error": "user_not_found", "message": f"User {user_id} not found"}

    return 200, {
        "id": row[0],
        "name": row[1],
        "email": row[2],
        "signup_date": row[3],
        "status": row[4],
    }


def get_balance(conn: sqlite3.Connection, user_id: int) -> Tuple[int, Dict[str, Any]]:
    """Get account balance in dollars for a user."""
    cur = conn.cursor()
    cur.execute("SELECT balance_cents FROM accounts WHERE user_id = ?", (user_id,))
    row = cur.fetchone()
    if not row:
        return 404, {"error": "user_not_found", "message": f"User {user_id} not found"}

    balance_dollars = round(row[0] / 100.0, 2)
    return 200, {"user_id": user_id, "balance": balance_dollars}


def get_transactions(
    conn: sqlite3.Connection, user_id: int, limit: int = 10
) -> Tuple[int, Dict[str, Any]]:
    """Get recent transactions for a user (sent or received), ordered by id DESC."""
    if limit < 1 or limit > 50:
        return 400, {"error": "invalid_limit", "message": "Limit must be between 1 and 50"}

    # Check user existence
    user_cur = conn.cursor()
    user_cur.execute("SELECT id FROM users WHERE id = ?", (user_id,))
    if not user_cur.fetchone():
        return 404, {"error": "user_not_found", "message": f"User {user_id} not found"}

    cur = conn.cursor()
    cur.execute(
        """
        SELECT id, from_user, to_user, amount_cents, created_at
        FROM transactions
        WHERE from_user = ? OR to_user = ?
        ORDER BY id DESC
        LIMIT ?
        """,
        (user_id, user_id, limit),
    )
    rows = cur.fetchall()

    txs = [
        {
            "id": r[0],
            "from_user": r[1],
            "to_user": r[2],
            "amount": round(r[3] / 100.0, 2),
            "created_at": r[4],
        }
        for r in rows
    ]
    return 200, {"transactions": txs}


def transfer(
    conn: sqlite3.Connection, from_user_id: int, to_user_id: int, amount: float
) -> Tuple[int, Dict[str, Any]]:
    """Transfer funds from one active user to another."""
    cents = round(amount * 100)
    if amount <= 0 or abs(amount * 100 - cents) > 1e-6:
        return 400, {
            "error": "invalid_amount",
            "message": "Amount must be positive with at most 2 decimal places",
        }

    if from_user_id == to_user_id:
        return 400, {
            "error": "same_user",
            "message": "Cannot transfer to the same user",
        }

    cur = conn.cursor()
    cur.execute(
        "SELECT id, status FROM users WHERE id IN (?, ?) ORDER BY id ASC",
        (from_user_id, to_user_id),
    )
    user_map = {row[0]: row[1] for row in cur.fetchall()}

    if from_user_id not in user_map or to_user_id not in user_map:
        return 404, {
            "error": "user_not_found",
            "message": "One or both users not found",
        }

    if user_map[from_user_id] != "active" or user_map[to_user_id] != "active":
        return 409, {
            "error": "user_not_active",
            "message": "Both sender and receiver must be active",
        }

    cur.execute("SELECT balance_cents FROM accounts WHERE user_id = ?", (from_user_id,))
    from_bal_row = cur.fetchone()
    if not from_bal_row or from_bal_row[0] < cents:
        return 400, {
            "error": "insufficient_funds",
            "message": "Insufficient balance for transfer",
        }

    cur.execute("SELECT balance_cents FROM accounts WHERE user_id = ?", (to_user_id,))
    to_bal_row = cur.fetchone()

    from_bal = from_bal_row[0]
    to_bal = to_bal_row[0]

    # Mutating operation inside explicit transaction
    try:
        cur.execute(
            "UPDATE accounts SET balance_cents = balance_cents - ? WHERE user_id = ?",
            (cents, from_user_id),
        )
        cur.execute(
            "UPDATE accounts SET balance_cents = balance_cents + ? WHERE user_id = ?",
            (cents, to_user_id),
        )
        cur.execute(
            "INSERT INTO transactions (from_user, to_user, amount_cents, created_at) VALUES (?, ?, ?, ?)",
            (from_user_id, to_user_id, cents, FAKE_NOW),
        )
        tx_id = cur.lastrowid

        cur.execute(
            "INSERT INTO audit_log (action, target_user, details, created_at) VALUES (?, ?, ?, ?)",
            (
                "transfer",
                from_user_id,
                _canonical_json(
                    {
                        "amount_cents": cents,
                        "from_user_id": from_user_id,
                        "to_user_id": to_user_id,
                        "transaction_id": tx_id,
                    }
                ),
                FAKE_NOW,
            ),
        )
        conn.commit()
    except Exception:
        conn.rollback()
        raise

    return 200, {
        "transaction_id": tx_id,
        "from_balance": round((from_bal - cents) / 100.0, 2),
        "to_balance": round((to_bal + cents) / 100.0, 2),
    }


def update_status(
    conn: sqlite3.Connection, user_id: int, status: str
) -> Tuple[int, Dict[str, Any]]:
    """Update user status (active, suspended, closed)."""
    if status not in ("active", "suspended", "closed"):
        return 400, {
            "error": "invalid_status",
            "message": "Status must be active, suspended, or closed",
        }

    cur = conn.cursor()
    cur.execute("SELECT status FROM users WHERE id = ?", (user_id,))
    row = cur.fetchone()
    if not row:
        return 404, {"error": "user_not_found", "message": f"User {user_id} not found"}

    current_status = row[0]
    if current_status == status:
        return 409, {
            "error": "already_in_status",
            "message": f"User is already {status}",
        }

    try:
        cur.execute("UPDATE users SET status = ? WHERE id = ?", (status, user_id))
        cur.execute(
            "INSERT INTO audit_log (action, target_user, details, created_at) VALUES (?, ?, ?, ?)",
            (
                "update_status",
                user_id,
                _canonical_json({"old_status": current_status, "new_status": status}),
                FAKE_NOW,
            ),
        )
        conn.commit()
    except Exception:
        conn.rollback()
        raise

    return 200, {"user_id": user_id, "status": status}


def send_notification(
    conn: sqlite3.Connection, user_id: int, message: str
) -> Tuple[int, Dict[str, Any]]:
    """Send a notification to an active or suspended user (closed users rejected)."""
    if not message or len(message) > 280:
        return 400, {
            "error": "invalid_message",
            "message": "Message length must be between 1 and 280 characters",
        }

    cur = conn.cursor()
    cur.execute("SELECT status FROM users WHERE id = ?", (user_id,))
    row = cur.fetchone()
    if not row:
        return 404, {"error": "user_not_found", "message": f"User {user_id} not found"}

    if row[0] == "closed":
        return 409, {
            "error": "user_closed",
            "message": "Cannot notify a closed account",
        }

    try:
        cur.execute(
            "INSERT INTO notifications (user_id, message, created_at) VALUES (?, ?, ?)",
            (user_id, message, FAKE_NOW),
        )
        notif_id = cur.lastrowid
        cur.execute(
            "INSERT INTO audit_log (action, target_user, details, created_at) VALUES (?, ?, ?, ?)",
            (
                "send_notification",
                user_id,
                _canonical_json(
                    {"message_length": len(message), "notification_id": notif_id}
                ),
                FAKE_NOW,
            ),
        )
        conn.commit()
    except Exception:
        conn.rollback()
        raise

    return 200, {"notification_id": notif_id}
