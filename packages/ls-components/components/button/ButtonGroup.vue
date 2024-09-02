<script setup lang="ts" name="LSButtonGroup">
import { lsBtnGroupProp } from './types';

const props = defineProps(lsBtnGroupProp);

const separator = computed(() => {
  const val = props.separator;
  if (!val) {
    return '';
  }
  return `separator separator-${val}`;
});

const btnClass = computed(() => {
  let cssName = '';
  if (separator.value) {
    cssName += separator.value;
  }
  return `ls-button-group ${cssName}`;
});
</script>

<template>
  <el-button-group v-bind="$attrs" :class="btnClass">
    <slot></slot>
  </el-button-group>
</template>

<style lang="scss" scoped>
.ls-button-group {
  position: relative;
  display: flex;
  align-items: center;
  &.separator {
    :deep() .el-button {
      padding: 0;
      margin: 0;
      &::after {
        position: relative;
        margin-right: 12px;
        margin-left: 12px;
        font-size: 14px;
        line-height: 18px;
        color: $color-text1;
      }
      &:last-child {
        &::after {
          display: none;
        }
      }
    }
    &-1 {
      :deep() .el-button {
        &::after {
          content: '|';
        }
      }
    }
    &-2 {
      :deep() .el-button {
        &::after {
          content: '#';
        }
      }
    }
  }
}
</style>
