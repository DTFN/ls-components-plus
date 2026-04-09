<script setup lang="ts" name="LSTree">
/**
 * @summary 树形组件 - 基于 Element Plus Tree 的二次封装
 *
 * 这是自研库的标准树形组件，支持树形数据展示、权限控制、全选/半选状态、
 * 节点过滤、自定义节点样式等功能。适用于权限树、部门树、分类树等场景。
 *
 * @attr {array} treeData - 树形数据，包含节点信息和层级关系
 * @attr {string} nodeKey - 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的
 * @attr {object} dataProps - 树节点的配置选项，包含 label、children、disabled 等属性映射
 * @attr {array} defaultCheckedKeys - 默认勾选的节点的 key 数组
 * @attr {array} defaultExpandedKeys - 默认展开的节点的 key 数组
 * @attr {boolean} showCheckbox - 节点是否可被选择 (默认: false)
 * @attr {boolean} defaultExpandAll - 是否默认展开所有节点 (默认: false)
 * @attr {boolean} isCheckStrictly - 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法 (默认: false)
 * @attr {boolean} isCheckAll - 是否显示全选复选框 (默认: false)
 * @attr {boolean} isExpand - 是否允许点击节点展开/收起子节点 (默认: true)
 * @attr {string} hideNodePrefix - 需要隐藏的节点权限前缀，用于权限控制
 * @attr {string} height - 树组件的高度，支持 CSS 单位
 * @attr {string} filterText - 过滤文本，用于实时过滤树节点
 * @attr {string} emptyText - 内容为空的时候展示的文本
 * @attr {boolean} renderAfterExpand - 是否在第一次展开某个树节点后才渲染其子节点 (默认: true)
 * @attr {number} indent - 相邻级节点间的水平缩进，单位为像素 (默认: 16)
 * @attr {function} load - 加载子树数据的方法，仅当 lazy 属性为 true 时生效
 * @attr {boolean} lazy - 是否懒加载子节点，需与 load 方法结合使用 (默认: false)
 * @attr {string} draggable - 是否开启拖拽节点功能 (默认: false)
 * @attr {boolean} allowDrag - 判断节点能否被拖拽
 * @attr {boolean} allowDrop - 拖拽时判定位置能否被放置
 *
 * @slot - 默认插槽，树节点的内容区域
 * @slot default - 树节点的内容作用域插槽，参数：{ node, data }
 *
 * @event handleCheck - 节点复选框点击事件，返回点击的节点数据和当前勾选状态
 * @event handleChekChange - 节点复选框状态变化事件，返回节点数据和勾选状态
 * @event nodeClick - 节点被点击时的回调
 * @event nodeContextmenu - 当某一节点被鼠标右键点击时会触发该事件
 * @event checkChange - 节点选中状态发生变化时的回调
 * @event currentChange - 当前选中节点变化时触发的事件
 * @event nodeExpand - 节点被展开时触发的事件
 * @event nodeCollapse - 节点被关闭时触发的事件
 * @event nodeDragStart - 节点开始拖拽时触发的事件
 * @event nodeDragEnter - 拖拽进入其他节点时触发的事件
 * @event nodeDragOver - 在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）
 * @event nodeDragLeave - 拖拽离开其他节点时触发的事件
 * @event nodeDragEnd - 拖拽结束时（可能未成功）触发的事件
 * @event nodeDrop - 拖拽成功完成时触发的事件
 *
 * @csspart tree - 树组件主体容器
 * @csspart tree-node - 树节点元素
 * @csspart checkbox - 复选框元素
 * @csspart node-content - 节点内容区域
 * @csspart expand-icon - 展开/折叠图标
 * @csspart loading-icon - 加载中图标
 * @csspart empty-text - 空数据提示文本
 *
 * @example
 * <!-- 基础用法 -->
 * <LSTree :data="treeData" :props="defaultProps" />
 *
 * @example
 * <!-- 带复选框 -->
 * <LSTree
 *   :data="treeData"
 *   :props="defaultProps"
 *   show-checkbox
 *   node-key="id"
 *   :default-checked-keys="[1, 2, 3]"
 * />
 *
 * @example
 * <!-- 全选功能 -->
 * <LSTree
 *   :data="treeData"
 *   :props="defaultProps"
 *   show-checkbox
 *   node-key="id"
 *   :is-check-all="true"
 * />
 *
 * @example
 * <!-- 权限树 -->
 * <LSTree
 *   :data="permissionTree"
 *   :props="{ label: 'name', children: 'children' }"
 *   show-checkbox
 *   node-key="id"
 *   :hide-node-prefix="'p:'"
 * />
 *
 * @example
 * <!-- 过滤节点 -->
 * <LSTree
 *   :data="treeData"
 *   :props="defaultProps"
 *   :filter-text="searchText"
 * />
 *
 * @example
 * <!-- 懒加载 -->
 * <LSTree
 *   :data="treeData"
 *   :props="defaultProps"
 *   :load="loadNode"
 *   lazy
 *   node-key="id"
 * />
 *
 * @example
 * <!-- 水平展示最后一级 -->
 * <LSTree
 *   :data="treeData"
 *   :props="defaultProps"
 *   :node-class="customNodeClass"
 * />
 */

