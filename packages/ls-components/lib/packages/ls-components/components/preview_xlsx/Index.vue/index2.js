var v = Object.defineProperty;
var r = (e, o) => v(e, "name", { value: o, configurable: !0 });
import { defineComponent as d, mergeModels as a, useModel as L, openBlock as P, createElementBlock as V, normalizeClass as w, unref as t, createVNode as E, mergeProps as _, createCommentVNode as g } from "vue";
import n from "../Xlsx.vue/index.js";
import k from "../../_hooks/usePreviewHook/index.js";
import { lsPreviewProp as x } from "../../_constants/prviewType/index.js";
import B from "../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/merge/index.js";
const M = d({
  name: "LSPreviewXlsx"
}), z = /* @__PURE__ */ d({
  ...M,
  name: "LSPreviewXlsx",
  components: {
    LSXlsx: n
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
    const l = o, i = e, s = L(e, "modelValue"), { comClass: p, defAttrs: c, closeLoading: m } = k(i, s), u = /* @__PURE__ */ r(() => {
      m(), l("loadComplete");
    }, "loadComplete"), f = /* @__PURE__ */ r(() => {
      m(), l("loadError");
    }, "loadError");
    return (C, S) => s.value ? (P(), V("div", {
      key: 0,
      class: w(t(p))
    }, [
      E(n, _(t(B)(t(c), C.$attrs), {
        onLoadComplete: u,
        onLoadError: f
      }), null, 16)
    ], 2)) : g("", !0);
  }
});
export {
  z as default
};
