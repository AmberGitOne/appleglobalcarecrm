#!/bin/sh
# Prepare the database, then hand over to the server.
#
# bootstrap.js applies the schema and seeds only when the database has no
# users, so this is safe to run on every container start: a redeploy never
# wipes data sitting on the mounted volume.

set -e

mkdir -p "$(dirname "${DB_FILE:-/app/data/crm.db}")"

node server/db/bootstrap.js

exec "$@"
