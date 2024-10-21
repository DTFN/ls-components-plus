<script setup lang="ts" name="LSFormItem">
/**
 * Form item 组件
 * !!!最多支持101个 el-form-item
 */
import { isEqual } from 'lodash-es';
import { ref } from 'vue';
import { isEmpty } from '../_utils/utils';
import { lsFormItemProps } from './types';
import dayjs from 'dayjs';

const props = defineProps(lsFormItemProps);

const emits = defineEmits<{
  'update:value': [key: string | number | string[], value: any];
}>();

// 级联多选
const cascaderProps = { multiple: true };
const modelValue = defineModel<any>();
const FormItemRef = ref();

// 下拉框全选
const selectCheckAll = ref(false);
const selectIndeterminate = ref(false);

// 下拉框全选事件
function handleSelectCheckAll(val: any) {
  selectIndeterminate.value = false;

  if (val && props.options && props.options.length) modelValue.value = props.options.map(_ => _.value);
  else modelValue.value = [];
}

// 只有isValue 的时候 才会去赋值给 modelValue
watch(
  () => props.value,
  newVal => {
    if (props.isValue) modelValue.value = newVal;
  },
  {
    immediate: true,
    deep: true
  }
);

watch(
  () => modelValue,
  (newVal: any) => {
    if (!isEmpty(props.prop)) emits('update:value', props.prop, newVal);
  },
  {
    immediate: true,
    deep: true
  }
);

// select 去掉不存在opctions 的value
watch(
  [() => modelValue, () => props.type, () => props.attrs, () => props.options],
  ([newVal, type, attrs, options]: any) => {
    if (type === 'select' && options && options.length && !isEmpty(options)) {
      const values = options.map((_: any) => _.value);

      if (attrs && attrs.multiple) {
        if (!isEmpty(newVal.value)) {
          const value: any[] = [];
          newVal.value.forEach((item: any) => {
            if (values.includes(item)) value.push(item);
          });

          if (!isEqual(value, newVal.value)) modelValue.value = value;
        }

        if (isEmpty(newVal.value)) {
          selectCheckAll.value = false;
          selectIndeterminate.value = false;
        } else {
          const isAll = newVal.value.length === options.length;
          selectCheckAll.value = isAll;
          selectIndeterminate.value = !isAll;
        }
      } else if (attrs && attrs.filterable && attrs['allow-create']) {
        // 添加选项
        modelValue.value = newVal.value;
      } else {
        if (!isEmpty(values) && !isEmpty(newVal.value)) {
          if (!values.includes(newVal.value)) modelValue.value = '';
        }
      }
    }
  },
  {
    immediate: true,
    deep: true
  }
);

// 获取Options label
function getOptionsLabel(value: string | string[], options: any[], multiple?: boolean) {
  let val = '--';
  if (options && !isEmpty(value)) {
    if (multiple && Array.isArray(value)) {
      val = value.map((item: any) => options.find(_ => _.value === item)?.label).join(',');
    } else {
      val = options.find(_ => _.value === value)?.label;
    }
  }
  return val;
}

function readValue(type: string | undefined) {
  const val = modelValue.value;
  switch (type) {
    case 'switch':
      return val ? '是' : '否';
    case 'date':
      return val ? dayjs(val).format(props.dateFormat) : '--';
    case 'radio':
      return getOptionsLabel(val, props.options);
    case 'checkbox':
      return getOptionsLabel(val, props.options, true);
    case 'select':
      return getOptionsLabel(val, props.options, props.attrs?.multiple);
    default:
      return isEmpty(val) ? '--' : val;
  }
}

defineExpose({
  FormItemRef
});
</script>

