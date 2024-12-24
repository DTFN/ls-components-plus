var v = Object.defineProperty;
var r = (e, o) => v(e, "name", { value: o, configurable: !0 });
import { defineComponent as d, mergeModels as a, useModel as L, openBlock as P, createElementBlock as V, normalizeClass as w, unref as t, createVNode as E, mergeProps as _, createCommentVNode as g } from "vue";
import n from "../Docx.vue/index.js";
import k from "../../_hooks/usePreviewHook/index.js";
import { lsPreviewProp as x } from "../../_constants/prviewType/index.js";
import B from "../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/merge/index.js";
const D = d({
  name: "LSPreviewDocx"
}), z = /* @__PURE__ */ d({
  ...D,
  name: "LSPreviewDocx",
  components: {
    LSDocx: n
  },
  inheritAttrs: !1,
  props: /* @__PURE__ */ a(x, {
    modelValue: {
      type: Boolean
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ a(["loadComplete", "loadError"], ["update:modelValue"]),
  setup(e, { emit: o }) {
    const l = o, i = e, m = L(e, "modelValue"), { comClass: c, defAttrs: p, closeLoading: s } = k(i, m), u = /* @__PURE__ */ r(() => {
      s(), l("loadComplete");
    }, "loadComplete"), f = /* @__PURE__ */ r(() => {
      s(), l("loadError");
    }, "loadError");
    return (C, M) => m.value ? (P(), V("div", {
      key: 0,
      class: w(t(c))
    }, [
      E(n, _(t(B)(t(p), C.$attrs), {
        onLoadComplete: u,
        onLoadError: f
      }), null, 16)
    ], 2)) : g("", !0);
  }
});
export {
  z as default
};
