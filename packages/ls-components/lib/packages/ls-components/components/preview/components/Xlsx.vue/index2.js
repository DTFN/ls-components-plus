var w = Object.defineProperty;
var l = (t, o) => w(t, "name", { value: o, configurable: !0 });
import { defineComponent as p, watch as g, onBeforeUnmount as x, resolveComponent as B, openBlock as b, createElementBlock as L, normalizeClass as d, unref as i, createElementVNode as h, createVNode as _ } from "vue";
import { useNamespace as E } from "../../../_hooks/useNamespace/index.js";
import { xlsxProps as F, previewEmits as R } from "../../types/index.js";
import { loadCss as v, loadJs as j, removeCss as z, removeJs as S } from "../../../_utils/utils/index.js";
import { isFile as U } from "../../../_utils/check/index.js";
import A from "luckyexcel";
const N = p({
  name: "LSXlsx"
}), K = /* @__PURE__ */ p({
  ...N,
  props: F,
  emits: R,
  setup(t, { emit: o }) {
    const r = [
      { id: "luckysheet1", src: "/luckysheet/plugins/js/plugin.js" },
      { id: "luckysheet2", src: "/luckysheet/luckysheet.umd.js" }
    ], f = [
      { id: "luckysheetCss1", src: "/luckysheet/plugins/css/pluginsCss.css" },
      { id: "luckysheetCss2", src: "/luckysheet/plugins/plugins.css" },
      { id: "luckysheetCss3", src: "/luckysheet/css/luckysheet.css" },
      { id: "luckysheetCss4", src: "/luckysheet/assets/iconfont/iconfont.css" }
    ], a = E("xlsx"), k = a.b(), c = t, n = o;
    g(
      () => c.source,
      (s) => {
        C(s);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function u() {
      const s = document.scripts;
      for (let e = 0; e < s.length; e++)
        if (s[e].src.includes("luckysheet"))
          return !0;
      return !1;
    }
    l(u, "isLuckySheet");
    const y = /* @__PURE__ */ l(() => {
      c.onClose && c.onClose(), n("update:source", []);
    }, "closeFunc");
    async function C(s) {
      if (!(!s || !U(s)))
        try {
          u() || (await v(f), await j(r)), A.transformExcelToLucky(
            s,
            function(e) {
              e.sheets != null && (window.luckysheet.destroy(), window.luckysheet.create({
                container: "luckysheet",
                data: e.sheets,
                title: e.info.name,
                lang: "zh",
                gridKey: (/* @__PURE__ */ new Date()).getTime(),
                // 表格唯一key
                showinfobar: !1,
                allowEdit: !1,
                allowCopy: !1,
                allowUpdate: !1,
                showtoolbar: !1,
                // 是否显示工具栏
                enableAddRow: !1,
                // 允许添加行
                enableAddBackTop: !1,
                // 允许回顶部
                sheetFormulaBar: !1,
                // 是否显示公式栏
                showstatisticBar: !1,
                // 是否显示底部计数栏
                showsheetbar: !1,
                // 是否显示sheet工具栏
                forceCalculation: !0,
                // 强制计算公式
                showConfigWindowResize: !1,
                showsheetbarConfig: {
                  sheet: !0
                  // sheet页显示
                },
                sheetRightClickConfig: {
                  delete: !1,
                  // 删除
                  copy: !1,
                  // 复制
                  rename: !1,
                  // 重命名
                  color: !1,
                  // 更改颜色
                  hide: !1,
                  // 隐藏，取消隐藏
                  move: !1
                  // 向左移，向右移
                },
                cellRightClickConfig: {
                  copy: !1,
                  // 复制
                  copyAs: !1,
                  // 复制为
                  paste: !1,
                  // 粘贴
                  insertRow: !1,
                  // 插入行
                  insertColumn: !1,
                  // 插入列
                  deleteRow: !1,
                  // 删除选中行
                  deleteColumn: !1,
                  // 删除选中列
                  deleteCell: !1,
                  // 删除单元格
                  hideRow: !1,
                  // 隐藏选中行和显示选中行
                  hideColumn: !1,
                  // 隐藏选中列和显示选中列
                  rowHeight: !1,
                  // 行高
                  columnWidth: !1,
                  // 列宽
                  clear: !1,
                  // 清除内容
                  matrix: !1,
                  // 矩阵操作选区
                  sort: !1,
                  // 排序选区
                  filter: !1,
                  // 筛选选区
                  chart: !1,
                  // 图表生成
                  image: !1,
                  // 插入图片
                  link: !1,
                  // 插入链接
                  data: !1,
                  // 数据验证
                  cellFormat: !1
                  // 设置单元格格式,
                },
                hook: {
                  // 单元格点击前的事件
                  // cellMousedownBefore: () => false,
                  // 更新这个单元格值之前触发
                  cellUpdateBefore: /* @__PURE__ */ l(() => !1, "cellUpdateBefore"),
                  // 图片删除前
                  imageDeleteBefore: /* @__PURE__ */ l(() => !1, "imageDeleteBefore"),
                  // 图片更新前
                  imageUpdateBefore: /* @__PURE__ */ l(() => !1, "imageUpdateBefore")
                  // workbookCreateAfter: function (json: any) {}
                }
              }));
            }
          ), n("loadComplete");
        } catch {
          n("loadError");
        }
    }
    return l(C, "initXlsx"), x(() => {
      u() || (z(f), S(r));
    }), (s, e) => {
      const m = B("LSIcon");
      return b(), L("div", {
        class: d(i(k))
      }, [
        h("span", {
          class: d([i(a).e("btn"), i(a).e("close")]),
          onClick: y
        }, [
          _(m, {
            name: "Close",
            size: 24,
            color: "#FFF"
          })
        ], 2),
        e[0] || (e[0] = h("div", {
          id: "luckysheet",
          class: "luckysheet-wrap"
        }, null, -1))
      ], 2);
    };
  }
});
export {
  K as default
};