import { useNamespace } from '@cpo/_hooks/useNamespace';
import { excutePowerTree } from '@cpo/_utils/power';
import type { TreeNodeData } from 'element-plus';
import { emitNames, lsTreeProps } from './types';

const emitAll = defineEmits(emitNames);

const props = defineProps(lsTreeProps);

const ns = useNamespace('tree');
const comClass: string = ns.b();
const treeClass = ns.b('box');

const lsTreeRef = ref();

// 全选
const isAllChecked = ref(false);
// 中间状态
const isIndeterminate = ref(false);
// 所有节点的id
const allNodeKeys: any = ref<Array<number>>([]);

const treeStyle = computed(() => {
  if (props.height) {
    return {
      maxHeight: props.height
    };
  } else {
    return {};
  }
});

const curData: any = computed(() => {
  return props.treeData;
});

const customNodeClass = ({ isPenultimate }: TreeNodeData) => (isPenultimate ? 'is-penultimate' : '');

watch(
  () => curData.value,
  async newVal => {
    if (newVal && newVal.length > 0) {
      isAllChecked.value = false;
      isIndeterminate.value = false;
      allNodeKeys.value = getAllNodeKeys();
      await nextTick();
      lsTreeRef.value!.filter();
      updateAllCheckStatus();
      // updateStyle();
      await updateHideStyle();
    }
  },
  {
    immediate: true,
    deep: true
  }
);

// 获取所有节点的key值
function getAllNodeKeys() {
  return curData.value.reduce((keys: any, node: any) => {
    keys.push(node.id);
    if (node.children) {
      keys.push(...getAllChildKeys(node.children));
    }
    return keys;
  }, []);
}

// 递归获取所有子节点的key值
function getAllChildKeys(children: any) {
  return children.reduce((keys: any, child: any) => {
    keys.push(child.id);
    if (child.children) {
      keys.push(...getAllChildKeys(child.children));
    }
    return keys;
  }, []);
}

// 更新隐藏样式
async function updateHideStyle() {
  await nextTick();
  const hideChilds: any = document.getElementsByClassName('hide-child-node');
  for (let i = 0; i < hideChilds.length; i++) {
    const vnode = hideChilds[i].parentNode;
    vnode.style.opacity = 0;
    vnode.style.width = 0;
    vnode.style.height = 0;
    const childNodes = vnode.parentNode.parentNode.querySelectorAll('.el-tree-node');
    let needHideIcon = true;
    for (let index = 0; index < childNodes.length; index++) {
      const element = childNodes[index];
      if (element.style.display !== 'none') {
        needHideIcon = false;
        break;
      }
    }
    if (vnode?.parentNode?.parentNode?.previousElementSibling && needHideIcon) {
      vnode.parentNode.parentNode.previousElementSibling.querySelector('.el-icon').style.opacity = 0;
      vnode.parentNode.parentNode.previousElementSibling.querySelector('.el-icon').style.visibility = 'hidden';
    }
  }
}

// 全选所有节点
function handleCheckAllChange() {
  isIndeterminate.value = false;
  if (lsTreeRef.value) {
    lsTreeRef.value.setCheckedKeys(isAllChecked.value ? allNodeKeys.value : []);
  }
}

