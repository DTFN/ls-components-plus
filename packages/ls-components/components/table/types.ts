/**
 * @file 表格组件类型定义
 * @description 定义 `LSTable` 对外公开的 props 类型。
 */

import { buildProps } from '@cpo/_utils/runtime'

/**
 * @summary 表格组件 props
 *
 * @attr {Array<any>} tableColumn - 列配置数组；每项透传给 `el-table-column`，业务上为必填，默认 `[]`
 * @attr {Array<any>} tableData - 表格数据源，业务上为必填，默认 `[]`
 * @attr {boolean} loading - 是否显示加载状态（`v-loading`），默认 `false`
 * @attr {boolean} showPagination - 是否显示底部分页，默认 `true`
 * @attr {string} paginationClass - 分页容器根元素的 class，默认 `''`
 * @attr {number} total - 数据总条数，供分页显示，默认 `0`
 * @attr {number} currentPage - 当前页码，支持 `v-model:current-page`，默认 `1`
 * @attr {number} pageSize - 每页条数，支持 `v-model:page-size`，默认 `10`
 * @attr {Array<number>} pageSizes - 每页条数可选值列表，默认 `[10, 20, 30, 40, 50, 100]`
 * @attr {object} paginationOptions - 透传给 `el-pagination` 的配置，默认 `{}`
 * @attr {boolean} showTableIndex - 是否显示序号列，默认 `true`
 * @attr {boolean} tableIndexfixed - 是否固定序号列到左侧；当前 props 类型为 `boolean`，默认 `false`
 * @attr {string} tableIndexLabel - 序号列表头文案，默认 `'序号'`
 * @attr {boolean} tableIndexInPage - 为 `true` 时序号在当前页内累加；为 `false` 时按分页全局连续，默认 `false`
 * @attr {boolean} tableIndexStart - 为 `true` 时序号从 `0` 开始，否则从 `1` 开始，默认 `false`
 * @attr {object} indexColumnOptions - 透传给序号列 `el-table-column` 的配置，默认 `{}`
 * @attr {boolean} showRadio - 是否显示单选列，默认 `false`
 * @attr {object} radioColumnOptions - 透传给单选列 `el-table-column` 的配置，默认 `{}`
 * @attr {boolean} showRadioLabel - 是否在单选列显示 radio 的 label 文案，默认 `false`
 * @attr {string} radioProp - 单选用作取值比较的字段名，默认 `'id'`
 * @attr {object} currentRow - 当前选中的行（单选），用于受控高亮
 * @attr {boolean} showSelect - 是否显示多选列，默认 `false`
 * @attr {object} selectColumnOptions - 透传给多选列的配置，如 `selectable(row)`、`reserveSelection`，默认 `{}`
 * @attr {Array<any>} selection - 当前选中的行数组（多选），支持 `v-model:selection`，默认 `[]`
 * @attr {boolean} showExpand - 是否显示展开列，默认 `false`
 * @attr {object} expandColumnOptions - 透传给展开列 `el-table-column` 的配置，默认 `{}`
 * @attr {boolean} showEmpty - 无数据时是否显示空状态区域，默认 `true`
 * @attr {string} labelEmpty - 单元格值为空时显示的占位文案，默认 `'--'`
 * @attr {string} labelEmptyClass - 空占位文案所在元素的 class，默认 `''`
 * @attr {string} emptyLabel - 无数据时空状态的描述文案，默认 `'暂无数据'`
 */
export const lsTableProps = buildProps({
  /** 列配置数组；每项透传给 `el-table-column` */
  tableColumn: {
    type: Array<any>,
    default: () => [],
    required: true,
  },
  /** 表格数据源 */
  tableData: {
    type: Array<any>,
    default: () => [],
    required: true,
  },
  /** 是否显示加载状态（`v-loading`） */
  loading: {
    type: Boolean,
    default: false,
  },
  /** 是否显示底部分页 */
  showPagination: {
    type: Boolean,
    default: true,
  },
  /** 分页容器根元素的 class */
  paginationClass: {
    type: String,
    default: '',
  },
  /** 数据总条数，供分页显示 */
  total: {
    type: Number,
    default: 0,
  },
  /** 当前页码 */
  currentPage: {
    type: Number,
    default: 1,
  },
  /** 每页条数 */
  pageSize: {
    type: Number,
    default: 10,
  },
  /** 每页条数可选值列表 */
  pageSizes: {
    type: Array<number>,
    default: () => [10, 20, 30, 40, 50, 100],
  },
  /** 透传给 `el-pagination` 的配置 */
  paginationOptions: {
    type: Object,
    default: () => ({}),
  },
  /** 是否显示序号列 */
  showTableIndex: {
    type: Boolean,
    default: true,
  },
  /** 是否固定序号列到左侧；当前 props 类型为 `boolean` */
  tableIndexfixed: {
    type: Boolean,
    default: false,
  },
  /** 序号列表头文案 */
  tableIndexLabel: {
    type: String,
    default: '序号',
  },
  /** 为 `true` 时序号在当前页内累加；为 `false` 时按分页全局连续 */
  tableIndexInPage: {
    type: Boolean,
    default: false,
  },
  /** 为 `true` 时序号从 `0` 开始，否则从 `1` 开始 */
  tableIndexStart: {
    type: Boolean,
    default: false,
  },
  /** 透传给序号列 `el-table-column` 的配置 */
  indexColumnOptions: {
    type: Object,
    default: () => ({}),
  },
  /** 是否显示单选列 */
  showRadio: {
    type: Boolean,
    default: false,
  },
  /** 透传给单选列 `el-table-column` 的配置 */
  radioColumnOptions: {
    type: Object,
    default: () => ({}),
  },
  /** 是否在单选列显示 radio 的 label 文案 */
  showRadioLabel: {
    type: Boolean,
    default: false,
  },
  /** 单选用作取值比较的字段名 */
  radioProp: {
    type: String,
    default: 'id',
  },
  /** 当前选中的行（单选），用于受控高亮 */
  currentRow: {
    type: Object,
    default: () => ({}),
  },
  /** 是否显示多选列 */
  showSelect: {
    type: Boolean,
    default: false,
  },
  /** 透传给多选列的配置，如 `selectable(row)`、`reserveSelection` */
  selectColumnOptions: {
    type: Object,
    default: () => ({}),
  },
  /** 当前选中的行数组（多选） */
  selection: {
    type: Array<any>,
    default: () => [],
  },
  /** 是否显示展开列 */
  showExpand: {
    type: Boolean,
    default: false,
  },
  /** 透传给展开列 `el-table-column` 的配置 */
  expandColumnOptions: {
    type: Object,
    default: () => ({}),
  },
  /** 无数据时是否显示空状态区域 */
  showEmpty: {
    type: Boolean,
    default: true,
  },
  /** 单元格值为空时显示的占位文案 */
  labelEmpty: {
    type: String,
    default: '--',
  },
  /** 空占位文案所在元素的 class */
  labelEmptyClass: {
    type: String,
    default: '',
  },
  /** 无数据时空状态的描述文案 */
  emptyLabel: {
    type: String,
    default: '暂无数据',
  },
} as const)
