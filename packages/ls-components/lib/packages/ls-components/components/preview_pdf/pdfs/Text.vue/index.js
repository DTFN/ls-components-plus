var L = Object.defineProperty;
var r = (c, u) => L(c, "name", { value: u, configurable: !0 });
import { defineComponent as _, ref as x, watch as C, onMounted as O, openBlock as k, createElementBlock as D } from "vue";
import { TextLayer as b } from "pdfjs-dist";
import { resetDivs as N, findMatches as B, highlightMatches as E } from "../highlight/index.js";
import H from "../../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/merge/index.js";
const U = /* @__PURE__ */ _({
  __name: "Text",
  props: {
    page: {},
    viewport: {},
    highlightText: {},
    highlightOptions: {}
  },
  emits: ["highlight", "textLoaded"],
  setup(c, { emit: u }) {
    const t = c, p = u, o = x(), s = x();
    let a = [];
    function w() {
      return H(
        {},
        {
          ignoreCase: !0,
          completeWords: !1
        },
        t.highlightOptions
      );
    }
    r(w, "getHighlightOptionsWithDefaults");
    async function d(e = !1) {
      const n = t.page, i = await (n == null ? void 0 : n.getTextContent());
      if (i && (e && N(i, a), t.highlightText)) {
        const h = typeof t.highlightText == "string" ? [t.highlightText] : t.highlightText, l = B(h, i, w());
        E(l, i, a), p("highlight", {
          matches: l,
          textContent: i,
          textDivs: a,
          page: (n == null ? void 0 : n.pageNumber) || 1
        });
      }
    }
    r(d, "findAndHighlight");
    function f() {
      var l, m;
      (m = (l = o.value).replaceChildren) == null || m.call(l);
      const e = t.page, n = t.viewport, i = e == null ? void 0 : e.streamTextContent({ includeMarkedContent: !0, disableNormalization: !0 }), h = new b({ container: o.value, textContentSource: i, viewport: n });
      h.render().then(async () => {
        var v;
        a = h.textDivs;
        const M = await (e == null ? void 0 : e.getTextContent());
        p("textLoaded", { textDivs: a, textContent: M });
        const g = document.createElement("div");
        g.className = "endOfContent", (v = o.value) == null || v.appendChild(g), s.value = g, d();
      });
    }
    r(f, "render");
    function y() {
      s.value && s.value.classList.add("active");
    }
    r(y, "onMouseDown");
    function T() {
      s.value && s.value.classList.remove("active");
    }
    return r(T, "onMouseUp"), C(
      () => t.viewport,
      () => {
        t.page && t.viewport && o.value && f();
      }
    ), C(
      () => [t.highlightText, t.highlightOptions],
      () => {
        d(!0);
      },
      { deep: !0 }
    ), O(() => {
      t.page && t.viewport && o.value && f();
    }), (e, n) => (k(), D("div", {
      ref_key: "layer",
      ref: o,
      class: "textLayer",
      style: { display: "block" },
      onMousedown: y,
      onMouseup: T
    }, null, 544));
  }
});
export {
  U as default
};
