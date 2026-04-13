<script setup lang="ts" name="LSButtonGroup">
/**
 * @summary 按钮组组件 - 基于 Element Plus `el-button-group` 的二次封装
 *
 * `LSButtonGroup` 用于组合多个 `LSButton`，并通过 `provide` 向子按钮下发
 * `separator`、`separatorColor`、`separatorSize`，从而在按钮之间渲染自定义分隔符。
 * 其余属性透传给 `el-button-group`。
 *
 * @attr {string} separator='' 按钮之间的分隔符文本
 * @attr {string} separatorColor='#333' 分隔符颜色
 * @attr {string|number} separatorSize='12' 分隔符字号（像素值）
 *
 * @slot default 按钮组内容，通常为多个 `LSButton`
 *
 * @event 无
 *
 * @example
 * <LSButtonGroup>
 *   <LSButton type="primary">上一步</LSButton>
 *   <LSButton type="primary">下一步</LSButton>
 * </LSButtonGroup>
 *
 * @example
 * <LSButtonGroup separator="|" :separator-size="14">
 *   <LSButton link>按钮1</LSButton>
 *   <LSButton link>按钮2</LSButton>
 *   <LSButton link>按钮3</LSButton>
 * </LSButtonGroup>
 */
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
  :deep(.ls-button) {
    &:last-child {
      .ls-separator {
        display: none;
      }
    }
  }
}
</style>
