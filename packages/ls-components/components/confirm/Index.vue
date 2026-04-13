<script setup lang="ts" name="LSConfirm">
/**
 * @summary 确认框组件 - 基于 Element Plus `ElMessageBox` 的二次封装
 *
 * `LSConfirm` 是一个行为型确认组件：当 `v-model` 变为 `true` 时，会调用
 * `ElMessageBox` 打开确认框；确认或取消后会自动将 `v-model` 置回 `false`。
 * 组件保留了文档中常用的标题、内容、类型、按钮文案、关闭行为、异步请求等配置。
 *
 * @attr {boolean} v-model 控制确认框打开/关闭
 * @attr {string|object} title 确认框标题
 * @attr {string|object|HTMLElement} message 确认框内容
 * @attr {''|'success'|'info'|'warning'|'error'} type 状态类型
 * @attr {string} confirmBtnTxt 确认按钮文案，默认 `确定`
 * @attr {string} cancelBtnTxt 取消按钮文案，默认 `取消`
 * @attr {boolean} showCancelBtn 是否显示取消按钮
 * @attr {boolean} showConfirmBtn 是否显示确认按钮
 * @attr {boolean} showClose 是否显示右上角关闭按钮
 * @attr {boolean} center 是否居中显示
 * @attr {boolean} draggable 是否允许拖拽
 * @attr {boolean} useHtml 是否按 HTML 字符串渲染 `message`
 * @attr {boolean} closeOnClickModal 是否允许点击蒙层关闭
 * @attr {boolean} closeOnPressEscape 是否允许按 `ESC` 关闭
 * @attr {string|HTMLElement} appendTo 弹层挂载目标
 * @attr {string} customClass 自定义弹层类名
 * @attr {object} icon 自定义状态图标
 * @attr {object} closeIcon 自定义关闭图标
 * @attr {Function|null} requestApi 点击确认后执行的异步请求函数
 * @attr {object} requestParams 调用 `requestApi` 时携带的参数
 *
 * @slot 无
 *
 * @event onConfirm(requestData) 点击确认后触发；若配置了 `requestApi`，会返回请求结果的 `ref`
 * @event onCancel 取消、关闭或关闭失败时触发
 *
 * @example
 * <LSConfirm
 *   v-model="visible"
 *   :title="title"
 *   :message="message"
 *   @on-confirm="onConfirm"
 *   @on-cancel="onCancel"
 * />
 */
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
    closeIcon: props.closeIcon,
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
