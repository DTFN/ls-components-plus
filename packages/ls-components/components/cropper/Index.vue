<script setup lang="ts" name="LSCropper">
import { useNamespace } from '@cpo/_hooks/useNamespace'
/**
 * @summary 图片裁剪组件 - 基于 `vue-cropper` 的二次封装
 *
 * `LSCropper` 在保留 `vue-cropper` 原生属性与方法的基础上，补充了统一的
 * 裁剪结果回传与预览能力；支持方形裁剪与圆形裁剪，其中圆形模式会在
 * `vue-cropper` 结果上再经过一次 Canvas 二次裁剪，生成真正的圆形图片。
 *
 * 组件自有属性：
 * @attr {string} imgUrl 待裁剪图片地址
 * @attr {string} fileName 裁剪结果文件名，默认使用时间戳加 `.png`
 * @attr {number} limitMinSize 最小裁剪尺寸，默认 `37`
 * @attr {'square'|'circular'} graphicsType 裁剪形状；`square` 为方形，`circular` 为圆形
 * @attr {'png'|'jpeg'|'webp'} outputType 输出图片格式，默认 `png`
 * @attr {boolean} showPreview 是否显示裁剪结果预览，默认 `true`
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
 * @event onCropData({ file, url, data }) 裁剪结果变化并成功生成文件时触发
 * @event onCropError(error) 图片读取、绘制或裁剪失败时触发
 *
 * @example
 * <LSCropper :img-url="imgUrl" graphics-type="circular" :show-preview="true" @on-crop-data="onCropData" />
 *
 * @example
 * <LSCropper :img-url="imgUrl" graphics-type="square" :fixed="true" :fixed-number="[1, 1]" output-type="jpeg" />
 */
import { VueCropper } from 'vue-cropper'
import { lsEmits, lsProps } from './types'
import 'vue-cropper/dist/index.css'

const props = defineProps(lsProps)
const emits = defineEmits(lsEmits)
const ns = useNamespace('cropper')
const comClass: string = ns.b()

const lsCropperRef = ref()

const previewUrl = ref('')

/** `vue-cropper` 的 getCropBlob 在失败或部分环境下可能传入非 Blob，需归一化后再交给 FileReader */
function normalizeCropBlob(raw: unknown): Blob | null {
  if (raw instanceof Blob)
    return raw
  if (raw instanceof ArrayBuffer)
    return new Blob([raw])

  return null
}

function realTime(data: any) {
  const imgUrl: any = props.imgUrl

  if (imgUrl && lsCropperRef.value) {
    lsCropperRef.value.getCropBlob(async (blob: unknown) => {
      const normalized = normalizeCropBlob(blob)

      if (!normalized) {
        emits('onCropError', new TypeError('裁剪结果无效：未获得 Blob'))

        return
      }
      drawAndClipImage(normalized, data)
    })
  }
}

function drawAndClipImage(blob: Blob, data: any) {
  if (props.graphicsType === 'square') {
    // 若裁剪形状为方形，则不进行二次裁剪，直接返回
    excuteCropData(blob, data)

    return
  }
  const reader = new FileReader()
  reader.readAsDataURL(blob)

  reader.onload = (e: any) => {
    const src = e.target.result
    const image = new Image()
    image.src = src

    image.onload = () => {
      const canvas = document.createElement('canvas')
      const width = image.width
      const height = image.height
      canvas.width = width
      canvas.height = height
      // 计算圆形图片的圆心及图片半径
      const circle = {
        x: width / 2,
        y: height / 2,
        r: width / 2,
      }
      const context: any = canvas.getContext('2d')
      context.clearRect(0, 0, width, height)
      // 在canvas开始绘制前填充白色透明背景并设置透明度，用以清除图片裁剪后透明区域变成黑色的问题
      context.fillStyle = 'rgba(255, 255, 255, 0)'
      context.fillRect(0, 0, width, height)

      // 开始路径画圆，剪切处理
      context.save() // 保存当前canvas的状态
      context.beginPath()
      context.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2, false) // 创建弧/曲线(用于创建圆形或部分圆)
      context.clip() // 从原始画布剪切任意形状和尺寸的区域
      context.drawImage(image, 0, 0)
      context.restore() // 返回之前保存过的路径状态和属性，恢复状态

      // 将canvas图片转换成 blob数据
      const mime = props.outputType === 'jpeg' ? 'image/jpeg' : props.outputType === 'webp' ? 'image/webp' : 'image/png'
      canvas.toBlob((res) => {
        // 内部注释参考 getCropBlob方法 else部分
        excuteCropData(res, data)
      }, mime)
    }

    image.onerror = (err) => {
      emits('onCropError', err)
    }
  }

  reader.onerror = (err) => {
    emits('onCropError', err)
  }
}

function excuteCropData(res: Blob | null, data: any) {
  if (!res) {
    emits('onCropError', new Error('导出图片失败：Canvas 未生成 Blob'))

    return
  }
  const file = new File([res], props.fileName, { type: res.type || `image/${props.outputType}` })
  previewUrl.value = URL.createObjectURL(res)
  emits('onCropData', { file, url: previewUrl.value, data })
}

defineExpose({
  lsCropperRef,
})
</script>

<template>
  <div :class="comClass">
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
    <div v-if="showPreview" class="ls-cropper-preview">
      <img :src="previewUrl" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ls-cropper {
  position: relative;
  width: 100%;
  min-height: 300px;
}

/* scoped 无法直接作用到 vue-cropper 内部根节点，必须用 :deep */
:deep(.vue-cropper.ls-cropper-core),
:deep(.ls-cropper-core.vue-cropper) {
  box-sizing: border-box;
  width: 100%;
  height: 300px;
  min-height: 300px;
}
.ls-cropper-preview {
  width: 100%;
  height: 160px;
  padding: 12px;
  margin-top: 24px;
  text-align: center;
  background-color: #f5f5f5;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.circular {
  :deep(.cropper-view-box) {
    border-radius: 50%; // 将裁剪框由方形调整为圆形
  }
  :deep(.cropper-face) {
    background-color: transparent; // 清除裁剪框填充背景色
  }
}
</style>
