var m = Object.defineProperty;
var t = (n, e) => m(n, "name", { value: e, configurable: !0 });
import o from "../packages/ls-components/components/menu/Index.vue/index.js";
import { setGlobalConfig as a } from "../packages/ls-components/components/_utils/config/index.js";
const l = Object.assign(o, {
  install: /* @__PURE__ */ t((n, e) => {
    a(n, e), o.name && n.component(o.name, o);
  }, "install")
});
export {
  l as default
};