// 筛选
function filterNode(value: any, data: any) {
  const { permission } = data || {};
  if (permission?.startsWith(props.hideNodePrefix)) {
    return false;
  }
  if (!value) return true;
  const { label } = props.dataProps || {};
  if (!label) return true;
  return data[label].indexOf(value) !== -1;
}

// 点击的节点复选框的数据
function handleCheck(data: any, checkeds: any) {
  lsTreeRef.value.setCheckedNodes(excutePowerTree(curData.value, data, checkeds));
  emitAll('handleCheck', data, checkeds);
}

// 每一个节点复选框变化监听
function handleChekChange(data: any, checked: any) {
  updateAllCheckStatus();

  emitAll('handleChekChange', data, checked);
}

function updateAllCheckStatus() {
  const checkedData = lsTreeRef.value.getCheckedNodes(false, true);
  let ids: Array<number> = [];
  checkedData.forEach((item: any) => {
    const { id, parentId } = item;
    ids.push(id || parentId);
  });
  if (ids.length > 0) {
    const status = Boolean(ids.length === allNodeKeys.value.length);
    isAllChecked.value = status;
    isIndeterminate.value = !status;
  } else {
    isAllChecked.value = false;
    isIndeterminate.value = false;
  }
}

defineExpose({
  lsTreeRef
});
</script>

<template>
  <div :class="comClass">
    <el-checkbox v-if="isCheckAll" v-model="isAllChecked" :indeterminate="isIndeterminate" @change="handleCheckAllChange">
      全选
    </el-checkbox>
    <el-tree
      ref="lsTreeRef"
      :show-checkbox="showCheckbox"
      :default-expand-all="defaultExpandAll"
      :node-key="nodeKey"
      :check-strictly="isCheckStrictly"
      :style="treeStyle"
      :class="[treeClass, !isExpand && 'expand-disabled']"
      :data="treeData"
      :props="{ ...dataProps, ...{ class: customNodeClass } }"
      :default-checked-keys="defaultCheckedKeys"
      :expand-on-click-node="isExpand"
      :filter-node-method="filterNode"
      v-bind="attrs"
      @check="handleCheck"
      @check-change="handleChekChange"
    >
      <template #default="{ node, data }">
        <span
          class="custom-tree-node"
          :class="{
            'hide-child-node': hideNodePrefix && data.permission?.startsWith(hideNodePrefix)
          }"
        >
          <span>{{ node.label }}</span>
        </span>
      </template>
    </el-tree>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-checkbox__input.is-disabled.is-checked .el-checkbox__inner::after) {
  border-color: #aaaaaa !important;
}
:deep(.el-checkbox__input.is-disabled.is-indeterminate .el-checkbox__inner::before) {
  background-color: #aaaaaa !important;
}
.ls-tree {
  position: relative;
  width: 100%;
  margin-top: 6px;
  background-color: #ffffff;
  .ls-tree-box {
    padding-bottom: 12px;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 5px;
      height: 1px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgb(225 229 235 / 100%);
      border-radius: 10px;
      box-shadow: inset 0 0 5px rgb(0 0 0 / 20%);
    }
    &::-webkit-scrollbar-track {
      /* 滚动条里面轨道 */
      background: #ffffff;
    }
    :deep(.el-tree-node__expand-icon) {
      margin-left: 12px;
    }
    :deep(.el-tree__empty-text) {
      top: 11px;
      margin-left: 30px;
      word-break: keep-all;
    }
    :deep(.el-tree-node) {
      // 根据该字段判断是否水平还是垂直展示
      &.is-penultimate {
        > .el-tree-node__children {
          > div {
            display: inline-block;
            margin-right: 3px;
            vertical-align: middle;
            &:not(:first-child) .el-tree-node__content {
              padding-left: 0 !important;
              .el-tree-node__expand-icon {
                display: none;
              }
            }
            .el-tree-node__content {
              padding-right: 16px;
            }
          }
        }
      }
    }
  }

  // 禁用收缩样式
  .expand-disabled {
    :deep(.el-tree-node__expand-icon) {
      display: none;
    }
    :deep(.el-checkbox) {
      margin-left: 12px;
    }
  }
}
</style>
