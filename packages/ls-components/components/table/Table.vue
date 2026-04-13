<script setup lang="ts" name="LSTable">
/**
 * @summary 表格组件 - 基于 Element Plus `el-table` 的二次封装
 *
 * `LSTable` 用于展示结构化列表数据，保留了 `el-table` / `el-table-column` 的大部分原生属性、事件与方法，
 * 并在此基础上补充了配置化列渲染、内置分页、单选 / 多选、展开行、序号列、空状态与默认中文文案。
 * 组件支持 `date`、`status`、`number`、`slot`、`link`、`button`、`render` 等列类型；
 * `tableColumn` 中的每一项会透传给 `el-table-column`，`$attrs` 则继续透传给内部 `el-table`。
 *
 * 当前实现还包含以下默认处理：
 * 1. 未透传 `table-layout` / `tableLayout` 时，内部会将 `el-table` 的布局方式设为 `auto`。
 * 2. 未透传 `row-key` / `rowKey` 时，内部默认按 `id` 作为行唯一标识。
 * 3. `showSelect=true` 且未显式配置 `reserveSelection` 时，多选列默认启用 `reserveSelection: true`。
 * 4. `showOverflowTooltip` 未传、传 `true` 或传对象时，都会为气泡补充 `table-popper-css` 样式类。
 *
 * @attr {Array} tableColumn 列配置数组；每项都会透传给 `el-table-column`，支持 `date` / `status` / `number` / `slot` / `link` / `button` / `render` 等扩展列类型，默认 `[]`
 * @attr {Array} tableData 表格数据源，默认 `[]`
 * @attr {boolean} loading 是否显示加载状态（`v-loading`），默认 `false`
 * @attr {boolean} showPagination 是否显示底部分页，默认 `true`
 * @attr {string} paginationClass 分页容器根元素的 class，默认 `''`
 * @attr {number} total 数据总条数，供分页显示，默认 `0`
 * @attr {number} currentPage 当前页码，支持 `v-model:current-page`，默认 `1`
 * @attr {number} pageSize 每页条数，支持 `v-model:page-size`，默认 `10`
 * @attr {number[]} pageSizes 每页条数可选值列表，默认 `[10, 20, 30, 40, 50, 100]`
 * @attr {object} paginationOptions 透传给 `el-pagination` 的配置，默认 `{}`
 * @attr {boolean} showTableIndex 是否显示序号列，默认 `true`
 * @attr {boolean} tableIndexfixed 是否固定序号列到左侧；当前 props 类型为 `boolean`，默认 `false`
 * @attr {string} tableIndexLabel 序号列表头文案，默认 `'序号'`
 * @attr {boolean} tableIndexInPage 为 `true` 时序号在当前页内累加；为 `false` 时按分页全局连续，默认 `false`
 * @attr {boolean} tableIndexStart 为 `true` 时序号从 `0` 开始，否则从 `1` 开始，默认 `false`
 * @attr {object} indexColumnOptions 透传给序号列 `el-table-column` 的配置，默认 `{}`
 * @attr {boolean} showRadio 是否显示单选列，默认 `false`
 * @attr {object} radioColumnOptions 透传给单选列 `el-table-column` 的配置，默认 `{}`
 * @attr {boolean} showRadioLabel 是否在单选列显示 radio 的 label 文案，默认 `false`
 * @attr {string} radioProp 单选用作取值比较的字段名，默认 `'id'`
 * @attr {object} currentRow 当前选中的行（单选），通常配合透传的 `highlight-current-row` 与 `current-change` 使用
 * @attr {boolean} showSelect 是否显示多选列，默认 `false`
 * @attr {object} selectColumnOptions 透传给多选列的配置，如 `selectable(row)`、`reserveSelection`，默认 `{}`
 * @attr {Array} selection 当前选中的行数组（多选），支持 `v-model:selection`，默认 `[]`
 * @attr {boolean} showExpand 是否显示展开列，默认 `false`
 * @attr {object} expandColumnOptions 透传给展开列 `el-table-column` 的配置，默认 `{}`
 * @attr {boolean} showEmpty 无数据时是否显示空状态区域，默认 `true`
 * @attr {string} labelEmpty 单元格值为空时显示的占位文案，默认 `'--'`
 * @attr {string} labelEmptyClass 空占位文案所在元素的 class，默认 `''`
 * @attr {string} emptyLabel 无数据时空状态的描述文案，默认 `'暂无数据'`
 *
 * @slot prepend 插在配置列之前的具名插槽；位于 `el-table` 默认插槽内
 * @slot expand 展开行内容插槽，需配合 `showExpand` 使用，参数：`{ row }`
 * @slot empty 无数据时自定义内容，覆盖默认空状态
 * @slot append 表格最后一行之后插入的内容，对应 `el-table` 的 `append` 插槽
 * @slot default 默认插槽；用于在配置列之后追加自定义 `el-table-column`
 * @slot [column.prop] 列类型为 `slot` 时的列内容插槽，参数：`{ row, column, index }`
 * @slot [column.prop]-header 列自定义表头插槽，列配置需设置 `headerSlot: true`，参数：`{ column, index }`
 * @slot [column.prop]-filter-icon 列自定义筛选图标插槽，列配置需设置 `filterIconSlot: true`，参数：`{ filterOpened }`
 *
 * @event sizeChange 每页条数改变时触发，参数：`pageSize`
 * @event currentPageChange 当前页改变时触发，参数：`currentPage`
 * @event update:page-size `v-model:page-size` 同步事件，参数：`pageSize`
 * @event update:current-page `v-model:current-page` 同步事件，参数：`currentPage`
 * @event update:selection `v-model:selection` 同步事件，参数：`selection`
 * @event 透传事件 `el-table` 的原生事件也可直接监听，如 `row-click`、`cell-click`、`sort-change`、`selection-change`、`current-change`、`expand-change` 等
 *
 * @expose TableRef 内部 `el-table` 实例，可调用 `clearSelection`、`toggleAllSelection`、`doLayout`、`clearSort` 等原生方法
 */
