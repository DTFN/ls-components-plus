var i = Object.defineProperty;
var n = (e, t) => i(e, "name", { value: t, configurable: !0 });
import { ref as d } from "vue";
function D(e = 500, t) {
  const a = d(!0);
  let l = null;
  async function u(s) {
    a.value = !0;
    const f = Date.now();
    let o;
    try {
      o = await s();
    } finally {
      const r = Date.now() - f;
      r < e ? l = setTimeout(() => {
        a.value = !1, t(o), clearTimeout(l), l = null;
      }, e - r) : (a.value = !1, t(o));
    }
  }
  return n(u, "loadData"), { loading: a, loadData: u };
}
n(D, "useDelayLoader");
export {
  D as default
};
