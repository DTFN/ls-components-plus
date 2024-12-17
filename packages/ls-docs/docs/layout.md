---
outline: deep
---

# Layout 布局

::: warning 基于el-container二次封装，保留原属性和方法。
:::

## 使用方式

### 1. 布局模式一

<br />

<LSLayout header-height="50px" aside-width="220px" :logo="logo" title="布局模式一" :command-list="commandList" @onCommand="onCommand">
<template #aside>
<LSMenu :menu-config-list="MENU_CONFIG_LIST" class="menu-wrap" style="width: 220px" />
</template>
<template #section>

<div class="ls-main-container">
<div class="ls-main-title">列表区域</div>
<div class="ls-search-wrap">
<LSForm
          ref="FormRef"
          inline
          confirm-text="查询"
          :form-data="formData"
          :form-items="formItems"
          :hide-required-asterisk="true"
        />
</div>
<div class="table-wrap">
<LSTable
          border
          :show-table-index="true"
          :show-pagination="false"
          :show-radio="false"
          :table-column="tableColumnDemo"
          :table-data="tableDataDemo"
        >
</LSTable>
</div>
</div>
</template>
</LSLayout>

::: details 点我查看代码

```js
import { ref } from 'vue';
import logo from '/logo.png';

const MENU_CONFIG_LIST = [
  {
    title: '渔场概览',
    name: 'FisheryOverview',
    path: 'fishery-overview',
    iconConfig: { name: 'House', color: 'red', size: 16 },
    key: '1',
    cpoPath: 'fisheryManager/Overview',
    pCode: 'c1',
    link: 'https://www.lingshu.net/'
  },
  {
    title: '养殖单元管理',
    name: '',
    path: '',
    key: '2',
    cpoPath: '',
    pCode: 'c2',
    children: [
      {
        title: '养殖区域管理',
        name: 'PondGroup',
        path: 'pond-group',
        key: '2-1',
        cpoPath: 'pondManager/Group',
        pCode: 'c21',
        leaf: true,
        children: [
          {
            title: '养殖区域详情',
            name: 'PondGroupDetail',
            path: 'pond-group-detail',
            key: '2-1',
            cpoPath: 'pondManager/GroupDetail',
            pCode: 'c21',
            hideMenu: true
          }
        ]
      },
      {
        title: '养殖池管理',
        name: 'PondManager',
        path: 'pond-manager',
        key: '2-2',
        cpoPath: 'pondManager/Index',
        pCode: 'c22'
      },
      {
        title: '养殖品种',
        name: 'FishCategory',
        path: 'fishCategory',
        key: '2-3',
        cpoPath: 'prodManager/fishCategory/Index',
        pCode: 'c23'
      },
      {
        title: '养殖区域可视化',
        name: 'AreaView',
        path: 'area-view',
        key: '2-4',
        cpoPath: 'pondManager/AreaView',
        pCode: 'c24'
      },
      {
        title: '养殖周期管理',
        name: 'CycleManager',
        path: 'cycle-manager',
        key: '2-5',
        cpoPath: 'pondManager/cycle/CycleManager',
        pCode: 'c25',
        leaf: true,
        children: [
          {
            title: '历史周期',
            name: 'HistoryCycle',
            path: 'history-cycle',
            key: '2-5',
            cpoPath: 'pondManager/cycle/HistoryCycle',
            pCode: 'c25',
            leaf: true,
            hideMenu: true,
            children: [
              {
                title: '历史周期查看',
                name: 'HistoryCycleDetail',
                path: 'history-cycle-detail',
                key: '2-5',
                cpoPath: 'pondManager/cycle/HistoryCycleDetail',
                pCode: 'c25',
                hideMenu: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: '规划管理',
    name: 'PlanManager',
    path: 'plan-manager',
    key: '8',
    cpoPath: 'planManager/Index',
    pCode: 'c7',
    leaf: true,
    children: [
      {
        title: '新增规划',
        name: 'AddPlan',
        path: 'add-plan',
        key: '8',
        cpoPath: 'planManager/Edit',
        pCode: 'c7',
        hideMenu: true
      },
      {
        title: '编辑规划',
        name: 'EditPlan',
        path: 'edit-plan',
        key: '8',
        cpoPath: 'planManager/Edit',
        pCode: 'c7',
        hideMenu: true
      },
      {
        title: '规划详情',
        name: 'PlanDetail',
        path: 'plan-detail',
        key: '8',
        cpoPath: 'planManager/Edit',
        pCode: 'c7',
        hideMenu: true
      }
    ]
  }
];
const formData = ref({
  username: '',
  password: ''
});
const formItems = ref([
  {
    type: 'input',
    label: '用户名',
    prop: 'username',
    read: true,
    readLabel: true,
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
  }
]);

const tableColumn = [
  {
    label: '参数名称',
    prop: 'code'
  },
  {
    label: '参数描述',
    prop: 'name'
  },
  {
    label: '默认值',
    prop: 'defaultValue'
  }
];
const tableData = ref([
  {
    id: '1',
    code: 'EquipmentTypeEnum',
    name: '机组类型',
    defaultValue: '0'
  },
  {
    id: '2',
    code: 'EquipmentCategoryEnum',
    name: '机组类别',
    defaultValue: '1'
  },
  {
    id: '3',
    code: 'capacity',
    name: '装机容量(MW)',
    defaultValue: '0'
  },
  {
    id: '4',
    code: 'ratedPower',
    name: '额定功率',
    defaultValue: '0'
  },
  {
    id: '5',
    code: 'ProductTypeEnum',
    name: '产品类型',
    defaultValue: '1'
  },
  {
    id: '6',
    code: 'BoilerTypeEnum',
    name: '锅炉类型',
    defaultValue: '1'
  },
  {
    id: '7',
    code: 'boiler_productionCapacity',
    name: '生产能力',
    defaultValue: '1'
  },
  {
    id: '8',
    code: 'TurbineTypeEnum',
    name: '汽轮机类型',
    defaultValue: '0'
  },
  {
    id: '9',
    code: 'PressureParamsTypeEnum',
    name: '汽轮机压力参数',
    defaultValue: '0'
  },
  {
    id: '10',
    code: 'turbine_ratedPower',
    name: '汽轮机额定功率',
    defaultValue: '1'
  },
  {
    id: '11',
    code: 'EquipmentTypeEnum',
    name: '机组类型1',
    defaultValue: '2'
  }
]);
const commandList = ref([
  {
    key: 'test',
    name: '测试Command'
  }
]);

function onCommand(key) {
  console.log(key);
}
```

