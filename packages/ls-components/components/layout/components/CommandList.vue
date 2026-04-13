<script setup lang="ts">
/**
 * @summary 命令列表组件 - 头部右侧的用户与下拉菜单区域
 *
 * `CommandList` 是 `Header` 的内部子组件，负责渲染用户头像、用户名以及点击展开的
 * `el-dropdown` 命令菜单。它复用 `lsHeaderProp` 中与用户区相关的字段，实际主要消费
 * `userName`、`userIcon`、`commandList`；当命令列表为空时，仅展示头像与用户名，不渲染下拉菜单。
 *
 * @attr {string} userName 用户名
 * @attr {string} userIcon 用户头像地址
 * @attr {Array<{key: string, name: string}>} commandList 顶部交互功能列表
 *
 * @event onDropdownCommand(key) 选择下拉命令后触发，返回对应命令 key
 */
import { lsEmitNames, lsHeaderProp } from '../types';
import defUserIcon from './default_head.png';

defineOptions({
  name: 'CommandList',
  inheritAttrs: false
});

defineProps(lsHeaderProp);

const emits = defineEmits(lsEmitNames);

const commandStatus = ref(false);

function visibleChange() {
  commandStatus.value = !commandStatus.value;
}
function dropdownCommand(val: any) {
  emits('onDropdownCommand', val);
}
</script>

<template>
  <el-dropdown trigger="click" @visible-change="visibleChange" @command="dropdownCommand">
    <span class="el-dropdown-link">
      <el-avatar :size="30" :src="userIcon || defUserIcon" alt="" />
      <div class="name">{{ userName }}</div>
      <LSIcon v-if="commandList.length > 0" :name="commandStatus ? 'ArrowUp' : 'ArrowDown'" />
    </span>
    <template v-if="commandList.length > 0" #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="item in commandList" :key="item.key" :command="item.key">{{ item.name }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss" scoped>
.el-dropdown-link {
  display: flex;
  align-items: center;
  color: #333333;
  cursor: pointer;
  .name {
    margin: 0 8px;
  }
  &:hover {
    .name {
      color: var(--el-color-primary);
    }
  }
}
</style>
