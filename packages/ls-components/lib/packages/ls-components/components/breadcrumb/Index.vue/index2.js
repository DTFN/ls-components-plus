var v = Object.defineProperty;
var r = (c, t) => v(c, "name", { value: t, configurable: !0 });
/* empty css                                                                                                                                          */
/* empty css                                                                                                                                                */
/* empty css                                                                                                                                                     */
import { defineComponent as _, computed as w, unref as n, openBlock as s, createElementBlock as u, normalizeClass as l, toDisplayString as p, createCommentVNode as d, createVNode as N, normalizeProps as P, guardReactiveProps as j, withCtx as f, Fragment as E, renderList as V, createBlock as x, createTextVNode as z } from "vue";
import { useNamespace as R } from "../../_hooks/useNamespace/index.js";
import { lsBreadcrumbProp as S } from "../types/index.js";
import T from "../../_hooks/useRouterHook/index.js";
import { ElBreadcrumbItem as $, ElBreadcrumb as D } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/breadcrumb/index/index.js";
const F = {
  key: 0,
  class: "pos"
}, H = _({
  name: "LSBreadcrumb"
}), X = /* @__PURE__ */ _({
  ...H,
  props: S,
  setup(c) {
    const t = c, { jumpRouteCom: b, currentRouter: a } = T(), k = R("breadcrumb").b();
    function C(e) {
      return typeof e == "object" && e !== null;
    }
    r(C, "isBCList");
    const B = /* @__PURE__ */ r(() => {
      var o;
      const { bcList: e } = ((o = a == null ? void 0 : a.value) == null ? void 0 : o.meta) || {};
      return C(e) ? e : [];
    }, "updateBCList"), i = w(() => t.defineList && t.defineList.length > 0 ? t.defineList : B());
    function L(e) {
      const { link: o } = e;
      o ? window.open(o, "_blank") : b(e);
    }
    return r(L, "jumpLink"), (e, o) => {
      const h = $, g = D;
      return n(i) && n(i).length > 0 ? (s(), u("div", {
        key: 0,
        class: l(n(k))
      }, [
        t.showPos ? (s(), u("p", F, p(e.posTitle) + "：", 1)) : d("", !0),
        N(g, P(j(e.$attrs)), {
          default: f(() => [
            (s(!0), u(E, null, V(n(i), (m, y) => (s(), x(h, {
              key: y,
              class: l({ "has-jump": m.name }),
              onClick: /* @__PURE__ */ r((q) => L(m), "onClick")
            }, {
              default: f(() => [
                z(p(m.title), 1)
              ]),
              _: 2
            }, 1032, ["class", "onClick"]))), 128))
          ]),
          _: 1
        }, 16)
      ], 2)) : d("", !0);
    };
  }
});
export {
  X as default
};
