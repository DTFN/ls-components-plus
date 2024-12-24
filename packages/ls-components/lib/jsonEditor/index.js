var s = Object.defineProperty;
var i = (o, n) => s(o, "name", { value: n, configurable: !0 });
import t from "../packages/ls-components/components/jsonEditor/Index.vue/index.js";
import { setGlobalConfig as e } from "../packages/ls-components/components/_utils/config/index.js";
const f = Object.assign(t, {
  install: /* @__PURE__ */ i((o, n) => {
    e(o, n), t.name && o.component(t.name, t);
  }, "install")
});
export {
  f as default
};
