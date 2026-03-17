---
outline: deep
---

# LSTable 表格

LSTable 基于 Element Plus 的 `el-table` 封装，用于展示多条结构类似的数据，支持配置化列、内置分页、单选/多选、展开行、序号列及日期/状态/数字等列类型，可与 Element Plus Table 的大部分属性和事件透传使用。

::: warning
基于 el-table 二次封装，保留原属性和方法。
:::

::: tip
LSTable 内部使用 `el-config-provider` 注入中文语言包，表格与分页相关文案为中文。
:::

## table-column 配置速查

| 字段 | 说明 | 示例 |
| --- | --- | --- |
| `label` | 列标题 | `'场景名称'` |
| `prop` | 字段名（支持 lodash get 路径） | `'dataName'`、`'user.name'` |
| `minWidth` / `width` | 列宽 / 最小宽度 | `100`、`'120px'` |
| `type` | 列渲染类型 | `'date'`、`'status'`、`'number'`、`'slot'`、`'link'`、`'button'` |
| `value` | status 列映射 | `{ key: { type: 'success', label: '启用' } }` |
| `dateTemplate` | 日期格式（dayjs，type 为 `date` 时生效） | `'YYYY-MM-DD HH:mm:ss'` |
| `statusStyle` | 状态列样式（type 为 `status` 时生效） | `'default'`、`'dot'`、`'follow'` |
| `href` / `hrefProp` | 链接地址配置（type 为 `link` 时生效） | `href: (row) => string`、`hrefProp: 'detailUrl'` |
| `text` / `textProp` / `textFormatter` | 链接展示文案配置（type 为 `link` 时生效） | `text: '查看'`、`textProp: 'name'`、`textFormatter: (row, raw) => string` |
| `linkProps` | 透传给 `el-link` 的其余配置（支持对象或函数） | `{ type: 'primary' }`、`({ row }) => ({ disabled: row.disabled })` |
| `buttonProps` | type 为 `button` 时透传给 `el-button` 的配置（支持对象或函数） | `{ type: 'primary', link: true }`、`({ row }) => ({ disabled: row.disabled })` |
| `sortable` | 是否排序 | `true`、`'custom'` |
| `headerSlot` | 是否使用插槽自定义表头 | `true`，插槽名 `#${prop}-header` |
| `filterIconSlot` | 是否使用插槽自定义筛选图标 | `true`，插槽名 `#${prop}-filter-icon` |
| `filters` / `filterMethod` | 筛选配置（透传 el-table-column） | 见 Element Plus Table |

---

## 使用示例

### 1. 基础表格

通过 `table-column` 配置列、`table-data` 传入数据即可渲染一张基础表格。`show-pagination="false"` 关闭分页；`border`、`stripe` 为透传给 `el-table` 的原生属性。

<br>
<ClientOnly>
<LSTable :show-pagination="false" :table-column="basicColumns" :table-data="tableData" stripe  table-layout="fixed"/>
</ClientOnly>

::: details 点我查看代码

```js
const tableData = ref([
  { id: 1, name: '张三', amount: 1200, createdAt: 1729041600000 },
  { id: 2, name: '李四', amount: -50,  createdAt: 1729044000000 },
  { id: 3, name: '王五', amount: 300,  createdAt: 1729126200000 }
]);

const basicColumns = ref([
  { label: 'ID',       prop: 'id',        width: 80 },
  { label: '姓名',     prop: 'name',      minWidth: 120 },
  { label: '余额',     prop: 'amount',    minWidth: 100 },
  { label: '创建时间', prop: 'createdAt', minWidth: 180 }
]);
```

```html
<LSTable
  :show-pagination="false"
  :table-column="basicColumns"
  :table-data="tableData"
  stripe
/>
```

:::

---

### 2. 状态列样式切换

`type: 'status'` 列通过 `value` 配置字段值与展示标签、颜色类型的映射关系，格式为：

```
{ [字段值]: { type: 'success' | 'warning' | 'danger' | 'info' | 'primary', label: '显示文案' } }
```

可额外配置一个 `default` key，作为字段值未命中任何映射时的兜底展示。

`statusStyle` 控制状态的展示风格，共三种：

| 值 | 说明 |
|---|---|
| `default` | 仅改变文字颜色，无额外修饰 |
| `dot` | 文字左侧添加同色圆点，文字颜色不变 |
| `follow` | 文字左侧添加同色圆点，且文字颜色跟随状态类型 |

<br>
<ClientOnly>
<div>
  <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;font-size:14px">
    <span style="color:var(--vp-c-text-2)">状态样式：</span>
    <el-radio-group v-model="statusStyle" size="small">
      <el-radio-button value="default">仅文字颜色</el-radio-button>
      <el-radio-button value="dot">圆点（文字不变色）</el-radio-button>
      <el-radio-button value="follow">圆点（文字跟随）</el-radio-button>
    </el-radio-group>
  </div>
  <LSTable
    :key="statusStyle"
    :show-pagination="false"
    :table-column="statusColumns"
    :table-data="statusTableData"
  />
</div>
</ClientOnly>

::: details 点我查看代码

```js
const statusTableData = ref([
  { id: 1, name: '张三', status: 'ENABLED',  amount: 1200, createdAt: 1729041600000 },
  { id: 2, name: '李四', status: 'DISABLED', amount: -50,  createdAt: 1729044000000, disabled: true },
  { id: 3, name: '王五', status: 'PENDING',  amount: 300,  createdAt: 1729126200000 },
  { id: 4, name: '赵六', status: 'UNKNOWN',  amount: 0,    createdAt: 1729130000000 }
]);

const tableColumn = ref([
  { label: 'ID',   prop: 'id',   width: 70 },
  { label: '姓名', prop: 'name', minWidth: 120 },
  {
    label: '状态',
    prop: 'status',
    minWidth: 130,
    type: 'status',
    statusStyle: 'dot',  // 'default' | 'dot' | 'follow'
    value: {
      ENABLED:  { type: 'success', label: '启用' },
      DISABLED: { type: 'danger',  label: '停用' },
      PENDING:  { type: 'warning', label: '待审核' },
      default:  { type: 'info',    label: '未知' }  // 未命中 key 时兜底
    },
    // statusProps 透传 el-text 配置，支持对象或函数
    statusProps: ({ row }) => ({
      truncated: true,
      style: { cursor: row.disabled ? 'not-allowed' : 'default' }
    })
  },
  { label: '余额',     prop: 'amount',    type: 'number', isSuc: true, minWidth: 100 },
  { label: '创建时间', prop: 'createdAt', type: 'date',   minWidth: 180 }
]);
```

```html
<LSTable
  :show-pagination="false"
  :table-column="tableColumn"
  :table-data="statusTableData"
/>
```

:::

---

### 3. 日期类型

