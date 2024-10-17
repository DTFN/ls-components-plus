<script setup lang="ts">
import { useNamespace } from '@cpo/_hooks/useNamespace';
import { lsEmitNames, lsHeaderProp } from '../types';

import defUserIcon from './default_head.png';

const ns = useNamespace('header');
const comClass: string = ns.b();

const props = defineProps(lsHeaderProp);

const emits = defineEmits(lsEmitNames);

const commandStatus = ref(false);

const headerStyle = computed(() => {
  return {
    lineHeight: props.height
  };
});

const logoHeight = computed(() => {
  return Number(props.height.replace('px', '')) * 0.7;
});

function visibleChange() {
  console.log(123123);
  commandStatus.value = !commandStatus.value;
}
function dropdownCommand(val: any) {
  emits('onCommand', val);
}
</script>

<template>
  <div :class="comClass" :style="headerStyle">
    <div class="head-left">
      <slot name="left"></slot>
      <img v-if="logo" :src="logo" :height="logoHeight" alt="" />
    </div>
    <div class="title">{{ title }}</div>
    <div class="head-right">
      <slot name="right"></slot>
      <el-dropdown v-if="userName" trigger="click" @visible-change="visibleChange" @command="dropdownCommand">
        <span class="el-dropdown-link">
          <el-avatar :size="30" :src="userIcon || defUserIcon" alt="" />
          <div class="name">{{ userName }}</div>
          <LSIcon :name="commandStatus ? 'ArrowUp' : 'ArrowDown'" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="item in commandList" :key="item.key" :command="item.key">{{ item.name }}</el-dropdown-item>
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ls-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  font-size: 18px;
  font-weight: bold;
  color: #333333;
  text-align: center;
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
  .head-left,
  .head-right {
    display: flex;
    align-items: center;
  }
}
</style>
