var s = Object.defineProperty;
var n = (t, i) => s(t, "name", { value: i, configurable: !0 });
import { setGlobalConfig as e } from "../packages/ls-components/components/_utils/config/index.js";
import o from "../packages/ls-components/components/list/List.vue/index.js";
const l = Object.assign(o, {
  install: /* @__PURE__ */ n((t, i) => {
    e(t, i), o.name && t.component(o.name, o);
  }, "install")
});
export {
  l as default
};
