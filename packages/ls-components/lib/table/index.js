var n = Object.defineProperty;
var a = (o, t) => n(o, "name", { value: t, configurable: !0 });
import { setGlobalConfig as l } from "../packages/ls-components/components/_utils/config/index.js";
import e from "../packages/ls-components/components/table/Table.vue/index.js";
const f = Object.assign(e, {
  install: /* @__PURE__ */ a((o, t) => {
    l(o, t), e.name && o.component(e.name, e);
  }, "install")
});
export {
  f as default
};
