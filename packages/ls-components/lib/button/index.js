var r = Object.defineProperty;
var e = (o, t) => r(o, "name", { value: t, configurable: !0 });
import n from "../packages/ls-components/components/button/Button.vue/index.js";
import m from "../packages/ls-components/components/button/ButtonGroup.vue/index.js";
import { setGlobalConfig as i } from "../packages/ls-components/components/_utils/config/index.js";
const l = Object.assign(n, {
  install: /* @__PURE__ */ e((o, t) => {
    i(o, t), n.name && o.component(n.name, n);
  }, "install")
}), u = Object.assign(m, {
  install: /* @__PURE__ */ e((o, t) => {
    i(o, t), m.name && o.component(m.name, m);
  }, "install")
});
export {
  l as LSButton,
  u as LSButtonGroup
};
