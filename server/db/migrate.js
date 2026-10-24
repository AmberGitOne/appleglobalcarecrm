'use strict';
/**
 * Migration runner.
 *
 *   node server/db/migrate.js            apply the schema if not applied yet
 *   node server/db/migrate.js --fresh    drop everything and rebuild
 *
 * The schema lives in schema.sql as one authoritative script. A
 * `schema_migrations` table records which scripts have run so a second
 * invocation is a no-op rather than an error.
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { db, tableExists } = require('./index');

const SCHEMA_FILE = path.join(__dirname, 'schema.sql');
const FRESH = process.argv.includes('--fresh');

function ensureMigrationsTable() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS schema_migrations (
      name       TEXT PRIMARY KEY,
      checksum   TEXT NOT NULL,
      applied_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `);
}

function dropEverything() {
  db.pragma('foreign_keys = OFF');

  const drop = (type, keyword) => {
    const rows = db
      .prepare(
        `SELECT name FROM sqlite_master
         WHERE type = ? AND name NOT LIKE 'sqlite_%'`
      )
      .all(type);
    for (const { name } of rows) {
      db.exec(`DROP ${keyword} IF EXISTS "${name}"`);
    }
  };

  // Order matters: triggers and views reference tables.
  drop('trigger', 'TRIGGER');
  drop('view', 'VIEW');
  drop('index', 'INDEX');
  drop('table', 'TABLE');

  db.pragma('foreign_keys = ON');
  console.log('  dropped all existing objects');
}

function run() {
  const sql = fs.readFileSync(SCHEMA_FILE, 'utf8');
  const checksum = crypto.createHash('sha256').update(sql).digest('hex').slice(0, 16);

  if (FRESH) {
    console.log('Migrating (fresh rebuild)...');
    dropEverything();
  } else {
    console.log('Migrating...');
  }

  ensureMigrationsTable();

  const already = db
    .prepare('SELECT checksum FROM schema_migrations WHERE name = ?')
    .get('schema.sql');

  if (already && already.checksum === checksum && tableExists('tickets')) {
    console.log('  schema.sql already applied (checksum ' + checksum + ') - nothing to do');
    console.log('  run with --fresh to rebuild from scratch');
    return;
  }

  if (already && already.checksum !== checksum) {
    console.error(
      '\n  schema.sql changed since it was applied.\n' +
        '  Re-run with --fresh to rebuild (this erases data):\n' +
        '    npm run reset\n'
    );
    process.exitCode = 1;
    return;
  }

  // better-sqlite3 exec() runs the whole script; it is implicitly atomic
  // per statement, so wrap it to get all-or-nothing.
  db.exec('BEGIN');
  try {
    db.exec(sql);
    db.prepare(
      'INSERT OR REPLACE INTO schema_migrations (name, checksum) VALUES (?, ?)'
    ).run('schema.sql', checksum);
    db.exec('COMMIT');
  } catch (err) {
    db.exec('ROLLBACK');
    throw err;
  }

  const counts = db
    .prepare(
      `SELECT
         (SELECT COUNT(*) FROM sqlite_master WHERE type='table'  AND name NOT LIKE 'sqlite_%') AS tables,
         (SELECT COUNT(*) FROM sqlite_master WHERE type='index'  AND name NOT LIKE 'sqlite_%') AS indexes,
         (SELECT COUNT(*) FROM sqlite_master WHERE type='view')   AS views,
         (SELECT COUNT(*) FROM sqlite_master WHERE type='trigger') AS triggers`
    )
    .get();

  console.log(
    `  applied: ${counts.tables} tables, ${counts.indexes} indexes, ` +
      `${counts.views} views, ${counts.triggers} triggers`
  );
  console.log('  next: npm run seed');
}

if (require.main === module) {
  try {
    run();
  } catch (err) {
    console.error('Migration failed:', err.message);
    process.exit(1);
  }
}

module.exports = { run };
