var V = Object.defineProperty;
var C = (m, u) => V(m, "name", { value: u, configurable: !0 });
/* empty css                                                                                                                                          */
/* empty css                                                                                                                                            */
/* empty css                                                                                                                                               */
/* empty css                                                                                                                                           */
/* empty css                                                                                                                                            */
/* empty css                                                                                                                                          */
import { defineComponent as z, useSlots as A, computed as E, openBlock as r, createElementBlock as L, normalizeClass as d, unref as s, createBlock as l, withCtx as o, createVNode as n, renderSlot as t, mergeProps as S, normalizeStyle as f, createCommentVNode as a, createElementVNode as N } from "vue";
import { useNamespace as O } from "../../_hooks/useNamespace/index.js";
import { lsLayoutProp as P, lsEmitNames as R } from "../types/index.js";
import b from "../components/Header.vue/index.js";
import { ElHeader as _, ElAside as I, ElMain as M, ElContainer as j, ElFooter as q } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/container/index/index.js";
const G = ["src"], se = /* @__PURE__ */ z({
  name: "LSLayout",
  inheritAttrs: !1,
  __name: "Index",
  props: P,
  emits: R,
  setup(m, { emit: u }) {
    const i = m, F = u, c = A(), g = O("layout"), W = g.b(), B = g.b("container-wrap"), p = g.b("container-section"), D = E(() => i.showFooter ? {
      height: `calc(100vh - ${i.headerHeight} - ${i.footerHeight})`
    } : {
      height: `calc(100vh - ${i.headerHeight})`
    }), y = E(() => i.showFooter ? {
      height: `calc(100vh - ${i.headerHeight} - ${i.footerHeight})`
    } : {
      minHeight: `calc(100vh - ${i.headerHeight})`
    });
    function w(e) {
      F("onCommand", e);
    }
    return C(w, "onDropdownCommand2"), (e, J) => {
      const $ = _, v = I, H = M, h = j, k = q;
      return r(), L("div", {
        class: d(s(W))
      }, [
        [1, 2].includes(Number(e.mode)) ? (r(), l(h, { key: 0 }, {
          default: o(() => [
            n($, { height: e.headerHeight }, {
              default: o(() => [
                s(c).header ? t(e.$slots, "header", { key: 0 }, void 0, !0) : (r(), l(b, S({ key: 1 }, e.$attrs, {
                  mode: e.mode,
                  logo: e.logo,
                  "show-logo": e.showLogo,
                  height: e.headerHeight,
                  onOnDropdownCommand2: w
                }), {
                  left: o(() => [
                    t(e.$slots, "headerLeft", {}, void 0, !0)
                  ]),
                  right: o(() => [
                    t(e.$slots, "headerRight", {}, void 0, !0)
                  ]),
                  _: 3
                }, 16, ["mode", "logo", "show-logo", "height"]))
              ]),
              _: 3
            }, 8, ["height"]),
            n(h, {
              class: d(s(B)),
              style: f(s(D))
            }, {
              default: o(() => [
                e.mode != 2 ? (r(), l(v, {
                  key: 0,
                  width: e.asideWidth
                }, {
                  default: o(() => [
                    t(e.$slots, "aside", {}, void 0, !0)
                  ]),
                  _: 3
                }, 8, ["width"])) : a("", !0),
                n(H, null, {
                  default: o(() => [
                    N("section", {
                      class: d(s(p)),
                      style: f(s(y))
                    }, [
                      t(e.$slots, "section", {}, void 0, !0)
                    ], 6)
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["class", "style"]),
            e.showFooter ? (r(), l(k, {
              key: 0,
              height: e.footerHeight
            }, {
              default: o(() => [
                t(e.$slots, "footer", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["height"])) : a("", !0)
          ]),
          _: 3
        })) : [3].includes(Number(e.mode)) ? (r(), l(h, { key: 1 }, {
          default: o(() => [
            n(v, {
              width: e.asideWidth,
              class: "ls-layout-aside3"
            }, {
              default: o(() => [
                e.showLogo ? (r(), L("img", {
                  key: 0,
                  class: "ls-layout-logo",
                  src: e.logo,
                  alt: ""
                }, null, 8, G)) : a("", !0),
                t(e.$slots, "aside", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["width"]),
            n(h, null, {
              default: o(() => [
                n($, { height: e.headerHeight }, {
                  default: o(() => [
                    s(c).header ? t(e.$slots, "header", { key: 0 }, void 0, !0) : (r(), l(b, S({ key: 1 }, e.$attrs, {
                      mode: e.mode,
                      logo: e.logo,
                      "show-logo": e.showLogo,
                      height: e.headerHeight,
                      onOnDropdownCommand2: w
                    }), {
                      left: o(() => [
                        t(e.$slots, "headerLeft", {}, void 0, !0)
                      ]),
                      right: o(() => [
                        t(e.$slots, "headerRight", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 16, ["mode", "logo", "show-logo", "height"]))
                  ]),
                  _: 3
                }, 8, ["height"]),
                n(H, null, {
                  default: o(() => [
                    N("section", {
                      class: d(s(p)),
                      style: f(s(y))
                    }, [
                      t(e.$slots, "section", {}, void 0, !0)
                    ], 6)
                  ]),
                  _: 3
                }),
                e.showFooter ? (r(), l(k, {
                  key: 0,
                  height: e.footerHeight
                }, {
                  default: o(() => [
                    t(e.$slots, "footer", {}, void 0, !0)
                  ]),
                  _: 3
                }, 8, ["height"])) : a("", !0)
              ]),
              _: 3
            })
          ]),
          _: 3
        })) : a("", !0)
      ], 2);
    };
  }
});
export {
  se as default
};
