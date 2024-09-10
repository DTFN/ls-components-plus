<script setup lang="ts" name="LSIcon">
import { Icon } from '@iconify/vue';
import { useNamespace } from '@cpo/_hooks/useNamespace';
import { iconProps } from './types';
const slots = useSlots();

const ns = useNamespace('icon');
const comClass: string = ns.b();

defineProps(iconProps);
</script>

<template>
  <div :class="comClass">
    <Icon v-if="type == 1 && name" :icon="name as string" class="icon-iconify" :width="width" :height="height" :color="color" />
    <component
      v-else-if="type == 2 && name"
      :is="name"
      class="icon-svg"
      :width="width"
      :height="height"
      :fill="color"
    ></component>
    <el-icon v-else-if="name" :size="size" :color="color"><component :is="name" /></el-icon>
    <slot v-if="slots.default"></slot>
  </div>
</template>

<style lang="scss" scoped>
.ls-icon {
  display: inline-block;
  font-size: 0;
  line-height: normal;
  vertical-align: middle;
}
</style>
