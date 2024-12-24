var i = Object.defineProperty;
var a = (t, e) => i(t, "name", { value: e, configurable: !0 });
async function r() {
  return new Promise((t) => {
    const e = document.createElement("iframe");
    e.width = "0px", e.height = "0px", e.style.cssText = "position: absolute; top:0; left:0", e.style.display = "none", e.onload = function() {
      t(e);
    }, document.body.appendChild(e);
  });
}
a(r, "createIframe");
function s(t, e, o) {
  const n = t.document.createElement("style");
  n.textContent = `
    @page {
      margin: 0;
      size: ${e}pt ${o}pt;
    }
    body {
      margin: 0;
      width: 100%;
    }
    canvas {
      width: 100%;
      page-break-after: always;
      page-break-before: avoid;
      page-break-inside: avoid;
    }
  `, t.document.head.appendChild(n);
}
a(s, "addStylesToIframe");
export {
  s as addStylesToIframe,
  r as createIframe
};
