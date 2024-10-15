import { buildProps } from '@cpo/_utils/runtime';

export const lsTableProps = buildProps({
  tableColumn: {
    type: Array<any>,
    default: () => [],
    required: true
  },
  tableData: {
    type: Array<any>,
    default: () => [],
    required: true
  },
  loading: {
    type: Boolean,
    default: false
  },
  // 是否展示分页
  showPagination: {
    type: Boolean,
    default: true
  },
  // 分页控件Class
  paginationClass: {
    type: String,
    default: ''
  },
  // 总页数
  total: {
    type: Number,
    default: 0
  },
  // 当前页
  currentPage: {
    type: Number,
    default: 1
  },
  // 分页页数
  pageSize: {
    type: Number,
    default: 10
  },
  // 分页页数选项
  pageSizes: {
    type: Array<number>,
    default: () => [10, 20, 30, 40, 50]
  },
  // 分页其余配置项
  paginationOptions: {
    type: Object,
    default: () => ({})
  },
  // 否展示Index
  showTableIndex: {
    type: Boolean,
    default: true
  },
  // Index 是否固定
  tableIndexfixed: {
    type: Boolean,
    default: false
  },
  // Index 标签
  tableIndexLabel: {
    type: String,
    default: '序号'
  },
  // Index 配置项
  indexColumnOptions: {
    type: Object,
    default: () => ({})
  },
  // 是否单选
  showRadio: {
    type: Boolean,
    default: false
  },
  // 单选配置项
  radioColumnOptions: {
    type: Object,
    default: () => ({})
  },
  // 是否展示单选标签
  showRadioLabel: {
    type: Boolean,
    default: false
  },
  // 单选值字段
  radioProp: {
    type: String,
    default: 'id'
  },
  // 选中当前列
  currentRow: {
    type: Object,
    default: () => ({})
  },
  // 是否多选
  showSelect: {
    type: Boolean,
    default: false
  },
  // 多选配置项
  selectColumnOptions: {
    type: Object,
    default: () => ({})
  },
  // 选中列数据
  selection: {
    type: Array<any>,
    default: () => []
  },
  // 是否展示展开行
  showExpand: {
    type: Boolean,
    default: false
  },
  // 多选配置项
  expandColumnOptions: {
    type: Object,
    default: () => ({})
  },
  // 是否显示空状态
  showEmpty: {
    type: Boolean,
    default: true
  }
} as const);
