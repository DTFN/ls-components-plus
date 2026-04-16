/**
 * @file 树形组件类型定义
 * @description 定义 `LSTree` 对外公开的 props 类型与自定义事件名。
 * @remark `treeData` 节点通常包含 `id`、`name`、`permission`、`parentId`、`children` 等字段；当节点包含 `isPenultimate: true` 时，其子节点会按组件内置样式水平展示。
 */

import { buildProps } from '@cpo/_utils/runtime'

/**
 * @summary 树形组件 props
 *
 * @attr {boolean} isExpand - 是否支持点击节点展开 / 收起；为 `false` 时会隐藏展开图标，默认 `true`
 * @attr {string} height - 展示区域最大高度；内部以 `maxHeight` 方式应用，默认 `''`
 * @attr {object} dataProps - 树节点字段映射配置，默认 `{ children: 'children', label: 'name', class: '' }`
 * @attr {string} hideNodePrefix - 需要隐藏的节点 `permission` 前缀，默认 `'I'`
 * @attr {boolean} isCheckAll - 是否显示顶部“全选”复选框，默认 `false`
 * @attr {boolean} showCheckbox - 是否显示节点复选框，默认 `true`
 * @attr {boolean} defaultExpandAll - 是否默认展开所有节点，默认 `true`
 * @attr {string} nodeKey - 节点唯一标识字段，默认 `'id'`
 * @attr {boolean} isCheckStrictly - 是否严格勾选（父子节点不联动），默认 `false`
 * @attr {Array<any>} treeData - 树形结构数据，默认 `[]`
 * @attr {Array<any>} defaultCheckedKeys - 默认选中的节点 key 数组，默认 `[]`
 * @attr {object} attrs - 兼容部分 `el-tree` 原生属性的对象透传，默认 `{}`
 */
export const lsTreeProps = buildProps({
  /** 是否支持点击节点展开 / 收起；为 `false` 时会隐藏展开图标 */
  isExpand: {
    type: Boolean,
    default: true,
  },
  /** 展示区域最大高度；内部以 `maxHeight` 方式应用 */
  height: {
    type: String,
    default: '',
  },
  /** 树节点字段映射配置 */
  dataProps: {
    type: Object,
    default: () => ({
      children: 'children',
      label: 'name',
      class: '',
    }),
  },
  /** 需要隐藏的节点 `permission` 前缀 */
  hideNodePrefix: {
    type: String,
    default: 'I',
  },
  /** 是否显示顶部“全选”复选框 */
  isCheckAll: {
    type: Boolean,
    default: false,
  },
  /** 是否显示节点复选框 */
  showCheckbox: {
    type: Boolean,
    default: true,
  },
  /** 是否默认展开所有节点 */
  defaultExpandAll: {
    type: Boolean,
    default: true,
  },
  /** 节点唯一标识字段 */
  nodeKey: {
    type: String,
    default: 'id',
  },
  /** 是否严格勾选（父子节点不联动） */
  isCheckStrictly: {
    type: Boolean,
    default: false,
  },
  /** 树形结构数据 */
  treeData: {
    type: Array<any>,
    default: () => [],
  },
  /** 默认选中的节点 key 数组 */
  defaultCheckedKeys: {
    type: Array<any>,
    default: () => [],
  },
  /** 兼容部分 `el-tree` 原生属性的对象透传 */
  attrs: {
    type: Object,
    default: () => ({}),
  },
})

/**
 * 树形组件事件名
 * @constant {Array<string>}
 * @property {string} handleCheck - 勾选事件
 * @property {string} handleChekChange - 勾选变化事件
 */
export const emitNames = ['handleCheck', 'handleChekChange']
