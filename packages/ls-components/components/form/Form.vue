<script setup lang="ts" name="LSForm">
/**
 * @summary 表单组件 - 基于 Element Plus `el-form` 的配置化封装
 *
 * `LSForm` 通过 `formData` 与 `formItems` 配置快速生成表单，内置 18 种常用控件类型，
 * 支持多列布局、禁用/只读模式、按钮区定制、自定义插槽以及 `el-form` 大部分属性与方法透传。
 * 组件内部默认注入中文语言包，并可通过 `ref` 访问 `FormRef`、`validate()`、`submitForm()`、`resetForm()`。
 *
 * 组件自有属性：
 * @attr {object} formData 表单数据对象，支持嵌套路径字段
 * @attr {Array} formItems 表单项配置数组，每项会传给 `LSFormItem`
 * @attr {number} column 表单列数；大于 `1` 时启用多列布局，默认 `1`
 * @attr {boolean} loading 加载状态；为 `true` 时禁用表单，且可联动提交按钮 loading，默认 `false`
 * @attr {boolean} showBtnLoading `loading` 时是否在提交按钮上显示 loading 图标，默认 `true`
 * @attr {boolean} read 是否启用只读模式，默认 `false`
 * @attr {boolean} disabled 是否禁用整个表单，默认 `false`
 * @attr {boolean} showButtons 是否显示底部按钮区域，默认 `true`
 * @attr {string} buttonsClass 按钮区域根元素追加的 class
 * @attr {boolean} buttonsLeft 按钮是否左对齐；行内表单时会自动左对齐，默认 `false`
 * @attr {boolean} showReset 是否显示重置按钮，默认 `true`
 * @attr {boolean} showSubmit 是否显示提交按钮，默认 `true`
 * @attr {string} confirmText 提交按钮文案，默认 `确认`
 * @attr {string} resetText 重置按钮文案，默认 `重置`
 * @attr {string} confirmClassName 提交按钮追加的 class
 * @attr {boolean} colon 是否为 label 追加冒号，默认 `false`
 * @attr {string} labelEmpty 只读模式下空值占位文案，默认 `--`
 * @attr {boolean} hasDefReadStyle 是否为只读表单启用表格风格边框样式，默认 `false`
 *
 * 常用透传属性（来自 `el-form` / `$attrs`）：
 * @attr {boolean} inline 是否启用行内表单
 * @attr {'left'|'right'|'top'} labelPosition label 对齐方式
 * @attr {string|number} labelWidth label 宽度
 * @attr {string} size 表单尺寸
 * @attr {boolean} scrollToError 校验失败时是否滚动到错误项
 *
 * @slot default 在配置表单项之后、按钮区域之前插入自定义内容
 * @slot buttons-prepend 按钮区域前置插槽
 * @slot buttons-append 按钮区域后置插槽
 * @slot [slotKey|prop] 当 `formItems[].type='slot'` 时使用的插槽；插槽名优先取 `slotKey`，否则取 `prop`
 * @slot [type] 当 `formItems[].type` 不属于内置类型时的扩展插槽
 * @slot [FormItemSlots] `LSFormItem` 的内部插槽（如 `-slot`、`-read-slot`、`-input-prefix` 等）会自动透传
 *
 * @event submit(form) 表单校验通过后触发
 * @event reset(form) 点击重置按钮后触发
 * @event onChange(value, prop, index) 任意表单项 change 时触发
 * @event changeFormData(value, prop, form) 通过 `updateFormData` 更新字段值时触发
 *
 * @example
 * <LSForm
 *   :form-data="formData"
 *   :form-items="formItems"
 *   confirm-text="提交"
 *   @submit="handleSubmit"
 * />
 */
import type { FormInstance } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { get, set } from 'lodash-es'
import { reactive, ref } from 'vue'
import FormItem from './FormItem.vue'
import { lsFormProps } from './types'

const props = defineProps(lsFormProps)

const emit = defineEmits<{
  'submit': [form: any]
  'reset': [form: any]
  'update:form-data': [formData: any]
  'onChange': [value: any, prop: string, index?: number]
  'changeFormData': [value: any, prop: any, form: any]
}>()

const attrs = useAttrs()
const slots: any = useSlots()

// 统一处理 attrs 中的属性名格式，优先使用后定义的值
function formatAttrs(attrsValue: any) {
  const result: Record<string, any> = {}

  if (!attrsValue)
    return result

  Object.entries(attrsValue).forEach(([key, value]) => {
    // 转换成驼峰格式
    const camelKey = key.replace(/-(\w)/g, (_, c) => c.toUpperCase())

    // 如果已存在相同的驼峰key，说明后面的会覆盖前面的值
    result[camelKey] = value
  })

  return result
}

const buttonsAttrs = computed(() => {
  const newAttrs = formatAttrs(attrs)

  let buttonsLeft = props.buttonsLeft
  const buttonsAttrs: any = {
    label: '',
    labelWidth: '0px',
  }

  // eslint-disable-next-line no-prototype-builtins
  if (newAttrs && newAttrs.hasOwnProperty('inline')) {
    if (typeof newAttrs.inline === 'boolean' && newAttrs.inline === false) {
      buttonsLeft = props.buttonsLeft
    }
    else {
      buttonsLeft = true
    }

    if (newAttrs.labelPosition === 'top') {
      buttonsAttrs.class = 'ls-form-item-buttons'
    }
  }

  if (!buttonsLeft) {
    buttonsAttrs.label = ' '

    if (newAttrs.labelWidth) {
      buttonsAttrs.labelWidth = newAttrs.labelWidth
    }
    else {
      buttonsAttrs.labelWidth = 'auto'
    }
  }

  return buttonsAttrs
})

const FormRef = ref<FormInstance>()

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
  'itemSlot',
]

let form = reactive<{ [key: string]: any }>({})

// 重置
function resetForm(formEl: FormInstance | undefined) {
  if (!formEl)
    return
  formEl.resetFields()
  emit('reset', form)
}

// 校验
async function submitForm(formEl: FormInstance | undefined) {
  if (!formEl)
    return
  await formEl.validate((valid, fields) => {
    if (valid)
      emit('submit', form)
    else console.warn('error submit!', fields)
  })
}

// 校验方法
function validate() {
  return new Promise((resolve, reject) => {
    if (!FormRef.value)
      return resolve(false)

    FormRef.value.validate((valid, fields) => {
      if (valid) {
        resolve(form)
      }
      else {
        console.warn('error submit!', fields)
        reject(fields)
      }
    })
  })
}

// 更新表单数据
function updateFormData(key: string | number | string[], value: any) {
  set(form, key, value)
  emit('changeFormData', value, key, form)
}

watch(
  () => props.formData,
  (newVal) => {
    form = newVal || {}
  },
  {
    deep: true,
    immediate: true,
  },
)

function onChange(value: any, prop: string, index?: number) {
  emit('onChange', value, prop, index)
}

defineExpose({
  FormRef,
  validate,
  submitForm,
  resetForm,
})
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

          <el-button v-if="showReset" @click="resetForm(FormRef)">
            {{ resetText || '重置' }}
          </el-button>

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
