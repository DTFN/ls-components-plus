<script setup lang="ts" name="LSButtonGroup">
import { useNamespace } from '@cpo/_hooks/useNamespace';
import { lsBtnGroupProp } from './types';
import { lsBtnKey } from '@cpo/_constants';

const props = defineProps(lsBtnGroupProp);

const ns = useNamespace('button-group');
const comClass: string = ns.b();

provide(lsBtnKey, props);
</script>

<template>
  <el-button-group v-bind="$attrs" :class="comClass">
    <slot></slot>
  </el-button-group>
</template>

<style lang="scss" scoped>
.ls-button-group {
  position: relative;
  display: flex;
  align-items: center;
  :deep() .ls-button {
    &:last-child {
      .separator {
        display: none;
      }
    }
  }
}
</style>
