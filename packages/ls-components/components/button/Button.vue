<script setup lang="ts" name="LSButton">
import { Icon } from '@iconify/vue';
import { lsBtnProp } from './types';

const props = defineProps(lsBtnProp);

const btnClass = computed(() => {
  return 'ls-button';
});
const btnColor = computed(() => {
  return props.iconColor || '';
});
const btnName = computed(() => {
  return props.iconName;
});
</script>

<template>
  <el-button v-bind="$attrs" :class="btnClass">
    <template v-if="iconName">
      <Icon v-if="iconType === 2" :icon="btnName" class="ls-iconify" :color="btnColor" :width="iconWidth" :height="iconHeight" />
    </template>
    <span class="ls-slot">
      <slot></slot>
    </span>
  </el-button>
</template>

<style lang="scss" scoped>
.ls-button {
  span {
    line-height: normal;
  }
  .ls-icon {
    margin-right: 6px;
    &.only-icon {
      margin-right: 0;
    }
  }
  .ls-iconify {
    margin-right: 6px;
  }
  .ls-iconify,
  .ls-slot {
    vertical-align: middle;
  }
}
</style>
