<script setup lang="ts" name="LSXlsx">
import { useNamespace } from '@cpo/_hooks/useNamespace';
import { xlsxProps } from './types';
import { previewEmits } from '@cpo/_constants/prviewType';
import { loadJs, removeJs, loadCss, removeCss } from '@cpo/_utils/utils';
import { isFile } from '@cpo/_utils/check';
import LuckyExcel from 'luckyexcel';

// https://front-development.oss-cn-beijing.aliyuncs.com/front-dev/luckysheet/plugins/css/pluginsCss.css
// https://front-development.oss-cn-beijing.aliyuncs.com/front-dev/luckysheet/plugins/plugins.css
// https://front-development.oss-cn-beijing.aliyuncs.com/front-dev/luckysheet/css/luckysheet.css
// https://front-development.oss-cn-beijing.aliyuncs.com/front-dev/luckysheet/assets/iconfont/iconfont.css
// https://front-development.oss-cn-beijing.aliyuncs.com/front-dev/luckysheet/plugins/js/plugin.js
// https://front-development.oss-cn-beijing.aliyuncs.com/front-dev/luckysheet/luckysheet.umd.js

const jsList = [
  { id: 'luckysheet1', src: '/luckysheet/plugins/js/plugin.js' },
  { id: 'luckysheet2', src: '/luckysheet/luckysheet.umd.js' }
];

const cssList = [
  { id: 'luckysheetCss1', src: '/luckysheet/plugins/css/pluginsCss.css' },
  { id: 'luckysheetCss2', src: '/luckysheet/plugins/plugins.css' },
  { id: 'luckysheetCss3', src: '/luckysheet/css/luckysheet.css' },
  { id: 'luckysheetCss4', src: '/luckysheet/assets/iconfont/iconfont.css' }
];

const ns = useNamespace('xlsx');
const comClass = ns.b();

const props = defineProps(xlsxProps);

const emits = defineEmits(previewEmits);

watch(
  () => props.source,
  val => {
    initXlsx(val);
  },
  {
    immediate: true,
    deep: true
  }
);

function isLuckySheet() {
  const scripts = document.scripts;
  for (let i = 0; i < scripts.length; i++) {
    const element = scripts[i];
    if (element.src.includes('luckysheet')) {
      return true;
    }
  }
  return false;
}

const closeFunc = () => {
  props.onClose && props.onClose();
  emits('update:source', []);
};

async function initXlsx(val: File | string) {
  if (!val || !isFile(val)) {
    return;
  }
  try {
    if (!isLuckySheet()) {
      await loadCss(cssList);
      await loadJs(jsList);
    }
    LuckyExcel.transformExcelToLucky(
      val,
      function (exportJson: { sheets: string | any[] | null; info: { name: { creator: any } } }) {
        if (exportJson.sheets == null) {
          return;
        }

        (window as any).luckysheet.destroy();

        (window as any).luckysheet.create({
          container: 'luckysheet',
          data: exportJson.sheets,
          title: exportJson.info.name,
          lang: 'zh',
          gridKey: new Date().getTime(), // 表格唯一key
          showinfobar: false,
          allowEdit: false,
          allowCopy: false,
          allowUpdate: false,
          showtoolbar: false, // 是否显示工具栏
          enableAddRow: false, // 允许添加行
          enableAddBackTop: false, // 允许回顶部
          sheetFormulaBar: false, // 是否显示公式栏
          showstatisticBar: false, // 是否显示底部计数栏
          showsheetbar: false, // 是否显示sheet工具栏
          forceCalculation: true, // 强制计算公式
          showConfigWindowResize: false,
          showsheetbarConfig: {
            sheet: true // sheet页显示
          },
          sheetRightClickConfig: {
            delete: false, // 删除
            copy: false, // 复制
            rename: false, // 重命名
            color: false, // 更改颜色
            hide: false, // 隐藏，取消隐藏
            move: false // 向左移，向右移
          },
          cellRightClickConfig: {
            copy: false, // 复制
            copyAs: false, // 复制为
            paste: false, // 粘贴
            insertRow: false, // 插入行
            insertColumn: false, // 插入列
            deleteRow: false, // 删除选中行
            deleteColumn: false, // 删除选中列
            deleteCell: false, // 删除单元格
            hideRow: false, // 隐藏选中行和显示选中行
            hideColumn: false, // 隐藏选中列和显示选中列
            rowHeight: false, // 行高
            columnWidth: false, // 列宽
            clear: false, // 清除内容
            matrix: false, // 矩阵操作选区
            sort: false, // 排序选区
            filter: false, // 筛选选区
            chart: false, // 图表生成
            image: false, // 插入图片
            link: false, // 插入链接
            data: false, // 数据验证
            cellFormat: false // 设置单元格格式,
          },
          hook: {
            // 单元格点击前的事件
            // cellMousedownBefore: () => false,
            // 更新这个单元格值之前触发
            cellUpdateBefore: () => false,
            // 图片删除前
            imageDeleteBefore: () => false,
            // 图片更新前
            imageUpdateBefore: () => false
            // workbookCreateAfter: function (json: any) {}
          }
        });
      }
    );
    emits('loadComplete');
  } catch (error) {
    emits('loadError');
  }
}

