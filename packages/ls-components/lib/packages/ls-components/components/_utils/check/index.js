var f = Object.defineProperty;
var t = (n, s) => f(n, "name", { value: s, configurable: !0 });
import { isClient as l } from "../../../../../node_modules/.pnpm/@vueuse_shared@12.0.0_typescript@5.5.4/node_modules/@vueuse/shared/index/index.js";
const e = Object.prototype.toString;
function r(n) {
  return e.call(n) === "[object Array]";
}
t(r, "isArray");
function a(n) {
  return e.call(n) === "[object Null]";
}
t(a, "isNull");
function b(n) {
  return e.call(n) === "[object Boolean]";
}
t(b, "isBoolean");
function i(n) {
  return e.call(n) === "[object Object]";
}
t(i, "isObject");
function d(n) {
  return e.call(n) === "[object Promise]";
}
t(d, "isPromise");
function g(n) {
  return e.call(n) === "[object String]";
}
t(g, "isString");
function j(n) {
  return e.call(n) === "[object Number]" && n === n;
}
t(j, "isNumber");
function p(n) {
  return e.call(n) === "[object RegExp]";
}
t(p, "isRegExp");
function y(n) {
  return e.call(n) === "[object Date]";
}
t(y, "isDate");
function o(n) {
  return /^#[a-fA-F0-9]{3}$|#[a-fA-F0-9]{6}$/.test(n);
}
t(o, "isHex");
function c(n) {
  return /^rgb\((\s*\d+\s*,?){3}\)$/.test(n);
}
t(c, "isRgb");
function u(n) {
  return /^rgba\((\s*\d+\s*,\s*){3}\s*\d(\.\d+)?\s*\)$/.test(n);
}
t(u, "isRgba");
function A(n) {
  return o(n) || c(n) || u(n);
}
t(A, "isColor");
function m(n) {
  return n === void 0;
}
t(m, "isUndefined");
function O(n) {
  return typeof n == "function";
}
t(O, "isFunction");
function x(n) {
  return i(n) && Object.keys(n).length === 0;
}
t(x, "isEmptyObject");
function w(n) {
  return n || n === 0;
}
t(w, "isExist");
function F(n) {
  return n === window;
}
t(F, "isWindow");
function N(n) {
  return (n == null ? void 0 : n.$) !== void 0;
}
t(N, "isComponentInstance");
function S(n) {
  return r(n);
}
t(S, "isArrayChildren");
function $(n) {
  return /\[Q]Q/.test(n);
}
t($, "isQuarter");
function h() {
  return l && /firefox/i.test(window.navigator.userAgent);
}
t(h, "isFirefox");
function B(n) {
  return n instanceof ArrayBuffer || ArrayBuffer.isView(n);
}
t(B, "isArrayBuffer");
function C(n) {
  return n instanceof File;
}
t(C, "isFile");
function E(n) {
  try {
    return n = JSON.parse(n), n !== null && typeof n == "object" ? n.constructor === Object : !1;
  } catch {
    return !1;
  }
}
t(E, "isValidJSON");
const k = {
  isArray: r,
  isNull: a,
  isBoolean: b,
  isObject: i,
  isPromise: d,
  isString: g,
  isNumber: j,
  isRegExp: p,
  isDate: y,
  isHex: o,
  isRgb: c,
  isRgba: u,
  isColor: A,
  isUndefined: m,
  isFunction: O,
  isEmptyObject: x,
  isExist: w,
  isWindow: F,
  isComponentInstance: N,
  isArrayChildren: S,
  isQuarter: $,
  isFirefox: h,
  isArrayBuffer: B,
  isFile: C,
  isValidJSON: E
};
export {
  k as default,
  r as isArray,
  B as isArrayBuffer,
  S as isArrayChildren,
  b as isBoolean,
  A as isColor,
  N as isComponentInstance,
  y as isDate,
  x as isEmptyObject,
  w as isExist,
  C as isFile,
  h as isFirefox,
  O as isFunction,
  a as isNull,
  j as isNumber,
  i as isObject,
  d as isPromise,
  $ as isQuarter,
  p as isRegExp,
  g as isString,
  m as isUndefined,
  E as isValidJSON,
  F as isWindow
};
