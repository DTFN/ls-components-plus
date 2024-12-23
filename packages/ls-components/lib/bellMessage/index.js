var t = Object.defineProperty;
var l = (e, s) => t(e, "name", { value: s, configurable: !0 });
import o from "../packages/ls-components/components/bellMessage/Index.vue/index.js";
import { setGlobalConfig as a } from "../packages/ls-components/components/_utils/config/index.js";
const f = Object.assign(o, {
  install: /* @__PURE__ */ l((e, s) => {
    a(e, s), o.name && e.component(o.name, o);
  }, "install")
});
export {
  f as default
};
