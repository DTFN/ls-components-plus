var n = Object.defineProperty;
var r = (t, e) => n(t, "name", { value: e, configurable: !0 });
const o = (() => {
  try {
    return !(typeof window < "u" && document !== void 0);
  } catch {
    return !0;
  }
})(), d = /* @__PURE__ */ r((t, e) => o ? "" : (t || (t = document.documentElement), t ? getComputedStyle(t).getPropertyValue(e) : ""), "getRootAttr");
export {
  d as getRootAttr,
  o as isServerRendering
};
