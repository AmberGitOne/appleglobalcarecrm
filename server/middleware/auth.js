'use strict';
/**
 * Authentication and role-based access control.
 *
 * Auth is wired up and usable, but not forced: REQUIRE_AUTH=false (the
 * default) lets the browser app run without a login wall, which is what the
 * prototype expects. Set REQUIRE_AUTH=true in .env to lock the API down -
 * every route then needs a bearer token or session cookie.
 */

const jwt = require('jsonwebtoken');
const { db } = require('../db');
const { unauthorized, forbidden } = require('../lib/http');

const SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';
const TTL = process.env.TOKEN_TTL || '12h';
const REQUIRE_AUTH = String(process.env.REQUIRE_AUTH || 'false').toLowerCase() === 'true';

const selUser = db.prepare(`
  SELECT u.id, u.email, u.name, u.role_id, u.desk, u.job_title, u.grade, u.avatar, u.active,
         r.name AS role_name
  FROM users u JOIN roles r ON r.id = u.role_id
  WHERE u.id = ?
`);

const selPerms = db.prepare(
  'SELECT permission_id FROM role_permissions WHERE role_id = ?'
);

function sign(user) {
  return jwt.sign(
    { sub: user.id, email: user.email, name: user.name, role: user.role_id },
    SECRET,
    { expiresIn: TTL }
  );
}

function permissionsFor(roleId) {
  return selPerms.all(roleId).map((r) => r.permission_id);
}

/** The default identity used when auth is not enforced. */
function fallbackUser() {
  const row = db
    .prepare("SELECT id FROM users WHERE role_id = 'role-admin' ORDER BY id LIMIT 1")
    .get();
  return row ? hydrate(row.id) : null;
}

function hydrate(userId) {
  const u = selUser.get(userId);
  if (!u || !u.active) return null;
  u.permissions = permissionsFor(u.role_id);
  return u;
}

function readToken(req) {
  const header = req.get('authorization') || '';
  if (header.toLowerCase().startsWith('bearer ')) return header.slice(7).trim();
  if (req.cookies && req.cookies.token) return req.cookies.token;
  return null;
}

/**
 * Populates req.user when a valid token is present. Rejects only when
 * REQUIRE_AUTH is on - otherwise it falls back to the admin identity so the
 * UI keeps working and the audit trail still gets a name.
 */
function authenticate(req, res, next) {
  const token = readToken(req);

  if (token) {
    try {
      const payload = jwt.verify(token, SECRET);
      const user = hydrate(payload.sub);
      if (user) {
        req.user = user;
        return next();
      }
    } catch (_) {
      if (REQUIRE_AUTH) return next(unauthorized('Session expired, sign in again'));
    }
  }

  if (REQUIRE_AUTH) return next(unauthorized());

  req.user = fallbackUser();
  next();
}

/** Guard a route: requires(['tickets:update']) */
function requires(...needed) {
  const list = needed.flat();
  return (req, res, next) => {
    if (!REQUIRE_AUTH) return next();
    if (!req.user) return next(unauthorized());
    const held = new Set(req.user.permissions || []);
    const missing = list.filter((p) => !held.has(p));
    if (missing.length) {
      return next(forbidden(`Your role lacks: ${missing.join(', ')}`));
    }
    next();
  };
}

module.exports = {
  authenticate, requires, sign, hydrate, permissionsFor,
  REQUIRE_AUTH, SECRET,
};
