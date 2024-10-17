<script setup lang="ts">
import { MonthDayOptions } from '@/constant';

const FormRef = ref();
const FormRef1 = ref();
const loading = ref(false);
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
    type: 'select',
    label: '日期',
    prop: 'dateList',
    attrs: {
      placeholder: '请选择日期，支持多选',
      multiple: true,
      clearable: true,
      'popper-class': 'ls-sel-calendar-popper'
    },
    options: MonthDayOptions,
    rules: [
      {
        required: true,
        message: '请选择日期，支持多选',
        trigger: 'change'
      }
    ]
  }
]);

const formData1 = ref({
  param1: '输入框',
  param2: undefined,
  param3: undefined,
  param4: undefined,
  param5: '',
  param6: [],
  param7: [],
  param8: false,
  param9: '文本域',
  param10: '插入控件'
});

const formItems1 = ref<FormItemsType[]>([
  {
    type: 'input',
    label: '输入框',
    prop: 'param1'
  },
  {
    type: 'number',
    label: '数字',
    prop: 'param2'
  },
  {
    type: 'select',
    label: '下拉选择框',
    prop: 'param3',
    options: [
      {
        label: '选项1',
        value: '1'
      },
      {
        label: '选项2',
        value: '2'
      }
    ]
  },
  {
    type: 'select',
    label: '多选下拉选择框',
    prop: 'param4',
    options: [
      {
        label: '选项1',
        value: '1'
      },
      {
        label: '选项2',
        value: '2'
      }
    ],
    attrs: {
      multiple: true
    }
  },
  {
    type: 'date',
    label: '日期',
    prop: 'param5'
  },
  {
    type: 'cascader',
    label: '级联',
    prop: 'param6',
    options: [
      {
        value: 'guide',
        label: 'Guide',
        children: [
          {
            value: 'disciplines',
            label: 'Disciplines',
            children: [
              {
                value: 'consistency',
                label: 'Consistency'
              },
              {
                value: 'feedback',
                label: 'Feedback'
              },
              {
                value: 'efficiency',
                label: 'Efficiency'
              },
              {
                value: 'controllability',
                label: 'Controllability'
              }
            ]
          },
          {
            value: 'navigation',
            label: 'Navigation',
            children: [
              {
                value: 'side nav',
                label: 'Side Navigation'
              },
              {
                value: 'top nav',
                label: 'Top Navigation'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    type: 'multipleCascader',
    label: '多选级联',
    prop: 'param7',
    options: [
      {
        value: 'guide',
        label: 'Guide',
        children: [
          {
            value: 'disciplines',
            label: 'Disciplines',
            children: [
              {
                value: 'consistency',
                label: 'Consistency'
              },
              {
                value: 'feedback',
                label: 'Feedback'
              },
              {
                value: 'efficiency',
                label: 'Efficiency'
              },
              {
                value: 'controllability',
                label: 'Controllability'
              }
            ]
          },
          {
            value: 'navigation',
            label: 'Navigation',
            children: [
              {
                value: 'side nav',
                label: 'Side Navigation'
              },
              {
                value: 'top nav',
                label: 'Top Navigation'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    type: 'switch',
    label: '开关',
    prop: 'param8'
  },
  {
    type: 'textarea',
    label: '文本域',
    prop: 'param9'
  },
  {
    type: 'itemSlot',
    label: '插入控件',
    prop: 'param10',
    isRow: true,
    tooltip: '提示语'
  },
  {
    type: 'slot',
    label: '自定义',
    prop: 'param11',
    isRow: true
  }
]);

function onLogin(val: any) {
  if (loading.value) return;
  // FormRef.value.validate().then((res: any) => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    console.log('submit success!', val);
  }, 2000);
  // });
}

const formData_2 = ref<any>({
  label: '嵌套表单',
  item_1: [
    {
      name: undefined,
      age: undefined
    }
  ],
  item_2: [
    {
      type: undefined,
      open: false
    }
  ]
});

const formItems_2 = [
  {
    type: 'label',
    label: '标题',
    prop: 'label'
  },
  {
    type: 'itemSlot',
    label: '第一段',
    prop: 'item_1'
  },
  {
    type: 'slot',
    label: '第二段',
    prop: 'item_2'
  }
];

const item_1_form = [
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    required: true
  },
  {
    type: 'number',
    label: '年龄',
    prop: 'age'
  }
];

const item_2_form = [
  {
    type: 'select',
    label: '类型',
    prop: 'type',
    rules: {
      required: true,
      message: '请选择活动类型',
      trigger: 'blur'
    },
    options: [
      {
        label: '选项1',
        value: 1
      }
    ]
  },
  {
    type: 'switch',
    label: '开启',
    prop: 'open'
  }
];

function addItem_1() {
  formData_2.value.item_1.push({
    name: undefined,
    age: undefined
  });
}

function addItem_2() {
  formData_2.value.item_2.push({
    type: undefined,
    open: false
  });
}

function removeItem_1(index: number) {
  formData_2.value.item_1.splice(index, 1);
}

function removeItem_2(index: number) {
  formData_2.value.item_2.splice(index, 1);
}
</script>

<template>
  <LSForm
    ref="FormRef"
    inline
    label-position="top"
    :loading="loading"
    :colon="false"
    :show-buttons="true"
    :show-reset="false"
    confirm-text="登录"
    :form-data="formData"
    :form-items="formItems"
    :hide-required-asterisk="true"
    @submit="onLogin"
  />

  <br />
  <div>--------------------------------------------------------------------------------------------</div>
  <br />

  <LSForm ref="FormRef1" v-model:form-data="formData1" :form-items="formItems1" :column="2" :loading="loading">
    <template #param9-prepend>
      <div>注意事项</div>
    </template>

    <template #param9-append>
      <div>备注事项</div>
    </template>

    <template #param10-slot>
      <div>插入控件区域</div>
    </template>

    <template #param11>
      <div>自定义区域</div>
    </template>
  </LSForm>

  <LSForm v-model:form-data="formData_2" :form-items="formItems_2">
    <template #item_1-slot>
      <div>
        <div v-for="(item, index) in formData_2.item_1" :key="index" class="item-center mb-24">
          <LSFormItem
            v-for="(fItem, i) in item_1_form"
            :key="i + '-' + index"
            v-bind="fItem"
            class="mr-24"
            v-model="formData_2.item_1[index][fItem.prop]"
            :prop="['item_1', index, fItem.prop]"
          ></LSFormItem>
          <el-button type="danger" class="ml-12" @click="removeItem_1(index)">删除</el-button>
        </div>
        <el-button type="primary" class="mt-12" @click="addItem_1">添加</el-button>
      </div>
    </template>

    <template #item_2>
      <el-form-item label="第二段：" prop="item_2">
        <div>
          <div v-for="(item, index) in formData_2.item_2" :key="index" class="item-center mb-24">
            <LSFormItem
              v-for="(fItem, i) in item_2_form"
              :key="i + '-' + index"
              v-bind="fItem"
              class="mr-24"
              v-model="formData_2.item_2[index][fItem.prop]"
              :prop="['item_2', index, fItem.prop]"
            ></LSFormItem>
            <el-button type="danger" class="ml-12" @click="removeItem_2(index)">删除</el-button>
          </div>
          <el-button type="primary" class="mt-12" @click="addItem_2">添加</el-button>
        </div>
      </el-form-item>
    </template>
  </LSForm>

  <!-- <el-button type="primary" :loading="loading" :disabled="loading" @click="onLogin">登 录</el-button> -->
</template>

<style scoped></style>
