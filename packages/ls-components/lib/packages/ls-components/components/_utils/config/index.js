var i = Object.defineProperty;
var t = (r, e) => i(r, "name", { value: e, configurable: !0 });
import { isServerRendering as l, getRootAttr as n } from "../dom/index.js";
const o = "$LS", f = /* @__PURE__ */ t((r, e) => {
  e && e.classPrefix && (r.config.globalProperties[o] = {
    ...r.config.globalProperties[o] ?? {},
    classPrefix: e.classPrefix
  });
}, "setGlobalConfig"), g = /* @__PURE__ */ t((r) => {
  if (!l) {
    const e = document.documentElement;
    return n(e, r);
  }
  return "";
}, "getVariable");
export {
  g as getVariable,
  f as setGlobalConfig
};
