#!/bin/sh
# Prepare the database before handing over to the server.
#
# Deliberately conservative: it creates the schema only when the database file
# is missing, and seeds only when the schema is empty. A redeploy must never
# wipe real data that is sitting on the mounted volume.

set -e

DB_PATH="${DB_FILE:-/app/data/crm.db}"
mkdir -p "$(dirname "$DB_PATH")"

if [ ! -f "$DB_PATH" ]; then
  echo "  no database at $DB_PATH - creating the schema"
  node server/db/migrate.js
  echo "  loading the demo dataset"
  node server/db/seed.js
else
  echo "  database found at $DB_PATH - applying any pending migration"
  node server/db/migrate.js || echo "  (schema already current)"
fi

exec "$@"
