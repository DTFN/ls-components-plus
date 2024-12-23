var n = Object.defineProperty;
var i = (e, t) => n(e, "name", { value: t, configurable: !0 });
import o from "../packages/ls-components/components/preview_pdf/Index.vue/index.js";
import { setGlobalConfig as f } from "../packages/ls-components/components/_utils/config/index.js";
const s = Object.assign(o, {
  install: /* @__PURE__ */ i((e, t) => {
    f(e, t), o.name && e.component(o.name, o);
  }, "install")
});
export {
  s as default
};
