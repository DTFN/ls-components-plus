var e = Object.defineProperty;
var n = (o, i) => e(o, "name", { value: i, configurable: !0 });
import t from "../packages/ls-components/components/editor/Index.vue/index.js";
import { setGlobalConfig as m } from "../packages/ls-components/components/_utils/config/index.js";
const f = Object.assign(t, {
  install: /* @__PURE__ */ n((o, i) => {
    m(o, i), t.name && o.component(t.name, t);
  }, "install")
});
export {
  f as default
};
