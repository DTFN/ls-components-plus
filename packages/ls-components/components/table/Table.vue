<script setup lang="ts" name="LSTable">
import dayjs from 'dayjs';
import { get } from 'lodash-es';
import { lsTableProps } from './types';
import { isEmpty } from '../_utils/utils';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

defineOptions({
  inheritAttrs: false // 禁用属性透传
});

const props = defineProps(lsTableProps);

const emit = defineEmits<{
  sizeChange: [pageSize: number];
  currentPageChange: [currentPage: number];
  'update:page-size': [pageSize: number];
  'update:current-page': [currentPage: number];
  'update:selection': [selection: any[]];
}>();

const attrs = useAttrs();
const TableRef = ref();
const currentPage = ref(1);
const pageSize = ref(10);
const selectionData = ref<any[]>([]);

// 传入当前页
watch(
  () => props.currentPage,
  newVal => {
    if (newVal !== currentPage.value) {
      const val = Math.max(1, Math.min(newVal, Math.ceil(props.total / pageSize.value)));
      currentPage.value = val;
      if (val !== newVal) {
        emit('update:current-page', val);
      }
    }
  },
  {
    immediate: true
  }
);

// 传入每页条数
watch(
  [() => props.pageSize, () => props.pageSizes],
  ([val_1, val_2]) => {
    let val = val_1;
    if (!isEmpty(val_2)) {
      val = val_2.includes(val_1) ? val_1 : val_2[0];
    }
    pageSize.value = val;
    if (val !== val_1) {
      emit('update:page-size', val);
    }
  },
  {
    immediate: true
  }
);

// 选中数据
watch(
  () => props.selection,
  newVal => {
    selectionData.value = newVal || [];
  },
  {
    immediate: true,
    deep: true
  }
);

// 数据变动 选中状态更新
watch(
  [() => props.tableData, () => props.showSelect, () => props.selection],
  ([tableData, showSelect, selection]) => {
    if (showSelect && tableData && tableData.length > 0) {
      nextTick(() => {
        tableData.forEach((item: any) => {
          const checked = (selection || []).some(selectItem => selectItem.id === item.id);
          if (checked) {
            TableRef.value.toggleRowSelection(item, true);
          }
        });
      });
    }
  },
  {
    immediate: true,
    deep: true
  }
);

// 多选数据
watch(
  () => selectionData.value,
  newVal => {
    emit('update:selection', newVal);
  },
  {
    deep: true
  }
);

// 当前页
watch(currentPage, newVal => {
  emit('currentPageChange', newVal);
  emit('update:current-page', newVal);
});

// 每页条数
watch(pageSize, newVal => {
  emit('sizeChange', newVal);
  emit('update:page-size', newVal);
});

// 序号
function indexMethod(index: number) {
  return (currentPage.value - 1) * pageSize.value + index + 1;
}

// 日期转换
function formatDate(val: string | null | undefined, template?: string) {
  if (!val) return props.labelEmpty || '--';
  return dayjs(val).format(template || 'YYYY-MM-DD HH:mm:ss');
}

// // 每页条数
// function handleSizeChange(val: number) {
//   pageSize.value = val;
//   emit('sizeChange', val);
//   emit('update:page-size', val);
// }

// // 当前页
// function handleCurrentPageChange(val: number) {
//   currentPage.value = val;
//   emit('currentPageChange', val);
//   emit('update:current-page', val);
// }

// 单列选中监听
function handleSelect(selection: any[], row: any) {
  const filterIndex = (selection || []).findIndex((item: any) => item.id === row.id);
  const index = (selectionData.value || []).findIndex((item: any) => item.id === row.id);
  if (filterIndex > -1) {
    selectionData.value.push(row);
  } else {
    selectionData.value.splice(index, 1);
  }
}

// 全部选中和取消选中监听
function handleSelectAll(selection: any[]) {
  const isSelectAll = selection.length > 0 ? true : false;
  if (props.tableData.length > 0) {
    props.tableData.forEach((item: any) => {
      const filterIndex = (selectionData.value || []).findIndex((row: any) => row.id === item.id);
      if (isSelectAll) {
        if (filterIndex < 0) {
          selectionData.value.push(item);
        }
      } else {
        if (filterIndex >= 0) {
          selectionData.value.splice(filterIndex, 1);
        }
      }
    });
  }
}

