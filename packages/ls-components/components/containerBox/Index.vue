<script setup lang="ts" name="LSContainerBox">
/**
 * @summary 容器盒子组件 - 响应式缩放容器
 *
 * 这是自研库的容器盒子组件，提供基于16:9比例的响应式缩放功能。
 * 根据窗口大小自动计算缩放比例，适用于需要固定比例展示的内容区域。
 *
 * @attr {number} width - 容器宽度，默认为1920
 * @attr {number} height - 容器高度，默认为1080
 *
 * @slot default - 默认插槽，容器内容
 *
 * @csspart container-box - 容器盒子
 *
 * @example
 * <!-- 基础用法 -->
 * <LSContainerBox>
 *   <DashboardContent />
 * </LSContainerBox>
 *
 * @example
 * <!-- 自定义尺寸 -->
 * <LSContainerBox :width="1920" :height="1080">
 *   <FullHDContent />
 * </LSContainerBox>
 */
import { useNamespace } from '@cpo/_hooks/useNamespace'
import { lsContainerBoxProps } from './types'

const props = defineProps(lsContainerBoxProps)
const ns = useNamespace('container-box')
const comClass: string = ns.b()

const lsContainerBoxRef = ref()

const scale = ref(1)

function getScale() {
  // 固定16： 9
  const wh = window.innerHeight / props.height
  const ww = window.innerWidth / props.width
  scale.value = ww < wh ? ww : wh
}

function debounce(fn: (...args: any) => void, delay: number = 500) {
  const delays = delay
  let timer: any = null

  return function (...args: any) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply((window as any).this, args)
      window.clearTimeout(timer)
    }, delays)
  }
}

onMounted(() => {
  getScale()
  window.addEventListener('resize', debounce(getScale))
})
</script>

<template>
  <div ref="lsContainerBoxRef" :class="comClass">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.ls-container-box {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  width: calc(v-bind(width) * 1px);
  height: calc(v-bind(height) * 1px);
  transition: 0.3s;
  transform: scale(v-bind(scale)) translate(-50%, -50%);
  transform-origin: 0 0;
}
</style>
