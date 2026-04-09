<script setup lang="ts" name="LSConfirm">
/**
 * @summary 确认框组件 - 基于 Element Plus MessageBox 的二次封装
 *
 * 这是自研库的确认框组件，提供统一的确认/取消交互弹窗。
 * 支持自定义标题、内容、按钮文本、图标、类型等配置。
 *
 * @attr {boolean} v-model - 双向绑定，控制确认框显示
 * @attr {string} title - 标题
 * @attr {string} message - 消息内容
 * @attr {string} confirmBtnTxt - 确认按钮文本
 * @attr {string} cancelBtnTxt - 取消按钮文本
 * @attr {string} type - 消息类型
 * @attr {any} icon - 图标
 * @attr {boolean} center - 是否居中
 * @attr {boolean} draggable - 是否可拖拽
 * @attr {boolean} useHtml - 是否使用HTML内容
 * @attr {boolean} showCancelBtn - 是否显示取消按钮
 * @attr {boolean} showConfirmBtn - 是否显示确认按钮
 * @attr {boolean} showClose - 是否显示关闭按钮
 * @attr {boolean} closeOnClickModal - 点击遮罩是否关闭
 * @attr {boolean} closeOnPressEscape - 按ESC是否关闭
 * @attr {string|HTMLElement} appendTo - 挂载元素
 * @attr {boolean} beforeClose - 关闭前回调
 * @attr {string} customClass - 自定义类名
 * @attr {string} customStyle - 自定义样式
 * @attr {function} callback - 回调函数
 * @attr {string} lockScroll - 锁定滚动
 * @attr {boolean} showInput - 是否显示输入框
 * @attr {string} inputValue - 输入框值
 * @attr {string} inputPattern - 输入框校验正则
 * @attr {string} inputValidator - 输入框校验函数
 * @attr {string} inputErrorMessage - 输入框错误信息
 * @attr {string} inputPlaceholder - 输入框占位符
 * @attr {string} inputType - 输入框类型
 *
 * @slot 无
 *
 * @event onConfirm - 确认事件
 * @event onCancel - 取消事件
 * @event onClose - 关闭事件
 *
 * @csspart confirm - 确认框容器
 *
 * @example
 * <!-- 基础确认框 -->
 * <LSConfirm
 *   v-model="visible"
 *   title="提示"
 *   message="确定要删除吗？"
 *   @onConfirm="handleConfirm"
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
