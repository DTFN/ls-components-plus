var e = Object.defineProperty;
var i = (t, o) => e(t, "name", { value: o, configurable: !0 });
import n from "../packages/ls-components/components/print/Index.vue/index.js";
import { setGlobalConfig as m } from "../packages/ls-components/components/_utils/config/index.js";
const f = Object.assign(n, {
  install: /* @__PURE__ */ i((t, o) => {
    m(t, o), n.name && t.component(n.name, n);
  }, "install")
});
export {
  f as default
};
