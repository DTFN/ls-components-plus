var t = Object.defineProperty;
var r = (o, m) => t(o, "name", { value: m, configurable: !0 });
import e from "../packages/ls-components/components/breadcrumb/Index.vue/index.js";
import { setGlobalConfig as a } from "../packages/ls-components/components/_utils/config/index.js";
const c = Object.assign(e, {
  install: /* @__PURE__ */ r((o, m) => {
    a(o, m), e.name && o.component(e.name, e);
  }, "install")
});
export {
  c as default
};
