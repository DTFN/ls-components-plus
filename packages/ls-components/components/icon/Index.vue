<script setup lang="ts" name="LSIcon">
/**
 * @summary 图标组件 - 统一封装 `element-plus icon`、`iconify`、`img/svg`
 *
 * `LSIcon` 用于统一渲染多来源图标：默认按 `element-plus` 图标组件渲染；
 * `type=1` 时使用 `@iconify/vue`；`type=2` 时使用动态组件方式兼容 `img` 标签与 SVG 资源。
 * 组件本身不定义自有业务事件，点击等交互能力可直接通过原生属性绑定在组件上。
 *
 * @attr {string|object} name 图标名称或图标对象；默认模式下传 `element-plus` 图标名，`type=1` 传完整 iconify 名称，`type=2` 可传 `img` 或 SVG 对象
 * @attr {string|number} type 图标类型；默认空值表示 `element-plus` 图标，`1` 表示 `iconify`，`2` 表示 `img/svg`
 * @attr {string} color 图标颜色；对 `element-plus` 与 `iconify` 直接生效，SVG 资源会透传到 `fill`
 * @attr {string|number} size 图标尺寸；仅默认 `element-plus` 图标模式使用，默认 `16`
 * @attr {string|number} width 图标宽度；主要用于 `iconify` 与 `type=2` 模式，默认 `16`
 * @attr {string|number} height 图标高度；主要用于 `iconify` 与 `type=2` 模式，默认 `16`
 * @attr {string} src 当 `type=2` 且以 `img` 方式渲染时使用的图片地址
 *
 * @slot default 默认插槽；会追加渲染在图标后方，可用于补充自定义内容
 *
 * @example
 * <LSIcon name="Notification" color="red" size="20" />
 *
 * @example
 * <LSIcon :type="1" name="iconoir:fish" width="30" height="30" color="red" />
 *
 * @example
 * <LSIcon :type="2" name="img" width="100" height="100" src="https://example.com/demo.png" />
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
