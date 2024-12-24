var L = Object.defineProperty;
var r = (d, p) => L(d, "name", { value: p, configurable: !0 });
import { defineComponent as O, ref as A, watch as P, onMounted as T, openBlock as j, createElementBlock as B, toRaw as m } from "vue";
import * as H from "pdfjs-dist";
import { EVENTS_TO_HANDLER as F, annotationEventsHandler as J } from "../annotations/index.js";
import { SimpleLinkService as C } from "../linkService/index.js";
const W = /* @__PURE__ */ O({
  __name: "Annotation",
  props: {
    page: {},
    viewport: {},
    document: {},
    annotationsFilter: {},
    annotationsMap: {},
    imageResourcesPath: {},
    hideForms: { type: Boolean },
    enableScripting: { type: Boolean },
    intent: {}
  },
  emits: ["annotation", "annotationLoaded"],
  setup(d, { emit: p }) {
    const t = d, g = p, i = A(), l = A();
    function y(o) {
      const n = J(o, t.document, l.value);
      Promise.resolve(n).then((e) => {
        e && g("annotation", e);
      });
    }
    r(y, "annotationsEvents");
    async function M() {
      var n;
      return await ((n = m(t.document)) == null ? void 0 : n.getFieldObjects());
    }
    r(M, "getFieldObjects");
    async function E() {
      var n;
      return await ((n = m(t.document)) == null ? void 0 : n.hasJSActions());
    }
    r(E, "getHasJSActions");
    async function w() {
      const o = t.page;
      let n = await (o == null ? void 0 : o.getAnnotations({ intent: t.intent }));
      if (t.annotationsFilter) {
        const e = t.annotationsFilter;
        n = n.filter((s) => {
          const c = s.subtype, u = s.fieldType ? `${c}.${s.fieldType}` : null;
          return (e == null ? void 0 : e.includes(c)) || u !== null && (e == null ? void 0 : e.includes(u));
        });
      }
      return n;
    }
    r(w, "getAnnotations");
    async function h() {
      var b, S;
      (S = (b = i.value).replaceChildren) == null || S.call(b);
      for (const a of F) i.value.removeEventListener(a, y);
      const o = m(t.document), n = t.page, e = t.viewport;
      l.value = await w();
      const s = /* @__PURE__ */ new Map([]);
      for (const a of l.value)
        if (a.subtype === "Widget" && a.fieldType === "Btn" && a.pushButton) {
          const v = a.rect[2] - a.rect[0], _ = a.rect[3] - a.rect[1], f = document.createElement("canvas");
          f.setAttribute("width", (v * e.scale).toString()), f.setAttribute("height", (_ * e.scale).toString()), s.set(a.id, f);
        }
      const c = o.annotationStorage;
      if (t.annotationsMap)
        for (const [a, v] of Object.entries(t.annotationsMap)) c.setValue(a, v);
      const u = {
        accessibilityManager: void 0,
        annotationCanvasMap: s,
        div: i.value,
        page: n,
        viewport: e.clone({ dontFlip: !0 }),
        annotationEditorUIManager: null,
        l10n: null
      }, k = {
        annotations: l.value,
        viewport: e.clone({ dontFlip: !0 }),
        linkService: new C(),
        annotationCanvasMap: s,
        div: i.value,
        annotationStorage: c,
        renderForms: !t.hideForms,
        page: n,
        enableScripting: !1,
        hasJSActions: await E(),
        fieldObjects: await M(),
        downloadManager: null,
        imageResourcesPath: t.imageResourcesPath
      };
      new H.AnnotationLayer(u).render(k).then(async () => {
        g("annotationLoaded", await w());
      });
      for (const a of F) i.value.addEventListener(a, y);
    }
    return r(h, "render"), P(
      () => t.viewport,
      () => {
        t.page && t.viewport && i.value && h();
      }
    ), T(() => {
      t.page && t.viewport && i.value && h();
    }), (o, n) => (j(), B("div", {
      ref_key: "layer",
      ref: i,
      class: "annotationLayer",
      style: { display: "block" }
    }, null, 512));
  }
});
export {
  W as default
};
