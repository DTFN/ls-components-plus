var U = Object.defineProperty;
var c = (r, s) => U(r, "name", { value: s, configurable: !0 });
import { GlobalWorkerOptions as S, getDocument as R } from "pdfjs-dist";
import F from "../../../../../node_modules/.pnpm/pdfjs-dist@4.8.69/node_modules/pdfjs-dist/build/pdf.worker.min/index.js";
import { shallowRef as y, isRef as N, watch as A } from "vue";
import { getDestinationArray as O, getDestinationRef as j, isSpecLike as B, getLocation as _ } from "../pdfs/destination/index.js";
import { createIframe as G, addStylesToIframe as J } from "../pdfs/miscellaneous/index.js";
function M(r) {
  S.workerSrc = r;
}
c(M, "configWorker");
function X(r, s = {
  onProgress: void 0,
  onPassword: void 0,
  onError: void 0,
  password: ""
}) {
  var D;
  (D = S) != null && D.workerSrc || M(F);
  const h = y(), d = y(), P = y(0), b = y({});
  function w(l) {
    d.value && d.value.destroy();
    const o = R(l);
    if (s.onProgress && (o.onProgress = s.onProgress), s.onPassword)
      o.onPassword = s.onPassword;
    else if (s.password) {
      const e = /* @__PURE__ */ c((i) => {
        i(s.password ?? "");
      }, "onPassword");
      o.onPassword = e;
    }
    return o.promise.then(
      async (e) => {
        d.value = e, h.value = e.loadingTask, P.value = e.numPages;
        const i = await e.getMetadata(), a = await e.getAttachments(), n = await e.getJSActions(), u = await e.getOutline();
        b.value = {
          metadata: i,
          attachments: a,
          javascript: n,
          outline: u
        };
      },
      (e) => {
        typeof s.onError == "function" && s.onError(e);
      }
    );
  }
  c(w, "processLoadingTask");
  async function T(l) {
    var t;
    const o = await ((t = h.value) == null ? void 0 : t.promise);
    if (!o) return null;
    const e = await O(o, l), i = await j(o, e);
    if (!i || !e) return null;
    const a = await o.getPageIndex(i), n = e[1].name, u = e.slice(2), g = B(u) ? _(n, u) : null;
    return { pageIndex: a, location: g ?? { type: "Fit", spec: [] } };
  }
  c(T, "getPDFDestination");
  async function x(l = "filename") {
    var n;
    if (!d.value) throw new Error("Current PDFDocumentProxy have not loaded yet");
    const o = await ((n = d.value) == null ? void 0 : n.saveDocument()), e = new Blob([o], { type: "application/pdf" }), i = URL.createObjectURL(e), a = document.createElement("a");
    document.body.appendChild(a), a.href = i, a.download = l, a.style.display = "none", a.click(), setTimeout(() => {
      URL.revokeObjectURL(i), document.body.removeChild(a);
    }, 10);
  }
  c(x, "download");
  async function I(l = 150, o = "filename") {
    var k, C;
    if (!d.value) throw new Error("Current PDFDocumentProxy have not loaded yet");
    const e = await ((k = d.value) == null ? void 0 : k.saveDocument()), a = await R(e.buffer).promise, n = l / 72, u = 96 / 72, g = await G(), t = g.contentWindow;
    t.document.title = o;
    const E = [...Array(a.numPages).keys()].map((v) => v + 1);
    for (const v of E) {
      const p = await a.getPage(v), m = p.getViewport({ scale: 1 });
      v === 1 && J(
        t,
        m.width * n / u,
        m.height * n / u
      );
      const f = document.createElement("canvas");
      f.width = m.width * n, f.height = m.height * n;
      const L = f.cloneNode();
      t == null || t.document.body.appendChild(L), await (p == null ? void 0 : p.render({
        canvasContext: f.getContext("2d"),
        intent: "print",
        transform: [n, 0, 0, n, 0, 0],
        viewport: m
      }).promise), (C = L.getContext("2d")) == null || C.drawImage(f, 0, 0);
    }
    t == null || t.focus(), t == null || t.print(), document.body.removeChild(g);
  }
  return c(I, "print"), N(r) ? (r.value && w(r.value), A(r, () => {
    r.value && w(r.value);
  })) : r && w(r), {
    pdf: h,
    pages: P,
    info: b,
    print: I,
    download: x,
    getPDFDestination: T,
    processLoadingTask: w
  };
}
c(X, "usePDF");
export {
  X as usePDF
};
