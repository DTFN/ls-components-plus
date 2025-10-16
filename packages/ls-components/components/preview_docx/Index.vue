<script setup lang="ts" name="LSPreviewDocx">
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
</script>

<template>
  <div v-if="previewVisible" :class="comClass" @click="closePreview">
    <el-watermark v-if="showWatermark" v-bind="watermarkOption" :style="watermarkStyle">
      <LSDocx v-bind="merge(defAttrs, $attrs)" @load-complete="loadComplete" @load-error="loadError" />
    </el-watermark>
    <LSDocx v-else v-bind="merge(defAttrs, $attrs)" @load-complete="loadComplete" @load-error="loadError" />
  </div>
</template>

<style lang="scss" scoped>
@forward '@cpo/_style/preview.scss';
</style>
