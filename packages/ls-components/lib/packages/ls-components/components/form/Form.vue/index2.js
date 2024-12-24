var G = Object.defineProperty;
var u = (C, $) => G(C, "name", { value: $, configurable: !0 });
/* empty css                                                                                                                                          */
/* empty css                                                                                                                                                     */
/* empty css                                                                                                                                          */
/* empty css                                                                                                                                               */
/* empty css                                                                                                                                            */
/* empty css                                                                                                                                         */
/* empty css                                                                                                                                         */
import { defineComponent as N, useAttrs as H, computed as J, ref as Q, reactive as X, watch as Z, openBlock as n, createElementBlock as c, createVNode as T, unref as l, withCtx as a, mergeProps as b, createBlock as p, Fragment as k, renderList as g, renderSlot as i, createSlots as W, createCommentVNode as y, normalizeClass as x, createTextVNode as D, toDisplayString as O } from "vue";
import q from "../FormItem.vue/index.js";
import { lsFormProps as ee } from "../types/index.js";
import oe from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/dist/locale/zh-cn/index.js";
import v from "../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/get/index.js";
import te from "../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/set/index.js";
import { ElCol as re } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/col/index/index.js";
import { ElRow as le } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/row/index/index.js";
import { ElButton as ne } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/button/index/index.js";
import { ElFormItem as se, ElForm as ae } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/form/index/index.js";
import { ElConfigProvider as ie } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/config-provider/index/index.js";
const ue = { class: "ls-form" }, pe = N({
  name: "LSForm"
}), Le = /* @__PURE__ */ N({
  ...pe,
  props: ee,
  emits: ["submit", "reset", "update:form-data", "onChange"],
  setup(C, { expose: $, emit: U }) {
    const F = C, R = U, z = H();
    function V(e) {
      const t = {};
      return e && Object.entries(e).forEach(([r, f]) => {
        const w = r.replace(/-(\w)/g, (I, E) => E.toUpperCase());
        t[w] = f;
      }), t;
    }
    u(V, "formatAttrs");
    const j = J(() => {
      const e = V(z);
      let t = F.buttonsLeft;
      const r = {
        label: "",
        labelWidth: "0px"
      };
      return e && e.hasOwnProperty("inline") && (typeof e.inline == "boolean" && e.inline === !1 ? t = F.buttonsLeft : t = !0, e.labelPosition === "top" && (r.class = "ls-form-item-buttons")), t || (r.label = " ", e.labelWidth ? r.labelWidth = e.labelWidth : r.labelWidth = "auto"), r;
    }), d = Q(), P = [
      "label",
      "input",
      "textarea",
      "number",
      "radio",
      "checkbox",
      "select",
      "date",
      "datetimerange",
      "timePicker",
      "timeSelect",
      "cascader",
      "multipleCascader",
      "switch",
      "inputRange",
      "inputNumberRange",
      "slot",
      "itemSlot"
    ];
    let s = X({});
    function L(e) {
      e && (e.resetFields(), R("reset", s));
    }
    u(L, "resetForm");
    async function B(e) {
      e && await e.validate((t, r) => {
        t ? R("submit", s) : console.warn("error submit!", r);
      });
    }
    u(B, "submitForm");
    function K() {
      return new Promise((e, t) => {
        if (!d.value) return e(!1);
        d.value.validate((r, f) => {
          r ? e(s) : (console.warn("error submit!", f), t(f));
        });
      });
    }
    u(K, "validate");
    function m(e, t) {
      te(s, e, t);
    }
    u(m, "updateFormData"), Z(
      () => F.formData,
      (e) => {
        s = e || {};
      },
      {
        deep: !0,
        immediate: !0
      }
    );
    function A(e, t, r) {
      R("onChange", e, t, r);
    }
    return u(A, "onChange"), $({
      FormRef: d,
      validate: K,
      submitForm: B,
      resetForm: L
    }), (e, t) => {
      const r = re, f = le, w = ne, I = se, E = ae, M = ie;
      return n(), c("div", ue, [
        T(M, {
          locale: l(oe),
          "value-on-clear": void 0,
          "empty-values": [void 0, null]
        }, {
          default: a(() => [
            T(E, b({
              ref_key: "FormRef",
              ref: d,
              "label-position": "left",
              "require-asterisk-position": "right",
              "label-width": "auto",
              "hide-required-asterisk": !!e.read
            }, e.$attrs, {
              model: l(s),
              disabled: e.loading || e.disabled,
              class: [e.read && e.hasDefReadStyle ? "show-label" : ""]
            }), {
              default: a(() => [
                e.column > 1 ? (n(), p(f, {
                  key: 0,
                  gutter: 10
                }, {
                  default: a(() => [
                    (n(!0), c(k, null, g(e.formItems, (o, S) => (n(), c(k, {
                      key: o.prop
                    }, [
                      o.hideColumn ? y("", !0) : (n(), p(r, {
                        key: 0,
                        span: o.isRow ? 24 : 24 / e.column
                      }, {
                        default: a(() => [
                          o.type === "slot" ? i(e.$slots, o.prop, {
                            key: 0,
                            slotRow: { ...o },
                            value: l(v)(l(s), o.prop),
                            updateFormData: m
                          }, void 0, !0) : P.includes(o.type) ? (n(), p(q, b({
                            key: 1,
                            "is-value": !0,
                            value: l(v)(l(s), o.prop),
                            colon: e.colon,
                            read: e.read,
                            "label-empty": e.labelEmpty,
                            index: S,
                            ref_for: !0
                          }, o, {
                            "onUpdate:value": m,
                            onOnChange: A
                          }), W({ _: 2 }, [
                            g(e.$slots, (Y, h) => ({
                              name: h,
                              fn: a((_) => [
                                i(e.$slots, h, b({ ref_for: !0 }, _), void 0, !0)
                              ])
                            }))
                          ]), 1040, ["value", "colon", "read", "label-empty", "index"])) : i(e.$slots, o.type, {
                            key: 2,
                            slotRow: { ...o },
                            value: l(v)(l(s), o.prop),
                            updateFormData: m
                          }, void 0, !0)
                        ]),
                        _: 2
                      }, 1032, ["span"]))
                    ], 64))), 128))
                  ]),
                  _: 3
                })) : (n(!0), c(k, { key: 1 }, g(e.formItems, (o, S) => (n(), c(k, {
                  key: o.prop
                }, [
                  o.hideColumn ? y("", !0) : (n(), c(k, { key: 0 }, [
                    o.type === "slot" ? i(e.$slots, o.prop, {
                      key: 0,
                      slotRow: { ...o },
                      value: l(v)(l(s), o.prop),
                      updateFormData: m
                    }, void 0, !0) : P.includes(o.type) ? (n(), p(q, b({
                      key: 1,
                      "is-value": !0,
                      value: l(v)(l(s), o.prop),
                      colon: e.colon,
                      read: e.read,
                      "label-empty": e.labelEmpty,
                      index: S,
                      ref_for: !0
                    }, o, {
                      "onUpdate:value": m,
                      onOnChange: A
                    }), W({ _: 2 }, [
                      g(e.$slots, (Y, h) => ({
                        name: h,
                        fn: a((_) => [
                          i(e.$slots, h, b({ ref_for: !0 }, _), void 0, !0)
                        ])
                      }))
                    ]), 1040, ["value", "colon", "read", "label-empty", "index"])) : i(e.$slots, o.type, {
                      key: 2,
                      slotRow: { ...o },
                      value: l(v)(l(s), o.prop),
                      updateFormData: m
                    }, void 0, !0)
                  ], 64))
                ], 64))), 128)),
                i(e.$slots, "default", {}, void 0, !0),
                e.showButtons ? (n(), p(I, b({ key: 2 }, l(j), { class: e.buttonsClass }), {
                  default: a(() => [
                    e.$slots["buttons-prepend"] ? i(e.$slots, "buttons-prepend", { key: 0 }, void 0, !0) : y("", !0),
                    e.showSubmit ? (n(), p(w, {
                      key: 1,
                      type: "primary",
                      class: x(e.confirmClassName),
                      loading: e.loading && e.showBtnLoading,
                      onClick: t[0] || (t[0] = (o) => B(d.value))
                    }, {
                      default: a(() => [
                        D(O(e.confirmText), 1)
                      ]),
                      _: 1
                    }, 8, ["class", "loading"])) : y("", !0),
                    e.showReset ? (n(), p(w, {
                      key: 2,
                      onClick: t[1] || (t[1] = (o) => L(d.value))
                    }, {
                      default: a(() => [
                        D(O(e.resetText || "重置"), 1)
                      ]),
                      _: 1
                    })) : y("", !0)
                  ]),
                  _: 3
                }, 16, ["class"])) : y("", !0)
              ]),
              _: 3
            }, 16, ["hide-required-asterisk", "model", "disabled", "class"])
          ]),
          _: 3
        }, 8, ["locale"])
      ]);
    };
  }
});
export {
  Le as default
};
