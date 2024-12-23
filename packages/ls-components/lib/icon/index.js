var m = Object.defineProperty;
var e = (o, t) => m(o, "name", { value: t, configurable: !0 });
import n from "../packages/ls-components/components/icon/Index.vue/index.js";
import { setGlobalConfig as a } from "../packages/ls-components/components/_utils/config/index.js";
const f = Object.assign(n, {
  install: /* @__PURE__ */ e((o, t) => {
    a(o, t), n.name && o.component(n.name, n);
  }, "install")
});
export {
  f as default
};
