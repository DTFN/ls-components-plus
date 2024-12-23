var H = Object.defineProperty;
var s = (n, c) => H(n, "name", { value: c, configurable: !0 });
/* empty css                                                                                                                                          */
/* empty css                                                                                                                                             */
/* empty css                                                                                                                                            */
/* empty css                                                                                                                                             */
/* empty css                                                                                                                                               */
import { defineComponent as O, mergeModels as b, useSlots as R, useModel as T, ref as f, watch as q, computed as w, nextTick as z, resolveComponent as U, openBlock as r, createBlock as u, mergeProps as i, unref as o, createSlots as j, withCtx as l, renderSlot as d, withDirectives as x, createElementBlock as G, createElementVNode as J, createCommentVNode as D, createTextVNode as _, toDisplayString as E, createVNode as K } from "vue";
import { useNamespace as Q } from "../../_hooks/useNamespace/index.js";
import { lsDialogProp as W, lsEmitNames as X } from "../types/index.js";
import m from "../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/merge/index.js";
import { ElScrollbar as Y } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/scrollbar/index/index.js";
import { ElDialog as Z } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/dialog/index/index.js";
import { vLoading as ee } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/loading/src/directive/index.js";
const oe = {
  key: 1,
  class: "content-wrap"
}, te = { class: "dialog-footer" }, Ce = /* @__PURE__ */ O({
  name: "LSDialog",
  inheritAttrs: !1,
  __name: "Index",
  props: /* @__PURE__ */ b(W, {
    modelValue: {
      type: Boolean
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ b(X, ["update:modelValue"]),
  setup(n, { expose: c, emit: N }) {
    const a = n, p = N, $ = R(), t = T(n, "modelValue"), L = Q("dialog").b(), g = f(), h = f({
      width: "50%",
      closeOnClickModal: !1,
      closeOnPressEscape: !1,
      zIndex: 2e3,
      alignCenter: !0
    }), C = f(0);
    q(
      () => t == null ? void 0 : t.value,
      (e) => {
        e && a.openScroll && S();
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    const k = w(() => m(
      {
        txt: "取消"
      },
      a.btnCancelConfig
    )), y = w(() => m(
      {
        type: "primary",
        txt: "确认"
      },
      a.btnConfirmConfig
    ));
    function v() {
      t.value = !1, p("onCancel");
    }
    s(v, "handleClose");
    function M() {
      p("onConfirm");
    }
    s(M, "handleConfirm");
    async function S() {
      await z();
      const e = a.hasFooter ? 108 : 60;
      C.value = parseInt(getComputedStyle(g.value.querySelector(".el-dialog")).height) - e;
    }
    return s(S, "updateHeight"), c({
      updateHeight: S
    }), (e, V) => {
      const I = Y, B = U("LSButton"), P = Z, A = ee;
      return r(), u(P, i({
        ref_key: "lsDialogRef",
        ref: g,
        class: o(L),
        modelValue: t.value,
        "onUpdate:modelValue": V[0] || (V[0] = (F) => t.value = F)
      }, o(m)(o(h), e.$attrs), {
        "show-close": !e.loading,
        onClose: v
      }), j({
        header: l(() => [
          d(e.$slots, "header")
        ]),
        default: l(() => [
          e.openScroll ? x((r(), u(I, i({ key: 0 }, o(m)(o(h), e.$attrs), { "max-height": o(C) }), {
            default: l(() => [
              d(e.$slots, "default")
            ]),
            _: 3
          }, 16, ["max-height"])), [
            [A, e.contentLoading]
          ]) : (r(), G("div", oe, [
            d(e.$slots, "default")
          ]))
        ]),
        _: 2
      }, [
        e.hasFooter ? {
          name: "footer",
          fn: l(() => [
            J("div", te, [
              o($).footer ? d(e.$slots, "footer", { key: 0 }) : D("", !0),
              e.hasCancelBtn ? (r(), u(B, i({ key: 1 }, o(k), {
                disabled: e.loading,
                onClick: v
              }), {
                default: l(() => [
                  _(E(o(k).txt), 1)
                ]),
                _: 1
              }, 16, ["disabled"])) : D("", !0),
              K(B, i(o(y), {
                loading: e.loading,
                disabled: e.loading,
                onClick: M
              }), {
                default: l(() => [
                  _(E(o(y).txt), 1)
                ]),
                _: 1
              }, 16, ["loading", "disabled"])
            ])
          ]),
          key: "0"
        } : void 0
      ]), 1040, ["class", "modelValue", "show-close"]);
    };
  }
});
export {
  Ce as default
};
