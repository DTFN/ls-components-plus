/**
 * @file 树形组件类型定义
 * @description 定义树形组件的props类型和事件
 * @remark 如需查询和详情权限关联，需在permission字段前加p和d来区分，permission字段表示权限code
 */

import { buildProps } from '@cpo/_utils/runtime';

/**
 * 树形组件props
 * @typedef {Object} lsTreeProps
 * @property {boolean} isExpand - 是否展开，默认为true
 * @property {string} height - 展示最大高度，默认为''
 * @property {Object} dataProps - 默认属性结构，默认为{children: 'children', label: 'name', class: ''}
 * @property {string} hideNodePrefix - 需要隐藏节点code的前缀，默认为'I'
 * @property {boolean} isCheckAll - 支持全选，默认为false
 * @property {boolean} showCheckbox - 显示复选框，默认为true
 * @property {boolean} defaultExpandAll - 默认展开所有，默认为true
 * @property {string} nodeKey - 节点key字段，默认为'id'
 * @property {boolean} isCheckStrictly - 严格勾选模式，默认为false
 * @property {Array<any>} treeData - 树形数据，默认为[]
 * @property {Array<any>} defaultCheckedKeys - 默认勾选key，默认为[]
 * @property {Object} attrs - 其他属性，默认为{}
 */
export const lsTreeProps = buildProps({
  /** 是否展开 */
  isExpand: {
    type: Boolean,
    default: true
  },
  /** 展示最大高度 */
  height: {
    type: String,
    default: ''
  },
  /** 默认属性结构 */
  dataProps: {
    type: Object,
    default: () => ({
      children: 'children',
      label: 'name',
      class: ''
    })
  },
  /** 需要隐藏节点code的前缀 */
  hideNodePrefix: {
    type: String,
    default: 'I'
  },
  /** 支持全选 */
  isCheckAll: {
    type: Boolean,
    default: false
  },
  /** 显示复选框 */
  showCheckbox: {
    type: Boolean,
    default: true
  },
  /** 默认展开所有 */
  defaultExpandAll: {
    type: Boolean,
    default: true
  },
  /** 节点key字段 */
  nodeKey: {
    type: String,
    default: 'id'
  },
  /** 严格勾选模式 */
  isCheckStrictly: {
    type: Boolean,
    default: false
  },
  /** 树形数据 */
  treeData: {
    type: Array<any>,
    default: () => []
  },
  /** 默认勾选key */
  defaultCheckedKeys: {
    type: Array<any>,
    default: () => []
  },
  /** 其他属性 */
  attrs: {
    type: Object,
    default: () => ({})
  }
});

/**
 * 树形组件事件名
 * @constant {Array<string>}
 * @property {string} handleCheck - 勾选事件
 * @property {string} handleChekChange - 勾选变化事件
 */
export const emitNames = ['handleCheck', 'handleChekChange'];
