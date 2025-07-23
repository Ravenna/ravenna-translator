function Je(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: bt } = Object.prototype, { getPrototypeOf: Se } = Object, { iterator: oe, toStringTag: $e } = Symbol, ie = /* @__PURE__ */ ((e) => (t) => {
  const r = bt.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), k = (e) => (e = e.toLowerCase(), (t) => ie(t) === e), ae = (e) => (t) => typeof t === e, { isArray: W } = Array, G = ae("undefined");
function wt(e) {
  return e !== null && !G(e) && e.constructor !== null && !G(e.constructor) && v(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const We = k("ArrayBuffer");
function xt(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && We(e.buffer), t;
}
const Et = ae("string"), v = ae("function"), Ve = ae("number"), ce = (e) => e !== null && typeof e == "object", Rt = (e) => e === !0 || e === !1, ee = (e) => {
  if (ie(e) !== "object")
    return !1;
  const t = Se(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !($e in e) && !(oe in e);
}, St = k("Date"), gt = k("File"), Ot = k("Blob"), At = k("FileList"), Ft = (e) => ce(e) && v(e.pipe), Tt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || v(e.append) && ((t = ie(e)) === "formdata" || // detect form-data instance
  t === "object" && v(e.toString) && e.toString() === "[object FormData]"));
}, _t = k("URLSearchParams"), [Ct, Nt, Pt, Bt] = ["ReadableStream", "Request", "Response", "Headers"].map(k), Ut = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Y(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), W(e))
    for (n = 0, o = e.length; n < o; n++)
      t.call(null, e[n], n, e);
  else {
    const l = r ? Object.getOwnPropertyNames(e) : Object.keys(e), u = l.length;
    let h;
    for (n = 0; n < u; n++)
      h = l[n], t.call(null, e[h], h, e);
  }
}
function Ke(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, o;
  for (; n-- > 0; )
    if (o = r[n], t === o.toLowerCase())
      return o;
  return null;
}
const H = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Xe = (e) => !G(e) && e !== H;
function ye() {
  const { caseless: e } = Xe(this) && this || {}, t = {}, r = (n, o) => {
    const l = e && Ke(t, o) || o;
    ee(t[l]) && ee(n) ? t[l] = ye(t[l], n) : ee(n) ? t[l] = ye({}, n) : W(n) ? t[l] = n.slice() : t[l] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && Y(arguments[n], r);
  return t;
}
const Dt = (e, t, r, { allOwnKeys: n } = {}) => (Y(t, (o, l) => {
  r && v(o) ? e[l] = Je(o, r) : e[l] = o;
}, { allOwnKeys: n }), e), vt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Lt = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, jt = (e, t, r, n) => {
  let o, l, u;
  const h = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), l = o.length; l-- > 0; )
      u = o[l], (!n || n(u, e, t)) && !h[u] && (t[u] = e[u], h[u] = !0);
    e = r !== !1 && Se(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, kt = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Mt = (e) => {
  if (!e) return null;
  if (W(e)) return e;
  let t = e.length;
  if (!Ve(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, qt = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Se(Uint8Array)), It = (e, t) => {
  const n = (e && e[oe]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const l = o.value;
    t.call(e, l[0], l[1]);
  }
}, Ht = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, zt = k("HTMLFormElement"), Jt = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, o) {
    return n.toUpperCase() + o;
  }
), _e = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), $t = k("RegExp"), Ge = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Y(r, (o, l) => {
    let u;
    (u = t(o, l, e)) !== !1 && (n[l] = u || o);
  }), Object.defineProperties(e, n);
}, Wt = (e) => {
  Ge(e, (t, r) => {
    if (v(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (v(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Vt = (e, t) => {
  const r = {}, n = (o) => {
    o.forEach((l) => {
      r[l] = !0;
    });
  };
  return W(e) ? n(e) : n(String(e).split(t)), r;
}, Kt = () => {
}, Xt = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Gt(e) {
  return !!(e && v(e.append) && e[$e] === "FormData" && e[oe]);
}
const Yt = (e) => {
  const t = new Array(10), r = (n, o) => {
    if (ce(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[o] = n;
        const l = W(n) ? [] : {};
        return Y(n, (u, h) => {
          const w = r(u, o + 1);
          !G(w) && (l[h] = w);
        }), t[o] = void 0, l;
      }
    }
    return n;
  };
  return r(e, 0);
}, Zt = k("AsyncFunction"), Qt = (e) => e && (ce(e) || v(e)) && v(e.then) && v(e.catch), Ye = ((e, t) => e ? setImmediate : t ? ((r, n) => (H.addEventListener("message", ({ source: o, data: l }) => {
  o === H && l === r && n.length && n.shift()();
}, !1), (o) => {
  n.push(o), H.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  v(H.postMessage)
), er = typeof queueMicrotask < "u" ? queueMicrotask.bind(H) : typeof process < "u" && process.nextTick || Ye, tr = (e) => e != null && v(e[oe]), f = {
  isArray: W,
  isArrayBuffer: We,
  isBuffer: wt,
  isFormData: Tt,
  isArrayBufferView: xt,
  isString: Et,
  isNumber: Ve,
  isBoolean: Rt,
  isObject: ce,
  isPlainObject: ee,
  isReadableStream: Ct,
  isRequest: Nt,
  isResponse: Pt,
  isHeaders: Bt,
  isUndefined: G,
  isDate: St,
  isFile: gt,
  isBlob: Ot,
  isRegExp: $t,
  isFunction: v,
  isStream: Ft,
  isURLSearchParams: _t,
  isTypedArray: qt,
  isFileList: At,
  forEach: Y,
  merge: ye,
  extend: Dt,
  trim: Ut,
  stripBOM: vt,
  inherits: Lt,
  toFlatObject: jt,
  kindOf: ie,
  kindOfTest: k,
  endsWith: kt,
  toArray: Mt,
  forEachEntry: It,
  matchAll: Ht,
  isHTMLForm: zt,
  hasOwnProperty: _e,
  hasOwnProp: _e,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ge,
  freezeMethods: Wt,
  toObjectSet: Vt,
  toCamelCase: Jt,
  noop: Kt,
  toFiniteNumber: Xt,
  findKey: Ke,
  global: H,
  isContextDefined: Xe,
  isSpecCompliantForm: Gt,
  toJSONObject: Yt,
  isAsyncFn: Zt,
  isThenable: Qt,
  setImmediate: Ye,
  asap: er,
  isIterable: tr
};
function O(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o, this.status = o.status ? o.status : null);
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
O.from = (e, t, r, n, o, l) => {
  const u = Object.create(Ze);
  return f.toFlatObject(e, u, function(w) {
    return w !== Error.prototype;
  }, (h) => h !== "isAxiosError"), O.call(u, e.message, t, r, n, o), u.cause = e, u.name = e.name, l && Object.assign(u, l), u;
};
const rr = null;
function be(e) {
  return f.isPlainObject(e) || f.isArray(e);
}
function et(e) {
  return f.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ce(e, t, r) {
  return e ? e.concat(t).map(function(o, l) {
    return o = et(o), !r && l ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function nr(e) {
  return f.isArray(e) && !e.some(be);
}
const sr = f.toFlatObject(f, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function le(e, t, r) {
  if (!f.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = f.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, E) {
    return !f.isUndefined(E[g]);
  });
  const n = r.metaTokens, o = r.visitor || m, l = r.dots, u = r.indexes, w = (r.Blob || typeof Blob < "u" && Blob) && f.isSpecCompliantForm(t);
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
    let T = b;
    if (b && !E && typeof b == "object") {
      if (f.endsWith(g, "{}"))
        g = n ? g : g.slice(0, -2), b = JSON.stringify(b);
      else if (f.isArray(b) && nr(b) || (f.isFileList(b) || f.endsWith(g, "[]")) && (T = f.toArray(b)))
        return g = et(g), T.forEach(function(N, j) {
          !(f.isUndefined(N) || N === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            u === !0 ? Ce([g], j, l) : u === null ? g : g + "[]",
            d(N)
          );
        }), !1;
    }
    return be(b) ? !0 : (t.append(Ce(E, g, l), d(b)), !1);
  }
  const x = [], A = Object.assign(sr, {
    defaultVisitor: m,
    convertValue: d,
    isVisitable: be
  });
  function F(b, g) {
    if (!f.isUndefined(b)) {
      if (x.indexOf(b) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      x.push(b), f.forEach(b, function(T, _) {
        (!(f.isUndefined(T) || T === null) && o.call(
          t,
          T,
          f.isString(_) ? _.trim() : _,
          g,
          A
        )) === !0 && F(T, g ? g.concat(_) : [_]);
      }), x.pop();
    }
  }
  if (!f.isObject(e))
    throw new TypeError("data must be an object");
  return F(e), t;
}
function Ne(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function ge(e, t) {
  this._pairs = [], e && le(e, this, t);
}
const tt = ge.prototype;
tt.append = function(t, r) {
  this._pairs.push([t, r]);
};
tt.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Ne);
  } : Ne;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function or(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function rt(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || or;
  f.isFunction(r) && (r = {
    serialize: r
  });
  const o = r && r.serialize;
  let l;
  if (o ? l = o(t, r) : l = f.isURLSearchParams(t) ? t.toString() : new ge(t, r).toString(n), l) {
    const u = e.indexOf("#");
    u !== -1 && (e = e.slice(0, u)), e += (e.indexOf("?") === -1 ? "?" : "&") + l;
  }
  return e;
}
class Pe {
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
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
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
    f.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const nt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ir = typeof URLSearchParams < "u" ? URLSearchParams : ge, ar = typeof FormData < "u" ? FormData : null, cr = typeof Blob < "u" ? Blob : null, lr = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ir,
    FormData: ar,
    Blob: cr
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Oe = typeof window < "u" && typeof document < "u", we = typeof navigator == "object" && navigator || void 0, ur = Oe && (!we || ["ReactNative", "NativeScript", "NS"].indexOf(we.product) < 0), fr = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", dr = Oe && window.location.href || "http://localhost", hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Oe,
  hasStandardBrowserEnv: ur,
  hasStandardBrowserWebWorkerEnv: fr,
  navigator: we,
  origin: dr
}, Symbol.toStringTag, { value: "Module" })), U = {
  ...hr,
  ...lr
};
function pr(e, t) {
  return le(e, new U.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, o, l) {
      return U.isNode && f.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : l.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function mr(e) {
  return f.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function yr(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const o = r.length;
  let l;
  for (n = 0; n < o; n++)
    l = r[n], t[l] = e[l];
  return t;
}
function st(e) {
  function t(r, n, o, l) {
    let u = r[l++];
    if (u === "__proto__") return !0;
    const h = Number.isFinite(+u), w = l >= r.length;
    return u = !u && f.isArray(o) ? o.length : u, w ? (f.hasOwnProp(o, u) ? o[u] = [o[u], n] : o[u] = n, !h) : ((!o[u] || !f.isObject(o[u])) && (o[u] = []), t(r, n, o[u], l) && f.isArray(o[u]) && (o[u] = yr(o[u])), !h);
  }
  if (f.isFormData(e) && f.isFunction(e.entries)) {
    const r = {};
    return f.forEachEntry(e, (n, o) => {
      t(mr(n), o, r, 0);
    }), r;
  }
  return null;
}
function br(e, t, r) {
  if (f.isString(e))
    try {
      return (t || JSON.parse)(e), f.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const Z = {
  transitional: nt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", o = n.indexOf("application/json") > -1, l = f.isObject(t);
    if (l && f.isHTMLForm(t) && (t = new FormData(t)), f.isFormData(t))
      return o ? JSON.stringify(st(t)) : t;
    if (f.isArrayBuffer(t) || f.isBuffer(t) || f.isStream(t) || f.isFile(t) || f.isBlob(t) || f.isReadableStream(t))
      return t;
    if (f.isArrayBufferView(t))
      return t.buffer;
    if (f.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let h;
    if (l) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return pr(t, this.formSerializer).toString();
      if ((h = f.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const w = this.env && this.env.FormData;
        return le(
          h ? { "files[]": t } : t,
          w && new w(),
          this.formSerializer
        );
      }
    }
    return l || o ? (r.setContentType("application/json", !1), br(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Z.transitional, n = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (f.isResponse(t) || f.isReadableStream(t))
      return t;
    if (t && f.isString(t) && (n && !this.responseType || o)) {
      const u = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (h) {
        if (u)
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
const wr = f.toObjectSet([
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
]), xr = (e) => {
  const t = {};
  let r, n, o;
  return e && e.split(`
`).forEach(function(u) {
    o = u.indexOf(":"), r = u.substring(0, o).trim().toLowerCase(), n = u.substring(o + 1).trim(), !(!r || t[r] && wr[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Be = Symbol("internals");
function X(e) {
  return e && String(e).trim().toLowerCase();
}
function te(e) {
  return e === !1 || e == null ? e : f.isArray(e) ? e.map(te) : String(e);
}
function Er(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Rr = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function de(e, t, r, n, o) {
  if (f.isFunction(n))
    return n.call(this, t, r);
  if (o && (t = r), !!f.isString(t)) {
    if (f.isString(n))
      return t.indexOf(n) !== -1;
    if (f.isRegExp(n))
      return n.test(t);
  }
}
function Sr(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function gr(e, t) {
  const r = f.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(o, l, u) {
        return this[n].call(this, t, o, l, u);
      },
      configurable: !0
    });
  });
}
let L = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function l(h, w, d) {
      const m = X(w);
      if (!m)
        throw new Error("header name must be a non-empty string");
      const x = f.findKey(o, m);
      (!x || o[x] === void 0 || d === !0 || d === void 0 && o[x] !== !1) && (o[x || w] = te(h));
    }
    const u = (h, w) => f.forEach(h, (d, m) => l(d, m, w));
    if (f.isPlainObject(t) || t instanceof this.constructor)
      u(t, r);
    else if (f.isString(t) && (t = t.trim()) && !Rr(t))
      u(xr(t), r);
    else if (f.isObject(t) && f.isIterable(t)) {
      let h = {}, w, d;
      for (const m of t) {
        if (!f.isArray(m))
          throw TypeError("Object iterator must return a key-value pair");
        h[d = m[0]] = (w = h[d]) ? f.isArray(w) ? [...w, m[1]] : [w, m[1]] : m[1];
      }
      u(h, r);
    } else
      t != null && l(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = X(t), t) {
      const n = f.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r)
          return o;
        if (r === !0)
          return Er(o);
        if (f.isFunction(r))
          return r.call(this, o, n);
        if (f.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = X(t), t) {
      const n = f.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || de(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function l(u) {
      if (u = X(u), u) {
        const h = f.findKey(n, u);
        h && (!r || de(n, n[h], h, r)) && (delete n[h], o = !0);
      }
    }
    return f.isArray(t) ? t.forEach(l) : l(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, o = !1;
    for (; n--; ) {
      const l = r[n];
      (!t || de(this, this[l], l, t, !0)) && (delete this[l], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this, n = {};
    return f.forEach(this, (o, l) => {
      const u = f.findKey(n, l);
      if (u) {
        r[u] = te(o), delete r[l];
        return;
      }
      const h = t ? Sr(l) : String(l).trim();
      h !== l && delete r[l], r[h] = te(o), n[h] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return f.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = t && f.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
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
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((o) => n.set(o)), n;
  }
  static accessor(t) {
    const n = (this[Be] = this[Be] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function l(u) {
      const h = X(u);
      n[h] || (gr(o, u), n[h] = !0);
    }
    return f.isArray(t) ? t.forEach(l) : l(t), this;
  }
};
L.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
f.reduceDescriptors(L.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
f.freezeMethods(L);
function he(e, t) {
  const r = this || Z, n = t || r, o = L.from(n.headers);
  let l = n.data;
  return f.forEach(e, function(h) {
    l = h.call(r, l, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), l;
}
function ot(e) {
  return !!(e && e.__CANCEL__);
}
function V(e, t, r) {
  O.call(this, e ?? "canceled", O.ERR_CANCELED, t, r), this.name = "CanceledError";
}
f.inherits(V, O, {
  __CANCEL__: !0
});
function it(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new O(
    "Request failed with status code " + r.status,
    [O.ERR_BAD_REQUEST, O.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Or(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Ar(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let o = 0, l = 0, u;
  return t = t !== void 0 ? t : 1e3, function(w) {
    const d = Date.now(), m = n[l];
    u || (u = d), r[o] = w, n[o] = d;
    let x = l, A = 0;
    for (; x !== o; )
      A += r[x++], x = x % e;
    if (o = (o + 1) % e, o === l && (l = (l + 1) % e), d - u < t)
      return;
    const F = m && d - m;
    return F ? Math.round(A * 1e3 / F) : void 0;
  };
}
function Fr(e, t) {
  let r = 0, n = 1e3 / t, o, l;
  const u = (d, m = Date.now()) => {
    r = m, o = null, l && (clearTimeout(l), l = null), e.apply(null, d);
  };
  return [(...d) => {
    const m = Date.now(), x = m - r;
    x >= n ? u(d, m) : (o = d, l || (l = setTimeout(() => {
      l = null, u(o);
    }, n - x)));
  }, () => o && u(o)];
}
const ne = (e, t, r = 3) => {
  let n = 0;
  const o = Ar(50, 250);
  return Fr((l) => {
    const u = l.loaded, h = l.lengthComputable ? l.total : void 0, w = u - n, d = o(w), m = u <= h;
    n = u;
    const x = {
      loaded: u,
      total: h,
      progress: h ? u / h : void 0,
      bytes: w,
      rate: d || void 0,
      estimated: d && h && m ? (h - u) / d : void 0,
      event: l,
      lengthComputable: h != null,
      [t ? "download" : "upload"]: !0
    };
    e(x);
  }, r);
}, Ue = (e, t) => {
  const r = e != null;
  return [(n) => t[0]({
    lengthComputable: r,
    total: e,
    loaded: n
  }), t[1]];
}, De = (e) => (...t) => f.asap(() => e(...t)), Tr = U.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, U.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(U.origin),
  U.navigator && /(msie|trident)/i.test(U.navigator.userAgent)
) : () => !0, _r = U.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, o, l) {
      const u = [e + "=" + encodeURIComponent(t)];
      f.isNumber(r) && u.push("expires=" + new Date(r).toGMTString()), f.isString(n) && u.push("path=" + n), f.isString(o) && u.push("domain=" + o), l === !0 && u.push("secure"), document.cookie = u.join("; ");
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
function Cr(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Nr(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function at(e, t, r) {
  let n = !Cr(t);
  return e && (n || r == !1) ? Nr(e, t) : t;
}
const ve = (e) => e instanceof L ? { ...e } : e;
function J(e, t) {
  t = t || {};
  const r = {};
  function n(d, m, x, A) {
    return f.isPlainObject(d) && f.isPlainObject(m) ? f.merge.call({ caseless: A }, d, m) : f.isPlainObject(m) ? f.merge({}, m) : f.isArray(m) ? m.slice() : m;
  }
  function o(d, m, x, A) {
    if (f.isUndefined(m)) {
      if (!f.isUndefined(d))
        return n(void 0, d, x, A);
    } else return n(d, m, x, A);
  }
  function l(d, m) {
    if (!f.isUndefined(m))
      return n(void 0, m);
  }
  function u(d, m) {
    if (f.isUndefined(m)) {
      if (!f.isUndefined(d))
        return n(void 0, d);
    } else return n(void 0, m);
  }
  function h(d, m, x) {
    if (x in t)
      return n(d, m);
    if (x in e)
      return n(void 0, d);
  }
  const w = {
    url: l,
    method: l,
    data: l,
    baseURL: u,
    transformRequest: u,
    transformResponse: u,
    paramsSerializer: u,
    timeout: u,
    timeoutMessage: u,
    withCredentials: u,
    withXSRFToken: u,
    adapter: u,
    responseType: u,
    xsrfCookieName: u,
    xsrfHeaderName: u,
    onUploadProgress: u,
    onDownloadProgress: u,
    decompress: u,
    maxContentLength: u,
    maxBodyLength: u,
    beforeRedirect: u,
    transport: u,
    httpAgent: u,
    httpsAgent: u,
    cancelToken: u,
    socketPath: u,
    responseEncoding: u,
    validateStatus: h,
    headers: (d, m, x) => o(ve(d), ve(m), x, !0)
  };
  return f.forEach(Object.keys(Object.assign({}, e, t)), function(m) {
    const x = w[m] || o, A = x(e[m], t[m], m);
    f.isUndefined(A) && x !== h || (r[m] = A);
  }), r;
}
const ct = (e) => {
  const t = J({}, e);
  let { data: r, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: l, headers: u, auth: h } = t;
  t.headers = u = L.from(u), t.url = rt(at(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), h && u.set(
    "Authorization",
    "Basic " + btoa((h.username || "") + ":" + (h.password ? unescape(encodeURIComponent(h.password)) : ""))
  );
  let w;
  if (f.isFormData(r)) {
    if (U.hasStandardBrowserEnv || U.hasStandardBrowserWebWorkerEnv)
      u.setContentType(void 0);
    else if ((w = u.getContentType()) !== !1) {
      const [d, ...m] = w ? w.split(";").map((x) => x.trim()).filter(Boolean) : [];
      u.setContentType([d || "multipart/form-data", ...m].join("; "));
    }
  }
  if (U.hasStandardBrowserEnv && (n && f.isFunction(n) && (n = n(t)), n || n !== !1 && Tr(t.url))) {
    const d = o && l && _r.read(l);
    d && u.set(o, d);
  }
  return t;
}, Pr = typeof XMLHttpRequest < "u", Br = Pr && function(e) {
  return new Promise(function(r, n) {
    const o = ct(e);
    let l = o.data;
    const u = L.from(o.headers).normalize();
    let { responseType: h, onUploadProgress: w, onDownloadProgress: d } = o, m, x, A, F, b;
    function g() {
      F && F(), b && b(), o.cancelToken && o.cancelToken.unsubscribe(m), o.signal && o.signal.removeEventListener("abort", m);
    }
    let E = new XMLHttpRequest();
    E.open(o.method.toUpperCase(), o.url, !0), E.timeout = o.timeout;
    function T() {
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
        r(q), g();
      }, function(q) {
        n(q), g();
      }, B), E = null;
    }
    "onloadend" in E ? E.onloadend = T : E.onreadystatechange = function() {
      !E || E.readyState !== 4 || E.status === 0 && !(E.responseURL && E.responseURL.indexOf("file:") === 0) || setTimeout(T);
    }, E.onabort = function() {
      E && (n(new O("Request aborted", O.ECONNABORTED, e, E)), E = null);
    }, E.onerror = function() {
      n(new O("Network Error", O.ERR_NETWORK, e, E)), E = null;
    }, E.ontimeout = function() {
      let j = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const B = o.transitional || nt;
      o.timeoutErrorMessage && (j = o.timeoutErrorMessage), n(new O(
        j,
        B.clarifyTimeoutError ? O.ETIMEDOUT : O.ECONNABORTED,
        e,
        E
      )), E = null;
    }, l === void 0 && u.setContentType(null), "setRequestHeader" in E && f.forEach(u.toJSON(), function(j, B) {
      E.setRequestHeader(B, j);
    }), f.isUndefined(o.withCredentials) || (E.withCredentials = !!o.withCredentials), h && h !== "json" && (E.responseType = o.responseType), d && ([A, b] = ne(d, !0), E.addEventListener("progress", A)), w && E.upload && ([x, F] = ne(w), E.upload.addEventListener("progress", x), E.upload.addEventListener("loadend", F)), (o.cancelToken || o.signal) && (m = (N) => {
      E && (n(!N || N.type ? new V(null, e, E) : N), E.abort(), E = null);
    }, o.cancelToken && o.cancelToken.subscribe(m), o.signal && (o.signal.aborted ? m() : o.signal.addEventListener("abort", m)));
    const _ = Or(o.url);
    if (_ && U.protocols.indexOf(_) === -1) {
      n(new O("Unsupported protocol " + _ + ":", O.ERR_BAD_REQUEST, e));
      return;
    }
    E.send(l || null);
  });
}, Ur = (e, t) => {
  const { length: r } = e = e ? e.filter(Boolean) : [];
  if (t || r) {
    let n = new AbortController(), o;
    const l = function(d) {
      if (!o) {
        o = !0, h();
        const m = d instanceof Error ? d : this.reason;
        n.abort(m instanceof O ? m : new V(m instanceof Error ? m.message : m));
      }
    };
    let u = t && setTimeout(() => {
      u = null, l(new O(`timeout ${t} of ms exceeded`, O.ETIMEDOUT));
    }, t);
    const h = () => {
      e && (u && clearTimeout(u), u = null, e.forEach((d) => {
        d.unsubscribe ? d.unsubscribe(l) : d.removeEventListener("abort", l);
      }), e = null);
    };
    e.forEach((d) => d.addEventListener("abort", l));
    const { signal: w } = n;
    return w.unsubscribe = () => f.asap(h), w;
  }
}, Dr = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, o;
  for (; n < r; )
    o = n + t, yield e.slice(n, o), n = o;
}, vr = async function* (e, t) {
  for await (const r of Lr(e))
    yield* Dr(r, t);
}, Lr = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await t.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await t.cancel();
  }
}, Le = (e, t, r, n) => {
  const o = vr(e, t);
  let l = 0, u, h = (w) => {
    u || (u = !0, n && n(w));
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
        if (r) {
          let A = l += x;
          r(A);
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
}, ue = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", lt = ue && typeof ReadableStream == "function", jr = ue && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), ut = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, kr = lt && ut(() => {
  let e = !1;
  const t = new Request(U.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), je = 64 * 1024, xe = lt && ut(() => f.isReadableStream(new Response("").body)), se = {
  stream: xe && ((e) => e.body)
};
ue && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !se[t] && (se[t] = f.isFunction(e[t]) ? (r) => r[t]() : (r, n) => {
      throw new O(`Response type '${t}' is not supported`, O.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const Mr = async (e) => {
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
    return (await jr(e)).byteLength;
}, qr = async (e, t) => {
  const r = f.toFiniteNumber(e.getContentLength());
  return r ?? Mr(t);
}, Ir = ue && (async (e) => {
  let {
    url: t,
    method: r,
    data: n,
    signal: o,
    cancelToken: l,
    timeout: u,
    onDownloadProgress: h,
    onUploadProgress: w,
    responseType: d,
    headers: m,
    withCredentials: x = "same-origin",
    fetchOptions: A
  } = ct(e);
  d = d ? (d + "").toLowerCase() : "text";
  let F = Ur([o, l && l.toAbortSignal()], u), b;
  const g = F && F.unsubscribe && (() => {
    F.unsubscribe();
  });
  let E;
  try {
    if (w && kr && r !== "get" && r !== "head" && (E = await qr(m, n)) !== 0) {
      let B = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), M;
      if (f.isFormData(n) && (M = B.headers.get("content-type")) && m.setContentType(M), B.body) {
        const [q, $] = Ue(
          E,
          ne(De(w))
        );
        n = Le(B.body, je, q, $);
      }
    }
    f.isString(x) || (x = x ? "include" : "omit");
    const T = "credentials" in Request.prototype;
    b = new Request(t, {
      ...A,
      signal: F,
      method: r.toUpperCase(),
      headers: m.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: T ? x : void 0
    });
    let _ = await fetch(b, A);
    const N = xe && (d === "stream" || d === "response");
    if (xe && (h || N && g)) {
      const B = {};
      ["status", "statusText", "headers"].forEach((C) => {
        B[C] = _[C];
      });
      const M = f.toFiniteNumber(_.headers.get("content-length")), [q, $] = h && Ue(
        M,
        ne(De(h), !0)
      ) || [];
      _ = new Response(
        Le(_.body, je, q, () => {
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
  } catch (T) {
    throw g && g(), T && T.name === "TypeError" && /Load failed|fetch/i.test(T.message) ? Object.assign(
      new O("Network Error", O.ERR_NETWORK, e, b),
      {
        cause: T.cause || T
      }
    ) : O.from(T, T && T.code, e, b);
  }
}), Ee = {
  http: rr,
  xhr: Br,
  fetch: Ir
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
const ke = (e) => `- ${e}`, Hr = (e) => f.isFunction(e) || e === null || e === !1, ft = {
  getAdapter: (e) => {
    e = f.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const o = {};
    for (let l = 0; l < t; l++) {
      r = e[l];
      let u;
      if (n = r, !Hr(r) && (n = Ee[(u = String(r)).toLowerCase()], n === void 0))
        throw new O(`Unknown adapter '${u}'`);
      if (n)
        break;
      o[u || "#" + l] = n;
    }
    if (!n) {
      const l = Object.entries(o).map(
        ([h, w]) => `adapter ${h} ` + (w === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let u = t ? l.length > 1 ? `since :
` + l.map(ke).join(`
`) : " " + ke(l[0]) : "as no adapter specified";
      throw new O(
        "There is no suitable adapter to dispatch the request " + u,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Ee
};
function pe(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new V(null, e);
}
function Me(e) {
  return pe(e), e.headers = L.from(e.headers), e.data = he.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ft.getAdapter(e.adapter || Z.adapter)(e).then(function(n) {
    return pe(e), n.data = he.call(
      e,
      e.transformResponse,
      n
    ), n.headers = L.from(n.headers), n;
  }, function(n) {
    return ot(n) || (pe(e), n && n.response && (n.response.data = he.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = L.from(n.response.headers))), Promise.reject(n);
  });
}
const dt = "1.10.0", fe = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  fe[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const qe = {};
fe.transitional = function(t, r, n) {
  function o(l, u) {
    return "[Axios v" + dt + "] Transitional option '" + l + "'" + u + (n ? ". " + n : "");
  }
  return (l, u, h) => {
    if (t === !1)
      throw new O(
        o(u, " has been removed" + (r ? " in " + r : "")),
        O.ERR_DEPRECATED
      );
    return r && !qe[u] && (qe[u] = !0, console.warn(
      o(
        u,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(l, u, h) : !0;
  };
};
fe.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function zr(e, t, r) {
  if (typeof e != "object")
    throw new O("options must be an object", O.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const l = n[o], u = t[l];
    if (u) {
      const h = e[l], w = h === void 0 || u(h, l, e);
      if (w !== !0)
        throw new O("option " + l + " must be " + w, O.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new O("Unknown option " + l, O.ERR_BAD_OPTION);
  }
}
const re = {
  assertOptions: zr,
  validators: fe
}, I = re.validators;
let z = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Pe(),
      response: new Pe()
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
  async request(t, r) {
    try {
      return await this._request(t, r);
    } catch (n) {
      if (n instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const l = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? l && !String(n.stack).endsWith(l.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + l) : n.stack = l;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = J(this.defaults, r);
    const { transitional: n, paramsSerializer: o, headers: l } = r;
    n !== void 0 && re.assertOptions(n, {
      silentJSONParsing: I.transitional(I.boolean),
      forcedJSONParsing: I.transitional(I.boolean),
      clarifyTimeoutError: I.transitional(I.boolean)
    }, !1), o != null && (f.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : re.assertOptions(o, {
      encode: I.function,
      serialize: I.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), re.assertOptions(r, {
      baseUrl: I.spelling("baseURL"),
      withXsrfToken: I.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let u = l && f.merge(
      l.common,
      l[r.method]
    );
    l && f.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (b) => {
        delete l[b];
      }
    ), r.headers = L.concat(u, l);
    const h = [];
    let w = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(r) === !1 || (w = w && g.synchronous, h.unshift(g.fulfilled, g.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function(g) {
      d.push(g.fulfilled, g.rejected);
    });
    let m, x = 0, A;
    if (!w) {
      const b = [Me.bind(this), void 0];
      for (b.unshift.apply(b, h), b.push.apply(b, d), A = b.length, m = Promise.resolve(r); x < A; )
        m = m.then(b[x++], b[x++]);
      return m;
    }
    A = h.length;
    let F = r;
    for (x = 0; x < A; ) {
      const b = h[x++], g = h[x++];
      try {
        F = b(F);
      } catch (E) {
        g.call(this, E);
        break;
      }
    }
    try {
      m = Me.call(this, F);
    } catch (b) {
      return Promise.reject(b);
    }
    for (x = 0, A = d.length; x < A; )
      m = m.then(d[x++], d[x++]);
    return m;
  }
  getUri(t) {
    t = J(this.defaults, t);
    const r = at(t.baseURL, t.url, t.allowAbsoluteUrls);
    return rt(r, t.params, t.paramsSerializer);
  }
};
f.forEach(["delete", "get", "head", "options"], function(t) {
  z.prototype[t] = function(r, n) {
    return this.request(J(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
f.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(l, u, h) {
      return this.request(J(h || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: l,
        data: u
      }));
    };
  }
  z.prototype[t] = r(), z.prototype[t + "Form"] = r(!0);
});
let Jr = class ht {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(l) {
      r = l;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners) return;
      let l = n._listeners.length;
      for (; l-- > 0; )
        n._listeners[l](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let l;
      const u = new Promise((h) => {
        n.subscribe(h), l = h;
      }).then(o);
      return u.cancel = function() {
        n.unsubscribe(l);
      }, u;
    }, t(function(l, u, h) {
      n.reason || (n.reason = new V(l, u, h), r(n.reason));
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
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), r = (n) => {
      t.abort(n);
    };
    return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
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
function $r(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Wr(e) {
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
  const t = new z(e), r = Je(z.prototype.request, t);
  return f.extend(r, z.prototype, t, { allOwnKeys: !0 }), f.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(o) {
    return pt(J(e, o));
  }, r;
}
const P = pt(Z);
P.Axios = z;
P.CanceledError = V;
P.CancelToken = Jr;
P.isCancel = ot;
P.VERSION = dt;
P.toFormData = le;
P.AxiosError = O;
P.Cancel = P.CanceledError;
P.all = function(t) {
  return Promise.all(t);
};
P.spread = $r;
P.isAxiosError = Wr;
P.mergeConfig = J;
P.AxiosHeaders = L;
P.formToJSON = (e) => st(f.isHTMLForm(e) ? new FormData(e) : e);
P.getAdapter = ft.getAdapter;
P.HttpStatusCode = Re;
P.default = P;
const {
  Axios: an,
  AxiosError: cn,
  CanceledError: ln,
  isCancel: un,
  CancelToken: fn,
  VERSION: dn,
  all: hn,
  Cancel: pn,
  isAxiosError: mn,
  spread: yn,
  toFormData: bn,
  AxiosHeaders: wn,
  HttpStatusCode: xn,
  formToJSON: En,
  getAdapter: Rn,
  mergeConfig: Sn
} = P;
var Vr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Kr(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var me = { exports: {} };
const Xr = {}, Gr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xr
}, Symbol.toStringTag, { value: "Module" })), Ie = /* @__PURE__ */ Kr(Gr);
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.8.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2023
 * @license MIT
 */
var He;
function Yr() {
  return He || (He = 1, function(e) {
    (function() {
      var t = "input is invalid type", r = "finalize already called", n = typeof window == "object", o = n ? window : {};
      o.JS_MD5_NO_WINDOW && (n = !1);
      var l = !n && typeof self == "object", u = !o.JS_MD5_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
      u ? o = Vr : l && (o = self);
      var h = !o.JS_MD5_NO_COMMON_JS && !0 && e.exports, w = !o.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", d = "0123456789abcdef".split(""), m = [128, 32768, 8388608, -2147483648], x = [0, 8, 16, 24], A = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], F = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), b = [], g;
      if (w) {
        var E = new ArrayBuffer(68);
        g = new Uint8Array(E), b = new Uint32Array(E);
      }
      var T = Array.isArray;
      (o.JS_MD5_NO_NODE_JS || !T) && (T = function(s) {
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
        if (!T(s) && !_(s))
          throw new Error(t);
        return [s, !1];
      }, j = function(s) {
        return function(a) {
          return new C(!0).update(a)[s]();
        };
      }, B = function() {
        var s = j("hex");
        u && (s = M(s)), s.create = function() {
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
        var a = Ie, c = Ie.Buffer, i;
        c.from && !o.JS_MD5_NO_BUFFER_FROM ? i = c.from : i = function(y) {
          return new c(y);
        };
        var R = function(y) {
          if (typeof y == "string")
            return a.createHash("md5").update(y, "utf8").digest("hex");
          if (y == null)
            throw new Error(t);
          return y.constructor === ArrayBuffer && (y = new Uint8Array(y)), T(y) || _(y) || y.constructor === c ? a.createHash("md5").update(i(y)).digest("hex") : s(y);
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
          throw new Error(r);
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
          s = R[y++], a = R[y++], c = R[y++], i += F[s >>> 2] + F[(s << 4 | a >>> 4) & 63] + F[(a << 2 | c >>> 6) & 63] + F[c & 63];
        return s = R[y], i += F[s >>> 2] + F[s << 4 & 63] + "==", i;
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
        var D = [], Fe = [];
        for (c = 0; c < 64; ++c) {
          var Te = s[c] || 0;
          D[c] = 92 ^ Te, Fe[c] = 54 ^ Te;
        }
        C.call(this, a), this.update(Fe), this.oKeyPad = D, this.inner = !0, this.sharedMemory = a;
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
var Zr = Yr();
const Ae = "rt-translations", Qr = "/translations-api/v1";
function en() {
  return navigator.language || "en";
}
function mt() {
  return JSON.parse(localStorage.getItem(Ae) || "{}");
}
function yt(e, t, r) {
  const n = mt();
  n[e] || (n[e] = {}), n[e][t] = r, localStorage.setItem(Ae, JSON.stringify(n));
}
function tn(e, t) {
  var n;
  return ((n = mt()[e]) == null ? void 0 : n[t]) || null;
}
async function rn(e, t) {
  console.log(`Fetching translation for "${e}" in language "${t}"`);
  try {
    const { data: r } = await P.post(Qr, {
      lang: t,
      texts: [e]
    });
    console.log("Fetch translation data", r);
    const n = r.translations || e;
    return console.log(`Translation for "${e}" in "${t}":`, n[0]), yt(e, t, n[0].value), n[0].value;
  } catch (r) {
    return console.error(`Error fetching translation for "${e}"`, r), e;
  }
}
function nn(e, t, r = !1) {
  r ? e.querySelectorAll("*").forEach((n) => {
    n.childNodes.length === 1 && n.childNodes[0].nodeType === 3 && (n.textContent = t);
  }) : e.textContent = t;
}
async function ze(e, t = !1) {
  const r = en(), n = Zr.md5(e.textContent.trim());
  let o = tn(n, r);
  o || (o = await rn(e.textContent, r)), nn(e, o, t), yt(n, r, o);
}
const gn = {
  mounted(e, t) {
    localStorage.removeItem(Ae);
    const r = t.modifiers.children, n = t.modifiers.global;
    ze(e, r), n && window.addEventListener("language-changed", () => {
      ze(e, r);
    });
  },
  unmounted(e) {
    e._translateCleanup && e._translateCleanup();
  }
};
export {
  gn as RTTranslate
};
