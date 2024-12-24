var g = Object.defineProperty;
var r = (e, o) => g(e, "name", { value: o, configurable: !0 });
import { defineComponent as d, mergeModels as s, useModel as v, openBlock as L, createElementBlock as P, normalizeClass as V, unref as t, createVNode as w, mergeProps as E, createCommentVNode as _ } from "vue";
import n from "../Image.vue/index.js";
import k from "../../_hooks/usePreviewHook/index.js";
import { lsPreviewProp as B } from "../../_constants/prviewType/index.js";
import I from "../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/merge/index.js";
const M = d({
  name: "LSPreviewImage"
}), z = /* @__PURE__ */ d({
  ...M,
  name: "LSPreviewImage",
  components: {
    LSImage: n
  },
  inheritAttrs: !1,
  props: /* @__PURE__ */ s(B, {
    modelValue: {
      type: Boolean
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ s(["loadComplete", "loadError"], ["update:modelValue"]),
  setup(e, { emit: o }) {
    const m = o, i = e, l = v(e, "modelValue"), { comClass: p, defAttrs: c, closeLoading: a } = k(i, l), u = /* @__PURE__ */ r(() => {
      a(), m("loadComplete");
    }, "loadComplete"), f = /* @__PURE__ */ r(() => {
      a(), m("loadError");
    }, "loadError");
    return (C, S) => l.value ? (L(), P("div", {
      key: 0,
      class: V(t(p))
    }, [
      w(n, E(t(I)(t(c), C.$attrs), {
        onLoadComplete: u,
        onLoadError: f
      }), null, 16)
    ], 2)) : _("", !0);
  }
});
export {
  z as default
};
