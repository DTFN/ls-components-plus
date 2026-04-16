<script setup lang="ts" name="LSPreviewImage">
/**
 * @summary 图片预览组件 - 基于 `el-image-viewer` 的二次封装
 *
 * `LSPreviewImage` 用于全屏预览单张或多张图片，内部复用通用预览层处理加载态、水印、下载扩展与遮罩样式，
 * 并把图片查看器相关属性和未声明事件继续透传给内部 `LSImage`。
 * 组件本身通过 `v-model` 控制显隐，显式声明 `loadComplete`、`loadError`、`onDownload` 三个事件；
 * `switch`、`update:source` 等查看器事件可继续传递给内部图片查看器。
 *
 * 通用预览属性：
 * @attr {boolean} v-model 控制预览显示 / 隐藏，默认 `false`
 * @attr {string|string[]} source 图片源，支持单张图片 URL 或图片 URL 数组
 * @attr {number|string} zoomSize 缩放尺寸配置，默认 `1.5`
 * @attr {boolean} needLoading 是否显示加载状态，默认 `true`
 * @attr {object} loadingOption 加载状态配置，默认 `{ text: 'Loading', background: 'rgba(0, 0, 0, 0.3)' }`
 * @attr {boolean} hasDownload 是否显示下载按钮，默认 `false`
 * @attr {object} downloadData 下载数据；点击下载按钮时通过 `onDownload` 事件传出，默认 `{}`
 * @attr {boolean} hideOnClickModal 点击遮罩层是否关闭预览，默认 `false`
 * @attr {boolean} showWatermark 是否显示水印，默认 `false`
 * @attr {object} watermarkOption 水印配置，具体参考 `el-watermark`，默认 `{}`
 *
 * 透传给内部图片查看器的属性：
 * @attr {number} zIndex 预览组件层级
 * @attr {number} initialIndex 初始预览图片索引，默认 `0`
 * @attr {boolean} infinite 是否无限循环预览，默认 `true`
 * @attr {boolean} teleported 是否挂载到 `body`，默认 `false`
 * @attr {boolean} closeOnPressEscape 按下 `ESC` 是否关闭预览，默认 `true`
 * @attr {Function} onClose 关闭预览时的回调函数
 *
 * @slot viewer 自定义预览内容插槽，会透传到内部 `LSImage`
 * @slot extra 自定义额外操作区域插槽
 *
 * @event loadComplete 图片加载完成事件
 * @event loadError 图片加载失败事件
 * @event onDownload 点击下载按钮触发，参数为 `downloadData`
 * @event switch(index) 图片切换事件；由内部 `LSImage` 透传
 * @event update:source(source) 图片源更新事件；关闭时由内部 `LSImage` 透传为空数组
 *
 * @example
 * <LSPreviewImage v-model="previewVisible1" :source="source1" :on-close="() => { previewVisible1 = false; }" />
 *
 * @example
 * <LSPreviewImage
 *   v-model="previewVisible3"
 *   :source="source1"
 *   :show-watermark="true"
 *   :watermark-option="watermarkOption"
 *   :on-close="() => { previewVisible3 = false; }"
 * />
 *
 * @example
 * <LSPreviewImage
 *   v-model="previewVisible5"
 *   :source="source1"
 *   :has-download="true"
 *   :download-data="downloadData"
 *   @on-download="handleDownload"
 *   :on-close="() => { previewVisible5 = false; }"
 * />
 */
import { lsPreviewProp } from '@cpo/_constants/previewType'
import usePreviewHook from '@cpo/_hooks/usePreviewHook'
import { merge } from 'lodash-es'
import LSImage from './Image.vue'

defineOptions({
  name: 'LSPreviewImage',
  components: {
    LSImage,
  },
  inheritAttrs: false,
})

const props = defineProps(lsPreviewProp)

const emits = defineEmits<{
  (e: 'loadComplete'): void
  (e: 'loadError'): void
  (e: 'onDownload', data: any): void
}>()

const previewVisible = defineModel({
  type: Boolean,
})

const { comClass, defAttrs, closeLoading, watermarkStyle } = usePreviewHook(props, previewVisible)

function loadComplete() {
  closeLoading()
  emits('loadComplete')
}

function loadError() {
  closeLoading()
  emits('loadError')
}

function onDownload(data: any) {
  emits('onDownload', data)
}
</script>

<template>
  <div v-if="previewVisible" :class="comClass">
    <el-watermark v-if="showWatermark" v-bind="watermarkOption" :style="watermarkStyle">
      <LSImage
        v-bind="merge(defAttrs, $attrs)"
        :hide-on-click-modal="props.hideOnClickModal"
        @load-complete="loadComplete"
        @load-error="loadError"
        @on-download="onDownload"
      >
        <template #viewer>
          <slot name="viewer"></slot>
        </template>
      </LSImage>
    </el-watermark>
    <LSImage
      v-else
      v-bind="merge(defAttrs, $attrs)"
      :hide-on-click-modal="props.hideOnClickModal"
      @load-complete="loadComplete"
      @load-error="loadError"
      @on-download="onDownload"
    >
      <template #viewer>
        <slot name="viewer"></slot>
      </template>
    </LSImage>

    <div class="ls-preview-extra">
      <slot name="extra"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@forward '@cpo/_style/preview.scss';
</style>
