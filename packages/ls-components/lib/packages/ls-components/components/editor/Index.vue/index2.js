var P = Object.defineProperty;
var t = (u, m) => P(u, "name", { value: m, configurable: !0 });
import { defineComponent as f, shallowRef as S, computed as V, ref as A, watch as D, onBeforeUnmount as R, openBlock as T, createElementBlock as U, normalizeClass as _, unref as n, createVNode as i, isRef as x, normalizeStyle as z } from "vue";
import { Toolbar as I, Editor as L } from "@wangeditor/editor-for-vue";
import { useNamespace as M } from "../../_hooks/useNamespace/index.js";
import { lsEditorProps as H, lsEditorEmits as K } from "../types/index.js";
import c from "../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/merge/index.js";
const j = f({
  name: "LSEditor"
}), Z = /* @__PURE__ */ f({
  ...j,
  props: H,
  emits: K,
  setup(u, { expose: m, emit: p }) {
    const h = M("editor").b(), l = u, a = p, s = S(), g = {
      excludeKeys: ["group-video"]
    }, C = {
      placeholder: "请输入内容...",
      maxLength: 2e4,
      MENU_CONF: {
        uploadImage: {
          server: l.uploadServer,
          fieldName: l.uploadFieldName,
          headers: {
            token: l.uploadToken
          },
          customInsert(e, o) {
            const { data: r = "", alt: k = "", href: w = "" } = e || {};
            o(r, k, w);
          }
        }
      }
    }, v = V(() => ({
      height: (l == null ? void 0 : l.height) || "300px"
    })), d = A("");
    D(
      () => l.valueHtml,
      (e) => {
        d.value = e;
      },
      {
        immediate: !0,
        deep: !0
      }
    ), R(() => {
      const e = s.value;
      e != null && e.destroy();
    });
    const y = /* @__PURE__ */ t((e) => {
      s.value = e, a("handleCreated", e);
    }, "handleCreated"), E = /* @__PURE__ */ t((e) => {
      a("handleChange", e);
    }, "handleChange"), B = /* @__PURE__ */ t((e) => {
      a("handleDestroyed", e);
    }, "handleDestroyed"), N = /* @__PURE__ */ t((e) => {
      a("handleFocus", e);
    }, "handleFocus"), O = /* @__PURE__ */ t((e) => {
      a("handleBlur", e);
    }, "handleBlur"), b = /* @__PURE__ */ t((e, o) => {
      a("customAlert", e, o);
    }, "customAlert"), F = /* @__PURE__ */ t((e, o, r) => {
      a("customPaste", e, o, r);
    }, "customPaste");
    return m({
      editorRef: s
    }), (e, o) => (T(), U("div", {
      class: _(n(h))
    }, [
      i(n(I), {
        class: "tool-bar-wrap",
        editor: n(s),
        "default-config": n(c)(g, e.toolbarConfig),
        mode: e.mode
      }, null, 8, ["editor", "default-config", "mode"]),
      i(n(L), {
        class: "editor-wrap",
        modelValue: n(d),
        "onUpdate:modelValue": o[0] || (o[0] = (r) => x(d) ? d.value = r : null),
        "default-config": n(c)(C, e.editorConfig),
        style: z(n(v)),
        mode: e.mode,
        onOnCreated: y,
        onOnChange: E,
        onOnDestroyed: B,
        onOnFocus: N,
        onOnBlur: O,
        onCustomAlert: b,
        onCustomPaste: F
      }, null, 8, ["modelValue", "default-config", "style", "mode"])
    ], 2));
  }
});
export {
  Z as default
};
