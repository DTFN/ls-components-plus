<script setup lang="ts" name="LSPreviewImage">
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
