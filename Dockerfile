# Apple Globalcare CRM
#
# Runs anywhere that gives a container a persistent volume:
# Render, Railway, Fly.io, a VPS, Docker Desktop.
#
#   docker build -t aglc-crm .
#   docker run -p 4000:4000 -v aglc-data:/app/data aglc-crm
#
# The volume matters: the SQLite database lives in /app/data, and without a
# volume every container restart would reset it to the seeded demo data.

FROM node:22-slim

WORKDIR /app

ENV NODE_ENV=production \
    PORT=4000 \
    DB_FILE=/app/data/crm.db

# Install dependencies first so this layer caches across code changes.
# ignore-scripts uses better-sqlite3's bundled prebuild instead of compiling,
# so no build toolchain is needed in the image.
COPY package.json package-lock.json .npmrc ./
RUN npm ci --omit=dev --ignore-scripts --no-audit --no-fund

COPY server ./server
COPY web ./web
COPY scripts ./scripts
COPY data/seed.json data/desks.json ./data/

# Create the schema and load the demo data on first boot only; on later boots
# the existing database is left exactly as it is.
COPY docker-entrypoint.sh ./
RUN chmod +x docker-entrypoint.sh

EXPOSE 4000

HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD node -e "fetch('http://localhost:'+(process.env.PORT||4000)+'/api/health').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["node", "server/index.js"]
