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

const title: any = computed(() => {
  return props.title;
});

const message: any = computed(() => {
  return props.message;
});

watch(
  () => message.value,
  val => {
    if (visible?.value && val) {
      updateMessage();
    }
  },
  {
    deep: true
  }
);

async function updateMessage() {
  const msgDom: Element | null = document.querySelector('.ls-confirm-box .el-message-box__message p');
  if (msgDom) {
    if (props.useHtml) {
      msgDom.innerHTML = message.value;
    } else {
      msgDom.textContent = message.value;
    }
  }
}

function initBox() {
  ElMessageBox({
    title,
    message: message.value,
    confirmButtonText: props.confirmBtnTxt,
    cancelButtonText: props.cancelBtnTxt,
    type: props.type,
    icon: props.icon,
    center: props.center,
    draggable: props.draggable,
    dangerouslyUseHTMLString: props.useHtml,
    showCancelButton: props.showCancelBtn,
    showConfirmButton: props.showConfirmBtn,
    showClose: props.showClose,
    customClass: `${comClass} ${props.customClass} ls-confirm-box`,
    closeOnClickModal: props.closeOnClickModal,
    closeOnPressEscape: props.closeOnPressEscape,
    appendTo: props.appendTo,
    beforeClose: async (action, instance, done) => {
      if (action === 'confirm') {
        instance.confirmButtonLoading = true;
        if (props.requestApi && typeof props.requestApi === 'function') {
          try {
            requestData.value = await props.requestApi(props.requestParams);
          } catch (error) {
            requestData.value = error;
          }
        }
        instance.confirmButtonLoading = false;
        done();
      } else {
        if (!instance.confirmButtonLoading) {
          done();
        }
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
  <div style="display: none"></div>
</template>

<style lang="scss">
.ls-confirm {
  .el-message-box__container {
    gap: 4px !important;
    align-items: baseline !important;
  }
  .el-message-box__status.el-message-box-icon--warning {
    top: 3px !important;
    font-size: 16px !important;
  }
  .el-message-box__message p {
    font-size: 14px !important;
  }
}
</style>
