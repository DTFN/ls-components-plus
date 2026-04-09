/**
 * @file 列表组件类型定义
 * @description 定义列表组件的props类型，包含CRUD功能的完整配置
 */

import { buildProps } from '@cpo/_utils/runtime';

/**
 * 列表组件props
 * @typedef {Object} lsListProps
 * @property {Function} listApi - 列表查询API
 * @property {Function} dealParams - 处理列表接口参数函数
 * @property {Function} dealData - 处理列表返回数据函数
 * @property {Object} listHookConfig - 列表hook配置
 * @property {Function} delApi - 删除API
 * @property {Function} dealDelParams - 处理删除接口参数函数
 * @property {string|Function} delMessage - 删除成功提示话术
 * @property {Function} switchApi - 开关切换API
 * @property {Function} dealSwitchParams - 处理开关接口参数函数
 * @property {boolean} showForm - 是否显示表单，默认为true
 * @property {string} formClass - 表单样式类名
 * @property {Object} formData - 表单数据
 * @property {Array<any>} formItems - 表单项配置
 * @property {Object} formAttrs - 表单配置项
 * @property {Function} queryFn - 自定义查询事件（覆盖默认事件）
 * @property {Function} resetFn - 自定义重置事件（覆盖默认事件）
 * @property {Array<any>} tableColumn - 表格列配置
 * @property {string} tableRowKey - 表格行key，默认为'id'
 * @property {Object} tableAttrs - 表格配置项
 * @property {Object} tableListeners - 表格事件
 * @property {boolean} showOperate - 是否显示操作按钮展示区域，默认为true
 * @property {boolean} showOperateDivider - 操作按钮区域是否显示分割线，默认为true
 * @property {string} operateClass - 操作按钮展示区域样式类名
 * @property {boolean} showAdd - 是否显示添加按钮，默认为true
 * @property {boolean} disabledAddBtn - 添加按钮是否禁用，默认为false
 * @property {string} addBtnText - 添加按钮文字，默认为'添加'
 * @property {Object} addBtnAttrs - 添加按钮配置项
 * @property {Function} addFn - 添加按钮点击事件（覆盖默认事件）
 * @property {boolean} showTableSwitch - 是否显示表格开关切换，默认为false
 * @property {string} switchProp - 表格开关切换字段名，默认为'status'
 * @property {Object} tableSwitchColumn - 表格开关切换列配置项
 * @property {Object} tableSwitchAttrs - 表格开关配置项
 * @property {Object} tableSwitchPopAttrs - 表格开关确认弹窗配置项
 * @property {string} tableSwitchPopTxt - 表格开关确认弹窗文字，默认为'请问是否关闭？'
 * @property {boolean|Function} disabledTableSwitch - 表格开关切换是否禁用，默认为false
 * @property {boolean} showTableOperate - 是否显示表格操作列，默认为true
 * @property {Object} tableOperateColumn - 表格操作列配置项
 * @property {Function} tableDetailFn - 表格查看按钮点击事件（覆盖默认事件）
 * @property {Function} tableEditFn - 表格编辑按钮点击事件（覆盖默认事件）
 * @property {Function} tableDelFn - 表格删除按钮点击事件（覆盖默认事件）
 * @property {boolean|Function} showTableDetail - 表格查看按钮是否展示，默认为true
 * @property {boolean|Function} disabledTableDetail - 表格查看按钮是否禁用，默认为false
 * @property {boolean|Function} showTableEdit - 表格编辑按钮是否展示，默认为true
 * @property {boolean|Function} disabledTableEdit - 表格编辑按钮是否禁用，默认为false
 * @property {boolean|Function} showTableDel - 表格删除按钮是否展示，默认为true
 * @property {boolean|Function} disabledTableDel - 表格删除按钮是否禁用，默认为false
 * @property {Object} tableDelPopAttrs - 表格操作列删除悬浮确认窗配置项
 * @property {string} addRoutePath - 添加页面路由
 * @property {string} detailRoutePath - 详情页面路由
 * @property {string} editRoutePath - 编辑页面路由
 * @property {string|Function} tableDetailText - 表格查看按钮文案，默认为'查看'
 * @property {string|Function} tableEditText - 表格编辑按钮文案，默认为'编辑'
 * @property {string|Function} tableDelText - 表格删除按钮文案，默认为'删除'
 * @property {string|Function} tableDetailType - 表格查看按钮类型，默认为'primary'
 * @property {string|Function} tableEditType - 表格编辑按钮类型，默认为'primary'
 * @property {string|Function} tableDelType - 表格删除按钮类型，默认为'danger'
 * @property {Object} tableDetailBtnAttrs - 表格查看按钮配置
 * @property {Object} tableEditBtnAttrs - 表格编辑按钮配置
 * @property {Object} tableDelBtnAttrs - 表格删除按钮配置
 * @property {Object} skeletonAttrs - 表格骨架屏配置
 * @property {boolean} showSkeleton - 表格骨架屏是否展示，默认为true
 * @property {string|Function} popconfirmTxt - popconfirm提示语
 */
