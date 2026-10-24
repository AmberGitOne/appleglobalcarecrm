'use strict';
/** Small HTTP helpers: typed errors and an async wrapper. */

class HttpError extends Error {
  constructor(status, message, details) {
    super(message);
    this.status = status;
    this.details = details;
  }
}

const badRequest = (m, d) => new HttpError(400, m, d);
const unauthorized = (m = 'Sign in required') => new HttpError(401, m);
const forbidden = (m = 'Not allowed') => new HttpError(403, m);
const notFound = (m = 'Not found') => new HttpError(404, m);
const conflict = (m, d) => new HttpError(409, m, d);

/** Wrap a route handler so a thrown/rejected error reaches the error middleware. */
const wrap = (fn) => (req, res, next) => {
  try {
    const out = fn(req, res, next);
    if (out && typeof out.catch === 'function') out.catch(next);
  } catch (err) {
    next(err);
  }
};

/** Parse ?limit= and ?page= into a safe LIMIT/OFFSET pair. */
function pagination(query, defaultLimit = 50, maxLimit = 500) {
  let limit = parseInt(query.limit, 10);
  if (!Number.isFinite(limit) || limit <= 0) limit = defaultLimit;
  limit = Math.min(limit, maxLimit);

  let page = parseInt(query.page, 10);
  if (!Number.isFinite(page) || page < 1) page = 1;

  return { limit, offset: (page - 1) * limit, page };
}

module.exports = {
  HttpError, badRequest, unauthorized, forbidden, notFound, conflict,
  wrap, pagination,
};
