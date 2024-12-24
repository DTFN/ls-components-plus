var l = Object.defineProperty;
var e = (o, n) => l(o, "name", { value: n, configurable: !0 });
import t from "../packages/ls-components/components/flowBox/Index.vue/index.js";
import { setGlobalConfig as m } from "../packages/ls-components/components/_utils/config/index.js";
const f = Object.assign(t, {
  install: /* @__PURE__ */ e((o, n) => {
    m(o, n), t.name && o.component(t.name, t);
  }, "install")
});
export {
  f as default
};
