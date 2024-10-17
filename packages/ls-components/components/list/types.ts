import { buildProps } from '@cpo/_utils/runtime';

export const lsListProps = buildProps({
  // 列表api
  listApi: {
    type: Function
  },
  // 删除api
  delApi: {
    type: Function
  },
  // 开关切换api
  switchApi: {
    type: Function
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
  // 表格列数据
  tableColumn: {
    type: Array<any>,
    default: () => []
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
  // 是否显示添加按钮
  showAdd: {
    type: Boolean,
    default: true
  },
  // 添加按钮文字
  addBtnText: {
    type: String,
    default: '添加'
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
  // 是否显示表格操作列
  showTableOperate: {
    type: Boolean,
    default: true
  }
} as const);
