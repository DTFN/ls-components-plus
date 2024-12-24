var a = Object.defineProperty;
var t = (e, m) => a(e, "name", { value: m, configurable: !0 });
import o from "../packages/ls-components/components/preview_image/Index.vue/index.js";
import { setGlobalConfig as i } from "../packages/ls-components/components/_utils/config/index.js";
const f = Object.assign(o, {
  install: /* @__PURE__ */ t((e, m) => {
    i(e, m), o.name && e.component(o.name, o);
  }, "install")
});
export {
  f as default
};
