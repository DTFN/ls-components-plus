<script setup lang="ts">
/**
 * @summary 默认头部组件 - `LSLayout` 的内部导航头
 *
 * `Header` 是 `LSLayout` 的内部头部实现，负责渲染 logo、标题、左/右扩展插槽、
 * 以及右侧的头像与命令下拉区。组件复用 `lsHeaderProp`，并将命令点击结果通过
 * `onDropdownCommand2` 向外层 `LSLayout` 继续上抛，最终汇总为 `onCommand`。
 *
 * @attr {string|number} mode 布局模式
 * @attr {string} title 头部标题
 * @attr {boolean} showLogo 是否显示 logo
 * @attr {string} logo logo 图片地址
 * @attr {string} height 头部高度
 * @attr {boolean} showCommand 是否显示右侧交互区
 * @attr {string} userName 用户名
 * @attr {string} userIcon 用户头像地址
 * @attr {Array<{key: string, name: string}>} commandList 顶部交互功能列表
 *
 * @slot left 头部左侧扩展插槽
 * @slot title 头部标题区域插槽
 * @slot right 头部右侧扩展插槽
 *
 * @event onDropdownCommand2(key) 命令列表点击后触发，返回对应命令 key
 */
import { useNamespace } from '@cpo/_hooks/useNamespace'
import { lsEmitNames, lsHeaderProp } from '../types'
import CommandList from './CommandList.vue'
import defUserIcon from './default_head.png'

const props = defineProps(lsHeaderProp)

const emits = defineEmits(lsEmitNames)

const slots = useSlots()

const ns = useNamespace('header')
const comClass: string = ns.b()

const headerStyle = computed(() => {
  return {
    lineHeight: props.height,
  }
})

const logoHeight = computed(() => {
  return Number(props.height.replace('px', '')) * 0.7
})

function onDropdownCommand(val: string) {
  emits('onDropdownCommand2', val)
}
</script>

<template>
  <div :class="comClass" :style="headerStyle">
    <div class="head-left">
      <slot name="left"></slot>
      <img v-if="[1, 2].includes(Number(mode)) && showLogo" :src="logo" :style="{ height: `${logoHeight}px` }" alt="" />
    </div>
    <div class="title">
      <slot v-if="slots.title" name="title"></slot>
      <template v-else>
        {{ title }}
      </template>
    </div>
    <div class="head-right">
      <slot name="right"></slot>
      <CommandList v-if="showCommand" v-bind="props" @on-dropdown-command="onDropdownCommand" />
      <template v-else>
        <el-avatar :size="30" :src="userIcon || defUserIcon" alt="" />
        <div class="name">
          {{ userName }}
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ls-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  font-size: 18px;
  font-weight: bold;
  color: #333333;
  text-align: center;
  .head-left,
  .head-right {
    display: flex;
    align-items: center;
    .name {
      margin-left: 8px;
      font-size: 14px;
    }
  }
}
</style>
