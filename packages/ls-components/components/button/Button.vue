<script setup lang="ts" name="LSButton">
/**
 * @summary 按钮组件 - 基于 Element Plus `el-button` 的二次封装
 *
 * `LSButton` 透传 `el-button` 的大部分属性与事件，额外支持通过 `iconConfig`
 * 或 `icon` 插槽渲染 `LSIcon`，并在处于 `LSButtonGroup` 中时自动读取分隔符配置。
 *
 * 自有属性：
 * @attr {IconConfigType} iconConfig 自定义图标配置，结构与 `LSIcon` 一致
 *
 * 常用透传属性（来自 `el-button`，并非本组件单独声明的 props）：
 * @attr {string} type 按钮类型，如 `primary` / `success` / `warning` / `danger` / `info`
 * @attr {string} size 按钮尺寸，如 `large` / `default` / `small`
 * @attr {boolean} plain 是否为朴素按钮
 * @attr {boolean} round 是否为圆角按钮
 * @attr {boolean} circle 是否为圆形按钮
 * @attr {boolean} loading 是否为加载状态
 * @attr {boolean} disabled 是否禁用按钮
 * @attr {boolean} link 是否为文字按钮
 * @attr {Component} icon Element Plus 图标组件；当未使用 `iconConfig` / `icon` 插槽时可直接透传
 *
 * @slot default 按钮文本内容
 * @slot icon 自定义图标内容；优先于 `iconConfig`
 *
 * @event click 点击按钮时触发（透传自 `el-button`）
 *
 * @example
 * <LSButton type="primary">主要按钮</LSButton>
 *
 * @example
 * <LSButton :icon-config="{ type: 1, name: 'iconoir:fish', color: 'blue', width: 20, height: 20 }">
 *   鱼图标
 * </LSButton>
 *
 * @example
 * <LSButtonGroup separator="|" :separator-size="14">
 *   <LSButton link>按钮1</LSButton>
 *   <LSButton link>按钮2</LSButton>
 * </LSButtonGroup>
 */

import { lsBtnKey } from '@cpo/_constants'
import { useNamespace } from '@cpo/_hooks/useNamespace'
import LSIcon from '@cpo/icon/Index.vue'
import { computed, inject, ref, useSlots } from 'vue'
import { lsBtnProp } from './types'

defineProps(lsBtnProp)

const slots = useSlots()

interface separatorType {
  separator: string
  separatorColor: string
  separatorSize: string
}

const ns = useNamespace('button')
const comClass: string = ns.b()

const lsBtnGroupProp: separatorType = inject(lsBtnKey, undefined)!

const separator = ref('')
const separatorColor = ref('')
const separatorSize = ref('')

if (lsBtnGroupProp) {
  separator.value = lsBtnGroupProp.separator
  separatorColor.value = lsBtnGroupProp.separatorColor
  separatorSize.value = lsBtnGroupProp.separatorSize
}

const separatorStyle = computed(() => {
  return {
    color: separatorColor.value,
    fontSize: `${separatorSize.value}px`,
  }
})
</script>

<template>
  <template v-if="$attrs.icon && !slots.default">
    <el-button v-bind="$attrs" :class="comClass" />
    <div v-if="separator" class="ls-separator" :style="separatorStyle">
      {{ separator }}
    </div>
  </template>
  <template v-else>
    <el-button v-bind="$attrs" :class="comClass">
      <LSIcon
        v-if="!$attrs.icon && (iconConfig?.name || slots.icon)"
        :class="[!slots.default ? 'only-icon' : '']"
        v-bind="iconConfig"
      >
        <slot name="icon"></slot>
      </LSIcon>
      <slot v-if="slots.default"></slot>
      <span v-if="separator" class="ls-separator" :style="separatorStyle">{{ separator }}</span>
    </el-button>
  </template>
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
  :deep(span) {
    line-height: normal;
    vertical-align: middle;
  }
}
.ls-separator {
  position: relative;
  display: inline-block;
  margin-right: 4px;
  margin-left: 8px;
  overflow: hidden;
  vertical-align: middle;
}
</style>
