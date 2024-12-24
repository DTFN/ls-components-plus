var ge = Object.defineProperty;
var o = (C, $) => ge(C, "name", { value: $, configurable: !0 });
/* empty css                                                                                                                                          */
/* empty css                                                                                                                                              */
/* empty css                                                                                                                                                   */
/* empty css                                                                                                                                                */
/* empty css                                                                                                                                            */
/* empty css                                                                                                                                             */
/* empty css                                                                                                                                            */
/* empty css                                                                                                                                                  */
/* empty css                                                                                                                                              */
/* empty css                                                                                                                                         */
import { defineComponent as ee, useSlots as De, ref as h, computed as S, watch as z, h as ve, unref as i, openBlock as n, createElementBlock as O, createBlock as f, mergeProps as p, createSlots as Q, withCtx as s, renderSlot as u, normalizeProps as K, guardReactiveProps as H, renderList as X, createCommentVNode as b, Fragment as Y, createElementVNode as Z, normalizeClass as Se, createTextVNode as k, toDisplayString as E, createVNode as P, isRef as _, toHandlers as ke } from "vue";
import Ee from "../../_hooks/useTableListHook/index.js";
import { ElDivider as x, ElButton as R, ElSwitch as Pe, ElSpace as Re, ElMessage as Ce, ElMessageBox as $e } from "element-plus";
import { lsListProps as Fe } from "../types/index.js";
import Le from "../../form/Form.vue/index.js";
import Ae from "../../table/Table.vue/index.js";
import Be from "../../_hooks/useRouterHook/index.js";
import { ElTableColumn as ze } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/table/index/index.js";
import { ElPopconfirm as Oe } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/popconfirm/index/index.js";
import { ElSkeleton as Ke } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/skeleton/index/index.js";
const He = {
  key: 0,
  class: "animate_fadeIn transition-all-300 ls-list-wrap"
}, Ie = { class: "flex items-center" }, Ve = ee({
  name: "LSList"
}), st = /* @__PURE__ */ ee({
  ...Ve,
  props: Fe,
  emits: ["submitForm", "handleLoading", "handleCurrentPage", "handlePageSize"],
  setup(C, { expose: $, emit: te }) {
    const { jumpRouteCom: F, currentRouter: I } = Be(), e = C, D = te, V = De(), M = h(), U = h(), le = S(() => Object.keys(V).filter((t) => t.toString().endsWith("-form-slot"))), ae = S(() => Object.keys(V).filter((t) => t.toString().endsWith("-table-slot")));
    function q(t, l = !1) {
      if (t) {
        const d = t.toString().lastIndexOf(`${l ? "-form-slot" : "-table-slot"}`);
        return d !== -1 ? t.toString().slice(0, d) : t;
      }
      return "";
    }
    o(q, "getSlotName");
    const { isFirst: W, loading: T, tableData: j, total: G, pageSize: w, currentPage: y, handleReset: J, loadData: v } = Ee(
      e.listApi,
      e.formData,
      { dealData: e == null ? void 0 : e.dealData, dealParams: e == null ? void 0 : e.dealParams, ...e == null ? void 0 : e.listHookConfig }
    );
    z(T, (t) => {
      D("handleLoading", t);
    }), z(y, (t) => {
      D("handleCurrentPage", t);
    }), z(w, (t) => {
      D("handlePageSize", t);
    });
    function ie(t) {
      D("submitForm", t), e != null && e.queryFn ? e.queryFn(t) : v();
    }
    o(ie, "submitForm");
    function oe(t) {
      console.warn("resetForm", t), J();
    }
    o(oe, "resetForm");
    const L = S(() => I ? I.value.path : "");
    function ne() {
      e != null && e.addFn ? e.addFn() : F(
        {
          path: e != null && e.addRoutePath ? e.addRoutePath : `${L.value}/add`
        },
        1
      );
    }
    o(ne, "onAdd");
    function se(t, l) {
      e != null && e.tableDetailFn ? e.tableDetailFn(l) : F(
        {
          path: `${e != null && e.detailRoutePath ? e.detailRoutePath : `${L.value}/detail`}/${t}`
        },
        1
      );
    }
    o(se, "onDetail");
    function de(t, l) {
      e != null && e.tableEditFn ? e.tableEditFn(l) : F(
        {
          path: `${e != null && e.editRoutePath ? e.editRoutePath : `${L.value}/edit`}/${t}`
        },
        1
      );
    }
    o(de, "onEdit");
    const A = h(void 0), g = h(!1);
    function re(t, l) {
      if (e.delApi) {
        A.value = t, g.value = !0;
        let d = t;
        e != null && e.dealDelParams && (d = e.dealDelParams(l)), e.delApi(d).then(() => {
          Ce.success("删除成功"), v();
        }).catch((m) => {
          console.warn(m);
        }).finally(() => {
          g.value = !1;
        });
      }
    }
    o(re, "onDel");
    const N = h(), B = h(!1);
    function fe(t, l, d) {
      N.value = t;
      const m = /* @__PURE__ */ o((c, a) => {
        if (e.switchApi) {
          B.value = !0;
          let r = t;
          e != null && e.dealSwitchParams && (r = e.dealSwitchParams(d)), e.switchApi(r).then(() => {
            v(!1), c(!0);
          }).catch(() => {
            a(new Error("Error"));
          }).finally(() => {
            B.value = !1;
          });
        } else
          a(new Error("Error"));
      }, "onSwitch");
      return new Promise((c, a) => {
        l ? $e.confirm('<strong class="text-14px">请问是否关闭？</strong>', {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          dangerouslyUseHTMLString: !0,
          customStyle: {
            width: "240px"
          }
        }).then(() => {
          m(c, a);
        }).catch(() => {
          a(new Error("Error"));
        }) : m(c, a);
      });
    }
    o(fe, "switchBeforeChange");
    function ue(t) {
      let l = !1;
      return e != null && e.disabledTableSwitch && (typeof e.disabledTableSwitch == "boolean" ? l = e.disabledTableSwitch : typeof e.disabledTableSwitch == "function" && (l = e.disabledTableSwitch(t))), !!l;
    }
    o(ue, "disabledTableSwitch");
    function be(t) {
      let l = !1;
      return e != null && e.showTableDetail && (typeof e.showTableDetail == "boolean" ? l = e.showTableDetail : typeof e.showTableDetail == "function" && (l = e.showTableDetail(t))), !!l;
    }
    o(be, "showTableDetail");
    function me(t) {
      let l = !1;
      return e != null && e.disabledTableDetail && (typeof e.disabledTableDetail == "boolean" ? l = e.disabledTableDetail : typeof e.disabledTableDetail == "function" && (l = e.disabledTableDetail(t))), !!l;
    }
    o(me, "disabledTableDetail");
    function ce(t) {
      let l = !1;
      return e != null && e.showTableEdit && (typeof e.showTableEdit == "boolean" ? l = e.showTableEdit : typeof e.showTableEdit == "function" && (l = e.showTableEdit(t))), !!l;
    }
    o(ce, "showTableEdit");
    function he(t) {
      let l = !1;
      return e != null && e.disabledTableEdit && (typeof e.disabledTableEdit == "boolean" ? l = e.disabledTableEdit : typeof e.disabledTableEdit == "function" && (l = e.disabledTableEdit(t))), !!l;
    }
    o(he, "disabledTableEdit");
    function pe(t) {
      let l = !1;
      return e != null && e.showTableDel && (typeof e.showTableDel == "boolean" ? l = e.showTableDel : typeof e.showTableDel == "function" && (l = e.showTableDel(t))), !!l;
    }
    o(pe, "showTableDel");
    function Te(t) {
      let l = !1;
      return e != null && e.disabledTableDel && (typeof e.disabledTableDel == "boolean" ? l = e.disabledTableDel : typeof e.disabledTableDel == "function" && (l = e.disabledTableDel(t))), !!l;
    }
    o(Te, "disabledTableDel");
    const we = ve(x, { direction: "vertical" }), ye = S(() => e.showSkeleton ? !W.value : !0);
    return $({
      loadData: v,
      handleReset: J,
      isFirst: W,
      loading: T,
      currentPage: y,
      pageSize: w,
      total: G,
      FormRef: M,
      TableRef: U
    }), (t, l) => {
      const d = ze, m = Oe, c = Ke;
      return i(ye) ? (n(), O("div", He, [
        t.showForm ? (n(), f(Le, p({
          key: 0,
          ref_key: "FormRef",
          ref: M,
          class: ["mb-6px ls-form-cpo", t.formClass],
          "label-position": "top",
          "show-btn-loading": !1,
          colon: !1,
          inline: !0,
          "form-data": t.formData,
          "form-items": t.formItems,
          loading: i(T),
          "confirm-text": "查询"
        }, t.formAttrs, {
          onSubmit: ie,
          onReset: oe
        }), Q({
          default: s((a) => [
            u(t.$slots, "form-append", K(H(a)), void 0, !0)
          ]),
          _: 2
        }, [
          X(i(le), (a) => ({
            name: q(a, !0),
            fn: s((r) => [
              u(t.$slots, a, K(H(r)), void 0, !0)
            ])
          }))
        ]), 1040, ["class", "form-data", "form-items", "loading"])) : b("", !0),
        t.showOperate ? (n(), O(Y, { key: 1 }, [
          t.$slots.operate ? u(t.$slots, "operate", { key: 0 }, void 0, !0) : (n(), O(Y, { key: 1 }, [
            t.showOperateDivider ? (n(), f(i(x), {
              key: 0,
              "border-style": "dashed"
            })) : b("", !0),
            Z("div", {
              class: Se(["mt-24px flex items-center justify-start", t.operateClass])
            }, [
              u(t.$slots, "operate-prepend", {}, void 0, !0),
              t.showAdd ? (n(), f(i(R), p({
                key: 0,
                type: "primary",
                disabled: i(T) || t.disabledAddBtn
              }, t.addBtnAttrs, { onClick: ne }), {
                default: s(() => [
                  k(E(t.addBtnText), 1)
                ]),
                _: 1
              }, 16, ["disabled"])) : b("", !0),
              u(t.$slots, "operate-append", {}, void 0, !0)
            ], 2)
          ], 64))
        ], 64)) : b("", !0),
        P(Ae, p({
          ref_key: "TableRef",
          ref: U,
          class: ["ls-table-cpo", [t.showOperate ? "mt-16px" : "mt-24px"]],
          "show-overflow-tooltip": !0,
          loading: i(T),
          total: i(G),
          "table-data": i(j),
          "table-column": t.tableColumn,
          "current-page": i(y),
          "onUpdate:currentPage": l[0] || (l[0] = (a) => _(y) ? y.value = a : null),
          "page-size": i(w),
          "onUpdate:pageSize": l[1] || (l[1] = (a) => _(w) ? w.value = a : null)
        }, t.tableAttrs, ke(t.tableListeners || {})), Q({
          default: s(() => [
            t.showTableSwitch ? (n(), f(d, p({
              key: 0,
              prop: t.switchProp,
              label: "是否开启",
              width: "100"
            }, t.tableSwitchColumn), {
              default: s(({ row: a }) => [
                P(i(Pe), {
                  class: "ls-list-table__switch",
                  "model-value": a[t.switchProp] ? 1 : 0,
                  "active-value": 1,
                  "inactive-value": 0,
                  loading: i(B) && a[t.tableRowKey] === i(N),
                  "before-change": /* @__PURE__ */ o(() => fe(a[t.tableRowKey], a[t.switchProp], a), "before-change"),
                  disabled: ue(a)
                }, null, 8, ["model-value", "loading", "before-change", "disabled"])
              ]),
              _: 1
            }, 16, ["prop"])) : b("", !0),
            t.showTableOperate ? (n(), f(d, p({
              key: 1,
              fixed: "right",
              prop: "operate",
              label: "操作",
              "show-overflow-tooltip": !1
            }, t.tableOperateColumn), {
              default: s(({ row: a }) => [
                Z("div", Ie, [
                  P(i(Re), {
                    size: 0,
                    spacer: i(we)
                  }, {
                    default: s(() => [
                      u(t.$slots, "table-operate-prepend", { row: a }, void 0, !0),
                      be(a) ? (n(), f(i(R), {
                        key: 0,
                        disabled: me(a),
                        link: "",
                        type: "primary",
                        onClick: /* @__PURE__ */ o((r) => se(a[t.tableRowKey], a), "onClick")
                      }, {
                        default: s(() => [
                          k(E(t.tableDetailText || "查看"), 1)
                        ]),
                        _: 2
                      }, 1032, ["disabled", "onClick"])) : b("", !0),
                      ce(a) ? (n(), f(i(R), {
                        key: 1,
                        disabled: he(a),
                        link: "",
                        type: "primary",
                        onClick: /* @__PURE__ */ o((r) => de(a[t.tableRowKey], a), "onClick")
                      }, {
                        default: s(() => [
                          k(E(t.tableEditText || "编辑"), 1)
                        ]),
                        _: 2
                      }, 1032, ["disabled", "onClick"])) : b("", !0),
                      pe(a) ? (n(), f(m, {
                        key: 2,
                        "hide-icon": "",
                        placement: "top",
                        width: "180",
                        "confirm-button-text": "确认",
                        "cancel-button-text": "取消",
                        title: `是否${t.tableDelText || "删除"}当前列数据？`,
                        onConfirm: /* @__PURE__ */ o((r) => re(a[t.tableRowKey], a), "onConfirm")
                      }, {
                        reference: s(() => [
                          P(i(R), {
                            link: "",
                            type: "danger",
                            disabled: i(g) || Te(a),
                            loading: i(g) && i(A) === a[t.tableRowKey]
                          }, {
                            default: s(() => [
                              k(E(i(g) && i(A) === a[t.tableRowKey] ? "" : t.tableDelText || "删除"), 1)
                            ]),
                            _: 2
                          }, 1032, ["disabled", "loading"])
                        ]),
                        _: 2
                      }, 1032, ["title", "onConfirm"])) : b("", !0),
                      u(t.$slots, "table-operate-append", { row: a }, void 0, !0)
                    ]),
                    _: 2
                  }, 1032, ["spacer"])
                ])
              ]),
              _: 3
            }, 16)) : b("", !0),
            u(t.$slots, "table-append", { tableData: i(j) }, void 0, !0)
          ]),
          _: 2
        }, [
          X(i(ae), (a) => ({
            name: q(a, !1),
            fn: s((r) => [
              u(t.$slots, a, K(H(r)), void 0, !0)
            ])
          }))
        ]), 1040, ["class", "loading", "total", "table-data", "table-column", "current-page", "page-size"])
      ])) : (n(), f(c, p({
        key: 1,
        rows: 5,
        animated: ""
      }, t.skeletonAttrs), null, 16));
    };
  }
});
export {
  st as default
};