```html
<LSLayout
  header-height="50px"
  aside-width="220px"
  :logo="logo"
  title="Layout 测试"
  :command-list="commandList"
  @onCommand="onCommand"
>
  <template #aside>
    <LSMenu :menu-config-list="MENU_CONFIG_LIST" class="menu-wrap" style="width: 220px" />
  </template>
  <template #section>
    <div class="ls-main-container">
      <div class="ls-main-title">列表区域</div>
      <div class="ls-search-wrap">
        <LSForm
          ref="FormRef"
          inline
          confirm-text="查询"
          :form-data="formData"
          :form-items="formItems"
          :hide-required-asterisk="true"
        />
      </div>
      <div class="table-wrap">
        <LSTable
          border
          :show-table-index="true"
          :show-pagination="false"
          :show-radio="false"
          :table-column="tableColumn"
          :table-data="tableData"
        >
          <el-table-column prop="operate" label="操作" width="120px"> </el-table-column>
        </LSTable>
      </div>
    </div>
  </template>
</LSLayout>
```

:::

### 2. 布局模式二

<br />
<LSLayout header-height="50px" aside-width="220px" :logo="logo" title="布局模式二" mode="2" :command-list="commandList">
  <template #section> 布局模式二 </template>
</LSLayout>

::: details 点击我查看代码

```html
<LSLayout header-height="50px" aside-width="220px" :logo="logo" title="布局模式二" mode="2">
  <template #section> 布局模式二 </template>
</LSLayout>
```

:::

### 3. 布局模式三

<br />
<LSLayout
  header-height="50px"
  aside-width="220px"
  :logo="logo"
  title="布局模式三"
  mode="3"
  :command-list="commandList"
>
  <template #aside>
    <LSMenu :menu-config-list="MENU_CONFIG_LIST" class="menu-wrap" style="width: 220px" />
  </template>
  <template #headerLeft>
    <LSIcon name="House" color="red" />
  </template>
  <template #section> Layout 测试3 </template>
</LSLayout>

