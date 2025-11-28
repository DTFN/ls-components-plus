<script setup lang="ts">
import { useNamespace } from '@cpo/_hooks/useNamespace';
import { lsProps, lsEmits } from './types';
import { Cropper } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';

defineOptions({
  name: 'LSCropper',
  inheritAttrs: false
});

const props = defineProps(lsProps);

const emits = defineEmits(lsEmits);
const ns = useNamespace('cropper');
const comClass: string = ns.b();
const previewClass: string = ns.b('preview');

const cropperRef = ref();

function change(res: any) {
  const { canvas } = res || {};
  const base64Url = canvas?.toDataURL(props.imgType);

  canvas.toBlob(
    (blob: any) => {
      emits('onChange', { ...res, blob, base64Url });
    },
    props.imgType,
    props.quality
  );
}

function ready() {
  emits('onReady');
}

function error() {
  emits('onError');
}

defineExpose({
  cropperRef
});
</script>

<template>
  <div :class="comClass">
    <Cropper
      ref="cropperRef"
      class="cropper"
      :src="imgUrl"
      v-bind="$attrs"
      @change="change"
      @ready="ready"
      @error="error"
    ></Cropper>
    <div :class="previewClass"></div>
  </div>
</template>

<style lang="scss">
.ls-cropper {
  position: relative;
}
</style>
