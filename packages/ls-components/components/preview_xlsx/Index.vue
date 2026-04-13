<script setup lang="ts" name="LSPreviewXlsx">
/**
 * @summary Excel 表格预览组件 - 基于通用预览层的 XLSX 查看器
 *
 * `LSPreviewXlsx` 基于 `LuckyExcel` / `Luckysheet` 与通用预览基类封装，用于全屏预览 `.xlsx` 文档。
 * 组件通过 `v-model` 控制显示状态，支持加载态、水印、下载按钮和额外操作区插槽；
 * 内部会把通用预览属性以及 `hasPagination`、`onClose` 等透传给 `LSXlsx`，由子组件负责实际表格渲染、关闭与下载行为。
 *
 * @attr {boolean} v-model 控制预览显示 / 隐藏，默认 `false`
 * @attr {File|string} source Excel 文档数据源；文档 API 标注为 `File`，当前 `LSXlsx` 渲染实现也实际依赖 `File`
 * @attr {number|string} zoomSize 缩放尺寸，默认 `1.5`
 * @attr {boolean} needLoading 是否显示加载状态，默认 `true`
 * @attr {object} loadingOption 加载状态配置，默认 `{ text: 'Loading', background: 'rgba(0, 0, 0, 0.3)' }`
 * @attr {boolean} hasDownload 是否显示下载按钮，默认 `false`
 * @attr {object} downloadData 下载数据；点击下载按钮时会通过 `onDownload` 事件传出，默认 `{}`
 * @attr {boolean} hideOnClickModal 点击遮罩层是否关闭预览；文档 API 保留该字段，当前 `LSXlsx` 未消费此属性，默认 `false`
 * @attr {boolean} showWatermark 是否显示水印，默认 `false`
 * @attr {object} watermarkOption 水印配置，具体参考 `el-watermark`，默认 `{}`
 * @attr {boolean} hasPagination 大文件预览时是否启用分页渲染；该属性通过 `$attrs` 透传给内部 `LSXlsx`，默认 `false`
 * @attr {Function} onClose 关闭预览时的回调函数；通过 `$attrs` 透传给内部 `LSXlsx`
 *
 * @slot extra 自定义额外操作区域插槽
 *
 * @event loadComplete Excel 渲染完成事件
 * @event loadError Excel 渲染失败事件
 * @event onDownload 点击下载按钮触发，参数为 `downloadData`
 *
 * @example
 * <LSPreviewXlsx v-model="previewVisible1" :source="source1" :on-close="() => { previewVisible1 = false; }" />
 *
 * @example
 * <LSPreviewXlsx
 *   v-model="previewVisible2"
 *   :source="source1"
 *   :show-watermark="true"
 *   :watermark-option="watermarkOption"
 *   :on-close="() => { previewVisible2 = false; }"
 * />
 *
 * @example
 * <LSPreviewXlsx
 *   v-model="previewVisible3"
 *   :source="source1"
 *   has-download
 *   @on-download="handleXlsxDownload"
 *   :on-close="() => { previewVisible3 = false; }"
 * />
 */
import { lsPreviewProp } from '@cpo/_constants/previewType';
import usePreviewHook from '@cpo/_hooks/usePreviewHook';
import { merge } from 'lodash-es';
import LSXlsx from './Xlsx.vue';

defineOptions({
  name: 'LSPreviewXlsx',
  components: {
    LSXlsx
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

function onDownload(data: any) {
  emits('onDownload', data);
}
</script>

<template>
  <div v-if="previewVisible" :class="comClass">
    <el-watermark v-if="showWatermark" v-bind="watermarkOption" :style="watermarkStyle">
      <LSXlsx v-bind="merge(defAttrs, $attrs)" @load-complete="loadComplete" @load-error="loadError" @on-download="onDownload" />
    </el-watermark>
    <LSXlsx
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
