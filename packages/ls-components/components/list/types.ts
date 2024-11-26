import { buildProps } from '@cpo/_utils/runtime';

export const lsListProps = buildProps({
  // 列表api
  listApi: {
    type: Function
  },
  // 处理列表接口参数
  dealParams: {
    type: Function
  },
  // 处理列表返回数据
  dealData: {
    type: Function
  },
  // 列表hook配置
  listHookConfig: {
    type: Object
  },
  // 删除api
  delApi: {
    type: Function
  },
  // 处理删除接口参数
  dealDelParams: {
    type: Function
  },
  // 开关切换api
  switchApi: {
    type: Function
  },
  // 处理开关接口参数
  dealSwitchParams: {
    type: Function
  },
  // 是否显示表单
  showForm: {
    type: Boolean,
    default: true
  },
  // 表单样式
  formClass: {
    type: String,
    default: ''
  },
  // 表单数据
  formData: {
    type: Object,
    default: () => ({})
  },
  // 表单控件配置
  formItems: {
    type: Array<any>,
    default: () => []
  },
  // 表单配置项
  formAttrs: {
    type: Object,
    default: () => {}
  },
  // 查询事件（覆盖默认事件）
  queryFn: {
    type: Function
  },
  // 表格列数据
  tableColumn: {
    type: Array<any>,
    default: () => []
  },
  tableRowKey: {
    type: String,
    default: 'id'
  },
  // 表格配置项
  tableAttrs: {
    type: Object,
    default: () => {}
  },
  // 表格事件
  tableListeners: {
    type: Object,
    default: () => {}
  },
  // 是否显示操作按钮展示区域
  showOperate: {
    type: Boolean,
    default: true
  },
  // 操作按钮区域是否显示分割线
  showOperateDivider: {
    type: Boolean,
    default: true
  },
  // 操作按钮展示区域样式
  operateClass: {
    type: String,
    default: ''
  },
  // 是否显示添加按钮
  showAdd: {
    type: Boolean,
    default: true
  },
  // 添加按钮是否禁用
  disabledAddBtn: {
    type: Boolean,
    default: false
  },
  // 添加按钮文字
  addBtnText: {
    type: String,
    default: '添加'
  },
  // 添加按钮点击事件（覆盖默认事件）
  addFn: {
    type: Function
  },
  // 是否显示表格开关切换
  showTableSwitch: {
    type: Boolean,
    default: false
  },
  // 表格开关切换字段名
  switchProp: {
    type: String,
    default: 'status'
  },
  // 表格开关切换列配置项
  tableSwitchColumn: {
    type: Object,
    default: () => {}
  },
  // 表格开关切换是否禁用
  disabledTableSwitch: {
    type: [Boolean, Function],
    default: false
  },
  // 是否显示表格操作列
  showTableOperate: {
    type: Boolean,
    default: true
  },
  // 表格操作列配置项
  tableOperateColumn: {
    type: Object,
    default: () => {}
  },
  // 表格查看按钮点击事件（覆盖默认事件）
  tableDetailFn: {
    type: Function
  },
  // 表格编辑按钮点击事件（覆盖默认事件）
  tableEditFn: {
    type: Function
  },
  // 表格查看按钮是否展示
  showTableDetail: {
    type: [Boolean, Function],
    default: true
  },
  // 表格查看按钮是否禁用
  disabledTableDetail: {
    type: [Boolean, Function],
    default: false
  },
  // 表格编辑按钮是否展示
  showTableEdit: {
    type: [Boolean, Function],
    default: true
  },
  // 表格编辑按钮是否禁用
  disabledTableEdit: {
    type: [Boolean, Function],
    default: false
  },
  // 表格删按钮是否展示
  showTableDel: {
    type: [Boolean, Function],
    default: true
  },
  // 表格删除按钮是否禁用
  disabledTableDel: {
    type: [Boolean, Function],
    default: false
  },
  // 添加页面路由
  addRoutePath: {
    type: String,
    default: ''
  },
  // 详情页面路由
  detailRoutePath: {
    type: String,
    default: ''
  },
  // 编辑页面路由
  editRoutePath: {
    type: String,
    default: ''
  },
  // 表格查看按钮文案
  tableDetailText: {
    type: String,
    default: '查看'
  },
  // 表格编辑按钮文案
  tableEditText: {
    type: String,
    default: '编辑'
  },
  // 表格删除按钮文案
  tableDelText: {
    type: String,
    default: '删除'
  }
} as const);
