<script setup lang="ts" name="LSCropper">
import type { LSCropperCropData } from './types'
import { useNamespace } from '@cpo/_hooks/useNamespace'
import { computed, onBeforeUnmount, shallowRef, watch } from 'vue'
import { VueCropper } from 'vue-cropper'
import { lsEmits, lsProps } from './types'
import 'vue-cropper/dist/index.css'

/**
 * @summary 图片裁剪组件 - 基于 `vue-cropper` 的二次封装
 *
 * `LSCropper` 在保留 `vue-cropper` 原生属性与方法的基础上，补充了统一的
 * 裁剪结果回传与预览能力；支持方形裁剪与圆形裁剪，其中圆形模式会在
 * `vue-cropper` 结果上再经过一次 Canvas 二次裁剪，生成真正的圆形图片。
 *
 * 组件自有属性：
 * @attr {string} imgUrl 待裁剪图片地址
 * @attr {string} fileName 裁剪结果文件名，默认使用时间戳加输出格式后缀
 * @attr {number} limitMinSize 最小裁剪尺寸，默认 `37`
 * @attr {'square'|'circular'} graphicsType 裁剪形状；`square` 为方形，`circular` 为圆形
 * @attr {'png'|'jpeg'|'webp'} outputType 输出图片格式，默认 `png`
 * @attr {number} outputQuality 输出图片质量，传给 `canvas.toBlob`，默认 `0.92`
 * @attr {boolean} showPreview 是否显示裁剪结果预览，默认 `true`
 * @attr {string} previewTitle 预览区标题，默认 `裁剪预览`
 * @attr {string} previewTip 预览区空态提示，默认 `调整裁剪区域后实时生成结果`
 * @attr {'contain'|'cover'} previewFit 预览图填充方式，默认 `contain`
 * @attr {number|string} cropperHeight 裁剪区域高度；传数字时自动追加 `px`，默认 `300`
 * @attr {number|string} previewHeight 预览区域高度；传数字时自动追加 `px`，默认 `160`
 * @attr {number} previewDelay 实时预览生成防抖延迟，单位毫秒，默认 `80`
 *
 * 透传属性（来自 `vue-cropper`，通过 `$attrs` 传入）：
 * @attr {boolean} fixed 是否开启固定比例裁剪
 * @attr {number[]} fixedNumber 固定比例值，如 `[1, 1]`
 * @attr {number|string} autoCropWidth 默认裁剪宽度
 * @attr {number|string} autoCropHeight 默认裁剪高度
 * @attr {boolean} fixedBox 是否固定裁剪框大小
 *
 * @slot 无
 *
 * @event onCropData({ file, url, data, width, height, type }) 裁剪结果变化并成功生成文件时触发
 * @event onCropError(error) 图片读取、绘制或裁剪失败时触发
 *
 * @example
 * <LSCropper :img-url="imgUrl" graphics-type="circular" :show-preview="true" @on-crop-data="onCropData" />
 *
 * @example
 * <LSCropper :img-url="imgUrl" graphics-type="square" :fixed="true" :fixed-number="[1, 1]" output-type="jpeg" />
 */

const props = defineProps(lsProps)
const emits = defineEmits(lsEmits)
const ns = useNamespace('cropper')
const comClass = ns.b()

const lsCropperRef = shallowRef()
const previewUrl = shallowRef('')
const isCropping = shallowRef(false)

let previewTimer: ReturnType<typeof window.setTimeout> | null = null
let cropTaskId = 0

const mimeType = computed(() => {
  const mimeMap = {
    jpeg: 'image/jpeg',
    png: 'image/png',
    webp: 'image/webp',
  }

  return mimeMap[props.outputType]
})

const rootStyle = computed(() => ({
  '--ls-cropper-height': toCssSize(props.cropperHeight),
  '--ls-cropper-preview-height': toCssSize(props.previewHeight),
  '--ls-cropper-preview-fit': props.previewFit,
}))

const previewClasses = computed(() => [
  'ls-cropper-preview',
  `ls-cropper-preview--${props.graphicsType}`,
  {
    'is-empty': !previewUrl.value,
    'is-loading': isCropping.value,
  },
])

