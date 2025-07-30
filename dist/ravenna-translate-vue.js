function Je(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Et } = Object.prototype, { getPrototypeOf: Se } = Object, { iterator: oe, toStringTag: $e } = Symbol, ie = /* @__PURE__ */ ((e) => (t) => {
  const n = Et.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), k = (e) => (e = e.toLowerCase(), (t) => ie(t) === e), ae = (e) => (t) => typeof t === e, { isArray: W } = Array, G = ae("undefined");
function Rt(e) {
  return e !== null && !G(e) && e.constructor !== null && !G(e.constructor) && v(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const We = k("ArrayBuffer");
function St(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && We(e.buffer), t;
}
const gt = ae("string"), v = ae("function"), Ve = ae("number"), ce = (e) => e !== null && typeof e == "object", Ot = (e) => e === !0 || e === !1, ee = (e) => {
  if (ie(e) !== "object")
    return !1;
  const t = Se(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !($e in e) && !(oe in e);
}, At = k("Date"), Tt = k("File"), Ft = k("Blob"), _t = k("FileList"), Ct = (e) => ce(e) && v(e.pipe), Nt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || v(e.append) && ((t = ie(e)) === "formdata" || // detect form-data instance
  t === "object" && v(e.toString) && e.toString() === "[object FormData]"));
}, Pt = k("URLSearchParams"), [Bt, Ut, Dt, vt] = ["ReadableStream", "Request", "Response", "Headers"].map(k), Lt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Y(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), W(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const u = n ? Object.getOwnPropertyNames(e) : Object.keys(e), l = u.length;
    let h;
    for (r = 0; r < l; r++)
      h = u[r], t.call(null, e[h], h, e);
  }
}
function Ke(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const H = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Xe = (e) => !G(e) && e !== H;
function ye() {
  const { caseless: e } = Xe(this) && this || {}, t = {}, n = (r, o) => {
    const u = e && Ke(t, o) || o;
    ee(t[u]) && ee(r) ? t[u] = ye(t[u], r) : ee(r) ? t[u] = ye({}, r) : W(r) ? t[u] = r.slice() : t[u] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Y(arguments[r], n);
  return t;
}
const jt = (e, t, n, { allOwnKeys: r } = {}) => (Y(t, (o, u) => {
  n && v(o) ? e[u] = Je(o, n) : e[u] = o;
}, { allOwnKeys: r }), e), kt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Mt = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, qt = (e, t, n, r) => {
  let o, u, l;
  const h = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), u = o.length; u-- > 0; )
      l = o[u], (!r || r(l, e, t)) && !h[l] && (t[l] = e[l], h[l] = !0);
    e = n !== !1 && Se(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, It = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Ht = (e) => {
  if (!e) return null;
  if (W(e)) return e;
  let t = e.length;
  if (!Ve(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, zt = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Se(Uint8Array)), Jt = (e, t) => {
  const r = (e && e[oe]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const u = o.value;
    t.call(e, u[0], u[1]);
  }
}, $t = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Wt = k("HTMLFormElement"), Vt = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), Fe = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Kt = k("RegExp"), Ge = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Y(n, (o, u) => {
    let l;
    (l = t(o, u, e)) !== !1 && (r[u] = l || o);
  }), Object.defineProperties(e, r);
}, Xt = (e) => {
  Ge(e, (t, n) => {
    if (v(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (v(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Gt = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((u) => {
      n[u] = !0;
    });
  };
  return W(e) ? r(e) : r(String(e).split(t)), n;
}, Yt = () => {
}, Zt = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Qt(e) {
  return !!(e && v(e.append) && e[$e] === "FormData" && e[oe]);
}
const en = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (ce(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const u = W(r) ? [] : {};
        return Y(r, (l, h) => {
          const w = n(l, o + 1);
          !G(w) && (u[h] = w);
        }), t[o] = void 0, u;
      }
    }
    return r;
  };
  return n(e, 0);
}, tn = k("AsyncFunction"), nn = (e) => e && (ce(e) || v(e)) && v(e.then) && v(e.catch), Ye = ((e, t) => e ? setImmediate : t ? ((n, r) => (H.addEventListener("message", ({ source: o, data: u }) => {
  o === H && u === n && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), H.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  v(H.postMessage)
), rn = typeof queueMicrotask < "u" ? queueMicrotask.bind(H) : typeof process < "u" && process.nextTick || Ye, sn = (e) => e != null && v(e[oe]), f = {
  isArray: W,
  isArrayBuffer: We,
  isBuffer: Rt,
  isFormData: Nt,
  isArrayBufferView: St,
  isString: gt,
  isNumber: Ve,
  isBoolean: Ot,
  isObject: ce,
  isPlainObject: ee,
  isReadableStream: Bt,
  isRequest: Ut,
  isResponse: Dt,
  isHeaders: vt,
  isUndefined: G,
  isDate: At,
  isFile: Tt,
  isBlob: Ft,
  isRegExp: Kt,
  isFunction: v,
  isStream: Ct,
  isURLSearchParams: Pt,
  isTypedArray: zt,
  isFileList: _t,
  forEach: Y,
  merge: ye,
  extend: jt,
  trim: Lt,
  stripBOM: kt,
  inherits: Mt,
  toFlatObject: qt,
  kindOf: ie,
  kindOfTest: k,
  endsWith: It,
  toArray: Ht,
  forEachEntry: Jt,
  matchAll: $t,
  isHTMLForm: Wt,
  hasOwnProperty: Fe,
  hasOwnProp: Fe,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ge,
  freezeMethods: Xt,
  toObjectSet: Gt,
  toCamelCase: Vt,
  noop: Yt,
  toFiniteNumber: Zt,
  findKey: Ke,
  global: H,
  isContextDefined: Xe,
  isSpecCompliantForm: Qt,
  toJSONObject: en,
  isAsyncFn: tn,
  isThenable: nn,
  setImmediate: Ye,
  asap: rn,
  isIterable: sn
};
function O(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
f.inherits(O, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: f.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Ze = O.prototype, Qe = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Qe[e] = { value: e };
});
Object.defineProperties(O, Qe);
Object.defineProperty(Ze, "isAxiosError", { value: !0 });
O.from = (e, t, n, r, o, u) => {
  const l = Object.create(Ze);
  return f.toFlatObject(e, l, function(w) {
    return w !== Error.prototype;
  }, (h) => h !== "isAxiosError"), O.call(l, e.message, t, n, r, o), l.cause = e, l.name = e.name, u && Object.assign(l, u), l;
};
const on = null;
function be(e) {
  return f.isPlainObject(e) || f.isArray(e);
}
function et(e) {
  return f.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function _e(e, t, n) {
  return e ? e.concat(t).map(function(o, u) {
    return o = et(o), !n && u ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function an(e) {
  return f.isArray(e) && !e.some(be);
}
const cn = f.toFlatObject(f, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function le(e, t, n) {
  if (!f.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = f.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, E) {
    return !f.isUndefined(E[g]);
  });
  const r = n.metaTokens, o = n.visitor || m, u = n.dots, l = n.indexes, w = (n.Blob || typeof Blob < "u" && Blob) && f.isSpecCompliantForm(t);
  if (!f.isFunction(o))
    throw new TypeError("visitor must be a function");
  function d(b) {
    if (b === null) return "";
    if (f.isDate(b))
      return b.toISOString();
    if (f.isBoolean(b))
      return b.toString();
    if (!w && f.isBlob(b))
      throw new O("Blob is not supported. Use a Buffer instead.");
    return f.isArrayBuffer(b) || f.isTypedArray(b) ? w && typeof Blob == "function" ? new Blob([b]) : Buffer.from(b) : b;
  }
  function m(b, g, E) {
    let F = b;
    if (b && !E && typeof b == "object") {
      if (f.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), b = JSON.stringify(b);
      else if (f.isArray(b) && an(b) || (f.isFileList(b) || f.endsWith(g, "[]")) && (F = f.toArray(b)))
        return g = et(g), F.forEach(function(N, j) {
          !(f.isUndefined(N) || N === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            l === !0 ? _e([g], j, u) : l === null ? g : g + "[]",
            d(N)
          );
        }), !1;
    }
    return be(b) ? !0 : (t.append(_e(E, g, u), d(b)), !1);
  }
  const x = [], A = Object.assign(cn, {
    defaultVisitor: m,
    convertValue: d,
    isVisitable: be
  });
  function T(b, g) {
    if (!f.isUndefined(b)) {
      if (x.indexOf(b) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      x.push(b), f.forEach(b, function(F, _) {
        (!(f.isUndefined(F) || F === null) && o.call(
          t,
          F,
          f.isString(_) ? _.trim() : _,
          g,
          A
        )) === !0 && T(F, g ? g.concat(_) : [_]);
      }), x.pop();
    }
  }
  if (!f.isObject(e))
    throw new TypeError("data must be an object");
  return T(e), t;
}
function Ce(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function ge(e, t) {
  this._pairs = [], e && le(e, this, t);
}
const tt = ge.prototype;
tt.append = function(t, n) {
  this._pairs.push([t, n]);
};
tt.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Ce);
  } : Ce;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function ln(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function nt(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || ln;
  f.isFunction(n) && (n = {
    serialize: n
  });
  const o = n && n.serialize;
  let u;
  if (o ? u = o(t, n) : u = f.isURLSearchParams(t) ? t.toString() : new ge(t, n).toString(r), u) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + u;
  }
  return e;
}
class Ne {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    f.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const rt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, un = typeof URLSearchParams < "u" ? URLSearchParams : ge, fn = typeof FormData < "u" ? FormData : null, dn = typeof Blob < "u" ? Blob : null, hn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: un,
    FormData: fn,
    Blob: dn
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Oe = typeof window < "u" && typeof document < "u", we = typeof navigator == "object" && navigator || void 0, pn = Oe && (!we || ["ReactNative", "NativeScript", "NS"].indexOf(we.product) < 0), mn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", yn = Oe && window.location.href || "http://localhost", bn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Oe,
  hasStandardBrowserEnv: pn,
  hasStandardBrowserWebWorkerEnv: mn,
  navigator: we,
  origin: yn
}, Symbol.toStringTag, { value: "Module" })), U = {
  ...bn,
  ...hn
};
function wn(e, t) {
  return le(e, new U.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, u) {
      return U.isNode && f.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : u.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function xn(e) {
  return f.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function En(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let u;
  for (r = 0; r < o; r++)
    u = n[r], t[u] = e[u];
  return t;
}
function st(e) {
  function t(n, r, o, u) {
    let l = n[u++];
    if (l === "__proto__") return !0;
    const h = Number.isFinite(+l), w = u >= n.length;
    return l = !l && f.isArray(o) ? o.length : l, w ? (f.hasOwnProp(o, l) ? o[l] = [o[l], r] : o[l] = r, !h) : ((!o[l] || !f.isObject(o[l])) && (o[l] = []), t(n, r, o[l], u) && f.isArray(o[l]) && (o[l] = En(o[l])), !h);
  }
  if (f.isFormData(e) && f.isFunction(e.entries)) {
    const n = {};
    return f.forEachEntry(e, (r, o) => {
      t(xn(r), o, n, 0);
    }), n;
  }
  return null;
}
function Rn(e, t, n) {
  if (f.isString(e))
    try {
      return (t || JSON.parse)(e), f.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Z = {
  transitional: rt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, u = f.isObject(t);
    if (u && f.isHTMLForm(t) && (t = new FormData(t)), f.isFormData(t))
      return o ? JSON.stringify(st(t)) : t;
    if (f.isArrayBuffer(t) || f.isBuffer(t) || f.isStream(t) || f.isFile(t) || f.isBlob(t) || f.isReadableStream(t))
      return t;
    if (f.isArrayBufferView(t))
      return t.buffer;
    if (f.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let h;
    if (u) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return wn(t, this.formSerializer).toString();
      if ((h = f.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const w = this.env && this.env.FormData;
        return le(
          h ? { "files[]": t } : t,
          w && new w(),
          this.formSerializer
        );
      }
    }
    return u || o ? (n.setContentType("application/json", !1), Rn(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Z.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (f.isResponse(t) || f.isReadableStream(t))
      return t;
    if (t && f.isString(t) && (r && !this.responseType || o)) {
      const l = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (h) {
        if (l)
          throw h.name === "SyntaxError" ? O.from(h, O.ERR_BAD_RESPONSE, this, null, this.response) : h;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: U.classes.FormData,
    Blob: U.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
f.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Z.headers[e] = {};
});
const Sn = f.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), gn = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(l) {
    o = l.indexOf(":"), n = l.substring(0, o).trim().toLowerCase(), r = l.substring(o + 1).trim(), !(!n || t[n] && Sn[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Pe = Symbol("internals");
function X(e) {
  return e && String(e).trim().toLowerCase();
}
function te(e) {
  return e === !1 || e == null ? e : f.isArray(e) ? e.map(te) : String(e);
}
function On(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const An = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function de(e, t, n, r, o) {
  if (f.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!f.isString(t)) {
    if (f.isString(r))
      return t.indexOf(r) !== -1;
    if (f.isRegExp(r))
      return r.test(t);
  }
}
function Tn(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Fn(e, t) {
  const n = f.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, u, l) {
        return this[r].call(this, t, o, u, l);
      },
      configurable: !0
    });
  });
}
let L = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function u(h, w, d) {
      const m = X(w);
      if (!m)
        throw new Error("header name must be a non-empty string");
      const x = f.findKey(o, m);
      (!x || o[x] === void 0 || d === !0 || d === void 0 && o[x] !== !1) && (o[x || w] = te(h));
    }
    const l = (h, w) => f.forEach(h, (d, m) => u(d, m, w));
    if (f.isPlainObject(t) || t instanceof this.constructor)
      l(t, n);
    else if (f.isString(t) && (t = t.trim()) && !An(t))
      l(gn(t), n);
    else if (f.isObject(t) && f.isIterable(t)) {
      let h = {}, w, d;
      for (const m of t) {
        if (!f.isArray(m))
          throw TypeError("Object iterator must return a key-value pair");
        h[d = m[0]] = (w = h[d]) ? f.isArray(w) ? [...w, m[1]] : [w, m[1]] : m[1];
      }
      l(h, n);
    } else
      t != null && u(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = X(t), t) {
      const r = f.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return On(o);
        if (f.isFunction(n))
          return n.call(this, o, r);
        if (f.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = X(t), t) {
      const r = f.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || de(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function u(l) {
      if (l = X(l), l) {
        const h = f.findKey(r, l);
        h && (!n || de(r, r[h], h, n)) && (delete r[h], o = !0);
      }
    }
    return f.isArray(t) ? t.forEach(u) : u(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const u = n[r];
      (!t || de(this, this[u], u, t, !0)) && (delete this[u], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return f.forEach(this, (o, u) => {
      const l = f.findKey(r, u);
      if (l) {
        n[l] = te(o), delete n[u];
        return;
      }
      const h = t ? Tn(u) : String(u).trim();
      h !== u && delete n[u], n[h] = te(o), r[h] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return f.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && f.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[Pe] = this[Pe] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function u(l) {
      const h = X(l);
      r[h] || (Fn(o, l), r[h] = !0);
    }
    return f.isArray(t) ? t.forEach(u) : u(t), this;
  }
};
L.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
f.reduceDescriptors(L.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
f.freezeMethods(L);
function he(e, t) {
  const n = this || Z, r = t || n, o = L.from(r.headers);
  let u = r.data;
  return f.forEach(e, function(h) {
    u = h.call(n, u, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), u;
}
function ot(e) {
  return !!(e && e.__CANCEL__);
}
function V(e, t, n) {
  O.call(this, e ?? "canceled", O.ERR_CANCELED, t, n), this.name = "CanceledError";
}
f.inherits(V, O, {
  __CANCEL__: !0
});
function it(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new O(
    "Request failed with status code " + n.status,
    [O.ERR_BAD_REQUEST, O.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function _n(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Cn(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, u = 0, l;
  return t = t !== void 0 ? t : 1e3, function(w) {
    const d = Date.now(), m = r[u];
    l || (l = d), n[o] = w, r[o] = d;
    let x = u, A = 0;
    for (; x !== o; )
      A += n[x++], x = x % e;
    if (o = (o + 1) % e, o === u && (u = (u + 1) % e), d - l < t)
      return;
    const T = m && d - m;
    return T ? Math.round(A * 1e3 / T) : void 0;
  };
}
function Nn(e, t) {
  let n = 0, r = 1e3 / t, o, u;
  const l = (d, m = Date.now()) => {
    n = m, o = null, u && (clearTimeout(u), u = null), e.apply(null, d);
  };
  return [(...d) => {
    const m = Date.now(), x = m - n;
    x >= r ? l(d, m) : (o = d, u || (u = setTimeout(() => {
      u = null, l(o);
    }, r - x)));
  }, () => o && l(o)];
}
const re = (e, t, n = 3) => {
  let r = 0;
  const o = Cn(50, 250);
  return Nn((u) => {
    const l = u.loaded, h = u.lengthComputable ? u.total : void 0, w = l - r, d = o(w), m = l <= h;
    r = l;
    const x = {
      loaded: l,
      total: h,
      progress: h ? l / h : void 0,
      bytes: w,
      rate: d || void 0,
      estimated: d && h && m ? (h - l) / d : void 0,
      event: u,
      lengthComputable: h != null,
      [t ? "download" : "upload"]: !0
    };
    e(x);
  }, n);
}, Be = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Ue = (e) => (...t) => f.asap(() => e(...t)), Pn = U.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, U.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(U.origin),
  U.navigator && /(msie|trident)/i.test(U.navigator.userAgent)
) : () => !0, Bn = U.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, u) {
      const l = [e + "=" + encodeURIComponent(t)];
      f.isNumber(n) && l.push("expires=" + new Date(n).toGMTString()), f.isString(r) && l.push("path=" + r), f.isString(o) && l.push("domain=" + o), u === !0 && l.push("secure"), document.cookie = l.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Un(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Dn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function at(e, t, n) {
  let r = !Un(t);
  return e && (r || n == !1) ? Dn(e, t) : t;
}
const De = (e) => e instanceof L ? { ...e } : e;
function J(e, t) {
  t = t || {};
  const n = {};
  function r(d, m, x, A) {
    return f.isPlainObject(d) && f.isPlainObject(m) ? f.merge.call({ caseless: A }, d, m) : f.isPlainObject(m) ? f.merge({}, m) : f.isArray(m) ? m.slice() : m;
  }
  function o(d, m, x, A) {
    if (f.isUndefined(m)) {
      if (!f.isUndefined(d))
        return r(void 0, d, x, A);
    } else return r(d, m, x, A);
  }
  function u(d, m) {
    if (!f.isUndefined(m))
      return r(void 0, m);
  }
  function l(d, m) {
    if (f.isUndefined(m)) {
      if (!f.isUndefined(d))
        return r(void 0, d);
    } else return r(void 0, m);
  }
  function h(d, m, x) {
    if (x in t)
      return r(d, m);
    if (x in e)
      return r(void 0, d);
  }
  const w = {
    url: u,
    method: u,
    data: u,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    withXSRFToken: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: h,
    headers: (d, m, x) => o(De(d), De(m), x, !0)
  };
  return f.forEach(Object.keys(Object.assign({}, e, t)), function(m) {
    const x = w[m] || o, A = x(e[m], t[m], m);
    f.isUndefined(A) && x !== h || (n[m] = A);
  }), n;
}
const ct = (e) => {
  const t = J({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: u, headers: l, auth: h } = t;
  t.headers = l = L.from(l), t.url = nt(at(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), h && l.set(
    "Authorization",
    "Basic " + btoa((h.username || "") + ":" + (h.password ? unescape(encodeURIComponent(h.password)) : ""))
  );
  let w;
  if (f.isFormData(n)) {
    if (U.hasStandardBrowserEnv || U.hasStandardBrowserWebWorkerEnv)
      l.setContentType(void 0);
    else if ((w = l.getContentType()) !== !1) {
      const [d, ...m] = w ? w.split(";").map((x) => x.trim()).filter(Boolean) : [];
      l.setContentType([d || "multipart/form-data", ...m].join("; "));
    }
  }
  if (U.hasStandardBrowserEnv && (r && f.isFunction(r) && (r = r(t)), r || r !== !1 && Pn(t.url))) {
    const d = o && u && Bn.read(u);
    d && l.set(o, d);
  }
  return t;
}, vn = typeof XMLHttpRequest < "u", Ln = vn && function(e) {
  return new Promise(function(n, r) {
    const o = ct(e);
    let u = o.data;
    const l = L.from(o.headers).normalize();
    let { responseType: h, onUploadProgress: w, onDownloadProgress: d } = o, m, x, A, T, b;
    function g() {
      T && T(), b && b(), o.cancelToken && o.cancelToken.unsubscribe(m), o.signal && o.signal.removeEventListener("abort", m);
    }
    let E = new XMLHttpRequest();
    E.open(o.method.toUpperCase(), o.url, !0), E.timeout = o.timeout;
    function F() {
      if (!E)
        return;
      const N = L.from(
        "getAllResponseHeaders" in E && E.getAllResponseHeaders()
      ), B = {
        data: !h || h === "text" || h === "json" ? E.responseText : E.response,
        status: E.status,
        statusText: E.statusText,
        headers: N,
        config: e,
        request: E
      };
      it(function(q) {
        n(q), g();
      }, function(q) {
        r(q), g();
      }, B), E = null;
    }
    "onloadend" in E ? E.onloadend = F : E.onreadystatechange = function() {
      !E || E.readyState !== 4 || E.status === 0 && !(E.responseURL && E.responseURL.indexOf("file:") === 0) || setTimeout(F);
    }, E.onabort = function() {
      E && (r(new O("Request aborted", O.ECONNABORTED, e, E)), E = null);
    }, E.onerror = function() {
      r(new O("Network Error", O.ERR_NETWORK, e, E)), E = null;
    }, E.ontimeout = function() {
      let j = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const B = o.transitional || rt;
      o.timeoutErrorMessage && (j = o.timeoutErrorMessage), r(new O(
        j,
        B.clarifyTimeoutError ? O.ETIMEDOUT : O.ECONNABORTED,
        e,
        E
      )), E = null;
    }, u === void 0 && l.setContentType(null), "setRequestHeader" in E && f.forEach(l.toJSON(), function(j, B) {
      E.setRequestHeader(B, j);
    }), f.isUndefined(o.withCredentials) || (E.withCredentials = !!o.withCredentials), h && h !== "json" && (E.responseType = o.responseType), d && ([A, b] = re(d, !0), E.addEventListener("progress", A)), w && E.upload && ([x, T] = re(w), E.upload.addEventListener("progress", x), E.upload.addEventListener("loadend", T)), (o.cancelToken || o.signal) && (m = (N) => {
      E && (r(!N || N.type ? new V(null, e, E) : N), E.abort(), E = null);
    }, o.cancelToken && o.cancelToken.subscribe(m), o.signal && (o.signal.aborted ? m() : o.signal.addEventListener("abort", m)));
    const _ = _n(o.url);
    if (_ && U.protocols.indexOf(_) === -1) {
      r(new O("Unsupported protocol " + _ + ":", O.ERR_BAD_REQUEST, e));
      return;
    }
    E.send(u || null);
  });
}, jn = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), o;
    const u = function(d) {
      if (!o) {
        o = !0, h();
        const m = d instanceof Error ? d : this.reason;
        r.abort(m instanceof O ? m : new V(m instanceof Error ? m.message : m));
      }
    };
    let l = t && setTimeout(() => {
      l = null, u(new O(`timeout ${t} of ms exceeded`, O.ETIMEDOUT));
    }, t);
    const h = () => {
      e && (l && clearTimeout(l), l = null, e.forEach((d) => {
        d.unsubscribe ? d.unsubscribe(u) : d.removeEventListener("abort", u);
      }), e = null);
    };
    e.forEach((d) => d.addEventListener("abort", u));
    const { signal: w } = r;
    return w.unsubscribe = () => f.asap(h), w;
  }
}, kn = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, Mn = async function* (e, t) {
  for await (const n of qn(e))
    yield* kn(n, t);
}, qn = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, ve = (e, t, n, r) => {
  const o = Mn(e, t);
  let u = 0, l, h = (w) => {
    l || (l = !0, r && r(w));
  };
  return new ReadableStream({
    async pull(w) {
      try {
        const { done: d, value: m } = await o.next();
        if (d) {
          h(), w.close();
          return;
        }
        let x = m.byteLength;
        if (n) {
          let A = u += x;
          n(A);
        }
        w.enqueue(new Uint8Array(m));
      } catch (d) {
        throw h(d), d;
      }
    },
    cancel(w) {
      return h(w), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, ue = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", lt = ue && typeof ReadableStream == "function", In = ue && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), ut = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Hn = lt && ut(() => {
  let e = !1;
  const t = new Request(U.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Le = 64 * 1024, xe = lt && ut(() => f.isReadableStream(new Response("").body)), se = {
  stream: xe && ((e) => e.body)
};
ue && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !se[t] && (se[t] = f.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new O(`Response type '${t}' is not supported`, O.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const zn = async (e) => {
  if (e == null)
    return 0;
  if (f.isBlob(e))
    return e.size;
  if (f.isSpecCompliantForm(e))
    return (await new Request(U.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (f.isArrayBufferView(e) || f.isArrayBuffer(e))
    return e.byteLength;
  if (f.isURLSearchParams(e) && (e = e + ""), f.isString(e))
    return (await In(e)).byteLength;
}, Jn = async (e, t) => {
  const n = f.toFiniteNumber(e.getContentLength());
  return n ?? zn(t);
}, $n = ue && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: o,
    cancelToken: u,
    timeout: l,
    onDownloadProgress: h,
    onUploadProgress: w,
    responseType: d,
    headers: m,
    withCredentials: x = "same-origin",
    fetchOptions: A
  } = ct(e);
  d = d ? (d + "").toLowerCase() : "text";
  let T = jn([o, u && u.toAbortSignal()], l), b;
  const g = T && T.unsubscribe && (() => {
    T.unsubscribe();
  });
  let E;
  try {
    if (w && Hn && n !== "get" && n !== "head" && (E = await Jn(m, r)) !== 0) {
      let B = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), M;
      if (f.isFormData(r) && (M = B.headers.get("content-type")) && m.setContentType(M), B.body) {
        const [q, $] = Be(
          E,
          re(Ue(w))
        );
        r = ve(B.body, Le, q, $);
      }
    }
    f.isString(x) || (x = x ? "include" : "omit");
    const F = "credentials" in Request.prototype;
    b = new Request(t, {
      ...A,
      signal: T,
      method: n.toUpperCase(),
      headers: m.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: F ? x : void 0
    });
    let _ = await fetch(b, A);
    const N = xe && (d === "stream" || d === "response");
    if (xe && (h || N && g)) {
      const B = {};
      ["status", "statusText", "headers"].forEach((C) => {
        B[C] = _[C];
      });
      const M = f.toFiniteNumber(_.headers.get("content-length")), [q, $] = h && Be(
        M,
        re(Ue(h), !0)
      ) || [];
      _ = new Response(
        ve(_.body, Le, q, () => {
          $ && $(), g && g();
        }),
        B
      );
    }
    d = d || "text";
    let j = await se[f.findKey(se, d) || "text"](_, e);
    return !N && g && g(), await new Promise((B, M) => {
      it(B, M, {
        data: j,
        headers: L.from(_.headers),
        status: _.status,
        statusText: _.statusText,
        config: e,
        request: b
      });
    });
  } catch (F) {
    throw g && g(), F && F.name === "TypeError" && /Load failed|fetch/i.test(F.message) ? Object.assign(
      new O("Network Error", O.ERR_NETWORK, e, b),
      {
        cause: F.cause || F
      }
    ) : O.from(F, F && F.code, e, b);
  }
}), Ee = {
  http: on,
  xhr: Ln,
  fetch: $n
};
f.forEach(Ee, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const je = (e) => `- ${e}`, Wn = (e) => f.isFunction(e) || e === null || e === !1, ft = {
  getAdapter: (e) => {
    e = f.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let u = 0; u < t; u++) {
      n = e[u];
      let l;
      if (r = n, !Wn(n) && (r = Ee[(l = String(n)).toLowerCase()], r === void 0))
        throw new O(`Unknown adapter '${l}'`);
      if (r)
        break;
      o[l || "#" + u] = r;
    }
    if (!r) {
      const u = Object.entries(o).map(
        ([h, w]) => `adapter ${h} ` + (w === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let l = t ? u.length > 1 ? `since :
` + u.map(je).join(`
`) : " " + je(u[0]) : "as no adapter specified";
      throw new O(
        "There is no suitable adapter to dispatch the request " + l,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Ee
};
function pe(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new V(null, e);
}
function ke(e) {
  return pe(e), e.headers = L.from(e.headers), e.data = he.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ft.getAdapter(e.adapter || Z.adapter)(e).then(function(r) {
    return pe(e), r.data = he.call(
      e,
      e.transformResponse,
      r
    ), r.headers = L.from(r.headers), r;
  }, function(r) {
    return ot(r) || (pe(e), r && r.response && (r.response.data = he.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = L.from(r.response.headers))), Promise.reject(r);
  });
}
const dt = "1.10.0", fe = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  fe[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Me = {};
fe.transitional = function(t, n, r) {
  function o(u, l) {
    return "[Axios v" + dt + "] Transitional option '" + u + "'" + l + (r ? ". " + r : "");
  }
  return (u, l, h) => {
    if (t === !1)
      throw new O(
        o(l, " has been removed" + (n ? " in " + n : "")),
        O.ERR_DEPRECATED
      );
    return n && !Me[l] && (Me[l] = !0, console.warn(
      o(
        l,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(u, l, h) : !0;
  };
};
fe.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Vn(e, t, n) {
  if (typeof e != "object")
    throw new O("options must be an object", O.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const u = r[o], l = t[u];
    if (l) {
      const h = e[u], w = h === void 0 || l(h, u, e);
      if (w !== !0)
        throw new O("option " + u + " must be " + w, O.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new O("Unknown option " + u, O.ERR_BAD_OPTION);
  }
}
const ne = {
  assertOptions: Vn,
  validators: fe
}, I = ne.validators;
let z = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Ne(),
      response: new Ne()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const u = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? u && !String(r.stack).endsWith(u.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + u) : r.stack = u;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = J(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: u } = n;
    r !== void 0 && ne.assertOptions(r, {
      silentJSONParsing: I.transitional(I.boolean),
      forcedJSONParsing: I.transitional(I.boolean),
      clarifyTimeoutError: I.transitional(I.boolean)
    }, !1), o != null && (f.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : ne.assertOptions(o, {
      encode: I.function,
      serialize: I.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), ne.assertOptions(n, {
      baseUrl: I.spelling("baseURL"),
      withXsrfToken: I.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let l = u && f.merge(
      u.common,
      u[n.method]
    );
    u && f.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (b) => {
        delete u[b];
      }
    ), n.headers = L.concat(l, u);
    const h = [];
    let w = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (w = w && g.synchronous, h.unshift(g.fulfilled, g.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function(g) {
      d.push(g.fulfilled, g.rejected);
    });
    let m, x = 0, A;
    if (!w) {
      const b = [ke.bind(this), void 0];
      for (b.unshift.apply(b, h), b.push.apply(b, d), A = b.length, m = Promise.resolve(n); x < A; )
        m = m.then(b[x++], b[x++]);
      return m;
    }
    A = h.length;
    let T = n;
    for (x = 0; x < A; ) {
      const b = h[x++], g = h[x++];
      try {
        T = b(T);
      } catch (E) {
        g.call(this, E);
        break;
      }
    }
    try {
      m = ke.call(this, T);
    } catch (b) {
      return Promise.reject(b);
    }
    for (x = 0, A = d.length; x < A; )
      m = m.then(d[x++], d[x++]);
    return m;
  }
  getUri(t) {
    t = J(this.defaults, t);
    const n = at(t.baseURL, t.url, t.allowAbsoluteUrls);
    return nt(n, t.params, t.paramsSerializer);
  }
};
f.forEach(["delete", "get", "head", "options"], function(t) {
  z.prototype[t] = function(n, r) {
    return this.request(J(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
f.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(u, l, h) {
      return this.request(J(h || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: u,
        data: l
      }));
    };
  }
  z.prototype[t] = n(), z.prototype[t + "Form"] = n(!0);
});
let Kn = class ht {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(u) {
      n = u;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let u = r._listeners.length;
      for (; u-- > 0; )
        r._listeners[u](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let u;
      const l = new Promise((h) => {
        r.subscribe(h), u = h;
      }).then(o);
      return l.cancel = function() {
        r.unsubscribe(u);
      }, l;
    }, t(function(u, l, h) {
      r.reason || (r.reason = new V(u, l, h), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new ht(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function Xn(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Gn(e) {
  return f.isObject(e) && e.isAxiosError === !0;
}
const Re = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Re).forEach(([e, t]) => {
  Re[t] = e;
});
function pt(e) {
  const t = new z(e), n = Je(z.prototype.request, t);
  return f.extend(n, z.prototype, t, { allOwnKeys: !0 }), f.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return pt(J(e, o));
  }, n;
}
const P = pt(Z);
P.Axios = z;
P.CanceledError = V;
P.CancelToken = Kn;
P.isCancel = ot;
P.VERSION = dt;
P.toFormData = le;
P.AxiosError = O;
P.Cancel = P.CanceledError;
P.all = function(t) {
  return Promise.all(t);
};
P.spread = Xn;
P.isAxiosError = Gn;
P.mergeConfig = J;
P.AxiosHeaders = L;
P.formToJSON = (e) => st(f.isHTMLForm(e) ? new FormData(e) : e);
P.getAdapter = ft.getAdapter;
P.HttpStatusCode = Re;
P.default = P;
const {
  Axios: fr,
  AxiosError: dr,
  CanceledError: hr,
  isCancel: pr,
  CancelToken: mr,
  VERSION: yr,
  all: br,
  Cancel: wr,
  isAxiosError: xr,
  spread: Er,
  toFormData: Rr,
  AxiosHeaders: Sr,
  HttpStatusCode: gr,
  formToJSON: Or,
  getAdapter: Ar,
  mergeConfig: Tr
} = P;
var Yn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Zn(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var o = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var me = { exports: {} };
const Qn = {}, er = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qn
}, Symbol.toStringTag, { value: "Module" })), qe = /* @__PURE__ */ Zn(er);
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.8.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2023
 * @license MIT
 */
var Ie;
function tr() {
  return Ie || (Ie = 1, function(e) {
    (function() {
      var t = "input is invalid type", n = "finalize already called", r = typeof window == "object", o = r ? window : {};
      o.JS_MD5_NO_WINDOW && (r = !1);
      var u = !r && typeof self == "object", l = !o.JS_MD5_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
      l ? o = Yn : u && (o = self);
      var h = !o.JS_MD5_NO_COMMON_JS && !0 && e.exports, w = !o.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", d = "0123456789abcdef".split(""), m = [128, 32768, 8388608, -2147483648], x = [0, 8, 16, 24], A = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], T = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), b = [], g;
      if (w) {
        var E = new ArrayBuffer(68);
        g = new Uint8Array(E), b = new Uint32Array(E);
      }
      var F = Array.isArray;
      (o.JS_MD5_NO_NODE_JS || !F) && (F = function(s) {
        return Object.prototype.toString.call(s) === "[object Array]";
      });
      var _ = ArrayBuffer.isView;
      w && (o.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !_) && (_ = function(s) {
        return typeof s == "object" && s.buffer && s.buffer.constructor === ArrayBuffer;
      });
      var N = function(s) {
        var a = typeof s;
        if (a === "string")
          return [s, !0];
        if (a !== "object" || s === null)
          throw new Error(t);
        if (w && s.constructor === ArrayBuffer)
          return [new Uint8Array(s), !1];
        if (!F(s) && !_(s))
          throw new Error(t);
        return [s, !1];
      }, j = function(s) {
        return function(a) {
          return new C(!0).update(a)[s]();
        };
      }, B = function() {
        var s = j("hex");
        l && (s = M(s)), s.create = function() {
          return new C();
        }, s.update = function(i) {
          return s.create().update(i);
        };
        for (var a = 0; a < A.length; ++a) {
          var c = A[a];
          s[c] = j(c);
        }
        return s;
      }, M = function(s) {
        var a = qe, c = qe.Buffer, i;
        c.from && !o.JS_MD5_NO_BUFFER_FROM ? i = c.from : i = function(y) {
          return new c(y);
        };
        var R = function(y) {
          if (typeof y == "string")
            return a.createHash("md5").update(y, "utf8").digest("hex");
          if (y == null)
            throw new Error(t);
          return y.constructor === ArrayBuffer && (y = new Uint8Array(y)), F(y) || _(y) || y.constructor === c ? a.createHash("md5").update(i(y)).digest("hex") : s(y);
        };
        return R;
      }, q = function(s) {
        return function(a, c) {
          return new Q(a, !0).update(c)[s]();
        };
      }, $ = function() {
        var s = q("hex");
        s.create = function(i) {
          return new Q(i);
        }, s.update = function(i, R) {
          return s.create(i).update(R);
        };
        for (var a = 0; a < A.length; ++a) {
          var c = A[a];
          s[c] = q(c);
        }
        return s;
      };
      function C(s) {
        if (s)
          b[0] = b[16] = b[1] = b[2] = b[3] = b[4] = b[5] = b[6] = b[7] = b[8] = b[9] = b[10] = b[11] = b[12] = b[13] = b[14] = b[15] = 0, this.blocks = b, this.buffer8 = g;
        else if (w) {
          var a = new ArrayBuffer(68);
          this.buffer8 = new Uint8Array(a), this.blocks = new Uint32Array(a);
        } else
          this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;
      }
      C.prototype.update = function(s) {
        if (this.finalized)
          throw new Error(n);
        var a = N(s);
        s = a[0];
        for (var c = a[1], i, R = 0, y, p = s.length, S = this.blocks, D = this.buffer8; R < p; ) {
          if (this.hashed && (this.hashed = !1, S[0] = S[16], S[16] = S[1] = S[2] = S[3] = S[4] = S[5] = S[6] = S[7] = S[8] = S[9] = S[10] = S[11] = S[12] = S[13] = S[14] = S[15] = 0), c)
            if (w)
              for (y = this.start; R < p && y < 64; ++R)
                i = s.charCodeAt(R), i < 128 ? D[y++] = i : i < 2048 ? (D[y++] = 192 | i >>> 6, D[y++] = 128 | i & 63) : i < 55296 || i >= 57344 ? (D[y++] = 224 | i >>> 12, D[y++] = 128 | i >>> 6 & 63, D[y++] = 128 | i & 63) : (i = 65536 + ((i & 1023) << 10 | s.charCodeAt(++R) & 1023), D[y++] = 240 | i >>> 18, D[y++] = 128 | i >>> 12 & 63, D[y++] = 128 | i >>> 6 & 63, D[y++] = 128 | i & 63);
            else
              for (y = this.start; R < p && y < 64; ++R)
                i = s.charCodeAt(R), i < 128 ? S[y >>> 2] |= i << x[y++ & 3] : i < 2048 ? (S[y >>> 2] |= (192 | i >>> 6) << x[y++ & 3], S[y >>> 2] |= (128 | i & 63) << x[y++ & 3]) : i < 55296 || i >= 57344 ? (S[y >>> 2] |= (224 | i >>> 12) << x[y++ & 3], S[y >>> 2] |= (128 | i >>> 6 & 63) << x[y++ & 3], S[y >>> 2] |= (128 | i & 63) << x[y++ & 3]) : (i = 65536 + ((i & 1023) << 10 | s.charCodeAt(++R) & 1023), S[y >>> 2] |= (240 | i >>> 18) << x[y++ & 3], S[y >>> 2] |= (128 | i >>> 12 & 63) << x[y++ & 3], S[y >>> 2] |= (128 | i >>> 6 & 63) << x[y++ & 3], S[y >>> 2] |= (128 | i & 63) << x[y++ & 3]);
          else if (w)
            for (y = this.start; R < p && y < 64; ++R)
              D[y++] = s[R];
          else
            for (y = this.start; R < p && y < 64; ++R)
              S[y >>> 2] |= s[R] << x[y++ & 3];
          this.lastByteIndex = y, this.bytes += y - this.start, y >= 64 ? (this.start = y - 64, this.hash(), this.hashed = !0) : this.start = y;
        }
        return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
      }, C.prototype.finalize = function() {
        if (!this.finalized) {
          this.finalized = !0;
          var s = this.blocks, a = this.lastByteIndex;
          s[a >>> 2] |= m[a & 3], a >= 56 && (this.hashed || this.hash(), s[0] = s[16], s[16] = s[1] = s[2] = s[3] = s[4] = s[5] = s[6] = s[7] = s[8] = s[9] = s[10] = s[11] = s[12] = s[13] = s[14] = s[15] = 0), s[14] = this.bytes << 3, s[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
        }
      }, C.prototype.hash = function() {
        var s, a, c, i, R, y, p = this.blocks;
        this.first ? (s = p[0] - 680876937, s = (s << 7 | s >>> 25) - 271733879 << 0, i = (-1732584194 ^ s & 2004318071) + p[1] - 117830708, i = (i << 12 | i >>> 20) + s << 0, c = (-271733879 ^ i & (s ^ -271733879)) + p[2] - 1126478375, c = (c << 17 | c >>> 15) + i << 0, a = (s ^ c & (i ^ s)) + p[3] - 1316259209, a = (a << 22 | a >>> 10) + c << 0) : (s = this.h0, a = this.h1, c = this.h2, i = this.h3, s += (i ^ a & (c ^ i)) + p[0] - 680876936, s = (s << 7 | s >>> 25) + a << 0, i += (c ^ s & (a ^ c)) + p[1] - 389564586, i = (i << 12 | i >>> 20) + s << 0, c += (a ^ i & (s ^ a)) + p[2] + 606105819, c = (c << 17 | c >>> 15) + i << 0, a += (s ^ c & (i ^ s)) + p[3] - 1044525330, a = (a << 22 | a >>> 10) + c << 0), s += (i ^ a & (c ^ i)) + p[4] - 176418897, s = (s << 7 | s >>> 25) + a << 0, i += (c ^ s & (a ^ c)) + p[5] + 1200080426, i = (i << 12 | i >>> 20) + s << 0, c += (a ^ i & (s ^ a)) + p[6] - 1473231341, c = (c << 17 | c >>> 15) + i << 0, a += (s ^ c & (i ^ s)) + p[7] - 45705983, a = (a << 22 | a >>> 10) + c << 0, s += (i ^ a & (c ^ i)) + p[8] + 1770035416, s = (s << 7 | s >>> 25) + a << 0, i += (c ^ s & (a ^ c)) + p[9] - 1958414417, i = (i << 12 | i >>> 20) + s << 0, c += (a ^ i & (s ^ a)) + p[10] - 42063, c = (c << 17 | c >>> 15) + i << 0, a += (s ^ c & (i ^ s)) + p[11] - 1990404162, a = (a << 22 | a >>> 10) + c << 0, s += (i ^ a & (c ^ i)) + p[12] + 1804603682, s = (s << 7 | s >>> 25) + a << 0, i += (c ^ s & (a ^ c)) + p[13] - 40341101, i = (i << 12 | i >>> 20) + s << 0, c += (a ^ i & (s ^ a)) + p[14] - 1502002290, c = (c << 17 | c >>> 15) + i << 0, a += (s ^ c & (i ^ s)) + p[15] + 1236535329, a = (a << 22 | a >>> 10) + c << 0, s += (c ^ i & (a ^ c)) + p[1] - 165796510, s = (s << 5 | s >>> 27) + a << 0, i += (a ^ c & (s ^ a)) + p[6] - 1069501632, i = (i << 9 | i >>> 23) + s << 0, c += (s ^ a & (i ^ s)) + p[11] + 643717713, c = (c << 14 | c >>> 18) + i << 0, a += (i ^ s & (c ^ i)) + p[0] - 373897302, a = (a << 20 | a >>> 12) + c << 0, s += (c ^ i & (a ^ c)) + p[5] - 701558691, s = (s << 5 | s >>> 27) + a << 0, i += (a ^ c & (s ^ a)) + p[10] + 38016083, i = (i << 9 | i >>> 23) + s << 0, c += (s ^ a & (i ^ s)) + p[15] - 660478335, c = (c << 14 | c >>> 18) + i << 0, a += (i ^ s & (c ^ i)) + p[4] - 405537848, a = (a << 20 | a >>> 12) + c << 0, s += (c ^ i & (a ^ c)) + p[9] + 568446438, s = (s << 5 | s >>> 27) + a << 0, i += (a ^ c & (s ^ a)) + p[14] - 1019803690, i = (i << 9 | i >>> 23) + s << 0, c += (s ^ a & (i ^ s)) + p[3] - 187363961, c = (c << 14 | c >>> 18) + i << 0, a += (i ^ s & (c ^ i)) + p[8] + 1163531501, a = (a << 20 | a >>> 12) + c << 0, s += (c ^ i & (a ^ c)) + p[13] - 1444681467, s = (s << 5 | s >>> 27) + a << 0, i += (a ^ c & (s ^ a)) + p[2] - 51403784, i = (i << 9 | i >>> 23) + s << 0, c += (s ^ a & (i ^ s)) + p[7] + 1735328473, c = (c << 14 | c >>> 18) + i << 0, a += (i ^ s & (c ^ i)) + p[12] - 1926607734, a = (a << 20 | a >>> 12) + c << 0, R = a ^ c, s += (R ^ i) + p[5] - 378558, s = (s << 4 | s >>> 28) + a << 0, i += (R ^ s) + p[8] - 2022574463, i = (i << 11 | i >>> 21) + s << 0, y = i ^ s, c += (y ^ a) + p[11] + 1839030562, c = (c << 16 | c >>> 16) + i << 0, a += (y ^ c) + p[14] - 35309556, a = (a << 23 | a >>> 9) + c << 0, R = a ^ c, s += (R ^ i) + p[1] - 1530992060, s = (s << 4 | s >>> 28) + a << 0, i += (R ^ s) + p[4] + 1272893353, i = (i << 11 | i >>> 21) + s << 0, y = i ^ s, c += (y ^ a) + p[7] - 155497632, c = (c << 16 | c >>> 16) + i << 0, a += (y ^ c) + p[10] - 1094730640, a = (a << 23 | a >>> 9) + c << 0, R = a ^ c, s += (R ^ i) + p[13] + 681279174, s = (s << 4 | s >>> 28) + a << 0, i += (R ^ s) + p[0] - 358537222, i = (i << 11 | i >>> 21) + s << 0, y = i ^ s, c += (y ^ a) + p[3] - 722521979, c = (c << 16 | c >>> 16) + i << 0, a += (y ^ c) + p[6] + 76029189, a = (a << 23 | a >>> 9) + c << 0, R = a ^ c, s += (R ^ i) + p[9] - 640364487, s = (s << 4 | s >>> 28) + a << 0, i += (R ^ s) + p[12] - 421815835, i = (i << 11 | i >>> 21) + s << 0, y = i ^ s, c += (y ^ a) + p[15] + 530742520, c = (c << 16 | c >>> 16) + i << 0, a += (y ^ c) + p[2] - 995338651, a = (a << 23 | a >>> 9) + c << 0, s += (c ^ (a | ~i)) + p[0] - 198630844, s = (s << 6 | s >>> 26) + a << 0, i += (a ^ (s | ~c)) + p[7] + 1126891415, i = (i << 10 | i >>> 22) + s << 0, c += (s ^ (i | ~a)) + p[14] - 1416354905, c = (c << 15 | c >>> 17) + i << 0, a += (i ^ (c | ~s)) + p[5] - 57434055, a = (a << 21 | a >>> 11) + c << 0, s += (c ^ (a | ~i)) + p[12] + 1700485571, s = (s << 6 | s >>> 26) + a << 0, i += (a ^ (s | ~c)) + p[3] - 1894986606, i = (i << 10 | i >>> 22) + s << 0, c += (s ^ (i | ~a)) + p[10] - 1051523, c = (c << 15 | c >>> 17) + i << 0, a += (i ^ (c | ~s)) + p[1] - 2054922799, a = (a << 21 | a >>> 11) + c << 0, s += (c ^ (a | ~i)) + p[8] + 1873313359, s = (s << 6 | s >>> 26) + a << 0, i += (a ^ (s | ~c)) + p[15] - 30611744, i = (i << 10 | i >>> 22) + s << 0, c += (s ^ (i | ~a)) + p[6] - 1560198380, c = (c << 15 | c >>> 17) + i << 0, a += (i ^ (c | ~s)) + p[13] + 1309151649, a = (a << 21 | a >>> 11) + c << 0, s += (c ^ (a | ~i)) + p[4] - 145523070, s = (s << 6 | s >>> 26) + a << 0, i += (a ^ (s | ~c)) + p[11] - 1120210379, i = (i << 10 | i >>> 22) + s << 0, c += (s ^ (i | ~a)) + p[2] + 718787259, c = (c << 15 | c >>> 17) + i << 0, a += (i ^ (c | ~s)) + p[9] - 343485551, a = (a << 21 | a >>> 11) + c << 0, this.first ? (this.h0 = s + 1732584193 << 0, this.h1 = a - 271733879 << 0, this.h2 = c - 1732584194 << 0, this.h3 = i + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + s << 0, this.h1 = this.h1 + a << 0, this.h2 = this.h2 + c << 0, this.h3 = this.h3 + i << 0);
      }, C.prototype.hex = function() {
        this.finalize();
        var s = this.h0, a = this.h1, c = this.h2, i = this.h3;
        return d[s >>> 4 & 15] + d[s & 15] + d[s >>> 12 & 15] + d[s >>> 8 & 15] + d[s >>> 20 & 15] + d[s >>> 16 & 15] + d[s >>> 28 & 15] + d[s >>> 24 & 15] + d[a >>> 4 & 15] + d[a & 15] + d[a >>> 12 & 15] + d[a >>> 8 & 15] + d[a >>> 20 & 15] + d[a >>> 16 & 15] + d[a >>> 28 & 15] + d[a >>> 24 & 15] + d[c >>> 4 & 15] + d[c & 15] + d[c >>> 12 & 15] + d[c >>> 8 & 15] + d[c >>> 20 & 15] + d[c >>> 16 & 15] + d[c >>> 28 & 15] + d[c >>> 24 & 15] + d[i >>> 4 & 15] + d[i & 15] + d[i >>> 12 & 15] + d[i >>> 8 & 15] + d[i >>> 20 & 15] + d[i >>> 16 & 15] + d[i >>> 28 & 15] + d[i >>> 24 & 15];
      }, C.prototype.toString = C.prototype.hex, C.prototype.digest = function() {
        this.finalize();
        var s = this.h0, a = this.h1, c = this.h2, i = this.h3;
        return [
          s & 255,
          s >>> 8 & 255,
          s >>> 16 & 255,
          s >>> 24 & 255,
          a & 255,
          a >>> 8 & 255,
          a >>> 16 & 255,
          a >>> 24 & 255,
          c & 255,
          c >>> 8 & 255,
          c >>> 16 & 255,
          c >>> 24 & 255,
          i & 255,
          i >>> 8 & 255,
          i >>> 16 & 255,
          i >>> 24 & 255
        ];
      }, C.prototype.array = C.prototype.digest, C.prototype.arrayBuffer = function() {
        this.finalize();
        var s = new ArrayBuffer(16), a = new Uint32Array(s);
        return a[0] = this.h0, a[1] = this.h1, a[2] = this.h2, a[3] = this.h3, s;
      }, C.prototype.buffer = C.prototype.arrayBuffer, C.prototype.base64 = function() {
        for (var s, a, c, i = "", R = this.array(), y = 0; y < 15; )
          s = R[y++], a = R[y++], c = R[y++], i += T[s >>> 2] + T[(s << 4 | a >>> 4) & 63] + T[(a << 2 | c >>> 6) & 63] + T[c & 63];
        return s = R[y], i += T[s >>> 2] + T[s << 4 & 63] + "==", i;
      };
      function Q(s, a) {
        var c, i = N(s);
        if (s = i[0], i[1]) {
          var R = [], y = s.length, p = 0, S;
          for (c = 0; c < y; ++c)
            S = s.charCodeAt(c), S < 128 ? R[p++] = S : S < 2048 ? (R[p++] = 192 | S >>> 6, R[p++] = 128 | S & 63) : S < 55296 || S >= 57344 ? (R[p++] = 224 | S >>> 12, R[p++] = 128 | S >>> 6 & 63, R[p++] = 128 | S & 63) : (S = 65536 + ((S & 1023) << 10 | s.charCodeAt(++c) & 1023), R[p++] = 240 | S >>> 18, R[p++] = 128 | S >>> 12 & 63, R[p++] = 128 | S >>> 6 & 63, R[p++] = 128 | S & 63);
          s = R;
        }
        s.length > 64 && (s = new C(!0).update(s).array());
        var D = [], Ae = [];
        for (c = 0; c < 64; ++c) {
          var Te = s[c] || 0;
          D[c] = 92 ^ Te, Ae[c] = 54 ^ Te;
        }
        C.call(this, a), this.update(Ae), this.oKeyPad = D, this.inner = !0, this.sharedMemory = a;
      }
      Q.prototype = new C(), Q.prototype.finalize = function() {
        if (C.prototype.finalize.call(this), this.inner) {
          this.inner = !1;
          var s = this.array();
          C.call(this, this.sharedMemory), this.update(this.oKeyPad), this.update(s), C.prototype.finalize.call(this);
        }
      };
      var K = B();
      K.md5 = K, K.md5.hmac = $(), h ? e.exports = K : o.md5 = K;
    })();
  }(me)), me.exports;
}
var nr = tr();
const mt = "rt-translations", rr = "/translations-api/v1", sr = (e) => /[^\s.,!?;:()]+/.test(e);
function yt() {
  return navigator.language || "en-US";
}
function bt() {
  return JSON.parse(localStorage.getItem(mt) || "{}");
}
function or(e, t, n) {
  const r = bt();
  console.log("Store translation", { key: e, lang: t, value: n }), r[e] || (r[e] = {}), r[e][t] = n, localStorage.setItem(mt, JSON.stringify(r));
}
function ir(e, t) {
  var r;
  return ((r = bt()[e]) == null ? void 0 : r[t]) || null;
}
async function ar(e = [], t) {
  const { data: n } = await P.post(rr, {
    lang: t,
    texts: e
  });
  return console.log("Fetch translation data", n), n.translations;
}
function He(e, t, n) {
  const r = e.childNodes[t];
  r ? r.textContent = n : el.textContent = n, xt(e);
}
function wt(e, t, n) {
  if (e.nodeType === Node.TEXT_NODE && e.textContent.trim() && sr(e.textContent)) {
    const r = e.textContent.trim(), o = yt(), u = nr.md5(o + r), l = e.parentNode;
    l.dataset.translateKey = u, cr(l), n.push({ text: r, key: u, parent: l, index: t });
  } else e.nodeType === Node.ELEMENT_NODE && e.childNodes.forEach((r, o) => wt(r, o, n));
}
async function ze(e, t = !1) {
  const n = yt(), r = [];
  wt(e, 0, r);
  const o = r.filter((u) => {
    const l = ir(u.key, n);
    return l ? (He(u.parent, u.index, l), !1) : !0;
  });
  if (o.length !== 0)
    try {
      (await ar(o.map((l) => l.text), n)).forEach((l) => {
        const h = o.find((w) => w.key === l.key);
        He(h.parent, h.index, l.value), or(l.key, n, l.value);
      });
    } catch (u) {
      r.forEach((l) => {
        xt(l.parent);
      }), console.error("Translation error:", u);
    }
}
function xt(e) {
  e.getAnimations().forEach((t) => {
    t.cancel();
  });
}
function cr(e) {
  e.animate([
    { opacity: 1 },
    { opacity: 0.5 },
    { opacity: 1 }
  ], {
    duration: 1500,
    iterations: 1 / 0
  });
}
const Fr = {
  mounted(e, t) {
    const n = t.modifiers.children, r = t.modifiers.global;
    ze(e, n), r && window.addEventListener("language-changed", () => {
      ze(e, n);
    });
  },
  unmounted(e) {
    e._translateCleanup && e._translateCleanup();
  }
};
export {
  Fr as RTTranslate
};