// 表格属性
const attrsProps = computed(() => {
  const newAttrs = { ...attrs };

  // 设置表格布局方式,默认为auto
  if (!newAttrs['table-layout']) {
    newAttrs['table-layout'] = 'auto';
  }

  // 多选功能
  if (props.showSelect) {
    // 添加选择事件处理
    if (!newAttrs['onSelect']) newAttrs['onSelect'] = handleSelect;
    if (!newAttrs['onSelectAll']) newAttrs['onSelectAll'] = handleSelectAll;
  }

  // 处理文字溢出提示
  if (attrs && attrs.hasOwnProperty('show-overflow-tooltip')) {
    // 布尔值true时使用默认配置
    if (typeof attrs['show-overflow-tooltip'] === 'boolean') {
      if (attrs['show-overflow-tooltip'] === true) {
        newAttrs['show-overflow-tooltip'] = {
          popperClass: 'table-popper-css'
        };
      }
    }
    // 对象配置时合并配置
    else if (typeof attrs['show-overflow-tooltip'] === 'object') {
      const tooltip: any = attrs['show-overflow-tooltip'] || {};
      const popperClass = `table-popper-css ${tooltip && tooltip?.popperClass}`;
      newAttrs['show-overflow-tooltip'] = {
        ...tooltip,
        popperClass
      };
    }
    // 其他情况使用默认配置
    else {
      newAttrs['show-overflow-tooltip'] = {
        popperClass: 'table-popper-css'
      };
    }
  }
  // 未配置时使用默认配置
  else {
    newAttrs['show-overflow-tooltip'] = {
      popperClass: 'table-popper-css'
    };
  }

  return newAttrs;
});

defineExpose({
  TableRef
});
</script>

<template>
  <div class="ls-table-wrap">
    <el-config-provider :locale="zhCn">
      <el-table ref="TableRef" v-loading="loading" style="width: 100%" v-bind="attrsProps" :data="tableData">
        <!-- 前置插槽  -->
        <slot name="prepend"></slot>

        <!-- 单选 -->
        <el-table-column v-if="showRadio" width="60" v-bind="radioColumnOptions">
          <template #default="{ row }">
            <el-radio :model-value="currentRow ? currentRow[radioProp] : void 0" :label="row[radioProp]">
              {{ showRadioLabel ? row[radioProp] : '' }}
            </el-radio>
          </template>
        </el-table-column>

        <!-- 多选 -->
        <el-table-column v-if="showSelect" width="60" v-bind="selectColumnOptions" type="selection" />

        <!-- 展开行 -->
        <el-table-column v-if="showExpand" v-bind="expandColumnOptions" type="expand">
          <template #default="{ row }">
            <slot name="expand" :row="row"></slot>
          </template>
        </el-table-column>

        <!-- 序号 -->
        <el-table-column
          v-if="showTableIndex"
          width="60"
          :fixed="tableIndexfixed"
          :label="tableIndexLabel"
          :index="indexMethod"
          v-bind="indexColumnOptions"
          type="index"
        />

        <template v-for="item in tableColumn" :key="item.prop">
          <el-table-column v-bind="item">
            <template #default="{ row, column, $index }">
              <!-- 日期 -->
              <template v-if="item.type === 'date'">
                {{ formatDate(get(row, item.prop), item.dateTemplate) }}
              </template>

              <!-- 状态 -->
              <template v-else-if="item.type === 'status'">
                <el-text :type="item.value[get(row, item.prop)]?.type">
                  {{ item.value[get(row, item.prop)]?.label || item.value.default?.label || row[item.prop] }}
                </el-text>
              </template>

              <!-- 数字 -->
              <template v-else-if="item.type === 'number'">
                <template v-if="isEmpty(get(row, item.prop))">{{ labelEmpty || '--' }}</template>
                <el-text v-else :type="Number(get(row, item.prop)) < 0 ? 'danger' : `${item.isSuc ? 'success' : ''}`">
                  {{ get(row, item.prop) }}
                </el-text>
              </template>

              <!-- 自定义 -->
              <template v-else-if="item.type === 'slot'">
                <slot :name="item.prop" :row="row" :column="column" :index="$index" />
              </template>

              <template v-else-if="isEmpty(get(row, item.prop))">
                <div :class="labelEmptyClass">
                  {{ labelEmpty || '--' }}
                </div>
              </template>
            </template>

            <!-- 自定义表头的内容 -->
            <template v-if="item.headerSlot" #header="{ column, $index }">
              <slot :name="`${item.prop}-header`" :column="column" :index="$index" />
            </template>

            <!-- 自定义 filter 图标	-->
            <template v-if="item.filterIconSlot" #filter-icon="{ filterOpened }">
              <slot :name="`${item.prop}-filter-icon`" :filter-opened="filterOpened" />
            </template>
          </el-table-column>
        </template>

        <!-- 后置插槽 -->
        <slot></slot>

        <template v-if="showEmpty" #empty>
          <el-empty v-if="!$slots.empty" :description="emptyLabel" />
          <slot name="empty" />
        </template>

        <template v-if="$slots.append" #append>
          <slot name="append" />
        </template>
      </el-table>

      <el-pagination
        v-if="showPagination"
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :class="paginationClass"
        :disabled="loading"
        :page-sizes="pageSizes"
        :total="total"
        v-bind="paginationOptions"
      />
    </el-config-provider>
  </div>
</template>

<style scoped lang="scss">
:deep(.el-empty) {
  --el-empty-padding: 24px 0 10px 0;
  --el-empty-description-margin-top: 10px;
}
:deep(.el-radio) {
  height: 23px;
}
:deep(.el-pagination) {
  justify-content: flex-end;
  margin-top: 24px;
}
:deep(.table-popper-css) {
  max-width: 60%;
}
</style>
