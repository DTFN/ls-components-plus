var y = Object.defineProperty;
var n = (m, u) => y(m, "name", { value: u, configurable: !0 });
import { defineComponent as P, mergeModels as x, toRefs as T, useModel as z, reactive as A, shallowRef as V, ref as C, computed as _, watch as k, defineAsyncComponent as i, onBeforeMount as I, onBeforeUnmount as N, openBlock as L, createElementBlock as R, normalizeClass as S, unref as s, createBlock as D, resolveDynamicComponent as O, mergeProps as U, createCommentVNode as E } from "vue";
import { useNamespace as $ } from "../../_hooks/useNamespace/index.js";
import { lsPreviewProp as j } from "../types/index.js";
import { ElLoading as q } from "element-plus";
/* empty css                                                                                                                                          */
/* empty css                                                                                                                                           */
/* empty css                                                                                                                                             */
import { ElMessage as F } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/message/index/index.js";
import G from "../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/merge/index.js";
const ae = /* @__PURE__ */ P({
  name: "LSPreview",
  // components: {
  //   LSImage,
  //   LSDocx,
  //   LSXlsx,
  //   LSPdf
  // },
  inheritAttrs: !1,
  __name: "Index",
  props: /* @__PURE__ */ x(j, {
    modelValue: {
      type: Boolean
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ x(["loadComplete", "loadError"], ["update:modelValue"]),
  setup(m, { emit: u }) {
    const p = u, e = m, { type: o, zoomSize: M } = T(e), r = z(m, "modelValue"), f = A({
      zoomSize: M,
      source: ""
    }), B = $("preview").b(), a = V({
      image: null,
      docx: null,
      xlsx: null,
      pdf: null
    }), d = C(), v = _(() => (o == null ? void 0 : o.value) && a.value[o == null ? void 0 : o.value]), h = C("文件加载失败，请检查文件是否已损坏！");
    let l = null;
    k(
      () => r == null ? void 0 : r.value,
      (t) => {
        t && g();
      },
      {
        immediate: !0,
        deep: !0
      }
    ), k(
      () => e.source,
      (t) => {
        f.source = t, t && clearTimeout(l);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function g() {
      switch (e.needLoading && (d.value = q.service(e.loadingOption)), e.type) {
        case "image":
          a.value.image = i(() => import("../components/Image.vue/index.js"));
          break;
        case "docx":
          a.value.docx = i(() => import("../components/Docx.vue/index.js"));
          break;
        case "xlsx":
          a.value.xlsx = i(() => import("../components/Xlsx.vue/index.js"));
          break;
        case "pdf":
          a.value.pdf = i(() => import("../components/Pdf.vue/index.js"));
          break;
      }
      l = setTimeout(() => {
        e.source || (F.error("加载超时，请检查网络后重试！"), c(), r.value = !1), clearTimeout(l);
      }, 2e4);
    }
    n(g, "openLoading");
    const c = /* @__PURE__ */ n(() => {
      l && clearTimeout(l), e.needLoading && d.value && d.value.close();
    }, "closeLoading"), w = /* @__PURE__ */ n(() => {
      c(), p("loadComplete");
    }, "loadComplete"), b = /* @__PURE__ */ n(() => {
      c(), console.error(h.value), p("loadError");
    }, "loadError");
    return I(() => {
      r.value && e.type && g();
    }), N(() => {
      c();
    }), (t, J) => r.value ? (L(), R("div", {
      key: 0,
      class: S(s(B))
    }, [
      s(v) ? (L(), D(O(s(v)), U({ key: 0 }, s(G)(s(f), t.$attrs), {
        onLoadComplete: w,
        onLoadError: b
      }), null, 16)) : E("", !0)
    ], 2)) : E("", !0);
  }
});
export {
  ae as default
};
