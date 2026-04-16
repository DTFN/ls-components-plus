<script setup lang="ts" name="LSPrint">
/**
 * @summary 打印组件 - 基于 `vue3-print-nb` 的二次封装
 *
 * `LSPrint` 用于触发页面内容打印，内部渲染一个 `LSButton` 并通过 `v-print` 指令执行打印。
 * 组件同时支持两种打印方式：
 * 1. 普通打印：通过 `printObj.id` 指向页面中已有的打印区域。
 * 2. 内嵌打印：通过默认插槽传入需要打印的内容，组件会为插槽内容生成内部打印容器。
 *
 * 除 `printObj`、`content`、`btnTxt`、`canPrint` 外，其余属性会通过 `$attrs` 透传给内部 `LSButton`，
 * 因此可继续使用 `type`、`iconConfig` 等按钮能力。
 *
 * @attr {object} printObj 打印对象参数配置，常用参数为 `id`，其他参数参考 `vue3-print-nb` 官方 API，默认 `{}`
 * @attr {string} content 打印按钮禁用时，鼠标移入显示的提示文案，默认 `''`
 * @attr {string} btnTxt 按钮文案，默认 `'打印'`
 * @attr {boolean} canPrint 是否允许打印，默认 `true`
 *
 * @slot default 默认插槽；用于传入内嵌打印内容，未使用插槽时通常配合 `printObj.id` 进行普通打印
 *
 * @event 无
 *
 * @example 普通打印：通过 `printObj.id` 指向页面中已有的打印区域
 * @example 内嵌打印：通过默认插槽传入需要打印的内容
 */
import { useNamespace } from '@cpo/_hooks/useNamespace'
import { merge } from 'lodash-es'
import { lsPrintProps } from './types'

defineProps(lsPrintProps)

const ns = useNamespace('print')
const comClass: string = ns.b()
const boxClass: string = ns.b('box')
const wrapClass: string = ns.b('wrap')

const printParams = ref({
  id: `lsPrint${new Date().getTime()}`,
})
const PAGE_HEIGHT = 1124

/**
 * 打印预览
 */
function printPre() {
  const splitDoms: any = document.getElementsByClassName('print-item')
  let startY = 0

  for (let i = 0; i < splitDoms.length; i++) {
    const splitDom = splitDoms[i]
    const splitValue = splitDom.getBoundingClientRect()

    if (startY === 0) {
      startY = splitValue.top
    }
    const pageHeight = splitValue.bottom - startY

    if (pageHeight > PAGE_HEIGHT && splitDoms[i - 1]) {
      startY = 0
      splitDoms[i - 1].style.pageBreakAfter = 'always'
    }
  }
}
</script>

<template>
  <div :class="comClass">
    <el-tooltip :content="content" placement="top" :disabled="canPrint">
      <LSButton v-print="merge(printParams, printObj)" v-bind="$attrs" :disabled="!canPrint" @click="printPre">
        <span>{{ btnTxt }}</span>
      </LSButton>
    </el-tooltip>
    <div :class="boxClass">
      <div :id="printParams.id" :class="wrapClass">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ls-print-box {
  display: none;
}
</style>

<style media="print">
@media print {
  .ls-print-wrap {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>

<style type="text/css">
@page {
  margin-top: 1mm;
  margin-bottom: 1mm;
}
</style>
