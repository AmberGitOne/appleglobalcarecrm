'use strict';
/**
 * Database connection.
 *
 * One shared better-sqlite3 handle for the whole process. better-sqlite3 is
 * synchronous, which suits a single-node CRM: no connection pool, no await
 * noise, and real transactions that actually roll back.
 */

const path = require('path');
const fs = require('fs');
const Database = require('better-sqlite3');

require('dotenv').config({ path: path.join(__dirname, '..', '..', '.env') });

const ROOT = path.join(__dirname, '..', '..');
const DB_FILE = path.resolve(ROOT, process.env.DB_FILE || './data/crm.db');

fs.mkdirSync(path.dirname(DB_FILE), { recursive: true });

const db = new Database(DB_FILE);

// WAL lets readers run while a writer holds the lock - important once the
// dashboard polls while someone is saving a ticket.
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');
db.pragma('synchronous = NORMAL');
db.pragma('busy_timeout = 5000');

/** Run a function inside a transaction; rolls back on throw. */
function tx(fn) {
  return db.transaction(fn);
}

/** Does a table exist? Used by the migration runner. */
function tableExists(name) {
  return !!db
    .prepare("SELECT 1 FROM sqlite_master WHERE type='table' AND name = ?")
    .get(name);
}

module.exports = { db, tx, tableExists, DB_FILE };
