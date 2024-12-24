var Q = Object.defineProperty;
var a = (x, k) => Q(x, "name", { value: k, configurable: !0 });
import { defineComponent as R, watch as E, ref as A, computed as S, openBlock as b, createElementBlock as U, createElementVNode as F, createBlock as V, mergeProps as T, unref as f, createCommentVNode as B, createVNode as Y, withDirectives as Z, renderSlot as tt, vShow as et, toRaw as ot } from "vue";
import * as N from "pdfjs-dist";
import nt from "../Annotation.vue/index.js";
/* empty css                       */
import at from "../Text.vue/index.js";
import it from "../XFA.vue/index.js";
/* empty css                */
import rt from "../../../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/merge/index.js";
const lt = R({
  name: "LSPdf"
}), gt = /* @__PURE__ */ R({
  ...lt,
  props: {
    pdf: {},
    page: { default: 1 },
    scale: { default: 1 },
    rotation: {},
    fitParent: { type: Boolean },
    width: {},
    height: {},
    textLayer: { type: Boolean },
    imageResourcesPath: {},
    hideForms: { type: Boolean },
    intent: { default: "display" },
    annotationLayer: { type: Boolean },
    annotationsFilter: {},
    annotationsMap: {},
    watermarkText: {},
    watermarkOptions: {},
    highlightText: {},
    highlightOptions: {}
  },
  emits: ["annotation", "highlight", "loaded", "textLoaded", "annotationLoaded", "xfaLoaded", "loadComplete", "loadError", "update:source"],
  setup(x, { expose: k, emit: W }) {
    const o = x, l = W;
    E(
      () => o.pdf,
      () => {
        q();
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    const p = A(), m = A(), P = A(!1);
    let y;
    const s = S(() => ({
      viewport: void 0,
      document: void 0,
      page: void 0
    })), O = S(() => ({
      annotationsMap: o.annotationsMap,
      annotationsFilter: o.annotationsFilter,
      imageResourcesPath: o.imageResourcesPath,
      hideForms: o.hideForms,
      intent: o.intent
    })), D = S(() => ({
      highlightText: o.highlightText,
      highlightOptions: o.highlightOptions
    }));
    function z() {
      return rt(
        {},
        {
          columns: 4,
          rows: 4,
          rotation: 45,
          fontSize: 18,
          color: "rgba(211, 210, 211, 0.4)"
        },
        o.watermarkOptions
      );
    }
    a(z, "getWatermarkOptionsWithDefaults");
    function L(n) {
      if (!(typeof n == "number" && n % 90 === 0)) return 0;
      const t = n / 90;
      return t > 4 ? L(n - 360) : t < 0 ? L(n + 360) : n;
    }
    a(L, "getRotation");
    function H(n) {
      let t = o.scale;
      if (o.fitParent) {
        const e = p.value.parentNode.clientWidth, i = n.getViewport({ scale: 1 }).width;
        t = e / i;
      } else if (o.width) {
        const e = n.getViewport({ scale: 1 }).width;
        t = o.width / e;
      } else if (o.height) {
        const e = n.getViewport({ scale: 1 }).height;
        t = o.height / e;
      }
      return t;
    }
    a(H, "getScale");
    function _(n = 1) {
      if (!o.watermarkText) return;
      const t = M();
      if (!t) return;
      const e = t.getContext("2d");
      if (!e) return;
      const i = z(), c = o.watermarkText, r = i.columns, u = i.rows, d = r * u, g = i.rotation, v = i.fontSize * n;
      e.font = `${v}px Trebuchet MS`, e.fillStyle = i.color;
      for (let h = 0; h < d; h++) {
        const w = h % r * (t.width / r) + t.width / (r * 2), G = Math.floor(h / r) * (t.height / u) + t.height / (u * 2), K = e.measureText(c).width;
        e.save(), e.translate(w, G), e.rotate(-g * (Math.PI / 180)), e.fillText(c, -K / 2, v / 2), e.restore();
      }
    }
    a(_, "paintWatermark");
    function M() {
      var t;
      let n = null;
      return (t = p.value) == null || t.childNodes.forEach((e) => {
        e.tagName === "CANVAS" && (n = e);
      }), n;
    }
    a(M, "getCurrentCanvas");
    function I(n) {
      var c;
      let t;
      const e = M();
      e && (e == null ? void 0 : e.getAttribute("role")) === "main" ? t = e : (t = document.createElement("canvas"), t.style.display = "block", t.setAttribute("dir", "ltr"));
      const i = window.devicePixelRatio || 1;
      return t.width = Math.floor(n.width * i), t.height = Math.floor(n.height * i), t.style.width = `${Math.floor(n.width)}px`, t.style.height = `${Math.floor(n.height)}px`, t.setAttribute("class", "pdf-canvas"), (c = p.value) == null || c.style.setProperty("--scale-factor", `${n.scale}`), m.value.style.width = `${Math.floor(n.width)}px`, m.value.style.height = `${Math.floor(n.height)}px`, m.value.style.top = "0", m.value.style.left = "0", P.value = !0, t;
    }
    a(I, "setupCanvas");
    function $() {
      y && y.cancel();
    }
    a($, "cancelRender");
    function C(n) {
      var t;
      (t = ot(s.value.document)) == null || t.getPage(n).then((e) => {
        var w;
        $();
        const i = e.getViewport(), c = {
          scale: H(e),
          rotation: L((o.rotation || 0) + i.rotation)
        }, r = e.getViewport(c), u = M(), d = I(r), g = window.devicePixelRatio || 1, v = g !== 1 ? [g, 0, 0, g, 0, 0] : void 0, h = {
          canvasContext: d.getContext("2d"),
          viewport: r,
          annotationMode: o.hideForms ? N.AnnotationMode.ENABLE : N.AnnotationMode.ENABLE_FORMS,
          transform: v,
          intent: o.intent
        };
        (d == null ? void 0 : d.getAttribute("role")) !== "main" ? u && ((w = p.value) == null || w.replaceChild(d, u)) : d.removeAttribute("role"), s.value.page = e, s.value.viewport = r, y = e.render(h), y.promise.then(() => {
          P.value = !1, _(r.scale), l("loaded", s.value.viewport), l("loadComplete");
        }).catch(() => {
          l("loadError");
        });
      });
    }
    a(C, "renderPage");
    function J(n) {
      n.promise && n.promise.then(async (t) => {
        s.value.document = t, C(o.page);
      });
    }
    a(J, "initDoc"), E(
      () => [o.page, o.scale, o.width, o.height, o.rotation, o.hideForms, o.intent],
      () => {
        C(o.page);
      }
    );
    function X() {
      C(o.page);
    }
    a(X, "reload");
    function j() {
      $();
    }
    a(j, "cancel");
    async function q() {
      if (o.pdf)
        try {
          J(o.pdf);
        } finally {
        }
    }
    return a(q, "initPdf"), k({
      reload: X,
      cancel: j
    }), (n, t) => (b(), U("div", {
      ref_key: "container",
      ref: p,
      style: { position: "relative", display: "block" }
    }, [
      t[5] || (t[5] = F("canvas", {
        dir: "ltr",
        style: { display: "block" },
        role: "main"
      }, null, -1)),
      n.annotationLayer ? (b(), V(nt, T({ key: 0 }, { ...f(s), ...f(O) }, {
        onAnnotation: t[0] || (t[0] = (e) => l("annotation", e)),
        onAnnotationLoaded: t[1] || (t[1] = (e) => l("annotationLoaded", e))
      }), null, 16)) : B("", !0),
      n.textLayer ? (b(), V(at, T({ key: 1 }, { ...f(s), ...f(D) }, {
        onHighlight: t[2] || (t[2] = (e) => l("highlight", e)),
        onTextLoaded: t[3] || (t[3] = (e) => l("textLoaded", e))
      }), null, 16)) : B("", !0),
      Y(it, T({ ...f(s) }, {
        onXfaLoaded: t[4] || (t[4] = (e) => l("xfaLoaded"))
      }), null, 16),
      Z(F("div", {
        ref_key: "loadingLayer",
        ref: m,
        style: { position: "absolute" }
      }, [
        tt(n.$slots, "default")
      ], 512), [
        [et, f(P)]
      ])
    ], 512));
  }
});
export {
  gt as default
};
