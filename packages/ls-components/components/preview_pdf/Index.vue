<script setup lang="ts" name="LSPreviewPdf">
import { lsPreviewProp } from '@cpo/_constants/previewType'
import usePreviewHook from '@cpo/_hooks/usePreviewHook'
import { merge } from 'lodash-es'
/**
 * @summary PDF 文档预览组件
 *
 * 用于预览 PDF 文档，支持 cMap 配置、水印、下载扩展、分页控制和额外操作区插槽。
 *
 * @attr {boolean} v-model - 控制预览弹窗显示/隐藏
 * @attr {string|URL|ArrayBuffer} source - PDF 数据源
 * @attr {Function} onClose - 关闭预览时的回调函数
 * @attr {string} cMapUrlPath - PDF 字体映射资源路径
 * @attr {boolean} hideOnClickModal - 是否允许点击遮罩关闭
 * @attr {boolean} showWatermark - 是否显示水印
 * @attr {object} watermarkOption - 水印配置，具体参考 `el-watermark`
 * @attr {boolean} hasDownload - 是否显示下载按钮
 * @attr {object} downloadData - 下载数据，点击下载时通过 `onDownload` 事件传出
 * @attr {boolean} initNoPagination - 是否初始加载全部页面
 *
 * @slot extra - 自定义额外操作区域
 *
 * @event loadComplete - 文档加载完成事件
 * @event loadError - 文档加载失败事件
 * @event onDownload - 点击下载按钮触发，参数为 `downloadData`
 *
 * @csspart preview-pdf - 预览容器
 *
 * @example
 * <!-- 基础预览 -->
 * <LSPreviewPdf
 *   v-model="visible"
 *   :source="pdfUrl"
 *   :cMapUrlPath="cMapUrlPath"
 *   :onClose="() => (visible = false)"
 * />
 *
 * @example
 * <!-- 带下载功能 -->
 * <LSPreviewPdf
 *   v-model="visible"
 *   :source="pdfUrl"
 *   :cMapUrlPath="cMapUrlPath"
 *   :onClose="() => (visible = false)"
 *   :hasDownload="true"
 *   :downloadData="{ fileName: '示例文档.pdf' }"
 * />
 *
 * @example
 * <!-- 页面展示模式（非弹窗） -->
 * <LSPreviewPdf
 *   :source="pdfUrl"
 *   :cMapUrlPath="cMapUrlPath"
 *   :page-mode="true"
 * />
 */
import LSPdf from './Pdf.vue'

defineOptions({
  name: 'LSPreviewPdf',
  components: {
    LSPdf,
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

function closePreview(e: any) {
  if (props.pageMode)
    return

  if (props.hideOnClickModal) {
    if (e.target === e.currentTarget) {
      previewVisible.value = false
    }
  }
}

function onDownload(data: any) {
  emits('onDownload', data)
}
</script>

<template>
  <div v-if="previewVisible !== false || props.pageMode" :class="props.pageMode ? '' : comClass" @click="closePreview">
    <el-watermark v-if="showWatermark" v-bind="watermarkOption" :style="watermarkStyle">
      <LSPdf v-bind="merge(defAttrs, $attrs)" :page-mode="props.pageMode" :wrapper-height="props.wrapperHeight" @load-complete="loadComplete" @load-error="loadError" @on-download="onDownload" />
    </el-watermark>
    <LSPdf
      v-else
      v-bind="merge(defAttrs, $attrs)"
      :page-mode="props.pageMode"
      :wrapper-height="props.wrapperHeight"
      @load-complete="loadComplete"
      @load-error="loadError"
      @on-download="onDownload"
    />

    <div class="ls-preview-extra">
      <slot name="extra"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@forward '@cpo/_style/preview.scss';
</style>
