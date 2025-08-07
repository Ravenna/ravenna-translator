var Q = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function tt(a) {
  if (Object.prototype.hasOwnProperty.call(a, "__esModule")) return a;
  var f = a.default;
  if (typeof f == "function") {
    var s = function h() {
      return this instanceof h ? Reflect.construct(f, arguments, this.constructor) : f.apply(this, arguments);
    };
    s.prototype = f.prototype;
  } else s = {};
  return Object.defineProperty(s, "__esModule", { value: !0 }), Object.keys(a).forEach(function(h) {
    var x = Object.getOwnPropertyDescriptor(a, h);
    Object.defineProperty(s, h, x.get ? x : {
      enumerable: !0,
      get: function() {
        return a[h];
      }
    });
  }), s;
}
var M = { exports: {} };
const rt = {}, et = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rt
}, Symbol.toStringTag, { value: "Module" })), z = /* @__PURE__ */ tt(et);
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.8.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2023
 * @license MIT
 */
var H;
function nt() {
  return H || (H = 1, function(a) {
    (function() {
      var f = "input is invalid type", s = "finalize already called", h = typeof window == "object", x = h ? window : {};
      x.JS_MD5_NO_WINDOW && (h = !1);
      var F = !h && typeof self == "object", d = !x.JS_MD5_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
      d ? x = Q : F && (x = self);
      var v = !x.JS_MD5_NO_COMMON_JS && !0 && a.exports, E = !x.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", c = "0123456789abcdef".split(""), q = [128, 32768, 8388608, -2147483648], w = [0, 8, 16, 24], O = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], _ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), y = [], U;
      if (E) {
        var j = new ArrayBuffer(68);
        U = new Uint8Array(j), y = new Uint32Array(j);
      }
      var A = Array.isArray;
      (x.JS_MD5_NO_NODE_JS || !A) && (A = function(t) {
        return Object.prototype.toString.call(t) === "[object Array]";
      });
      var S = ArrayBuffer.isView;
      E && (x.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !S) && (S = function(t) {
        return typeof t == "object" && t.buffer && t.buffer.constructor === ArrayBuffer;
      });
      var D = function(t) {
        var e = typeof t;
        if (e === "string")
          return [t, !0];
        if (e !== "object" || t === null)
          throw new Error(f);
        if (E && t.constructor === ArrayBuffer)
          return [new Uint8Array(t), !1];
        if (!A(t) && !S(t))
          throw new Error(f);
        return [t, !1];
      }, I = function(t) {
        return function(e) {
          return new p(!0).update(e)[t]();
        };
      }, G = function() {
        var t = I("hex");
        d && (t = X(t)), t.create = function() {
          return new p();
        }, t.update = function(r) {
          return t.create().update(r);
        };
        for (var e = 0; e < O.length; ++e) {
          var n = O[e];
          t[n] = I(n);
        }
        return t;
      }, X = function(t) {
        var e = z, n = z.Buffer, r;
        n.from && !x.JS_MD5_NO_BUFFER_FROM ? r = n.from : r = function(i) {
          return new n(i);
        };
        var l = function(i) {
          if (typeof i == "string")
            return e.createHash("md5").update(i, "utf8").digest("hex");
          if (i == null)
            throw new Error(f);
          return i.constructor === ArrayBuffer && (i = new Uint8Array(i)), A(i) || S(i) || i.constructor === n ? e.createHash("md5").update(r(i)).digest("hex") : t(i);
        };
        return l;
      }, k = function(t) {
        return function(e, n) {
          return new T(e, !0).update(n)[t]();
        };
      }, Z = function() {
        var t = k("hex");
        t.create = function(r) {
          return new T(r);
        }, t.update = function(r, l) {
          return t.create(r).update(l);
        };
        for (var e = 0; e < O.length; ++e) {
          var n = O[e];
          t[n] = k(n);
        }
        return t;
      };
      function p(t) {
        if (t)
          y[0] = y[16] = y[1] = y[2] = y[3] = y[4] = y[5] = y[6] = y[7] = y[8] = y[9] = y[10] = y[11] = y[12] = y[13] = y[14] = y[15] = 0, this.blocks = y, this.buffer8 = U;
        else if (E) {
          var e = new ArrayBuffer(68);
          this.buffer8 = new Uint8Array(e), this.blocks = new Uint32Array(e);
        } else
          this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;
      }
      p.prototype.update = function(t) {
        if (this.finalized)
          throw new Error(s);
        var e = D(t);
        t = e[0];
        for (var n = e[1], r, l = 0, i, o = t.length, u = this.blocks, b = this.buffer8; l < o; ) {
          if (this.hashed && (this.hashed = !1, u[0] = u[16], u[16] = u[1] = u[2] = u[3] = u[4] = u[5] = u[6] = u[7] = u[8] = u[9] = u[10] = u[11] = u[12] = u[13] = u[14] = u[15] = 0), n)
            if (E)
              for (i = this.start; l < o && i < 64; ++l)
                r = t.charCodeAt(l), r < 128 ? b[i++] = r : r < 2048 ? (b[i++] = 192 | r >>> 6, b[i++] = 128 | r & 63) : r < 55296 || r >= 57344 ? (b[i++] = 224 | r >>> 12, b[i++] = 128 | r >>> 6 & 63, b[i++] = 128 | r & 63) : (r = 65536 + ((r & 1023) << 10 | t.charCodeAt(++l) & 1023), b[i++] = 240 | r >>> 18, b[i++] = 128 | r >>> 12 & 63, b[i++] = 128 | r >>> 6 & 63, b[i++] = 128 | r & 63);
            else
              for (i = this.start; l < o && i < 64; ++l)
                r = t.charCodeAt(l), r < 128 ? u[i >>> 2] |= r << w[i++ & 3] : r < 2048 ? (u[i >>> 2] |= (192 | r >>> 6) << w[i++ & 3], u[i >>> 2] |= (128 | r & 63) << w[i++ & 3]) : r < 55296 || r >= 57344 ? (u[i >>> 2] |= (224 | r >>> 12) << w[i++ & 3], u[i >>> 2] |= (128 | r >>> 6 & 63) << w[i++ & 3], u[i >>> 2] |= (128 | r & 63) << w[i++ & 3]) : (r = 65536 + ((r & 1023) << 10 | t.charCodeAt(++l) & 1023), u[i >>> 2] |= (240 | r >>> 18) << w[i++ & 3], u[i >>> 2] |= (128 | r >>> 12 & 63) << w[i++ & 3], u[i >>> 2] |= (128 | r >>> 6 & 63) << w[i++ & 3], u[i >>> 2] |= (128 | r & 63) << w[i++ & 3]);
          else if (E)
            for (i = this.start; l < o && i < 64; ++l)
              b[i++] = t[l];
          else
            for (i = this.start; l < o && i < 64; ++l)
              u[i >>> 2] |= t[l] << w[i++ & 3];
          this.lastByteIndex = i, this.bytes += i - this.start, i >= 64 ? (this.start = i - 64, this.hash(), this.hashed = !0) : this.start = i;
        }
        return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
      }, p.prototype.finalize = function() {
        if (!this.finalized) {
          this.finalized = !0;
          var t = this.blocks, e = this.lastByteIndex;
          t[e >>> 2] |= q[e & 3], e >= 56 && (this.hashed || this.hash(), t[0] = t[16], t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0), t[14] = this.bytes << 3, t[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
        }
      }, p.prototype.hash = function() {
        var t, e, n, r, l, i, o = this.blocks;
        this.first ? (t = o[0] - 680876937, t = (t << 7 | t >>> 25) - 271733879 << 0, r = (-1732584194 ^ t & 2004318071) + o[1] - 117830708, r = (r << 12 | r >>> 20) + t << 0, n = (-271733879 ^ r & (t ^ -271733879)) + o[2] - 1126478375, n = (n << 17 | n >>> 15) + r << 0, e = (t ^ n & (r ^ t)) + o[3] - 1316259209, e = (e << 22 | e >>> 10) + n << 0) : (t = this.h0, e = this.h1, n = this.h2, r = this.h3, t += (r ^ e & (n ^ r)) + o[0] - 680876936, t = (t << 7 | t >>> 25) + e << 0, r += (n ^ t & (e ^ n)) + o[1] - 389564586, r = (r << 12 | r >>> 20) + t << 0, n += (e ^ r & (t ^ e)) + o[2] + 606105819, n = (n << 17 | n >>> 15) + r << 0, e += (t ^ n & (r ^ t)) + o[3] - 1044525330, e = (e << 22 | e >>> 10) + n << 0), t += (r ^ e & (n ^ r)) + o[4] - 176418897, t = (t << 7 | t >>> 25) + e << 0, r += (n ^ t & (e ^ n)) + o[5] + 1200080426, r = (r << 12 | r >>> 20) + t << 0, n += (e ^ r & (t ^ e)) + o[6] - 1473231341, n = (n << 17 | n >>> 15) + r << 0, e += (t ^ n & (r ^ t)) + o[7] - 45705983, e = (e << 22 | e >>> 10) + n << 0, t += (r ^ e & (n ^ r)) + o[8] + 1770035416, t = (t << 7 | t >>> 25) + e << 0, r += (n ^ t & (e ^ n)) + o[9] - 1958414417, r = (r << 12 | r >>> 20) + t << 0, n += (e ^ r & (t ^ e)) + o[10] - 42063, n = (n << 17 | n >>> 15) + r << 0, e += (t ^ n & (r ^ t)) + o[11] - 1990404162, e = (e << 22 | e >>> 10) + n << 0, t += (r ^ e & (n ^ r)) + o[12] + 1804603682, t = (t << 7 | t >>> 25) + e << 0, r += (n ^ t & (e ^ n)) + o[13] - 40341101, r = (r << 12 | r >>> 20) + t << 0, n += (e ^ r & (t ^ e)) + o[14] - 1502002290, n = (n << 17 | n >>> 15) + r << 0, e += (t ^ n & (r ^ t)) + o[15] + 1236535329, e = (e << 22 | e >>> 10) + n << 0, t += (n ^ r & (e ^ n)) + o[1] - 165796510, t = (t << 5 | t >>> 27) + e << 0, r += (e ^ n & (t ^ e)) + o[6] - 1069501632, r = (r << 9 | r >>> 23) + t << 0, n += (t ^ e & (r ^ t)) + o[11] + 643717713, n = (n << 14 | n >>> 18) + r << 0, e += (r ^ t & (n ^ r)) + o[0] - 373897302, e = (e << 20 | e >>> 12) + n << 0, t += (n ^ r & (e ^ n)) + o[5] - 701558691, t = (t << 5 | t >>> 27) + e << 0, r += (e ^ n & (t ^ e)) + o[10] + 38016083, r = (r << 9 | r >>> 23) + t << 0, n += (t ^ e & (r ^ t)) + o[15] - 660478335, n = (n << 14 | n >>> 18) + r << 0, e += (r ^ t & (n ^ r)) + o[4] - 405537848, e = (e << 20 | e >>> 12) + n << 0, t += (n ^ r & (e ^ n)) + o[9] + 568446438, t = (t << 5 | t >>> 27) + e << 0, r += (e ^ n & (t ^ e)) + o[14] - 1019803690, r = (r << 9 | r >>> 23) + t << 0, n += (t ^ e & (r ^ t)) + o[3] - 187363961, n = (n << 14 | n >>> 18) + r << 0, e += (r ^ t & (n ^ r)) + o[8] + 1163531501, e = (e << 20 | e >>> 12) + n << 0, t += (n ^ r & (e ^ n)) + o[13] - 1444681467, t = (t << 5 | t >>> 27) + e << 0, r += (e ^ n & (t ^ e)) + o[2] - 51403784, r = (r << 9 | r >>> 23) + t << 0, n += (t ^ e & (r ^ t)) + o[7] + 1735328473, n = (n << 14 | n >>> 18) + r << 0, e += (r ^ t & (n ^ r)) + o[12] - 1926607734, e = (e << 20 | e >>> 12) + n << 0, l = e ^ n, t += (l ^ r) + o[5] - 378558, t = (t << 4 | t >>> 28) + e << 0, r += (l ^ t) + o[8] - 2022574463, r = (r << 11 | r >>> 21) + t << 0, i = r ^ t, n += (i ^ e) + o[11] + 1839030562, n = (n << 16 | n >>> 16) + r << 0, e += (i ^ n) + o[14] - 35309556, e = (e << 23 | e >>> 9) + n << 0, l = e ^ n, t += (l ^ r) + o[1] - 1530992060, t = (t << 4 | t >>> 28) + e << 0, r += (l ^ t) + o[4] + 1272893353, r = (r << 11 | r >>> 21) + t << 0, i = r ^ t, n += (i ^ e) + o[7] - 155497632, n = (n << 16 | n >>> 16) + r << 0, e += (i ^ n) + o[10] - 1094730640, e = (e << 23 | e >>> 9) + n << 0, l = e ^ n, t += (l ^ r) + o[13] + 681279174, t = (t << 4 | t >>> 28) + e << 0, r += (l ^ t) + o[0] - 358537222, r = (r << 11 | r >>> 21) + t << 0, i = r ^ t, n += (i ^ e) + o[3] - 722521979, n = (n << 16 | n >>> 16) + r << 0, e += (i ^ n) + o[6] + 76029189, e = (e << 23 | e >>> 9) + n << 0, l = e ^ n, t += (l ^ r) + o[9] - 640364487, t = (t << 4 | t >>> 28) + e << 0, r += (l ^ t) + o[12] - 421815835, r = (r << 11 | r >>> 21) + t << 0, i = r ^ t, n += (i ^ e) + o[15] + 530742520, n = (n << 16 | n >>> 16) + r << 0, e += (i ^ n) + o[2] - 995338651, e = (e << 23 | e >>> 9) + n << 0, t += (n ^ (e | ~r)) + o[0] - 198630844, t = (t << 6 | t >>> 26) + e << 0, r += (e ^ (t | ~n)) + o[7] + 1126891415, r = (r << 10 | r >>> 22) + t << 0, n += (t ^ (r | ~e)) + o[14] - 1416354905, n = (n << 15 | n >>> 17) + r << 0, e += (r ^ (n | ~t)) + o[5] - 57434055, e = (e << 21 | e >>> 11) + n << 0, t += (n ^ (e | ~r)) + o[12] + 1700485571, t = (t << 6 | t >>> 26) + e << 0, r += (e ^ (t | ~n)) + o[3] - 1894986606, r = (r << 10 | r >>> 22) + t << 0, n += (t ^ (r | ~e)) + o[10] - 1051523, n = (n << 15 | n >>> 17) + r << 0, e += (r ^ (n | ~t)) + o[1] - 2054922799, e = (e << 21 | e >>> 11) + n << 0, t += (n ^ (e | ~r)) + o[8] + 1873313359, t = (t << 6 | t >>> 26) + e << 0, r += (e ^ (t | ~n)) + o[15] - 30611744, r = (r << 10 | r >>> 22) + t << 0, n += (t ^ (r | ~e)) + o[6] - 1560198380, n = (n << 15 | n >>> 17) + r << 0, e += (r ^ (n | ~t)) + o[13] + 1309151649, e = (e << 21 | e >>> 11) + n << 0, t += (n ^ (e | ~r)) + o[4] - 145523070, t = (t << 6 | t >>> 26) + e << 0, r += (e ^ (t | ~n)) + o[11] - 1120210379, r = (r << 10 | r >>> 22) + t << 0, n += (t ^ (r | ~e)) + o[2] + 718787259, n = (n << 15 | n >>> 17) + r << 0, e += (r ^ (n | ~t)) + o[9] - 343485551, e = (e << 21 | e >>> 11) + n << 0, this.first ? (this.h0 = t + 1732584193 << 0, this.h1 = e - 271733879 << 0, this.h2 = n - 1732584194 << 0, this.h3 = r + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + t << 0, this.h1 = this.h1 + e << 0, this.h2 = this.h2 + n << 0, this.h3 = this.h3 + r << 0);
      }, p.prototype.hex = function() {
        this.finalize();
        var t = this.h0, e = this.h1, n = this.h2, r = this.h3;
        return c[t >>> 4 & 15] + c[t & 15] + c[t >>> 12 & 15] + c[t >>> 8 & 15] + c[t >>> 20 & 15] + c[t >>> 16 & 15] + c[t >>> 28 & 15] + c[t >>> 24 & 15] + c[e >>> 4 & 15] + c[e & 15] + c[e >>> 12 & 15] + c[e >>> 8 & 15] + c[e >>> 20 & 15] + c[e >>> 16 & 15] + c[e >>> 28 & 15] + c[e >>> 24 & 15] + c[n >>> 4 & 15] + c[n & 15] + c[n >>> 12 & 15] + c[n >>> 8 & 15] + c[n >>> 20 & 15] + c[n >>> 16 & 15] + c[n >>> 28 & 15] + c[n >>> 24 & 15] + c[r >>> 4 & 15] + c[r & 15] + c[r >>> 12 & 15] + c[r >>> 8 & 15] + c[r >>> 20 & 15] + c[r >>> 16 & 15] + c[r >>> 28 & 15] + c[r >>> 24 & 15];
      }, p.prototype.toString = p.prototype.hex, p.prototype.digest = function() {
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
      }, p.prototype.array = p.prototype.digest, p.prototype.arrayBuffer = function() {
        this.finalize();
        var t = new ArrayBuffer(16), e = new Uint32Array(t);
        return e[0] = this.h0, e[1] = this.h1, e[2] = this.h2, e[3] = this.h3, t;
      }, p.prototype.buffer = p.prototype.arrayBuffer, p.prototype.base64 = function() {
        for (var t, e, n, r = "", l = this.array(), i = 0; i < 15; )
          t = l[i++], e = l[i++], n = l[i++], r += _[t >>> 2] + _[(t << 4 | e >>> 4) & 63] + _[(e << 2 | n >>> 6) & 63] + _[n & 63];
        return t = l[i], r += _[t >>> 2] + _[t << 4 & 63] + "==", r;
      };
      function T(t, e) {
        var n, r = D(t);
        if (t = r[0], r[1]) {
          var l = [], i = t.length, o = 0, u;
          for (n = 0; n < i; ++n)
            u = t.charCodeAt(n), u < 128 ? l[o++] = u : u < 2048 ? (l[o++] = 192 | u >>> 6, l[o++] = 128 | u & 63) : u < 55296 || u >= 57344 ? (l[o++] = 224 | u >>> 12, l[o++] = 128 | u >>> 6 & 63, l[o++] = 128 | u & 63) : (u = 65536 + ((u & 1023) << 10 | t.charCodeAt(++n) & 1023), l[o++] = 240 | u >>> 18, l[o++] = 128 | u >>> 12 & 63, l[o++] = 128 | u >>> 6 & 63, l[o++] = 128 | u & 63);
          t = l;
        }
        t.length > 64 && (t = new p(!0).update(t).array());
        var b = [], J = [];
        for (n = 0; n < 64; ++n) {
          var P = t[n] || 0;
          b[n] = 92 ^ P, J[n] = 54 ^ P;
        }
        p.call(this, e), this.update(J), this.oKeyPad = b, this.inner = !0, this.sharedMemory = e;
      }
      T.prototype = new p(), T.prototype.finalize = function() {
        if (p.prototype.finalize.call(this), this.inner) {
          this.inner = !1;
          var t = this.array();
          p.call(this, this.sharedMemory), this.update(this.oKeyPad), this.update(t), p.prototype.finalize.call(this);
        }
      };
      var g = G();
      g.md5 = g, g.md5.hmac = Z(), v ? a.exports = g : x.md5 = g;
    })();
  }(M)), M.exports;
}
var ot = nt();
const $ = "rt-translations", it = "/translations-api/v1", K = 100;
function L(a) {
  return /[^\s.,!?;:()]+/.test(a);
}
function N(a) {
  a.getAnimations().forEach((f) => {
    f.cancel();
  });
}
function at(a) {
  a.animate([
    { opacity: 1 },
    { opacity: 0.5 },
    { opacity: 1 }
  ], {
    duration: 1500,
    iterations: 1 / 0
  });
}
function m() {
  return navigator.language || "en-US";
}
function Y() {
  return JSON.parse(localStorage.getItem($) || "{}");
}
function st(a, f, s) {
  const h = Y();
  console.log("Store translation", { key: a, lang: f, value: s }), h[a] || (h[a] = {}), h[a][f] = s, localStorage.setItem($, JSON.stringify(h));
}
function R(a, f) {
  var h;
  return ((h = Y()[a]) == null ? void 0 : h[f]) || null;
}
async function ft(a = [], f) {
  if (a.length === 0)
    return [];
  const s = await fetch(it, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      lang: f,
      texts: a
    })
  }).then((h) => h.json()).then((h) => h.translations || []).catch((h) => {
    throw console.error("Error fetching translations:", h), new Error("Failed to fetch translations");
  });
  return console.log("Fetched translations:", s), s;
}
function B(a, f, s) {
  const h = a.childNodes[f];
  h ? h.textContent = s : el.textContent = s, N(a);
}
function C(a, f, s) {
  if (a.nodeType === Node.TEXT_NODE && a.textContent.trim() && L(a.textContent)) {
    const h = a.textContent.trim(), x = m(), F = ot.md5(x + h), d = a.parentNode;
    d.dataset.translateKey = F, at(d), s.push({ text: h, key: F, parent: d, index: f });
  } else a.nodeType === Node.ELEMENT_NODE && a.childNodes.forEach((h, x) => C(h, x, s));
}
async function ht(a, f) {
  for (let s = 0; s < a.length; s += K) {
    const h = a.slice(s, s + K), x = [];
    let F = h.reduce((d, v) => (L(v.text) ? d.push(v) : (console.warn(`Skipping invalid text: "${v.text}"`), x.push(v)), d), []);
    if (F = F.filter((d) => R(d.key, f) ? (console.log("Using stored translation for", d.text), B(d.parent, d.index, R(d.key, f)), x.push(d), !1) : !0), x.forEach((d) => {
      console.warn(`Invalid text skipped: "${d.text}"`), N(d.parent);
    }), F.length !== 0) {
      console.log("Fetching translations for chunk:", F);
      try {
        (await ft(F.map((v) => v.text), f)).forEach((v) => {
          console.log(`Applying translation for key: ${v.key}, lang: ${f}, text: ${v.value}`), a.filter((c) => c.key === v.key).forEach((c) => {
            B(c.parent, c.index, v.value), st(c.key, f, v.value);
          });
        });
      } catch (d) {
        F.forEach((v) => {
          console.error(`Error fetching translation for: "${v.text}"`, d);
        });
        continue;
      }
      h.forEach((d) => {
        N(d.parent);
      });
    }
  }
}
function lt(a, f) {
  return a.filter((s) => {
    const h = R(s.key, f);
    return h ? (console.log("Using stored translation for", s.text, ":", h), B(s.parent, s.index, h), !1) : !0;
  });
}
async function V(a, f) {
  const s = lt(a, f);
  if (s.length !== 0)
    try {
      await ht(s, f);
    } catch (h) {
      a.forEach((x) => {
        N(x.parent);
      }), console.error("Translation error:", h);
    }
}
function ut(a, f) {
  const s = window._ravennaTranslate;
  s.mutationObservers || (s.mutationObservers = {}), s.mutationObservers[f] = a;
}
function ct(a) {
  const f = window._ravennaTranslate;
  f.mutationObservers && f.mutationObservers[a] && (f.mutationObservers[a].disconnect(), delete f.mutationObservers[a]);
}
function xt(a) {
  const f = [];
  for (const s of a)
    s.type === "childList" && s.addedNodes.forEach((h) => {
      C(h, 0, f);
    });
  return f;
}
function dt(a, f) {
  var x;
  const s = window._ravennaTranslate;
  if (!f.observedElement) {
    console.warn("No observed element found, skipping mutation handling.");
    return;
  }
  if ((x = s == null ? void 0 : s.translating) != null && x[f.observedElement]) {
    console.warn("Element is already being translated, skipping:", f.observedElement);
    return;
  }
  s.translating && (s.translating[f.observedElement] = !0), console.log("Mutation observed:", a);
  const h = xt(a);
  if (h.length === 0) {
    console.warn("No valid texts found in mutations."), s.translating && delete s.translating[f.observedElement];
    return;
  }
  V(h, m()).catch((F) => {
    console.error("Error handling mutations:", F);
  }).finally(
    () => {
      s.translating && delete s.translating[f.observedElement];
    }
  );
}
async function W(a, f = !1) {
  var d;
  const s = window._ravennaTranslate, h = m();
  if ((d = s == null ? void 0 : s.defaultLanguages) != null && d.some((v) => v === h || v === h.split("-")[0] || v === h.split("-")[0].toUpperCase()))
    return;
  const x = [];
  if (C(a, 0, x), x.length === 0) {
    console.warn("No translatable texts found in element:", a);
    return;
  }
  s.translating && (s.translating[a] = !0), await V(x, h), s.translating && delete s.translating[a];
  const F = new MutationObserver(dt);
  F.observedElement = a, F.observe(a, {
    childList: !0,
    subtree: !0
  }), ut(F, a);
}
const pt = {
  mounted(a, f) {
    const s = f.modifiers.children, h = f.modifiers.global;
    W(a, s), h && window.addEventListener("language-changed", () => {
      W(a, s);
    });
  },
  unmounted(a) {
    ct(a);
  }
};
export {
  pt as RTTranslate
};
