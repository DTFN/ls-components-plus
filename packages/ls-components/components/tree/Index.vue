<script setup lang="ts" name="LSTree">
import { useNamespace } from '@cpo/_hooks/useNamespace';
import { emitNames, lsTreeProps } from './types';
import { excutePowerTree } from '@cpo/_utils/power';

const emitAll = defineEmits(emitNames);

const props = defineProps(lsTreeProps);

const ns = useNamespace('tree');
const comClass: string = ns.b();
const treeClass = ns.b('box');

const defAttrs: any = ref({
  showCheckbox: true,
  defaultExpandAll: true,
  nodeKey: 'id',
  checkStrictly: false,
  defaultCheckedKeys: []
});

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

watch(
  () => props.data,
  async newVal => {
    if (newVal && newVal.length > 0) {
      isAllChecked.value = false;
      isIndeterminate.value = false;
      allNodeKeys.value = getAllNodeKeys();
      updateHideStyle();
      await nextTick();
      lsTreeRef.value!.filter();
      updateAllCheckStatus();
      updateStyle();
    }
  },
  {
    immediate: true,
    deep: true
  }
);

// 获取所有节点的key值
function getAllNodeKeys() {
  return props.data.reduce((keys: any, node: any) => {
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
    if (vnode?.parentNode?.parentNode?.previousElementSibling) {
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
  lsTreeRef.value.setCheckedNodes(excutePowerTree(props.data, data, checkeds));
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
    if (ids.length === allNodeKeys.value.length) {
      isAllChecked.value = true;
      isIndeterminate.value = false;
    } else {
      isAllChecked.value = false;
      isIndeterminate.value = true;
    }
  } else {
    isAllChecked.value = false;
    isIndeterminate.value = false;
  }
}

// 更新样式
function updateStyle() {
  if (props.direction == 'h') {
    const treeNodes = document.getElementsByClassName('el-tree-node');
    for (let i = 0; i < treeNodes.length; i++) {
      const element = treeNodes[i] as HTMLElement;
      if (element) {
        const iconNode = element.querySelector('.el-tree-node__content .el-icon') as HTMLElement | null;
        if (iconNode && getComputedStyle(iconNode).visibility === 'hidden') {
          element.style.display = 'inline-block';
          element.style.verticalAlign = 'middle';
        }
      }
    }
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
      :class="[treeClass, !isExpand && 'expand-disabled']"
      :style="treeStyle"
      v-bind="Object.assign(defAttrs, $attrs)"
      :data="data"
      :props="dataProps"
      :expand-on-click-node="isExpand"
      :filter-node-method="filterNode"
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
:deep() .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner::after {
  border-color: #aaaaaa !important;
}
:deep() .el-checkbox__input.is-disabled.is-indeterminate .el-checkbox__inner::before {
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
    :deep() .el-tree-node__expand-icon {
      margin-left: 12px;
    }
    :deep() .el-tree__empty-text {
      top: 11px;
      margin-left: 30px;
      word-break: keep-all;
    }
  }

  // 禁用收缩样式
  .expand-disabled {
    :deep() .el-tree-node__expand-icon {
      display: none;
    }
    :deep() .el-checkbox {
      margin-left: 12px;
    }
  }
}
</style>
