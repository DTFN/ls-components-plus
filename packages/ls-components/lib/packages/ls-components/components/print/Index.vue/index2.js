var v = Object.defineProperty;
var m = (a, n) => v(a, "name", { value: n, configurable: !0 });
/* empty css                                                                                                                                          */
/* empty css                                                                                                                                             */
/* empty css                                                                                                                                            */
import { defineComponent as u, ref as B, resolveComponent as h, resolveDirective as D, openBlock as d, createElementBlock as w, normalizeClass as r, unref as o, createVNode as E, withCtx as f, withDirectives as k, createBlock as S, mergeProps as y, createElementVNode as l, toDisplayString as H, renderSlot as N } from "vue";
import { useNamespace as T } from "../../_hooks/useNamespace/index.js";
import { lsPrintProps as L } from "../types/index.js";
import V from "../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/merge/index.js";
import { ElTooltip as $ } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/tooltip/index/index.js";
const A = ["id"], G = u({
  name: "LSPrint"
}), M = /* @__PURE__ */ u({
  ...G,
  props: L,
  setup(a) {
    const n = T("print"), _ = n.b(), g = n.b("box"), b = n.b("wrap"), p = B({
      id: `lsPrint${(/* @__PURE__ */ new Date()).getTime()}`
    }), C = 1124, P = /* @__PURE__ */ m(() => {
      const t = document.getElementsByClassName("print-item");
      let s = 0;
      for (let e = 0; e < t.length; e++) {
        const i = t[e].getBoundingClientRect();
        s === 0 && (s = i.top), i.bottom - s > C && t[e - 1] && (s = 0, t[e - 1].style.pageBreakAfter = "always");
      }
    }, "printPre");
    return (t, s) => {
      const e = h("LSButton"), c = $, i = D("print");
      return d(), w("div", {
        class: r(o(_))
      }, [
        E(c, {
          content: t.content,
          placement: "top",
          disabled: t.canPrint
        }, {
          default: f(() => [
            k((d(), S(e, y(t.$attrs, {
              onClick: P,
              disabled: !t.canPrint
            }), {
              default: f(() => [
                l("span", null, H(t.btnTxt), 1)
              ]),
              _: 1
            }, 16, ["disabled"])), [
              [i, o(V)(o(p), t.printObj)]
            ])
          ]),
          _: 1
        }, 8, ["content", "disabled"]),
        l("div", {
          class: r(o(g))
        }, [
          l("div", {
            id: o(p).id,
            class: r(o(b))
          }, [
            N(t.$slots, "default", {}, void 0, !0)
          ], 10, A)
        ], 2)
      ], 2);
    };
  }
});
export {
  M as default
};
