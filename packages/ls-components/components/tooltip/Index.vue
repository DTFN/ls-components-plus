<script setup lang="ts" name="LSTooltip">
/**
 * @summary 工具提示组件 - 基于 `el-tooltip` 的溢出提示封装
 *
 * `LSTooltip` 用于包裹一段可省略展示的内容，仅当触发区域文本发生溢出时才启用提示。
 * 组件提供 `width`、`fontSize`、`lineClamp`、`lineHeight` 四个自有 props，
 * 其余未声明属性会通过 `$attrs` 继续透传给内部 `el-tooltip`，因此可继续使用
 * `content`、`placement`、`trigger`、`show-after`、`hide-after`、`disabled`、
 * `effect`、`popper-class`、`raw-content` 等原生能力。
 *
 * 当前实现中，溢出检测会基于透传的 `content` 属性和触发区域尺寸进行比较：
 * 1. `lineClamp <= 1` 时按单行宽度判断是否溢出。
 * 2. `lineClamp > 1` 时按多行高度判断是否溢出，通常需要同时设置 `lineHeight`，
 *    并让默认插槽内容的多行省略样式与 `lineClamp` 保持一致。
 *
 * @attr {number|string} width 文案内容展示宽度；纯数字会转成 `px`，默认 `100%`
 * @attr {number|null} fontSize 文案内容字体大小；不传时不额外设置字体大小，默认 `null`
 * @attr {number} lineClamp 文案展示行数；大于 `1` 时按多行溢出逻辑判断，默认 `1`
 * @attr {number|null} lineHeight 文案行高；多行省略场景通常需要传入，默认 `null`
 *
 * @slot default 默认插槽；作为 `el-tooltip` 的触发区域，通常放被省略展示的文本节点
 * @slot content 提示层内容插槽；不传时通常配合透传的 `content` 属性显示提示文案
 *
 * @event 无
 */
import { useNamespace } from '@cpo/_hooks/useNamespace'
import { isEmpty } from '@cpo/_utils/utils'
import { lsTooltipProps } from './types'

const props = defineProps(lsTooltipProps)

const ns = useNamespace('tooltip')
const comClass: string = ns.b()
const showTip = ref(false)
const lsTooltipRef = ref()

const attrs = useAttrs()

const comStyle = computed(() => {
  const w = props.width.toString()
  let tempW = '100%'

  if ((w.endsWith('%') || w.endsWith('px')) && !isEmpty(Number.parseInt(w))) {
    tempW = w
  }
  else if (!isEmpty(Number(w))) {
    tempW = `${w}px`
  }

  return {
    width: tempW,
  }
})

const content = computed(() => {
  return attrs.content || ''
})

const tempContentStyle = computed(() => {
  const style: any
    = props.lineClamp > 1
      ? Object.assign(
          {
            height: 'auto',
          },
          comStyle.value,
        )
      : {
          width: 'auto',
          height: 0,
        }
  const size = props.fontSize

  if (size) {
    style.fontSize = `${size}px`
  }
  const line = props.lineHeight

  if (line) {
    style.lineHeight = `${line}px`
  }

  return style
})

function onMouseEnter() {
  updateTooltip()
}

async function updateTooltip() {
  await nextTick()

  if (lsTooltipRef.value) {
    const w1 = lsTooltipRef.value.getBoundingClientRect()
    const w2 = lsTooltipRef.value.querySelector('.temp-content').getBoundingClientRect()

    if (props.lineClamp <= 1) {
      showTip.value = Boolean(w2.width > w1.width)
    }
    else {
      showTip.value = Boolean(w2.height > w1.height)
    }
  }
}
</script>

<template>
  <div ref="lsTooltipRef" :class="comClass" :style="comStyle" @mouseenter="onMouseEnter">
    <div class="temp-content" :style="tempContentStyle">
      {{ content }}
    </div>
    <el-tooltip :disabled="!showTip" v-bind="$attrs">
      <template #default>
        <slot name="default"></slot>
      </template>
      <template #content>
        <slot name="content"></slot>
      </template>
    </el-tooltip>
  </div>
</template>

<style lang="scss" scoped>
.ls-tooltip {
  width: 100%;
  .temp-content {
    position: absolute;
    height: 0;
    visibility: hidden;
  }
}
</style>
