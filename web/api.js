/**
 * API client - replaces the prototype's localStorage persistence.
 *
 * Loaded before app.js. It fetches the application state once over HTTP,
 * hands it to the app, and writes changes back to the server. Saves are
 * debounced and serialised: the UI calls save() freely (it does so on almost
 * every interaction), and this batches those calls into one PUT.
 *
 * Exposes window.CRM.
 */
(function () {
  'use strict';

  var API = '/api';
  var SAVE_DELAY = 350;        // ms of quiet before a save goes out
  var state = null;
  var booted = false;
  var bootError = null;
  var queue = [];              // callbacks waiting for the first load

  var saveTimer = null;
  var inFlight = false;
  var pendingAgain = false;
  var lastError = null;

  // -------------------------------------------------------------------
  // transport
  // -------------------------------------------------------------------

  function request(method, path, body, opts) {
    var init = {
      method: method,
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' }
    };
    if (body !== undefined) init.body = JSON.stringify(body);
    if (opts && opts.keepalive) init.keepalive = true;

    var token = null;
    try { token = window.localStorage.getItem('aglc-token'); } catch (e) {}
    if (token) init.headers.Authorization = 'Bearer ' + token;

    return fetch(API + path, init).then(function (res) {
      var isJson = (res.headers.get('content-type') || '').indexOf('json') >= 0;
      return (isJson ? res.json() : res.text()).then(function (payload) {
        if (!res.ok) {
          var msg = (payload && payload.error) || res.status + ' ' + res.statusText;
          var err = new Error(msg);
          err.status = res.status;
          err.payload = payload;
          throw err;
        }
        return payload;
      });
    });
  }

  // -------------------------------------------------------------------
  // status pill - tells the user whether their work is actually saved
  // -------------------------------------------------------------------

  var pill = null;
  function status(text, kind) {
    if (!pill) {
      pill = document.createElement('div');
      pill.id = 'crm-sync';
      pill.setAttribute('role', 'status');
      pill.style.cssText = [
        'position:fixed', 'right:14px', 'bottom:14px', 'z-index:9999',
        'font:500 12px/1 Inter,system-ui,sans-serif', 'padding:7px 11px',
        'border-radius:999px', 'pointer-events:none',
        'transition:opacity .25s', 'opacity:0'
      ].join(';');
      document.body.appendChild(pill);
    }
    var palette = {
      saving: ['#eef2f8', '#55637a'],
      saved: ['#e7f5ec', '#1c7a52'],
      error: ['#fde8e8', '#b42318']
    }[kind] || ['#eef2f8', '#55637a'];
    pill.style.background = palette[0];
    pill.style.color = palette[1];
    pill.textContent = text;
    pill.style.opacity = '1';
    clearTimeout(pill._h);
    if (kind !== 'error') {
      pill._h = setTimeout(function () { pill.style.opacity = '0'; }, 1400);
    }
  }

  function notify(message) {
    if (typeof window.toast === 'function') window.toast(message);
    else status(message, 'error');
  }

  // -------------------------------------------------------------------
  // boot
  // -------------------------------------------------------------------

  function bootstrap() {
    return request('GET', '/state').then(function (res) {
      state = res.data;
      booted = true;
      bootError = null;
      flushQueue();
      return state;
    }).catch(function (err) {
      // 401 means the server has REQUIRE_AUTH on and we have no valid token.
      // That is not a failure - it is a prompt to sign in.
      if (err.status === 401) {
        try { window.localStorage.removeItem('aglc-token'); } catch (e) {}
        return showLogin().then(bootstrap);
      }
      bootError = err;
      booted = true;
      console.error('[CRM] could not load state from the server:', err);
      showFatal(err);
      throw err;
    });
  }

  // -------------------------------------------------------------------
  // sign-in overlay - only ever shown when the server demands a token
  // -------------------------------------------------------------------

  function showLogin() {
    return new Promise(function (resolve) {
      var wrap = document.createElement('div');
      wrap.id = 'crm-login';
      wrap.style.cssText = [
        'position:fixed', 'inset:0', 'z-index:10000', 'display:flex',
        'align-items:center', 'justify-content:center', 'padding:24px',
        'background:#14338f',
        'font:400 14px/1.5 Inter,system-ui,-apple-system,sans-serif'
      ].join(';');

      wrap.innerHTML =
        '<form id="crm-login-form" autocomplete="on" style="background:#fff;border-radius:14px;' +
        'width:380px;max-width:100%;padding:30px 32px;box-shadow:0 24px 60px -12px rgba(5,12,40,.5)">' +
          '<div style="font-size:17px;font-weight:700;color:#0f1b2a;margin-bottom:4px">' +
            'Apple Globalcare</div>' +
          '<div style="font-size:13px;color:#6b7a90;margin-bottom:22px">Sign in to continue</div>' +

          '<label for="crm-email" style="display:block;font-size:12px;font-weight:600;' +
            'color:#55637a;margin-bottom:5px">Email</label>' +
          '<input id="crm-email" name="username" type="email" required autocomplete="username" ' +
            'style="width:100%;box-sizing:border-box;padding:9px 11px;border:1px solid #d4dbe6;' +
            'border-radius:8px;font:inherit;font-size:13.5px;margin-bottom:14px;outline:0">' +

          '<label for="crm-pass" style="display:block;font-size:12px;font-weight:600;' +
            'color:#55637a;margin-bottom:5px">Password</label>' +
          '<input id="crm-pass" name="password" type="password" required autocomplete="current-password" ' +
            'style="width:100%;box-sizing:border-box;padding:9px 11px;border:1px solid #d4dbe6;' +
            'border-radius:8px;font:inherit;font-size:13.5px;margin-bottom:6px;outline:0">' +

          '<div id="crm-login-err" style="min-height:17px;font-size:12px;color:#b42318;' +
            'margin-bottom:10px"></div>' +

          '<button id="crm-login-go" type="submit" style="width:100%;padding:10px;border:0;' +
            'border-radius:8px;background:#1d4ed8;color:#fff;font:inherit;font-size:14px;' +
            'font-weight:600;cursor:pointer">Sign in</button>' +
        '</form>';

      document.body.appendChild(wrap);

      var form = wrap.querySelector('#crm-login-form');
      var email = wrap.querySelector('#crm-email');
      var pass = wrap.querySelector('#crm-pass');
      var errBox = wrap.querySelector('#crm-login-err');
      var button = wrap.querySelector('#crm-login-go');

      email.focus();

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        errBox.textContent = '';
        button.disabled = true;
        button.textContent = 'Signing in…';

        request('POST', '/auth/login', {
          email: email.value.trim(),
          password: pass.value
        }).then(function (res) {
          try { window.localStorage.setItem('aglc-token', res.token); } catch (e) {}
          wrap.remove();
          resolve(res.user);
        }).catch(function (err) {
          button.disabled = false;
          button.textContent = 'Sign in';
          errBox.textContent = err.status === 401
            ? 'Email or password is incorrect.'
            : err.message;
          pass.select();
        });
      });
    });
  }

  function showFatal(err) {
    var box = document.createElement('div');
    box.style.cssText = [
      'position:fixed', 'inset:0', 'z-index:10000', 'display:flex',
      'align-items:center', 'justify-content:center', 'padding:24px',
      'background:rgba(15,27,42,.72)',
      'font:400 14px/1.55 Inter,system-ui,sans-serif'
    ].join(';');
    box.innerHTML =
      '<div style="background:#fff;border-radius:14px;max-width:520px;padding:26px 28px;' +
      'box-shadow:0 24px 60px -12px rgba(10,20,60,.45)">' +
      '<h2 style="margin:0 0 10px;font-size:17px;color:#0f1b2a">Cannot reach the server</h2>' +
      '<p style="margin:0 0 12px;color:#55637a">' +
      'The app loads its data from the API, so it needs the server running.</p>' +
      '<pre style="margin:0 0 14px;background:#f4f6f9;padding:10px 12px;border-radius:8px;' +
      'font-size:12px;color:#b42318;white-space:pre-wrap">' + String(err.message) + '</pre>' +
      '<p style="margin:0;color:#55637a">Start it with <code style="background:#f4f6f9;' +
      'padding:2px 6px;border-radius:5px">npm start</code>, then reload this page.</p>' +
      '</div>';
    document.body.appendChild(box);
  }

  function flushQueue() {
    var fns = queue.slice();
    queue.length = 0;
    for (var i = 0; i < fns.length; i++) {
      try { fns[i](state); } catch (e) { console.error('[CRM] ready callback failed:', e); }
    }
  }

  // -------------------------------------------------------------------
  // saving
  // -------------------------------------------------------------------

  function doSave() {
    if (inFlight) { pendingAgain = true; return; }
    if (!state) return;

    inFlight = true;
    status('Saving…', 'saving');

    request('PUT', '/state', state).then(function (res) {
      inFlight = false;
      lastError = null;
      if (res && res.changed) {
        var n = res.summary ? res.summary.rows : 0;
        status('Saved' + (n ? ' · ' + n + (n === 1 ? ' row' : ' rows') : ''), 'saved');
      } else {
        status('No changes', 'saved');
      }
      if (pendingAgain) { pendingAgain = false; doSave(); }
    }).catch(function (err) {
      inFlight = false;
      lastError = err;

      // The session lapsed mid-session. Ask for credentials and retry the
      // save, so the user does not lose the edit they just made.
      if (err.status === 401) {
        try { window.localStorage.removeItem('aglc-token'); } catch (e) {}
        status('Session expired — sign in again', 'error');
        showLogin().then(function () { doSave(); });
        return;
      }

      status('Not saved — ' + err.message, 'error');
      console.error('[CRM] save failed:', err);
    });
  }

  function scheduleSave() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(doSave, SAVE_DELAY);
  }

  // Try not to lose the last edit when the tab closes.
  window.addEventListener('beforeunload', function () {
    if (!saveTimer && !pendingAgain) return;
    clearTimeout(saveTimer);
    if (!state) return;
    try {
      request('PUT', '/state', state, { keepalive: true });
    } catch (e) { /* best effort */ }
  });

  // -------------------------------------------------------------------
  // public surface
  // -------------------------------------------------------------------

  window.CRM = {
    /** The live state object. app.js mutates this in place. */
    get state() { return state; },
    set state(v) { state = v; },

    /** Run fn once the state has arrived (immediately if it already has). */
    ready: function (fn) {
      if (booted && !bootError) fn(state);
      else if (booted && bootError) return;       // fatal screen is already up
      else queue.push(fn);
    },

    /** Called by the app's save(). Debounced; the newest state always wins. */
    save: function (next) {
      if (next) state = next;
      scheduleSave();
    },

    /** Force an immediate write and resolve when the server confirms it. */
    flush: function () {
      clearTimeout(saveTimer);
      return request('PUT', '/state', state);
    },

    /** Reload from the database, discarding anything unsaved. */
    reload: function () {
      return request('GET', '/state').then(function (res) {
        state = res.data;
        return state;
      });
    },

    /** Re-seed the demo data server-side and adopt the fresh state. */
    reset: function () {
      clearTimeout(saveTimer);
      status('Resetting…', 'saving');
      return request('POST', '/state/reset').then(function (res) {
        state = res.data;
        status('Demo data reset', 'saved');
        return state;
      }).catch(function (err) {
        status('Reset failed — ' + err.message, 'error');
        notify('Reset failed: ' + err.message);
        throw err;
      });
    },

    /** Generic access to the REST resources, for anything beyond state. */
    get: function (path, params) {
      var qs = '';
      if (params) {
        var parts = [];
        for (var k in params) {
          if (params[k] === undefined || params[k] === '') continue;
          parts.push(encodeURIComponent(k) + '=' + encodeURIComponent(params[k]));
        }
        if (parts.length) qs = '?' + parts.join('&');
      }
      return request('GET', path + qs);
    },
    post: function (path, body) { return request('POST', path, body); },
    patch: function (path, body) { return request('PATCH', path, body); },
    del: function (path) { return request('DELETE', path); },

    status: status,
    lastError: function () { return lastError; }
  };

  // Kick the load off straight away; app.js waits on CRM.ready().
  bootstrap();
})();
