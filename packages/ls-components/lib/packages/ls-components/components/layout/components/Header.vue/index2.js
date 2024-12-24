var y = Object.defineProperty;
var i = (o, t) => y(o, "name", { value: t, configurable: !0 });
import { defineComponent as _, computed as l, openBlock as r, createElementBlock as a, normalizeClass as v, unref as n, normalizeStyle as d, createElementVNode as m, renderSlot as c, createCommentVNode as p, toDisplayString as N, createBlock as k, mergeProps as w } from "vue";
import { useNamespace as D } from "../../../_hooks/useNamespace/index.js";
import { lsHeaderProp as H, lsEmitNames as S } from "../../types/index.js";
import b from "../CommandList.vue/index.js";
const B = { class: "head-left" }, E = ["src"], $ = { class: "title" }, z = { class: "head-right" }, F = /* @__PURE__ */ _({
  __name: "Header",
  props: H,
  emits: S,
  setup(o, { emit: t }) {
    const h = t, u = D("header").b(), s = o, g = l(() => ({
      lineHeight: s.height
    })), f = l(() => Number(s.height.replace("px", "")) * 0.7);
    function C(e) {
      h("onDropdownCommand2", e);
    }
    return i(C, "onDropdownCommand"), (e, P) => (r(), a("div", {
      class: v(n(u)),
      style: d(n(g))
    }, [
      m("div", B, [
        c(e.$slots, "left", {}, void 0, !0),
        [1, 2].includes(Number(e.mode)) && e.showLogo ? (r(), a("img", {
          key: 0,
          src: e.logo,
          style: d({ height: `${n(f)}px` }),
          alt: ""
        }, null, 12, E)) : p("", !0)
      ]),
      m("div", $, N(e.title), 1),
      m("div", z, [
        c(e.$slots, "right", {}, void 0, !0),
        e.showCommand ? (r(), k(b, w({ key: 0 }, s, { onOnDropdownCommand: C }), null, 16)) : p("", !0)
      ])
    ], 6));
  }
});
export {
  F as default
};
