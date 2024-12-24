var e = Object.defineProperty;
var n = (o, a) => e(o, "name", { value: a, configurable: !0 });
import t from "../packages/ls-components/components/layout/Index.vue/index.js";
import { setGlobalConfig as m } from "../packages/ls-components/components/_utils/config/index.js";
const l = Object.assign(t, {
  install: /* @__PURE__ */ n((o, a) => {
    m(o, a), t.name && o.component(t.name, t);
  }, "install")
});
export {
  l as default
};