onBeforeUnmount(() => {
  if (!isLuckySheet()) {
    removeCss(cssList);
    removeJs(jsList);
  }
});
</script>

<template>
  <div :class="comClass">
    <span :class="[ns.e('btn'), ns.e('close')]" @click="closeFunc">
      <LSIcon name="Close" :size="24" color="#FFF" />
    </span>
    <div id="luckysheet" class="luckysheet-wrap"></div>
  </div>
</template>

<style lang="scss" scoped>
.ls-xlsx {
  position: relative;
  height: 100%;
  :deep(table) {
    display: table !important;
    width: 100% !important;
    height: 100% !important;
    margin: 0 !important;
    border-collapse: collapse !important;
    outline: 0 !important;
    tr {
      background-color: transparent !important;
      border: none !important;
      transition: none !important;
    }
    th,
    td {
      padding: 0 !important;
      font-size: initial !important;
      border: none !important;
    }
  }
}
.luckysheet-wrap {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  min-height: 100%;
  padding: 0;
  margin: 0;
  :deep(.img-list) {
    pointer-events: none;
  }

  // luckysheet 双击不展示编辑状态框
  :deep(.luckysheet-input-box) {
    display: none !important;
  }
  :deep(.luckysheet-loading-image) {
    display: none !important;
  }

  // 禁止操作
  :deep(.luckysheet-cell-main) {
    // 不展示当前选中的框
    .luckysheet-cell-selected,
    .luckysheet-modal-dialog-border {
      display: none !important;
    }

    // 图片不允许展示编辑样式
    /* stylelint-disable-next-line selector-id-pattern */
    #luckysheet-modal-dialog-activeImage {
      border: 0 !important;
    }
    /* stylelint-disable-next-line selector-id-pattern */
    #luckysheet-modal-dialog-activeImage .luckysheet-modal-dialog-content {
      display: none !important;
    }
    .luckysheet-modal-dialog.luckysheet-modal-dialog-image {
      display: block !important;
    }
    .luckysheet-modal-dialog-resize,
    .luckysheet-modal-dialog-controll {
      display: none !important;
    }
  }
  :deep(.luckysheet-cols-menu-btn) {
    &.luckysheet-mousedown-cancel {
      opacity: 0;
    }
  }
  :deep(.luckysheet-loading-mask) {
    .luckysheet-loading-image,
    .luckysheet-loading-text {
      display: none !important;
    }
  }
}

@mixin op-icon() {
  width: 44px;
  height: 44px;
  font-size: 24px;
  color: #ffffff;
  background-color: #606266;
  border-color: #ffffff;
}
.ls-xlsx__btn {
  position: absolute;
  z-index: 1;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  border-radius: 50%;
  opacity: 0.8;
  .ls-icon {
    font-size: inherit;
    cursor: pointer;
  }
  &.ls-xlsx__close {
    top: 40px;
    right: 40px;
    z-index: 3;
    width: 40px;
    height: 40px;
    font-size: 40px;

    @include op-icon;
  }
}
</style>
