var E = Object.defineProperty;
var c = (r, s) => E(r, "name", { value: s, configurable: !0 });
import * as h from "pdfjs-dist";
import F from "../../../../../node_modules/.pnpm/pdfjs-dist@4.8.69/node_modules/pdfjs-dist/build/pdf.worker.min/index.js";
import { shallowRef as y, isRef as U, watch as N } from "vue";
import { getDestinationArray as A, getDestinationRef as O, isSpecLike as j, getLocation as B } from "../components/pdfs/destination/index.js";
import { createIframe as G, addStylesToIframe as J } from "../components/pdfs/miscellaneous/index.js";
function _(r) {
  h.GlobalWorkerOptions.workerSrc = r;
}
c(_, "configWorker");
function K(r, s = {
  onProgress: void 0,
  onPassword: void 0,
  onError: void 0,
  password: ""
}) {
  var k;
  (k = h.GlobalWorkerOptions) != null && k.workerSrc || _(F);
  const P = y(), l = y(), b = y(0), D = y({});
  function w(d) {
    l.value && l.value.destroy();
    const o = h.getDocument(d);
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
        l.value = e, P.value = e.loadingTask, b.value = e.numPages;
        const i = await e.getMetadata(), a = await e.getAttachments(), n = await e.getJSActions(), u = await e.getOutline();
        D.value = {
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
  async function R(d) {
    var t;
    const o = await ((t = P.value) == null ? void 0 : t.promise);
    if (!o) return null;
    const e = await A(o, d), i = await O(o, e);
    if (!i || !e) return null;
    const a = await o.getPageIndex(i), n = e[1].name, u = e.slice(2), g = j(u) ? B(n, u) : null;
    return { pageIndex: a, location: g ?? { type: "Fit", spec: [] } };
  }
  c(R, "getPDFDestination");
  async function T(d = "filename") {
    var n;
    if (!l.value) throw new Error("Current PDFDocumentProxy have not loaded yet");
    const o = await ((n = l.value) == null ? void 0 : n.saveDocument()), e = new Blob([o], { type: "application/pdf" }), i = URL.createObjectURL(e), a = document.createElement("a");
    document.body.appendChild(a), a.href = i, a.download = d, a.style.display = "none", a.click(), setTimeout(() => {
      URL.revokeObjectURL(i), document.body.removeChild(a);
    }, 10);
  }
  c(T, "download");
  async function x(d = 150, o = "filename") {
    var C, S;
    if (!l.value) throw new Error("Current PDFDocumentProxy have not loaded yet");
    const e = await ((C = l.value) == null ? void 0 : C.saveDocument()), a = await h.getDocument(e.buffer).promise, n = d / 72, u = 96 / 72, g = await G(), t = g.contentWindow;
    t.document.title = o;
    const I = [...Array(a.numPages).keys()].map((v) => v + 1);
    for (const v of I) {
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
      }).promise), (S = L.getContext("2d")) == null || S.drawImage(f, 0, 0);
    }
    t == null || t.focus(), t == null || t.print(), document.body.removeChild(g);
  }
  return c(x, "print"), U(r) ? (r.value && w(r.value), N(r, () => {
    r.value && w(r.value);
  })) : r && w(r), {
    pdf: P,
    pages: b,
    info: D,
    print: x,
    download: T,
    getPDFDestination: R,
    processLoadingTask: w
  };
}
c(K, "usePDF");
export {
  K as usePDF
};
