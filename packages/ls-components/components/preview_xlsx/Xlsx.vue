<script setup lang="ts" name="LSXlsx">
import { useNamespace } from '@cpo/_hooks/useNamespace';
import { xlsxProps } from './types';
import { previewEmits } from '@cpo/_constants/prviewType';
import { loadJs, removeJs, loadCss, removeCss } from '@cpo/_utils/utils';
import { isFile } from '@cpo/_utils/check';
import * as XLSX from 'xlsx/xlsx.mjs';
import LuckyExcel from 'luckyexcel';
import { fileSizeLimit, jsList, cssList, luckysheetConfig, rowsPerBatch } from './config';

// https://front-development.oss-cn-beijing.aliyuncs.com/front-dev/luckysheet/plugins/css/pluginsCss.css
// https://front-development.oss-cn-beijing.aliyuncs.com/front-dev/luckysheet/plugins/plugins.css
// https://front-development.oss-cn-beijing.aliyuncs.com/front-dev/luckysheet/css/luckysheet.css
// https://front-development.oss-cn-beijing.aliyuncs.com/front-dev/luckysheet/assets/iconfont/iconfont.css
// https://front-development.oss-cn-beijing.aliyuncs.com/front-dev/luckysheet/plugins/js/plugin.js
// https://front-development.oss-cn-beijing.aliyuncs.com/front-dev/luckysheet/luckysheet.umd.js

const ns = useNamespace('xlsx');
const comClass = ns.b();

const props = defineProps(xlsxProps);

const emits = defineEmits(previewEmits);

watch(
  () => props.source,
  val => {
    const { size }: any = val || {};
    if (size / 1024 / 1024 <= fileSizeLimit) {
      initXlsx(val);
    } else {
      initXlsxLarge(val);
    }
  },
  {
    immediate: true,
    deep: true
  }
);

const isCreatedLuckySheet = ref(false);
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
  if (!initLuckySheet(val)) {
    return;
  }
  try {
    LuckyExcel.transformExcelToLucky(
      val,
      function (exportJson: { sheets: string | any[] | null; info: { name: { creator: any } } }) {
        if (exportJson.sheets == null) {
          return;
        }

        (window as any).luckysheet.destroy();
        (window as any).luckysheet.create({
          data: exportJson.sheets,
          title: exportJson.info.name,
          ...luckysheetConfig
        });
      }
    );
    emits('loadComplete');
  } catch (error) {
    emits('loadError');
  }
}

function getSheetData(data: any) {
  const end = Math.min(0 + rowsPerBatch, data.length);
  const batchData = data.slice(0, end);

  let curR = 0;
  const curCellData: any = [[]];
  (window as any).luckysheet.transToCellData(batchData).forEach((list: any) => {
    const { r } = list;
    if (curR !== r) {
      curR = r;
      curCellData[curR] = [];
    }
    curCellData[curR].push(list);
  });
  return curCellData;
}

async function initXlsxLarge(val: File | string) {
  await nextTick();
  if (!initLuckySheet(val)) {
    return;
  }
  try {
    const reader = new FileReader();
    reader.onload = async function (e: any) {
      const workbook = XLSX.read(e.target.result, {
        type: 'binary',
        dense: true
      });

      let activeIndex = 0;
      const allSheetData = (workbook.SheetNames || []).map((name: string) => {
        return {
          name,
          data: XLSX.utils.sheet_to_json(workbook.Sheets[name], { header: 1 })
        };
      });
      // 分批加载数据到 Luckysheet
      const curSheetName = ref(allSheetData[activeIndex]?.name);
      const curSheetData = ref(allSheetData[activeIndex]?.data);
      let totalRows = curSheetData.value.length;
      let currentBatch = 0;

      const curLuckSheetData = (allSheetData || []).map((item: any, i: number) => {
        return {
          name: item.name,
          index: i + 1,
          status: '1',
          order: i,
          data: getSheetData(item.data)
        };
      });

      function loadBatch() {
        if (currentBatch * rowsPerBatch >= totalRows) return;

        const start = currentBatch * rowsPerBatch;
        const end = Math.min(start + rowsPerBatch, totalRows);
        const batchData = curSheetData.value.slice(start, end);

        let curR = 0;
        const curCellData: any = [[]];
        (window as any).luckysheet.transToCellData(batchData).forEach((list: any) => {
          const { r } = list;
          if (curR !== r) {
            curR = r;
            curCellData[curR] = [];
          }
          curCellData[curR].push(list);
        });

        if (!isCreatedLuckySheet.value) {
          (window as any).luckysheet.destroy();
          const curLuckysheetConfig = {
            ...luckysheetConfig,
            hook: {
              sheetActivate(index: number) {
                if (activeIndex != index) {
                  activeIndex = index - 1;
                  curSheetName.value = allSheetData[activeIndex]?.name;
                  curSheetData.value = allSheetData[activeIndex]?.data || [];
                  totalRows = curSheetData.value.length;
                  const pageBtn = document
                    .getElementById('luckysheet')
                    ?.querySelector('.spage-number button[data-page="1"]') as HTMLElement;
                  pageBtn?.click();
                }
              },
              onTogglePager(pagination: any) {
                const { page } = pagination;
                currentBatch = page - 1;
                loadBatch();
              }
            }
          };
          (window as any).luckysheet.create({
            data: curLuckSheetData,
            pager: {
              pageIndex: 1, //当前页码，必填
              total: totalRows, //数据总条数，必填
              pageSize: rowsPerBatch, //每页显示多少条数据，默认10条
              showTotal: true, // 是否显示总数，默认关闭：false
              showSkip: true, //是否显示跳页，默认关闭：false
              showPN: true, //是否显示上下翻页，默认开启：true
              prevPage: '', //上翻页文字描述，默认"上一页"
              nextPage: '', //下翻页文字描述，默认"下一页"
              totalTxt: '' // 数据总条数文字描述，默认"总共：{total}"
            },
            ...curLuckysheetConfig
          });
          isCreatedLuckySheet.value = true;
        } else {
          (window as any).luckysheet.updataSheet({
            data: [
              {
                name: curSheetName,
                index: activeIndex + 1,
                status: '1',
                order: activeIndex,
                data: curCellData
              }
            ]
          });
        }

        emits('loadComplete');
      }

      loadBatch();
    };
    reader.readAsArrayBuffer(val as File);
  } catch (error) {
    emits('loadError');
  }
}

async function initLuckySheet(val: File | string) {
  if (!val || !isFile(val)) {
    return false;
  }
  if (!isLuckySheet()) {
    await loadCss(cssList);
    await loadJs(jsList);
  }
  return true;
}

function resetLuckySheet() {
  if (isCreatedLuckySheet.value) {
    (window as any).luckysheet.destroy();
  }
  if (isLuckySheet()) {
    removeCss(cssList);
    removeJs(jsList);
  }
}

onBeforeUnmount(() => {
  resetLuckySheet();
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
