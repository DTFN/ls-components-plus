var n = Object.defineProperty;
var i = (e, t) => n(e, "name", { value: t, configurable: !0 });
import o from "../packages/ls-components/components/preview_xlsx/Index.vue/index.js";
import { setGlobalConfig as s } from "../packages/ls-components/components/_utils/config/index.js";
const a = Object.assign(o, {
  install: /* @__PURE__ */ i((e, t) => {
    s(e, t), o.name && e.component(o.name, o);
  }, "install")
});
export {
  a as default
};
