var i = Object.defineProperty;
var e = (o, m) => i(o, "name", { value: m, configurable: !0 });
import { setGlobalConfig as r } from "../packages/ls-components/components/_utils/config/index.js";
import n from "../packages/ls-components/components/form/Form.vue/index.js";
import t from "../packages/ls-components/components/form/FormItem.vue/index.js";
const l = Object.assign(n, {
  install: /* @__PURE__ */ e((o, m) => {
    r(o, m), n.name && o.component(n.name, n);
  }, "install")
}), F = Object.assign(t, {
  install: /* @__PURE__ */ e((o, m) => {
    r(o, m), t.name && o.component(t.name, t);
  }, "install")
});
export {
  l as LSForm,
  F as LSFormItem
};
