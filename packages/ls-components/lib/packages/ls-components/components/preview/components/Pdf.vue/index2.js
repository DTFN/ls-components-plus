var Q = Object.defineProperty;
var l = (k, b) => Q(k, "name", { value: b, configurable: !0 });
/* empty css                                                                                                                                             */
/* empty css                                                                                                                                                        */
/* empty css                                                                                                                                                  */
import { defineComponent as F, ref as a, watch as R, computed as U, resolveComponent as N, unref as e, openBlock as n, createElementBlock as d, normalizeClass as $, createElementVNode as m, createVNode as i, withCtx as C, createTextVNode as S, toDisplayString as g, createCommentVNode as x, createBlock as W, mergeProps as V, withDirectives as X, Fragment as Y, renderList as Z } from "vue";
import { useNamespace as ee } from "../../../_hooks/useNamespace/index.js";
import { usePDF as oe } from "../../composable/index.js";
import D from "../pdfs/PdfItem.vue/index.js";
import { ElScrollbar as te } from "../../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/scrollbar/index/index.js";
import { ElInfiniteScroll as le } from "../../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/infinite-scroll/index/index.js";
const se = { class: "opt-wrap" }, ae = {
  key: 0,
  class: "page-wrap"
}, ne = { class: "num-wrap" }, ie = {
  key: 1,
  class: "size-wrap"
}, re = { class: "num-wrap" }, ce = { class: "pdf-content" }, ue = {
  key: 1,
  class: "infinite-list-wrapper",
  style: { overflow: "auto" }
}, de = ["infinite-scroll-disabled"], pe = F({
  name: "LSPdf"
}), we = /* @__PURE__ */ F({
  ...pe,
  props: {
    source: {},
    onClose: {},
    showSize: { type: Boolean, default: !0 }
  },
  emits: ["annotation", "highlight", "loaded", "textLoaded", "annotationLoaded", "xfaLoaded", "loadComplete", "loadError", "update:source"],
  setup(k, { emit: b }) {
    const h = ee("pdf"), I = h.b(), w = a(void 0), s = a(1), r = a(0), o = a(1), p = a(!0), L = a(!1), f = k, P = b;
    R(
      () => f.source,
      () => {
        M();
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    const T = U(() => p.value ? "取消分页" : "分页展示");
    async function M() {
      if (f.source)
        try {
          const { pdf: c, processLoadingTask: t, pages: u } = oe(f.source, {
            onError: _
          });
          await t(f.source), w.value = c.value, r.value = u.value, E();
        } catch {
          _();
        } finally {
          L.value = !0;
        }
    }
    l(M, "initPdf");
    const j = /* @__PURE__ */ l(() => {
      L.value = !1, f.onClose && f.onClose(), P("update:source");
    }, "closeFunc");
    function O() {
      s.value > 1 && s.value--;
    }
    l(O, "prevPdf");
    function q() {
      s.value < r.value && s.value++;
    }
    l(q, "nextPdf");
    function B(c) {
      c === 0 ? o.value = o.value > 0.25 ? o.value - 0.25 : o.value : o.value = o.value < 2 ? o.value + 0.25 : o.value;
    }
    l(B, "scalePdf");
    const z = a(!1), v = a(0), A = /* @__PURE__ */ l(() => {
      if (v.value >= r.value) {
        z.value = !0;
        return;
      }
      v.value++;
    }, "load");
    function G() {
      p.value = !p.value, p.value || (z.value = !1, v.value = r.value > 10 ? 10 : r.value);
    }
    l(G, "changePagition");
    function E() {
      P("loadComplete");
    }
    l(E, "loadComplete");
    function _() {
      P("loadError");
    }
    return l(_, "loadError"), (c, t) => {
      const u = N("LSButton"), H = N("LSIcon"), J = te, K = le;
      return e(L) ? (n(), d("div", {
        key: 0,
        class: $(e(I))
      }, [
        m("div", se, [
          e(p) ? (n(), d("div", ae, [
            i(u, {
              type: "primary",
              size: "small",
              disabled: e(s) == 1,
              onClick: O
            }, {
              default: C(() => t[2] || (t[2] = [
                S("上一页")
              ])),
              _: 1
            }, 8, ["disabled"]),
            m("span", ne, g(e(s)) + " / " + g(e(r)), 1),
            i(u, {
              type: "primary",
              size: "small",
              disabled: e(s) == e(r),
              onClick: q
            }, {
              default: C(() => t[3] || (t[3] = [
                S("下一页")
              ])),
              _: 1
            }, 8, ["disabled"])
          ])) : x("", !0),
          c.showSize ? (n(), d("div", ie, [
            i(u, {
              type: "primary",
              icon: "Minus",
              size: "small",
              disabled: e(o) == 0.25,
              onClick: t[0] || (t[0] = (y) => B(0))
            }, null, 8, ["disabled"]),
            m("span", re, g(e(o) * 100) + "%", 1),
            i(u, {
              type: "primary",
              icon: "Plus",
              size: "small",
              disabled: e(o) == 2,
              onClick: t[1] || (t[1] = (y) => B(1))
            }, null, 8, ["disabled"])
          ])) : x("", !0),
          i(u, {
            type: "primary",
            size: "small",
            onClick: G
          }, {
            default: C(() => [
              S(g(e(T)), 1)
            ]),
            _: 1
          }),
          m("span", {
            class: $([e(h).e("btn"), e(h).e("close")]),
            onClick: j
          }, [
            i(H, {
              name: "Close",
              size: 26
            })
          ], 2)
        ]),
        m("div", ce, [
          e(p) ? (n(), W(D, V({ key: 0 }, c.$attrs, {
            pdf: e(w),
            page: e(s),
            scale: e(o),
            onLoadComplete: E,
            onLoadError: _
          }), null, 16, ["pdf", "page", "scale"])) : (n(), d("div", ue, [
            i(J, { height: "calc(100vh - 48px)" }, {
              default: C(() => [
                X((n(), d("ul", {
                  "infinite-scroll-disabled": e(z),
                  class: "infinite-list"
                }, [
                  (n(!0), d(Y, null, Z(e(v), (y) => (n(), d("li", {
                    key: y,
                    class: "infinite-list-item"
                  }, [
                    i(D, V({ ref_for: !0 }, c.$attrs, {
                      pdf: e(w),
                      page: y,
                      scale: e(o),
                      onLoadComplete: E,
                      onLoadError: _
                    }), null, 16, ["pdf", "page", "scale"])
                  ]))), 128))
                ], 8, de)), [
                  [K, A]
                ])
              ]),
              _: 1
            })
          ]))
        ])
      ], 2)) : x("", !0);
    };
  }
});
export {
  we as default
};