`type: 'date'` 列内部使用 [dayjs](https://day.js.org/) 格式化，通过 `dateTemplate` 指定格式字符串（不传时默认为 `'YYYY-MM-DD HH:mm:ss'`）。字段值支持时间戳（毫秒/秒）、日期字符串等 dayjs 可解析的格式；值为空时显示 `labelEmpty`（默认 `'--'`）。

<br>
<ClientOnly>
<LSTable :show-pagination="false" :table-column="dateColumns" :table-data="dateTableData" />
</ClientOnly>

::: details 点我查看代码

```js
const dateTableData = ref([
  { id: 1, name: '张三', createdAt: 1729041600000, updatedAt: '2024-10-16T10:28:11', expiredAt: null },
  { id: 2, name: '李四', createdAt: 1729044000000, updatedAt: '2024-11-20T08:00:00', expiredAt: 1735660800000 },
  { id: 3, name: '王五', createdAt: 1729126200000, updatedAt: null,                  expiredAt: 1738339200000 }
]);

const tableColumn = ref([
  { label: 'ID',   prop: 'id',   width: 70 },
  { label: '姓名', prop: 'name', minWidth: 100 },
  // 不传 dateTemplate，使用默认格式 YYYY-MM-DD HH:mm:ss
  { label: '创建时间', prop: 'createdAt', type: 'date', minWidth: 180 },
  // 自定义格式
  { label: '更新时间', prop: 'updatedAt', type: 'date', minWidth: 120, dateTemplate: 'YYYY-MM-DD' },
  // 值为 null 时显示 labelEmpty（默认 '--'）
  { label: '到期时间', prop: 'expiredAt', type: 'date', minWidth: 180 }
]);
```

```html
<LSTable
  :show-pagination="false"
  :table-column="tableColumn"
  :table-data="dateTableData"
/>
```

:::

---

### 4. 数字类型

`type: 'number'` 列根据数值正负自动着色：负数始终显示为 `danger`（红色）；正数在 `isSuc: true` 时显示为 `success`（绿色），否则不加颜色。值为空时显示 `labelEmpty`（默认 `'--'`）。

<br>
<ClientOnly>
<LSTable :show-pagination="false" :table-column="numberColumns" :table-data="numberTableData" />
</ClientOnly>

::: details 点我查看代码

```js
const numberTableData = ref([
  { id: 1, name: '张三', income: 8800,   expense: -3200, balance: 5600,  score: null },
  { id: 2, name: '李四', income: 0,      expense: -150,  balance: -150,  score: 72 },
  { id: 3, name: '王五', income: 12000,  expense: -9000, balance: 3000,  score: 95 },
  { id: 4, name: '赵六', income: 500,    expense: 0,     balance: 500,   score: -10 }
]);

const tableColumn = ref([
  { label: 'ID',   prop: 'id',   width: 70 },
  { label: '姓名', prop: 'name', minWidth: 100 },
  // isSuc: true —— 正数绿色，负数红色
  { label: '收入', prop: 'income',  type: 'number', isSuc: true, minWidth: 100 },
  // 负数始终红色，isSuc 不传时正数不加颜色
  { label: '支出', prop: 'expense', type: 'number', minWidth: 100 },
  { label: '余额', prop: 'balance', type: 'number', isSuc: true, minWidth: 100 },
  // 值为 null 显示 '--'
  { label: '评分', prop: 'score',   type: 'number', isSuc: true, minWidth: 90 }
]);
```

```html
<LSTable
  :show-pagination="false"
  :table-column="tableColumn"
  :table-data="numberTableData"
/>
```

:::

---

### 5. 链接列（link）

`type: 'link'` 列使用 `el-link` 渲染。链接地址通过以下方式配置（优先级从高到低）：

| 配置方式 | 说明 |
|---|---|
| `href: (row) => string` | 函数，根据行数据动态生成地址 |
| `href: 'https://...'` | 固定字符串 |
| `hrefProp: 'urlField'` | 从行数据的指定字段取值 |
| 不配置 | 回退到当前列 `prop` 对应的字段值 |

展示文本优先级：`textFormatter` > `text` > `textProp` > `prop` 对应字段值。`linkProps` 支持对象或函数，透传给 `el-link`（`type`、`underline`、`target`、`disabled` 等）。

<br>
<ClientOnly>
<LSTable :show-pagination="false" :table-column="linkColumns" :table-data="linkTableData"/>
</ClientOnly>

::: details 点我查看代码

```js
const linkTableData = ref([
  { id: 1, name: '零数官网',   url: 'https://lingshu.group',         detailId: 1, disabled: false },
  { id: 2, name: '产品介绍',   url: 'https://lingshu.group/product', detailId: 2, disabled: false },
  { id: 3, name: '链接已禁用', url: 'https://lingshu.group/data',    detailId: 3, disabled: true },
  { id: 4, name: '无链接地址', url: null,                            detailId: 4, disabled: false }
]);

const tableColumn = ref([
  { label: 'ID',   prop: 'id',   width: 70 },
  // hrefProp：从行数据的 url 字段取链接地址
  {
    label: 'hrefProp 取值',
    prop: 'name',
    type: 'link',
    minWidth: 140,
    hrefProp: 'url',
    linkProps: { type: 'primary', target: '_blank' }
  },
  // href 函数：动态拼接地址
  {
    label: 'href 函数',
    prop: 'name',
    type: 'link',
    minWidth: 140,
    href: (row) => `/detail/${row.detailId}`,
    linkProps: { type: 'success' }
  },
  // textFormatter：自定义展示文本
  {
    label: 'textFormatter',
    prop: 'name',
    type: 'link',
    minWidth: 160,
    hrefProp: 'url',
    textFormatter: (row, raw) => `${raw}（ID: ${row.id}）`,
    linkProps: { type: 'primary', underline: true, target: '_blank' }
  },
  // linkProps 函数：根据行数据动态控制 disabled
  {
    label: 'linkProps 函数',
    prop: 'name',
    type: 'link',
    minWidth: 140,
    hrefProp: 'url',
    linkProps: ({ row }) => ({ type: 'primary', target: '_blank', disabled: row.disabled })
  }
]);
```

```html
<LSTable
  :show-pagination="false"
  :table-column="tableColumn"
  :table-data="linkTableData"
/>
```

:::

---

### 6. 按钮列（button）

`type: 'button'` 列使用 `el-button` 渲染。按钮文本复用与 link 相同的文案解析规则（`textFormatter > text > textProp > prop 值`）。`buttonProps` 支持对象或函数，透传给 `el-button`；点击通过 `onClick` 回调处理，接收 `{ row, column, index, value, item }`。

<br>
<ClientOnly>
<LSTable :show-pagination="false" :table-column="buttonColumns" :table-data="buttonTableData" />
</ClientOnly>

::: details 点我查看代码

```js
const buttonTableData = ref([
  { id: 1, name: '张三', status: 'ENABLED',  action: '查看' },
  { id: 2, name: '李四', status: 'DISABLED', action: '查看', disabled: true },
  { id: 3, name: '王五', status: 'ENABLED',  action: '查看' }
]);

const tableColumn = ref([
  { label: 'ID',   prop: 'id',   width: 70 },
  { label: '姓名', prop: 'name', minWidth: 100 },
  // text：固定文案，buttonProps 对象形式
  {
    label: '固定文案',
    prop: 'id',
    type: 'button',
    minWidth: 100,
    text: '查看详情',
    buttonProps: { type: 'primary', link: true }
  },
  // textFormatter：动态文案
  {
    label: '动态文案',
    prop: 'action',
    type: 'button',
    minWidth: 100,
    textFormatter: (row) => `${row.action}（${row.id}）`,
    buttonProps: { type: 'success', link: true }
  },
  // buttonProps 函数：根据行数据控制 disabled / type
  {
    label: 'buttonProps 函数',
    prop: 'id',
    type: 'button',
    minWidth: 130,
    text: '操作',
    buttonProps: ({ row }) => ({
      type: row.disabled ? 'info' : 'danger',
      link: true,
      disabled: row.disabled
    }),
    onClick({ row }) {
      console.log('点击行：', row);
      ElMessage.success(`点击行：${row.name}`    }
  }
]);
```

```html
<LSTable
  :show-pagination="false"
  :table-column="tableColumn"
  :table-data="buttonTableData"
/>
```

:::

---

### 7. 列插槽（slot）

`type: 'slot'` 列将单元格内容完全交给具名插槽渲染，**插槽名即列的 `prop`**，作用域为 `{ row, column, index }`，可以放置任意自定义内容。

除列内容插槽外，还支持：
- **`#{prop}-header`**：自定义表头，列配置需设置 `headerSlot: true`，作用域 `{ column, index }`
- **`#{prop}-filter-icon`**：自定义筛选图标，列配置需设置 `filterIconSlot: true`，作用域 `{ filterOpened }`

<br>
<ClientOnly>
<LSTable :show-pagination="false" :table-column="slotColumns" :table-data="slotTableData">
  <!-- 列内容插槽：插槽名 = prop -->
  <template #tags="{ row }">
    <el-tag
      v-for="tag in row.tags"
      :key="tag"
      size="small"
      style="margin-right:4px"
    >{{ tag }}</el-tag>
    <span v-if="!row.tags?.length" style="color:#c0c4cc">—</span>
  </template>
  <template #operate="{ row }">
    <el-button link type="primary" size="small" @click="() => ElMessage.info(`查看：${row.name}`)">查看</el-button>
    <el-button link type="danger"  size="small" @click="() => ElMessage.warning(`删除：${row.name}`)">删除</el-button>
  </template>
  <!-- 自定义表头插槽：插槽名 = {prop}-header -->
  <template #operate-header>
    <span>操作</span>
    <el-tag size="small" type="info" style="margin-left:4px">自定义头</el-tag>
  </template>
</LSTable>
</ClientOnly>

::: details 点我查看代码

```js
const slotTableData = ref([
  { id: 1, name: '张三', tags: ['Vue', 'TypeScript'] },
  { id: 2, name: '李四', tags: ['React'] },
  { id: 3, name: '王五', tags: [] }
]);

const tableColumn = ref([
  { label: 'ID',   prop: 'id',   width: 70 },
  { label: '姓名', prop: 'name', minWidth: 120 },
  // type: 'slot'，插槽名 = prop（tags）
  { label: '标签', prop: 'tags', type: 'slot', minWidth: 180 },
  // headerSlot: true 开启自定义表头插槽 #{prop}-header
  { label: '操作', prop: 'operate', type: 'slot', minWidth: 140, headerSlot: true }
]);
```

```html
<LSTable :show-pagination="false" :table-column="tableColumn" :table-data="slotTableData">
  <!-- 列内容插槽，插槽名 = prop，作用域 { row, column, index } -->
  <template #tags="{ row }">
    <el-tag v-for="tag in row.tags" :key="tag" size="small" style="margin-right:4px">
      {{ tag }}
    </el-tag>
    <span v-if="!row.tags?.length" style="color:#c0c4cc">—</span>
  </template>

  <template #operate="{ row }">
    <el-button link type="primary" size="small" @click="handleView(row)">查看</el-button>
    <el-button link type="danger"  size="small" @click="handleDelete(row)">删除</el-button>
  </template>

  <!-- 自定义表头插槽，插槽名 = {prop}-header，作用域 { column, index } -->
  <template #operate-header>
    <span>操作</span>
    <el-tag size="small" type="info" style="margin-left:4px">自定义头</el-tag>
  </template>
</LSTable>
```

:::

---

### 8. 自定义渲染（render）

当内置 `type` 无法满足需求时，在列配置中设置 `render` 字段可完全接管单元格渲染，**优先级高于所有内置 `type`**。

`render` 接收一个函数式组件或 Vue 组件，组件的 props 为：

| 参数 | 说明 |
|---|---|
| `row` | 当前行数据 |
| `column` | el-table 的 column 对象 |
| `index` | 行索引 |
| `value` | 当前列 `prop` 对应的原始值（等价于 `get(row, prop)`） |
| `item` | 当前列配置项本身 |

<br>
<ClientOnly>
<LSTable :show-pagination="false" :table-column="renderColumns_1" :table-data="renderTableData_1"/>
</ClientOnly>

::: details 点我查看代码

```js
import { h, ref } from 'vue';

const renderTableData = ref([
  { id: 1, name: '张三', score: 95,  progress: 95, disabled: false },
  { id: 2, name: '李四', score: -10, progress: 40, disabled: true  },
  { id: 3, name: '王五', score: 72,  progress: 72, disabled: false },
  { id: 4, name: '赵六', score: null, progress: 0, disabled: false }
]);

const tableColumn = ref([
  { label: 'ID',   prop: 'id',   width: 70 },
  // 内联 render：根据 disabled 状态改变文字颜色和粗细
  {
    label: '姓名',
    prop: 'name',
    minWidth: 120,
    render: ({ value, row }) =>
      h('span', {
        style: {
          color: row.disabled ? '#909399' : '#303133',
          fontWeight: row.disabled ? 400 : 600,
          textDecoration: row.disabled ? 'line-through' : 'none'
        }
      }, value || '--')
  },
  // 根据正负值渲染不同颜色
  {
    label: '评分',
    prop: 'score',
    minWidth: 100,
    render: ({ value }) => {
      if (value === null || value === undefined) return h('span', { style: { color: '#c0c4cc' } }, '--');
      return h('span', { style: { color: Number(value) < 0 ? '#F56C6C' : '#67C23A', fontWeight: 600 } }, value);
    }
  },
  // 渲染进度条
  {
    label: '完成度',
    prop: 'progress',
    minWidth: 160,
    render: ({ value }) =>
      h('div', { style: { display: 'flex', alignItems: 'center', gap: '8px' } }, [
        h('div', {
          style: {
            flex: 1, height: '6px', borderRadius: '3px', background: '#f0f0f0', overflow: 'hidden'
          }
        }, [
          h('div', {
            style: {
              width: `${value}%`, height: '100%', borderRadius: '3px',
              background: value >= 80 ? '#67C23A' : value >= 50 ? '#E6A23C' : '#F56C6C',
              transition: 'width .3s'
            }
          })
        ]),
        h('span', { style: { fontSize: '12px', color: '#606266', whiteSpace: 'nowrap' } }, `${value}%`)
      ])
  }
]);
```

```html
<LSTable
  :show-pagination="false"
  :table-column="tableColumn"
  :table-data="renderTableData"
/>
```

:::

---

### 9. Loading 状态

通过 `loading` 属性控制表格的加载遮罩，内部使用 `v-loading` 指令，加载期间同时禁用分页操作。

<br>
<ClientOnly>
<div>
  <div style="margin-bottom:10px">
    <el-button size="small" @click="loadingToggle = !loadingToggle">
      {{ loadingToggle ? '关闭 Loading' : '开启 Loading' }}
    </el-button>
  </div>
  <LSTable :loading="loadingToggle" :show-pagination="false" :table-column="basicColumns" :table-data="tableData"  />
</div>
</ClientOnly>

::: details 点我查看代码

```js
const loading = ref(false);
```

```html
<LSTable
  :loading="loading"
  :show-pagination="false"
  :table-column="tableColumn"
  :table-data="tableData"
/>
```

:::

---

### 10. 空数据变体

无数据时 LSTable 提供多种空状态展示方式，通过以下属性控制：

| 属性 | 说明 | 默认值 |
|---|---|---|
| `showEmpty` | 是否渲染空状态区域 | `true` |
| `emptyLabel` | 空状态描述文案 | `'暂无数据'` |
| `#empty` | 自定义空状态插槽，存在时完全替代默认空状态 | — |

<br>
<ClientOnly>
<div>
  <div style="margin-bottom:10px;display:flex;gap:8px">
    <el-button size="small" @click="emptyVariantData = [...tableData]">恢复数据</el-button>
    <el-button size="small" @click="emptyVariantData = []">清空数据</el-button>
  </div>
  <p style="margin:6px 0;font-size:13px;color:#606266">① 默认空状态（emptyLabel 未配置，显示"暂无数据"）</p>
  <LSTable :show-pagination="false" :table-column="basicColumns" :table-data="emptyVariantData"  />
  <p style="margin:12px 0 6px;font-size:13px;color:#606266">② 自定义 emptyLabel</p>
  <LSTable :show-pagination="false" :table-column="basicColumns" :table-data="[]" empty-label="该列表暂时没有数据哦～"  />
  <p style="margin:12px 0 6px;font-size:13px;color:#606266">③ 自定义 #empty 插槽</p>
  <LSTable :show-pagination="false" :table-column="basicColumns" :table-data="[]" >
    <template #empty>
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px;padding:20px 0;color:#909399;font-size:14px">
        <span style="font-size:32px">📭</span>
        <span>暂无相关记录，请调整筛选条件后重试</span>
      </div>
    </template>
  </LSTable>
  <p style="margin:12px 0 6px;font-size:13px;color:#606266">④ showEmpty=false（不渲染空状态占位区域）</p>
  <LSTable :show-pagination="false" :table-column="basicColumns" :table-data="[]" :show-empty="false"  />
</div>
</ClientOnly>

::: details 点我查看代码

```html
<!-- ① 默认空状态 -->
<LSTable :show-pagination="false" :table-column="tableColumn" :table-data="[]" />

<!-- ② 自定义 emptyLabel -->
<LSTable :show-pagination="false" :table-column="tableColumn" :table-data="[]"
  empty-label="该列表暂时没有数据哦～" />

<!-- ③ 自定义 #empty 插槽 -->
<LSTable :show-pagination="false" :table-column="tableColumn" :table-data="[]">
  <template #empty>
    <div style="text-align:center;padding:20px 0;color:#909399">
      <div style="font-size:32px">📭</div>
      <div>暂无相关记录，请调整筛选条件后重试</div>
    </div>
  </template>
</LSTable>

<!-- ④ showEmpty=false，完全隐藏空状态区域 -->
<LSTable :show-pagination="false" :table-column="tableColumn" :table-data="[]" :show-empty="false" />
```

:::

---

### 11. 序号列配置

LSTable 默认在最左侧显示序号列，可通过以下属性灵活配置：

| 属性 | 说明 | 默认值 |
|---|---|---|
| `showTableIndex` | 是否显示序号列 | `true` |
| `tableIndexLabel` | 序号列表头文案 | `'序号'` |
| `tableIndexStart` | `true` 时序号从 0 开始 | `false` |
| `tableIndexInPage` | `true` 时每页从 1 重新累加，`false` 时跨页全局连续 | `false` |
| `tableIndexfixed` | 序号列是否固定左侧 | `false` |

<br>
<ClientOnly>
<div>
  <p style="margin:6px 0;font-size:13px;color:#606266">① showTableIndex=false（隐藏序号列）</p>
  <LSTable :show-pagination="false" :show-table-index="false" :table-column="indexVariantColumns" :table-data="tableData"  />
  <p style="margin:12px 0 6px;font-size:13px;color:#606266">② tableIndexLabel="#" + tableIndexStart=true（序号从 0 开始）</p>
  <LSTable :show-pagination="false" table-index-label="#" :table-index-start="true" :table-column="indexVariantColumns" :table-data="tableData"  />
  <p style="margin:12px 0 6px;font-size:13px;color:#606266">③ tableIndexInPage=true（每页内从 1 累加，不受分页偏移影响）</p>
  <LSTable :show-pagination="false" :table-index-in-page="true" :table-column="indexVariantColumns" :table-data="tableData"  />
  <p style="margin:12px 0 6px;font-size:13px;color:#606266">④ tableIndexfixed=true（序号列固定左侧）</p>
  <LSTable :show-pagination="false" :table-index-fixed="true" :table-column="indexVariantColumns" :table-data="tableData"  />
</div>
</ClientOnly>

::: details 点我查看代码

```html
<!-- ① 隐藏序号列 -->
<LSTable :show-table-index="false" ... />

<!-- ② 自定义表头文案 + 从 0 开始 -->
<LSTable table-index-label="#" :table-index-start="true" ... />

<!-- ③ 每页内从 1 重新累加（常用于前端分页场景） -->
<LSTable :table-index-in-page="true" ... />

<!-- ④ 序号列固定左侧 -->
<LSTable :table-index-fixed="true" ... />
```

:::

---

### 12. 空值占位

当单元格的值为 `null`、`undefined` 或空字符串时，LSTable 会显示 `labelEmpty` 指定的占位文案（默认 `'--'`）。可通过 `labelEmptyClass` 为占位文案添加自定义样式类。

> 注意：`type` 为 `date`、`status`、`number`、`slot` 的列有各自的空值处理逻辑，此占位配置对这些类型无效。

<br>
<ClientOnly>
<div>
  <p style="margin:6px 0;font-size:13px;color:#606266">① 默认 labelEmpty="--"（null / undefined / 空字符串均触发）</p>
  <LSTable :show-pagination="false" :table-column="sparseColumns" :table-data="sparseData"  />
  <p style="margin:12px 0 6px;font-size:13px;color:#606266">② 自定义 labelEmpty="N/A" + labelEmptyClass（斜体灰色）</p>
  <LSTable :show-pagination="false" :table-column="sparseColumns" :table-data="sparseData" label-empty="N/A" label-empty-class="doc-text-muted"  />
</div>
</ClientOnly>

::: details 点我查看代码

```js
const tableData = ref([
  { id: 1, name: '张三', email: null,              score: 92, remark: null        },
  { id: 2, name: null,   email: 'li4@example.com', score: null, remark: '备注内容' },
  { id: 3, name: '王五', email: '',                score: 0,   remark: null       }
]);

const tableColumn = ref([
  { label: 'ID',   prop: 'id',     width: 70 },
  { label: '姓名', prop: 'name',   minWidth: 120 },
  { label: '邮箱', prop: 'email',  minWidth: 200 },
  { label: '分数', prop: 'score',  minWidth: 100, type: 'number' },
  { label: '备注', prop: 'remark', minWidth: 160 }
]);
```

```html
<!-- ① 默认占位符 '--' -->
<LSTable :show-pagination="false" :table-column="tableColumn" :table-data="tableData" />

<!-- ② 自定义占位符 + class -->
<LSTable
  :show-pagination="false"
  :table-column="tableColumn"
  :table-data="tableData"
  label-empty="N/A"
  label-empty-class="text-muted"
/>
```

:::

---

### 13. 基础分页

`showPagination`（默认 `true`）控制是否显示分页。通过 `v-model:current-page` / `v-model:page-size` 双向绑定当前页和每页条数，`total` 传入总条数，`pageSizes` 指定每页条数可选列表。

<br>
<ClientOnly>
<LSTable
  row-key="id"
  :table-column="pagingDemoColumns"
  :table-data="pagingDemoData"
  :total="pagingDemoTotal"
  v-model:current-page="pagingDemoPage"
  v-model:page-size="pagingDemoSize"
  :page-sizes="[5, 10, 20]"
/>
</ClientOnly>

::: details 点我查看代码

```js
import { computed, ref } from 'vue';

const page = ref(1);
const pageSize = ref(5);

// 前端分页：从完整数据中截取当前页
const allData = ref(
  Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: ['张三', '李四', '王五', '赵六', '钱七'][i % 5],
    amount: (i % 3 === 0 ? -1 : 1) * (i + 1) * 100,
    createdAt: 1729041600000 + i * 3600000
  }))
);
const total = computed(() => allData.value.length);
const tableData = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return allData.value.slice(start, start + pageSize.value);
});

const tableColumn = ref([
  { label: 'ID',       prop: 'id',        width: 70 },
  { label: '姓名',     prop: 'name',      minWidth: 120 },
  { label: '余额',     prop: 'amount',    type: 'number', isSuc: true, minWidth: 100 },
  { label: '创建时间', prop: 'createdAt', type: 'date',   minWidth: 180 }
]);
```

```html
<LSTable
  row-key="id"
  :table-column="tableColumn"
  :table-data="tableData"
  :total="total"
  v-model:current-page="page"
  v-model:page-size="pageSize"
  :page-sizes="[5, 10, 20]"
/>
```

:::

---

### 14. currentPage 越界自动修正

当 `total` 发生变化导致 `currentPage` 超出最大页时，LSTable 会自动将其修正为最大合法页并 emit 更新事件。`total <= 0` 时会静默重置为第 1 页，不向父组件 emit，避免干扰加载中的状态。

<br>
<ClientOnly>
<div>
  <div style="margin-bottom:10px;display:flex;flex-wrap:wrap;gap:8px;font-size:13px;color:#606266">
    <span>total={{ boundaryTotal }} &nbsp;|&nbsp; pageSize={{ boundarySize }} &nbsp;|&nbsp; maxPage={{ Math.ceil(boundaryTotal / boundarySize) || 0 }} &nbsp;|&nbsp; currentPage={{ boundaryPage }}</span>
  </div>
  <div style="margin-bottom:10px;display:flex;flex-wrap:wrap;gap:8px">
    <el-button size="small" @click="() => { boundaryTotal = 100; boundaryPage = 10; }">重置（100 条 / 第 10 页）</el-button>
    <el-button size="small" type="warning" @click="boundaryTotal = 30">缩减 total → 30（maxPage=3，自动修正至第 3 页）</el-button>
    <el-button size="small" type="danger"  @click="boundaryTotal = 0">total=0（静默重置为第 1 页，不 emit）</el-button>
  </div>
  <LSTable
    row-key="id"
    :table-column="boundaryColumns"
    :table-data="boundaryData"
    :total="boundaryTotal"
    v-model:current-page="boundaryPage"
    v-model:page-size="boundarySize"
    :page-sizes="[10, 20]"
  />
</div>
</ClientOnly>

::: details 点我查看代码

```js
const page = ref(10);   // 初始第 10 页（100 条 / 每页 10 条，合法）
const pageSize = ref(10);
const total = ref(100);

// 前端模拟：根据当前页动态生成数据
const tableData = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return Array.from(
    { length: Math.min(pageSize.value, Math.max(0, total.value - start)) },
    (_, i) => ({ id: start + i + 1, name: `记录 ${start + i + 1}` })
  );
});
```

```html
<LSTable
  row-key="id"
  :table-column="tableColumn"
  :table-data="tableData"
  :total="total"
  v-model:current-page="page"
  v-model:page-size="pageSize"
/>
```

:::

---

### 15. paginationOptions 自定义分页组件

`paginationOptions` 透传给内部的 `el-pagination`，可覆盖 `layout`、`background`、`small`、`pagerCount` 等所有 [el-pagination 支持的属性](https://element-plus.org/zh-CN/component/pagination)。

<br>
<ClientOnly>
<div>
  <p style="margin:6px 0;font-size:13px;color:#606266">① 简化布局（去掉跳页输入框）</p>
  <LSTable
    row-key="id"
    :table-column="pagingDemoColumns"
    :table-data="pagingDemoData"
    :total="pagingDemoTotal"
    v-model:current-page="pagingDemoPage"
    v-model:page-size="pagingDemoSize"
    :pagination-options="{ layout: 'total, prev, pager, next', background: true }"
  />
  <p style="margin:12px 0 6px;font-size:13px;color:#606266">② 小尺寸 + 少页码按钮（pagerCount=5）</p>
  <LSTable
    row-key="id"
    :table-column="pagingDemoColumns"
    :table-data="pagingDemoData"
    :total="pagingDemoTotal"
    v-model:current-page="pagingDemoPage"
    v-model:page-size="pagingDemoSize"
    :pagination-options="{ small: true, pagerCount: 5, background: true }"
  />
</div>
</ClientOnly>

::: details 点我查看代码

```html
<!-- ① 简化布局，带背景色 -->
<LSTable
  :total="total"
  v-model:current-page="page"
  v-model:page-size="pageSize"
  :pagination-options="{
    layout: 'total, prev, pager, next',
    background: true
  }"
/>

<!-- ② 小尺寸 + 减少页码按钮数 -->
<LSTable
  :total="total"
  v-model:current-page="page"
  v-model:page-size="pageSize"
  :pagination-options="{
    small: true,
    pagerCount: 5,
    background: true
  }"
/>
```

:::

---

### 16. 单选

`showRadio` 为 `true` 时显示单选列。通过 `:current-row` 传入当前选中行、`@current-change` 监听选中变化，同时透传 `highlight-current-row` 高亮当前行。`radioProp` 指定用于唯一标识的字段（默认 `'id'`）。

<br>
<ClientOnly>
<div>
  <div style="margin-bottom:10px;font-size:13px;color:#606266">
    当前选中：{{ demoRadioRow ? `${demoRadioRow.customer}（${demoRadioRow.orderNo}）` : '无' }}
  </div>
  <LSTable
    row-key="id"
    :show-pagination="false"
    :show-radio="true"
    :table-column="demoOrderColumns"
    :table-data="demoOrders"
    :current-row="demoRadioRow"
    highlight-current-row
    @current-change="(row) => demoRadioRow = row"
  />
</div>
</ClientOnly>

::: details 点我查看代码

```js
const currentRow = ref(null);
```

```html
<LSTable
  row-key="id"
  :show-radio="true"
  :table-column="tableColumn"
  :table-data="tableData"
  :current-row="currentRow"
  highlight-current-row
  @current-change="(row) => currentRow = row"
/>
```

:::

---

### 17. 多选（跨分页保持）

`showSelect` 为 `true` 时显示多选列，`v-model:selection` 双向绑定选中数据。**必须传 `row-key`** 以支持跨页保留选中状态（组件在 `showSelect` 为 `true` 时默认启用 `reserveSelection`）。

<br>
<ClientOnly>
<div>
  <div style="margin-bottom:10px;font-size:13px;color:#606266">
    已选 {{ demoSelection.length }} 条：{{ demoSelection.map(r => r.customer).join('、') || '无' }}
  </div>
  <LSTable
    row-key="id"
    :show-select="true"
    :table-column="demoOrderColumns"
    :table-data="demoPagedOrders"
    :total="demoOrders.length"
    v-model:current-page="demoSelectPage"
    v-model:page-size="demoSelectSize"
    :page-sizes="[3, 5]"
    v-model:selection="demoSelection"
  />
</div>
</ClientOnly>

::: details 点我查看代码

```js
const page = ref(1);
const pageSize = ref(3);
const selection = ref([]);

const tableData = computed(() => {
  const start = (page.value - 1) * pageSize.value;
  return allData.value.slice(start, start + pageSize.value);
});
```

```html
<!-- row-key 必传，用于跨页保留选中状态 -->
<LSTable
  row-key="id"
  :show-select="true"
  :table-column="tableColumn"
  :table-data="tableData"
  :total="allData.length"
  v-model:current-page="page"
  v-model:page-size="pageSize"
  v-model:selection="selection"
/>
```

:::

---

### 18. 排序

在列配置中设置 `sortable: true` 开启前端排序；`sortable: 'custom'` 表示由服务端排序，需通过透传的 `@sort-change` 事件自行处理（`{ column, prop, order }`）。

<br>
<ClientOnly>
<div>
  <div style="margin-bottom:10px;font-size:13px;color:#606266">
    排序事件：{{ demoSortLog }}
  </div>
  <LSTable
    row-key="id"
    :show-pagination="false"
    :table-column="demoSortColumns"
    :table-data="demoOrders"
    @sort-change="(p) => demoSortLog = `prop=${p.prop} order=${p.order}`"
  />
</div>
</ClientOnly>

::: details 点我查看代码

```js
const tableColumn = ref([
  { label: '客户',     prop: 'customer', minWidth: 120 },
  // sortable: true —— 前端排序，点击表头即时生效
  { label: '金额',     prop: 'amount',   minWidth: 100, type: 'number', isSuc: true, sortable: true },
  // sortable: 'custom' —— 服务端排序，需监听 @sort-change 自行请求
  { label: '创建时间', prop: 'createdAt', minWidth: 180, type: 'date', sortable: 'custom' }
]);
```

```html
<LSTable
  row-key="id"
  :show-pagination="false"
  :table-column="tableColumn"
  :table-data="tableData"
  @sort-change="handleSortChange"
/>
```

```js
function handleSortChange({ prop, order }) {
  // order: 'ascending' | 'descending' | null
  console.log('排序变更：', prop, order);
  // 服务端排序：重新请求数据
}
```

:::

---

### 19. 筛选

在列配置中设置 `filters`（选项列表）和 `filterMethod`（筛选函数）即可开启前端列筛选，均透传给 `el-table-column`。

<br>
<ClientOnly>
<LSTable
  row-key="id"
  :show-pagination="false"
  :table-column="demoFilterColumns"
  :table-data="demoOrders"
/>
</ClientOnly>

::: details 点我查看代码

```js
const tableColumn = ref([
  { label: '订单号', prop: 'orderNo',  minWidth: 120 },
  { label: '客户',   prop: 'customer', minWidth: 120 },
  {
    label: '分类',
    prop: 'category',
    minWidth: 100,
    // filters 指定筛选选项
    filters: [
      { text: 'A 类', value: 'A 类' },
      { text: 'B 类', value: 'B 类' },
      { text: 'C 类', value: 'C 类' }
    ],
    // filterMethod 决定每行是否显示
    filterMethod(value, row) {
      return row.category === value;
    }
  },
  { label: '金额', prop: 'amount', minWidth: 100, type: 'number', isSuc: true }
]);
```

```html
<LSTable
  row-key="id"
  :show-pagination="false"
  :table-column="tableColumn"
  :table-data="tableData"
/>
```

:::

---

### 20. 自定义筛选图标

在列配置中设置 `filterIconSlot: true`，然后使用插槽 `#{prop}-filter-icon` 替换默认筛选图标，作用域为 `{ filterOpened }`（是否已展开筛选面板）。

<br>
<ClientOnly>
<LSTable
  row-key="id"
  :show-pagination="false"
  :table-column="demoFilterIconColumns"
  :table-data="demoOrders"
>
  <template #category-filter-icon="{ filterOpened }">
    <span :style="{ color: filterOpened ? '#409EFF' : '#909399', fontSize: '14px' }">
      {{ filterOpened ? '▼' : '▽' }}
    </span>
  </template>
</LSTable>
</ClientOnly>

::: details 点我查看代码

```js
const tableColumn = ref([
  { label: '订单号', prop: 'orderNo',  minWidth: 120 },
  { label: '客户',   prop: 'customer', minWidth: 120 },
  {
    label: '分类',
    prop: 'category',
    minWidth: 100,
    filterIconSlot: true,   // 开启自定义筛选图标插槽
    filters: [
      { text: 'A 类', value: 'A 类' },
      { text: 'B 类', value: 'B 类' },
      { text: 'C 类', value: 'C 类' }
    ],
    filterMethod(value, row) {
      return row.category === value;
    }
  },
  { label: '金额', prop: 'amount', minWidth: 100, type: 'number', isSuc: true }
]);
```

```html
<LSTable :table-column="tableColumn" :table-data="tableData">
  <!-- 插槽名：{prop}-filter-icon，作用域 { filterOpened } -->
  <template #category-filter-icon="{ filterOpened }">
    <span :style="{ color: filterOpened ? '#409EFF' : '#909399' }">
      {{ filterOpened ? '▼' : '▽' }}
    </span>
  </template>
</LSTable>
```

:::

---

### 21. 展开行

`showExpand` 为 `true` 时显示展开列，展开内容由 `#expand` 插槽提供，作用域为 `{ row }`。可透传 `default-expand-all` 默认全部展开，或 `expand-row-keys` 指定默认展开的行。

<br>
<ClientOnly>
<LSTable
  row-key="id"
  :show-pagination="false"
  :show-expand="true"
  :table-column="demoOrderColumns"
  :table-data="demoOrders"
>
  <template #expand="{ row }">
    <div style="padding:12px 20px;font-size:13px;color:#606266;line-height:2">
      <div>订单号：{{ row.orderNo }}</div>
      <div>客户：{{ row.customer }}</div>
      <div>分类：{{ row.category }}</div>
      <div>金额：{{ row.amount }}</div>
    </div>
  </template>
</LSTable>
</ClientOnly>

::: details 点我查看代码

```html
<LSTable
  row-key="id"
  :show-pagination="false"
  :show-expand="true"
  :table-column="tableColumn"
  :table-data="tableData"
>
  <!-- 展开行内容，作用域 { row } -->
  <template #expand="{ row }">
    <div style="padding:12px 20px">
      <div>订单号：{{ row.orderNo }}</div>
      <div>客户：{{ row.customer }}</div>
    </div>
  </template>
</LSTable>
```

:::

---

### 22. 表尾合计与表尾插槽

透传 `show-summary` 和 `summary-method` 给 `el-table` 可在表格底部显示合计行；`#append` 插槽则在合计行之后追加任意自定义内容。

<br>
<ClientOnly>
<LSTable
  row-key="id"
  :show-pagination="false"
  :table-column="demoOrderColumns"
  :table-data="demoOrders"
  show-summary
  :summary-method="demoSummaryMethod"
>
  <template #append>
    <div style="padding:8px 16px;font-size:13px;color:#909399;border-top:1px solid var(--el-border-color-lighter)">
      #append 插槽：可放置加载更多、备注说明等内容
    </div>
  </template>
</LSTable>
</ClientOnly>

::: details 点我查看代码

```js
function summaryMethod({ columns, data }) {
  return columns.map((col, index) => {
    if (index === 0) return '合计';
    if (col.property === 'amount') {
      return data.reduce((sum, row) => sum + Number(row.amount || 0), 0);
    }
    return '';
  });
}
```

```html
<LSTable
  row-key="id"
  :table-column="tableColumn"
  :table-data="tableData"
  show-summary
  :summary-method="summaryMethod"
>
  <!-- 追加在表格末尾（合计行之后）的自定义内容 -->
  <template #append>
    <div style="padding:8px 16px">追加内容</div>
  </template>
</LSTable>
```

:::

---

### 23. 合并行或列

透传 `span-method` 给 `el-table` 可实现行/列合并，参数为 `{ row, column, rowIndex, columnIndex }`，返回 `{ rowspan, colspan }`。

<br>
<ClientOnly>
<LSTable
  row-key="id"
  :show-pagination="false"
  :table-column="demoMergeColumns"
  :table-data="demoOrders"
  :span-method="demoSpanMethod"
/>
</ClientOnly>

::: details 点我查看代码

```js
// 将 group 相同的相邻行的"分组"列合并
function spanMethod({ rowIndex, column }) {
  if (column.property === 'group') {
    const rows = tableData.value;
    const current = rows[rowIndex];
    const prev = rows[rowIndex - 1];
    const next = rows[rowIndex + 1];
    if (prev?.group === current.group) return { rowspan: 0, colspan: 0 };
    if (next?.group === current.group) return { rowspan: 2, colspan: 1 };
  }
  return { rowspan: 1, colspan: 1 };
}
```

```html
<LSTable
  row-key="id"
  :table-column="tableColumn"
  :table-data="tableData"
  :span-method="spanMethod"
/>
```

:::

### 24. Expose 方法调用 + 行事件

LSTable 通过 `ref` 暴露 `TableRef`，可直接调用 `el-table` 的原生方法（`clearSelection`、`toggleAllSelection`、`doLayout`、`clearSort` 等）。`@row-click`、`@cell-click` 等行/列事件透传给 `el-table`，事件参数与原生一致。

<br>
<ClientOnly>
<div style="margin-bottom:8px;display:flex;gap:8px;flex-wrap:wrap">
  <el-button size="small" type="primary" @click="exposeTableRef?.TableRef?.clearSelection()">clearSelection</el-button>
  <el-button size="small" @click="exposeTableRef?.TableRef?.toggleAllSelection()">toggleAllSelection</el-button>
  <el-button size="small" @click="exposeTableRef?.TableRef?.doLayout()">doLayout</el-button>
  <el-button size="small" @click="exposeTableRef?.TableRef?.clearSort()">clearSort</el-button>
</div>
<p style="margin:0 0 6px;color:#409eff;font-size:13px">行点击日志：{{ exposeRowClickLog }}</p>
<LSTable
  ref="exposeTableRef"
  row-key="id"
  :show-pagination="false"
  :show-select="true"
  :table-column="demoOrderColumns"
  :table-data="demoOrders"
  v-model:selection="exposeSelection"
  @row-click="(row) => (exposeRowClickLog = `点击了行 id=${row.id}，客户：${row.customer}`)"
  @cell-click="(row, col) => ElMessage.info(`单元格点击：${col.label} = ${row[col.property]}`)"
/>
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const tableRef = ref()          // 绑定到 LSTable 的 ref
const selection = ref([])
const rowClickLog = ref('')

// 调用 el-table 原生方法
function callClearSelection()     { tableRef.value?.TableRef?.clearSelection() }
function callToggleAll()          { tableRef.value?.TableRef?.toggleAllSelection() }
function callDoLayout()           { tableRef.value?.TableRef?.doLayout() }
function callClearSort()          { tableRef.value?.TableRef?.clearSort() }
```

```html
<el-button @click="callClearSelection">clearSelection</el-button>
<el-button @click="callToggleAll">toggleAllSelection</el-button>
<el-button @click="callDoLayout">doLayout</el-button>
<el-button @click="callClearSort">clearSort</el-button>

<p>{{ rowClickLog }}</p>

<LSTable
  ref="tableRef"
  row-key="id"
  :show-select="true"
  :table-column="tableColumn"
  :table-data="tableData"
  v-model:selection="selection"
  @row-click="(row) => (rowClickLog = `点击了行 id=${row.id}`)"
  @cell-click="(row, col) => ElMessage.info(`${col.label} = ${row[col.property]}`)"
/>
```

:::

---

## 基础用法

通过 `table-column` 配置列、`table-data` 传入数据即可。列中的 `label` 为表头文案，`prop` 对应数据字段名；`prop` 支持嵌套路径（如 `user.name`），内部使用 `lodash.get` 取值。

除 LSTable 自有属性外，**[Element Plus Table](https://element-plus.org/zh-CN/component/table) 的属性和事件均可透传**，例如：`stripe`、`border`、`height`、`max-height`、`row-key`、`highlight-current-row`、`show-overflow-tooltip`、`show-summary`、`summary-method`、`default-expand-all`、`expand-row-keys`、`row-class-name`、`@row-click`、`@sort-change`、`@selection-change`、`@current-change`、`@expand-change` 等。列配置中每一项会透传给 `el-table-column`，故 `width`、`minWidth`、`fixed`、`sortable`、`align`、`formatter`、`filters`、`filterMethod` 等均可使用。

---

## 列类型说明

LSTable 通过列配置中的 `type` 字段内置了多种渲染模式。下方示例在一张表格中同时展示了 `date`、`status`、`number`、`link`、`button`、`slot` 六种列类型。

<br>
<ClientOnly>
<LSTable :show-pagination="false" :table-column="typeColumns" :table-data="tableData">
  <template #remark="{ row }">
    <el-tag v-if="row.remark" type="info" size="small">{{ row.remark }}</el-tag>
    <span v-else style="color:#c0c4cc">无</span>
  </template>
</LSTable>
</ClientOnly>

::: details 点我查看代码

```js
const tableData = ref([
  {
    id: 1, name: '张三', status: 'ENABLED', amount: 1200,
    createdAt: 1729041600000, website: '零数官网',
    websiteUrl: 'https://lingshu.group', remark: null
  },
  {
    id: 2, name: '李四', status: 'DISABLED', amount: -50,
    createdAt: 1729044000000, website: null,
    websiteUrl: null, remark: '有备注', disabled: true
  },
  {
    id: 3, name: '王五', status: 'PENDING', amount: 300,
    createdAt: 1729126200000, website: '数据服务',
    websiteUrl: 'https://lingshu.group/data', remark: null
  }
]);

const typeColumns = ref([
  { label: 'ID', prop: 'id', width: 70 },
  // date：dateTemplate 可选，默认 'YYYY-MM-DD HH:mm:ss'
  { label: '创建时间', prop: 'createdAt', type: 'date', minWidth: 180, dateTemplate: 'YYYY-MM-DD' },
  // status：statusStyle 可为 'default' | 'dot' | 'follow'
  {
    label: '状态', prop: 'status', type: 'status', minWidth: 120, statusStyle: 'dot',
    value: {
      ENABLED: { type: 'success', label: '启用' },
      DISABLED: { type: 'danger',  label: '停用' },
      PENDING:  { type: 'warning', label: '待审核' }
    }
  },
  // number：isSuc=true 时正数用 success，负数始终为 danger
  { label: '余额', prop: 'amount', type: 'number', isSuc: true, minWidth: 100 },
  // link：hrefProp 指定行数据中的链接字段，linkProps 支持函数
  {
    label: '官网链接', prop: 'website', type: 'link', minWidth: 130,
    hrefProp: 'websiteUrl',
    linkProps: ({ row }) => ({ type: 'primary', target: '_blank', disabled: row.disabled })
  },
  // button：text 为按钮文案，buttonProps 支持函数，onClick 接收行上下文
  {
    label: '操作', prop: 'id', type: 'button', text: '查看', minWidth: 90,
    buttonProps: { type: 'primary', link: true },
    onClick({ row }) { alert(`查看：${row.name}`) }
  },
  // slot：插槽名为列的 prop，作用域 { row, column, index }
  { label: '备注', prop: 'remark', type: 'slot', minWidth: 110 }
]);
```

```html
<LSTable :show-pagination="false" :table-column="typeColumns" :table-data="tableData">
  <!-- slot 类型列：插槽名 = 列 prop -->
  <template #remark="{ row }">
    <el-tag v-if="row.remark" type="info" size="small">{{ row.remark }}</el-tag>
    <span v-else style="color:#c0c4cc">无</span>
  </template>
</LSTable>
```

:::

### date

该列按日期格式化展示。需设置 `type: 'date'`，可选 `dateTemplate`（默认 `'YYYY-MM-DD HH:mm:ss'`）。空值显示为 `labelEmpty`（默认 `'--'`）。

```ts
{ label: '创建时间', prop: 'createTime', type: 'date', dateTemplate: 'YYYY年MM月DD日 HH:mm:ss' }
```

### status

该列按枚举映射为带类型的文案或圆点。需设置 `type: 'status'` 和 `value`（格式：`{ [字段值]: { type?, label } }`，可含 `default`）。`statusStyle`：`'default'` 仅文案颜色；`'dot'` / `'follow'` 为带圆点样式。可通过 `statusProps` 透传 `el-text` 的其余配置（支持对象或函数）。

```ts
{
  label: '状态', prop: 'status', type: 'status', statusStyle: 'dot',
  value: {
    ENABLED: { type: 'success', label: '启用' },
    DISABLED: { type: 'info',   label: '停用' },
    default:  { type: 'warning', label: '未知' }
  },
  statusProps: ({ row }) => ({
    truncated: true,
    style: { cursor: row.clickable ? 'pointer' : 'default' }
  })
}
```

### number

该列按数字展示，空值显示 `labelEmpty`。可选 `isSuc: true` 表示正数用 success 样式，否则负数用 danger 样式。

### slot

该列内容由插槽渲染。插槽名为列的 `prop`，作用域为 `{ row, column, index }`。列配置需设置 `type: 'slot'`。

### link

该列使用 `el-link` 渲染为超链接。需设置 `type: 'link'`，支持以下几种 `href` 配置方式：

- 通过 `href` 函数：`href: (row) => string`，根据整行数据生成链接；
- 通过固定 `href` 字符串：`href: 'https://xxx.com'`；
- 通过 `hrefProp` 指定行数据字段：`hrefProp: 'detailUrl'`，会从 `row.detailUrl` 取值；
- 若以上均未配置，则回退为当前列 `prop` 对应字段值：`get(row, prop)`。

展示文本的解析顺序为：`textFormatter(row, 原始值)` > `text` > `textProp` > 当前列 `prop` 对应字段值。

其余配置（例如 `type`、`underline`、`target`、`disabled` 等）通过 `linkProps` 透传给 `el-link`，`linkProps` 支持 **对象** 或 **函数** 两种写法：

```ts
{
  label: '官网', prop: 'website', type: 'link', minWidth: 160,
  href: (row) => `/detail/${row.id}`,         // 方式一：函数
  // hrefProp: 'websiteUrl',                  // 方式二：从字段取
  // href: 'https://lingshu.group',           // 方式三：固定字符串
  text: '查看详情',
  // textFormatter: (row, raw) => `${row.name}（${raw || '详情'}）`,
  linkProps: ({ row }) => ({
    type: row.disabled ? 'info' : 'primary',
    underline: true, disabled: row.disabled, target: '_blank'
  })
}
```

单元格值为空时仍按 `labelEmpty` / `labelEmptyClass` 渲染占位。

### button

该列使用 `el-button` 渲染为按钮。需设置 `type: 'button'`，按钮文本复用与 link 相同的文案解析规则（`textFormatter > text > textProp > prop 值`），其余配置通过 `buttonProps` 透传给 `el-button`，支持对象或函数；点击事件可通过 `onClick` 获取当前行上下文：

```ts
{
  label: '操作', prop: 'operateLabel', type: 'button', text: '查看详情',
  buttonProps: ({ row }) => ({ type: 'primary', link: true, disabled: row.disabled }),
  onClick({ row }) { handleViewDetail(row) }
}
```

自定义表头：列配置中 `headerSlot: true` 时，可使用插槽 `#{prop}-header`，作用域 `{ column, index }`。自定义筛选图标：`filterIconSlot: true` 时，可使用插槽 `#{prop}-filter-icon`，作用域 `{ filterOpened }`。

---

## 自定义渲染：item.render

当内置 `type` 无法满足复杂展示需求时，可以通过 `item.render` 完全接管该列单元格的渲染。`render` 接收一个组件（包括函数式组件），组件 props 为 `{ row, column, index, value, item }`：

<br>
<ClientOnly>
<LSTable :show-pagination="false" :table-column="renderColumns" :table-data="tableData"/>
</ClientOnly>

::: details 点我查看代码

```js
import { h, ref } from 'vue';

const renderColumns = ref([
  { label: 'ID', prop: 'id', width: 70 },
  {
    label: '姓名', prop: 'name', minWidth: 130,
    // render 优先级最高，存在时覆盖 type/slot 等默认渲染
    render: ({ value, row }) =>
      h('span', {
        style: {
          color: row.disabled ? '#909399' : '#409EFF',
          fontWeight: row.disabled ? 400 : 600
        }
      }, value || '--')
  },
  {
    label: '余额', prop: 'amount', minWidth: 100,
    render: ({ value }) =>
      h('span', {
        style: { color: Number(value) < 0 ? '#F56C6C' : '#67C23A' }
      }, value ?? '--')
  }
]);
```

```html
<LSTable :show-pagination="false" :table-column="renderColumns" :table-data="tableData"/>
```

:::

---

## 内容溢出与空数据

- **show-overflow-tooltip**：可透传布尔或对象。未配置时沿用 Element Plus 默认行为（不开启溢出提示）；当传入 `true` 时使用默认配置 `popperClass: 'table-popper-css'`（最大宽度 60%）；当传入对象时会在原有 `popperClass` 基础上合并 `table-popper-css`。
- **空数据**：`showEmpty` 为 true（默认）时无数据显示空状态；`emptyLabel` 为描述文案（默认「暂无数据」）；可通过 `#empty` 插槽完全自定义。单元格值为空时（非 date/status/number/slot 列）显示 `labelEmpty`（默认 `'--'`），可用 `labelEmptyClass` 指定占位文案的 class。

<br>
<ClientOnly>
<LSTable
  :show-pagination="false"
  :table-column="overflowColumns"
  :table-data="[]"
  empty-label="没有查询到相关数据，请重新筛选"
  show-overflow-tooltip
>
  <template #empty>
    <div style="padding:24px 0;text-align:center;color:#909399">
      <div style="font-size:28px;margin-bottom:8px">📭</div>
      <div>自定义 #empty 插槽：暂无数据</div>
    </div>
  </template>
</LSTable>
</ClientOnly>

::: details 点我查看代码

```js
// 空数据 + 自定义 emptyLabel + show-overflow-tooltip
const overflowColumns = ref([
  { label: 'ID',   prop: 'id',     width: 80 },
  { label: '姓名', prop: 'name',   minWidth: 120 },
  { label: '备注', prop: 'remark', minWidth: 80 }
]);
```

```html
<!-- 空数据 + 自定义 #empty 插槽 + show-overflow-tooltip -->
<LSTable
  :show-pagination="false"
  :table-column="overflowColumns"
  :table-data="[]"
  empty-label="没有查询到相关数据，请重新筛选"
  show-overflow-tooltip
>
  <template #empty>
    <div style="padding:24px 0;text-align:center;color:#909399">
      <div style="font-size:28px;margin-bottom:8px">📭</div>
      <div>自定义 #empty 插槽：暂无数据</div>
    </div>
  </template>
</LSTable>
```

:::

---

## 单选与多选

- **单选**：`showRadio` 为 true 时显示单选列。需透传 `highlight-current-row` 以高亮当前行，通过 `currentRow` 与 `@current-change` 或透传的 `current-change` 同步选中行。行唯一标识由透传的 `row-key` 或默认 `'id'` 决定；`radioProp` 为单选用作取值的字段（默认 `'id'`）。
- **多选**：`showSelect` 为 true 时显示多选列。选中结果可用 `v-model:selection` 或 `:selection` + `@update:selection` 同步。**必须**透传 `row-key`（或使用默认 `'id'`）以支持跨页保留选中及与 `selection` 同步。`selectColumnOptions` 可传 `selectable(row)`、`reserveSelection` 等；未传 `reserveSelection` 时组件在 `showSelect` 为 true 时默认设为 true。

<br>

**多选示例**

<ClientOnly>
<div>
<div style="margin-bottom:8px;font-size:13px;color:#606266">
  已选中 {{ multiSelection.length }} 条：{{ multiSelection.map(r => r.name).join('、') || '无' }}
</div>
<LSTable
  row-key="id"
  :show-pagination="false"
  :show-select="true"
  :table-column="basicColumns"
  :table-data="tableData"
  v-model:selection="multiSelection"
/>
</div>
</ClientOnly>

::: details 点我查看代码

```js
const multiSelection = ref([]);
```

```html
<div style="margin-bottom:8px;font-size:13px">
  已选中 {{ multiSelection.length }} 条：{{ multiSelection.map(r => r.name).join('、') || '无' }}
</div>
<LSTable
  row-key="id"
  :show-pagination="false"
  :show-select="true"
  :table-column="basicColumns"
  :table-data="tableData"
  v-model:selection="multiSelection"
/>
```

:::

<br>

**单选示例**

<ClientOnly>
<div>
<div style="margin-bottom:8px;font-size:13px;color:#606266">
  当前选中：{{ radioCurrentRow ? radioCurrentRow.name : '无' }}
</div>
<LSTable
  row-key="id"
  :show-pagination="false"
  :show-radio="true"
  :table-column="basicColumns"
  :table-data="tableData"
  :current-row="radioCurrentRow"
  highlight-current-row
  @current-change="(row) => (radioCurrentRow = row)"
/>
</div>
</ClientOnly>

::: details 点我查看代码

```js
const radioCurrentRow = ref(null);
```

```html
<div style="margin-bottom:8px;font-size:13px">
  当前选中：{{ radioCurrentRow ? radioCurrentRow.name : '无' }}
</div>
<LSTable
  row-key="id"
  :show-pagination="false"
  :show-radio="true"
  :table-column="basicColumns"
  :table-data="tableData"
  :current-row="radioCurrentRow"
  highlight-current-row
  @current-change="(row) => (radioCurrentRow = row)"
/>
```

:::

---

## 展开行与分页

- **展开行**：`showExpand` 为 true 时显示展开列，展开内容由插槽 `#expand` 提供，作用域 `{ row }`。可透传 `expand-column-options`、`default-expand-all`、`expand-row-keys`、`reserve-expanded-content` 等。
- **分页**：`showPagination` 为 true（默认）时显示内置 `el-pagination`。支持 `v-model:current-page`、`v-model:page-size`。当传入的 `currentPage` 或 `pageSize` 超出合理范围时，组件会修正并 emit 更新后的值。

<br>

**展开行 + 分页示例**（共 20 条，每页 5 条）

<ClientOnly>
<LSTable
  row-key="id"
  :show-expand="true"
  :table-column="pagingColumns"
  :table-data="pagingData"
  :total="pagingTotal"
  v-model:current-page="pagingPage"
  v-model:page-size="pagingSize"
  :page-sizes="[5, 10, 20]"
>
  <template #expand="{ row }">
    <div style="padding:12px 20px;font-size:13px;color:#606266;line-height:1.8">
      <div>编号：{{ row.id }}</div>
      <div>姓名：{{ row.name }}</div>
      <div>余额：{{ row.amount }}</div>
    </div>
  </template>
</LSTable>
</ClientOnly>

::: details 点我查看代码

```js
import { computed, ref } from 'vue';

const pagingPage = ref(1);
const pagingSize = ref(5);

const pagingAllData = ref(
  Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: ['张三', '李四', '王五', '赵六', '钱七'][i % 5],
    amount: (i % 3 === 0 ? -1 : 1) * (i + 1) * 100,
    createdAt: 1729041600000 + i * 3600000
  }))
);

const pagingTotal = computed(() => pagingAllData.value.length);
const pagingData = computed(() => {
  const start = (pagingPage.value - 1) * pagingSize.value;
  return pagingAllData.value.slice(start, start + pagingSize.value);
});

const pagingColumns = ref([
  { label: 'ID',    prop: 'id',        width: 70 },
  { label: '姓名',  prop: 'name',      minWidth: 120 },
  { label: '余额',  prop: 'amount',    type: 'number', isSuc: true, minWidth: 100 },
  { label: '创建时间', prop: 'createdAt', type: 'date', minWidth: 180 }
]);
```

```html
<LSTable
  row-key="id"
  :show-expand="true"
  :table-column="pagingColumns"
  :table-data="pagingData"
  :total="pagingTotal"
  v-model:current-page="pagingPage"
  v-model:page-size="pagingSize"
  :page-sizes="[5, 10, 20]"
>
  <!-- 展开行内容，作用域 { row } -->
  <template #expand="{ row }">
    <div style="padding:12px 20px;font-size:13px;color:#606266;line-height:1.8">
      <div>编号：{{ row.id }}</div>
      <div>姓名：{{ row.name }}</div>
      <div>余额：{{ row.amount }}</div>
    </div>
  </template>
</LSTable>
```

:::

---

## LSTable 属性（Props）

| 属性名 | 说明 | 类型 | 默认值 |
|--------|------|------|--------|
| **tableColumn** | 列配置数组，每项透传给 el-table-column；必填 | `Array` | `[]` |
| **tableData** | 表格数据源；必填 | `Array` | `[]` |
| **loading** | 是否显示加载状态（v-loading） | `boolean` | `false` |
| **showPagination** | 是否显示底部分页 | `boolean` | `true` |
| **paginationClass** | 分页容器根元素的 class | `string` | `''` |
| **total** | 数据总条数，供分页显示 | `number` | `0` |
| **currentPage** | 当前页码，支持 v-model:current-page | `number` | `1` |
| **pageSize** | 每页条数，支持 v-model:page-size | `number` | `10` |
| **pageSizes** | 每页条数可选值列表 | `number[]` | `[10, 20, 30, 40, 50, 100]` |
| **paginationOptions** | 透传给 el-pagination 的配置（如 layout） | `object` | `{}` |
| **showTableIndex** | 是否显示序号列（type=index） | `boolean` | `true` |
| **tableIndexfixed** | 序号列是否固定在左侧 | `boolean` | `false` |
| **tableIndexLabel** | 序号列表头文案 | `string` | `'序号'` |
| **tableIndexInPage** | 为 true 时序号在当前页内从 1 累加；为 false 时随分页全局连续 | `boolean` | `false` |
| **tableIndexStart** | 为 true 时序号从 0 开始，否则从 1 开始 | `boolean` | `false` |
| **indexColumnOptions** | 透传给序号列 el-table-column 的配置 | `object` | `{}` |
| **showRadio** | 是否显示单选列 | `boolean` | `false` |
| **radioColumnOptions** | 透传给单选列 el-table-column 的配置 | `object` | `{}` |
| **showRadioLabel** | 是否在单选列显示 radio 的 label 文案 | `boolean` | `false` |
| **radioProp** | 单选用作取值比较的字段名 | `string` | `'id'` |
| **currentRow** | 当前选中的行（单选），用于受控高亮 | `object` | — |
| **showSelect** | 是否显示多选列（type=selection） | `boolean` | `false` |
| **selectColumnOptions** | 透传给多选列，如 selectable(row)、reserveSelection 等 | `object` | `{}` |
| **selection** | 当前选中的行数组（多选），支持 v-model:selection | `array` | `[]` |
| **showExpand** | 是否显示展开列（type=expand） | `boolean` | `false` |
| **expandColumnOptions** | 透传给展开列 el-table-column 的配置 | `object` | `{}` |
| **showEmpty** | 无数据时是否显示空状态区域 | `boolean` | `true` |
| **labelEmpty** | 单元格值为空时显示的占位文案 | `string` | `'--'` |
| **labelEmptyClass** | 上述空占位文案所在元素的 class | `string` | `''` |
| **emptyLabel** | 无数据时空状态的描述文案 | `string` | `'暂无数据'` |

透传属性（不在此表）：Element Plus Table 的所有属性均可透传，如 `stripe`、`border`、`height`、`max-height`、`row-key`、`highlight-current-row`、`show-overflow-tooltip`、`show-summary`、`summary-method`、`default-expand-all`、`expand-row-keys`、`row-class-name`、`row-style`、`cell-class-name`、`header-cell-class-name` 等。

---

## LSTable 事件（Events）

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| **sizeChange** | 每页条数改变时触发 | `(pageSize: number)` |
| **currentPageChange** | 当前页改变时触发 | `(currentPage: number)` |
| **update:page-size** | v-model:page-size 同步 | `(pageSize: number)` |
| **update:current-page** | v-model:current-page 同步 | `(currentPage: number)` |
| **update:selection** | v-model:selection 同步（多选） | `(selection: any[])` |

透传事件：Element Plus Table 的事件均可透传监听，如 `select`、`select-all`、`selection-change`、`current-change`、`row-click`、`cell-click`、`sort-change`、`filter-change`、`expand-change`、`header-click` 等。

---

## LSTable 插槽（Slots）

| 插槽名 | 说明 | 作用域参数 |
|--------|------|------------|
| **prepend** | 表格主体上方插入的内容（对应 el-table prepend） | — |
| **expand** | 展开行内容，需配合 showExpand 使用 | `{ row }` |
| **empty** | 无数据时自定义内容，覆盖默认空状态 | — |
| **append** | 表格最后一行之后插入的内容（对应 el-table append） | — |
| **default** | 默认插槽，用于在配置列之后追加 el-table-column（如操作列） | — |
| **#{prop}** | 列类型为 slot 时的列内容，插槽名为该列的 prop | `{ row, column, index }` |
| **#{prop}-header** | 列自定义表头，列配置需设置 headerSlot: true | `{ column, index }` |
| **#{prop}-filter-icon** | 列自定义筛选图标，列配置需设置 filterIconSlot: true | `{ filterOpened }` |

---

## LSTable 暴露（Expose）

通过 ref 可访问内部 el-table 实例，用于调用 Element Plus Table 的方法：

| 名称 | 说明 |
|------|------|
| **TableRef** | el-table 的 ref 引用，可调用 `clearSelection`、`getSelectionRows`、`toggleRowSelection`、`toggleAllSelection`、`setCurrentRow`、`clearSort`、`clearFilter`、`doLayout`、`sort`、`scrollTo` 等 |

---

## table-column 列配置项

每项会原样透传给 `el-table-column`，下表为常用字段及 LSTable 扩展字段。

| 字段 | 说明 | 类型 | 默认值 / 说明 |
|------|------|------|----------------|
| **label** | 列标题 | `string` | — |
| **prop** | 对应数据字段名，支持路径如 `user.name` | `string` | — |
| **type** | 列类型：不设或 `default`、`date`、`status`、`number`、`slot`、`link`、`button` | `string` | 不设则按普通文本渲染 |
| **width** | 列宽度（固定） | `string` / `number` | — |
| **minWidth** | 列最小宽度 | `string` / `number` | — |
| **fixed** | 固定列：`true` / `'left'` / `'right'` | `boolean` / `string` | — |
| **align** | 列内容对齐方式 | `string` | `'left'` |
| **headerAlign** | 表头对齐方式 | `string` | — |
| **sortable** | 是否可排序；`'custom'` 表示服务端排序，需监听 sort-change | `boolean` / `string` | `false` |
| **dateTemplate** | type 为 date 时的日期格式（dayjs 格式） | `string` | `'YYYY-MM-DD HH:mm:ss'` |
| **value** | type 为 status 时的映射：`{ [字段值]: { type?, label } }`，可含 default | `object` | — |
| **statusStyle** | type 为 status 时的展示样式：default（仅颜色）、dot / follow（带圆点） | `string` | `'default'` |
| **statusProps** | type 为 status 时透传给 `el-text` 的其余配置；支持对象或函数 `({ row, column, index, value, item }) => object` | `object` / `Function` | `{}` |
| **isSuc** | type 为 number 时，为 true 表示正数用 success 样式 | `boolean` | — |
| **href** | type 为 link 时的链接，可为固定字符串或函数 `(row) => string` | `string` / `Function` | 默认取 `hrefProp` 或当前 `prop` 对应值 |
| **hrefProp** | type 为 link 时，从行数据中取链接的字段路径，如 `detailUrl` | `string` | — |
| **linkProps** | type 为 link 时透传给 `el-link` 的其余配置，如 `type`、`underline`、`target` 等；支持对象或函数 `({ row, column, index }) => object` | `object` / `Function` | `{}` |
| **text** | type 为 link 时的固定展示文案 | `string` | 默认取 `textProp` 或当前 `prop` 对应值 |
| **textProp** | type 为 link 时，作为展示文案的数据字段路径，如 `name` | `string` | — |
| **textFormatter** | type 为 link 或 button 时，自定义展示文案的格式化函数 `(row, rawValue) => string`，优先级最高 | `Function` | — |
| **buttonProps** | type 为 button 时透传给 `el-button` 的其余配置；支持对象或函数 `({ row, column, index, value, item }) => object` | `object` / `Function` | `{}` |
| **onClick** | type 为 button 时的点击回调，接收 `{ row, column, index, value, item }` | `Function` | — |
| **headerSlot** | 为 true 时使用插槽 `#{prop}-header` 渲染表头 | `boolean` | — |
| **filterIconSlot** | 为 true 时使用插槽 `#{prop}-filter-icon` 渲染筛选图标 | `boolean` | — |
| **className** | 列单元格的 class | `string` | — |
| **labelClassName** | 表头单元格的 class | `string` | — |
| **formatter** | 格式化函数（透传 el-table-column） | `Function` | — |
| **showOverflowTooltip** | 是否在溢出时显示 tooltip（可传 boolean 或对象） | `boolean` / `object` | — |
| **filters** | 筛选项列表（透传） | `array` | — |
| **filterMethod** | 筛选方法（透传） | `Function` | — |
| **filterMultiple** | 筛选是否多选（透传） | `boolean` | — |
| **filteredValue** | 当前选中的筛选值（透传） | `array` | — |
| **sortMethod** | 排序方法（透传） | `Function` | — |
| **sortBy** | 排序字段或函数（透传） | `string` / `Function` / `array` | — |
| **resizable** | 是否可拖拽调整列宽（透传，需 border） | `boolean` | — |
| **render** | 自定义单元格渲染组件，优先级最高；接收 `{ row, column, index, value, item }` 作为 props | `Component` / `FunctionalComponent` | — |

其他 `el-table-column` 支持的属性（如 `index`、`column-key`、`sort-orders` 等）均可写在列配置中。

<script setup>
import { computed, h, ref } from 'vue';
import { ElTag, ElRadioGroup, ElRadioButton, ElMessage, ElText, ElButton, ElLink } from 'element-plus';

// 共用数据
const tableData = ref([
  {
    id: 1, name: '张三', status: 'ENABLED', amount: 1200,
    createdAt: 1729041600000, website: '零数官网',
    websiteUrl: 'https://lingshu.group', remark: null
  },
  {
    id: 2, name: '李四', status: 'DISABLED', amount: -50,
    createdAt: 1729044000000, website: null, websiteUrl: null,
    remark: '有备注', disabled: true
  },
  {
    id: 3, name: '王五', status: 'PENDING', amount: 300,
    createdAt: 1729126200000, website: '数据服务',
    websiteUrl: 'https://lingshu.group/data', remark: null
  }
]);

// 1. 基础用法
const basicColumns = ref([
  { label: 'ID',       prop: 'id',        width: 70 },
  { label: '姓名',     prop: 'name',      minWidth: 120 },
  { label: '余额',     prop: 'amount',    minWidth: 100 },
  { label: '创建时间', prop: 'createdAt', minWidth: 180, type: 'date'}
]);

// 2. 状态列样式切换
const statusStyle = ref('follow');
const statusTableData = ref([
  { id: 1, name: '张三', status: 'ENABLED',  amount: 1200, createdAt: 1729041600000 },
  { id: 2, name: '李四', status: 'DISABLED', amount: -50,  createdAt: 1729044000000, disabled: true },
  { id: 3, name: '王五', status: 'PENDING',  amount: 300,  createdAt: 1729126200000 },
  { id: 4, name: '赵六', status: 'UNKNOWN',  amount: 0,    createdAt: 1729130000000 }
]);
const statusColumns = computed(() => [
  { label: 'ID',   prop: 'id',   width: 70 },
  { label: '姓名', prop: 'name', minWidth: 120 },
  {
    label: '状态', prop: 'status', minWidth: 130, type: 'status',
    statusStyle: statusStyle.value,
    value: {
      ENABLED:  { type: 'success', label: '启用' },
      DISABLED: { type: 'danger',  label: '停用' },
      PENDING:  { type: 'warning', label: '待审核' },
      default:  { type: 'info',    label: '未知' }
    },
    statusProps: ({ row }) => ({
      truncated: true,
      style: { cursor: row.disabled ? 'not-allowed' : 'default' }
    })
  },
  { label: '余额',     prop: 'amount',    type: 'number', isSuc: true, minWidth: 100 },
  { label: '创建时间', prop: 'createdAt', type: 'date',   minWidth: 180 }
]);

// 3. 日期类型
const dateTableData = ref([
  { id: 1, name: '张三', createdAt: 1729041600000, updatedAt: '2024-10-16T10:28:11', expiredAt: null },
  { id: 2, name: '李四', createdAt: 1729044000000, updatedAt: '2024-11-20T08:00:00', expiredAt: 1735660800000 },
  { id: 3, name: '王五', createdAt: 1729126200000, updatedAt: null,                  expiredAt: 1738339200000 }
]);
const dateColumns = ref([
  { label: 'ID',   prop: 'id',   width: 70 },
  { label: '姓名', prop: 'name', minWidth: 100 },
  { label: '创建时间', prop: 'createdAt', type: 'date', minWidth: 180 },
  { label: '更新时间', prop: 'updatedAt', type: 'date', minWidth: 120, dateTemplate: 'YYYY-MM-DD' },
  { label: '到期时间', prop: 'expiredAt', type: 'date', minWidth: 180 }
]);

// 4. 数字类型
const numberTableData = ref([
  { id: 1, name: '张三', income: 8800,  expense: -3200, balance: 5600, score: null },
  { id: 2, name: '李四', income: 0,     expense: -150,  balance: -150, score: 72 },
  { id: 3, name: '王五', income: 12000, expense: -9000, balance: 3000, score: 95 },
  { id: 4, name: '赵六', income: 500,   expense: 0,     balance: 500,  score: -10 }
]);
const numberColumns = ref([
  { label: 'ID',   prop: 'id',   width: 70 },
  { label: '姓名', prop: 'name', minWidth: 100 },
  { label: '收入', prop: 'income',  type: 'number', isSuc: true, minWidth: 100 },
  { label: '支出', prop: 'expense', type: 'number',              minWidth: 100 },
  { label: '余额', prop: 'balance', type: 'number', isSuc: true, minWidth: 100 },
  { label: '评分', prop: 'score',   type: 'number', isSuc: true, minWidth: 90 }
]);

// 5. 链接列（link）
const linkTableData = ref([
  { id: 1, name: '零数官网',   url: 'https://lingshu.group',         detailId: 1, disabled: false },
  { id: 2, name: '产品介绍',   url: 'https://lingshu.group/product', detailId: 2, disabled: false },
  { id: 3, name: '链接已禁用', url: 'https://lingshu.group/data',    detailId: 3, disabled: true },
  { id: 4, name: '无链接地址', url: null,                            detailId: 4, disabled: false }
]);
const linkColumns = ref([
  { label: 'ID', prop: 'id', width: 70 },
  { label: 'hrefProp 取值',  prop: 'name', type: 'link', minWidth: 140,
    hrefProp: 'url', linkProps: { type: 'primary', target: '_blank' } },
  { label: 'href 函数',      prop: 'name', type: 'link', minWidth: 140,
    href: (row) => `/detail/${row.detailId}`, linkProps: { type: 'success' } },
  { label: 'textFormatter',  prop: 'name', type: 'link', minWidth: 180,
    hrefProp: 'url', textFormatter: (row, raw) => `${raw}（ID: ${row.id}）`,
    linkProps: { type: 'primary', underline: true, target: '_blank' } },
  { label: 'linkProps 函数', prop: 'name', type: 'link', minWidth: 140,
    hrefProp: 'url', linkProps: ({ row }) => ({ type: 'primary', target: '_blank', disabled: row.disabled }) }
]);

// 6. 按钮列（button）
const buttonTableData = ref([
  { id: 1, name: '张三', status: 'ENABLED',  action: '查看' },
  { id: 2, name: '李四', status: 'DISABLED', action: '查看', disabled: true },
  { id: 3, name: '王五', status: 'ENABLED',  action: '查看' }
]);
const buttonColumns = ref([
  { label: 'ID', prop: 'id', width: 70 },
  { label: '姓名', prop: 'name', minWidth: 100 },
  { label: '固定文案',      prop: 'id', type: 'button', minWidth: 100,
    text: '查看详情', buttonProps: { type: 'primary', link: true } },
  { label: '动态文案',      prop: 'action', type: 'button', minWidth: 120,
    textFormatter: (row) => `${row.action}（${row.id}）`, buttonProps: { type: 'success', link: true } },
  { label: 'buttonProps 函数', prop: 'id', type: 'button', minWidth: 140,
    text: '操作',
    buttonProps: ({ row }) => ({ type: row.disabled ? 'info' : 'danger', link: true, disabled: row.disabled }),
    onClick({ row }) { console.log('点击行：', row);      ElMessage.success(`点击行：${row.name}`)
 } }
]);

// 9. Loading
const loadingToggle = ref(false);

// 10. 空数据变体
const emptyVariantData = ref([...tableData.value]);

// 11. 序号列配置变体
const indexVariantColumns = ref([
  { label: '姓名', prop: 'name', minWidth: 120 },
  {
    label: '状态', prop: 'status', minWidth: 120, type: 'status',
    value: {
      ENABLED:  { type: 'success', label: '启用' },
      DISABLED: { type: 'danger',  label: '停用' },
      PENDING:  { type: 'warning', label: '待审核' }
    }
  },
  { label: '余额', prop: 'amount', minWidth: 100, type: 'number', isSuc: true }
]);

// 12. 空值占位
const sparseData = ref([
  { id: 1, name: '张三', email: null,              score: 92,   remark: null },
  { id: 2, name: null,   email: 'li4@example.com', score: null, remark: '备注内容' },
  { id: 3, name: '王五', email: '',                score: 0,    remark: null }
]);
const sparseColumns = ref([
  { label: 'ID',   prop: 'id',     width: 70 },
  { label: '姓名', prop: 'name',   minWidth: 120 },
  { label: '邮箱', prop: 'email',  minWidth: 200 },
  { label: '分数', prop: 'score',  minWidth: 100, type: 'number' },
  { label: '备注', prop: 'remark', minWidth: 160 }
]);

// 16-22. 共用订单数据
const demoOrders = ref([
  { id: 1, orderNo: 'A-001', customer: '小明', category: 'A 类', amount: 100,  createdAt: Date.now() - 3600000 * 3, group: 'G1' },
  { id: 2, orderNo: 'A-002', customer: '小红', category: 'A 类', amount: 200,  createdAt: Date.now() - 3600000 * 2, group: 'G1' },
  { id: 3, orderNo: 'B-001', customer: '小刚', category: 'B 类', amount: 300,  createdAt: Date.now() - 3600000,     group: 'G2' },
  { id: 4, orderNo: 'B-002', customer: '小王', category: 'B 类', amount: 150,  createdAt: Date.now() - 1800000,     group: 'G2' },
  { id: 5, orderNo: 'C-001', customer: '小李', category: 'C 类', amount: -80,  createdAt: Date.now(),               group: 'G3' }
]);

// 共用列配置（订单号/客户/分类/金额/创建时间）
const demoOrderColumns = ref([
  { label: '订单号',   prop: 'orderNo',   minWidth: 120 },
  { label: '客户',     prop: 'customer',  minWidth: 100 },
  { label: '分类',     prop: 'category',  minWidth: 90 },
  { label: '金额',     prop: 'amount',    minWidth: 100, type: 'number', isSuc: true, sortable: true},
  { label: '创建时间', prop: 'createdAt', minWidth: 180, type: 'date' }
]);

// 16. 单选
const demoRadioRow = ref(null);

// 17. 多选（跨分页）
const demoSelectPage = ref(1);
const demoSelectSize = ref(3);
const demoPagedOrders = computed(() => {
  const start = (demoSelectPage.value - 1) * demoSelectSize.value;
  return demoOrders.value.slice(start, start + demoSelectSize.value);
});
const demoSelection = ref([]);

// 18. 排序
const demoSortLog = ref('（点击可排序列的表头触发）');
const demoSortColumns = ref([
  { label: '订单号',   prop: 'orderNo',   minWidth: 120 },
  { label: '客户',     prop: 'customer',  minWidth: 100 },
  { label: '金额',     prop: 'amount',    minWidth: 100, type: 'number', isSuc: true, sortable: true },
  { label: '创建时间', prop: 'createdAt', minWidth: 180, type: 'date', sortable: 'custom' }
]);

// 19. 筛选
const demoFilterColumns = ref([
  { label: '订单号', prop: 'orderNo',  minWidth: 120 },
  { label: '客户',   prop: 'customer', minWidth: 100 },
  {
    label: '分类', prop: 'category', minWidth: 90,
    filters: [
      { text: 'A 类', value: 'A 类' },
      { text: 'B 类', value: 'B 类' },
      { text: 'C 类', value: 'C 类' }
    ],
    filterMethod: (value, row) => row.category === value
  },
  { label: '金额', prop: 'amount', minWidth: 100, type: 'number', isSuc: true }
]);

// 19（自定义筛选图标）
const demoFilterIconColumns = ref([
  { label: '订单号', prop: 'orderNo',  minWidth: 120 },
  { label: '客户',   prop: 'customer', minWidth: 100 },
  {
    label: '分类', prop: 'category', minWidth: 90,
    filterIconSlot: true,
    filters: [
      { text: 'A 类', value: 'A 类' },
      { text: 'B 类', value: 'B 类' },
      { text: 'C 类', value: 'C 类' }
    ],
    filterMethod: (value, row) => row.category === value
  },
  { label: '金额', prop: 'amount', minWidth: 100, type: 'number', isSuc: true }
]);

// 21. 表尾合计
function demoSummaryMethod({ columns, data }) {
  return columns.map((col, i) => {
    if (i === 0) return '合计';
    if (col.property === 'amount')
      return data.reduce((sum, row) => sum + Number(row.amount || 0), 0);
    return '';
  });
}

// 22. 合并行列
const demoMergeColumns = ref([
  { label: '订单号',   prop: 'orderNo',   minWidth: 120 },
  { label: '客户',     prop: 'customer',  minWidth: 100 },
  { label: '分类',     prop: 'category',  minWidth: 90 },
  { label: '金额',     prop: 'amount',    minWidth: 100, type: 'number', isSuc: true },
  { label: '分组',     prop: 'group',     minWidth: 80 }
]);
function demoSpanMethod({ rowIndex, column }) {
  if (column.property === 'group') {
    const rows = demoOrders.value;
    const cur = rows[rowIndex];
    const prev = rows[rowIndex - 1];
    const next = rows[rowIndex + 1];
    if (prev?.group === cur.group) return { rowspan: 0, colspan: 0 };
    if (next?.group === cur.group) return { rowspan: 2, colspan: 1 };
  }
  return { rowspan: 1, colspan: 1 };
}

// 13. 分页配置
const pagingDemoPage = ref(1);
const pagingDemoSize = ref(5);
const pagingDemoAllData = ref(
  Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: ['张三', '李四', '王五', '赵六', '钱七'][i % 5],
    amount: (i % 3 === 0 ? -1 : 1) * (i + 1) * 100,
    createdAt: 1729041600000 + i * 3600000
  }))
);
const pagingDemoTotal = computed(() => pagingDemoAllData.value.length);
const pagingDemoData = computed(() => {
  const start = (pagingDemoPage.value - 1) * pagingDemoSize.value;
  return pagingDemoAllData.value.slice(start, start + pagingDemoSize.value);
});
const pagingDemoColumns = ref([
  { label: 'ID',       prop: 'id',        width: 70 },
  { label: '姓名',     prop: 'name',      minWidth: 120 },
  { label: '余额',     prop: 'amount',    type: 'number', isSuc: true, minWidth: 100 },
  { label: '创建时间', prop: 'createdAt', type: 'date',   minWidth: 180 }
]);