export const lsListProps = buildProps({
  /** 列表查询API */
  listApi: {
    type: Function
  },
  /** 处理列表接口参数函数 */
  dealParams: {
    type: Function
  },
  /** 处理列表返回数据函数 */
  dealData: {
    type: Function
  },
  /** 列表hook配置 */
  listHookConfig: {
    type: Object
  },
  /** 删除API */
  delApi: {
    type: Function
  },
  /** 处理删除接口参数函数 */
  dealDelParams: {
    type: Function
  },
  /** 删除成功提示话术 */
  delMessage: {
    type: [String, Function],
    default: ''
  },
  /** 开关切换API */
  switchApi: {
    type: Function
  },
  /** 处理开关接口参数函数 */
  dealSwitchParams: {
    type: Function
  },
  /** 是否显示表单 */
  showForm: {
    type: Boolean,
    default: true
  },
  /** 表单样式类名 */
  formClass: {
    type: String,
    default: ''
  },
  /** 表单数据 */
  formData: {
    type: Object,
    default: () => ({})
  },
  /** 表单项配置 */
  formItems: {
    type: Array<any>,
    default: () => []
  },
  /** 表单配置项 */
  formAttrs: {
    type: Object,
    default: () => {}
  },
  /** 自定义查询事件（覆盖默认事件） */
  queryFn: {
    type: Function
  },
  /** 自定义重置事件（覆盖默认事件） */
  resetFn: {
    type: Function
  },
  /** 表格列配置 */
  tableColumn: {
    type: Array<any>,
    default: () => []
  },
  /** 表格行key */
  tableRowKey: {
    type: String,
    default: 'id'
  },
  /** 表格配置项 */
  tableAttrs: {
    type: Object,
    default: () => {}
  },
  /** 表格事件 */
  tableListeners: {
    type: Object,
    default: () => {}
  },
  /** 是否显示操作按钮展示区域 */
  showOperate: {
    type: Boolean,
    default: true
  },
  /** 操作按钮区域是否显示分割线 */
  showOperateDivider: {
    type: Boolean,
    default: true
  },
  /** 操作按钮展示区域样式类名 */
  operateClass: {
    type: String,
    default: ''
  },
  /** 是否显示添加按钮 */
  showAdd: {
    type: Boolean,
    default: true
  },
  /** 添加按钮是否禁用 */
  disabledAddBtn: {
    type: Boolean,
    default: false
  },
  /** 添加按钮文字 */
  addBtnText: {
    type: String,
    default: '添加'
  },
  /** 添加按钮配置项 */
  addBtnAttrs: {
    type: Object,
    default: () => {}
  },
  /** 添加按钮点击事件（覆盖默认事件） */
  addFn: {
    type: Function
  },
  /** 是否显示表格开关切换 */
  showTableSwitch: {
    type: Boolean,
    default: false
  },
  /** 表格开关切换字段名 */
  switchProp: {
    type: String,
    default: 'status'
  },
  /** 表格开关切换列配置项 */
  tableSwitchColumn: {
    type: Object,
    default: () => {}
  },
  /** 表格开关配置项 */
  tableSwitchAttrs: {
    type: Object,
    default: () => {}
  },
  /** 表格开关确认弹窗配置项 */
  tableSwitchPopAttrs: {
    type: Object,
    default: () => {}
  },
  /** 表格开关确认弹窗文字 */
  tableSwitchPopTxt: {
    type: String,
    default: '请问是否关闭？'
  },
  /** 表格开关切换是否禁用 */
  disabledTableSwitch: {
    type: [Boolean, Function],
    default: false
  },
  /** 是否显示表格操作列 */
  showTableOperate: {
    type: Boolean,
    default: true
  },
  /** 表格操作列配置项 */
  tableOperateColumn: {
    type: Object,
    default: () => {}
  },
  /** 表格查看按钮点击事件（覆盖默认事件） */
  tableDetailFn: {
    type: Function
  },
  /** 表格编辑按钮点击事件（覆盖默认事件） */
  tableEditFn: {
    type: Function
  },
  /** 表格删除按钮点击事件（覆盖默认事件） */
  tableDelFn: {
    type: Function
  },
  /** 表格查看按钮是否展示 */
  showTableDetail: {
    type: [Boolean, Function],
    default: true
  },
  /** 表格查看按钮是否禁用 */
  disabledTableDetail: {
    type: [Boolean, Function],
    default: false
  },
  /** 表格编辑按钮是否展示 */
  showTableEdit: {
    type: [Boolean, Function],
    default: true
  },
  /** 表格编辑按钮是否禁用 */
  disabledTableEdit: {
    type: [Boolean, Function],
    default: false
  },
  /** 表格删除按钮是否展示 */
  showTableDel: {
    type: [Boolean, Function],
    default: true
  },
  /** 表格删除按钮是否禁用 */
  disabledTableDel: {
    type: [Boolean, Function],
    default: false
  },
  /** 表格操作列删除悬浮确认窗配置项 */
  tableDelPopAttrs: {
    type: Object,
    default: () => {}
  },
  /** 添加页面路由 */
  addRoutePath: {
    type: String,
    default: ''
  },
  /** 详情页面路由 */
  detailRoutePath: {
    type: String,
    default: ''
  },
  /** 编辑页面路由 */
  editRoutePath: {
    type: String,
    default: ''
  },
  /** 表格查看按钮文案 */
  tableDetailText: {
    type: [String, Function],
    default: '查看'
  },
  /** 表格编辑按钮文案 */
  tableEditText: {
    type: [String, Function],
    default: '编辑'
  },
  /** 表格删除按钮文案 */
  tableDelText: {
    type: [String, Function],
    default: '删除'
  },
  /** 表格查看按钮类型 */
  tableDetailType: {
    type: [String, Function],
    default: 'primary'
  },
  /** 表格编辑按钮类型 */
  tableEditType: {
    type: [String, Function],
    default: 'primary'
  },
  /** 表格删除按钮类型 */
  tableDelType: {
    type: [String, Function],
    default: 'danger'
  },
  /** 表格查看按钮配置 */
  tableDetailBtnAttrs: {
    type: Object,
    default: () => {}
  },
  /** 表格编辑按钮配置 */
  tableEditBtnAttrs: {
    type: Object,
    default: () => {}
  },
  /** 表格删除按钮配置 */
  tableDelBtnAttrs: {
    type: Object,
    default: () => {}
  },
  /** 表格骨架屏配置 */
  skeletonAttrs: {
    type: Object,
    default: () => {}
  },
  /** 表格骨架屏是否展示 */
  showSkeleton: {
    type: Boolean,
    default: true
  },
  /** popconfirm提示语 */
  popconfirmTxt: {
    type: [String, Function],
    default: ''
  }
} as const);
