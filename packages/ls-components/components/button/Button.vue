<script setup lang="ts" name="LSButton">
import { Icon } from '@iconify/vue';
import { lsBtnProp } from './types';
import { useNamespace } from '@cpo/_hooks/useNamespace';

const props = defineProps(lsBtnProp);

const ns = useNamespace('button');
const comClass: string = ns.b();
const btnColor = computed(() => {
  return props.iconColor || '';
});
const btnName = computed(() => {
  return props.iconName;
});
</script>

<template>
  <el-button v-bind="$attrs" :class="comClass">
    <template v-if="iconName">
      <Icon v-if="iconType === 2" :icon="btnName" class="ls-iconify" :color="btnColor" :width="iconWidth" :height="iconHeight" />
    </template>
    <slot></slot>
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
