<script setup lang="ts" name="LSPreviewDocx">
/**
 * @summary Word文档预览组件
 *
 * 用于预览DOCX格式的Word文档，支持水印、下载等功能
 *
 * @attr {boolean} v-model - 控制预览弹窗显示/隐藏
 * @attr {string} title - 预览标题
 * @attr {string} source - 文档数据源
 * @attr {boolean} hideOnClickModal - 是否允许点击遮罩关闭
 * @attr {boolean} showWatermark - 是否显示水印
 * @attr {object} watermarkOption - 水印配置
 * @attr {boolean} showDownload - 是否显示下载按钮
 * @attr {function} beforeDownload - 下载前回调
 * @attr {string} customClass - 自定义类名
 * @attr {object} modalStyle - 弹窗样式
 * @attr {boolean} showErrorMsg - 是否显示错误信息
 *
 * @slot 无
 *
 * @event loadComplete - 加载完成事件
 * @event loadError - 加载错误事件
 * @event onDownload - 下载事件
 *
 * @csspart preview-docx - 预览容器
 *
 * @example
 * <!-- 基础预览 -->
 * <LSPreviewDocx v-model="visible" :source="docxData" title="文档预览" />
 *
 * @example
 * <!-- 带水印 -->
 * <LSPreviewDocx
 *   v-model="visible"
 *   :source="docxData"
 *   :showWatermark="true"
 *   :watermarkOption="{ content: '机密' }"
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
