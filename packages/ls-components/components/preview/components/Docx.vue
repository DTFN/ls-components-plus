<template>
  <div v-if="source" class="file-wrapper">
    <ToolBar v-if="isComplete" :show-zoom="true" @close-file="closeFunc" @zoom-file="zoomFunc"></ToolBar>
    <vue-office-docx class="file-content" :src="source" @rendered="renderedHandler" @error="errorHandler" />
  </div>
</template>

<script setup lang="ts" name="Docx">
import '@vue-office/docx/lib/index.css';
import ToolBar from './ToolBar.vue';
import { emitNames } from '../types';
import type { LSUnionTypeMNS } from '@cpo/_utils/types';

const VueOfficeDocx = defineAsyncComponent(() => import('@vue-office/docx'));
const isComplete = ref(false);
const emits = defineEmits(emitNames);
const props = defineProps({
  source: [String, ArrayBuffer],
  onClose: Function,
  zoomMaxSize: {
    type: [Number, String],
    default: 1.5
  },
  zoomMinSize: {
    type: Number
  }
});
const { source } = toRefs(props);

const closeFunc = () => {
  props.onClose && props.onClose();
  emits('update:source', '');
};

const zoomFunc = (option: LSUnionTypeMNS) => {
  const docxDom: any = document.querySelector('.docx');
  if (docxDom) {
    docxDom.style.transform = `scale(${option.zoomSize})`;
  }
};

const renderedHandler = () => {
  isComplete.value = true;
  emits('loadComplete');
};

const errorHandler = () => {
  isComplete.value = true;
  emits('loadError');
};
</script>

<style lang="scss" scoped>
:deep(.docx) {
  transform: scale(1);
  transform-origin: top center;
}
</style>
