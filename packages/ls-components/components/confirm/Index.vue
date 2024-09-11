<script setup lang="ts" name="LSConfirm">
import { useNamespace } from '@cpo/_hooks/useNamespace';
import { ElMessageBox } from 'element-plus';
import { emitNames, lsConfirmProps } from './types';

const ns = useNamespace('confirm');
const comClass: string = ns.b();

const props = defineProps(lsConfirmProps);

const emitAll = defineEmits(emitNames);

const visible = defineModel({
  type: Boolean
});

const lsConfirmRef = ref();
const requestData: Ref<any> = ref();

watch(
  () => visible?.value,
  val => {
    if (val) {
      initBox();
    }
  },
  {
    immediate: true,
    deep: true
  }
);

function initBox() {
  ElMessageBox({
    title: props.title,
    message: props.useHtml ? lsConfirmRef?.value?.innerHTML : props.message,
    confirmButtonText: props.confirmBtnTxt,
    cancelButtonText: props.cancelBtnTxt,
    type: props.type,
    center: props.center,
    draggable: props.draggable,
    dangerouslyUseHTMLString: props.useHtml,
    showCancelButton: props.showCancelBtn,
    showConfirmButton: props.showConfirmBtn,
    showClose: props.showClose,
    customClass: props.customClass,
    closeOnClickModal: props.closeOnClickModal,
    closeOnPressEscape: props.closeOnPressEscape,
    appendTo: props.appendTo,
    beforeClose: async (action, instance, done) => {
      if (action === 'confirm') {
        instance.confirmButtonLoading = true;
        if (props.requestApi && typeof props.requestApi === 'function') {
          try {
            requestData.value = await props.requestApi();
          } catch (error) {
            requestData.value = error;
          }
        }
        instance.confirmButtonLoading = false;
        done();
      } else {
        done();
      }
    }
  })
    .then(() => {
      visible.value = false;
      emitAll('onConfirm', requestData);
    })
    .catch(() => {
      visible.value = false;
      emitAll('onCancel');
    });
}
</script>

<template>
  <div ref="lsConfirmRef" :class="comClass">
    <slot name="message"></slot>
  </div>
</template>

<style lang="scss" scoped>
.ls-confirm {
  z-index: -1;
  width: 0;
  height: 0;
  opacity: 0;
}
</style>
