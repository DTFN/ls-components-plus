<script setup lang="ts" name="LSFormItem">
/**
 * Form item 组件
 * !!!最多支持101个 el-form-item
 */
import { isEqual } from 'lodash-es';
import { ref, computed } from 'vue';
import { isEmpty } from '../_utils/utils';
import { lsFormItemProps } from './types';
import dayjs from 'dayjs';
import { get, set } from 'lodash-es';

const props = defineProps(lsFormItemProps);

const emits = defineEmits<{
  'update:value': [key: string | number | string[], value: any];
  changeSelect: [value: any, prop: string];
}>();

const modelValue = defineModel<any>();
const FormItemRef = ref();

// 级联多选
const cascaderProps = computed(() => {
  let op = {};
  if (props.type === 'multipleCascader') {
    op = {
      ...props.attrs?.props
    };
  }
  return { ...op, multiple: true };
});

// 下拉框全选
const selectCheckAll = ref(false);
const selectIndeterminate = ref(false);

// 下拉框全选事件
function handleSelectCheckAll(val: any) {
  selectIndeterminate.value = false;

  if (val && props.options && props.options.length) modelValue.value = props.options.map(_ => _.value);
  else modelValue.value = [];
}

// 范围
const range_1 = ref();
const range_2 = ref();

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
    if (['inputRange', 'inputNumberRange'].includes(props.type || '')) {
      range_1.value = get(newVal.value, props?.rangeProps[0] || 'start');
      range_2.value = get(newVal.value, props?.rangeProps[1] || 'end');
    }
    if (!isEmpty(props.prop)) {
      emits('update:value', props.prop, newVal);
    }
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

// 范围赋值
watch(
  [() => range_1.value, () => range_2.value],
  ([val1, val2]) => {
    let vals = {};
    vals = set(vals, props?.rangeProps[0] || 'start', val1);
    vals = set(vals, props?.rangeProps[1] || 'end', val2);
    modelValue.value = vals;
  },
  {
    deep: true
  }
);

// 获取Options label
function getOptionsLabel(value: string | string[], options: any[], multiple?: boolean) {
  let val = props?.labelEmpty;
  if (options && !isEmpty(value)) {
    if (multiple && Array.isArray(value)) {
      val = value.map((item: any) => options.find(_ => _.value === item)?.label).join(',');
    } else {
      val = options.find(_ => _.value === value)?.label;
    }
  }
  return val;
}

function seachCascaderOptions(value: string[], options: any[], index: number = 0, val: string = '') {
  let valStr = val;
  if (!isEmpty(value) && !isEmpty(options)) {
    const f_v = value[index];
    if (!isEmpty(f_v)) {
      const f_o = options.find(_ => _.value === f_v);
      if (props.attrs && props.attrs.hasOwnProperty('show-all-levels') && props.attrs['show-all-levels'] === false) {
        valStr = `${f_o?.label}`;
      } else {
        valStr = `${valStr ? `${valStr}/` : ''}${f_o?.label}`;
      }
      if (!isEmpty(f_o?.children)) {
        valStr = seachCascaderOptions(value, f_o?.children, index + 1, valStr);
      }
    }
  }
  return valStr;
}

// 获取cascader Options label
function getCascaderOptionsLabel(value: string[], options: any[], multiple?: boolean) {
  let val = props?.labelEmpty;
  if (options && !isEmpty(value)) {
    if (multiple) {
      val = '';
      value.forEach((item: any) => {
        val = `${val ? `${val},` : ''}${seachCascaderOptions(item, options)}`;
      });
    } else {
      val = seachCascaderOptions(value, options);
    }
  }
  return val;
}

function readValue(type: string | undefined) {
  const val = modelValue.value;
  if (props?.formatReadValue) {
    return props.formatReadValue(val);
  } else {
    switch (type) {
      case 'switch':
        return val ? '是' : '否';
      case 'date':
        return val ? dayjs(val).format(props.dateFormat) : props?.labelEmpty;
      case 'radio':
        return getOptionsLabel(val, props.options);
      case 'checkbox':
        return getOptionsLabel(val, props.options, true);
      case 'select':
        return getOptionsLabel(val, props.options, props.attrs?.multiple);
      case 'cascader':
        return getCascaderOptionsLabel(val, props.options, props.attrs?.props?.multiple || false);
      case 'multipleCascader':
        return getCascaderOptionsLabel(val, props.options, true);
      case 'inputRange':
      case 'inputNumberRange':
        return `${range_1.value || props?.labelEmpty} ${props.rangeSeparator} ${range_2.value || props?.labelEmpty}`;
      default:
        return isEmpty(val) ? props?.labelEmpty : val;
    }
  }
}

