<script setup lang="ts" name="LSPreviewDocx">
/**
 * @summary Word 文档预览组件 - 基于通用预览层的 DOCX 查看器
 *
 * `LSPreviewDocx` 基于 `docx-preview` 与通用预览基类封装，用于全屏预览 `.docx` 文档。
 * 组件通过 `v-model` 控制显示状态，支持加载态、水印、下载按钮、遮罩关闭以及额外操作区插槽；
 * 内部会把通用预览属性透传给 `LSDocx`，由子组件负责实际文档渲染、关闭与下载按钮行为。
 *
 * @attr {boolean} v-model 控制预览显示 / 隐藏，默认 `false`
 * @attr {ArrayBuffer|string} source 文档数据源；文档 API 标注支持 `ArrayBuffer / string`，但当前 `LSDocx` 渲染阶段实际依赖 `ArrayBuffer`
 * @attr {Function} onClose 关闭预览时的回调函数
 * @attr {number|string} zoomSize 缩放尺寸，默认 `1.5`
 * @attr {boolean} needLoading 是否显示加载状态，默认 `true`
 * @attr {object} loadingOption 加载状态配置，默认 `{ text: 'Loading', background: 'rgba(0, 0, 0, 0.3)' }`
 * @attr {boolean} hasDownload 是否显示下载按钮，默认 `false`
 * @attr {object} downloadData 下载数据；点击下载按钮时会通过 `onDownload` 事件传出，默认 `{}`
 * @attr {boolean} hideOnClickModal 点击遮罩层是否关闭预览，默认 `false`
 * @attr {boolean} showWatermark 是否显示水印，默认 `false`
 * @attr {object} watermarkOption 水印配置，具体参考 `el-watermark`，默认 `{}`
 *
 * @slot extra 自定义额外内容插槽
 *
 * @event loadComplete 文档加载完成事件
 * @event loadError 文档加载失败事件
 * @event onDownload 点击下载按钮触发，参数为 `downloadData`
 *
 * @example
 * <LSPreviewDocx v-model="previewVisible1" :source="source1" :onClose="() => { previewVisible1 = false; }" />
 *
 * @example
 * <LSPreviewDocx
 *   v-model="previewVisible2"
 *   :source="source1"
 *   :showWatermark="true"
 *   :watermarkOption="watermarkOption"
 *   :onClose="() => { previewVisible2 = false; }"
 * />
 *
 * @example
 * <LSPreviewDocx
 *   v-model="previewVisible3"
 *   :source="source1"
 *   :hasDownload="true"
 *   @onDownload="handleDocxDownload"
 *   :onClose="() => { previewVisible3 = false; }"
 * />
 */
import LSDocx from './Docx.vue';
import { merge } from 'lodash-es';
import usePreviewHook from '@cpo/_hooks/usePreviewHook';
import { lsPreviewProp } from '@cpo/_constants/previewType';

defineOptions({
  name: 'LSPreviewDocx',
  components: {
    LSDocx
  },
  inheritAttrs: false
});

const emits = defineEmits<{
  (e: 'loadComplete'): void;
  (e: 'loadError'): void;
  (e: 'onDownload', data: any): void;
}>();

const props = defineProps(lsPreviewProp);

const previewVisible = defineModel({
  type: Boolean
});

const { comClass, defAttrs, closeLoading, watermarkStyle } = usePreviewHook(props, previewVisible);

const loadComplete = () => {
  closeLoading();
  emits('loadComplete');
};

const loadError = () => {
  closeLoading();
  emits('loadError');
};

function closePreview(e: any) {
  if (props.hideOnClickModal) {
    if (e.target === e.currentTarget || (e?.target?.className?.includes && e?.target?.className?.includes('docx-wrapper'))) {
      previewVisible.value = false;
    }
  }
}

function onDownload(data: any) {
  emits('onDownload', data);
}
</script>

<template>
  <div v-if="previewVisible" :class="comClass" @click="closePreview">
    <el-watermark v-if="showWatermark" v-bind="watermarkOption" :style="watermarkStyle">
      <LSDocx v-bind="merge(defAttrs, $attrs)" @load-complete="loadComplete" @load-error="loadError" @on-download="onDownload" />
    </el-watermark>
    <LSDocx
      v-else
      v-bind="merge(defAttrs, $attrs)"
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
