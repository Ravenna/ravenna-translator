var Z = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Q(s) {
  if (Object.prototype.hasOwnProperty.call(s, "__esModule")) return s;
  var c = s.default;
  if (typeof c == "function") {
    var u = function h() {
      return this instanceof h ? Reflect.construct(c, arguments, this.constructor) : c.apply(this, arguments);
    };
    u.prototype = c.prototype;
  } else u = {};
  return Object.defineProperty(u, "__esModule", { value: !0 }), Object.keys(s).forEach(function(h) {
    var d = Object.getOwnPropertyDescriptor(s, h);
    Object.defineProperty(u, h, d.get ? d : {
      enumerable: !0,
      get: function() {
        return s[h];
      }
    });
  }), u;
}
var M = { exports: {} };
const tt = {}, rt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tt
}, Symbol.toStringTag, { value: "Module" })), z = /* @__PURE__ */ Q(rt);
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.8.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2023
 * @license MIT
 */
var k;
function et() {
  return k || (k = 1, function(s) {
    (function() {
      var c = "input is invalid type", u = "finalize already called", h = typeof window == "object", d = h ? window : {};
      d.JS_MD5_NO_WINDOW && (h = !1);
      var F = !h && typeof self == "object", x = !d.JS_MD5_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
      x ? d = Z : F && (d = self);
      var p = !d.JS_MD5_NO_COMMON_JS && !0 && s.exports, w = !d.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", l = "0123456789abcdef".split(""), m = [128, 32768, 8388608, -2147483648], E = [0, 8, 16, 24], O = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), v = [], C;
      if (w) {
        var U = new ArrayBuffer(68);
        C = new Uint8Array(U), v = new Uint32Array(U);
      }
      var g = Array.isArray;
      (d.JS_MD5_NO_NODE_JS || !g) && (g = function(t) {
        return Object.prototype.toString.call(t) === "[object Array]";
      });
      var S = ArrayBuffer.isView;
      w && (d.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !S) && (S = function(t) {
        return typeof t == "object" && t.buffer && t.buffer.constructor === ArrayBuffer;
      });
      var j = function(t) {
        var e = typeof t;
        if (e === "string")
          return [t, !0];
        if (e !== "object" || t === null)
          throw new Error(c);
        if (w && t.constructor === ArrayBuffer)
          return [new Uint8Array(t), !1];
        if (!g(t) && !S(t))
          throw new Error(c);
        return [t, !1];
      }, D = function(t) {
        return function(e) {
          return new y(!0).update(e)[t]();
        };
      }, q = function() {
        var t = D("hex");
        x && (t = G(t)), t.create = function() {
          return new y();
        }, t.update = function(r) {
          return t.create().update(r);
        };
        for (var e = 0; e < O.length; ++e) {
          var n = O[e];
          t[n] = D(n);
        }
        return t;
      }, G = function(t) {
        var e = z, n = z.Buffer, r;
        n.from && !d.JS_MD5_NO_BUFFER_FROM ? r = n.from : r = function(o) {
          return new n(o);
        };
        var a = function(o) {
          if (typeof o == "string")
            return e.createHash("md5").update(o, "utf8").digest("hex");
          if (o == null)
            throw new Error(c);
          return o.constructor === ArrayBuffer && (o = new Uint8Array(o)), g(o) || S(o) || o.constructor === n ? e.createHash("md5").update(r(o)).digest("hex") : t(o);
        };
        return a;
      }, I = function(t) {
        return function(e, n) {
          return new N(e, !0).update(n)[t]();
        };
      }, X = function() {
        var t = I("hex");
        t.create = function(r) {
          return new N(r);
        }, t.update = function(r, a) {
          return t.create(r).update(a);
        };
        for (var e = 0; e < O.length; ++e) {
          var n = O[e];
          t[n] = I(n);
        }
        return t;
      };
      function y(t) {
        if (t)
          v[0] = v[16] = v[1] = v[2] = v[3] = v[4] = v[5] = v[6] = v[7] = v[8] = v[9] = v[10] = v[11] = v[12] = v[13] = v[14] = v[15] = 0, this.blocks = v, this.buffer8 = C;
        else if (w) {
          var e = new ArrayBuffer(68);
          this.buffer8 = new Uint8Array(e), this.blocks = new Uint32Array(e);
        } else
          this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;
      }
      y.prototype.update = function(t) {
        if (this.finalized)
          throw new Error(u);
        var e = j(t);
        t = e[0];
        for (var n = e[1], r, a = 0, o, i = t.length, f = this.blocks, _ = this.buffer8; a < i; ) {
          if (this.hashed && (this.hashed = !1, f[0] = f[16], f[16] = f[1] = f[2] = f[3] = f[4] = f[5] = f[6] = f[7] = f[8] = f[9] = f[10] = f[11] = f[12] = f[13] = f[14] = f[15] = 0), n)
            if (w)
              for (o = this.start; a < i && o < 64; ++a)
                r = t.charCodeAt(a), r < 128 ? _[o++] = r : r < 2048 ? (_[o++] = 192 | r >>> 6, _[o++] = 128 | r & 63) : r < 55296 || r >= 57344 ? (_[o++] = 224 | r >>> 12, _[o++] = 128 | r >>> 6 & 63, _[o++] = 128 | r & 63) : (r = 65536 + ((r & 1023) << 10 | t.charCodeAt(++a) & 1023), _[o++] = 240 | r >>> 18, _[o++] = 128 | r >>> 12 & 63, _[o++] = 128 | r >>> 6 & 63, _[o++] = 128 | r & 63);
            else
              for (o = this.start; a < i && o < 64; ++a)
                r = t.charCodeAt(a), r < 128 ? f[o >>> 2] |= r << E[o++ & 3] : r < 2048 ? (f[o >>> 2] |= (192 | r >>> 6) << E[o++ & 3], f[o >>> 2] |= (128 | r & 63) << E[o++ & 3]) : r < 55296 || r >= 57344 ? (f[o >>> 2] |= (224 | r >>> 12) << E[o++ & 3], f[o >>> 2] |= (128 | r >>> 6 & 63) << E[o++ & 3], f[o >>> 2] |= (128 | r & 63) << E[o++ & 3]) : (r = 65536 + ((r & 1023) << 10 | t.charCodeAt(++a) & 1023), f[o >>> 2] |= (240 | r >>> 18) << E[o++ & 3], f[o >>> 2] |= (128 | r >>> 12 & 63) << E[o++ & 3], f[o >>> 2] |= (128 | r >>> 6 & 63) << E[o++ & 3], f[o >>> 2] |= (128 | r & 63) << E[o++ & 3]);
          else if (w)
            for (o = this.start; a < i && o < 64; ++a)
              _[o++] = t[a];
          else
            for (o = this.start; a < i && o < 64; ++a)
              f[o >>> 2] |= t[a] << E[o++ & 3];
          this.lastByteIndex = o, this.bytes += o - this.start, o >= 64 ? (this.start = o - 64, this.hash(), this.hashed = !0) : this.start = o;
        }
        return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
      }, y.prototype.finalize = function() {
        if (!this.finalized) {
          this.finalized = !0;
          var t = this.blocks, e = this.lastByteIndex;
          t[e >>> 2] |= m[e & 3], e >= 56 && (this.hashed || this.hash(), t[0] = t[16], t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0), t[14] = this.bytes << 3, t[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
        }
      }, y.prototype.hash = function() {
        var t, e, n, r, a, o, i = this.blocks;
        this.first ? (t = i[0] - 680876937, t = (t << 7 | t >>> 25) - 271733879 << 0, r = (-1732584194 ^ t & 2004318071) + i[1] - 117830708, r = (r << 12 | r >>> 20) + t << 0, n = (-271733879 ^ r & (t ^ -271733879)) + i[2] - 1126478375, n = (n << 17 | n >>> 15) + r << 0, e = (t ^ n & (r ^ t)) + i[3] - 1316259209, e = (e << 22 | e >>> 10) + n << 0) : (t = this.h0, e = this.h1, n = this.h2, r = this.h3, t += (r ^ e & (n ^ r)) + i[0] - 680876936, t = (t << 7 | t >>> 25) + e << 0, r += (n ^ t & (e ^ n)) + i[1] - 389564586, r = (r << 12 | r >>> 20) + t << 0, n += (e ^ r & (t ^ e)) + i[2] + 606105819, n = (n << 17 | n >>> 15) + r << 0, e += (t ^ n & (r ^ t)) + i[3] - 1044525330, e = (e << 22 | e >>> 10) + n << 0), t += (r ^ e & (n ^ r)) + i[4] - 176418897, t = (t << 7 | t >>> 25) + e << 0, r += (n ^ t & (e ^ n)) + i[5] + 1200080426, r = (r << 12 | r >>> 20) + t << 0, n += (e ^ r & (t ^ e)) + i[6] - 1473231341, n = (n << 17 | n >>> 15) + r << 0, e += (t ^ n & (r ^ t)) + i[7] - 45705983, e = (e << 22 | e >>> 10) + n << 0, t += (r ^ e & (n ^ r)) + i[8] + 1770035416, t = (t << 7 | t >>> 25) + e << 0, r += (n ^ t & (e ^ n)) + i[9] - 1958414417, r = (r << 12 | r >>> 20) + t << 0, n += (e ^ r & (t ^ e)) + i[10] - 42063, n = (n << 17 | n >>> 15) + r << 0, e += (t ^ n & (r ^ t)) + i[11] - 1990404162, e = (e << 22 | e >>> 10) + n << 0, t += (r ^ e & (n ^ r)) + i[12] + 1804603682, t = (t << 7 | t >>> 25) + e << 0, r += (n ^ t & (e ^ n)) + i[13] - 40341101, r = (r << 12 | r >>> 20) + t << 0, n += (e ^ r & (t ^ e)) + i[14] - 1502002290, n = (n << 17 | n >>> 15) + r << 0, e += (t ^ n & (r ^ t)) + i[15] + 1236535329, e = (e << 22 | e >>> 10) + n << 0, t += (n ^ r & (e ^ n)) + i[1] - 165796510, t = (t << 5 | t >>> 27) + e << 0, r += (e ^ n & (t ^ e)) + i[6] - 1069501632, r = (r << 9 | r >>> 23) + t << 0, n += (t ^ e & (r ^ t)) + i[11] + 643717713, n = (n << 14 | n >>> 18) + r << 0, e += (r ^ t & (n ^ r)) + i[0] - 373897302, e = (e << 20 | e >>> 12) + n << 0, t += (n ^ r & (e ^ n)) + i[5] - 701558691, t = (t << 5 | t >>> 27) + e << 0, r += (e ^ n & (t ^ e)) + i[10] + 38016083, r = (r << 9 | r >>> 23) + t << 0, n += (t ^ e & (r ^ t)) + i[15] - 660478335, n = (n << 14 | n >>> 18) + r << 0, e += (r ^ t & (n ^ r)) + i[4] - 405537848, e = (e << 20 | e >>> 12) + n << 0, t += (n ^ r & (e ^ n)) + i[9] + 568446438, t = (t << 5 | t >>> 27) + e << 0, r += (e ^ n & (t ^ e)) + i[14] - 1019803690, r = (r << 9 | r >>> 23) + t << 0, n += (t ^ e & (r ^ t)) + i[3] - 187363961, n = (n << 14 | n >>> 18) + r << 0, e += (r ^ t & (n ^ r)) + i[8] + 1163531501, e = (e << 20 | e >>> 12) + n << 0, t += (n ^ r & (e ^ n)) + i[13] - 1444681467, t = (t << 5 | t >>> 27) + e << 0, r += (e ^ n & (t ^ e)) + i[2] - 51403784, r = (r << 9 | r >>> 23) + t << 0, n += (t ^ e & (r ^ t)) + i[7] + 1735328473, n = (n << 14 | n >>> 18) + r << 0, e += (r ^ t & (n ^ r)) + i[12] - 1926607734, e = (e << 20 | e >>> 12) + n << 0, a = e ^ n, t += (a ^ r) + i[5] - 378558, t = (t << 4 | t >>> 28) + e << 0, r += (a ^ t) + i[8] - 2022574463, r = (r << 11 | r >>> 21) + t << 0, o = r ^ t, n += (o ^ e) + i[11] + 1839030562, n = (n << 16 | n >>> 16) + r << 0, e += (o ^ n) + i[14] - 35309556, e = (e << 23 | e >>> 9) + n << 0, a = e ^ n, t += (a ^ r) + i[1] - 1530992060, t = (t << 4 | t >>> 28) + e << 0, r += (a ^ t) + i[4] + 1272893353, r = (r << 11 | r >>> 21) + t << 0, o = r ^ t, n += (o ^ e) + i[7] - 155497632, n = (n << 16 | n >>> 16) + r << 0, e += (o ^ n) + i[10] - 1094730640, e = (e << 23 | e >>> 9) + n << 0, a = e ^ n, t += (a ^ r) + i[13] + 681279174, t = (t << 4 | t >>> 28) + e << 0, r += (a ^ t) + i[0] - 358537222, r = (r << 11 | r >>> 21) + t << 0, o = r ^ t, n += (o ^ e) + i[3] - 722521979, n = (n << 16 | n >>> 16) + r << 0, e += (o ^ n) + i[6] + 76029189, e = (e << 23 | e >>> 9) + n << 0, a = e ^ n, t += (a ^ r) + i[9] - 640364487, t = (t << 4 | t >>> 28) + e << 0, r += (a ^ t) + i[12] - 421815835, r = (r << 11 | r >>> 21) + t << 0, o = r ^ t, n += (o ^ e) + i[15] + 530742520, n = (n << 16 | n >>> 16) + r << 0, e += (o ^ n) + i[2] - 995338651, e = (e << 23 | e >>> 9) + n << 0, t += (n ^ (e | ~r)) + i[0] - 198630844, t = (t << 6 | t >>> 26) + e << 0, r += (e ^ (t | ~n)) + i[7] + 1126891415, r = (r << 10 | r >>> 22) + t << 0, n += (t ^ (r | ~e)) + i[14] - 1416354905, n = (n << 15 | n >>> 17) + r << 0, e += (r ^ (n | ~t)) + i[5] - 57434055, e = (e << 21 | e >>> 11) + n << 0, t += (n ^ (e | ~r)) + i[12] + 1700485571, t = (t << 6 | t >>> 26) + e << 0, r += (e ^ (t | ~n)) + i[3] - 1894986606, r = (r << 10 | r >>> 22) + t << 0, n += (t ^ (r | ~e)) + i[10] - 1051523, n = (n << 15 | n >>> 17) + r << 0, e += (r ^ (n | ~t)) + i[1] - 2054922799, e = (e << 21 | e >>> 11) + n << 0, t += (n ^ (e | ~r)) + i[8] + 1873313359, t = (t << 6 | t >>> 26) + e << 0, r += (e ^ (t | ~n)) + i[15] - 30611744, r = (r << 10 | r >>> 22) + t << 0, n += (t ^ (r | ~e)) + i[6] - 1560198380, n = (n << 15 | n >>> 17) + r << 0, e += (r ^ (n | ~t)) + i[13] + 1309151649, e = (e << 21 | e >>> 11) + n << 0, t += (n ^ (e | ~r)) + i[4] - 145523070, t = (t << 6 | t >>> 26) + e << 0, r += (e ^ (t | ~n)) + i[11] - 1120210379, r = (r << 10 | r >>> 22) + t << 0, n += (t ^ (r | ~e)) + i[2] + 718787259, n = (n << 15 | n >>> 17) + r << 0, e += (r ^ (n | ~t)) + i[9] - 343485551, e = (e << 21 | e >>> 11) + n << 0, this.first ? (this.h0 = t + 1732584193 << 0, this.h1 = e - 271733879 << 0, this.h2 = n - 1732584194 << 0, this.h3 = r + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + t << 0, this.h1 = this.h1 + e << 0, this.h2 = this.h2 + n << 0, this.h3 = this.h3 + r << 0);
      }, y.prototype.hex = function() {
        this.finalize();
        var t = this.h0, e = this.h1, n = this.h2, r = this.h3;
        return l[t >>> 4 & 15] + l[t & 15] + l[t >>> 12 & 15] + l[t >>> 8 & 15] + l[t >>> 20 & 15] + l[t >>> 16 & 15] + l[t >>> 28 & 15] + l[t >>> 24 & 15] + l[e >>> 4 & 15] + l[e & 15] + l[e >>> 12 & 15] + l[e >>> 8 & 15] + l[e >>> 20 & 15] + l[e >>> 16 & 15] + l[e >>> 28 & 15] + l[e >>> 24 & 15] + l[n >>> 4 & 15] + l[n & 15] + l[n >>> 12 & 15] + l[n >>> 8 & 15] + l[n >>> 20 & 15] + l[n >>> 16 & 15] + l[n >>> 28 & 15] + l[n >>> 24 & 15] + l[r >>> 4 & 15] + l[r & 15] + l[r >>> 12 & 15] + l[r >>> 8 & 15] + l[r >>> 20 & 15] + l[r >>> 16 & 15] + l[r >>> 28 & 15] + l[r >>> 24 & 15];
      }, y.prototype.toString = y.prototype.hex, y.prototype.digest = function() {
        this.finalize();
        var t = this.h0, e = this.h1, n = this.h2, r = this.h3;
        return [
          t & 255,
          t >>> 8 & 255,
          t >>> 16 & 255,
          t >>> 24 & 255,
          e & 255,
          e >>> 8 & 255,
          e >>> 16 & 255,
          e >>> 24 & 255,
          n & 255,
          n >>> 8 & 255,
          n >>> 16 & 255,
          n >>> 24 & 255,
          r & 255,
          r >>> 8 & 255,
          r >>> 16 & 255,
          r >>> 24 & 255
        ];
      }, y.prototype.array = y.prototype.digest, y.prototype.arrayBuffer = function() {
        this.finalize();
        var t = new ArrayBuffer(16), e = new Uint32Array(t);
        return e[0] = this.h0, e[1] = this.h1, e[2] = this.h2, e[3] = this.h3, t;
      }, y.prototype.buffer = y.prototype.arrayBuffer, y.prototype.base64 = function() {
        for (var t, e, n, r = "", a = this.array(), o = 0; o < 15; )
          t = a[o++], e = a[o++], n = a[o++], r += b[t >>> 2] + b[(t << 4 | e >>> 4) & 63] + b[(e << 2 | n >>> 6) & 63] + b[n & 63];
        return t = a[o], r += b[t >>> 2] + b[t << 4 & 63] + "==", r;
      };
      function N(t, e) {
        var n, r = j(t);
        if (t = r[0], r[1]) {
          var a = [], o = t.length, i = 0, f;
          for (n = 0; n < o; ++n)
            f = t.charCodeAt(n), f < 128 ? a[i++] = f : f < 2048 ? (a[i++] = 192 | f >>> 6, a[i++] = 128 | f & 63) : f < 55296 || f >= 57344 ? (a[i++] = 224 | f >>> 12, a[i++] = 128 | f >>> 6 & 63, a[i++] = 128 | f & 63) : (f = 65536 + ((f & 1023) << 10 | t.charCodeAt(++n) & 1023), a[i++] = 240 | f >>> 18, a[i++] = 128 | f >>> 12 & 63, a[i++] = 128 | f >>> 6 & 63, a[i++] = 128 | f & 63);
          t = a;
        }
        t.length > 64 && (t = new y(!0).update(t).array());
        var _ = [], J = [];
        for (n = 0; n < 64; ++n) {
          var P = t[n] || 0;
          _[n] = 92 ^ P, J[n] = 54 ^ P;
        }
        y.call(this, e), this.update(J), this.oKeyPad = _, this.inner = !0, this.sharedMemory = e;
      }
      N.prototype = new y(), N.prototype.finalize = function() {
        if (y.prototype.finalize.call(this), this.inner) {
          this.inner = !1;
          var t = this.array();
          y.call(this, this.sharedMemory), this.update(this.oKeyPad), this.update(t), y.prototype.finalize.call(this);
        }
      };
      var A = q();
      A.md5 = A, A.md5.hmac = X(), p ? s.exports = A : d.md5 = A;
    })();
  }(M)), M.exports;
}
var nt = et();
const W = "rt-translations", it = "/translations-api/v1", H = 100;
function $(s) {
  return /[^\s.,!?;:()]+/.test(s);
}
function T(s) {
  s.getAnimations().forEach((c) => {
    c.cancel();
  });
}
function ot(s) {
  s.animate([
    { opacity: 1 },
    { opacity: 0.5 },
    { opacity: 1 }
  ], {
    duration: 1500,
    iterations: 1 / 0
  });
}
function L() {
  return navigator.language || "en-US";
}
function Y() {
  return JSON.parse(localStorage.getItem(W) || "{}");
}
function at(s, c, u) {
  const h = Y();
  console.log("Store translation", { key: s, lang: c, value: u }), h[s] || (h[s] = {}), h[s][c] = u, localStorage.setItem(W, JSON.stringify(h));
}
function R(s, c) {
  var h;
  return ((h = Y()[s]) == null ? void 0 : h[c]) || null;
}
async function st(s = [], c) {
  if (s.length === 0)
    return [];
  const u = await fetch(it, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      lang: c,
      texts: s
    })
  }).then((h) => h.json()).then((h) => h.translations || []).catch((h) => {
    throw console.error("Error fetching translations:", h), new Error("Failed to fetch translations");
  });
  return console.log("Fetched translations:", u), u;
}
function B(s, c, u) {
  const h = s.childNodes[c];
  h ? h.textContent = u : el.textContent = u, T(s);
}
function V(s, c, u) {
  if (s.nodeType === Node.TEXT_NODE && s.textContent.trim() && $(s.textContent)) {
    const h = s.textContent.trim(), d = L(), F = nt.md5(d + h), x = s.parentNode;
    x.dataset.translateKey = F, ot(x), u.push({ text: h, key: F, parent: x, index: c });
  } else s.nodeType === Node.ELEMENT_NODE && s.childNodes.forEach((h, d) => V(h, d, u));
}
async function ft(s, c) {
  for (let u = 0; u < s.length; u += H) {
    const h = s.slice(u, u + H), d = [];
    let F = h.reduce((x, p) => ($(p.text) ? x.push(p) : (console.warn(`Skipping invalid text: "${p.text}"`), d.push(p)), x), []);
    if (F = F.filter((x) => R(x.key, c) ? (console.log("Using stored translation for", x.text), B(x.parent, x.index, R(x.key, c)), d.push(x), !1) : !0), d.forEach((x) => {
      console.warn(`Invalid text skipped: "${x.text}"`), T(x.parent);
    }), F.length !== 0) {
      console.log("Fetching translations for chunk:", F);
      try {
        (await st(F.map((p) => p.text), c)).forEach((p) => {
          console.log(`Applying translation for key: ${p.key}, lang: ${c}, text: ${p.value}`), s.filter((l) => l.key === p.key).forEach((l) => {
            B(l.parent, l.index, p.value), at(l.key, c, p.value);
          });
        });
      } catch (x) {
        F.forEach((p) => {
          console.error(`Error fetching translation for: "${p.text}"`, x);
        });
        continue;
      }
      h.forEach((x) => {
        T(x.parent);
      });
    }
  }
}
async function K(s, c = !1) {
  var F, x;
  const u = L();
  if ((x = (F = window._ravennaTranslate) == null ? void 0 : F.defaultLanguages) != null && x.some((p) => p === u || p === u.split("-")[0] || p === u.split("-")[0].toUpperCase()))
    return;
  const h = [];
  V(s, 0, h);
  const d = h.filter((p) => {
    const w = R(p.key, u);
    return w ? (console.log("Using stored translation for", p.text, ":", w), B(p.parent, p.index, w), !1) : !0;
  });
  if (d.length !== 0)
    try {
      ft(d, u);
    } catch (p) {
      h.forEach((w) => {
        T(w.parent);
      }), console.error("Translation error:", p);
    }
}
const ht = {
  mounted(s, c) {
    const u = c.modifiers.children, h = c.modifiers.global;
    K(s, u), h && window.addEventListener("language-changed", () => {
      K(s, u);
    });
  },
  unmounted(s) {
    s._translateCleanup && s._translateCleanup();
  }
};
export {
  ht as RTTranslate
};
