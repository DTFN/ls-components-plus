var e = Object.defineProperty;
var n = (o, a) => e(o, "name", { value: a, configurable: !0 });
import t from "../packages/ls-components/components/upload/Index.vue/index.js";
import { setGlobalConfig as l } from "../packages/ls-components/components/_utils/config/index.js";
const f = Object.assign(t, {
  install: /* @__PURE__ */ n((o, a) => {
    l(o, a), t.name && o.component(t.name, t);
  }, "install")
});
export {
  f as default
};
