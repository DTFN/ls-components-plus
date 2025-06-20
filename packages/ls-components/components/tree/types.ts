import { buildProps } from '@cpo/_utils/runtime';

// 如需查询和详情权限关联，需在permission字段前加p和d来区分，permission字段表示权限code
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
  // 默认属性结构
  dataProps: {
    type: Object,
    default: () => ({
      children: 'children',
      label: 'name',
      class: ''
    })
  },
  // 需要隐藏节点code的前缀
  hideNodePrefix: {
    type: String,
    default: 'I'
  },
  // 支持全选
  isCheckAll: {
    type: Boolean,
    default: false
  },
  // // 展示方式 默认：垂直展示
  // direction: {
  //   type: String as PropType<'h' | 'v'>,
  //   default: 'v'
  // },
  showCheckbox: {
    type: Boolean,
    default: true
  },
  defaultExpandAll: {
    type: Boolean,
    default: true
  },
  nodeKey: {
    type: String,
    default: 'id'
  },
  isCheckStrictly: {
    type: Boolean,
    default: false
  },
  treeData: {
    type: Array,
    default: () => []
  },
  defaultCheckedKeys: {
    type: Array<any>,
    default: () => []
  }
});

export const emitNames = ['handleCheck', 'handleChekChange'];
