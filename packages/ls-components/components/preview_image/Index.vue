<script setup lang="ts" name="LSPreviewImage">
/**
 * @summary 图片预览组件
 *
 * 用于预览图片文件，支持单张或多张图片预览，支持水印、下载、缩放、旋转等功能
 *
 * @attr {boolean} v-model - 控制预览弹窗显示/隐藏
 * @attr {string} title - 预览标题
 * @attr {string|string[]} source - 图片源（单张图片URL或图片数组）
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
 * @csspart preview-image - 预览容器
 *
 * @example
 * <!-- 单张图片预览 -->
 * <LSPreviewImage v-model="visible" :source="imageUrl" title="图片预览" />
 *
 * @example
 * <!-- 多张图片预览 -->
 * <LSPreviewImage
 *   v-model="visible"
 *   :source="imageList"
 *   :showDownload="true"
 * />
 */
import LSImage from './Image.vue';
import { merge } from 'lodash-es';
import usePreviewHook from '@cpo/_hooks/usePreviewHook';
import { lsPreviewProp } from '@cpo/_constants/previewType';

defineOptions({
  name: 'LSPreviewImage',
  components: {
    LSImage
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