// 13-b. currentPage 越界修正
const boundaryTotal = ref(100);
const boundaryPage = ref(10);
const boundarySize = ref(10);
const boundaryData = computed(() => {
  const start = (boundaryPage.value - 1) * boundarySize.value;
  return Array.from(
    { length: Math.min(boundarySize.value, Math.max(0, boundaryTotal.value - start)) },
    (_, i) => ({ id: start + i + 1, name: `记录 ${start + i + 1}` })
  );
});
const boundaryColumns = ref([
  { label: 'ID',   prop: 'id',   width: 70 },
  { label: '名称', prop: 'name', minWidth: 160 }
]);

// 14. 列插槽（slot）
const slotTableData = ref([
  { id: 1, name: '张三', tags: ['Vue', 'TypeScript'] },
  { id: 2, name: '李四', tags: ['React'] },
  { id: 3, name: '王五', tags: [] }
]);
const slotColumns = ref([
  { label: 'ID',   prop: 'id',   width: 70 },
  { label: '姓名', prop: 'name', minWidth: 120 },
  { label: '标签', prop: 'tags',    type: 'slot', minWidth: 180 },
  { label: '操作', prop: 'operate', type: 'slot', minWidth: 140, headerSlot: true }
]);

// 8. 自定义渲染（render）
const renderTableData_1 = ref([
  { id: 1, name: '张三', score: 95,   progress: 95, disabled: false },
  { id: 2, name: '李四', score: -10,  progress: 40, disabled: true  },
  { id: 3, name: '王五', score: 72,   progress: 72, disabled: false },
  { id: 4, name: '赵六', score: null, progress: 0,  disabled: false }
]);
const renderColumns_1 = ref([
  { label: 'ID', prop: 'id', width: 70 },
  {
    label: '姓名', prop: 'name', minWidth: 120,
    render: ({ value, row }) =>
      h('span', {
        style: {
          color: row.disabled ? '#909399' : '#303133',
          fontWeight: row.disabled ? 400 : 600,
          textDecoration: row.disabled ? 'line-through' : 'none'
        }
      }, value || '--')
  },
  {
    label: '评分', prop: 'score', minWidth: 100,
    render: ({ value }) => {
      if (value === null || value === undefined)
        return h('span', { style: { color: '#c0c4cc' } }, '--');
      return h('span', {
        style: { color: Number(value) < 0 ? '#F56C6C' : '#67C23A', fontWeight: 600 }
      }, String(value));
    }
  },
  {
    label: '完成度', prop: 'progress', minWidth: 160,
    render: ({ value }) =>
      h('div', { style: { display: 'flex', alignItems: 'center', gap: '8px' } }, [
        h('div', { style: { flex: 1, height: '6px', borderRadius: '3px', background: '#f0f0f0', overflow: 'hidden' } }, [
          h('div', {
            style: {
              width: `${value}%`, height: '100%', borderRadius: '3px', transition: 'width .3s',
              background: value >= 80 ? '#67C23A' : value >= 50 ? '#E6A23C' : '#F56C6C'
            }
          })
        ]),
        h('span', { style: { fontSize: '12px', color: '#606266', whiteSpace: 'nowrap' } }, `${value}%`)
      ])
  }
]);

