<script setup lang="ts">
import { DialogBtnType } from '@cpo/_types';
import { useOptionHook } from '@cpo/_hooks';

const { getSelOption } = useOptionHook();

const visible = ref(false);
const loading = ref(false);

const btnConfirmConfig: Ref<DialogBtnType> = ref({
  type: 'warning',
  iconConfig: {
    name: 'Edit'
  },
  txt: '确认'
});

const onConfirm = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    visible.value = false;
  }, 2000);
};

const formData = ref({
  username: '',
  password: ''
});
const formItems = ref<FormItemsType[]>([
  {
    type: 'input',
    label: '用户名',
    prop: 'username',
    rules: [
      {
        required: true,
        message: '请输入用户名',
        trigger: 'blur'
      },
      {
        pattern: /^[A-Z0-9]{4,36}$/i,
        message: '4-36位数字字母组合',
        trigger: 'blur'
      }
    ]
  },
  {
    type: 'input',
    label: '密码',
    prop: 'password',
    attrs: {
      'show-password': true,
      maxlength: 24
    },
    rules: [
      {
        required: true,
        message: '请输入用户密码',
        trigger: 'blur'
      },
      {
        pattern: /^[A-Z0-9@]*$/i,
        message: '8-24位数字大小写字母组合',
        trigger: 'blur'
      }
    ]
  },
  {
    type: 'itemSlot',
    prop: 'slotTest',
    label: '自定义插槽'
  }
]);

const contentLoading = ref(false);

function testDialog() {
  contentLoading.value = true;
  visible.value = true;
  setTimeout(() => {
    contentLoading.value = false;
  }, 2000);
}

function optionApi() {
  return new Promise(resolve => {
    const optionData = [
      {
        id: '1',
        name1: '数据',
        name2: '测试',
        value1: 'data',
        value2: 'test'
      }
    ];
    return resolve(optionData);
  });
}

const tooltipContent = ref('测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试End');

onMounted(async () => {
  const data = await getSelOption(optionApi, ['name1', 'name2'], ['id', 'value1', 'value2']);
  console.log(data);
});
</script>

<template>
  <div>
    <LSButton type="primary" @click="testDialog">测试弹窗</LSButton>

    <LSDialog
      v-model="visible"
      :loading="loading"
      title="弹窗Title"
      :content-loading="contentLoading"
      :btn-confirm-config="btnConfirmConfig"
      @on-confirm="onConfirm"
      align-center
    >
      <template #header>
        <div>弹窗头部</div>
      </template>
      <div style="height: 600px">弹窗内容弹窗内</div>
      <LSForm
        ref="FormRef"
        label-position="top"
        inline
        require-asterisk-position="left"
        :loading="loading"
        :colon="false"
        :show-buttons="true"
        :show-reset="true"
        confirm-text="登录"
        :form-data="formData"
        :form-items="formItems"
        :hide-required-asterisk="false"
      >
        <template #slotTest-slot="{ row }"> dasdasd：{{ row }} </template>
      </LSForm>
    </LSDialog>

    <br /><br />

    <LSTooltip width="200" :content="tooltipContent" placement="right" :font-size="18">
      <div class="tooltip-test">{{ tooltipContent }}</div>
    </LSTooltip>

    <br /><br />

    <LSTooltip width="200" :content="tooltipContent" placement="right" :line-clamp="3" :font-size="18">
      <div class="tooltip-test2">{{ tooltipContent }}</div>
    </LSTooltip>
  </div>
</template>

<style lang="scss" scoped>
.ls-tooltip {
  .tooltip-test {
    width: 100%;
    font-size: 18px;

    @extend %text-ellipsis;
  }
  .tooltip-test2 {
    width: 100%;
    font-size: 18px;

    @include overflow-text-hidden(3);
  }
}
</style>
