/* empty css                                                                                                                                          */
/* empty css                                                                                                                                                  */
import { defineComponent as t, provide as p, openBlock as m, createBlock as u, mergeProps as c, unref as a, withCtx as l, renderSlot as f } from "vue";
import { useNamespace as i } from "../../_hooks/useNamespace/index.js";
import { lsBtnGroupProp as _ } from "../types/index.js";
import { lsBtnKey as d } from "../../_constants/token/index.js";
import { ElButtonGroup as B } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/button/index/index.js";
const b = t({
  name: "LSButtonGroup"
}), w = /* @__PURE__ */ t({
  ...b,
  props: _,
  setup(r) {
    const e = r, s = i("button-group").b();
    return p(d, e), (o, C) => {
      const n = B;
      return m(), u(n, c(o.$attrs, { class: a(s) }), {
        default: l(() => [
          f(o.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 16, ["class"]);
    };
  }
});
export {
  w as default
};
