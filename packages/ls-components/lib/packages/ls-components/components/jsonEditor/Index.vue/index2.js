var y = Object.defineProperty;
var i = (n, r) => y(n, "name", { value: r, configurable: !0 });
import { defineComponent as d, useAttrs as V, ref as s, computed as _, watch as b, openBlock as x, createElementBlock as A, normalizeClass as B, unref as o, createVNode as C, mergeProps as E, isRef as J } from "vue";
import j from "vue3-ts-jsoneditor";
import { lsJsonEditorProps as O } from "../types/index.js";
import { useNamespace as h } from "../../_hooks/useNamespace/index.js";
import k from "../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/merge/index.js";
const N = d({
  name: "LSJsonEditor"
}), U = /* @__PURE__ */ d({
  ...N,
  props: O,
  setup(n, { expose: r }) {
    const u = h("json-editor").b(), m = n, c = V(), f = s({
      mode: "text",
      height: 600,
      navigationBar: !1,
      readOnly: !0
    }), t = s({}), a = s(""), p = _(() => {
      const e = k(f.value, c);
      return typeof e["read-only"] < "u" && (e.readOnly = e["read-only"]), typeof e["navigation-bar"] < "u" && (e.navigationBar = e["navigation-bar"]), e.readOnly || (e.mode = "tree", a.value = "editor-status"), e;
    });
    b(
      () => m.jsonValue,
      (e) => {
        t.value = e;
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function v() {
      return t.value;
    }
    return i(v, "getJsonValue"), r({
      getJsonValue: v
    }), (e, l) => (x(), A("div", {
      class: B(o(u))
    }, [
      C(o(j), E(o(p), {
        modelValue: o(t),
        "onUpdate:modelValue": l[0] || (l[0] = (g) => J(t) ? t.value = g : null),
        class: o(a)
      }), null, 16, ["modelValue", "class"])
    ], 2));
  }
});
export {
  U as default
};
