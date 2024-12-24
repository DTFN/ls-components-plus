var r = Object.defineProperty;
var i = (t, e) => r(t, "name", { value: e, configurable: !0 });
function s(t) {
  return !!(typeof t == "object" && t && "gen" in t && "num" in t);
}
i(s, "isRefProxy");
async function a(t, e) {
  return typeof e == "string" ? t.getDestination(e) : e;
}
i(a, "getDestinationArray");
async function h(t, e) {
  return e && s(e[0]) ? e[0] : null;
}
i(h, "getDestinationRef");
const c = /* @__PURE__ */ i((t) => t.type === "XYZ" && t.spec.length === 3, "isXYZ"), o = /* @__PURE__ */ i((t) => t.type === "Fit" && t.spec.length === 0, "isFit"), u = /* @__PURE__ */ i((t) => t.type === "FitH" && t.spec.length === 1, "isFitH"), f = /* @__PURE__ */ i((t) => t.type === "FitV" && t.spec.length === 1, "isFitV"), p = /* @__PURE__ */ i((t) => t.type === "FitR" && t.spec.length === 4, "isFitR"), g = /* @__PURE__ */ i((t) => t.type === "FitB" && t.spec.length === 0, "isFitB"), l = /* @__PURE__ */ i((t) => t.type === "FitBH" && t.spec.length === 1, "isFitBH"), F = /* @__PURE__ */ i((t) => t.type === "FitBV" && t.spec.length === 1, "isFitBV");
function B(t, e) {
  const n = { type: t, spec: e };
  return c(n) || o(n) || u(n) || f(n) || p(n) || g(n) || l(n) || F(n) ? n : (console.warn("no location type found for ", t, e), null);
}
i(B, "getLocation");
const H = /* @__PURE__ */ i((t) => t && t.every((e) => !isNaN(e)), "isSpecLike");
export {
  a as getDestinationArray,
  h as getDestinationRef,
  B as getLocation,
  H as isSpecLike
};
