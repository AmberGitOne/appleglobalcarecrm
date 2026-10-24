'use strict';
/**
 * Production boot step: make sure the database is usable, then get out of
 * the way.
 *
 *   node server/db/bootstrap.js && node server/index.js
 *
 * Runs on every deploy, so it has to be safe to run against a database that
 * already holds real records:
 *
 *   - applies the schema when it is missing
 *   - seeds the demo data ONLY when the database has no users, because a
 *     deployment with no users and REQUIRE_AUTH=true is one nobody can sign
 *     into
 *   - does nothing at all when data is already present
 *
 * Seeding truncates every data table, so the "no users" guard is what stops
 * a redeploy from wiping a live system.
 */

const { db, tableExists, DB_FILE } = require('./index');

function hasRows(table) {
  if (!tableExists(table)) return false;
  return db.prepare(`SELECT COUNT(*) AS n FROM ${table}`).get().n > 0;
}

function main() {
  console.log(`  database: ${DB_FILE}`);

  if (!tableExists('tickets') || !tableExists('users')) {
    console.log('  no schema found - creating it');
    require('./migrate').run();
  } else {
    // Keeps an existing deployment current when schema.sql moves forward.
    try {
      require('./migrate').run();
    } catch (err) {
      console.error('  migration failed:', err.message);
      process.exit(1);
    }
  }

  if (hasRows('users')) {
    const counts = db.prepare(`
      SELECT (SELECT COUNT(*) FROM users)   AS users,
             (SELECT COUNT(*) FROM tickets) AS tickets,
             (SELECT COUNT(*) FROM orders)  AS orders
    `).get();
    console.log(
      `  existing data found (${counts.users} users, ${counts.tickets} tickets, ` +
      `${counts.orders} orders) - leaving it untouched`
    );
    return;
  }

  console.log('  database has no users - loading the demo dataset');
  const { seed } = require('./seed');
  db.transaction(seed)();
}

if (require.main === module) {
  try {
    main();
  } catch (err) {
    console.error('Bootstrap failed:', err.message);
    process.exit(1);
  }
}

module.exports = { main };
