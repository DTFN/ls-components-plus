var C = Object.defineProperty;
var s = (t, r) => C(t, "name", { value: r, configurable: !0 });
import { defineComponent as u, useCssVars as _, unref as l, ref as d, onMounted as b, openBlock as B, createElementBlock as x, normalizeClass as g, renderSlot as v } from "vue";
import { useNamespace as k } from "../../_hooks/useNamespace/index.js";
import { lsContainerBoxProps as y } from "../types/index.js";
const S = u({
  name: "LSContainerBox"
}), R = /* @__PURE__ */ u({
  ...S,
  props: y,
  setup(t) {
    _((e) => ({
      b787241e: e.width,
      "6cfb5348": e.height,
      b7fd6d16: l(i)
    }));
    const f = k("container-box").b(), m = d(), i = d(1), a = t, c = /* @__PURE__ */ s(() => {
      const e = window.innerHeight / a.height, n = window.innerWidth / a.width;
      i.value = n < e ? n : e;
    }, "getScale"), p = /* @__PURE__ */ s((e, n = 500) => {
      const w = n;
      let o = null;
      return function(...h) {
        o && clearTimeout(o), o = setTimeout(() => {
          e.apply(window.this, h), window.clearTimeout(o);
        }, w);
      };
    }, "debounce");
    return b(() => {
      c(), window.addEventListener("resize", p(c));
    }), (e, n) => (B(), x("div", {
      class: g(l(f)),
      ref_key: "lsContainerBoxRef",
      ref: m
    }, [
      v(e.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
export {
  R as default
};
