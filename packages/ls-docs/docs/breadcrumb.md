---
outline: deep
---

# Breadcrumb 面包屑

::: warning 基于el-breadcrumb二次封装，保留原属性和方法。
:::

## 使用方式

### 1. 基本使用（根据vue-router自动渲染）

LSBreadcrumb组件可以根据路由配置自动生成面包屑，需要在router数据结构上添加meta配置bcList数据：

```js
[
  {
    path: '/button',
    name: 'Button',
    meta: {
      key: '1',
      title: 'Button 按钮',
      bcList: [
        {
          title: '首页',
          name: 'Home'
        },
        {
          title: '组件库',
          name: 'Components'
        },
        {
          title: 'Button 按钮',
          name: 'Button'
        }
      ]
    }
  }
];
```

在模板中使用：

```html
<LSBreadcrumb />
```

### 2. 自定义面包屑

<br />

<ClientOnly>
<LSBreadcrumb :define-list="defineBCList" />
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue';

const defineBCList = ref([
  {
    title: '产品管理'
  },
  {
    title: '产品详情',
    name: 'Button',
    query: {}
  },
  {
    title: '物模型草稿'
  }
]);
```

```html
<LSBreadcrumb :define-list="defineBCList" />
```

:::

### 3. 隐藏当前位置前缀

<br />

<ClientOnly>
<LSBreadcrumb :define-list="defineBCList" :show-pos="false" />
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue';

const defineBCList = ref([
  {
    title: '产品管理'
  },
  {
    title: '产品详情',
    name: 'Button'
  },
  {
    title: '物模型草稿'
  }
]);
```

```html
<LSBreadcrumb :define-list="defineBCList" :show-pos="false" />
```

:::

### 4. 自定义当前位置文案

<br />

<ClientOnly>
<LSBreadcrumb :define-list="defineBCList" :pos-title="'当前路径'" />
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue';

const defineBCList = ref([
  {
    title: '产品管理'
  },
  {
    title: '产品详情',
    name: 'Button'
  },
  {
    title: '物模型草稿'
  }
]);
```

```html
<LSBreadcrumb :define-list="defineBCList" :pos-title="'当前路径'" />
```

:::

### 5. 带有外链的面包屑

<br />

<ClientOnly>
<LSBreadcrumb :define-list="defineBCListWithLink" />
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue';

const defineBCListWithLink = ref([
  {
    title: '首页',
    link: 'https://www.baidu.com'
  },
  {
    title: '产品管理'
  },
  {
    title: '产品详情'
  }
]);
```

```html
<LSBreadcrumb :define-list="defineBCListWithLink" />
```

:::

### 6. 带有路由参数的面包屑

<br />

<ClientOnly>
<LSBreadcrumb :define-list="defineBCListWithQuery" />
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue';

const defineBCListWithQuery = ref([
  {
    title: '产品管理'
  },
  {
    title: '产品列表',
    name: 'ProductList'
  },
  {
    title: '产品详情',
    name: 'ProductDetail',
    query: { id: '123', tab: 'basic' }
  }
]);
```

```html
<LSBreadcrumb :define-list="defineBCListWithQuery" />
```

:::

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

### 2. Breadcrumb Item Attributes

::: warning 默认路由meta中bcList配置参数与之一致
:::

<ApiIntro :tableColumn="tableColumn" :tableData="tableData2" />

## 使用说明

### 1. 自动生成面包屑

LSBreadcrumb组件可以根据路由配置自动生成面包屑，需要在router的meta中添加bcList配置：

```js
const routes = [
  {
    path: '/product/detail/:id',
    name: 'ProductDetail',
    component: () => import('../views/product/Detail.vue'),
    meta: {
      title: '产品详情',
      bcList: [
        {
          title: '首页',
          name: 'Home'
        },
        {
          title: '产品管理',
          name: 'ProductManagement'
        },
        {
          title: '产品列表',
          name: 'ProductList'
        },
        {
          title: '产品详情'
        }
      ]
    }
  }
];
```

### 2. 自定义面包屑

当需要更灵活地控制面包屑内容时，可以使用defineList属性自定义面包屑：

```html
<LSBreadcrumb
  :define-list="[
  { title: '首页', name: 'Home' },
  { title: '产品管理' },
  { title: '产品详情', name: 'ProductDetail', query: { id: productId } }
]"
/>
```

### 3. 最佳实践

1. **路由配置**：建议在路由配置中统一管理面包屑数据，这样可以保持一致性并减少重复代码。

2. **权限控制**：如果需要根据用户权限显示不同的面包屑，可以在路由守卫中动态修改meta.bcList。

3. **国际化**：对于多语言应用，可以在路由配置中使用i18n的key，然后在组件中进行翻译。

4. **样式定制**：可以通过CSS变量或覆盖样式来定制面包屑的外观。

<script setup>
import { ref } from 'vue';
import { tableColumn } from '../constant';

const defineBCList = ref([
  {
    title: '产品管理'
  },
  {
    title: '产品详情',
    name: 'Button',
    query:{}
  },
  {
    title: '物模型草稿'
  }
]);

const defineBCListWithLink = ref([
  {
    title: '首页',
    link: 'https://www.baidu.com'
  },
  {
    title: '产品管理'
  },
  {
    title: '产品详情'
  }
]);

const defineBCListWithQuery = ref([
  {
    title: '产品管理'
  },
  {
    title: '产品列表',
    name: 'ProductList'
  },
  {
    title: '产品详情',
    name: 'ProductDetail',
    query: { id: '123', tab: 'basic' }
  }
]);

const tableData = ref([
  {
    name: 'defineList',
    desc: '自定义面包屑数据',
    type: 'Array<BreadCrumpType>',
    value: '[]'
  },
  {
    name: 'showPos',
    desc: '是否显示当前位置文案',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'posTitle',
    desc: '当前位置文案',
    type: 'string',
    value: '当前位置'
  }
])

const tableData2 = ref([
  {
    name: 'title',
    desc: '面包屑名称',
    type: 'string',
    value: '-'
  },
  {
    name: 'name',
    desc: '跳转的路由名称',
    type: 'string',
    value: '-'
  },
  {
    name: 'query',
    desc: '跳转的路由参数',
    type: 'object',
    value: '{}'
  },
  {
    name: 'link',
    desc: '外链地址，设置后会在新窗口打开',
    type: 'string',
    value: '-'
  }
])
</script>
