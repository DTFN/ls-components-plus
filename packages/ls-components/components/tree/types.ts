import { buildProps } from '@cpo/_utils/runtime';

export const lsTreeProps = buildProps({
  // 是否展开
  isExpand: {
    type: Boolean,
    default: true
  },
  // 展示最大高度
  height: {
    type: String,
    default: ''
  },
  // 数据源
  data: {
    type: Array,
    default: () => []
  },
  // 默认属性结构
  dataProps: {
    type: Object,
    default: () => ({
      children: 'children',
      label: 'name',
      class: ''
    })
  },
  // 隐藏节点key
  hideNodeKey: {
    type: String,
    default: ''
  }
});

export const emitNames = ['handleCheck', 'handleChekChange'];
