var g = Object.defineProperty;
var o = (r, t) => g(r, "name", { value: t, configurable: !0 });
import { defineComponent as d, ref as h, watch as F, resolveComponent as k, openBlock as B, createElementBlock as E, normalizeClass as l, unref as i, createElementVNode as m, createVNode as L } from "vue";
import { useNamespace as b } from "../../_hooks/useNamespace/index.js";
import { docxProps as v } from "../types/index.js";
import { previewEmits as y } from "../../_constants/prviewType/index.js";
import { isArrayBuffer as N } from "../../_utils/check/index.js";
const P = d({
  name: "LSDocx"
}), H = /* @__PURE__ */ d({
  ...P,
  props: v,
  emits: y,
  setup(r, { emit: t }) {
    const n = b("docx"), u = n.b(), p = /* @__PURE__ */ o(() => import("../../../../../node_modules/.pnpm/docx-preview@0.3.2/node_modules/docx-preview/dist/docx-preview/index.js"), "docxPromise"), s = r, c = t, a = h();
    F(
      () => s.source,
      (e) => {
        f(e);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    async function f(e) {
      if (!e || !N(e))
        return;
      (await p()).renderAsync(e, a.value, a.value, {
        className: "docx",
        //class name/prefix for default and document style classes
        inWrapper: !0,
        //enables rendering of wrapper around document content
        ignoreWidth: !1,
        //disables rendering width of page
        ignoreHeight: !0,
        //disables rendering height of page
        ignoreFonts: !1,
        //disables fonts rendering
        breakPages: !0,
        //enables page breaking on page breaks
        ignoreLastRenderedPageBreak: !0,
        //disables page breaking on lastRenderedPageBreak elements
        experimental: !1,
        //enables experimental features (tab stops calculation)
        trimXmlDeclaration: !0,
        //if true, xml declaration will be removed from xml documents before parsing
        useBase64URL: !1,
        //if true, images, fonts, etc. will be converted to base 64 URL, otherwise URL.createObjectURL is used
        renderChanges: !1,
        //enables experimental rendering of document changes (inserions/deletions)
        renderHeaders: !0,
        //enables headers rendering
        renderFooters: !0,
        //enables footers rendering
        renderFootnotes: !0,
        //enables footnotes rendering
        renderEndnotes: !0,
        //enables endnotes rendering
        debug: !1
        //enables additional logging
      }).then(() => {
        c("loadComplete");
      }).catch(() => {
        c("loadError");
      });
    }
    o(f, "updateDocx");
    const x = /* @__PURE__ */ o(() => {
      s.onClose && s.onClose(), c("update:source", []);
    }, "closeFunc");
    return (e, _) => {
      const C = k("LSIcon");
      return B(), E("div", {
        class: l(i(u))
      }, [
        m("span", {
          class: l([i(n).e("btn"), i(n).e("close")]),
          onClick: x
        }, [
          L(C, {
            name: "Close",
            size: 24,
            color: "#FFF"
          })
        ], 2),
        m("div", {
          ref_key: "docxRef",
          ref: a
        }, null, 512)
      ], 2);
    };
  }
});
export {
  H as default
};
