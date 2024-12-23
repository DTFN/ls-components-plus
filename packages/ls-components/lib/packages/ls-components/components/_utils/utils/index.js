var f = Object.defineProperty;
var o = (t, e) => f(t, "name", { value: e, configurable: !0 });
function d(t) {
  if (t === null) return !0;
  const e = typeof t;
  return !!(e === "undefined" || e === "string" && (t = t.replace(/^\s*|\s*$/g, ""), t === "") || e === "number" && Number.isNaN(t) || e === "object" && Object.keys(t).length === 0);
}
o(d, "isEmpty");
const p = /* @__PURE__ */ o((t = []) => {
  const e = [];
  return t.forEach((n) => {
    e.push(
      new Promise((s, u) => {
        const r = document.createElement("script");
        r.id = n.id, r.src = n.src, document.body.appendChild(r), r.onload = function() {
          s({});
        }, r.onerror = function() {
          r.remove(), u({});
        };
      })
    );
  }), Promise.all(e);
}, "loadJs"), h = /* @__PURE__ */ o((t = []) => {
  t.forEach((e) => {
    const n = document.getElementById(e.id);
    n && n.remove();
  });
}, "removeJs"), b = /* @__PURE__ */ o((t = []) => {
  const e = [];
  return t.forEach((n) => {
    e.push(
      new Promise((s, u) => {
        const r = document.createElement("link");
        r.id = n.id, r.rel = "stylesheet", r.href = n.src, document.body.appendChild(r), r.onload = function() {
          s({});
        }, r.onerror = function() {
          r.remove(), u({});
        };
      })
    );
  }), Promise.all(e);
}, "loadCss"), y = /* @__PURE__ */ o((t = []) => {
  t.forEach((e) => {
    const n = document.getElementById(e.id);
    n && n.remove();
  });
}, "removeCss");
function c(t, e) {
  return Number((Math.ceil(t * 100) / 100).toFixed(e || 1));
}
o(c, "numberFixed");
function m(t, e, n) {
  const s = t, u = e;
  n = n || 0, t = c(t, n), e = c(e, n);
  let r = c((t - e) / 2, n);
  r = r == 0 ? 0.1 : r;
  let l = Math.ceil((t - e) / r);
  l = l == 0 ? 1 : l, e < r && (e = 0);
  let i = c(r * l + e, n);
  return i <= s && (i = c(i + r, n)), {
    aMax: i,
    aMin: e == 0 || e < u ? e : c(e - r, n),
    aInterval: r
  };
}
o(m, "formatChartAxis");
function E(t) {
  try {
    return t = JSON.parse(t), t !== null && typeof t == "object" ? t.constructor === Object : !1;
  } catch {
    return !1;
  }
}
o(E, "isValidJSON");
export {
  m as formatChartAxis,
  d as isEmpty,
  E as isValidJSON,
  b as loadCss,
  p as loadJs,
  c as numberFixed,
  y as removeCss,
  h as removeJs
};
