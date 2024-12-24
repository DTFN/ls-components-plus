var L = Object.defineProperty;
var i = (n, t) => L(n, "name", { value: t, configurable: !0 });
/* empty css                                                                                                                                          */
/* empty css                                                                                                                                          */
/* empty css                                                                                                                                             */
/* empty css                                                                                                                                            */
import { defineComponent as v, useCssVars as S, ref as m, watch as c, onMounted as g, openBlock as u, createBlock as f, mergeProps as P, unref as d, withCtx as _, createElementBlock as B, Fragment as E, renderList as J, renderSlot as $ } from "vue";
import { useNamespace as w } from "../../_hooks/useNamespace/index.js";
import { lsMenuProps as N, lsEmitNames as b } from "../types/index.js";
import F from "../../_hooks/useRouterHook/index.js";
import H from "../MenuItem.vue/index.js";
import { ElMenu as I } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/menu/index/index.js";
const K = v({
  name: "LSMenu"
}), X = /* @__PURE__ */ v({
  ...K,
  props: N,
  emits: b,
  setup(n, { emit: t }) {
    S((e) => ({
      34792420: e.hoverColor
    }));
    const { currentRouter: o } = F(), k = w("menu").b(), l = n, C = t, p = m(!1), a = m(""), M = m();
    c(
      () => l.permissionList,
      (e) => {
        l.needPermission && e && e.length > 0 && r();
      },
      {
        immediate: !0,
        deep: !0
      }
    ), c(
      () => o.value,
      () => {
        r();
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function r() {
      if (!p.value)
        return;
      const { meta: e } = (o == null ? void 0 : o.value) || {};
      a.value = (e == null ? void 0 : e.key) || "1";
    }
    i(r, "initMenuSider");
    function h(e) {
      C("onJump", e);
    }
    return i(h, "onJump"), g(() => {
      p.value = !0, r();
    }), (e, j) => {
      const y = I;
      return u(), f(y, P({
        ref_key: "lsComMenu",
        ref: M
      }, e.$attrs, {
        class: d(k),
        "default-active": d(a)
      }), {
        default: _(() => [
          (u(!0), B(E, null, J(e.menuConfigList, (s) => (u(), f(H, {
            key: s.key,
            item: s,
            "permission-list": e.permissionList,
            "need-permission": e.needPermission,
            onOnJump: h
          }, {
            [s.iconSlot]: _(() => [
              $(e.$slots, s.iconSlot, {}, void 0, !0)
            ]),
            _: 2
          }, 1032, ["item", "permission-list", "need-permission"]))), 128))
        ]),
        _: 3
      }, 16, ["class", "default-active"]);
    };
  }
});
export {
  X as default
};