::: details 点击我查看代码

```js
const MENU_CONFIG_LIST = [
  {
    title: '渔场概览',
    name: 'FisheryOverview',
    path: 'fishery-overview',
    iconConfig: { name: 'House', color: 'red', size: 16 },
    key: '1',
    cpoPath: 'fisheryManager/Overview',
    pCode: 'c1',
    link: 'https://www.lingshu.net/'
  },
  {
    title: '养殖单元管理',
    name: '',
    path: '',
    key: '2',
    cpoPath: '',
    pCode: 'c2',
    children: [
      {
        title: '养殖区域管理',
        name: 'PondGroup',
        path: 'pond-group',
        key: '2-1',
        cpoPath: 'pondManager/Group',
        pCode: 'c21',
        leaf: true,
        children: [
          {
            title: '养殖区域详情',
            name: 'PondGroupDetail',
            path: 'pond-group-detail',
            key: '2-1',
            cpoPath: 'pondManager/GroupDetail',
            pCode: 'c21',
            hideMenu: true
          }
        ]
      },
      {
        title: '养殖池管理',
        name: 'PondManager',
        path: 'pond-manager',
        key: '2-2',
        cpoPath: 'pondManager/Index',
        pCode: 'c22'
      },
      {
        title: '养殖品种',
        name: 'FishCategory',
        path: 'fishCategory',
        key: '2-3',
        cpoPath: 'prodManager/fishCategory/Index',
        pCode: 'c23'
      },
      {
        title: '养殖区域可视化',
        name: 'AreaView',
        path: 'area-view',
        key: '2-4',
        cpoPath: 'pondManager/AreaView',
        pCode: 'c24'
      },
      {
        title: '养殖周期管理',
        name: 'CycleManager',
        path: 'cycle-manager',
        key: '2-5',
        cpoPath: 'pondManager/cycle/CycleManager',
        pCode: 'c25',
        leaf: true,
        children: [
          {
            title: '历史周期',
            name: 'HistoryCycle',
            path: 'history-cycle',
            key: '2-5',
            cpoPath: 'pondManager/cycle/HistoryCycle',
            pCode: 'c25',
            leaf: true,
            hideMenu: true,
            children: [
              {
                title: '历史周期查看',
                name: 'HistoryCycleDetail',
                path: 'history-cycle-detail',
                key: '2-5',
                cpoPath: 'pondManager/cycle/HistoryCycleDetail',
                pCode: 'c25',
                hideMenu: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: '规划管理',
    name: 'PlanManager',
    path: 'plan-manager',
    key: '8',
    cpoPath: 'planManager/Index',
    pCode: 'c7',
    leaf: true,
    children: [
      {
        title: '新增规划',
        name: 'AddPlan',
        path: 'add-plan',
        key: '8',
        cpoPath: 'planManager/Edit',
        pCode: 'c7',
        hideMenu: true
      },
      {
        title: '编辑规划',
        name: 'EditPlan',
        path: 'edit-plan',
        key: '8',
        cpoPath: 'planManager/Edit',
        pCode: 'c7',
        hideMenu: true
      },
      {
        title: '规划详情',
        name: 'PlanDetail',
        path: 'plan-detail',
        key: '8',
        cpoPath: 'planManager/Edit',
        pCode: 'c7',
        hideMenu: true
      }
    ]
  }
];
```

```html
<LSLayout header-height="50px" aside-width="220px" :logo="logo" title="布局模式三" mode="3" :command-list="commandList">
  <template #aside>
    <LSMenu :menu-config-list="MENU_CONFIG_LIST" class="menu-wrap" style="width: 220px" />
  </template>
  <template #headerLeft>
    <LSIcon name="House" color="red" />
  </template>
  <template #section> Layout 测试3 </template>
</LSLayout>
```

:::

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

### 2. Methods，通过emit抛出的可使用方法

<ApiIntro :tableColumn="tableMethodColumn" :tableData="tableData2" />

### 3. slots

<ApiIntro :tableColumn="tableSlotColumn" :tableData="slotTableData" />

### 4. 公共样式

<ApiIntro :tableColumn="tableStyleColumn" :tableData="styleTableData" />

<script setup>
import { tableColumn, tableMethodColumn, tableSlotColumn, tableStyleColumn } from '../constant'
import { ref } from 'vue';
import logo from '/logo.png';

