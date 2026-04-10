<script setup lang="ts" name="LSPreviewImage">
/**
 * @summary 图片预览组件
 *
 * 用于预览单张或多张图片，支持关闭回调、水印、下载扩展以及查看器内容插槽。
 *
 * @attr {boolean} v-model - 控制预览弹窗显示/隐藏
 * @attr {string|string[]} source - 图片源（单张图片 URL 或图片数组）
 * @attr {Function} onClose - 关闭预览时的回调函数
 * @attr {boolean} hideOnClickModal - 是否允许点击遮罩关闭
 * @attr {boolean} showWatermark - 是否显示水印
 * @attr {object} watermarkOption - 水印配置，具体参考 `el-watermark`
 * @attr {boolean} hasDownload - 是否显示下载按钮
 * @attr {object} downloadData - 下载数据，点击下载时通过 `onDownload` 事件传出
 *
 * @slot viewer - 自定义图片查看器内容
 * @slot extra - 自定义额外操作区域
 *
 * @event loadComplete - 图片加载完成事件
 * @event loadError - 图片加载失败事件
 * @event onDownload - 点击下载按钮触发，参数为 `downloadData`
 *
 * @csspart preview-image - 预览容器
 *
 * @example
 * <!-- 单张图片预览 -->
 * <LSPreviewImage
 *   v-model="visible"
 *   :source="imageUrl"
 *   :onClose="() => (visible = false)"
 * />
 *
 * @example
 * <!-- 多张图片预览并启用下载 -->
 * <LSPreviewImage
 *   v-model="visible"
 *   :source="imageList"
 *   :onClose="() => (visible = false)"
 *   :hasDownload="true"
 *   :downloadData="{ fileName: '图片预览资源' }"
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
