var u = Object.defineProperty;
var t = (e, n) => u(e, "name", { value: n, configurable: !0 });
import { ref as r, computed as x } from "vue";
const o = r(0), I = /* @__PURE__ */ t(() => {
  const e = r(2e3), n = x(() => e.value + o.value);
  return {
    initZIndex: e,
    curZIndex: n,
    nextZIndex: /* @__PURE__ */ t(() => (o.value++, n.value), "nextZIndex")
  };
}, "useZIndex");
export {
  I as useZIndex
};
