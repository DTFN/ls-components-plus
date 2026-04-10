<script setup lang="ts" name="LSPreviewDocx">
/**
 * @summary Word 文档预览组件
 *
 * 用于预览 DOCX 格式文档，支持关闭回调、水印、下载扩展和额外操作区插槽。
 *
 * @attr {boolean} v-model - 控制预览弹窗显示/隐藏
 * @attr {ArrayBuffer|string} source - 文档数据源
 * @attr {Function} onClose - 关闭预览时的回调函数
 * @attr {boolean} hideOnClickModal - 是否允许点击遮罩关闭
 * @attr {boolean} showWatermark - 是否显示水印
 * @attr {object} watermarkOption - 水印配置，具体参考 `el-watermark`
 * @attr {boolean} hasDownload - 是否显示下载按钮
 * @attr {object} downloadData - 下载数据，点击下载时通过 `onDownload` 事件传出
 *
 * @slot extra - 自定义额外操作区域
 *
 * @event loadComplete - 文档加载完成事件
 * @event loadError - 文档加载失败事件
 * @event onDownload - 点击下载按钮触发，参数为 `downloadData`
 *
 * @csspart preview-docx - 预览容器
 *
 * @example
 * <!-- 基础预览 -->
 * <LSPreviewDocx
 *   v-model="visible"
 *   :source="docxData"
 *   :onClose="() => (visible = false)"
 * />
 *
 * @example
 * <!-- 带下载和水印 -->
 * <LSPreviewDocx
 *   v-model="visible"
 *   :source="docxData"
 *   :onClose="() => (visible = false)"
 *   :showWatermark="true"
 *   :watermarkOption="{ content: '临港集团' }"
 *   :hasDownload="true"
 *   :downloadData="{ fileName: '示例文档.docx' }"
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
