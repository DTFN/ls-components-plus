<script setup lang="ts" name="LSTree">
/**
 * @summary 树形组件 - 基于 Element Plus `el-tree` 的二次封装
 *
 * `LSTree` 主要用于权限树等层级数据展示场景，内部在 `el-tree` 之上补充了三层业务能力：
 * 1. 可选的“全选 / 半选”复选框联动。
 * 2. 基于节点 `permission` 前缀的隐藏控制。
 * 3. 当树节点数据包含 `isPenultimate: true` 时，其子节点自动水平排列。
 *
 * 组件显式声明的自有 props 只有 `isExpand`、`height`、`treeData`、`dataProps`、
 * `hideNodePrefix`、`isCheckAll`、`showCheckbox`、`defaultExpandAll`、`nodeKey`、
 * `isCheckStrictly`、`defaultCheckedKeys`、`attrs`；其中 `attrs` 会以对象形式透传给内部
 * `el-tree`，用于兼容 `empty-text`、`default-expanded-keys`、`render-after-expand`、
 * `draggable`、`allow-drop`、`load`、`lazy` 等原生属性。
 *
 * 当前实现中，节点文案固定读取 `node.label` 渲染，并根据 `hideNodePrefix` 判断是否追加
 * `hide-child-node` 样式；组件本身**未向外暴露自定义节点插槽**。
 *
 * @attr {boolean} isExpand 是否支持点击节点展开 / 收起；为 `false` 时会隐藏展开图标，默认 `true`
 * @attr {string} height 展示区域最大高度；内部以 `maxHeight` 方式应用，默认 `''`
 * @attr {Array} treeData 树形结构数据，默认 `[]`
 * @attr {object} dataProps 树节点字段映射配置，默认 `{ children: 'children', label: 'name', class: '' }`
 * @attr {string} hideNodePrefix 需要隐藏的节点 `permission` 前缀，默认 `'I'`
 * @attr {boolean} isCheckAll 是否显示顶部“全选”复选框，默认 `false`
 * @attr {boolean} showCheckbox 是否显示节点复选框，默认 `true`
 * @attr {boolean} defaultExpandAll 是否默认展开所有节点，默认 `true`
 * @attr {string} nodeKey 节点唯一标识字段，默认 `'id'`
 * @attr {boolean} isCheckStrictly 是否严格勾选（父子节点不联动），默认 `false`
 * @attr {Array} defaultCheckedKeys 默认选中的节点 key 数组，默认 `[]`
 * @attr {object} attrs 兼容部分 `el-tree` 原生属性的对象透传，默认 `{}`
 *
 * @slot 无；当前实现未对外提供可自定义节点内容的插槽
 *
 * @event handleCheck 节点 `check` 事件的二次转发，参数：`data`、`checkeds`
 * @event handleChekChange 节点 `check-change` 事件的二次转发，参数：`data`、`checked`
 *
 * @expose lsTreeRef 内部 `el-tree` 实例，可调用 `getCheckedNodes`、`setCheckedKeys`、`filter` 等 Element Plus Tree 原生方法
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
