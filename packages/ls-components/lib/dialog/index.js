var n = Object.defineProperty;
var m = (o, i) => n(o, "name", { value: i, configurable: !0 });
import t from "../packages/ls-components/components/dialog/Index.vue/index.js";
/* empty css                                                           */
import { setGlobalConfig as a } from "../packages/ls-components/components/_utils/config/index.js";
const r = Object.assign(t, {
  install: /* @__PURE__ */ m((o, i) => {
    a(o, i), t.name && o.component(t.name, t);
  }, "install")
});
export {
  r as default
};
