var G = Object.defineProperty;
var i = (C, $) => G(C, "name", { value: $, configurable: !0 });
/* empty css                                                                                                                                          */
/* empty css                                                                                                                                                     */
/* empty css                                                                                                                                          */
/* empty css                                                                                                                                               */
/* empty css                                                                                                                                            */
/* empty css                                                                                                                                         */
/* empty css                                                                                                                                         */
import { defineComponent as N, useAttrs as H, computed as J, ref as Q, reactive as X, watch as Z, openBlock as l, createElementBlock as c, createVNode as T, unref as r, withCtx as a, mergeProps as b, createBlock as p, Fragment as k, renderList as g, renderSlot as u, createSlots as W, createCommentVNode as y, normalizeClass as x, createTextVNode as D, toDisplayString as O } from "vue";
import q from "../FormItem.vue/index.js";
import { lsFormProps as ee } from "../types/index.js";
import oe from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/dist/locale/zh-cn/index.js";
import v from "../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/get/index.js";
import te from "../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/set/index.js";
import { ElCol as re } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/col/index/index.js";
import { ElRow as le } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/row/index/index.js";
import { ElButton as ne } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/button/index/index.js";
import { ElFormItem as se, ElForm as ae } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/form/index/index.js";
import { ElConfigProvider as ue } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/config-provider/index/index.js";
const ie = { class: "ls-form" }, pe = N({
  name: "LSForm"
}), Be = /* @__PURE__ */ N({
  ...pe,
  props: ee,
  emits: ["submit", "reset", "update:form-data", "onChange"],
  setup(C, { expose: $, emit: U }) {
    const _ = C, F = U, z = H();
    function V(e) {
      const t = {};
      return e && Object.entries(e).forEach(([s, f]) => {
        const w = s.replace(/-(\w)/g, (L, R) => R.toUpperCase());
        t[w] = f;
      }), t;
    }
    i(V, "formatAttrs");
    const j = J(() => {
      const e = V(z), t = {
        label: "",
        labelWidth: "0px"
      };
      return e && e.hasOwnProperty("inline") && e.labelPosition === "top" && (t.class = "ls-form-item-buttons"), _.buttonsLeft || (t.label = " ", e.labelWidth ? t.labelWidth = e.labelWidth : t.labelWidth = "auto"), t;
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
    let n = X({});
    function B(e) {
      e && (e.resetFields(), F("reset", n));
    }
    i(B, "resetForm");
    async function A(e) {
      e && await e.validate((t, s) => {
        t ? F("submit", n) : console.warn("error submit!", s);
      });
    }
    i(A, "submitForm");
    function K() {
      return new Promise((e, t) => {
        if (!d.value) return e(!1);
        d.value.validate((s, f) => {
          s ? e(n) : (console.warn("error submit!", f), t(f));
        });
      });
    }
    i(K, "validate");
    function m(e, t) {
      te(n, e, t);
    }
    i(m, "updateFormData"), Z(
      () => _.formData,
      (e) => {
        n = e || {};
      },
      {
        deep: !0,
        immediate: !0
      }
    );
    function I(e, t, s) {
      F("onChange", e, t, s);
    }
    return i(I, "onChange"), $({
      FormRef: d,
      validate: K,
      submitForm: A,
      resetForm: B
    }), (e, t) => {
      const s = re, f = le, w = ne, L = se, R = ae, M = ue;
      return l(), c("div", ie, [
        T(M, {
          locale: r(oe),
          "value-on-clear": void 0,
          "empty-values": [void 0, null]
        }, {
          default: a(() => [
            T(R, b({
              ref_key: "FormRef",
              ref: d,
              "label-position": "left",
              "require-asterisk-position": "right",
              "label-width": "auto",
              "hide-required-asterisk": !!e.read
            }, e.$attrs, {
              model: r(n),
              disabled: e.loading || e.disabled,
              class: [e.read && e.hasDefReadStyle ? "show-label" : ""]
            }), {
              default: a(() => [
                e.column > 1 ? (l(), p(f, {
                  key: 0,
                  gutter: 10
                }, {
                  default: a(() => [
                    (l(!0), c(k, null, g(e.formItems, (o, E) => (l(), c(k, {
                      key: o.prop
                    }, [
                      o.hideColumn ? y("", !0) : (l(), p(s, {
                        key: 0,
                        span: o.isRow ? 24 : 24 / e.column
                      }, {
                        default: a(() => [
                          o.type === "slot" ? u(e.$slots, o.prop, {
                            key: 0,
                            slotRow: { ...o },
                            value: r(v)(r(n), o.prop),
                            updateFormData: m
                          }, void 0, !0) : P.includes(o.type) ? (l(), p(q, b({
                            key: 1,
                            "is-value": !0,
                            value: r(v)(r(n), o.prop),
                            colon: e.colon,
                            read: e.read,
                            "label-empty": e.labelEmpty,
                            index: E,
                            ref_for: !0
                          }, o, {
                            "onUpdate:value": m,
                            onOnChange: I
                          }), W({ _: 2 }, [
                            g(e.$slots, (Y, h) => ({
                              name: h,
                              fn: a((S) => [
                                u(e.$slots, h, b({ ref_for: !0 }, S), void 0, !0)
                              ])
                            }))
                          ]), 1040, ["value", "colon", "read", "label-empty", "index"])) : u(e.$slots, o.type, {
                            key: 2,
                            slotRow: { ...o },
                            value: r(v)(r(n), o.prop),
                            updateFormData: m
                          }, void 0, !0)
                        ]),
                        _: 2
                      }, 1032, ["span"]))
                    ], 64))), 128))
                  ]),
                  _: 3
                })) : (l(!0), c(k, { key: 1 }, g(e.formItems, (o, E) => (l(), c(k, {
                  key: o.prop
                }, [
                  o.hideColumn ? y("", !0) : (l(), c(k, { key: 0 }, [
                    o.type === "slot" ? u(e.$slots, o.prop, {
                      key: 0,
                      slotRow: { ...o },
                      value: r(v)(r(n), o.prop),
                      updateFormData: m
                    }, void 0, !0) : P.includes(o.type) ? (l(), p(q, b({
                      key: 1,
                      "is-value": !0,
                      value: r(v)(r(n), o.prop),
                      colon: e.colon,
                      read: e.read,
                      "label-empty": e.labelEmpty,
                      index: E,
                      ref_for: !0
                    }, o, {
                      "onUpdate:value": m,
                      onOnChange: I
                    }), W({ _: 2 }, [
                      g(e.$slots, (Y, h) => ({
                        name: h,
                        fn: a((S) => [
                          u(e.$slots, h, b({ ref_for: !0 }, S), void 0, !0)
                        ])
                      }))
                    ]), 1040, ["value", "colon", "read", "label-empty", "index"])) : u(e.$slots, o.type, {
                      key: 2,
                      slotRow: { ...o },
                      value: r(v)(r(n), o.prop),
                      updateFormData: m
                    }, void 0, !0)
                  ], 64))
                ], 64))), 128)),
                u(e.$slots, "default", {}, void 0, !0),
                e.showButtons ? (l(), p(L, b({ key: 2 }, r(j), { class: e.buttonsClass }), {
                  default: a(() => [
                    e.$slots["buttons-prepend"] ? u(e.$slots, "buttons-prepend", { key: 0 }, void 0, !0) : y("", !0),
                    e.showSubmit ? (l(), p(w, {
                      key: 1,
                      type: "primary",
                      class: x(e.confirmClassName),
                      loading: e.loading && e.showBtnLoading,
                      onClick: t[0] || (t[0] = (o) => A(d.value))
                    }, {
                      default: a(() => [
                        D(O(e.confirmText), 1)
                      ]),
                      _: 1
                    }, 8, ["class", "loading"])) : y("", !0),
                    e.showReset ? (l(), p(w, {
                      key: 2,
                      onClick: t[1] || (t[1] = (o) => B(d.value))
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
  Be as default
};
