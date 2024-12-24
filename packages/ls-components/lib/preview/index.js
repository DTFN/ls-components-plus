var n = Object.defineProperty;
var i = (e, t) => n(e, "name", { value: t, configurable: !0 });
import o from "../packages/ls-components/components/preview/Index.vue/index.js";
import { setGlobalConfig as m } from "../packages/ls-components/components/_utils/config/index.js";
const f = Object.assign(o, {
  install: /* @__PURE__ */ i((e, t) => {
    m(e, t), o.name && e.component(o.name, o);
  }, "install")
});
export {
  f as default
};
