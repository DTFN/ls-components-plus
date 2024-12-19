<script setup lang="ts" name="LSPreviewPdf">
import { useNamespace } from '@cpo/_hooks/useNamespace';
import LSPdf from './Pdf.vue';
import { lsPreviewProp } from './types';
import { ElLoading } from 'element-plus';
import { merge } from 'lodash-es';

defineOptions({
  name: 'LSPreviewPdf',
  components: {
    LSPdf
  },
  inheritAttrs: false
});

const emits = defineEmits<{
  (e: 'loadComplete'): void;
  (e: 'loadError'): void;
}>();

const props = defineProps(lsPreviewProp);
const { zoomSize } = toRefs(props);

const previewVisible = defineModel({
  type: Boolean
});

const defAttrs: any = reactive({
  zoomSize,
  source: ''
});
const ns = useNamespace('preview');
const comClass: string = ns.b();
const loadInstance: any = ref();

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
  emits('loadError');
};

onBeforeMount(() => {
  previewVisible.value && openLoading();
});

onBeforeUnmount(() => {
  closeLoading();
});
</script>

<template>
  <div v-if="previewVisible" :class="comClass">
    <LSPdf v-bind="merge(defAttrs, $attrs)" @load-complete="loadComplete" @load-error="loadError" />
  </div>
</template>

<style lang="scss" scoped>
@forward '@cpo/_style/preview.scss';
</style>