function changeSelect(value: any, prop: string) {
  emits('changeSelect', value, prop);
}

defineExpose({
  FormItemRef
});
</script>

<template>
  <slot v-if="type === 'slot'" :name="prop"></slot>

  <el-form-item v-else ref="FormItemRef" :label="colon ? `${label}：` : label" :prop="prop" :rules="rules" :class="className">
    <template v-if="labelClass || tooltip" #label>
      <div class="ls-form-item-label">
        <span :class="labelClass">{{ label }}</span>

        <el-tooltip v-if="tooltip" effect="dark" placement="top" :content="tooltip">
          <el-icon class="ml-4"><WarningFilled /></el-icon>
        </el-tooltip>

        <span v-if="colon" :class="labelClass">：</span>
      </div>
    </template>

    <!-- 前置插槽 -->
    <slot :name="`${prop}-prepend`" />

    <!-- 只读 -->
    <template v-if="read">
      <slot v-if="$slots[`${prop}-read-slot`]" :name="`${prop}-read-slot`" :value="readValue(type)" />
      <div v-else class="ls-read-text-container">{{ readValue(type) }}</div>
    </template>

    <template v-else>
      <span v-if="type === 'label'">
        <template v-if="isEmpty(modelValue)"> {{ props?.labelEmpty || '--' }} </template>
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
      >
        <template v-if="$slots[`${prop}-input-prefix`]" #prefix>
          <slot :name="`${prop}-input-prefix`" />
        </template>

        <template v-if="$slots[`${prop}-input-suffix`]" #suffix>
          <slot :name="`${prop}-input-suffix`" />
        </template>

        <template v-if="$slots[`${prop}-input-prepend`]" #prepend>
          <slot :name="`${prop}-input-prepend`" />
        </template>

        <template v-if="$slots[`${prop}-input-append`]" #append>
          <slot :name="`${prop}-input-append`" />
        </template>
      </el-input>

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
        :max="99999999"
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
        @change="changeSelect(modelValue, prop as string)"
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

      <!-- 取值范围 -->
      <div v-else-if="type === 'inputRange'" class="ls-input-range">
        <el-input
          v-model.trim="range_1"
          :clearable="true"
          :placeholder="`请输入起始${label}`"
          :disabled="disabled"
          v-bind="attrs && get(attrs || {}, rangeProps[0] || 'start')"
          v-on="(listeners && get(listeners || {}, rangeProps[0] || 'start')) || {}"
        />
        &nbsp;&nbsp;{{ rangeSeparator }}&nbsp;&nbsp;
        <el-input
          v-model.trim="range_2"
          :clearable="true"
          :placeholder="`请输入截止${label}`"
          :disabled="disabled"
          v-bind="attrs && get(attrs || {}, rangeProps[1] || 'end')"
          v-on="(listeners && get(listeners || {}, rangeProps[1] || 'end')) || {}"
        />
      </div>

      <!-- 数字取值范围 -->
      <div v-else-if="type === 'inputNumberRange'" class="ls-input-range">
        <el-input-number
          v-model.trim="range_1"
          :clearable="true"
          :placeholder="`请输入起始${label}`"
          :disabled="disabled"
          v-bind="attrs && get(attrs || {}, rangeProps[0] || 'start')"
          v-on="(listeners && get(listeners || {}, rangeProps[0] || 'start')) || {}"
        />
        &nbsp;&nbsp;{{ rangeSeparator }}&nbsp;&nbsp;
        <el-input-number
          v-model.trim="range_2"
          :clearable="true"
          :placeholder="`请输入截止${label}`"
          :disabled="disabled"
          v-bind="attrs && get(attrs || {}, rangeProps[1] || 'end')"
          v-on="(listeners && get(listeners || {}, rangeProps[1] || 'end')) || {}"
        />
      </div>

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
    padding-bottom: 20px !important;
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
.ls-form-item-label {
  display: flex;
  align-items: center;
}
.ls-read-text-container {
  width: 100%;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
}
.ls-input-range {
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
