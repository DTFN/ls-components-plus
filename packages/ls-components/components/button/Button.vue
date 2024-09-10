<script setup lang="ts" name="LSButton">
import { lsBtnProp } from './types';
import { useNamespace } from '@cpo/_hooks/useNamespace';
import LSIcon from '@cpo/icon';

const slots = useSlots();

const props = defineProps(lsBtnProp);

const ns = useNamespace('button');
const comClass: string = ns.b();
const btnColor = computed(() => {
  return props.iconColor || '';
});
</script>

<template>
  <el-button v-if="slots.default" v-bind="$attrs" :class="comClass">
    <LSIcon
      v-if="iconName || slots.icon"
      :type="iconType"
      :name="iconName"
      :color="btnColor"
      :width="iconWidth"
      :height="iconHeight"
      :size="iconSize"
    >
      <slot name="icon"></slot>
    </LSIcon>
    <span>
      <slot></slot>
    </span>
  </el-button>
  <el-button v-else v-bind="$attrs" :class="comClass">
    <LSIcon
      v-if="iconName || slots.icon"
      class="only-icon"
      :type="iconType"
      :name="iconName"
      :color="btnColor"
      :width="iconWidth"
      :height="iconHeight"
      :size="iconSize"
    >
      <template #icon>
        <slot></slot>
      </template>
    </LSIcon>
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
  .span {
    vertical-align: middle;
  }
}
</style>
