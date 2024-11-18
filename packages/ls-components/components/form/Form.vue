<script setup lang="ts" name="LSForm">
// Form 公共组件
import type { FormInstance } from 'element-plus';
import { get, set } from 'lodash-es';
import { reactive, ref } from 'vue';
import FormItem from './FormItem.vue';
import { lsFormProps } from './types';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

const props = defineProps(lsFormProps);

const emit = defineEmits<{
  submit: [form: any];
  reset: [form: any];
  'update:form-data': [formData: any];
  onChange: [value: any, prop: string];
}>();

const attrs = useAttrs();
const buttonsAttrs = computed(() => {
  if (attrs && attrs.hasOwnProperty('inline')) {
    if (typeof attrs.inline === 'boolean' && attrs.inline === false) {
      return {};
    }
    if (attrs && attrs['label-position'] === 'top') {
      return {
        class: 'form-item-buttons '
      };
    }
    return {};
  } else {
    if (attrs && attrs['label-position'] === 'top') {
      return {
        'label-position': 'top'
      };
    }
  }

  return {
    label: ' '
  };
});

const FormRef = ref<FormInstance>();

let form = reactive<{ [key: string]: any }>({});

// 重置
function resetForm(formEl: FormInstance | undefined) {
  if (!formEl) return;
  formEl.resetFields();
  emit('reset', form);
}

// 校验
async function submitForm(formEl: FormInstance | undefined) {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) emit('submit', form);
    else console.log('error submit!', fields);
  });
}

// 校验方法
function validate() {
  return new Promise((resolve, reject) => {
    if (!FormRef.value) return resolve(false);

    FormRef.value.validate((valid, fields) => {
      if (valid) {
        resolve(form);
      } else {
        console.log('error submit!', fields);
        reject(fields);
      }
    });
  });
}

// 更新表单数据
function updateFormData(key: string | number | string[], value: any) {
  set(form, key, value);
}

watch(
  () => props.formData,
  newVal => {
    form = newVal || {};
  },
  {
    deep: true,
    immediate: true
  }
);

function onChange(value: any, prop: string) {
  emit('onChange', value, prop);
}

defineExpose({
  FormRef,
  validate,
  submitForm
});
</script>

<template>
  <div class="ls-form">
    <el-config-provider :locale="zhCn" :value-on-clear="undefined" :empty-values="[undefined, null]">
      <el-form
        ref="FormRef"
        label-position="left"
        require-asterisk-position="right"
        :label-width="labelWidth"
        :hide-required-asterisk="read ? true : false"
        v-bind="$attrs"
        :model="form"
        :disabled="loading || disabled"
        :class="[read && hasDefReadStyle ? 'show-label' : '']"
      >
        <template v-if="column > 1">
          <el-row :gutter="10">
            <template v-for="item in formItems" :key="item.prop">
              <el-col :span="item.isRow ? 24 : 24 / column">
                <slot v-if="item.type === 'slot'" :name="item.prop" />

                <FormItem
                  v-else
                  :is-value="true"
                  :value="get(form, item.prop)"
                  :colon="colon"
                  :read="read"
                  :label-empty="labelEmpty"
                  v-bind="item"
                  @update:value="updateFormData"
                  @on-change="onChange"
                >
                  <template v-for="(_slotContent, slotName) in $slots" :key="slotName" #[slotName]="{ row }: any">
                    <slot :name="slotName" :row="{ ...row }" />
                  </template>
                </FormItem>
              </el-col>
            </template>
          </el-row>
        </template>

        <template v-else>
          <template v-for="item in formItems" :key="item.prop">
            <slot v-if="item.type === 'slot'" :name="item.prop" />
            <FormItem
              v-else
              :is-value="true"
              :value="get(form, item.prop)"
              :colon="colon"
              :read="read"
              :label-empty="labelEmpty"
              v-bind="item"
              @update:value="updateFormData"
              @on-change="onChange"
            >
              <template v-for="(_slotContent, slotName) in $slots" :key="slotName" #[slotName]="{ row }: any">
                <slot :name="slotName" :row="{ ...row }" />
              </template>
            </FormItem>
          </template>
        </template>

        <slot />

        <el-form-item v-if="showButtons" v-bind="buttonsAttrs" :class="buttonsClass">
          <el-button type="primary" :class="confirmClassName" :loading="loading && showBtnLoading" @click="submitForm(FormRef)">
            {{ confirmText }}
          </el-button>

          <el-button v-if="showReset" @click="resetForm(FormRef)"> 重置 </el-button>
        </el-form-item>
      </el-form>
    </el-config-provider>
  </div>
</template>

<style scoped lang="scss">
.form-item-buttons {
  display: flex !important;
  align-items: flex-end;
}
.show-label {
  margin-bottom: 0;
  border-collapse: collapse;
  border-top: 1px solid #dcdfe6;
  border-right: 1px solid #dcdfe6;
  border-left: 1px solid #dcdfe6;
  :deep() .el-form-item {
    margin-bottom: 0;
    background: var(--bg-color-primary);
    border-bottom: 1px solid #dcdfe6;
    .el-form-item__label {
      height: 100%;
      padding: 0 11px;
      font-weight: bold;
      line-height: 48px;
    }
    .el-form-item__content {
      padding: 0 11px;
      word-break: break-all;
      background: #ffffff;
      border-left: 1px solid #dcdfe6;
    }
  }
}
</style>
