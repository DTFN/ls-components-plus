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
  return type?.value && cpoMap.value[type?.value];
});

const errorMsg = ref('文件加载失败，请检查文件是否已损坏！');
let timer: any = null;

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
    if (val) {
      clearTimeout(timer);
    }
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
      cpoMap.value.image = defineAsyncComponent(() => import('./components/Image.vue'));
      break;
    case 'docx':
      cpoMap.value.docx = defineAsyncComponent(() => import('./components/Docx.vue'));
      break;
    case 'xlsx':
      cpoMap.value.xlsx = defineAsyncComponent(() => import('./components/Xlsx.vue'));
      break;
    case 'pdf':
      cpoMap.value.pdf = defineAsyncComponent(() => import('./components/Pdf.vue'));
      break;
    default:
      break;
  }

  timer = setTimeout(() => {
    if (!props.source) {
      ElMessage.error('加载超时，请检查网络后重试！');
      closeLoading();
      previewVisible.value = false;
    }
    clearTimeout(timer);
  }, 20000);
}

const closeLoading = () => {
  timer && clearTimeout(timer);
  props.needLoading && loadInstance.value && loadInstance.value.close();
};

const loadComplete = () => {
  closeLoading();
  emits('loadComplete');
};

const loadError = () => {
  closeLoading();
  console.error(errorMsg.value);
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
@forward '@cpo/_style/preview.scss';
</style>
