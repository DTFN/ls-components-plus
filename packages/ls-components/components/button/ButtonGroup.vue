<script setup lang="ts" name="LSButtonGroup">
import { setVariable } from '@cpo/_utils/config';
import { lsBtnGroupProp } from './types';

const props = defineProps(lsBtnGroupProp);

watch(
  () => props.separatorColor,
  val => {
    if (val) {
      setVariable('--separator-color', val);
    }
  },
  {
    deep: true,
    immediate: true
  }
);

watch(
  () => props.separatorSize,
  val => {
    if (val) {
      setVariable('--separator-size', val + '');
    }
  },
  {
    deep: true,
    immediate: true
  }
);

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
        font-size: var(--separator-size);
        color: var(--separator-color);
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
  }
}
</style>