// 9. 列类型（综合）
const typeColumns = ref([
  { label: 'ID', prop: 'id', width: 70 },
  { label: '创建时间', prop: 'createdAt', type: 'date', minWidth: 160, dateTemplate: 'YYYY-MM-DD' },
  {
    label: '状态', prop: 'status', type: 'status', minWidth: 120, statusStyle: 'dot',
    value: {
      ENABLED: { type: 'success', label: '启用' },
      DISABLED: { type: 'danger',  label: '停用' },
      PENDING:  { type: 'warning', label: '待审核' }
    }
  },
  { label: '余额', prop: 'amount', type: 'number', isSuc: true, minWidth: 90 },
  {
    label: '官网链接', prop: 'website', type: 'link', minWidth: 120,
    href: 'websiteUrl',
    linkProps: ({ row }) => ({ type: 'primary', target: '_blank', disabled: row.disabled })
  },
  {
    label: '操作', prop: 'id', type: 'button', text: '查看', minWidth: 80,
    buttonProps: { type: 'primary', link: true },
    onClick({ row }) { alert(`查看：${row.name}`) }
  },
  { label: '备注', prop: 'remark', type: 'slot', minWidth: 100 }
]);

// 3. 自定义渲染
const renderColumns = ref([
  { label: 'ID', prop: 'id', width: 70 },
  {
    label: '姓名', prop: 'name', minWidth: 130,
    render: ({ value, row }) =>
      h('span', {
        style: { color: row.disabled ? '#909399' : '#409EFF', fontWeight: row.disabled ? 400 : 600 }
      }, value || '--')
  },
  {
    label: '余额', prop: 'amount', minWidth: 100,
    render: ({ value }) =>
      h('span', { style: { color: Number(value) < 0 ? '#F56C6C' : '#67C23A' } }, value ?? '--')
  }
]);

