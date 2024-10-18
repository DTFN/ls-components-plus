<script setup lang="ts">
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
