var e = Object.defineProperty;
var n = (t, a) => e(t, "name", { value: a, configurable: !0 });
import o from "../packages/ls-components/components/chart/Index.vue/index.js";
import { setGlobalConfig as m } from "../packages/ls-components/components/_utils/config/index.js";
const f = Object.assign(o, {
  install: /* @__PURE__ */ n((t, a) => {
    m(t, a), o.name && t.component(o.name, o);
  }, "install")
});
export {
  f as default
};
