var s = Object.defineProperty;
var n = (o, i) => s(o, "name", { value: i, configurable: !0 });
import t from "../packages/ls-components/components/descriptions/Index.vue/index.js";
import { setGlobalConfig as e } from "../packages/ls-components/components/_utils/config/index.js";
const c = Object.assign(t, {
  install: /* @__PURE__ */ n((o, i) => {
    e(o, i), t.name && o.component(t.name, t);
  }, "install")
});
export {
  c as default
};
