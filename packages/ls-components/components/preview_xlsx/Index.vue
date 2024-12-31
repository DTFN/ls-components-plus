<script setup lang="ts" name="LSPreviewXlsx">
import LSXlsx from './Xlsx.vue';
import { merge } from 'lodash-es';
import usePreviewHook from '@cpo/_hooks/usePreviewHook';
import { lsPreviewProp } from '@cpo/_constants/previewType';

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
    <LSXlsx v-bind="merge(defAttrs, $attrs)" @load-complete="loadComplete" @load-error="loadError" />
  </div>
</template>

<style lang="scss" scoped>
@forward '@cpo/_style/preview.scss';
</style>
