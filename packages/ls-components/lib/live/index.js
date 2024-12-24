var n = Object.defineProperty;
var i = (o, t) => n(o, "name", { value: t, configurable: !0 });
import e from "../packages/ls-components/components/live/Index.vue/index.js";
import { setGlobalConfig as m } from "../packages/ls-components/components/_utils/config/index.js";
const l = Object.assign(e, {
  install: /* @__PURE__ */ i((o, t) => {
    m(o, t), e.name && o.component(e.name, e);
  }, "install")
});
export {
  l as default
};
