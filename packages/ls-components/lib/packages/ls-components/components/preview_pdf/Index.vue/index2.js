var C = Object.defineProperty;
var r = (e, o) => C(e, "name", { value: o, configurable: !0 });
import { defineComponent as d, mergeModels as a, useModel as v, openBlock as L, createElementBlock as V, normalizeClass as w, unref as t, createVNode as E, mergeProps as _, createCommentVNode as g } from "vue";
import n from "../Pdf.vue/index.js";
import k from "../../_hooks/usePreviewHook/index.js";
import { lsPreviewProp as B } from "../../_constants/prviewType/index.js";
import M from "../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/merge/index.js";
const S = d({
  name: "LSPreviewPdf"
}), H = /* @__PURE__ */ d({
  ...S,
  name: "LSPreviewPdf",
  components: {
    LSPdf: n
  },
  inheritAttrs: !1,
  props: /* @__PURE__ */ a(B, {
    modelValue: {
      type: Boolean
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ a(["loadComplete", "loadError"], ["update:modelValue"]),
  setup(e, { emit: o }) {
    const l = o, i = e, m = v(e, "modelValue"), { comClass: p, defAttrs: c, closeLoading: s } = k(i, m), f = /* @__PURE__ */ r(() => {
      s(), l("loadComplete");
    }, "loadComplete"), u = /* @__PURE__ */ r(() => {
      s(), l("loadError");
    }, "loadError");
    return (P, h) => m.value ? (L(), V("div", {
      key: 0,
      class: w(t(p))
    }, [
      E(n, _(t(M)(t(c), P.$attrs), {
        onLoadComplete: f,
        onLoadError: u
      }), null, 16)
    ], 2)) : g("", !0);
  }
});
export {
  H as default
};
