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
    center: props.center,
    draggable: props.draggable,
    dangerouslyUseHTMLString: props.useHtml,
    showCancelButton: props.showCancelBtn,
    showConfirmButton: props.showConfirmBtn,
    showClose: props.showClose,
    customClass: `${props.customClass} ls-confirm-box`,
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
  <div ref="lsConfirmRef" :class="comClass"></div>
</template>

<style lang="scss" scoped>
.ls-confirm {
  z-index: -1;
  width: 0;
  height: 0;
  opacity: 0;
}
</style>
