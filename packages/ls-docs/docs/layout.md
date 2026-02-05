---
outline: deep
---

# Layout 布局

::: warning 基于el-container二次封装，保留原属性和方法，提供三种布局模式和丰富的自定义选项。
:::

## 目录

- [功能介绍](#功能介绍)
- [使用方式](#使用方式)
  - [布局模式一：顶部导航栏 + 侧边栏 + 内容区域](#布局模式一：顶部导航栏--侧边栏--内容区域)
  - [布局模式二：顶部导航栏 + 内容区域](#布局模式二：顶部导航栏--内容区域)
  - [布局模式三：侧边栏 + 顶部导航栏 + 内容区域](#布局模式三：侧边栏--顶部导航栏--内容区域)
  - [自定义布局样式](#自定义布局样式)
  - [响应式布局](#响应式布局)
  - [与其他组件的集成](#与其他组件的集成)
- [API](#api)
  - [Layout Attributes](#layout-attributes)
  - [Header Attributes](#header-attributes)
  - [Events](#events)
  - [Slots](#slots)
  - [公共样式](#公共样式)

## 功能介绍

LSLayout 组件是对 Element Plus Container 组件的二次封装，提供了以下增强功能：

- 支持三种布局模式，满足不同场景的需求
- 提供丰富的自定义选项，包括头部高度、侧边栏宽度、底部高度等
- 支持自定义 logo、标题和用户信息
- 提供顶部交互功能，支持下拉菜单和命令回调
- 支持丰富的插槽，可自定义各个区域的内容
- 保持与 Element Plus Container 组件的完全兼容性

## 使用方式

### 布局模式一：顶部导航栏 + 侧边栏 + 内容区域

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

### 布局模式二：顶部导航栏 + 内容区域

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

### 布局模式三：侧边栏 + 顶部导航栏 + 内容区域

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

### Layout Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

#### 属性详细说明

| 属性名 | 类型 | 默认值 | 说明 | 使用场景 | 注意事项 |
|-------|------|-------|------|----------|----------|
| mode | string / number | 1 | 布局模式 | 选择不同的布局结构 | 1: 顶部导航栏 + 侧边栏 + 内容区域; 2: 顶部导航栏 + 内容区域; 3: 侧边栏 + 顶部导航栏 + 内容区域 |
| headerHeight | string | 60px | 头部高度 | 调整头部区域的高度 | 需要带单位，如 "50px" |
| showFooter | boolean | false | 是否显示底部 | 控制是否显示底部区域 | 设置为 true 时会显示底部插槽 |
| footerHeight | string | 60px | 底部高度 | 调整底部区域的高度 | 需要带单位，如 "40px" |
| asideWidth | string | 200px | 侧边栏宽度 | 调整侧边栏的宽度 | 需要带单位，如 "220px" |
| showLogo | boolean | true | 是否显示logo | 控制是否显示logo | - |
| logo | string | - | logo地址 | 设置logo的图片地址 | - |
| customCss | string | - | 自定义样式类 | 为布局添加自定义样式类 | 可以添加多个类名，如 "header-gray aside-gray" |
| title | string | - | 头部标题 | 设置头部的标题文本 | - |
| showCommand | boolean | true | 是否显示顶部交互功能 | 控制是否显示顶部的下拉菜单 | mode 为 1/2 时生效 |
| userName | string | Admin | 用户名 | 设置顶部显示的用户名 | - |
| userIcon | string | - | 用户头像 | 设置顶部显示的用户头像 | - |
| commandList | array<{key: string, name: string}> | [] | 顶部交互功能列表 | 设置顶部下拉菜单的选项 | - |

### Header Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="headerTableData" />

#### 属性详细说明

| 属性名 | 类型 | 默认值 | 说明 | 使用场景 | 注意事项 |
|-------|------|-------|------|----------|----------|
| mode | string / number | 1 | 布局模式 | 选择不同的头部布局 | 与 Layout 组件的 mode 保持一致 |
| title | string | - | 头部标题 | 设置头部的标题文本 | - |
| showLogo | boolean | true | 是否显示logo | 控制是否显示logo | - |
| logo | string | - | logo地址 | 设置logo的图片地址 | - |
| height | string | 60px | 头部高度 | 调整头部区域的高度 | 需要带单位，如 "50px" |
| showCommand | boolean | true | 是否显示顶部交互功能 | 控制是否显示顶部的下拉菜单 | - |
| userName | string | Admin | 用户名 | 设置顶部显示的用户名 | - |
| userIcon | string | - | 用户头像 | 设置顶部显示的用户头像 | - |
| commandList | array<{key: string, name: string}> | [] | 顶部交互功能列表 | 设置顶部下拉菜单的选项 | - |

### Events

<ApiIntro :tableColumn="tableMethodColumn" :tableData="tableData2" />

#### 事件详细说明

| 事件名 | 说明 | 参数 | 使用场景 |
|-------|------|------|----------|
| onCommand | 交互功能回调方法 | key | 当用户点击顶部下拉菜单选项时触发 |
| onDropdownCommand | 下拉菜单命令回调 | key | 当用户点击下拉菜单选项时触发 |
| onDropdownCommand2 | 下拉菜单命令回调 | key | 当用户点击下拉菜单选项时触发 |

### Slots

<ApiIntro :tableColumn="tableSlotColumn" :tableData="slotTableData" />

#### 插槽详细说明

| 插槽名 | 说明 | 使用场景 | 注意事项 |
|-------|------|----------|----------|
| header | 头部插槽 | 完全自定义头部内容 | 会替换默认的头部组件 |
| headerLeft | 头部左侧插槽 | 自定义头部左侧内容 | 在默认头部组件中生效 |
| headerRight | 头部右侧插槽 | 自定义头部右侧内容 | 在默认头部组件中生效 |
| headerTitle | 头部标题插槽 | 自定义头部标题内容 | 在默认头部组件中生效 (v1.8.3+) |
| aside | 侧边栏插槽 | 自定义侧边栏内容 | 通常用于放置导航菜单 |
| section | 内容区域插槽 | 自定义内容区域内容 | 页面的主要内容区域 |
| footer | 底部插槽 | 自定义底部内容 | showFooter 为 true 时生效 |

### 公共样式

<ApiIntro :tableColumn="tableStyleColumn" :tableData="styleTableData" />

#### 样式详细说明

| 样式名 | 说明 | 使用场景 | 注意事项 |
|-------|------|----------|----------|
| ls-main-container | 内容区域最外层样式 | 包裹整个内容区域 | 建议在 section 插槽中使用 |
| ls-main-title | 内容区域标题样式 | 用于列表页的标题 | 通常放在 ls-main-container 内部 |
| ls-search-wrap | 搜索区样式 | 包裹搜索表单 | 通常用于放置 LSForm 组件 |
| ls-detail-title | 详情页标题样式 | 用于详情页的标题 | 通常跟在返回按钮之后 |
| ls-edit-from-wrap | 表单外层样式 | 包裹编辑表单 | 通常用于放置 LSForm 组件 |

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

const headerTableData = ref([
  {
    name: 'mode',
    desc: '布局模式',
    type: 'string / number',
    value: '1'
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
    name: 'height',
    desc: '头部高度',
    type: 'string',
    value: '60px'
  },
  {
    name: 'showCommand',
    desc: '是否显示顶部交互功能',
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
    name: 'headerTitle',
    desc: '头部中间区域标题插槽，可自定义头部标题内容(v1.8.3+)',
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
