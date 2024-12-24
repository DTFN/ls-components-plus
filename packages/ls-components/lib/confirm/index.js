var i = Object.defineProperty;
var t = (o, n) => i(o, "name", { value: n, configurable: !0 });
import m from "../packages/ls-components/components/confirm/Index.vue/index.js";
/* empty css                                                            */
import { setGlobalConfig as a } from "../packages/ls-components/components/_utils/config/index.js";
const l = Object.assign(m, {
  install: /* @__PURE__ */ t((o, n) => {
    a(o, n), m.name && o.component(m.name, m);
  }, "install")
});
export {
  l as default
};
