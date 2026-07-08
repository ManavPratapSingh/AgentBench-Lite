"""Database schema and initialization for AgentBench-Lite.

FR-ENV-2: SQLite schema with strict CHECK constraints and ISO-8601 timestamps.
"""
import sqlite3

SCHEMA_SQL = """
PRAGMA foreign_keys = ON;

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  signup_date TEXT NOT NULL,                      -- 'YYYY-MM-DD'
  status TEXT NOT NULL CHECK (status IN ('active','suspended','closed'))
);

CREATE TABLE accounts (
  user_id INTEGER PRIMARY KEY REFERENCES users(id),
  balance_cents INTEGER NOT NULL CHECK (balance_cents >= 0)
);

CREATE TABLE transactions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  from_user INTEGER NOT NULL REFERENCES users(id),
  to_user   INTEGER NOT NULL REFERENCES users(id),
  amount_cents INTEGER NOT NULL CHECK (amount_cents > 0),
  created_at TEXT NOT NULL
);

CREATE TABLE notifications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL REFERENCES users(id),
  message TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE TABLE audit_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  action TEXT NOT NULL,                           -- 'transfer'|'update_status'|'send_notification'
  target_user INTEGER,
  details TEXT NOT NULL,                          -- canonical JSON
  created_at TEXT NOT NULL
);
"""


def init_db(conn: sqlite3.Connection) -> None:
    """Initialize database tables with schema constraints."""
    # ponytail: in-memory sqlite with foreign keys enabled
    conn.execute("PRAGMA foreign_keys = ON;")
    conn.executescript(SCHEMA_SQL)
