<script setup lang="ts">
import { useNamespace } from '@cpo/_hooks/useNamespace';
import LSImage from './components/Image.vue';
import { lsPreviewProp } from './types';
import { ElLoading } from 'element-plus';
import { isArray } from '@cpo/_utils/check';

defineOptions({
  name: 'LSPreview',
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

watch(
  () => previewVisible?.value,
  val => {
    if (val && checkSource()) {
      openLoading();
    }
  }
);

const defAttrs: any = reactive({
  zoomSize,
  source: props.source
});
const ns = useNamespace('preview');
const previewClass: string = ns.b();
const cpoMap: any = reactive({
  image: LSImage
});
const loadInstance: any = ref();

const curCpo = computed(() => {
  return type?.value && cpoMap[type?.value];
});

function openLoading() {
  props.type !== 'pdf' && props.needLoading && (loadInstance.value = ElLoading.service(props.loadingOption));
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

function checkSource() {
  let status: Boolean = true;
  const type: string = props.type || '';
  const source: Array<string> = props.source || [];
  switch (type) {
    case 'image':
      if (!source || !isArray(source) || source.length <= 0) {
        ElMessage.error('图片地址不能为空！');
        status = false;
      }
      break;

    default:
      break;
  }
  previewVisible.value = Boolean(status);
  return status;
}

onBeforeMount(() => {
  previewVisible.value && props.type && openLoading();
});

onBeforeUnmount(() => {
  closeLoading();
});
</script>

<template>
  <div v-if="previewVisible" :class="previewClass">
    <component
      :is="{ ...curCpo }"
      v-bind="Object.assign(defAttrs, $attrs)"
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
  background-color: rgba($color: #000000, $alpha: 60%);
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
