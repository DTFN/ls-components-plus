var a = Object.defineProperty;
var e = (o, t) => a(o, "name", { value: t, configurable: !0 });
import n from "../packages/ls-components/components/containerBox/Index.vue/index.js";
import { setGlobalConfig as i } from "../packages/ls-components/components/_utils/config/index.js";
const f = Object.assign(n, {
  install: /* @__PURE__ */ e((o, t) => {
    i(o, t), n.name && o.component(n.name, n);
  }, "install")
});
export {
  f as default
};
