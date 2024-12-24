var y = Object.defineProperty;
var l = (s, r) => y(s, "name", { value: r, configurable: !0 });
import { defineComponent as d, mergeModels as i, useModel as _, ref as M, watch as f, computed as p, openBlock as v, createElementBlock as w } from "vue";
import { useNamespace as T } from "../../_hooks/useNamespace/index.js";
import { ElMessageBox as q } from "element-plus";
import { lsConfirmProps as L, emitNames as b } from "../types/index.js";
const k = { style: { display: "none" } }, A = d({
  name: "LSConfirm"
}), D = /* @__PURE__ */ d({
  ...A,
  props: /* @__PURE__ */ i(L, {
    modelValue: {
      type: Boolean
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ i(b, ["update:modelValue"]),
  setup(s, { emit: r }) {
    const g = T("confirm").b(), e = s, m = r, t = _(s, "modelValue"), c = M();
    f(
      () => t == null ? void 0 : t.value,
      (o) => {
        o && h();
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    const C = p(() => e.title), n = p(() => e.message);
    f(
      () => n.value,
      (o) => {
        t != null && t.value && o && B();
      },
      {
        deep: !0
      }
    );
    async function B() {
      const o = document.querySelector(".ls-confirm-box .el-message-box__message p");
      o && (e.useHtml ? o.innerHTML = n.value : o.textContent = n.value);
    }
    l(B, "updateMessage");
    function h() {
      q({
        title: C,
        message: n.value,
        confirmButtonText: e.confirmBtnTxt,
        cancelButtonText: e.cancelBtnTxt,
        type: e.type,
        center: e.center,
        draggable: e.draggable,
        dangerouslyUseHTMLString: e.useHtml,
        showCancelButton: e.showCancelBtn,
        showConfirmButton: e.showConfirmBtn,
        showClose: e.showClose,
        customClass: `${g} ${e.customClass} ls-confirm-box`,
        closeOnClickModal: e.closeOnClickModal,
        closeOnPressEscape: e.closeOnPressEscape,
        appendTo: e.appendTo,
        beforeClose: /* @__PURE__ */ l(async (o, a, u) => {
          if (o === "confirm") {
            if (a.confirmButtonLoading = !0, e.requestApi && typeof e.requestApi == "function")
              try {
                c.value = await e.requestApi(e.requestParams);
              } catch (x) {
                c.value = x;
              }
            a.confirmButtonLoading = !1, u();
          } else
            a.confirmButtonLoading || u();
        }, "beforeClose")
      }).then(() => {
        t.value = !1, m("onConfirm", c);
      }).catch(() => {
        t.value = !1, m("onCancel");
      });
    }
    return l(h, "initBox"), (o, a) => (v(), w("div", k));
  }
});
export {
  D as default
};
