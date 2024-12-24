var b = Object.defineProperty;
var l = (s, e) => b(s, "name", { value: e, configurable: !0 });
/* empty css                                                                                                                                          */
/* empty css                                                                                                                                             */
import { defineComponent as u, useSlots as v, ref as n, resolveComponent as y, openBlock as p, createElementBlock as i, normalizeClass as m, unref as o, createVNode as f, mergeProps as T, withCtx as g, renderSlot as L } from "vue";
import { useNamespace as w } from "../../_hooks/useNamespace/index.js";
import { lsBackTopProps as A } from "../types/index.js";
import E from "../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/merge/index.js";
import { ElBacktop as I } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/backtop/index/index.js";
const N = u({
  name: "LSBackTop"
}), D = /* @__PURE__ */ u({
  ...N,
  name: "LSBackTop",
  inheritAttrs: !1,
  props: A,
  setup(s) {
    const e = w("back-top"), k = e.b(), d = e.b("opt"), a = v(), _ = s, r = n(), h = n({
      right: 36,
      bottom: 60
    }), c = n("");
    function C() {
      if (_.aniSwitch) {
        c.value = "launch";
        const t = setTimeout(() => {
          c.value = "", r.value.querySelector(".el-backtop").style.opacity = 0, clearTimeout(t);
        }, 500);
      }
    }
    return l(C, "onClickFunc"), (t, P) => {
      const B = y("LSIcon"), S = I;
      return p(), i("div", {
        ref_key: "lsBackTopRef",
        ref: r,
        class: m(o(k))
      }, [
        f(S, T(o(E)(o(h), t.$attrs), {
          class: [o(a).default ? "" : "def-el-backtop", o(c)],
          onClick: C
        }), {
          default: g(() => [
            o(a).default ? L(t.$slots, "default", { key: 0 }, void 0, !0) : (p(), i("div", {
              key: 1,
              class: m(o(d))
            }, [
              f(B, {
                type: 1,
                name: "iconoir:rocket",
                width: "46",
                height: "46"
              })
            ], 2))
          ]),
          _: 3
        }, 16, ["class"])
      ], 2);
    };
  }
});
export {
  D as default
};