const MENU_CONFIG_LIST = [
  {
    title: '渔场概览',
    name: 'FisheryOverview',
    path: 'fishery-overview',
    iconConfig: { name: 'House', color: 'red', size: 16 },
    key: '1',
    cpoPath: 'fisheryManager/Overview',
    pCode: 'c1',
    link: 'https://www.lingshu.net/'
  },
  {
    title: '养殖单元管理',
    name: '',
    path: '',
    key: '2',
    cpoPath: '',
    pCode: 'c2',
    children: [
      {
        title: '养殖区域管理',
        name: 'PondGroup',
        path: 'pond-group',
        key: '2-1',
        cpoPath: 'pondManager/Group',
        pCode: 'c21',
        leaf: true,
        children: [
          {
            title: '养殖区域详情',
            name: 'PondGroupDetail',
            path: 'pond-group-detail',
            key: '2-1',
            cpoPath: 'pondManager/GroupDetail',
            pCode: 'c21',
            hideMenu: true
          }
        ]
      },
      {
        title: '养殖池管理',
        name: 'PondManager',
        path: 'pond-manager',
        key: '2-2',
        cpoPath: 'pondManager/Index',
        pCode: 'c22'
      },
      {
        title: '养殖品种',
        name: 'FishCategory',
        path: 'fishCategory',
        key: '2-3',
        cpoPath: 'prodManager/fishCategory/Index',
        pCode: 'c23'
      },
      {
        title: '养殖区域可视化',
        name: 'AreaView',
        path: 'area-view',
        key: '2-4',
        cpoPath: 'pondManager/AreaView',
        pCode: 'c24'
      },
      {
        title: '养殖周期管理',
        name: 'CycleManager',
        path: 'cycle-manager',
        key: '2-5',
        cpoPath: 'pondManager/cycle/CycleManager',
        pCode: 'c25',
        leaf: true,
        children: [
          {
            title: '历史周期',
            name: 'HistoryCycle',
            path: 'history-cycle',
            key: '2-5',
            cpoPath: 'pondManager/cycle/HistoryCycle',
            pCode: 'c25',
            leaf: true,
            hideMenu: true,
            children: [
              {
                title: '历史周期查看',
                name: 'HistoryCycleDetail',
                path: 'history-cycle-detail',
                key: '2-5',
                cpoPath: 'pondManager/cycle/HistoryCycleDetail',
                pCode: 'c25',
                hideMenu: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: '规划管理',
    name: 'PlanManager',
    path: 'plan-manager',
    key: '8',
    cpoPath: 'planManager/Index',
    pCode: 'c7',
    leaf: true,
    children: [
      {
        title: '新增规划',
        name: 'AddPlan',
        path: 'add-plan',
        key: '8',
        cpoPath: 'planManager/Edit',
        pCode: 'c7',
        hideMenu: true
      },
      {
        title: '编辑规划',
        name: 'EditPlan',
        path: 'edit-plan',
        key: '8',
        cpoPath: 'planManager/Edit',
        pCode: 'c7',
        hideMenu: true
      },
      {
        title: '规划详情',
        name: 'PlanDetail',
        path: 'plan-detail',
        key: '8',
        cpoPath: 'planManager/Edit',
        pCode: 'c7',
        hideMenu: true
      }
    ]
  }
];
const formData = ref({
  username: '',
  password: ''
});
const formItems = ref([
  {
    type: 'input',
    label: '用户名',
    prop: 'username',
    read: true,
    readLabel: true,
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
  }
]);

const tableColumnDemo = [
  {
    label: '参数名称',
    prop: 'code'
  },
  {
    label: '参数描述',
    prop: 'name'
  },
  {
    label: '默认值',
    prop: 'defaultValue'
  }
];
const tableDataDemo = ref([
  {
    id: '1',
    code: 'EquipmentTypeEnum',
    name: '机组类型',
    defaultValue: '0'
  },
  {
    id: '2',
    code: 'EquipmentCategoryEnum',
    name: '机组类别',
    defaultValue: '1'
  },
  {
    id: '3',
    code: 'capacity',
    name: '装机容量(MW)',
    defaultValue: '0'
  },
  {
    id: '4',
    code: 'ratedPower',
    name: '额定功率',
    defaultValue: '0'
  },
  {
    id: '5',
    code: 'ProductTypeEnum',
    name: '产品类型',
    defaultValue: '1'
  },
  {
    id: '6',
    code: 'BoilerTypeEnum',
    name: '锅炉类型',
    defaultValue: '1'
  },
  {
    id: '7',
    code: 'boiler_productionCapacity',
    name: '生产能力',
    defaultValue: '1'
  },
  {
    id: '8',
    code: 'TurbineTypeEnum',
    name: '汽轮机类型',
    defaultValue: '0'
  },
  {
    id: '9',
    code: 'PressureParamsTypeEnum',
    name: '汽轮机压力参数',
    defaultValue: '0'
  },
  {
    id: '10',
    code: 'turbine_ratedPower',
    name: '汽轮机额定功率',
    defaultValue: '1'
  },
  {
    id: '11',
    code: 'EquipmentTypeEnum',
    name: '机组类型1',
    defaultValue: '2'
  }
]);
const commandList = ref([
  {
    key: 'test',
    name: '测试Command'
  }
]);

function onCommand(key) {
  console.log(key);
}

const tableData = ref([
  {
    name: 'mode',
    desc: '布局模式，可选项：1 / 2 / 3',
    type: 'string / number',
    value: '1'
  },
  {
    name: 'headerHeight',
    desc: '头部高度，传值需带单位（px）',
    type: 'string',
    value: '60px'
  },
  {
    name: 'showFooter',
    desc: '是否显示底部',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'footerHeight',
    desc: '底部高度，传值需带单位（px）',
    type: 'string',
    value: '60px'
  },
  {
    name: 'asideWidth',
    desc: '侧边栏宽度，传值需带单位（px）',
    type: 'string',
    value: '200px'
  },
  {
    name: 'showAsideCommand',
    desc: '是否显示侧边栏顶部交互功能，mode 为 3 时生效',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'title',
    desc: '头部标题',
    type: 'string',
    value: '-'
  },
  {
    name: 'showLogo',
    desc: '是否显示logo',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'logo',
    desc: 'logo地址',
    type: 'string',
    value: '-'
  },
  {
    name: 'showCommand',
    desc: '是否显示顶部交互功能，mode 为 1/2 时生效',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'userName',
    desc: '用户名',
    type: 'string',
    value: 'Admin'
  },
  {
    name: 'userIcon',
    desc: '用户头像',
    type: 'string',
    value: '-'
  },
  {
    name: 'commandList',
    desc: '顶部交互功能列表',
    type: 'array<key, name>',
    value: '[]'
  }
]);

const tableData2 = ref([
  {
    name: 'onCommand',
    desc: '交互功能回调方法，返回的key对应传入的commandList中的key',
    type: 'function',
    value: 'key'
  }
])

const slotTableData = ref([
  {
    name: 'header',
    desc: '头部插槽，可自定义头部内容',
  },
  {
    name: 'headerLeft',
    desc: '默认头部左侧插槽，可自定义头部左侧内容',
  },
  {
    name: 'headerRight',
    desc: '默认头部右侧插槽，可自定义头部右侧内容',
  },
  {
    name: 'aside',
    desc: '侧边栏插槽，可自定义侧边栏内容',
  },
  {
    name: 'section',
    desc: '内容区域插槽，可自定义内容区域内容',
  },
  {
    name: 'footer',
    desc: '底部插槽，可自定义底部内容，showFooter 为 true 时生效',
  }
])

const styleTableData = ref([
  {
    name: 'ls-main-container',
    desc: '内容区域最外层样式',
  },
  {
    name: 'ls-main-title',
    desc: '内容区域标题样式，常用于列表页',
  },
  {
    name: 'ls-search-wrap',
    desc: '内容区域，搜索区样式，作用于搜索区域外层',
  },
  {
    name: 'ls-detail-title',
    desc: '详情页标题样式，常用于详情页，跟在返回之后',
  },
  {
    name: 'ls-edit-from-wrap',
    desc: '详情页内容区域样式，常用于表单外层',
  }
])
</script>

<style lang="scss">
.menu-wrap {
  width: 200px;
  padding: 0 !important;
  margin: 0 !important;
  ul {
    padding: 0 !important;
    margin: 0 !important;
  }
  li {
    margin: 0 !important;
  }
}
</style>