import dayjs from 'dayjs';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import { get } from 'lodash-es';
import { isEmpty } from '../_utils/utils';
import { lsTableProps } from './types';

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

const attrs: any = useAttrs();
const TableRef = ref();
const currentPage = ref(1);
const pageSize = ref(10);
const selectionData = ref<any[]>([]);

// 统一从 attrs 中获取 rowKey
function getRowKeyFromAttrs(source: any): string | ((row: any) => string) {
  return source?.rowKey || source?.rowkey || source?.['row-key'] || 'id';
}

// 获取行唯一标识
const rowKey = computed<string | ((row: any) => string)>(() => getRowKeyFromAttrs(attrs));

// 传入当前页
watch(
  () => props.currentPage,
  newVal => {
    if (newVal === currentPage.value) return;

    // 无分页模式：直接接受传入值（最小为 1），不做 maxPage 限制
    if (!props.showPagination) {
      currentPage.value = Math.max(1, newVal);
      return;
    }

    // total <= 0（数据未加载 / 暂无数据）：内部重置为 1，不向上 emit 避免干扰父组件
    if (props.total <= 0) {
      currentPage.value = 1;
      return;
    }

    // 正常分页：将 currentPage 限制在 [1, maxPage]，越界时回写父组件
    const maxPage = Math.ceil(props.total / pageSize.value);
    const val = Math.max(1, Math.min(newVal, maxPage));
    currentPage.value = val;
    if (val !== newVal) {
      emit('update:current-page', val);
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

/**
 * 连字符转驼峰
 * @param str 需要转换的字符串
 * @returns 转换后的驼峰格式字符串
 */
function kebabToCamel(str: string): string {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

/**
 * 对象的key由连字符转驼峰
 * @param obj 需要转换key的对象
 * @returns 转换后的对象
 */
function objectKeysToCamel(obj: Record<string, any>): any {
  if (typeof obj !== 'object' || obj === null || isEmpty(obj)) return obj;

  if (Array.isArray(obj)) {
    return obj.map(item => objectKeysToCamel(item)) as any;
  }

  return Object.keys(obj).reduce((acc: any, key) => {
    const camelKey: string = kebabToCamel(key);
    const value = obj[key];
    acc[camelKey] = typeof value === 'object' ? objectKeysToCamel(value) : value;
    return acc;
  }, {});
}

// 获取行唯一标识值
function getRowIdentity<T>(row: T, rowKey: string | ((row: T) => string)): string {
  if (!row) throw new Error('Row is required when get row identity');
  if (typeof rowKey === 'string') {
    return `${get(row, rowKey)}`;
  } else if (typeof rowKey === 'function') {
    return rowKey.call(null, row);
  }
  return '';
}

// 比对两个item的唯一标识是否相同
function isSameRow<T>(row1: T, row2: T, rowKey: string | ((row: T) => string)): boolean {
  return getRowIdentity(row1, rowKey) === getRowIdentity(row2, rowKey);
}

// 数据变动 选中状态更新
watch(
  [() => props.tableData, () => props.showSelect, () => props.selection],
  ([tableData, showSelect, selection]) => {
    if (showSelect && tableData && tableData.length > 0 && selection && selection.length > 0) {
      nextTick(() => {
        tableData.forEach((item: any) => {
          const checked = (selection || []).some(selectItem => isSameRow(selectItem, item, rowKey.value));
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

// 新的选择列配置
const newSelectColumnOptions = computed(() => {
  const selectColumnOptions = objectKeysToCamel(props.selectColumnOptions);
  const reserveSelection = get(selectColumnOptions, 'reserveSelection');
  if (isEmpty(reserveSelection) && props.showSelect) {
    return {
      ...selectColumnOptions,
      reserveSelection: true
    };
  } else {
    return selectColumnOptions;
  }
});

// 当前页
watch(currentPage, newVal => {
  if (props.showSelect) {
    const reserveSelection = get(newSelectColumnOptions.value, 'reserveSelection');
    // 选中数据清空
    if (!isEmpty(selectionData.value) && !reserveSelection) {
      selectionData.value = [];
    }
  }
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
  if (props?.tableIndexInPage) {
    return props?.tableIndexStart ? index : index + 1;
  } else {
    return props?.tableIndexStart
      ? (currentPage.value - 1) * pageSize.value + index
      : (currentPage.value - 1) * pageSize.value + index + 1;
  }
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
function handleSelect(selection: any[]) {
  selectionData.value = selection || [];
}

// 全部选中和取消选中监听
function handleSelectAll(selection: any[]) {
  selectionData.value = selection || [];
}

// 表格属性
const attrsProps = computed(() => {
  const attrsProps = objectKeysToCamel(attrs);
  const newAttrs = { ...attrsProps };

  // 设置行唯一标识（与 rowKey 计算保持一致）
  const rowKey: string | ((row: any) => string) = getRowKeyFromAttrs(attrsProps);
  if (rowKey) {
    newAttrs.rowKey = rowKey;
  }

  // 设置表格布局方式,默认为auto
  if (!newAttrs['tableLayout']) {
    newAttrs['tableLayout'] = 'auto';
  }

  // 多选功能
  if (props.showSelect) {
    // 添加选择事件处理
    if (!newAttrs.onSelect) newAttrs.onSelect = handleSelect;
    if (!newAttrs.onSelectAll) newAttrs.onSelectAll = handleSelectAll;
  }

  // 处理文字溢出提示
  const showOverflowTooltip = get(attrsProps, 'showOverflowTooltip');

  if (attrs && !isEmpty(showOverflowTooltip)) {
    // 布尔值true时使用默认配置
    if (typeof showOverflowTooltip === 'boolean') {
      if (showOverflowTooltip === true) {
        newAttrs['showOverflowTooltip'] = {
          popperClass: 'table-popper-css'
        };
      }
    }
    // 对象配置时合并配置
    else if (typeof showOverflowTooltip === 'object') {
      const tooltip: any = showOverflowTooltip || {};
      const popperClass = `table-popper-css ${(tooltip && tooltip?.popperClass) || ''}`;
      newAttrs['showOverflowTooltip'] = {
        ...tooltip,
        popperClass
      };
    }
    // 其他情况使用默认配置
    else {
      newAttrs['showOverflowTooltip'] = {
        popperClass: 'table-popper-css'
      };
    }
  }
  // 未配置时使用默认配置
  else {
    newAttrs['showOverflowTooltip'] = {
      popperClass: 'table-popper-css'
    };
  }

  return newAttrs;
});

// 获取状态type
function getStatusType(value: any, row: any, prop: any) {
  return value[get(row, prop)]?.type;
}

// 获取状态class
function getStatusClass(statusStyle: string = 'default', type?: string, className?: string) {
  const classes = [];
  if (['dot', 'follow'].includes(statusStyle)) {
    classes.push(`ls-table-status`);
    classes.push(`ls-table-status--${type || 'default'}`);
  }
  if (className) classes.push(className);

  return classes.join(' ');
}

// 获取 link href
function getLinkHref(item: any, row: any) {
  const { href, hrefProp } = item || {};

  if (typeof href === 'function') {
    return href(row);
  }

  if (typeof href === 'string') {
    return href;
  }

  if (hrefProp) {
    return get(row, hrefProp);
  }

  return get(row, item?.prop);
}

// 获取单元格原始值
function getCellValue(item: any, row: any) {
  return get(row, item?.prop);
}

// 判断单元格是否为空
function isCellEmpty(item: any, row: any) {
  return isEmpty(getCellValue(item, row));
}

// 获取单元格展示文本（主要用于 link 类型）
function getCellText(item: any, row: any) {
  const { text, textProp, textFormatter } = item || {};

  if (typeof textFormatter === 'function') {
    return textFormatter(row, getCellValue(item, row));
  }

  if (!isEmpty(text)) {
    return text;
  }

  if (textProp) {
    return get(row, textProp);
  }

  return getCellValue(item, row);
}

defineExpose({
  TableRef
});
</script>

<template>
  <div class="ls-table-wrap">
    <el-config-provider :locale="zhCn">
      <el-table ref="TableRef" v-loading="loading" style="width: 100%" v-bind="attrsProps" :data="tableData">
        <template #default>
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
          <el-table-column v-if="showSelect" width="60" v-bind="newSelectColumnOptions" type="selection" />

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
                <!-- 默认渲染模板 -->
                <!-- 日期 -->
                <template v-if="item.type === 'date'">
                  {{ formatDate(getCellValue(item, row), item.dateTemplate) }}
                </template>

                <!-- 状态 -->
                <template v-else-if="item.type === 'status'">
                  <el-text
                    v-bind="
                      typeof item.statusProps === 'function'
                        ? item.statusProps({
                            row,
                            column,
                            index: $index,
                            value: get(row, item.prop),
                            item
                          })
                        : item.statusProps
                    "
                    :type="
                      ['default', 'follow'].includes(item.statusStyle || 'default')
                        ? getStatusType(item.value, row, item.prop)
                        : ''
                    "
                    :class="getStatusClass(item.statusStyle, getStatusType(item.value, row, item.prop), item.className)"
                  >
                    {{ item.value[get(row, item.prop)]?.label || item.value.default?.label || row[item.prop] }}
                  </el-text>
                </template>

                <!-- 数字 -->
                <template v-else-if="item.type === 'number'">
                  <template v-if="isCellEmpty(item, row)">{{ labelEmpty || '--' }}</template>
                  <el-text v-else :type="Number(getCellValue(item, row)) < 0 ? 'danger' : `${item.isSuc ? 'success' : ''}`">
                    {{ getCellValue(item, row) }}
                  </el-text>
                </template>

                <!-- 链接 -->
                <template v-else-if="item.type === 'link'">
                  <!-- 若未配置自定义文本相关字段，且 prop 为空，则走统一空占位逻辑 -->
                  <template v-if="!item.text && !item.textProp && !item.textFormatter && isCellEmpty(item, row)">
                    <div :class="labelEmptyClass">
                      {{ labelEmpty || '--' }}
                    </div>
                  </template>
                  <el-link
                    v-else
                    :href="getLinkHref(item, row)"
                    v-bind="
                      typeof item.linkProps === 'function' ? item.linkProps({ row, column, index: $index }) : item.linkProps
                    "
                  >
                    {{ getCellText(item, row) }}
                  </el-link>
                </template>

                <!-- 按钮 -->
                <template v-else-if="item.type === 'button'">
                  <el-button
                    class="ls-table-button"
                    type="primary"
                    link
                    v-bind="
                      typeof item.buttonProps === 'function'
                        ? item.buttonProps({
                            row,
                            column,
                            index: $index,
                            value: getCellValue(item, row),
                            item
                          })
                        : item.buttonProps
                    "
                    @click="
                      item.onClick?.({
                        row,
                        column,
                        index: $index,
                        value: getCellValue(item, row),
                        item
                      })
                    "
                  >
                    {{ getCellText(item, row) }}
                  </el-button>
                </template>

                <!-- 自定义 -->
                <template v-else-if="item.type === 'slot'">
                  <slot :name="item.prop" :row="row" :column="column" :index="$index" />
                </template>

                <!-- 自定义渲染 -->
                <template v-else-if="item.type === 'render'">
                  <component
                    v-if="item.render"
                    :is="item.render"
                    :row="row"
                    :column="column"
                    :index="$index"
                    :value="getCellValue(item, row)"
                    :item="item"
                  />
                </template>

                <!-- 空值占位 -->
                <template v-else-if="isCellEmpty(item, row)">
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
        </template>

        <!-- 空状态 -->
        <template v-if="showEmpty" #empty>
          <el-empty v-if="!$slots.empty" :description="emptyLabel" />
          <slot name="empty" />
        </template>

        <!-- 追加插槽 -->
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
.ls-table-wrap {
  width: 100%;
}
.ls-table-status {
  position: relative;
  padding-left: 12px;
  &::before {
    position: absolute;
    top: 50%;
    left: 0;
    width: 8px;
    height: 8px;
    content: '';
    border-radius: 100%;
    transform: translateY(-50%);
  }
  &.ls-table-status--default::before {
    background-color: var(--el-text-color);
  }
  &.ls-table-status--success::before {
    background-color: var(--el-color-success);
  }
  &.ls-table-status--warning::before {
    background-color: var(--el-color-warning);
  }
  &.ls-table-status--danger::before {
    background-color: var(--el-color-danger);
  }
  &.ls-table-status--info::before {
    background-color: var(--el-color-info);
  }
  &.ls-table-status--primary::before {
    background-color: var(--el-color-primary);
  }
}

// .ls-table-button {
//   padding-left: 0 !important;
// }
:deep(.el-text) {
  line-height: 1;
}
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
