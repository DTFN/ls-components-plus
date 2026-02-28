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
  onChange: [value: any, prop: string, index?: number];
  changeFormData: [value: any, prop: any, form: any];
}>();

const attrs = useAttrs();
const slots: any = useSlots();

// 统一处理 attrs 中的属性名格式，优先使用后定义的值
function formatAttrs(attrsValue: any) {
  const result: Record<string, any> = {};

  if (!attrsValue) return result;

  Object.entries(attrsValue).forEach(([key, value]) => {
    // 转换成驼峰格式
    const camelKey = key.replace(/-(\w)/g, (_, c) => c.toUpperCase());

    // 如果已存在相同的驼峰key，说明后面的会覆盖前面的值
    result[camelKey] = value;
  });

  return result;
}

const buttonsAttrs = computed(() => {
  const newAttrs = formatAttrs(attrs);

  let buttonsLeft = props.buttonsLeft;
  const buttonsAttrs: any = {
    label: '',
    labelWidth: '0px'
  };

  if (newAttrs && newAttrs.hasOwnProperty('inline')) {
    if (typeof newAttrs['inline'] === 'boolean' && newAttrs['inline'] === false) {
      buttonsLeft = props.buttonsLeft;
    } else {
      buttonsLeft = true;
    }
    if (newAttrs['labelPosition'] === 'top') {
      buttonsAttrs['class'] = 'ls-form-item-buttons';
    }
  }

  if (!buttonsLeft) {
    buttonsAttrs.label = ' ';
    if (newAttrs['labelWidth']) {
      buttonsAttrs.labelWidth = newAttrs['labelWidth'];
    } else {
      buttonsAttrs.labelWidth = 'auto';
    }
  }

  return buttonsAttrs;
});

const FormRef = ref<FormInstance>();

// 表单项类型
const ITEM_TYPES = [
  'label',
  'input',
  'textarea',
  'number',
  'radio',
  'checkbox',
  'select',
  'date',
  'datetimerange',
  'timePicker',
  'timeSelect',
  'cascader',
  'multipleCascader',
  'switch',
  'inputRange',
  'inputNumberRange',
  'slot',
  'itemSlot'
];

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
    else console.warn('error submit!', fields);
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
        console.warn('error submit!', fields);
        reject(fields);
      }
    });
  });
}

// 更新表单数据
function updateFormData(key: string | number | string[], value: any) {
  set(form, key, value);
  emit('changeFormData', value, key, form);
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

function onChange(value: any, prop: string, index?: number) {
  emit('onChange', value, prop, index);
}

defineExpose({
  FormRef,
  validate,
  submitForm,
  resetForm
});
</script>

<template>
  <div class="ls-form">
    <el-config-provider :locale="zhCn" :value-on-clear="undefined" :empty-values="[undefined, null]">
      <el-form
        ref="FormRef"
        label-position="left"
        require-asterisk-position="right"
        label-width="auto"
        :hide-required-asterisk="read ? true : false"
        v-bind="$attrs"
        :model="form"
        :disabled="loading || disabled"
        :class="[read && hasDefReadStyle ? 'show-label' : '']"
        @submit.prevent
      >
        <template v-if="column > 1">
          <el-row :gutter="10">
            <template v-for="(item, i) in formItems" :key="item.prop">
              <el-col v-if="!item.hideColumn" :span="item.isRow ? 24 : 24 / column">
                <slot
                  v-if="item.type === 'slot'"
                  :name="item.slotKey || item.prop"
                  :slot-row="{ ...item }"
                  :value="get(form, item.prop)"
                  :update-form-data="updateFormData"
                />

                <FormItem
                  v-else-if="ITEM_TYPES.includes(item.type)"
                  :model-value="get(form, item.prop)"
                  :colon="colon"
                  :read="read"
                  :label-empty="labelEmpty"
                  :index="i"
                  v-bind="item"
                  @update:model-value="(value: any) => updateFormData(item.prop, value)"
                  @on-change="onChange"
                >
                  <template v-for="(_slotContent, slotName) in slots" :key="slotName" #[slotName]="scoope: any">
                    <slot :name="slotName" v-bind="scoope" />
                  </template>
                </FormItem>

                <slot
                  v-else
                  :name="item.type"
                  :slot-row="{ ...item }"
                  :value="get(form, item.prop)"
                  :update-form-data="updateFormData"
                />
              </el-col>
            </template>
          </el-row>
        </template>

        <template v-else>
          <template v-for="(item, i) in formItems" :key="item.prop">
            <template v-if="!item.hideColumn">
              <slot
                v-if="item.type === 'slot'"
                :name="item.slotKey || item.prop"
                :slot-row="{ ...item }"
                :value="get(form, item.prop)"
                :update-form-data="updateFormData"
              />

              <FormItem
                v-else-if="ITEM_TYPES.includes(item.type)"
                :model-value="get(form, item.prop)"
                :colon="colon"
                :read="read"
                :label-empty="labelEmpty"
                :index="i"
                v-bind="item"
                @update:model-value="(value: any) => updateFormData(item.prop, value)"
                @on-change="onChange"
              >
                <template v-for="(_slotContent, slotName) in slots" :key="slotName" #[slotName]="scoope: any">
                  <slot :name="slotName" v-bind="scoope" />
                </template>
              </FormItem>

              <slot
                v-else
                :name="item.type"
                :slot-row="{ ...item }"
                :value="get(form, item.prop)"
                :update-form-data="updateFormData"
              />
            </template>
          </template>
        </template>

        <slot />

        <el-form-item v-if="showButtons" v-bind="buttonsAttrs" :class="buttonsClass">
          <slot v-if="$slots['buttons-prepend']" name="buttons-prepend" />

          <el-button
            v-if="showSubmit"
            type="primary"
            :class="confirmClassName"
            :loading="loading && showBtnLoading"
            @click="submitForm(FormRef)"
          >
            {{ confirmText }}
          </el-button>

          <el-button v-if="showReset" @click="resetForm(FormRef)">{{ resetText || '重置' }}</el-button>

          <slot v-if="$slots['buttons-append']" name="buttons-append" />
        </el-form-item>
      </el-form>
    </el-config-provider>
  </div>
</template>

<style scoped lang="scss">
.ls-form-item-buttons {
  display: flex !important;
  align-items: flex-end;
}
.show-label {
  margin-bottom: 0;
  border-collapse: collapse;
  border-top: 1px solid #dcdfe6;
  border-right: 1px solid #dcdfe6;
  border-left: 1px solid #dcdfe6;
  :deep(.el-form-item) {
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
