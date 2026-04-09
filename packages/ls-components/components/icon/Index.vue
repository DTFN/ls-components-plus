<script setup lang="ts" name="LSIcon">
/**
 * @summary 图标组件 - 多来源图标支持
 *
 * 这是自研库的图标组件，支持多种图标来源：
 * - Iconify图标库（type=1）
 * - SVG组件（type=2）
 * - Element Plus图标（默认）
 *
 * @attr {string} name - 图标名称
 * @attr {number} type - 图标类型，1=Iconify, 2=SVG组件, 默认=Element Plus
 * @attr {number} size - 图标尺寸（Element Plus图标）
 * @attr {string} width - 图标宽度
 * @attr {string} height - 图标高度
 * @attr {string} color - 图标颜色
 * @attr {string} src - SVG图标源（type=2时）
 *
 * @slot default - 默认插槽，自定义图标内容
 *
 * @csspart icon - 图标容器
 *
 * @example
 * <!-- Iconify图标 -->
 * <LSIcon type="1" name="mdi:home" width="24" height="24" />
 *
 * @example
 * <!-- Element Plus图标 -->
 * <LSIcon name="HomeFilled" size="24" color="#409EFF" />
 *
 * @example
 * <!-- SVG组件图标 -->
 * <LSIcon type="2" name="CustomSvgIcon" width="24" height="24" />
 */
import { Icon } from '@iconify/vue';
import { useNamespace } from '@cpo/_hooks/useNamespace';
import { lsIconProps } from './types';
const slots = useSlots();

const ns = useNamespace('icon');
const comClass: string = ns.b();

defineProps(lsIconProps);
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
      :src="src"
    ></component>
    <el-icon v-else-if="name" :size="size" :color="color" :class="$attrs.class"><component :is="name" :color="color" /></el-icon>
    <slot v-if="slots.default"></slot>
  </div>
</template>

<style lang="scss" scoped>
.ls-icon {
  display: inline-block;
  font-size: 0;
  line-height: 0;
  vertical-align: middle;
  :deep(.el-icon),
  :deep(.iconify),
  :deep(img) {
    vertical-align: middle;
  }
}
</style>
