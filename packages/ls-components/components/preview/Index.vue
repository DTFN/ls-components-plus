<script setup lang="ts">
import { useNamespace } from '@cpo/_hooks/useNamespace';
// import LSImage from './components/Image.vue';
// import LSDocx from './components/Docx.vue';
// import LSXlsx from './components/Xlsx.vue';
// import LSPdf from './components/Pdf.vue';
import { lsPreviewProp } from './types';
import { ElLoading } from 'element-plus';
import { merge } from 'lodash-es';

defineOptions({
  name: 'LSPreview',
  // components: {
  //   LSImage,
  //   LSDocx,
  //   LSXlsx,
  //   LSPdf
  // },
  inheritAttrs: false
});

const emits = defineEmits<{
  (e: 'loadComplete'): void;
  (e: 'loadError'): void;
}>();

const props = defineProps(lsPreviewProp);
const { type, zoomSize } = toRefs(props);

const previewVisible = defineModel({
  type: Boolean
});

const defAttrs: any = reactive({
  zoomSize,
  source: ''
});
const ns = useNamespace('preview');
const comClass: string = ns.b();
const cpoMap: any = shallowRef({
  image: null,
  docx: null,
  xlsx: null,
  pdf: null
});
const loadInstance: any = ref();

const curCpo = computed(() => {
  return type?.value && cpoMap[type?.value];
});

watch(
  () => previewVisible?.value,
  val => {
    if (val) {
      openLoading();
    }
  },
  {
    immediate: true,
    deep: true
  }
);

watch(
  () => props.source,
  val => {
    defAttrs.source = val;
  },
  {
    immediate: true,
    deep: true
  }
);

function openLoading() {
  props.needLoading && (loadInstance.value = ElLoading.service(props.loadingOption));
  switch (props.type) {
    case 'image':
      cpoMap.image = defineAsyncComponent(() => import('./components/Image.vue'));
      break;
    case 'docx':
      cpoMap.docx = defineAsyncComponent(() => import('./components/Docx.vue'));
      break;
    case 'xlsx':
      cpoMap.xlsx = defineAsyncComponent(() => import('./components/Xlsx.vue'));
      break;
    case 'pdf':
      cpoMap.pdf = defineAsyncComponent(() => import('./components/Pdf.vue'));
      break;
    default:
      break;
  }
}

const closeLoading = () => {
  props.needLoading && loadInstance.value && loadInstance.value.close();
};

const loadComplete = () => {
  closeLoading();
  emits('loadComplete');
};

const loadError = () => {
  closeLoading();
  emits('loadError');
};

onBeforeMount(() => {
  previewVisible.value && props.type && openLoading();
});

onBeforeUnmount(() => {
  closeLoading();
});
</script>

<template>
  <div v-if="previewVisible" :class="comClass">
    <component
      v-if="curCpo"
      :is="curCpo"
      v-bind="merge(defAttrs, $attrs)"
      @load-complete="loadComplete"
      @load-error="loadError"
    ></component>
  </div>
</template>

<style lang="scss" scoped>
.ls-preview {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: gray;
}
.file-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
}
:deep(.file-content) {
  width: 100%;
  height: 100%;
  overflow: auto;
  .vue-office-docx {
    height: auto;
    margin: auto;
  }
}
</style>
