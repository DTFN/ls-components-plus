/**
 * @file 表格组件类型定义
 * @description 定义表格组件的props类型和接口
 */

import { buildProps } from '@cpo/_utils/runtime';

/**
 * 表格组件props
 * @typedef {Object} lsTableProps
 * @property {Array<any>} tableColumn - 表格列数据，必填
 * @property {Array<any>} tableData - 表格数据，必填
 * @property {boolean} loading - 加载状态，默认为false
 * @property {boolean} showPagination - 是否展示分页，默认为true
 * @property {string} paginationClass - 分页控件样式类名
 * @property {number} total - 总页数，默认为0
 * @property {number} currentPage - 当前页，默认为1
 * @property {number} pageSize - 分页页数，默认为10
 * @property {Array<number>} pageSizes - 分页页数选项，默认为[10, 20, 30, 40, 50, 100]
 * @property {Object} paginationOptions - 分页其余配置项
 * @property {boolean} showTableIndex - 是否展示序号列，默认为true
 * @property {boolean} tableIndexfixed - 序号列是否固定，默认为false
 * @property {string} tableIndexLabel - 序号列显示的标题，默认为'序号'
 * @property {boolean} tableIndexInPage - 序号是否单页累加，默认为false
 * @property {boolean} tableIndexStart - 序号是否从0开始，默认为false
 * @property {Object} indexColumnOptions - 序号列配置项
 * @property {boolean} showRadio - 是否显示单选，默认为false
 * @property {Object} radioColumnOptions - 单选列配置项
 * @property {boolean} showRadioLabel - 是否展示单选标签，默认为false
 * @property {string} radioProp - 单选值字段，默认为'id'
 * @property {Object} currentRow - 选中当前行数据
 * @property {boolean} showSelect - 是否显示多选，默认为false
 * @property {Object} selectColumnOptions - 多选列配置项
 * @property {Array<any>} selection - 选中列数据
 * @property {boolean} showExpand - 是否展示展开行，默认为false
 * @property {Object} expandColumnOptions - 展开行配置项
 * @property {boolean} showEmpty - 是否显示空状态，默认为true
 * @property {string} labelEmpty - 空状态占位符，默认为'--'
 * @property {string} labelEmptyClass - 空状态占位符样式类名
 * @property {string} emptyLabel - 空状态文案，默认为'暂无数据'
 */
export const lsTableProps = buildProps({
  /** 表格列数据 */
  tableColumn: {
    type: Array<any>,
    default: () => [],
    required: true
  },
  /** 表格数据 */
  tableData: {
    type: Array<any>,
    default: () => [],
    required: true
  },
  /** 加载状态 */
  loading: {
    type: Boolean,
    default: false
  },
  /** 是否展示分页 */
  showPagination: {
    type: Boolean,
    default: true
  },
  /** 分页控件样式类名 */
  paginationClass: {
    type: String,
    default: ''
  },
  /** 总页数 */
  total: {
    type: Number,
    default: 0
  },
  /** 当前页 */
  currentPage: {
    type: Number,
    default: 1
  },
  /** 分页页数 */
  pageSize: {
    type: Number,
    default: 10
  },
  /** 分页页数选项 */
  pageSizes: {
    type: Array<number>,
    default: () => [10, 20, 30, 40, 50, 100]
  },
  /** 分页其余配置项 */
  paginationOptions: {
    type: Object,
    default: () => ({})
  },
  /** 是否展示序号列 */
  showTableIndex: {
    type: Boolean,
    default: true
  },
  /** 序号列是否固定 */
  tableIndexfixed: {
    type: Boolean,
    default: false
  },
  /** 序号列显示的标题 */
  tableIndexLabel: {
    type: String,
    default: '序号'
  },
  /** 序号是否单页累加 */
  tableIndexInPage: {
    type: Boolean,
    default: false
  },
  /** 序号是否从0开始 */
  tableIndexStart: {
    type: Boolean,
    default: false
  },
  /** 序号列配置项 */
  indexColumnOptions: {
    type: Object,
    default: () => ({})
  },
  /** 是否显示单选 */
  showRadio: {
    type: Boolean,
    default: false
  },
  /** 单选列配置项 */
  radioColumnOptions: {
    type: Object,
    default: () => ({})
  },
  /** 是否展示单选标签 */
  showRadioLabel: {
    type: Boolean,
    default: false
  },
  /** 单选值字段 */
  radioProp: {
    type: String,
    default: 'id'
  },
  /** 选中当前行数据 */
  currentRow: {
    type: Object,
    default: () => ({})
  },
  /** 是否显示多选 */
  showSelect: {
    type: Boolean,
    default: false
  },
  /** 多选列配置项 */
  selectColumnOptions: {
    type: Object,
    default: () => ({})
  },
  /** 选中列数据 */
  selection: {
    type: Array<any>,
    default: () => []
  },
  /** 是否展示展开行 */
  showExpand: {
    type: Boolean,
    default: false
  },
  /** 展开行配置项 */
  expandColumnOptions: {
    type: Object,
    default: () => ({})
  },
  /** 是否显示空状态 */
  showEmpty: {
    type: Boolean,
    default: true
  },
  /** 空状态占位符 */
  labelEmpty: {
    type: String,
    default: '--'
  },
  /** 空状态占位符样式类名 */
  labelEmptyClass: {
    type: String,
    default: ''
  },
  /** 空状态文案 */
  emptyLabel: {
    type: String,
    default: '暂无数据'
  }
} as const);