<template>
  <slot v-if="type === 'slot'" :name="prop"></slot>

  <el-form-item v-else ref="FormItemRef" :label="colon ? `${label}：` : label" :prop="prop" :rules="rules" :class="className">
    <template v-if="labelClass || tooltip" #label>
      <div class="form-item-label">
        <span :class="labelClass">{{ label }}</span>

        <el-tooltip v-if="tooltip" effect="dark" placement="top" :content="tooltip">
          <el-icon class="ml-4"><WarningFilled /></el-icon>
        </el-tooltip>

        <span v-if="colon" :class="labelClass">：</span>
      </div>
    </template>

    <!-- 前置插槽 -->
    <slot :name="`${prop}-prepend`" />

    <template v-if="read">
      <slot v-if="$slots[`${prop}-read-slot`]" :name="`${prop}-read-slot`" />
      <span v-else>{{ readValue(type) }}</span>
    </template>

    <template v-else>
      <span v-if="type === 'label'">
        <template v-if="isEmpty(modelValue)"> -- </template>
        <template v-if="labelNumber">
          <!-- 数字 -->
          <el-text :type="Number(modelValue) < 0 ? 'danger' : ''">
            {{ modelValue }}
          </el-text>
        </template>
        <template v-else>
          {{ modelValue }}
        </template>
      </span>

      <!-- 输入框 -->
      <el-input
        v-else-if="type === 'input'"
        v-model.trim="modelValue"
        :clearable="true"
        :placeholder="`请输入${label}`"
        :disabled="disabled"
        v-bind="attrs"
        v-on="listeners || {}"
      />

      <!-- 文本域 -->
      <el-input
        v-else-if="type === 'textarea'"
        v-model.trim="modelValue"
        type="textarea"
        :rows="4"
        show-word-limit
        maxlength="100"
        :placeholder="`请输入${label}`"
        :disabled="disabled"
        v-bind="attrs"
        v-on="listeners || {}"
      />

      <!-- 数字输入框 -->
      <el-input-number
        v-else-if="type === 'number'"
        v-model.trim="modelValue"
        :placeholder="`请输入${label}`"
        :max="1000000000000000"
        :min="0"
        :controls="false"
        :disabled="disabled"
        v-bind="attrs"
        v-on="listeners || {}"
      />

      <!-- 单选按钮 -->
      <el-radio-group
        v-else-if="type === 'radio'"
        v-model="modelValue"
        :disabled="disabled"
        v-bind="attrs"
        v-on="listeners || {}"
      >
        <el-radio v-for="(option, i) in options" :key="i" :value="option.value" :disabled="option.disabled">
          {{ option.label }}
        </el-radio>
      </el-radio-group>

      <!-- 多选框 -->
      <el-checkbox-group
        v-else-if="type === 'checkbox'"
        v-model="modelValue"
        :disabled="disabled"
        v-bind="attrs"
        v-on="listeners || {}"
      >
        <el-checkbox
          v-for="(option, i) in options"
          :key="i"
          :value="option.value"
          :label="option.label"
          :disabled="option.disabled"
        />
      </el-checkbox-group>

      <!-- 选择框 -->
      <el-select
        v-else-if="type === 'select'"
        v-model="modelValue"
        :clearable="true"
        :placeholder="`请选择${label}`"
        :disabled="disabled"
        v-bind="attrs"
        v-on="listeners || {}"
      >
        <!-- 多选和有数据下支持全选 -->
        <template v-if="attrs && attrs.multiple && !isEmpty(options)" #header>
          <el-checkbox v-model="selectCheckAll" :indeterminate="selectIndeterminate" @change="handleSelectCheckAll">
            全部
          </el-checkbox>
        </template>
        <el-option
          v-for="(option, i) in options"
          :key="`${i}-${option.value}`"
          :label="option.label"
          :value="option.value"
          :disabled="option.disabled"
        />
      </el-select>

      <!-- 日期 -->
      <el-date-picker
        v-else-if="type === 'date'"
        v-model="modelValue"
        type="date"
        :clearable="true"
        :placeholder="`请选择${label}`"
        :disabled="disabled"
        v-bind="attrs"
        v-on="listeners || {}"
      />

      <!-- 级联 -->
      <el-cascader
        v-else-if="type === 'cascader'"
        v-model="modelValue"
        :clearable="true"
        :placeholder="`请选择${label}`"
        :options="options"
        v-bind="attrs"
        v-on="listeners || {}"
      />

      <!-- 多选级联 -->
      <el-cascader
        v-else-if="type === 'multipleCascader'"
        v-model="modelValue"
        :clearable="true"
        :placeholder="`请选择${label}`"
        :options="options"
        v-bind="attrs"
        :props="cascaderProps"
        v-on="listeners || {}"
      />

      <!-- 开关 -->
      <el-switch v-else-if="type === 'switch'" v-model="modelValue" v-bind="attrs" v-on="listeners || {}" />

      <!-- 自定义 -->
      <template v-else-if="type === 'itemSlot'">
        <slot :name="`${prop}-slot`" />
      </template>
    </template>

    <!-- 后置插槽 -->
    <slot :name="`${prop}-append`" />
  </el-form-item>
</template>

<style scoped lang="scss">
:deep(.el-select-dropdown__header) {
  padding: 0 !important;
}
.el-select {
  --el-select-width: 240px;
}
.el-input {
  --el-input-width: 240px;
}
.el-input-number {
  --el-input-width: 240px;

  width: var(--el-input-width);
  &:deep(.el-input__inner) {
    text-align: left;
  }
}
:deep(.el-date-editor) {
  --el-date-editor-width: 240px;
}
:deep(.el-cascader) {
  .el-input {
    --el-input-width: 240px;
  }
}
.el-textarea {
  &:deep(.el-textarea__inner) {
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar:horizontal {
      height: 6px;
    }
    &::-webkit-scrollbar-track {
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgb(0 0 0 / 20%);
      border-radius: 10px;
      transition: all 0.2s ease-in-out;
      &:hover {
        cursor: pointer;
        background-color: rgb(0 0 0 / 30%);
      }
    }
  }
}
.dark {
  .el-textarea {
    &:deep(.el-textarea__inner) {
      &::-webkit-scrollbar-thumb {
        background-color: rgb(255 255 255 / 20%);
        &:hover {
          background-color: rgb(255 255 255 / 40%);
        }
      }
    }
  }
}
.form-item-label {
  display: flex;
  align-items: center;
}
</style>

<style lang="scss">
.el-select-dropdown__header {
  padding: 5px 10px !important;
}
.el-divider--horizontal {
  margin: 0;
}
</style>
