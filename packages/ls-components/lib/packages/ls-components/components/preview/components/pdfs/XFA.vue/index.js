var u = Object.defineProperty;
var l = (a, r) => u(a, "name", { value: r, configurable: !0 });
import { defineComponent as v, ref as w, watch as g, onMounted as y, openBlock as _, createElementBlock as k, toRaw as x } from "vue";
import * as S from "pdfjs-dist";
import { SimpleLinkService as L } from "../linkService/index.js";
const B = /* @__PURE__ */ v({
  __name: "XFA",
  props: {
    page: {},
    document: {},
    viewport: {}
  },
  emits: ["xfaLoaded"],
  setup(a, { emit: r }) {
    const e = a, s = r, t = w();
    async function n() {
      var p, c;
      (c = (p = t.value).replaceChildren) == null || c.call(p);
      const o = x(e.document), i = e.page, f = e.viewport;
      if (o.isPureXfa) {
        const m = await i.getXfa(), d = {
          div: t.value,
          viewport: f.clone({ dontFlip: !0 }),
          linkService: new L(),
          annotationStorage: o == null ? void 0 : o.annotationStorage,
          xfaHtml: m
        };
        S.XfaLayer.render(d), s("xfaLoaded");
      }
    }
    return l(n, "render"), g(
      () => e.viewport,
      () => {
        e.page && e.viewport && t.value && n();
      }
    ), y(() => {
      e.page && e.viewport && t.value && n();
    }), (o, i) => (_(), k("div", {
      ref_key: "layer",
      ref: t,
      style: { display: "block" }
    }, null, 512));
  }
});
export {
  B as default
};