function toCssSize(value: number | string) {
  return typeof value === 'number' ? `${value}px` : value
}

/** `vue-cropper` 的 getCropBlob 在失败或部分环境下可能传入非 Blob，需归一化后再交给 FileReader */
function normalizeCropBlob(raw: unknown): Blob | null {
  if (raw instanceof Blob)
    return raw

  if (raw instanceof ArrayBuffer)
    return new Blob([raw], { type: mimeType.value })

  return null
}

function getOutputFileName() {
  if (props.fileName)
    return props.fileName

  const extension = props.outputType === 'jpeg' ? 'jpg' : props.outputType

  return `${Date.now()}.${extension}`
}

function revokePreviewUrl() {
  if (!previewUrl.value)
    return

  URL.revokeObjectURL(previewUrl.value)
  previewUrl.value = ''
}

function clearPreview() {
  revokePreviewUrl()
}

function realTime(data: unknown) {
  if (!props.imgUrl || !lsCropperRef.value)
    return

  if (previewTimer)
    window.clearTimeout(previewTimer)

  previewTimer = window.setTimeout(() => {
    createCropResult(data)
  }, Math.max(0, props.previewDelay))
}

function createCropResult(data: unknown) {
  const taskId = ++cropTaskId
  isCropping.value = true

  try {
    lsCropperRef.value.getCropBlob((blob: unknown) => {
      const normalized = normalizeCropBlob(blob)

      if (!normalized) {
        isCropping.value = false
        emits('onCropError', new TypeError('裁剪结果无效：未获得 Blob'))

        return
      }

      drawAndClipImage(normalized, data, taskId)
    })
  }
  catch (error) {
    if (taskId === cropTaskId)
      isCropping.value = false

    emits('onCropError', error)
  }
}

function drawAndClipImage(blob: Blob, data: unknown, taskId: number) {
  if (props.graphicsType === 'square') {
    // 若裁剪形状为方形，则不进行二次裁剪，直接返回
    executeCropData(blob, data, taskId)

    return
  }

  const reader = new FileReader()
  reader.readAsDataURL(blob)

  reader.onload = (event) => {
    const image = new Image()
    image.src = String(event.target?.result || '')

    image.onload = () => {
      const canvas = document.createElement('canvas')
      const width = image.width
      const height = image.height
      const radius = Math.min(width, height) / 2
      const context = canvas.getContext('2d')

      canvas.width = width
      canvas.height = height

      if (!context) {
        isCropping.value = false
        emits('onCropError', new Error('导出图片失败：Canvas 上下文不可用'))

        return
      }

      context.clearRect(0, 0, width, height)
      // 在canvas开始绘制前填充白色透明背景并设置透明度，用以清除图片裁剪后透明区域变成黑色的问题
      context.fillStyle = 'rgba(255, 255, 255, 0)'
      context.fillRect(0, 0, width, height)
      // 开始路径画圆，剪切处理
      context.save()
      context.beginPath()
      context.arc(width / 2, height / 2, radius, 0, Math.PI * 2)
      context.clip()
      context.drawImage(image, 0, 0)
      context.restore()

      // 将canvas图片转换成 blob数据
      canvas.toBlob((res) => {
        executeCropData(res, data, taskId)
      }, mimeType.value, props.outputQuality)
    }

    image.onerror = (err) => {
      isCropping.value = false
      emits('onCropError', err)
    }
  }

  reader.onerror = (err) => {
    isCropping.value = false
    emits('onCropError', err)
  }
}

function executeCropData(res: Blob | null, data: unknown, taskId: number) {
  if (!res) {
    isCropping.value = false
    emits('onCropError', new Error('导出图片失败：Canvas 未生成 Blob'))

    return
  }

  if (taskId !== cropTaskId)
    return

  const url = URL.createObjectURL(res)
  const file = new File([res], getOutputFileName(), { type: res.type || mimeType.value })
  const payload: LSCropperCropData = {
    file,
    url,
    data,
    width: Number((data as { w?: number })?.w || 0),
    height: Number((data as { h?: number })?.h || 0),
    type: file.type,
  }

  revokePreviewUrl()
  previewUrl.value = url
  isCropping.value = false
  emits('onCropData', payload)
}

