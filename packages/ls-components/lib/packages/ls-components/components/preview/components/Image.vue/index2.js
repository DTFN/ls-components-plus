var me = Object.defineProperty;
var r = (L, y) => me(L, "name", { value: y, configurable: !0 });
import { defineComponent as q, ref as T, effectScope as fe, shallowRef as de, reactive as pe, computed as w, watch as B, nextTick as ve, onMounted as ge, openBlock as O, createBlock as be, Teleport as he, createVNode as f, Transition as ke, withCtx as Fe, createElementVNode as u, normalizeClass as c, unref as o, normalizeStyle as P, withModifiers as we, createElementBlock as Y, Fragment as G, createCommentVNode as Ie, renderList as ze, withDirectives as xe, vShow as Ce, renderSlot as Ne } from "vue";
import { useEventListener as E } from "../../../../../../node_modules/.pnpm/@vueuse_core@12.0.0_typescript@5.5.4/node_modules/@vueuse/core/index/index.js";
import { useNamespace as Te } from "../../../_hooks/useNamespace/index.js";
import { useZIndex as Oe } from "../../../_hooks/useZIndex/index.js";
import { EVENT_CODE as I } from "../../../_constants/aria/index.js";
import { isNumber as Ee, isFirefox as Le } from "../../../_utils/check/index.js";
import { keysOf as ye } from "../../../_utils/types/index.js";
import { imageViewerProps as Se, previewEmits as Re } from "../../types/index.js";
import v from "../../../icon/Index.vue/index.js";
import A from "../../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/throttle/index.js";
import W from "../../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/merge/index.js";
const Me = ["src"], Xe = q({
  name: "LSImage"
}), We = /* @__PURE__ */ q({
  ...Xe,
  props: Se,
  emits: Re,
  setup(L, { expose: y, emit: J }) {
    const h = {
      CONTAIN: {
        name: "FullScreen"
      },
      ORIGINAL: {
        name: "ScaleToOriginal"
      }
    }, K = Le() ? "DOMMouseScroll" : "mousewheel", i = L, x = J, s = Te("image"), { nextZIndex: Q } = Oe(), S = T(), D = T([]), $ = fe(), k = T(!0), d = T(i.initialIndex), C = de(h.CONTAIN), a = pe({
      scale: 1,
      deg: 0,
      offsetX: 0,
      offsetY: 0,
      enableTransition: !1,
      width: "auto",
      height: "auto",
      objectFit: "none"
    }), U = w(() => {
      const { source: e } = i;
      return e.length <= 1;
    }), j = w(() => d.value === 0), V = w(() => d.value === i.source.length - 1), ee = w(() => i.source[d.value]), te = w(() => {
      const { scale: e, deg: t, offsetX: n, offsetY: l, enableTransition: m, width: z, height: X, objectFit: N } = a;
      let g = n / e, b = l / e;
      switch (t % 360) {
        case 90:
        case -270:
          [g, b] = [b, -g];
          break;
        case 180:
        case -180:
          [g, b] = [-g, -b];
          break;
        case 270:
        case -90:
          [g, b] = [-b, g];
          break;
      }
      const F = {
        transform: `scale(${e}) rotate(${t}deg) translate(${g}px, ${b}px)`,
        transition: m ? "transform .3s" : ""
      };
      return C.value.name === h.CONTAIN.name && (F.maxWidth = F.maxHeight = "100%"), F.width = z, F.height = X, F.objectFit = N, F;
    }), oe = w(() => Ee(i.zIndex) ? i.zIndex : Q()), ne = /* @__PURE__ */ r(() => {
      i.onClose && i.onClose(), x("update:source", []);
    }, "closeFunc");
    function R() {
      ae(), ne();
    }
    r(R, "hide");
    function se() {
      const e = A((n) => {
        switch (n.code) {
          case I.esc:
            i.closeOnPressEscape && R();
            break;
          case I.space:
            Z();
            break;
          case I.left:
            H();
            break;
          case I.up:
            p("zoomIn");
            break;
          case I.right:
            _();
            break;
          case I.down:
            p("zoomOut");
            break;
        }
      }), t = A((n) => {
        (n.wheelDelta ? n.wheelDelta : -n.detail) > 0 ? p("zoomIn", {
          zoomRate: 1.2,
          enableTransition: !1
        }) : p("zoomOut", {
          zoomRate: 1.2,
          enableTransition: !1
        });
      });
      $.run(() => {
        E(document, "keydown", e), E(document, K, t);
      });
    }
    r(se, "registerEventListener");
    function ae() {
      $.stop();
    }
    r(ae, "unregisterEventListener");
    function re() {
      k.value = !1, x("loadComplete");
    }
    r(re, "handleImgLoad");
    function ie(e) {
      k.value = !1, e.target.alt = "ls.image.error", x("loadError");
    }
    r(ie, "handleImgError");
    function le(e) {
      if (k.value || e.button !== 0 || !S.value) return;
      a.enableTransition = !1;
      const { offsetX: t, offsetY: n } = a, l = e.pageX, m = e.pageY, z = A((N) => {
        a.offsetX = t + N.pageX - l, a.offsetY = n + N.pageY - m;
      }), X = E(document, "mousemove", z);
      E(document, "mouseup", () => {
        X();
      }), e.preventDefault();
    }
    r(le, "handleMouseDown");
    function ce() {
      W(a, {
        scale: 1,
        deg: 0,
        offsetX: 0,
        offsetY: 0,
        enableTransition: !1,
        width: "auto",
        height: "auto",
        objectFit: "none"
      });
    }
    r(ce, "reset");
    function ue() {
      W(a, {
        scale: 1,
        deg: 0,
        offsetX: 0,
        offsetY: 0,
        enableTransition: !1,
        width: "100%",
        height: "100%",
        objectFit: "cover"
      });
    }
    r(ue, "fullScreen");
    function Z() {
      if (k.value) return;
      const e = ye(h), t = Object.values(h), n = C.value.name, m = (t.findIndex((z) => z.name === n) + 1) % e.length;
      C.value = h[e[m]], n === h.CONTAIN.name ? ue() : ce();
    }
    r(Z, "toggleMode");
    function M(e) {
      const t = i.source.length;
      d.value = (e + t) % t;
    }
    r(M, "setActiveItem");
    function H() {
      j.value && !i.infinite || M(d.value - 1);
    }
    r(H, "prev");
    function _() {
      V.value && !i.infinite || M(d.value + 1);
    }
    r(_, "next");
    function p(e, t = {}) {
      if (k.value) return;
      const { zoomRate: n, rotateDeg: l, enableTransition: m } = {
        zoomRate: 1.4,
        rotateDeg: 90,
        enableTransition: !0,
        ...t
      };
      switch (e) {
        case "zoomOut":
          a.scale > 0.2 && (a.scale = Number.parseFloat((a.scale / n).toFixed(3)));
          break;
        case "zoomIn":
          a.scale < 7 && (a.scale = Number.parseFloat((a.scale * n).toFixed(3)));
          break;
        case "clockwise":
          a.deg += l;
          break;
        case "anticlockwise":
          a.deg -= l;
          break;
      }
      a.enableTransition = m;
    }
    return r(p, "handleActions"), B(ee, () => {
      ve(() => {
        const e = D.value[0];
        e != null && e.complete || (k.value = !0);
      });
    }), B(d, (e) => {
      x("switch", e);
    }), ge(() => {
      var e, t;
      se(), (t = (e = S.value) == null ? void 0 : e.focus) == null || t.call(e);
    }), y({
      /** @description manually switch image */
      setActiveItem: M
    }), (e, t) => (O(), be(he, {
      to: "body",
      disabled: !e.teleported
    }, [
      f(ke, {
        name: "viewer-fade",
        appear: ""
      }, {
        default: Fe(() => [
          u("div", {
            ref_key: "wrapper",
            ref: S,
            tabindex: -1,
            class: c(o(s).e("wrapper")),
            style: P({ zIndex: o(oe) })
          }, [
            u("div", {
              class: c(o(s).e("mask")),
              onClick: t[0] || (t[0] = we((n) => e.hideOnClickModal && R(), ["self"]))
            }, null, 2),
            u("span", {
              class: c([o(s).e("btn"), o(s).e("close")]),
              onClick: R
            }, [
              f(v, {
                name: "Close",
                size: 24,
                color: "#FFF"
              })
            ], 2),
            o(U) ? Ie("", !0) : (O(), Y(G, { key: 0 }, [
              u("span", {
                class: c([o(s).e("btn"), o(s).e("prev"), o(s).is("disabled", !e.infinite && o(j))]),
                onClick: H
              }, [
                f(v, {
                  name: "ArrowLeft",
                  size: 24,
                  color: "#FFF"
                })
              ], 2),
              u("span", {
                class: c([o(s).e("btn"), o(s).e("next"), o(s).is("disabled", !e.infinite && o(V))]),
                onClick: _
              }, [
                f(v, {
                  name: "ArrowRight",
                  size: 24,
                  color: "#FFF"
                })
              ], 2)
            ], 64)),
            u("div", {
              class: c([o(s).e("btn"), o(s).e("actions")])
            }, [
              u("div", {
                class: c(o(s).e("actions__inner"))
              }, [
                f(v, {
                  name: "ZoomOut",
                  size: 24,
                  color: "#FFF",
                  onClick: t[1] || (t[1] = (n) => p("zoomOut"))
                }),
                f(v, {
                  name: "ZoomIn",
                  size: 24,
                  color: "#FFF",
                  onClick: t[2] || (t[2] = (n) => p("zoomIn"))
                }),
                u("i", {
                  class: c(o(s).e("actions__divider"))
                }, null, 2),
                f(v, {
                  name: o(C).name,
                  size: 24,
                  color: "#FFF",
                  onClick: Z
                }, null, 8, ["name"]),
                u("i", {
                  class: c(o(s).e("actions__divider"))
                }, null, 2),
                f(v, {
                  name: "RefreshLeft",
                  size: 24,
                  color: "#FFF",
                  onClick: t[3] || (t[3] = (n) => p("anticlockwise"))
                }),
                f(v, {
                  name: "RefreshRight",
                  size: 24,
                  color: "#FFF",
                  onClick: t[4] || (t[4] = (n) => p("clockwise"))
                })
              ], 2)
            ], 2),
            u("div", {
              class: c(o(s).e("canvas"))
            }, [
              (O(!0), Y(G, null, ze(e.source, (n, l) => xe((O(), Y("img", {
                ref_for: !0,
                ref: /* @__PURE__ */ r((m) => o(D)[l] = m, "ref"),
                key: n,
                src: n,
                style: P(o(te)),
                class: c(o(s).e("img")),
                onLoad: re,
                onError: ie,
                onMousedown: le
              }, null, 46, Me)), [
                [Ce, l === o(d)]
              ])), 128))
            ], 2),
            Ne(e.$slots, "default", {}, void 0, !0)
          ], 6)
        ]),
        _: 3
      })
    ], 8, ["disabled"]));
  }
});
export {
  We as default
};
