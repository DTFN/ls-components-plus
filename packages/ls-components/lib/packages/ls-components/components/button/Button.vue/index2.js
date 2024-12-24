/* empty css                                                                                                                                          */
/* empty css                                                                                                                                            */
import { defineComponent as _, useSlots as $, inject as g, ref as l, computed as z, unref as o, openBlock as r, createElementBlock as c, Fragment as b, createVNode as N, mergeProps as p, normalizeStyle as v, toDisplayString as S, createCommentVNode as n, createBlock as k, withCtx as B, renderSlot as C } from "vue";
import { lsBtnKey as P } from "../../_constants/token/index.js";
import { lsBtnProp as h } from "../types/index.js";
import { useNamespace as E } from "../../_hooks/useNamespace/index.js";
import L from "../../icon/Index.vue/index.js";
import { ElButton as V } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/button/index/index.js";
const j = _({
  name: "LSButton"
}), O = /* @__PURE__ */ _({
  ...j,
  props: h,
  setup(w) {
    const s = $(), i = E("button").b(), a = g(P, void 0), e = l(""), u = l(""), m = l("");
    a && (e.value = a.separator, u.value = a.separatorColor, m.value = a.separatorSize);
    const f = z(() => ({
      color: u.value,
      fontSize: `${m.value}px`
    }));
    return (t, F) => {
      const d = V;
      return t.$attrs.icon && !o(s).default ? (r(), c(b, { key: 0 }, [
        N(d, p(t.$attrs, { class: o(i) }), null, 16, ["class"]),
        o(e) ? (r(), c("div", {
          key: 0,
          class: "separator",
          style: v(o(f))
        }, S(o(e)), 5)) : n("", !0)
      ], 64)) : (r(), k(d, p({ key: 1 }, t.$attrs, { class: o(i) }), {
        default: B(() => {
          var y;
          return [
            !t.$attrs.icon && ((y = t.iconConfig) != null && y.name || o(s).icon) ? (r(), k(L, p({
              key: 0,
              class: [o(s).default ? "" : "only-icon"]
            }, t.iconConfig), {
              default: B(() => [
                C(t.$slots, "icon", {}, void 0, !0)
              ]),
              _: 3
            }, 16, ["class"])) : n("", !0),
            o(s).default ? C(t.$slots, "default", { key: 1 }, void 0, !0) : n("", !0),
            o(e) ? (r(), c("div", {
              key: 2,
              class: "separator",
              style: v(o(f))
            }, S(o(e)), 5)) : n("", !0)
          ];
        }),
        _: 3
      }, 16, ["class"]));
    };
  }
});
export {
  O as default
};
