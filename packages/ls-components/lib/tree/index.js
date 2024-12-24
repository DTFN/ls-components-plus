var m = Object.defineProperty;
var n = (e, t) => m(e, "name", { value: t, configurable: !0 });
import o from "../packages/ls-components/components/tree/Index.vue/index.js";
import { setGlobalConfig as r } from "../packages/ls-components/components/_utils/config/index.js";
const f = Object.assign(o, {
  install: /* @__PURE__ */ n((e, t) => {
    r(e, t), o.name && e.component(o.name, o);
  }, "install")
});
export {
  f as default
};
