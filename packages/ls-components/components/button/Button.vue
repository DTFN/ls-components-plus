<script setup lang="ts" name="LSButton">
import { lsBtnProp } from './types';
import { useNamespace } from '@cpo/_hooks/useNamespace';
import LSIcon from '@cpo/icon/Index.vue';

const slots = useSlots();

defineProps(lsBtnProp);

const ns = useNamespace('button');
const comClass: string = ns.b();
</script>

<template>
  <el-button v-if="$attrs.icon && !slots.default" />
  <el-button v-else v-bind="$attrs" :class="comClass">
    <LSIcon
      v-if="!$attrs.icon && (iconName || slots.icon)"
      :class="[!slots.default ? 'only-icon' : '']"
      :type="iconType"
      :name="iconName"
      :color="iconColor"
      :width="iconWidth"
      :height="iconHeight"
      :size="iconSize"
    >
      <slot name="icon"></slot>
    </LSIcon>
    <slot v-if="slots.default"></slot>
  </el-button>
</template>

<style lang="scss" scoped>
.ls-button {
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
  .span {
    vertical-align: middle;
  }
}
</style>