watch(
  () => props.imgUrl,
  () => {
    cropTaskId++
    isCropping.value = false
    revokePreviewUrl()
  },
)

onBeforeUnmount(() => {
  if (previewTimer)
    window.clearTimeout(previewTimer)

  cropTaskId++
  isCropping.value = false
  revokePreviewUrl()
})

defineExpose({
  lsCropperRef,
  clearPreview,
})
</script>

<template>
  <div :class="comClass" :style="rootStyle">
    <!-- 外层固定高度，避免弹窗内子组件根节点无法被父级 scoped 样式命中导致 vue-cropper 高度为 0 -->
    <VueCropper
      ref="lsCropperRef"
      class="ls-cropper-core"
      :class="graphicsType"
      :auto-crop="true"
      :fixed="true"
      :can-move="true"
      :img="imgUrl"
      :limit-min-size="limitMinSize"
      :output-type="outputType"
      :original="false"
      :info-true="true"
      v-bind="$attrs"
      @real-time="realTime"
    ></VueCropper>

    <div v-if="showPreview" :class="previewClasses">
      <div class="ls-cropper-preview__header">
        <span class="ls-cropper-preview__title">{{ previewTitle }}</span>
        <span class="ls-cropper-preview__state">{{ isCropping ? '生成中' : '实时' }}</span>
      </div>
      <div class="ls-cropper-preview__body">
        <img v-if="previewUrl" :src="previewUrl" alt="裁剪结果预览" />
        <div v-else class="ls-cropper-preview__empty">
          {{ previewTip }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ls-cropper {
  position: relative;
  width: 100%;
  min-height: var(--ls-cropper-height);
}

/* scoped 无法直接作用到 vue-cropper 内部根节点，必须用 :deep */
:deep(.vue-cropper.ls-cropper-core),
:deep(.ls-cropper-core.vue-cropper) {
  box-sizing: border-box;
  width: 100%;
  height: var(--ls-cropper-height);
  min-height: var(--ls-cropper-height);
  overflow: hidden;
  background:
    linear-gradient(45deg, rgb(148 163 184 / 10%) 25%, transparent 25%) 0 0 / 20px 20px,
    linear-gradient(-45deg, rgb(148 163 184 / 10%) 25%, transparent 25%) 0 10px / 20px 20px,
    #101827;
  border: 1px solid #d7dde8;
  border-radius: 8px;
}
.ls-cropper-preview {
  width: 100%;
  padding: 12px;
  margin-top: 16px;
  background: #f7f9fc;
  border: 1px solid #e1e7ef;
  border-radius: 8px;
}
.ls-cropper-preview__header {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.ls-cropper-preview__title {
  font-size: 13px;
  font-weight: 600;
  color: #243247;
}
.ls-cropper-preview__state {
  padding: 2px 8px;
  font-size: 12px;
  line-height: 18px;
  color: #0f766e;
  background: #dff7f2;
  border-radius: 999px;
}
.ls-cropper-preview__body {
  display: grid;
  place-items: center;
  height: var(--ls-cropper-preview-height);
  overflow: hidden;
  background:
    linear-gradient(90deg, rgb(36 50 71 / 5%) 1px, transparent 1px) 0 0 / 16px 16px,
    linear-gradient(0deg, rgb(36 50 71 / 5%) 1px, transparent 1px) 0 0 / 16px 16px,
    #ffffff;
  border: 1px dashed #ccd6e3;
  border-radius: 6px;
}
.ls-cropper-preview__body img {
  width: 100%;
  height: 100%;
  object-fit: var(--ls-cropper-preview-fit);
}
.ls-cropper-preview__empty {
  max-width: 220px;
  padding: 0 12px;
  font-size: 13px;
  line-height: 1.5;
  color: #7a8798;
  text-align: center;
}
.ls-cropper-preview--circular .ls-cropper-preview__body img {
  width: min(100%, var(--ls-cropper-preview-height));
  border-radius: 50%;
}
.circular {
  :deep(.cropper-view-box) {
    border-radius: 50%; // 将裁剪框由方形调整为圆形
    outline-color: rgb(20 184 166 / 88%);
  }
  :deep(.cropper-face) {
    background-color: transparent; // 清除裁剪框填充背景色
  }
}
</style>
