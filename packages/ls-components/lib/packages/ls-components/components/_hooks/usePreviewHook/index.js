var i = Object.defineProperty;
var u = (o, e) => i(o, "name", { value: e, configurable: !0 });
import { ElLoading as s } from "element-plus";
import { useNamespace as z } from "../useNamespace/index.js";
import { toRefs as g, reactive as D, ref as L, watch as r, onBeforeMount as h, onBeforeUnmount as S } from "vue";
/* empty css                                                                                                                                          */
/* empty css                                                                                                                                           */
/* empty css                                                                                                                                             */
import { ElMessage as T } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/message/index/index.js";
function H(o, e) {
  const { zoomSize: l } = g(o), t = D({
    zoomSize: l.value,
    source: ""
  }), f = z("preview").b(), m = L();
  let a = null;
  r(
    () => e == null ? void 0 : e.value,
    (n) => {
      n && d();
    },
    {
      immediate: !0,
      deep: !0
    }
  ), r(
    () => o.source,
    (n) => {
      t.source = n, n && clearTimeout(a);
    },
    {
      immediate: !0,
      deep: !0
    }
  );
  function d() {
    o.needLoading && (m.value = s.service(o.loadingOption)), t.zoomSize = o.zoomSize, t.hasDownload = o.hasDownload, t.hasDownload && (t.downloadData = o.downloadData), a = setTimeout(() => {
      o.source || (T.error("加载超时，请检查网络后重试！"), c(), e.value = !1), clearTimeout(a);
    }, 2e4);
  }
  u(d, "openLoading");
  const c = /* @__PURE__ */ u(() => {
    a && clearTimeout(a), o.needLoading && m.value && m.value.close();
  }, "closeLoading");
  return h(() => {
    e.value && d();
  }), S(() => {
    c();
  }), { previewVisible: e, comClass: f, defAttrs: t, closeLoading: c };
}
u(H, "usePreviewHook");
export {
  H as default
};
