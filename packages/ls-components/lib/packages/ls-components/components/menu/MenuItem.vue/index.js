var N = Object.defineProperty;
var r = (p, t) => N(p, "name", { value: t, configurable: !0 });
/* empty css                                                                                                                                          */
/* empty css                                                                                                                                              */
/* empty css                                                                                                                                               */
import { defineComponent as g, resolveComponent as R, openBlock as i, createElementBlock as d, Fragment as a, createBlock as l, withCtx as n, createElementVNode as f, toDisplayString as k, createVNode as c, normalizeProps as y, guardReactiveProps as S, createSlots as C, renderSlot as I, renderList as b, createCommentVNode as w } from "vue";
import M from "../../icon/Index.vue/index.js";
import { lsMenuItemProps as B, lsEmitNames as V } from "../types/index.js";
import $ from "../../_hooks/useRouterHook/index.js";
import { ElMenuItem as j, ElSubMenu as _ } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/menu/index/index.js";
const h = g({
  name: "LSMenuItem"
}), Q = /* @__PURE__ */ g({
  ...h,
  props: B,
  emits: V,
  setup(p, { emit: t }) {
    const { jumpRouteCom: v } = $(), u = t, E = /* @__PURE__ */ r((e) => {
      const { link: o, defJump: m } = e || {};
      m ? u("onJump", e) : o ? window.open(o, "_blank") : v(e);
    }, "jumpRoute");
    function J(e) {
      u("onJump", e);
    }
    return r(J, "onJump"), (e, o) => {
      const m = j, L = R("MenuItem", !0), P = _;
      return !e.needPermission || e.permissionList.includes(e.item.pCode) ? (i(), d(a, { key: 0 }, [
        !e.item.children || e.item.leaf ? (i(), l(m, {
          key: 0,
          index: e.item.key,
          onClick: o[0] || (o[0] = (s) => E(e.item))
        }, {
          title: n(() => [
            f("span", null, k(e.item.title), 1)
          ]),
          default: n(() => [
            c(M, y(S(e.item.iconConfig)), C({ _: 2 }, [
              e.item.iconSlot ? {
                name: "default",
                fn: n(() => [
                  I(e.$slots, e.item.iconSlot)
                ]),
                key: "0"
              } : void 0
            ]), 1040)
          ]),
          _: 3
        }, 8, ["index"])) : (i(), l(P, {
          key: 1,
          index: e.item.key
        }, {
          title: n(() => [
            c(M, y(S(e.item.iconConfig)), C({ _: 2 }, [
              e.item.iconSlot ? {
                name: "default",
                fn: n(() => [
                  I(e.$slots, e.item.iconSlot)
                ]),
                key: "0"
              } : void 0
            ]), 1040),
            f("span", null, k(e.item.title), 1)
          ]),
          default: n(() => [
            (i(!0), d(a, null, b(e.item.children, (s) => (i(), l(L, {
              key: s.key,
              item: s,
              "permission-list": e.permissionList,
              "need-permission": e.needPermission,
              onOnJump: J
            }, null, 8, ["item", "permission-list", "need-permission"]))), 128))
          ]),
          _: 3
        }, 8, ["index"]))
      ], 64)) : w("", !0);
    };
  }
});
export {
  Q as default
};
