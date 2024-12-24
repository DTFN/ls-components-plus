var ae = Object.defineProperty;
var c = (T, D) => ae(T, "name", { value: D, configurable: !0 });
/* empty css                                                                                                                                          */
/* empty css                                                                                                                                             */
/* empty css                                                                                                                                                     */
/* empty css                                                                                                                                                */
/* empty css                                                                                                                                         */
/* empty css                                                                                                                                            */
/* empty css                                                                                                                                                  */
/* empty css                                                                                                                                               */
/* empty css                                                                                                                                            */
/* empty css                                                                                                                                            */
/* empty css                                                                                                                                           */
/* empty css                                                                                                                                              */
/* empty css                                                                                                                                             */
/* empty css                                                                                                                                           */
/* empty css                                                                                                                                          */
/* empty css                                                                                                                                                  */
/* empty css                                                                                                                                           */
import { defineComponent as J, useAttrs as ne, ref as I, computed as H, watch as w, nextTick as re, openBlock as r, createElementBlock as C, createVNode as U, unref as i, withCtx as u, withDirectives as se, createBlock as d, mergeProps as S, createSlots as q, renderSlot as g, createTextVNode as z, toDisplayString as E, createCommentVNode as k, Fragment as R, renderList as pe, normalizeClass as F, isRef as G } from "vue";
import ie from "../../../../../node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/dayjs.min/index.js";
import { lsTableProps as ue } from "../types/index.js";
import { isEmpty as O } from "../../_utils/utils/index.js";
import de from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/dist/locale/zh-cn/index.js";
import h from "../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/get/index.js";
import { ElRadio as fe } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/radio/index/index.js";
import { ElTableColumn as ce, ElTable as me } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/table/index/index.js";
import { ElText as ye } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/text/index/index.js";
import { ElEmpty as ve } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/empty/index/index.js";
import { ElPagination as ge } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/pagination/index/index.js";
import { ElConfigProvider as he } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/config-provider/index/index.js";
import { vLoading as be } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/loading/src/directive/index.js";
const we = { class: "ls-table-wrap" }, Se = J({
  name: "LSTable"
}), xe = /* @__PURE__ */ J({
  ...Se,
  inheritAttrs: !1,
  props: ue,
  emits: ["sizeChange", "currentPageChange", "update:page-size", "update:current-page", "update:selection"],
  setup(T, { expose: D, emit: K }) {
    const n = T, b = K, s = ne(), A = I(), m = I(1), y = I(10), v = I([]), P = H(() => (s == null ? void 0 : s.rowKey) || (s == null ? void 0 : s.rowkey) || s["row-key"] || "id");
    w(
      () => n.currentPage,
      (e) => {
        if (e !== m.value) {
          const t = Math.max(1, Math.min(e, Math.ceil(n.total / y.value)));
          m.value = t, t !== e && b("update:current-page", t);
        }
      },
      {
        immediate: !0
      }
    ), w(
      [() => n.pageSize, () => n.pageSizes],
      ([e, t]) => {
        let l = e;
        O(t) || (l = t.includes(e) ? e : t[0]), y.value = l, l !== e && b("update:page-size", l);
      },
      {
        immediate: !0
      }
    ), w(
      () => n.selection,
      (e) => {
        v.value = e || [];
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function j(e, t) {
      if (!e) throw new Error("Row is required when get row identity");
      return typeof t == "string" ? `${h(e, t)}` : typeof t == "function" ? t.call(null, e) : "";
    }
    c(j, "getRowIdentity");
    function $(e, t, l) {
      return j(e, l) === j(t, l);
    }
    c($, "isSameRow"), w(
      [() => n.tableData, () => n.showSelect, () => n.selection],
      ([e, t, l]) => {
        t && e && e.length > 0 && re(() => {
          e.forEach((a) => {
            (l || []).some((L) => $(L, a, P.value)) && A.value.toggleRowSelection(a, !0);
          });
        });
      },
      {
        immediate: !0,
        deep: !0
      }
    ), w(
      () => v.value,
      (e) => {
        b("update:selection", e);
      },
      {
        deep: !0
      }
    ), w(m, (e) => {
      b("currentPageChange", e), b("update:current-page", e);
    }), w(y, (e) => {
      b("sizeChange", e), b("update:page-size", e);
    });
    function Q(e) {
      return n != null && n.tableIndexInPage ? n != null && n.tableIndexStart ? e : e + 1 : n != null && n.tableIndexStart ? (m.value - 1) * y.value + e : (m.value - 1) * y.value + e + 1;
    }
    c(Q, "indexMethod");
    function W(e, t) {
      return e ? ie(e).format(t || "YYYY-MM-DD HH:mm:ss") : n.labelEmpty || "--";
    }
    c(W, "formatDate");
    function X(e, t) {
      const l = (e || []).findIndex((f) => $(f, t, P.value)), a = (v.value || []).findIndex((f) => $(f, t, P.value));
      l > -1 ? v.value.push(t) : v.value.splice(a, 1);
    }
    c(X, "handleSelect");
    function Z(e) {
      const t = e.length > 0;
      n.tableData.length > 0 && n.tableData.forEach((l) => {
        const a = (v.value || []).findIndex((f) => $(l, f, P.value));
        t ? a < 0 && v.value.push(l) : a >= 0 && v.value.splice(a, 1);
      });
    }
    c(Z, "handleSelectAll");
    const V = H(() => {
      const e = { ...s };
      if (e["table-layout"] || (e["table-layout"] = "auto"), n.showSelect && (e.onSelect || (e.onSelect = X), e.onSelectAll || (e.onSelectAll = Z)), s && s.hasOwnProperty("show-overflow-tooltip"))
        if (typeof s["show-overflow-tooltip"] == "boolean")
          s["show-overflow-tooltip"] === !0 && (e["show-overflow-tooltip"] = {
            popperClass: "table-popper-css"
          });
        else if (typeof s["show-overflow-tooltip"] == "object") {
          const t = s["show-overflow-tooltip"] || {}, l = `table-popper-css ${t && (t == null ? void 0 : t.popperClass)}`;
          e["show-overflow-tooltip"] = {
            ...t,
            popperClass: l
          };
        } else
          e["show-overflow-tooltip"] = {
            popperClass: "table-popper-css"
          };
      else
        e["show-overflow-tooltip"] = {
          popperClass: "table-popper-css"
        };
      return e;
    });
    function N(e, t, l) {
      var a;
      return (a = e[h(t, l)]) == null ? void 0 : a.type;
    }
    c(N, "getStatusType");
    function _(e = "default", t, l) {
      const a = [];
      return ["dot", "follow"].includes(e) && (a.push("ls-table-status"), a.push(`ls-table-status--${t || "default"}`)), l && a.push(l), a.join(" ");
    }
    return c(_, "getStatusClass"), D({
      TableRef: A
    }), (e, t) => {
      const l = fe, a = ce, f = ye, L = ve, x = me, ee = ge, te = he, oe = be;
      return r(), C("div", we, [
        U(te, { locale: i(de) }, {
          default: u(() => [
            se((r(), d(x, S({
              ref_key: "TableRef",
              ref: A,
              style: { width: "100%" }
            }, i(V), { data: e.tableData }), q({
              default: u(() => [
                g(e.$slots, "prepend", {}, void 0, !0),
                e.showRadio ? (r(), d(a, S({
                  key: 0,
                  width: "60"
                }, e.radioColumnOptions), {
                  default: u(({ row: o }) => [
                    U(l, {
                      "model-value": e.currentRow ? e.currentRow[e.radioProp] : void 0,
                      label: o[e.radioProp]
                    }, {
                      default: u(() => [
                        z(E(e.showRadioLabel ? o[e.radioProp] : ""), 1)
                      ]),
                      _: 2
                    }, 1032, ["model-value", "label"])
                  ]),
                  _: 1
                }, 16)) : k("", !0),
                e.showSelect ? (r(), d(a, S({
                  key: 1,
                  width: "60"
                }, e.selectColumnOptions, { type: "selection" }), null, 16)) : k("", !0),
                e.showExpand ? (r(), d(a, S({ key: 2 }, e.expandColumnOptions, { type: "expand" }), {
                  default: u(({ row: o }) => [
                    g(e.$slots, "expand", { row: o }, void 0, !0)
                  ]),
                  _: 3
                }, 16)) : k("", !0),
                e.showTableIndex ? (r(), d(a, S({
                  key: 3,
                  width: "60",
                  fixed: e.tableIndexfixed,
                  label: e.tableIndexLabel,
                  index: Q
                }, e.indexColumnOptions, { type: "index" }), null, 16, ["fixed", "label"])) : k("", !0),
                (r(!0), C(R, null, pe(e.tableColumn, (o) => (r(), d(a, S({
                  key: o.prop,
                  ref_for: !0
                }, o), q({
                  default: u(({ row: p, column: M, $index: le }) => [
                    o.type === "date" ? (r(), C(R, { key: 0 }, [
                      z(E(W(i(h)(p, o.prop), o.dateTemplate)), 1)
                    ], 64)) : o.type === "status" ? (r(), d(f, {
                      key: 1,
                      type: ["default", "follow"].includes(o.statusStyle || "default") ? N(o.value, p, o.prop) : "",
                      class: F(_(o.statusStyle, N(o.value, p, o.prop), o.className))
                    }, {
                      default: u(() => {
                        var Y, B;
                        return [
                          z(E(((Y = o.value[i(h)(p, o.prop)]) == null ? void 0 : Y.label) || ((B = o.value.default) == null ? void 0 : B.label) || p[o.prop]), 1)
                        ];
                      }),
                      _: 2
                    }, 1032, ["type", "class"])) : o.type === "number" ? (r(), C(R, { key: 2 }, [
                      i(O)(i(h)(p, o.prop)) ? (r(), C(R, { key: 0 }, [
                        z(E(e.labelEmpty || "--"), 1)
                      ], 64)) : (r(), d(f, {
                        key: 1,
                        type: Number(i(h)(p, o.prop)) < 0 ? "danger" : `${o.isSuc ? "success" : ""}`
                      }, {
                        default: u(() => [
                          z(E(i(h)(p, o.prop)), 1)
                        ]),
                        _: 2
                      }, 1032, ["type"]))
                    ], 64)) : o.type === "slot" ? g(e.$slots, o.prop, {
                      key: 3,
                      row: p,
                      column: M,
                      index: le
                    }, void 0, !0) : i(O)(i(h)(p, o.prop)) ? (r(), C("div", {
                      key: 4,
                      class: F(e.labelEmptyClass)
                    }, E(e.labelEmpty || "--"), 3)) : k("", !0)
                  ]),
                  _: 2
                }, [
                  o.headerSlot ? {
                    name: "header",
                    fn: u(({ column: p, $index: M }) => [
                      g(e.$slots, `${o.prop}-header`, {
                        column: p,
                        index: M
                      }, void 0, !0)
                    ]),
                    key: "0"
                  } : void 0,
                  o.filterIconSlot ? {
                    name: "filter-icon",
                    fn: u(({ filterOpened: p }) => [
                      g(e.$slots, `${o.prop}-filter-icon`, { filterOpened: p }, void 0, !0)
                    ]),
                    key: "1"
                  } : void 0
                ]), 1040))), 128)),
                g(e.$slots, "default", {}, void 0, !0)
              ]),
              _: 2
            }, [
              e.showEmpty ? {
                name: "empty",
                fn: u(() => [
                  e.$slots.empty ? k("", !0) : (r(), d(L, {
                    key: 0,
                    description: e.emptyLabel
                  }, null, 8, ["description"])),
                  g(e.$slots, "empty", {}, void 0, !0)
                ]),
                key: "0"
              } : void 0,
              e.$slots.append ? {
                name: "append",
                fn: u(() => [
                  g(e.$slots, "append", {}, void 0, !0)
                ]),
                key: "1"
              } : void 0
            ]), 1040, ["data"])), [
              [oe, e.loading]
            ]),
            e.showPagination ? (r(), d(ee, S({
              key: 0,
              "current-page": i(m),
              "onUpdate:currentPage": t[0] || (t[0] = (o) => G(m) ? m.value = o : null),
              "page-size": i(y),
              "onUpdate:pageSize": t[1] || (t[1] = (o) => G(y) ? y.value = o : null),
              layout: "total, sizes, prev, pager, next, jumper",
              class: e.paginationClass,
              disabled: e.loading,
              "page-sizes": e.pageSizes,
              total: e.total
            }, e.paginationOptions), null, 16, ["current-page", "page-size", "class", "disabled", "page-sizes", "total"])) : k("", !0)
          ]),
          _: 3
        }, 8, ["locale"])
      ]);
    };
  }
});
export {
  xe as default
};
