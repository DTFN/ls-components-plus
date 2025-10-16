<script setup lang="ts">
import { useNamespace } from '@cpo/_hooks/useNamespace';
import { lsEmitNames, lsHeaderProp } from '../types';
import CommandList from './CommandList.vue';
import defUserIcon from './default_head.png';

const emits = defineEmits(lsEmitNames);

const slots = useSlots();

const ns = useNamespace('header');
const comClass: string = ns.b();

const props = defineProps(lsHeaderProp);

const headerStyle = computed(() => {
  return {
    lineHeight: props.height
  };
});

const logoHeight = computed(() => {
  return Number(props.height.replace('px', '')) * 0.7;
});

function onDropdownCommand(val: string) {
  emits('onDropdownCommand2', val);
}
</script>

<template>
  <div :class="comClass" :style="headerStyle">
    <div class="head-left">
      <slot name="left"></slot>
      <img v-if="[1, 2].includes(Number(mode)) && showLogo" :src="logo" :style="{ height: `${logoHeight}px` }" alt="" />
    </div>
    <div class="title">
      <slot v-if="slots.title" name="title"></slot>
      <template v-else>
        {{ title }}
      </template>
    </div>
    <div class="head-right">
      <slot name="right"></slot>
      <CommandList v-if="showCommand" v-bind="props" @on-dropdown-command="onDropdownCommand" />
      <template v-else>
        <el-avatar :size="30" :src="userIcon || defUserIcon" alt="" />
        <div class="name">{{ userName }}</div>
      </template>
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
  .head-left,
  .head-right {
    display: flex;
    align-items: center;
    .name {
      margin-left: 8px;
      font-size: 14px;
    }
  }
}
</style>
