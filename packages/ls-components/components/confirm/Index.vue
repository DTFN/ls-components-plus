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
  ElMessageBox.confirm(props.message, props.title, {
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
    appendTo: document.getElementById('lsConfirm') || '',
    beforeClose: async (action, instance, done) => {
      if (action === 'confirm') {
        instance.confirmButtonLoading = true;
        if (props.requestApi && typeof props.requestApi === 'function') {
          requestData.value = await props.requestApi();
        }
        instance.confirmButtonLoading = false;
        done();
      } else {
        done();
      }
    }
  })
    .then(() => {
      emitAll('onConfirm', requestData);
    })
    .catch(() => {
      emitAll('onCancel');
    });
}
</script>

<template>
  <div id="lsConfirm" :class="comClass"></div>
</template>

<style lang="scss" scoped></style>