// 4. 内容溢出 / 空数据
const overflowColumns = ref([
  { label: 'ID',   prop: 'id',     width: 80 },
  { label: '姓名', prop: 'name',   minWidth: 120 },
  { label: '备注', prop: 'remark', minWidth: 80 }
]);

// 5. 单选 / 多选
const radioCurrentRow = ref(null);
const multiSelection = ref([]);

// 6. 展开行 / 分页
const pagingPage = ref(1);
const pagingSize = ref(5);
const pagingAllData = ref(
  Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: ['张三', '李四', '王五', '赵六', '钱七'][i % 5],
    amount: (i % 3 === 0 ? -1 : 1) * (i + 1) * 100,
    createdAt: 1729041600000 + i * 3600000
  }))
);
const pagingTotal = computed(() => pagingAllData.value.length);
const pagingData = computed(() => {
  const start = (pagingPage.value - 1) * pagingSize.value;
  return pagingAllData.value.slice(start, start + pagingSize.value);
});
const pagingColumns = ref([
  { label: 'ID',       prop: 'id',        width: 70 },
  { label: '姓名',     prop: 'name',      minWidth: 120 },
  { label: '余额',     prop: 'amount',    type: 'number', isSuc: true, minWidth: 100 },
  { label: '创建时间', prop: 'createdAt', type: 'date',   minWidth: 180 }
]);

// 24. Expose 方法调用 + 行事件
const exposeTableRef = ref();
const exposeSelection = ref([]);
const exposeRowClickLog = ref('（点击行后显示信息）');
</script>

<style>
.vp-doc .el-table table {
  display: table;
  margin: 0;
}
.vp-doc .el-table tr,
.vp-doc .el-table tr:nth-child(2n) {
  background-color: transparent;
  border-top: none;
}
.vp-doc .el-table th,
.vp-doc .el-table td {
  border: none;
}
.vp-doc .el-table th.el-table__cell,
.vp-doc .el-table td.el-table__cell {
  border-bottom: 1px solid var(--el-table-border-color);
}
.vp-doc .el-table--border th.el-table__cell,
.vp-doc .el-table--border td.el-table__cell {
  border-right: 1px solid var(--el-table-border-color);
}
.vp-doc .el-pagination ul,
.vp-doc .el-pager {
  padding: 0 !important;
  margin: 0 !important;
  list-style: none !important;
}
.vp-doc .el-pagination li,
.vp-doc .el-pager li {
  margin: 0 4px !important;
}
.doc-text-muted {
  font-style: italic;
  color: #c0c4cc;
}
</style>
