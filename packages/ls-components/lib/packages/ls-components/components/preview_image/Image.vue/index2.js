var fe = Object.defineProperty;
var a = (L, S) => fe(L, "name", { value: S, configurable: !0 });
import { defineComponent as oe, useAttrs as pe, ref as O, effectScope as ve, shallowRef as ge, reactive as be, computed as z, watch as U, nextTick as ke, onMounted as we, openBlock as g, createElementBlock as w, createBlock as Fe, Teleport as he, createVNode as u, Transition as Ie, withCtx as ze, createElementVNode as m, normalizeClass as i, unref as o, normalizeStyle as Y, withModifiers as Ce, Fragment as $, createCommentVNode as j, renderList as xe, withDirectives as Ne, vShow as Te, renderSlot as ye } from "vue";
import { useEventListener as E } from "../../../../../node_modules/.pnpm/@vueuse_core@12.0.0_typescript@5.5.4/node_modules/@vueuse/core/index/index.js";
import { useNamespace as Oe } from "../../_hooks/useNamespace/index.js";
import { useZIndex as Ee } from "../../_hooks/useZIndex/index.js";
import { EVENT_CODE as C } from "../../_constants/aria/index.js";
import { isString as Le, isNumber as Se, isArray as De, isFirefox as Ae } from "../../_utils/check/index.js";
import { keysOf as Me } from "../../_utils/types/index.js";
import { imageViewerProps as Re } from "../types/index.js";
import { previewEmits as Xe } from "../../_constants/prviewType/index.js";
import p from "../../icon/Index.vue/index.js";
import V from "../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/throttle/index.js";
import ee from "../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/merge/index.js";
const Ye = ["src"], $e = ["src"], je = oe({
  name: "LSImage"
}), eo = /* @__PURE__ */ oe({
  ...je,
  props: Re,
  emits: Xe,
  setup(L, { expose: S, emit: te }) {
    const F = {
      CONTAIN: {
        name: "FullScreen"
      },
      ORIGINAL: {
        name: "ScaleToOriginal"
      }
    }, ne = Ae() ? "DOMMouseScroll" : "mousewheel", l = L, x = te, Z = pe(), s = Oe("image"), { nextZIndex: se } = Ee(), D = O(), A = O([]), H = ve(), h = O(!0), v = O(l.initialIndex), T = ge(F.CONTAIN), r = be({
      scale: 1,
      deg: 0,
      offsetX: 0,
      offsetY: 0,
      enableTransition: !1,
      width: "auto",
      height: "auto",
      objectFit: "none"
    }), ae = z(() => {
      const { source: e } = l || {};
      return Le(e) || e.length <= 1;
    }), B = z(() => v.value === 0), P = z(() => {
      const e = l.source;
      return v.value === e.length - 1;
    }), re = z(() => (l.source || {})[v.value]), _ = z(() => {
      const { scale: e, deg: n, offsetX: t, offsetY: c, enableTransition: f, width: N, height: X, objectFit: y } = r;
      let b = t / e, k = c / e;
      switch (n % 360) {
        case 90:
        case -270:
          [b, k] = [k, -b];
          break;
        case 180:
        case -180:
          [b, k] = [-b, -k];
          break;
        case 270:
        case -90:
          [b, k] = [-k, b];
          break;
      }
      const I = {
        transform: `scale(${e}) rotate(${n}deg) translate(${b}px, ${k}px)`,
        transition: f ? "transform .3s" : ""
      };
      return T.value.name === F.CONTAIN.name && (I.maxWidth = I.maxHeight = "100%"), I.width = N, I.height = X, I.objectFit = y, I;
    }), ie = z(() => Se(l.zIndex) ? l.zIndex : se()), le = /* @__PURE__ */ a(() => {
      l.onClose && l.onClose(), x("update:source", []);
    }, "closeFunc");
    function M() {
      ue(), le();
    }
    a(M, "hide");
    function ce() {
      const e = V((t) => {
        switch (t.code) {
          case C.esc:
            l.closeOnPressEscape && M();
            break;
          case C.space:
            J();
            break;
          case C.left:
            K();
            break;
          case C.up:
            d("zoomIn");
            break;
          case C.right:
            Q();
            break;
          case C.down:
            d("zoomOut");
            break;
        }
      }), n = V((t) => {
        (t.wheelDelta ? t.wheelDelta : -t.detail) > 0 ? d("zoomIn", {
          zoomRate: 1.2,
          enableTransition: !1
        }) : d("zoomOut", {
          zoomRate: 1.2,
          enableTransition: !1
        });
      });
      H.run(() => {
        E(document, "keydown", e), E(document, ne, n);
      });
    }
    a(ce, "registerEventListener");
    function ue() {
      H.stop();
    }
    a(ue, "unregisterEventListener");
    function G() {
      h.value = !1, x("loadComplete");
    }
    a(G, "handleImgLoad");
    function W(e) {
      h.value = !1, e.target.alt = "ls.image.error", x("loadError");
    }
    a(W, "handleImgError");
    function q(e) {
      if (h.value || e.button !== 0 || !D.value) return;
      r.enableTransition = !1;
      const { offsetX: n, offsetY: t } = r, c = e.pageX, f = e.pageY, N = V((y) => {
        r.offsetX = n + y.pageX - c, r.offsetY = t + y.pageY - f;
      }), X = E(document, "mousemove", N);
      E(document, "mouseup", () => {
        X();
      }), e.preventDefault();
    }
    a(q, "handleMouseDown");
    function me() {
      ee(r, {
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
    a(me, "reset");
    function de() {
      ee(r, {
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
    a(de, "fullScreen");
    function J() {
      if (h.value) return;
      const e = Me(F), n = Object.values(F), t = T.value.name, f = (n.findIndex((N) => N.name === t) + 1) % e.length;
      T.value = F[e[f]], t === F.CONTAIN.name ? de() : me();
    }
    a(J, "toggleMode");
    function R(e) {
      const t = l.source.length;
      v.value = (e + t) % t;
    }
    a(R, "setActiveItem");
    function K() {
      B.value && !l.infinite || R(v.value - 1);
    }
    a(K, "prev");
    function Q() {
      P.value && !l.infinite || R(v.value + 1);
    }
    a(Q, "next");
    function d(e, n = {}) {
      if (h.value) return;
      const { zoomRate: t, rotateDeg: c, enableTransition: f } = {
        zoomRate: 1.4,
        rotateDeg: 90,
        enableTransition: !0,
        ...n
      };
      switch (e) {
        case "zoomOut":
          r.scale > 0.2 && (r.scale = Number.parseFloat((r.scale / t).toFixed(3)));
          break;
        case "zoomIn":
          r.scale < 7 && (r.scale = Number.parseFloat((r.scale * t).toFixed(3)));
          break;
        case "clockwise":
          r.deg += c;
          break;
        case "anticlockwise":
          r.deg -= c;
          break;
        case "download":
          x("download", Z.downloadData);
          break;
      }
      r.enableTransition = f;
    }
    return a(d, "handleActions"), U(re, () => {
      ke(() => {
        const e = A.value[0];
        e != null && e.complete || (h.value = !0);
      });
    }), U(v, (e) => {
      x("switch", e);
    }), we(() => {
      var e, n;
      ce(), (n = (e = D.value) == null ? void 0 : e.focus) == null || n.call(e);
    }), S({
      /** @description manually switch image */
      setActiveItem: R
    }), (e, n) => (g(), w("div", null, [
      (g(), Fe(he, {
        to: "body",
        disabled: !e.teleported
      }, [
        u(Ie, {
          name: "viewer-fade",
          appear: ""
        }, {
          default: ze(() => [
            m("div", {
              ref_key: "wrapper",
              ref: D,
              tabindex: -1,
              class: i(o(s).e("wrapper")),
              style: Y({ zIndex: o(ie) })
            }, [
              m("div", {
                class: i(o(s).e("mask")),
                onClick: n[0] || (n[0] = Ce((t) => e.hideOnClickModal && M(), ["self"]))
              }, null, 2),
              m("span", {
                class: i([o(s).e("btn"), o(s).e("close")]),
                onClick: M
              }, [
                u(p, {
                  name: "Close",
                  size: 24,
                  color: "#FFF"
                })
              ], 2),
              o(ae) ? j("", !0) : (g(), w($, { key: 0 }, [
                m("span", {
                  class: i([o(s).e("btn"), o(s).e("prev"), o(s).is("disabled", !e.infinite && o(B))]),
                  onClick: K
                }, [
                  u(p, {
                    name: "ArrowLeft",
                    size: 24,
                    color: "#FFF"
                  })
                ], 2),
                m("span", {
                  class: i([o(s).e("btn"), o(s).e("next"), o(s).is("disabled", !e.infinite && o(P))]),
                  onClick: Q
                }, [
                  u(p, {
                    name: "ArrowRight",
                    size: 24,
                    color: "#FFF"
                  })
                ], 2)
              ], 64)),
              m("div", {
                class: i([o(s).e("btn"), o(s).e("actions")])
              }, [
                m("div", {
                  class: i(o(s).e("actions__inner"))
                }, [
                  u(p, {
                    name: "ZoomOut",
                    size: 24,
                    color: "#FFF",
                    onClick: n[1] || (n[1] = (t) => d("zoomOut"))
                  }),
                  u(p, {
                    name: "ZoomIn",
                    size: 24,
                    color: "#FFF",
                    onClick: n[2] || (n[2] = (t) => d("zoomIn"))
                  }),
                  m("i", {
                    class: i(o(s).e("actions__divider"))
                  }, null, 2),
                  u(p, {
                    name: o(T).name,
                    size: 24,
                    color: "#FFF",
                    onClick: J
                  }, null, 8, ["name"]),
                  m("i", {
                    class: i(o(s).e("actions__divider"))
                  }, null, 2),
                  u(p, {
                    name: "RefreshLeft",
                    size: 24,
                    color: "#FFF",
                    onClick: n[3] || (n[3] = (t) => d("anticlockwise"))
                  }),
                  u(p, {
                    name: "RefreshRight",
                    size: 24,
                    color: "#FFF",
                    onClick: n[4] || (n[4] = (t) => d("clockwise"))
                  }),
                  o(Z).hasDownload ? (g(), w($, { key: 0 }, [
                    m("i", {
                      class: i(o(s).e("actions__divider"))
                    }, null, 2),
                    u(p, {
                      name: "Download",
                      size: 24,
                      color: "#FFF",
                      onClick: n[5] || (n[5] = (t) => d("download"))
                    })
                  ], 64)) : j("", !0)
                ], 2)
              ], 2),
              e.source ? (g(), w("div", {
                key: 1,
                class: i(o(s).e("canvas"))
              }, [
                o(De)(e.source) ? (g(!0), w($, { key: 0 }, xe(e.source, (t, c) => Ne((g(), w("img", {
                  ref_for: !0,
                  ref: /* @__PURE__ */ a((f) => o(A)[c] = f, "ref"),
                  key: t,
                  src: t,
                  style: Y(o(_)),
                  class: i(o(s).e("img")),
                  onLoad: G,
                  onError: W,
                  onMousedown: q
                }, null, 46, Ye)), [
                  [Te, c === o(v)]
                ])), 128)) : (g(), w("img", {
                  ref: /* @__PURE__ */ a((t) => o(A)[0] = t, "ref"),
                  key: e.source,
                  src: e.source,
                  style: Y(o(_)),
                  class: i(o(s).e("img")),
                  onLoad: G,
                  onError: W,
                  onMousedown: q
                }, null, 46, $e))
              ], 2)) : j("", !0),
              ye(e.$slots, "default", {}, void 0, !0)
            ], 6)
          ]),
          _: 3
        })
      ], 8, ["disabled"]))
    ]));
  }
});
export {
  eo as default
};
