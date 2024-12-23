var t = Object.defineProperty;
var o = (e, l) => t(e, "name", { value: l, configurable: !0 });
var f = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function d(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
o(d, "getDefaultExportFromCjs");
export {
  f as commonjsGlobal,
  d as getDefaultExportFromCjs
};
