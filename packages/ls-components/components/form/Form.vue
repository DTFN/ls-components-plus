<script setup lang="ts" name="LSForm">
// Form 公共组件
import type { FormInstance } from 'element-plus';
import { get, set } from 'lodash-es';
import { reactive, ref } from 'vue';
import FormItem from './FormItem.vue';
import { lsFormProps } from './types';

const props = defineProps(lsFormProps);

const emit = defineEmits<{
  submit: [form: any];
  reset: [form: any];
  'update:form-data': [formData: any];
}>();

const attrs = useAttrs();
const buttonsAttrs = computed(() => {
  if (attrs.inline) {
    if (attrs['label-position'] === 'top') {
      return {
        class: 'form-item-buttons '
      };
    }
    return {};
  } else {
    if (attrs['label-position'] === 'top') {
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

defineExpose({
  FormRef,
  validate,
  submitForm
});
</script>

<template>
  <el-form
    ref="FormRef"
    label-position="left"
    :label-width="labelWidth"
    v-bind="$attrs"
    :model="form"
    :disabled="loading || disabled"
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
              v-bind="item"
              :colon="colon"
              :read="disabled"
              @update:value="updateFormData"
            >
              <template v-for="(_slotContent, slotName) in $slots" :key="slotName" #[slotName]>
                <slot :name="slotName" />
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
          v-bind="item"
          :colon="colon"
          :read="disabled"
          @update:value="updateFormData"
        >
          <template v-for="(_slotContent, slotName) in $slots" :key="slotName" #[slotName]>
            <slot :name="slotName" />
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
</template>

<style scoped lang="scss">
.form-item-buttons {
  display: flex !important;
  align-items: flex-end;
}
</style>
