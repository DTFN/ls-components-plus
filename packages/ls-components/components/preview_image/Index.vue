<script setup lang="ts" name="LSPreviewImage">
import LSImage from './Image.vue';
import { merge } from 'lodash-es';
import usePreviewHook from '@cpo/_hooks/usePreviewHook';
import { lsPreviewProp } from '@cpo/_constants/prviewType';

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
}>();

const props = defineProps(lsPreviewProp);

const previewVisible = defineModel({
  type: Boolean
});

const { comClass, defAttrs, closeLoading } = usePreviewHook(props, previewVisible);

const loadComplete = () => {
  closeLoading();
  emits('loadComplete');
};

const loadError = () => {
  closeLoading();
  emits('loadError');
};
</script>

<template>
  <div v-if="previewVisible" :class="comClass">
    <LSImage v-bind="merge(defAttrs, $attrs)" @load-complete="loadComplete" @load-error="loadError" />
  </div>
</template>

<style lang="scss" scoped>
@forward '@cpo/_style/preview.scss';
</style>
