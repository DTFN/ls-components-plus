var M = Object.defineProperty;
var l = (f, v) => M(f, "name", { value: v, configurable: !0 });
import q from "../useDelayLoader/index.js";
import { ref as u, watch as N, onMounted as B, nextTick as G } from "vue";
function O(f, v, R) {
  const {
    currentPageProp: x = 1,
    pageSizeProp: F = 10,
    isDelayLoader: y = !1,
    delayLoaderTime: A = 300,
    isFullDose: b = !1,
    autoFetch: E = !0,
    hasPanigation: P = !0,
    dealParams: T,
    dealData: i,
    callbackAfter: m
  } = R || {}, h = u(!0), d = u(!1), o = u(x), s = u(F), r = u([]), S = u([]), p = u(0), w = /* @__PURE__ */ l((e) => {
    if (P) {
      if (b) {
        let a = e || [], t = a.length;
        if (i && typeof i == "function") {
          const { data: n, total: c = 0 } = i(e);
          a = n || [], t = Number(c || 0);
        }
        S.value = a, p.value = t, D();
      } else if (i && typeof i == "function") {
        const { data: a, total: t = 0 } = i(e);
        r.value = a || [], p.value = Number(t || 0);
      } else {
        const { records: a = [], total: t } = e || {};
        r.value = a || [], p.value = Number(t);
      }
      m && m(e, { tableData: r, total: p });
    } else
      r.value = e, m && m(e, {});
  }, "disposeResponseData"), z = /* @__PURE__ */ l(() => new Promise((e, a) => {
    if (!f) {
      a(new Error("requestFn is required"));
      return;
    }
    const t = (typeof v == "function" ? v() : v) || {};
    let n = {};
    P ? n = {
      currentPage: o.value,
      pageSize: s.value,
      ...t
    } : n = {
      ...t
    }, T && (n = T(n)), f(n).then((c) => {
      y || w(c), e(c);
    }).catch((c) => {
      a(c);
    }).finally(() => {
      d.value = !1, setTimeout(() => {
        h.value = !1;
      }, 400);
    });
  }), "requestData"), L = q(A || 300, (e) => {
    w(e);
  });
  function D() {
    r.value = S.value.slice((o.value - 1) * s.value, o.value * s.value);
  }
  l(D, "sliceTableData");
  const g = /* @__PURE__ */ l((e = !0, a = !1) => {
    if (f && !(e && d.value)) {
      if (e && (d.value = !0), a && (h.value = !0), y) {
        L.loadData(z);
        return;
      }
      z().finally(() => {
        d.value = !1;
      });
    }
  }, "loadData"), k = /* @__PURE__ */ l((e) => {
    o.value = e, b ? D() : g();
  }, "handleCurrentPageChange"), C = /* @__PURE__ */ l((e) => {
    s.value = e, o.value = 1, b ? D() : g();
  }, "handleSizeChange");
  N(o, (e) => {
    k(e);
  }), N(s, (e) => {
    C(e);
  });
  const H = /* @__PURE__ */ l(() => {
    o.value = 1, G(() => {
      g();
    });
  }, "handleReset");
  return B(() => {
    E && (h.value = !0, g());
  }), {
    isFirst: h,
    loading: y ? L.loading : d,
    pageSize: s,
    currentPage: o,
    tableData: r,
    total: p,
    handleCurrentPageChange: k,
    handleSizeChange: C,
    handleReset: H,
    loadData: g
  };
}
l(O, "useTableListHook");
export {
  O as default
};
