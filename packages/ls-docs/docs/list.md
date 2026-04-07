---
outline: deep
---

# LSList 列表页

LSList 是一个**全场景列表页整合组件**，将搜索表单（LSForm）、操作按钮区、数据表格（LSTable）和分页统一封装，通过纯配置驱动，无需手动处理分页、loading 状态、接口调用等重复逻辑，一个组件即可覆盖从简单展示到复杂 CRUD 的各类列表需求。

::: warning
`listApi` 须返回 `Promise`，**默认响应格式为 `{ records: [], total: number }`**，字段名须为 `records` 和 `total`。如接口字段名不同（如 `list`、`data`、`items` 等），必须通过 `deal-data` 进行适配。
:::

::: tip
**多场景适应核心**：三区块（表单区 / 操作区 / 表格区）可独立开关；操作列的文案、类型、显隐、禁用均支持静态值和 `(row) => value` 函数，实现按行差异化控制；完全覆盖路由跳转、弹框操作两种主流模式。
:::

## 组件结构

LSList 由三个可独立控制的区块构成：

```
┌─────────────────────────────────────────────────────┐
│  搜索表单区  (show-form)                              │
│  [表单项 ...]  [查询]  [重置]  [自定义内容 form-append]│
├─────────────────────────────────────────────────────┤
│  操作按钮区  (show-operate)                          │
│  [operate-prepend]  [添加]  [operate-append]         │
├─────────────────────────────────────────────────────┤
│  数据表格区                                           │
│  | 列... | 开关列 | 操作列: 查看 / 编辑 / 删除 |      │
│  └── 分页 ──┘                                        │
└─────────────────────────────────────────────────────┘
```

```html
<!-- 三区块：表单 / 操作栏 / 表格+分页，可分别用 show-form、show-operate 关闭 -->
<LSList
  :list-api="listApi"
  :table-column="tableColumn"
  :form-data="formData"
  :form-items="formItems"
/>
```

### 请求与数据流（速览）

理解下面三点，排错会快很多：

1. **`listApi` 收到的参数**（默认**开启分页**，即未把 `list-hook-config.hasPanigation` 设为 `false`）为：`{ currentPage, pageSize, ...表单字段 }`。其中表单字段来自 **`form-data`** 当前对象（每次请求前做一次展开合并）。若配置了 **`deal-params`**，则以 **`dealParams` 的返回值** 作为最终入参（可改名、删空值、拆时间范围等）。
2. **关闭分页**：`list-hook-config` 里 **`hasPanigation: false`** 时，不再传 `currentPage` / `pageSize`，参数仅为展开后的 **`form-data`**（再经 `dealParams`）。此时 `listApi` 宜 **resolve 数组**；若非数组可配 **`deal-data`** 只取 **`data`**。注意：此分支下 hook **不会更新 `total`**，列表若仍显示底部分页会与数据不一致，需 **`table-attrs` 中 `showPagination: false`**（详见 [示例 15 ②](#list-hook-config-advanced)）。
3. **响应**：未配置 **`deal-data`** 时，对 `listApi` resolve 的值按 **`{ records, total }`** 解构；配置了 **`deal-data`** 时，**整份**响应传入 `dealData`，其返回值必须是 **`{ data, total }`**。

**关联文档**：表单项与 `form-items` 详见 [LSForm](./form.md)；列配置与 `table-column` 详见 [LSTable](./table.md)。

## 适用场景速查

| 场景 | 关键配置 |
|------|---------|
| 标准 CRUD 列表（路由跳转） | `listApi` + `delApi` + `tableColumn` |
| 弹框操作列表 | `addFn` + `tableDetailFn` + `tableEditFn` |
| 纯数据展示列表（无操作） | `show-operate="false"` + `show-table-operate="false"` |
| 仅查询无增删改 | `show-add="false"` + `show-table-edit="false"` + `show-table-del="false"` |
| 带状态开关管理列表 | `show-table-switch` + `switchApi` |
| 搜索筛选列表 | `formData` + `formItems` + `dealParams` |
| 自定义列渲染 | `#{prop}-table-slot` |
| 自定义搜索控件 | `#{prop}-form-slot` |
| 外部触发刷新 | `ref` + `loadData()` / `handleReset()` |
| 延后首次请求 / 手动拉数 | `list-hook-config="{ autoFetch: false }"` + `ref` 上 `loadData()` |
| 表单单卡 + 表格区成卡（样式） | `form-class` + `operate-class` + 外层样式（见 [§18 样式定制](#list-style-card)） |

```html
<!-- 标准 CRUD -->
<LSList :list-api="listApi" :del-api="delApi" :table-column="cols" />

<!-- 纯表格 -->
<LSList :list-api="listApi" :table-column="cols" :show-form="false" :show-operate="false" :show-table-operate="false" />

<!-- 弹框编辑（不走路由） -->
<LSList :list-api="listApi" :table-column="cols" :add-fn="openAdd" :table-edit-fn="openEdit" />
```

## 属性速查

与 `lsListProps`（`types.ts`）顺序一致；模板中常用 **kebab-case** 写法，示例如下。

| 属性 | 说明 | 默认值 | 示例 |
| --- | --- | --- | --- |
| `listApi` | 列表数据接口，须返回 `Promise`；无 `dealData` 时响应为 `{ records, total }` | — | `:list-api="listApi"` |
| `dealParams` | 请求参数预处理，返回值作为 `listApi` 入参 | — | `:deal-params="dealParams"` |
| `dealData` | 适配列表响应，须返回 `{ data: [], total: number }` | — | `:deal-data="dealData"` |
| `listHookConfig` | 透传 `useTableListHook`（勿在此写 `dealData`/`dealParams`，会被覆盖） | — | `:list-hook-config="{ pageSizeProp: 20 }"` |
| `delApi` | 删除接口，`Promise`；默认参数为 `row[tableRowKey]` | — | `:del-api="delApi"` |
| `dealDelParams` | 删除参数预处理，入参整行 `row` | — | `:deal-del-params="(row) => ({ id: row.id })"` |
| `delMessage` | 删除成功提示；可为 `(row) => string` | `''` | `del-message="已删除"`；`:del-message="(row) => '已删 ' + row.name"` |
| `switchApi` | 开关切换接口，`Promise` | — | `:switch-api="switchApi"` |
| `dealSwitchParams` | 开关请求参数预处理 | — | `:deal-switch-params="(row) => row.id"` |
| `showForm` | 是否显示搜索表单区 | `true` | `:show-form="false"` |
| `formClass` | 表单根节点追加 class | `''` | `form-class="ls-search-form"` |
| `formData` | 搜索表单绑定数据（同 LSForm） | `{}` | `:form-data="formData"` |
| `formItems` | 搜索表单项配置（同 LSForm `form-items`） | `[]` | `:form-items="formItems"` |
| `formAttrs` | 透传内部 LSForm（如 `column`、`label-width`） | `{}` | `:form-attrs="{ column: 3 }"` |
| `queryFn` | 覆盖查询时 `loadData`；查询前仍会页码置 1 | — | `:query-fn="onQuery"` |
| `resetFn` | 覆盖列表侧 `handleReset`；表单仍会先 `resetFields` | — | `:reset-fn="onReset"` |
| `tableColumn` | 表格列配置（同 LSTable） | `[]` | `:table-column="tableColumn"` |
| `tableRowKey` | 行主键字段，用于操作列/删除/开关传参 | `'id'` | `table-row-key="uuid"` |
| `tableAttrs` | 透传内部 LSTable / `el-table` | `{}` | `:table-attrs="{ stripe: true, border: true }"` |
| `tableListeners` | 透传表格事件，如 `selection-change` | `{}` | `:table-listeners="{ 'selection-change': onSel }"` |
| `showOperate` | 是否显示操作按钮区域 | `true` | `:show-operate="false"` |
| `showOperateDivider` | 表单区与操作区间分割线 | `true` | `:show-operate-divider="false"` |
| `operateClass` | 操作区容器追加 class | `''` | `operate-class="toolbar"` |
| `showAdd` | 是否显示「添加」按钮 | `true` | `:show-add="false"` |
| `disabledAddBtn` | 是否禁用添加按钮 | `false` | `:disabled-add-btn="loading"` |
| `addBtnText` | 添加按钮文案 | `'添加'` | `add-btn-text="新建"` |
| `addBtnAttrs` | 透传添加按钮 `el-button` | `{}` | `:add-btn-attrs="{ type: 'success' }"` |
| `addFn` | 覆盖添加按钮行为（弹框等） | — | `:add-fn="openAddDialog"` |
| `showTableSwitch` | 是否显示开关列 | `false` | `:show-table-switch="true"` |
| `switchProp` | 开关绑定的行字段名 | `'status'` | `switch-prop="enabled"` |
| `tableSwitchColumn` | 透传开关列表头列 `el-table-column` | `{}` | `:table-switch-column="{ label: '启用', width: '90' }"` |
| `tableSwitchAttrs` | 透传 `el-switch` | `{}` | `:table-switch-attrs="{ inlinePrompt: true }"` |
| `tableSwitchPopAttrs` | 透传关开关前 `ElMessageBox` | `{}` | `:table-switch-pop-attrs="{ type: 'warning' }"` |
| `tableSwitchPopTxt` | 关开关前确认文案 | `'请问是否关闭？'` | `table-switch-pop-txt="确认关闭？"` |
| `disabledTableSwitch` | 开关是否禁用，可为 `(row) => boolean` | `false` | `:disabled-table-switch="(row) => row.system"` |
| `showTableOperate` | 是否显示操作列 | `true` | `:show-table-operate="false"` |
| `tableOperateColumn` | 透传操作列 `el-table-column` | `{}` | `:table-operate-column="{ label: '操作', width: '200' }"` |
| `tableDetailFn` | 覆盖查看按钮 | — | `:table-detail-fn="(row) => openDetail(row)"` |
| `tableEditFn` | 覆盖编辑按钮 | — | `:table-edit-fn="(row) => openEdit(row)"` |
| `tableDelFn` | 覆盖删除；签名为 `(row, setLoading) => void` | — | `:table-del-fn="handleDel"` |
| `showTableDetail` | 查看按钮显隐，`boolean` 或 `(row) => boolean` | `true` | `:show-table-detail="(row) => row.canView"` |
| `disabledTableDetail` | 查看按钮禁用 | `false` | `:disabled-table-detail="(row) => row.locked"` |
| `showTableEdit` | 编辑按钮显隐 | `true` | `:show-table-edit="false"` |
| `disabledTableEdit` | 编辑按钮禁用 | `false` | `:disabled-table-edit="(row) => row.locked"` |
| `showTableDel` | 删除按钮显隐 | `true` | `:show-table-del="(row) => !row.system"` |
| `disabledTableDel` | 删除按钮禁用 | `false` | `:disabled-table-del="(row) => row.readonly"` |
| `tableDelPopAttrs` | 透传删除 `el-popconfirm` | `{}` | `:table-del-pop-attrs="{ width: 240 }"` |
| `addRoutePath` | 添加页路由；空则 `${currentPath}/add` | `''` | `add-route-path="/user/create"` |
| `detailRoutePath` | 详情路由前缀；实际为 `path/${id}` | `''` | `detail-route-path="/user/view"` |
| `editRoutePath` | 编辑路由前缀 | `''` | `edit-route-path="/user/edit"` |
| `tableDetailText` | 查看按钮文案 | `'查看'` | `:table-detail-text="(row) => row.isAdmin ? '管理' : '查看'"` |
| `tableEditText` | 编辑按钮文案 | `'编辑'` | `table-edit-text="修改"` |
| `tableDelText` | 删除按钮文案 | `'删除'` | `table-del-text="移除"` |
| `tableDetailType` | 查看按钮 `type` | `'primary'` | `table-detail-type="success"` |
| `tableEditType` | 编辑按钮 `type` | `'primary'` | `table-edit-type="warning"` |
| `tableDelType` | 删除按钮 `type` | `'danger'` | `table-del-type="danger"` |
| `tableDetailBtnAttrs` | 透传查看 `el-button` | `{}` | `:table-detail-btn-attrs="{ link: true }"` |
| `tableEditBtnAttrs` | 透传编辑 `el-button` | `{}` | `:table-edit-btn-attrs="{ size: 'small' }"` |
| `tableDelBtnAttrs` | 透传删除 `el-button` | `{}` | `:table-del-btn-attrs="{ loading: delLoading }"` |
| `skeletonAttrs` | 透传首次加载骨架 `el-skeleton` | `{}` | `:skeleton-attrs="{ rows: 6 }"` |
| `showSkeleton` | 首次加载是否显示骨架屏 | `true` | `:show-skeleton="false"` |
| `popconfirmTxt` | 删除确认文案；空则内置「是否 + 删除按钮文案 + 当前行数据？」 | `''` | `:popconfirm-txt="(row) => '确认删除 ' + row.name + '？'"` |

```html
<!-- 速查表 → 模板：camelCase 在 JS 中写，模板里常用 kebab-case -->
<LSList
  ref="listRef"
  :list-api="listApi"
  :deal-data="dealData"
  :form-data="formData"
  :form-items="formItems"
  :table-column="tableColumn"
  :show-table-switch="false"
  @submit-form="onSearch"
/>
```

---

## 使用示例

```text
以下 1～18 为独立场景示例；复制时保留 listApi 返回 { records, total } 或配合 deal-data。
```

### 1. 基础列表

最简配置：提供 `list-api` 和 `table-column` 即可渲染一张带分页和操作列的完整数据表格。组件挂载时**自动发起第一次请求**，翻页时自动携带当前分页参数重新请求。

`listApi` 响应须包含 **`records`**（数组）和 **`total`**（总条数），如接口字段名不同请使用 `deal-data` 适配。

<br>
<ClientOnly>
<LSList
  :list-api="basicListApi"
  :table-column="basicTableColumn"
  :show-form="false"
  add-btn-text="新增用户"
  :add-fn="() => ElMessage.success('点击新增')"
  :table-detail-fn="(row) => ElMessage.info('查看：' + row.name)"
  :table-edit-fn="(row) => ElMessage.info('编辑：' + row.name)"
  :table-del-fn="(row, cb) => { cb(true); setTimeout(() => { ElMessage.success('删除：' + row.name); cb(false) }, 600) }"
/>
</ClientOnly>

::: details 点我查看代码

```js
// listApi 接收当前搜索参数 + 分页参数，返回 Promise
// ⚠️ 默认响应格式须为：{ records: Array, total: number }
function basicListApi(params) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 28, dept: '技术部', status: '在职' },
          { id: 2, name: '李四', age: 32, dept: '产品部', status: '在职' },
          { id: 3, name: '王五', age: 25, dept: '设计部', status: '离职' }
        ],
        total: 3
      })
    }, 300)
  })
}

const basicTableColumn = ref([
  { label: '姓名', prop: 'name' },
  { label: '年龄', prop: 'age',  width: '80' },
  { label: '部门', prop: 'dept' },
  { label: '状态', prop: 'status' }
])
```

```html
<LSList
  :list-api="basicListApi"
  :table-column="basicTableColumn"
  :show-form="false"
  add-btn-text="新增用户"
  :add-fn="() => openAddDialog()"
  :table-detail-fn="(row) => openDetail(row)"
  :table-edit-fn="(row) => openEdit(row)"
  :table-del-fn="(row, cb) => handleDel(row, cb)"
/>
```

:::

---

### 2. 接口数据适配（dealData）

当后端接口的响应结构与 LSList 默认格式（`{ records, total }`）不一致时，使用 `deal-data` 进行适配转换，无需修改接口或二次封装。`deal-data` 函数必须返回 **`{ data: Array, total: number }`** 格式（注意是 `data`，不是 `records`）。

<br>
<ClientOnly>
<LSList
  :list-api="adaptListApi"
  :deal-data="adaptDealData"
  :deal-params="adaptDealParams"
  :table-column="adaptTableColumn"
  :form-data="adaptFormData"
  :form-items="adaptFormItems"
/>
</ClientOnly>

::: details 点我查看代码

```js
// 假设接口返回 { code: 0, data: { list: [], count: 0 } }
function adaptListApi(params) {
  console.log('实际请求参数：', params)
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        code: 0,
        data: {
          list: [
            { id: 1, username: '张三', createTime: '2024-01-15' },
            { id: 2, username: '李四', createTime: '2024-03-20' }
          ],
          count: 2
        }
      })
    }, 300)
  })
}

// ⚠️ dealData 必须返回 { data: Array, total: number }（字段名固定为 data 和 total）
function adaptDealData(res) {
  return {
    data: res.data.list,
    total: res.data.count
  }
}

// dealParams：对搜索参数预处理（过滤空值、时间格式化等）
function adaptDealParams(params) {
  const result = {}
  Object.entries(params).forEach(([k, v]) => {
    if (v !== '' && v !== null && v !== undefined) {
      result[k] = v
    }
  })
  return result
}

const adaptFormData = ref({ username: '' })
const adaptFormItems = ref([
  { type: 'input', label: '用户名', prop: 'username', attrs: { placeholder: '请输入' } }
])

const adaptTableColumn = ref([
  { label: '用户名', prop: 'username' },
  { label: '创建时间', prop: 'createTime' }
])
```

```html
<LSList
  :list-api="listApi"
  :deal-data="(res) => ({ data: res.data.list, total: res.data.count })"
  :deal-params="(params) => filterEmpty(params)"
  :form-data="formData"
  :form-items="formItems"
  :table-column="tableColumn"
/>
```

:::

---

### 3. 搜索筛选表单

配置 `form-data` 和 `form-items` 即可在表格上方渲染搜索表单。点击"查询"自动重置到第一页并携带表单数据发起请求；点击"重置"清空表单数据并重新加载。

表单使用 `inline` 行内布局，`label-position="top"`，多个搜索条件自动换行排列。

<br>
<ClientOnly>
<LSList
  :list-api="searchListApi"
  :form-data="searchFormData"
  :form-items="searchFormItems"
  :table-column="searchTableColumn"
  :add-fn="() => ElMessage.success('新增')"
  :table-edit-fn="(row) => ElMessage.info('编辑：' + row.name)"
  :table-del-fn="(row, cb) => { cb(true); setTimeout(() => { ElMessage.success('删除'); cb(false) }, 600) }"
/>
</ClientOnly>

::: details 点我查看代码

```js
const searchFormData = ref({
  name: '',
  dept: '',
  status: ''
})

const searchFormItems = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    attrs: { placeholder: '请输入姓名' }
  },
  {
    type: 'select',
    label: '部门',
    prop: 'dept',
    options: [
      { label: '全部',  value: '' },
      { label: '技术部', value: 'tech' },
      { label: '产品部', value: 'product' },
      { label: '设计部', value: 'design' }
    ]
  },
  {
    type: 'select',
    label: '状态',
    prop: 'status',
    options: [
      { label: '全部', value: '' },
      { label: '在职', value: '1' },
      { label: '离职', value: '0' }
    ]
  }
])

const searchTableColumn = ref([
  { label: '姓名', prop: 'name' },
  { label: '部门', prop: 'dept' },
  { label: '状态', prop: 'status' }
])

// listApi 默认格式：{ records: Array, total: number }
function searchListApi(params) {
  return new Promise(resolve => setTimeout(() => resolve({ records: mockUsers, total: mockUsers.length }), 300))
}
```

```html
<LSList
  :list-api="listApi"
  :form-data="formData"
  :form-items="formItems"
  :table-column="tableColumn"
/>
```

:::

---

### 4. 纯展示列表

关闭不需要的区块，LSList 可退化为一个简单的**带分页数据展示表格**，适合日志查看、报表展示等只读场景。

<br>
<ClientOnly>
<LSList
  :list-api="readonlyListApi"
  :table-column="readonlyTableColumn"
  :show-form="false"
  :show-operate="false"
  :show-table-operate="false"
/>
</ClientOnly>

::: details 点我查看代码

```js
const readonlyTableColumn = ref([
  { label: '操作人', prop: 'operator' },
  { label: '操作类型', prop: 'action' },
  { label: '操作时间', prop: 'time' },
  { label: '结果', prop: 'result' }
])

function readonlyListApi() {
  return new Promise(resolve => setTimeout(() => resolve({
    records: [
      { id: 1, operator: '张三', action: '登录', time: '2024-05-01 09:00', result: '成功' },
      { id: 2, operator: '李四', action: '修改密码', time: '2024-05-01 10:30', result: '成功' },
      { id: 3, operator: '王五', action: '导出数据', time: '2024-05-01 14:00', result: '失败' }
    ],
    total: 3
  }), 200))
}
```

```html
<!-- 仅展示，无增删改 -->
<LSList
  :list-api="listApi"
  :table-column="tableColumn"
  :show-form="false"
  :show-operate="false"
  :show-table-operate="false"
/>

<!-- 有搜索但无增删改 -->
<LSList
  :list-api="listApi"
  :form-data="formData"
  :form-items="formItems"
  :table-column="tableColumn"
  :show-add="false"
  :show-table-edit="false"
  :show-table-del="false"
/>
```

:::

---

### 5. 操作按钮区定制

`#operate-prepend` / `#operate-append` 可在添加按钮前后插入额外按钮（如导入/导出），使用 `#operate` 可**完全替换**整个操作区以实现完全自定义布局。

<br>
<ClientOnly>
<div>
  <p style="margin:6px 0;font-size:13px;color:#606266">① 前后置插槽</p>
  <LSList
    :list-api="operateListApi"
    :table-column="operateTableColumn"
    :show-form="false"
    add-btn-text="新增"
    :add-fn="() => ElMessage.success('新增')"
    :table-edit-fn="(row) => ElMessage.info('编辑：' + row.name)"
    :table-del-fn="(row, cb) => { cb(true); setTimeout(() => { ElMessage.success('删除：' + row.name); cb(false) }, 600) }"
  >
    <template #operate-prepend>
      <el-button @click="ElMessage.info('导入')">导入</el-button>
    </template>
    <template #operate-append>
      <el-button @click="ElMessage.warning('导出')">导出</el-button>
    </template>
  </LSList>
  <p style="margin:16px 0 6px;font-size:13px;color:#606266">② 完全自定义操作区（#operate）</p>
  <LSList
    :list-api="operateListApi"
    :table-column="operateTableColumn"
    :show-form="false"
    :table-edit-fn="(row) => ElMessage.info('编辑：' + row.name)"
    :table-del-fn="(row, cb) => { cb(true); setTimeout(() => { ElMessage.success('删除：' + row.name); cb(false) }, 600) }"
  >
    <template #operate>
      <div style="display:flex;gap:8px;align-items:center;padding:16px 0 8px">
        <el-button type="primary" @click="ElMessage.success('新增')">新增商品</el-button>
        <el-button @click="ElMessage.info('批量导入')">批量导入</el-button>
        <el-button @click="ElMessage.warning('导出Excel')">导出 Excel</el-button>
        <span style="margin-left:auto;font-size:13px;color:#909399">共 3 条记录</span>
      </div>
    </template>
  </LSList>
</div>
</ClientOnly>

::: details 点我查看代码

```html
<!-- ① 前后置插槽 -->
<LSList :list-api="listApi" :table-column="tableColumn" add-btn-text="新增">
  <template #operate-prepend>
    <el-button @click="handleImport">导入</el-button>
  </template>
  <template #operate-append>
    <el-button @click="handleExport">导出</el-button>
  </template>
</LSList>

<!-- ② 完全替换操作区 -->
<LSList :list-api="listApi" :table-column="tableColumn">
  <template #operate>
    <div style="display:flex;gap:8px;padding:16px 0 8px">
      <el-button type="primary" @click="handleAdd">新增</el-button>
      <el-button @click="handleBatchImport">批量导入</el-button>
      <el-button @click="handleExport">导出</el-button>
    </div>
  </template>
</LSList>
```

:::

---

### 6. 操作列按钮定制

操作列三个按钮（查看 / 编辑 / 删除）的**文案、类型、显隐、禁用**均支持静态字符串和函数 `(row) => value` 两种形式，可实现**按行差异化控制**：

<br>
<ClientOnly>
<LSList
  :list-api="operateColListApi"
  :table-column="operateColTableColumn"
  :show-form="false"
  :show-table-detail="true"
  :table-detail-text="(row) => row.type === 'admin' ? '管理' : '查看'"
  :table-detail-type="(row) => row.type === 'admin' ? 'warning' : 'primary'"
  :table-edit-text="(row) => row.locked ? '查看' : '编辑'"
  :disabled-table-edit="(row) => row.locked"
  :show-table-del="(row) => !row.locked"
  table-del-text="移除"
  :table-detail-fn="(row) => ElMessage.info((row.type === 'admin' ? '管理' : '查看') + '：' + row.name)"
  :table-edit-fn="(row) => row.locked ? ElMessage.warning('已锁定') : ElMessage.info('编辑：' + row.name)"
  :table-del-fn="(row, cb) => { cb(true); setTimeout(() => { ElMessage.success('移除：' + row.name); cb(false) }, 600) }"
/>
</ClientOnly>

::: details 点我查看代码

```js
const operateColTableColumn = ref([
  { label: '姓名',   prop: 'name' },
  { label: '角色',   prop: 'typeText' },
  { label: '状态',   prop: 'statusText' }
])

function operateColListApi() {
  return new Promise(resolve => setTimeout(() => resolve({
    records: [
      { id: 1, name: '张三', typeText: '管理员', type: 'admin',  statusText: '正常',   locked: false },
      { id: 2, name: '李四', typeText: '普通用户', type: 'user', statusText: '已锁定', locked: true  },
      { id: 3, name: '王五', typeText: '普通用户', type: 'user', statusText: '正常',   locked: false }
    ],
    total: 3
  }), 200))
}
```

```html
<!-- 按 type 动态改变文案和颜色；锁定行禁用编辑并隐藏删除（注释须写在标签外，不可写在属性之间） -->
<LSList
  :list-api="listApi"
  :table-column="tableColumn"
  :table-detail-text="(row) => row.type === 'admin' ? '管理' : '查看'"
  :table-detail-type="(row) => row.type === 'admin' ? 'warning' : 'primary'"
  :table-edit-text="(row) => row.locked ? '查看' : '编辑'"
  :disabled-table-edit="(row) => row.locked"
  :show-table-del="(row) => !row.locked"
/>
```

> **行级数据覆盖**：除了通过 props 函数控制外，还可以在行数据中直接设置 `row.tableDetailText`、`row.tableEditText`、`row.tableDelText`、`row.popconfirmTxt` 属性，优先级高于 props，适合后端直接返回按钮配置的场景。

:::

---

### 7. 删除接口集成

配置 `del-api` 后，点击删除按钮会弹出 popconfirm 确认框，确认后自动调用接口、刷新列表并提示成功。`popconfirm-txt` 自定义确认文案；`del-message` 自定义成功提示；`deal-del-params` 对删除参数进行预处理（默认传 `row[tableRowKey]`）。

<br>
<ClientOnly>
<LSList
  :list-api="delListApi"
  :del-api="mockDelApi"
  :table-column="delTableColumn"
  :show-form="false"
  :show-table-detail="false"
  :show-table-edit="false"
  del-message="删除成功，列表已刷新"
  :popconfirm-txt="(row) => `确认删除「${row.name}」吗？此操作不可撤销。`"
  @del-success="(row) => ElMessage.success('回调：已删除 ' + row.name)"
/>
</ClientOnly>

::: details 点我查看代码

```js
// del-api 默认接收 row[tableRowKey]（即 row.id）
function mockDelApi(id) {
  console.log('删除 id：', id)
  return new Promise(resolve => setTimeout(resolve, 500))
}

// deal-del-params：自定义删除参数（若需传多个字段）
function dealDelParams(row) {
  return { id: row.id, version: row.version }
}

const delTableColumn = ref([
  { label: '姓名', prop: 'name' },
  { label: '部门', prop: 'dept' }
])

function delListApi() {
  return new Promise(resolve => setTimeout(() => resolve({ records: mockUsers, total: mockUsers.length }), 200))
}
```

```html
<LSList
  :list-api="listApi"
  :del-api="delApi"
  :table-column="tableColumn"
  :popconfirm-txt="(row) => `确认删除「${row.name}」吗？`"
  del-message="删除成功"
  :deal-del-params="(row) => ({ id: row.id, version: row.version })"
  @del-success="handleDelSuccess"
/>
```

:::

---

### 8. 启用状态开关

`show-table-switch` 开启开关列。**关闭时**默认弹出 ElMessageBox 确认框，确认后调用 `switch-api`；**开启时**直接调用接口。`disabled-table-switch` 支持函数形式按行禁用开关。

<br>
<ClientOnly>
<LSList
  :list-api="switchListApi"
  :switch-api="mockSwitchApi"
  :table-column="switchTableColumn"
  :show-form="false"
  :show-table-switch="true"
  :table-operate-column="{ width: 200 }"
  switch-prop="enabled"
  table-switch-pop-txt="确认要关闭该功能吗？关闭后前端将停用此服务。"
  :disabled-table-switch="(row) => row.system"
  @switch-success="(row, status) => ElMessage.success((status ? '已开启' : '已关闭') + '：' + row.name)"
/>
</ClientOnly>

::: details 点我查看代码

```js
// switch-api 默认接收 row[tableRowKey]（可用 dealSwitchParams 自定义）
function mockSwitchApi(id) {
  return new Promise(resolve => setTimeout(resolve, 400))
}

const switchTableColumn = ref([
  { label: '名称', prop: 'name' },
  { label: '描述', prop: 'desc' },
  { label: '备注', prop: 'note' }
])

function switchListApi() {
  return new Promise(resolve => setTimeout(() => resolve({
    records: [
      { id: 1, name: '用户注册',     desc: '允许用户注册', enabled: 1, system: false, note: '可关闭' },
      { id: 2, name: '系统核心服务', desc: '不可关闭',     enabled: 1, system: true,  note: '系统必须项' },
      { id: 3, name: '邮件通知',     desc: '发送邮件',     enabled: 0, system: false, note: '可开启' }
    ],
    total: 3
  }), 200))
}
```

```html
<LSList
  :list-api="listApi"
  :switch-api="switchApi"
  :table-column="tableColumn"
  :show-table-switch="true"
  :table-operate-column="{ width: 200 }"
  switch-prop="enabled"
  table-switch-pop-txt="确认关闭此功能？"
  :disabled-table-switch="(row) => row.system"
  @switch-success="(row, status) => handleSwitchSuccess(row, status)"
/>
```

> 操作列宽度会影响左侧数据列可用宽度，进而影响 **`show-overflow-tooltip`** 是否在「名称」等列上出现（仅溢出时才有提示），详见 [注意与说明 → 表格溢出提示与操作列宽度](#list-tooltip-operate-column)。

:::

---

### 9. 弹框操作模式

将 `add-fn`、`table-detail-fn`、`table-edit-fn` 替换为打开弹框的回调，即可将路由跳转改为**弹框内操作**，适合不希望离开当前页面的场景（如审批、快速编辑等）。

<br>
<ClientOnly>
<div>
  <LSList
    :list-api="dialogListApi"
    :table-column="dialogTableColumn"
    :show-form="false"
    add-btn-text="新增（弹框）"
    :add-fn="() => openDialog('add', null)"
    :table-detail-fn="(row) => openDialog('detail', row)"
    :table-edit-fn="(row) => openDialog('edit', row)"
    :table-del-fn="(row, cb) => { cb(true); setTimeout(() => { ElMessage.success('删除：' + row.name); cb(false) }, 600) }"
  />
  <el-dialog v-model="dialogVisible" :title="dialogTitle" width="400px" append-to-body>
    <div style="padding:12px 0">
      <template v-if="dialogMode === 'detail'">
        <p>姓名：{{ dialogRow?.name }}</p>
        <p>部门：{{ dialogRow?.dept }}</p>
      </template>
      <template v-else>
        <el-input v-model="dialogRow.name" placeholder="请输入姓名" style="margin-bottom:12px" />
        <el-input v-model="dialogRow.dept" placeholder="请输入部门" />
      </template>
    </div>
    <template #footer>
      <el-button @click="dialogVisible = false">取消</el-button>
      <el-button type="primary" @click="dialogVisible = false; ElMessage.success('提交成功')">确认</el-button>
    </template>
  </el-dialog>
</div>
</ClientOnly>

::: details 点我查看代码

```js
const dialogVisible = ref(false)
const dialogMode = ref('add')    // 'add' | 'edit' | 'detail'
const dialogTitle = computed(() => ({ add: '新增', edit: '编辑', detail: '详情' }[dialogMode.value]))
const dialogRow = ref({ name: '', dept: '' })

function openDialog(mode, row) {
  dialogMode.value = mode
  dialogRow.value = mode === 'add' ? { name: '', dept: '' } : { ...row }
  dialogVisible.value = true
}

const dialogTableColumn = ref([
  { label: '姓名', prop: 'name' },
  { label: '部门', prop: 'dept' }
])

function dialogListApi() {
  return new Promise(resolve => setTimeout(() => resolve({ records: mockUsers, total: mockUsers.length }), 200))
}
```

```html
<LSList
  :list-api="listApi"
  :table-column="tableColumn"
  :add-fn="() => openDialog('add', null)"
  :table-detail-fn="(row) => openDialog('detail', row)"
  :table-edit-fn="(row) => openDialog('edit', row)"
  :table-del-fn="(row, cb) => handleDelWithLoading(row, cb)"
/>

<el-dialog v-model="dialogVisible" :title="dialogTitle">
  <!-- 弹框内容 -->
</el-dialog>
```

:::

---

### 10. 路由跳转配置

操作列按钮默认跳转规则（使用内部 `useRouterHook`）：

| 按钮 | 默认路径 |
|------|---------|
| 添加 | `${currentPath}/add` |
| 查看 | `${currentPath}/detail/${row.id}` |
| 编辑 | `${currentPath}/edit/${row.id}` |

通过 `add-route-path`、`detail-route-path`、`edit-route-path` 可覆盖：

::: details 点我查看代码

```html
<!-- 使用默认路由规则 -->
<LSList :list-api="listApi" :table-column="tableColumn" />

<!-- 自定义路由路径 -->
<LSList
  :list-api="listApi"
  :table-column="tableColumn"
  add-route-path="/system/user/create"
  detail-route-path="/system/user/view"
  edit-route-path="/system/user/modify"
/>

<!-- 混合：自定义添加路由 + 查看/编辑用弹框 -->
<LSList
  :list-api="listApi"
  :table-column="tableColumn"
  add-route-path="/order/create"
  :table-detail-fn="(row) => openDetailDrawer(row)"
  :table-edit-fn="(row) => openEditDialog(row)"
/>
```

> **路由传参**：查看和编辑的默认路由会在路径末尾追加 `/${row[tableRowKey]}`，例如 `/system/user/edit/123`。如需传递更复杂的参数，请使用 `tableEditFn` / `tableDetailFn` 函数覆盖。

:::

---

### 11. 自定义查询 / 重置

`query-fn` 和 `reset-fn` 覆盖内置行为，适合需要在查询 / 重置时执行额外逻辑（如保存查询条件到本地、触发外部状态更新等）。

<br>
<ClientOnly>
<LSList
  ref="customQueryListRef"
  :list-api="customQueryListApi"
  :form-data="customQueryFormData"
  :form-items="customQueryFormItems"
  :table-column="customQueryTableColumn"
  :query-fn="customQueryFn"
  :reset-fn="customResetFn"
  :table-edit-fn="(row) => ElMessage.info('编辑：' + row.name)"
  :table-del-fn="(row, cb) => { cb(true); setTimeout(() => { ElMessage.success('删除'); cb(false) }, 600) }"
/>
</ClientOnly>

::: details 点我查看代码

```js
const listRef = ref()
const customQueryFormData = ref({ keyword: '', type: '' })

const customQueryFormItems = ref([
  { type: 'input', label: '关键词', prop: 'keyword', attrs: { placeholder: '请输入' } },
  {
    type: 'select', label: '类型', prop: 'type',
    options: [
      { label: '全部', value: '' },
      { label: 'A类', value: 'A' },
      { label: 'B类', value: 'B' }
    ]
  }
])

function customQueryFn(formData) {
  localStorage.setItem('lastQuery', JSON.stringify(formData))
  ElMessage.info('已保存查询条件并触发自定义查询')
  listRef.value?.loadData()
}

function customResetFn(formData) {
  localStorage.removeItem('lastQuery')
  ElMessage.warning('已清除查询历史')
  listRef.value?.handleReset()
}
```

```html
<LSList
  ref="listRef"
  :list-api="listApi"
  :form-data="formData"
  :form-items="formItems"
  :table-column="tableColumn"
  :query-fn="customQueryFn"
  :reset-fn="customResetFn"
/>
```

> **注意**：`query-fn` 需在函数内自行 `loadData()`；查询前组件仍会 `handleCurrentPageChange(1, false)`。`reset-fn` 需在函数内自行 `loadData()` 或 `handleReset()`；表单项已由 LSForm `resetFields` 清空。

:::

---

### 12. 表单插槽

在 LSList 中使用 `#{prop}-form-slot` 插槽，可为搜索表单的指定字段提供自定义渲染（内部以 `itemSlot` 类型透传给 LSForm）。**插槽名规则：`${prop}-form-slot`**，`prop` 需与 `formItems` 中 `type: 'itemSlot'` 项的 `prop` 一致。

同时，`#form-append` 插槽可在所有表单项之后、按钮区域之前插入额外内容。

<br>
<ClientOnly>
<LSList
  :list-api="formSlotListApi"
  :form-data="formSlotFormData"
  :form-items="formSlotFormItems"
  :table-column="formSlotTableColumn"
  :table-edit-fn="(row) => ElMessage.info('编辑：' + row.name)"
  :table-del-fn="(row, cb) => { cb(true); setTimeout(() => { ElMessage.success('删除'); cb(false) }, 600) }"
>
  <template #dateRange-form-slot="{ value, updateModelValue }">
    <el-date-picker
      :model-value="value"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      value-format="YYYY-MM-DD"
      style="width:260px"
      @update:model-value="updateModelValue"
    />
  </template>
</LSList>
</ClientOnly>

::: details 点我查看代码

```js
const formSlotFormData = ref({ name: '', dateRange: null })

const formSlotFormItems = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    attrs: { placeholder: '请输入姓名' }
  },
  {
    // type: 'itemSlot' 声明此项由外部插槽渲染
    // 对应 LSList 上的 #dateRange-form-slot 插槽
    type: 'itemSlot',
    label: '创建日期',
    prop: 'dateRange'
  }
])

const formSlotTableColumn = ref([
  { label: '姓名', prop: 'name' },
  { label: '部门', prop: 'dept' },
  { label: '状态', prop: 'status' }
])
```

```html
<LSList
  :list-api="listApi"
  :form-data="formData"
  :form-items="formItems"
  :table-column="tableColumn"
>
  <!--
    插槽名：${prop}-form-slot
    作用域：{ slotRow, value, updateModelValue }
  -->
  <template #dateRange-form-slot="{ value, updateModelValue }">
    <el-date-picker
      :model-value="value"
      type="daterange"
      value-format="YYYY-MM-DD"
      @update:model-value="updateModelValue"
    />
  </template>

  <!-- form-append：在按钮前插入内容 -->
  <template #form-append>
    <el-button type="primary" plain @click="handleAdvancedSearch">高级搜索</el-button>
  </template>
</LSList>
```

:::

---

### 13. 表格自定义列

在 LSList 中使用 `#{prop}-table-slot` 插槽，可对指定列进行完全自定义渲染（透传给 LSTable 内部 el-table-column 的默认插槽）。**插槽名规则：`${prop}-table-slot`**，作用域为 `{ row, column, $index }`。

<br>
<ClientOnly>
<LSList
  :list-api="tableSlotListApi"
  :table-column="tableSlotTableColumn"
  :show-form="false"
  :table-detail-fn="(row) => ElMessage.info('查看：' + row.name)"
  :table-edit-fn="(row) => ElMessage.info('编辑：' + row.name)"
  :table-del-fn="(row, cb) => { cb(true); setTimeout(() => { ElMessage.success('删除：' + row.name); cb(false) }, 600) }"
>
  <template #status-table-slot="{ row }">
    <el-tag :type="row.statusType" size="small">{{ row.status }}</el-tag>
  </template>
  <template #avatar-table-slot="{ row }">
    <el-avatar :size="32" style="background:#409eff;font-size:14px">{{ row.name[0] }}</el-avatar>
  </template>
  <template #score-table-slot="{ row }">
    <el-rate :model-value="row.score" disabled show-score text-color="#ff9900" />
  </template>
</LSList>
</ClientOnly>

::: details 点我查看代码

```js
const tableSlotTableColumn = ref([
  { label: '头像',  prop: 'avatar', width: '70'  },   // 使用 #avatar-table-slot
  { label: '姓名',  prop: 'name' },
  { label: '部门',  prop: 'dept' },
  { label: '状态',  prop: 'status', width: '90'  },   // 使用 #status-table-slot
  { label: '评分',  prop: 'score',  width: '200' }    // 使用 #score-table-slot
])

function tableSlotListApi() {
  return new Promise(resolve => setTimeout(() => resolve({
    records: [
      { id: 1, name: '张三', dept: '技术部', status: '在职', statusType: 'success', score: 4 },
      { id: 2, name: '李四', dept: '产品部', status: '在职', statusType: 'success', score: 3 },
      { id: 3, name: '王五', dept: '设计部', status: '离职', statusType: 'info',    score: 2 }
    ],
    total: 3
  }), 200))
}
```

```html
<LSList :list-api="listApi" :table-column="tableColumn">
  <!--
    插槽名：${prop}-table-slot
    作用域：{ row, column, $index }
  -->
  <template #status-table-slot="{ row }">
    <el-tag :type="row.statusType">{{ row.status }}</el-tag>
  </template>
  <template #avatar-table-slot="{ row }">
    <el-avatar>{{ row.name[0] }}</el-avatar>
  </template>
</LSList>
```

:::

---

### 14. 操作列前后置插槽

`#table-operate-prepend` / `#table-operate-append` 可在内置操作按钮（查看 / 编辑 / 删除）前后插入额外按钮，作用域为 `{ row }`，可根据行数据动态决定显示哪些操作。

<br>
<ClientOnly>
<LSList
  :list-api="operatePrependListApi"
  :table-column="operatePrependTableColumn"
  :show-form="false"
  :show-table-detail="false"
  :table-edit-fn="(row) => ElMessage.info('编辑：' + row.name)"
  :table-del-fn="(row, cb) => { cb(true); setTimeout(() => { ElMessage.success('删除：' + row.name); cb(false) }, 600) }"
>
  <template #table-operate-prepend="{ row }">
    <el-button link type="success" @click="ElMessage.success('下载报告：' + row.name)">下载</el-button>
  </template>
  <template #table-operate-append="{ row }">
    <el-button v-if="row.status === '在职'" link type="warning" @click="ElMessage.warning('禁用：' + row.name)">禁用</el-button>
    <el-button v-else link type="primary" @click="ElMessage.success('启用：' + row.name)">启用</el-button>
  </template>
</LSList>
</ClientOnly>

::: details 点我查看代码

```js
const operatePrependTableColumn = ref([
  { label: '姓名', prop: 'name' },
  { label: '部门', prop: 'dept' },
  { label: '状态', prop: 'status' }
])
```

```html
<LSList :list-api="listApi" :table-column="tableColumn">
  <!-- 查看/编辑/删除按钮之前 -->
  <template #table-operate-prepend="{ row }">
    <el-button link type="success" @click="download(row)">下载</el-button>
  </template>
  <!-- 查看/编辑/删除按钮之后 -->
  <template #table-operate-append="{ row }">
    <el-button
      v-if="row.status === '在职'"
      link type="warning"
      @click="handleDisable(row)"
    >禁用</el-button>
    <el-button v-else link type="primary" @click="handleEnable(row)">启用</el-button>
  </template>
</LSList>
```

:::

---

### 15. listHookConfig 高级配置 {#list-hook-config-advanced}

`listHookConfig` 直接透传给底层 `useTableListHook`，可控制分页初始值、加载策略、前端全量分页等高级行为：

**① 前端全量分页（isFullDose）**

适合数据量较小（通常几百条内）、后端不支持分页的场景。组件只请求一次接口获取全量数据，全量存在 hook 的 **`tableDataSource`**，表格绑定的 **`tableData`** 由 **`sliceTableData()`** 按当前 **`currentPage` / `pageSize`** 切片；翻页、改每页条数时**只重新切片，不会再次请求** `listApi`。若用户触发列表的 **`handleReset()`**（如搜索区「重置」走默认逻辑），`hook` 仍会 **`loadData()`**，会**再次请求**全量数据，属预期。若接口返回的是**对象**（如 `{ items: [] }`），必须配 **`deal-data`** 转成 `{ data, total }`；若 resolve 的就是**数组**，可不写 `deal-data`。

**务必配置 `table-attrs.pageSizes`：** 底层 LSTable 规定：若父组件传入的 **`pageSize` 不在 `pageSizes` 列表中**，会把每页条数**改成 `pageSizes` 的第一项**。默认 `pageSizes` 为 `[10, 20, 30, …]`，因此仅设 `list-hook-config.pageSizeProp: 2` 时，表格仍会按 **10** 条分页，与「每页 2 条」的文案和切片不一致。请传入**包含当前默认每页数**的 `pageSizes`（示例用 `[2, 5, 10]`）。初始页码默认为 **1**，可用 **`currentPageProp`** 修改。

<br>
<ClientOnly>
<div>
  <p style="margin:4px 0 8px;font-size:13px;color:#606266">isFullDose: true — 接口只请求一次；默认每页 2 条，可改每页条数/翻页，表格数据随切片变化</p>
  <LSList
    :list-api="fullDoseListApi"
    :deal-data="fullDoseDealData"
    :table-column="fullDoseTableColumn"
    :show-form="false"
    :table-attrs="fullDoseTableAttrs"
    :list-hook-config="{ isFullDose: true, pageSizeProp: 2, currentPageProp: 1 }"
    :add-fn="() => ElMessage.success('新增')"
    :table-edit-fn="(row) => ElMessage.info('编辑：' + row.name)"
    :table-del-fn="(row, cb) => { cb(true); setTimeout(() => { ElMessage.success('删除：' + row.name); cb(false) }, 600) }"
  />
</div>
</ClientOnly>

::: details 点我查看代码

```js
// isFullDose 模式下，接口一次返回所有数据
// 使用 dealData 时须返回 { data: Array, total: number }
function fullDoseListApi() {
  return new Promise(resolve => setTimeout(() => resolve({
    code: 0,
    items: [
      { id: 1, name: '张三', dept: '技术部' },
      { id: 2, name: '李四', dept: '产品部' },
      { id: 3, name: '王五', dept: '设计部' },
      { id: 4, name: '赵六', dept: '市场部' },
      { id: 5, name: '钱七', dept: '运营部' }
    ]
  }), 500))
}

function fullDoseDealData(res) {
  return { data: res.items, total: res.items.length }
}

const fullDoseTableColumn = ref([
  { label: '姓名', prop: 'name' },
  { label: '部门', prop: 'dept' }
])

// 须包含 pageSizeProp，否则 LSTable 会把 pageSize 强制改为默认页码数组的第一项（如 10）
const fullDoseTableAttrs = { pageSizes: [2, 5, 10] }
```

```html
<LSList
  :list-api="fullDoseListApi"
  :deal-data="fullDoseDealData"
  :table-column="fullDoseTableColumn"
  :table-attrs="fullDoseTableAttrs"
  :list-hook-config="{
    isFullDose: true,
    currentPageProp: 1,
    pageSizeProp: 2
  }"
/>
```

:::

**② 无分页接口（hasPanigation: false）**

接口不支持分页、一次返回全量数组时，设置 `list-hook-config` 的 **`hasPanigation: false`**：`listApi` **不会**收到 `currentPage` / `pageSize`，`useTableListHook` 会把 resolve 的**数组**直接赋给表格数据。

**重要：** 此模式下 hook **不会**给内部的 `total` 赋值（仍为初始 `0`），而 LSTable **默认仍会渲染底部分页**，会出现「有数据但分页显示 0 条」等不一致。业务上请配合 **`table-attrs`** 传入 **`showPagination: false`** 关闭分页条（与描述「无分页、全量展示」一致）。若返回的不是数组，可再配 **`deal-data`**，只使用其返回的 **`data`** 字段即可。

<br>
<ClientOnly>
<div>
  <p style="margin:4px 0 8px;font-size:13px;color:#606266">hasPanigation: false — 接口直接返回数组，不传分页参数，并关闭底部分页</p>
  <LSList
    :list-api="noPaginationListApi"
    :table-column="noPaginationTableColumn"
    :show-form="false"
    :table-attrs="{ showPagination: false }"
    :list-hook-config="{ hasPanigation: false }"
    :add-fn="() => ElMessage.success('新增')"
    :table-edit-fn="(row) => ElMessage.info('编辑：' + row.name)"
    :table-del-fn="(row, cb) => { cb(true); setTimeout(() => { ElMessage.success('删除：' + row.name); cb(false) }, 600) }"
  />
</div>
</ClientOnly>

::: details 点我查看代码

```js
// hasPanigation: false：params 中不含 currentPage / pageSize；resolve 须为数组（否则须 dealData 抽出 data）
function noPaginationListApi(params) {
  console.log('请求参数（无分页）：', params)
  return new Promise(resolve => setTimeout(() => resolve([
    { id: 1, name: '张三', dept: '技术部' },
    { id: 2, name: '李四', dept: '产品部' },
    { id: 3, name: '王五', dept: '设计部' }
  ]), 300))
}

const noPaginationTableColumn = ref([
  { label: '姓名', prop: 'name' },
  { label: '部门', prop: 'dept' }
])
```

```html
<LSList
  :list-api="noPaginationListApi"
  :table-column="noPaginationTableColumn"
  :table-attrs="{ showPagination: false }"
  :list-hook-config="{ hasPanigation: false }"
/>
```

> **hasPanigation vs isFullDose 对比（与 `useTableListHook` 一致）：**
>
> | | `hasPanigation: false` | `isFullDose: true` |
> |---|---|---|
> | 是否传 `currentPage` / `pageSize` | 否 | 是（每次 `loadData` 都会带；全量模式通常仍只请求一次直至再次刷新） |
> | 典型返回形态 | **数组**，或经 **`deal-data`** 得到 `data` | **数组**可直接用；**对象**必须 **`deal-data`** → `{ data, total }` |
> | 内部 `total` | **不更新**（保持 0），须 **`showPagination: false`** | 使用 `dealData` 的 `total` 或数组 `length`，**有分页条（前端翻页）** |
> | 适用场景 | 接口无分页、一次给全表 | 接口一次给全量列表，但希望前端分页 UI |

:::

**③ 延迟自动加载（autoFetch: false）**

组件挂载后不立即加载数据，等待满足条件后手动调用 `loadData()`。适合需要等待其他异步操作（如权限加载、父组件传参完成）再发起请求的场景。

<br>
<ClientOnly>
<div>
  <p style="margin:4px 0 8px;font-size:13px;color:#606266">autoFetch: false — 不自动加载，点击按钮手动触发</p>
  <div style="margin-bottom:8px;display:flex;gap:8px;align-items:center">
    <el-button type="primary" size="small" @click="autoFetchListRef?.loadData()">手动加载数据</el-button>
    <el-button size="small" @click="autoFetchListRef?.handleReset()">重置并刷新</el-button>
    <span style="font-size:13px;color:#909399">（页面挂载后表格为空，点击按钮才会加载）</span>
  </div>
  <LSList
    ref="autoFetchListRef"
    :list-api="autoFetchListApi"
    :table-column="autoFetchTableColumn"
    :show-form="false"
    :list-hook-config="{ autoFetch: false }"
    :add-fn="() => ElMessage.success('新增')"
    :table-edit-fn="(row) => ElMessage.info('编辑：' + row.name)"
    :table-del-fn="(row, cb) => { cb(true); setTimeout(() => { ElMessage.success('删除：' + row.name); cb(false) }, 600) }"
  />
</div>
</ClientOnly>

::: details 点我查看代码

```js
import { ref, onMounted, nextTick } from 'vue'

const listRef = ref()

// 方式一：挂载后再拉数（避免 ref 尚未绑定）
onMounted(() => {
  nextTick(() => {
    listRef.value?.loadData()
  })
})

// 方式二：等权限、路由参数等异步就绪后再调 loadData（示例）
// onMounted(async () => {
//   await fetchUserPermission()
//   listRef.value?.loadData()
// })

function handleManualLoad() {
  listRef.value?.loadData()
}

const autoFetchTableColumn = ref([
  { label: '姓名', prop: 'name' },
  { label: '部门', prop: 'dept' },
  { label: '状态', prop: 'status' }
])

function autoFetchListApi() {
  return new Promise(resolve => setTimeout(() => resolve({ records: mockUsers, total: mockUsers.length }), 500))
}
```

```html
<!-- 不自动加载：须在合适的时机调用 loadData()（按钮 / onMounted+nextTick 等） -->
<el-button type="primary" @click="handleManualLoad">加载数据</el-button>

<LSList
  ref="listRef"
  :list-api="listApi"
  :table-column="tableColumn"
  :list-hook-config="{ autoFetch: false }"
/>
```

:::

**④ 请求完成回调（callbackAfter）**

`callbackAfter` 在每次接口请求成功后触发。第一个参数为**原始响应**（未经 `dealData` 处理）。第二个参数：在 **`hasPanigation !== false`（默认有分页）** 时为 **`{ tableData, total }`**（二者均为 `Ref`，与列表展示一致）；在 **`hasPanigation: false`** 时源码固定传入 **`{}`**，此时勿依赖 `tableData`/`total`，仅用第一个参数 `res` 即可。适合从响应中提取额外统计数据（总金额、汇总行、服务端 token 等）。

<br>
<ClientOnly>
<div>
  <p style="margin:4px 0 8px;font-size:13px;color:#606266">callbackAfter — 每次请求后从响应提取统计信息</p>
  <div v-if="callbackStats.total > 0" style="margin-bottom:8px;padding:8px 12px;background:var(--vp-c-bg-soft);border-radius:4px;font-size:13px;display:flex;gap:24px">
    <span>共 <b>{{ callbackStats.total }}</b> 条数据</span>
    <span>本页 <b>{{ callbackStats.pageCount }}</b> 条</span>
    <span>平均年龄 <b>{{ callbackStats.avgAge }}</b> 岁</span>
  </div>
  <LSList
    :list-api="callbackListApi"
    :deal-data="callbackDealData"
    :table-column="callbackTableColumn"
    :show-form="false"
    :list-hook-config="callbackListHookConfig"
    :add-fn="() => ElMessage.success('新增')"
    :table-edit-fn="(row) => ElMessage.info('编辑：' + row.name)"
    :table-del-fn="(row, cb) => { cb(true); setTimeout(() => { ElMessage.success('删除：' + row.name); cb(false) }, 600) }"
  />
</div>
</ClientOnly>

::: details 点我查看代码

```js
const statistics = ref({ total: 0, pageCount: 0, avgAge: 0 })

function listApi() {
  return new Promise(resolve => setTimeout(() => resolve({
    code: 0,
    records: [
      { id: 1, name: '张三', age: 28, dept: '技术部' },
      { id: 2, name: '李四', age: 32, dept: '产品部' },
      { id: 3, name: '王五', age: 25, dept: '设计部' }
    ],
    total: 3,
    summary: { avgAge: 28.3 }   // 接口附带统计数据
  }), 300))
}

// dealData 适配格式
function dealData(res) {
  return { data: res.records, total: res.total }
}

const listHookConfig = {
  callbackAfter(res, { tableData, total }) {
    // res：原始响应（含 summary）
    // tableData / total：响应式引用，可读取处理后的值
    statistics.value = {
      total: total.value,
      pageCount: tableData.value.length,
      avgAge: res.summary?.avgAge ?? 0
    }
  }
}
```

```html
<div>
  <div>共 {{ statistics.total }} 条，本页 {{ statistics.pageCount }} 条 | 平均年龄 {{ statistics.avgAge }} 岁</div>

  <LSList
    :list-api="listApi"
    :deal-data="dealData"
    :table-column="tableColumn"
    :list-hook-config="{
      callbackAfter: (res, { tableData, total }) => {
        statistics.value = {
          total: total.value,
          pageCount: tableData.value.length,
          avgAge: res.summary?.avgAge ?? 0
        }
      }
    }"
  />
</div>
```

> `callbackAfter` 第一个参数 `res` 是**原始响应**（未经 dealData 处理），因此即使 `dealData` 只返回 `data`/`total`，仍可在 `callbackAfter` 中访问接口返回的所有字段（如 `summary`、`extra` 等）。
>
> 无分页模式（`hasPanigation: false`）下第二参为 **`{}`**，与 `useTableListHook` 一致。

:::

---

### 16. Expose 方法调用

通过 `ref` 可获取 LSList 实例，调用 `loadData()`、`handleReset()` 等方法，或通过 `FormRef` / `TableRef` 访问内部子组件实例。

**常见场景**：弹框保存后刷新列表、批量操作后刷新、外部按钮触发搜索等。

<br>
<ClientOnly>
<div>
  <div style="margin-bottom:10px;display:flex;flex-wrap:wrap;gap:8px">
    <el-button size="small" type="primary" @click="exposeListRef?.loadData()">loadData（刷新当前页）</el-button>
    <el-button size="small" @click="exposeListRef?.handleReset()">handleReset（重置并刷新）</el-button>
    <el-button size="small" @click="exposeListRef?.setCurrentPage(1)">setCurrentPage(1)</el-button>
    <el-button size="small" @click="ElMessage.info('total=' + exposeListRef?.total + '  page=' + exposeListRef?.currentPage + '  loading=' + exposeListRef?.loading)">读取状态</el-button>
  </div>
  <LSList
    ref="exposeListRef"
    :list-api="exposeListApi"
    :table-column="exposeTableColumn"
    :show-form="false"
    :table-edit-fn="(row) => { ElMessage.success('编辑：' + row.name + '  →  2秒后自动刷新'); setTimeout(() => exposeListRef?.loadData(), 2000) }"
    :table-del-fn="(row, cb) => { cb(true); setTimeout(() => { ElMessage.success('删除：' + row.name); cb(false) }, 600) }"
  />
</div>
</ClientOnly>

::: details 点我查看代码

```js
const listRef = ref()

// 操作成功后刷新列表（不重置页码和表单）
function refreshAfterSave() {
  listRef.value.loadData()
}

// 仅重置页码并刷新（不清空搜索表单；清空表单需 FormRef.resetForm）
function resetPageAndReload() {
  listRef.value.handleReset()
}

// 跳转到指定页（与内部分页、currentPage watch 联动，通常会触发加载）
function goToPage(page) {
  listRef.value.setCurrentPage(page)
}

// 读取当前状态
function readState() {
  const { total, currentPage, pageSize, loading } = listRef.value
  console.log({ total, currentPage, pageSize, loading })
}

// 访问内部 LSForm（可调用 validate、resetForm 等）
function validateSearchForm() {
  listRef.value.FormRef?.validate()
}

// 访问内部 LSTable → el-table（可调用 clearSelection、getSelectionRows 等）
function getSelectedRows() {
  return listRef.value.TableRef?.TableRef?.getSelectionRows()
}
```

```html
<el-button @click="refreshAfterSave">保存并刷新</el-button>
<el-button @click="resetPageAndReload">回第一页并刷新</el-button>

<LSList
  ref="listRef"
  :list-api="listApi"
  :table-column="tableColumn"
/>
```

:::

---

### 17. 文案与样式定制

LSList 中**面向用户的文案**与**操作列按钮类型**均可通过 props 或行数据覆盖。**默认值与字段对照**见 [LSList 文案与默认值速查](#list-copy-reference)（位于「基础用法」之后，与 API 章节同级）。本节用完整示例演示实际效果。

<br>
<ClientOnly>
<LSList
  :list-api="textCustomListApi"
  :table-column="textCustomTableColumn"
  :show-form="false"
  add-btn-text="新建记录"
  table-detail-text="详情"
  table-detail-type="success"
  table-edit-text="修改"
  table-edit-type="warning"
  table-del-text="移除"
  table-del-type="danger"
  :popconfirm-txt="(row) => `移除「${row.name}」后不可恢复，确认操作？`"
  :del-message="(row) => `「${row.name}」已成功移除`"
  :table-operate-column="{ label: '动作', width: '180' }"
  :table-del-fn="(row, cb) => { cb(true); setTimeout(() => { ElMessage.success('移除：' + row.name); cb(false) }, 600) }"
  :table-detail-fn="(row) => ElMessage.success('详情：' + row.name)"
  :table-edit-fn="(row) => ElMessage.warning('修改：' + row.name)"
/>
</ClientOnly>

::: details 点我查看代码

```js
const textCustomTableColumn = ref([
  { label: '姓名', prop: 'name' },
  { label: '部门', prop: 'dept' },
  { label: '状态', prop: 'status' }
])

function textCustomListApi() {
  return new Promise(resolve => setTimeout(() => resolve({ records: mockUsers, total: mockUsers.length }), 200))
}
```

```html
<!--
  ① 操作区按钮文案 ② 操作列按钮文案与类型 ③ 删除确认文案（支持函数）
  ④ 删除成功提示（支持函数） ⑤ 操作列列头与宽度
-->
<LSList
  :list-api="listApi"
  :table-column="tableColumn"
  add-btn-text="新建记录"
  table-detail-text="详情"
  table-detail-type="success"
  table-edit-text="修改"
  table-edit-type="warning"
  table-del-text="移除"
  table-del-type="danger"
  :popconfirm-txt="(row) => `移除「${row.name}」后不可恢复，确认操作？`"
  :del-message="(row) => `「${row.name}」已成功移除`"
  :table-operate-column="{ label: '动作', width: '180' }"
/>
```

> **开关列标题修改**：通过 `table-switch-column` 配置。
>
> ```html
> <LSList
>   :show-table-switch="true"
>   :table-switch-column="{ label: '启用状态', width: '100' }"
>   table-switch-pop-txt="确认关闭此项？"
> />
> ```

> **行数据字段覆盖**：后端接口可直接在每条行数据中返回 `tableDetailText`、`tableEditText`、`tableDelText`、`popconfirmTxt` 字段，优先级高于所有 props 配置，无需前端额外处理。
>
> ```js
> // 后端直接下发按钮文案（最高优先级）
> { id: 1, name: '张三', tableEditText: '审批', tableDelText: '撤回', popconfirmTxt: '确认撤回此申请？' }
> ```

:::

---

### 18. 样式定制（卡片布局） {#list-style-card}

搜索表单与「操作栏 + 表格」在 DOM 上是兄弟节点，可通过 **`form-class`**、**`operate-class`** 分别给表单根节点、操作栏容器加上卡片样式类；再为内部的 **`.ls-table-wrap`**（LSTable 根节点，含表格与分页）写**底边圆角与边框**，与操作栏**共用上边框**，即可在视觉上连成**第二张卡片**。

要点：**`:show-operate-divider="false"`** 去掉表单与操作区之间的虚线；用 **`margin-top: 0`** 去掉表格区与操作栏之间的空隙。业务页可在**外层包一层容器**用普通选择器写样式（本文演示如此），或在 **`scoped` 样式**里给 `LSList` 根加 `class` 并配合 **`:deep(.ls-table-wrap)`** 等选择器。

<br>
<ClientOnly>
<div class="lsdoc-list-card-page-wrap">
  <LSList
    :list-api="cardStyleListApi"
    :form-data="cardStyleFormData"
    :form-items="cardStyleFormItems"
    :table-column="cardStyleTableColumn"
    form-class="lsdoc-card-form"
    operate-class="lsdoc-card-toolbar"
    :show-operate-divider="false"
    add-btn-text="新建"
    :add-fn="() => ElMessage.success('新建')"
    :table-edit-fn="(row) => ElMessage.info('编辑：' + row.name)"
    :table-del-fn="(row, cb) => { cb(true); setTimeout(() => { ElMessage.success('删除'); cb(false) }, 600) }"
  />
</div>
</ClientOnly>

::: details 点我查看代码

```html
<!-- 外层容器：缩小样式作用域，避免影响同页其它列表 -->
<div class="lsdoc-list-card-page-wrap">
  <LSList
    :list-api="listApi"
    :form-data="formData"
    :form-items="formItems"
    :table-column="tableColumn"
    form-class="lsdoc-card-form"
    operate-class="lsdoc-card-toolbar"
    :show-operate-divider="false"
  />
</div>
```

```css
/* 非 scoped：与本文档页底样式一致，可直接复用 */
.lsdoc-list-card-page-wrap {
  padding: 4px 0;
}
.lsdoc-list-card-page-wrap .lsdoc-card-form {
  padding: 16px 16px 8px;
  margin-bottom: 16px;
  background: var(--el-bg-color);
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 8px;
  box-shadow: var(--el-box-shadow-light);
}
.lsdoc-list-card-page-wrap .lsdoc-card-toolbar {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  padding: 12px 16px;
  background: var(--el-bg-color);
  border: 1px solid var(--el-border-color-lighter);
  border-bottom: none;
  border-radius: 8px 8px 0 0;
}
.lsdoc-list-card-page-wrap .ls-table-wrap {
  margin-top: 0 !important;
  padding: 0 16px 16px;
  background: var(--el-bg-color);
  border: 1px solid var(--el-border-color-lighter);
  border-top: none;
  border-radius: 0 0 8px 8px;
  box-shadow: var(--el-box-shadow-light);
}
```

在 **`scoped` + `LSList` 根 `class="my-page-list"`** 时，把上面选择器改成 `.my-page-list :deep(.lsdoc-card-form)`、`:deep(.lsdoc-card-toolbar)`、`:deep(.ls-table-wrap)` 即可。

:::

---

## 基础用法

通过 `list-api` + `table-column` 即可完成最小化配置，其余属性按需扩展。LSList 在挂载时会自动发起**首次数据加载**，首次加载时显示骨架屏（可通过 `show-skeleton="false"` 关闭）。

```html
<LSList :list-api="listApi" :table-column="tableColumn" />
```

```js
function listApi(params) {
  return request.get('/api/list', { params }).then(res => ({
    records: res.data.list,
    total: res.data.total
  }))
}
```

**数据流转过程：**

```
[组件挂载 / 翻页改 pageSize]
      ↓
dealParams(formData + pagination) → listApi(params) → … → 渲染表格

[点击搜索「查询」]
      ↓
handleCurrentPageChange(1, false)   ← 当前页先置为 1，本轮不请求
      ↓
emit('submitForm', formData)
      ↓
默认：loadData()  /  自定义 queryFn：仅执行你写的函数（须自行 loadData）
      ↓
dealParams(formData + pagination) → listApi(params) → …
```

```
Promise.resolve(rawResponse)
      ↓
有 dealData → dealData(rawResponse) → { data: [], total: number }
无 dealData → 直接读取 rawResponse → { records: [], total: number }
      ↓
渲染 LSTable
```

::: tip
配置 `query-fn` 时：**页码仍会在查询前被置为 1**（与默认查询一致），只有 **`loadData()` 被你的函数替换**；若不在 `query-fn` 里调用 `loadData()`，列表不会刷新。
:::

**`listApi` 默认响应格式（无 dealData 时）：**

```js
// listApi 接收的参数结构（formData 字段 + 分页字段合并）
{
  // ...表单字段（来自 formData）
  pageSize: 10,      // 每页条数
  currentPage: 1     // 当前页码
}

// ⚠️ listApi 默认须返回（字段名必须是 records 和 total）
{
  records: [...],   // 当前页数据数组
  total: 100        // 总条数
}
```

**接口格式适配（dealData）：**

```js
// 当接口返回格式不是 { records, total } 时，使用 dealData 适配
// ⚠️ dealData 函数必须返回 { data: Array, total: number }（字段名固定）

// 示例：接口返回 { status: 'ok', payload: { items: [], pagination: { total: 0 } } }
function dealData(res) {
  return {
    data: res.payload.items,         // 固定用 data
    total: res.payload.pagination.total
  }
}

// 示例：接口返回 { code: 0, result: { list: [], count: 0 } }
function dealData(res) {
  return {
    data: res.result.list,
    total: res.result.count
  }
}
```

---

## LSList 文案与默认值速查 {#list-copy-reference}

以下汇总列表页中**可定制的文案与按钮类型**及其**源码默认值**（与 `types.ts` / `List.vue` 一致）。支持函数的项可写 `(row) => string`，实现按行变化。

```html
<!-- 最小改文案：静态字符串（无冒号 = 字面量） -->
<LSList
  :list-api="listApi"
  :table-column="tableColumn"
  add-btn-text="新建"
  table-detail-text="详情"
  table-edit-text="修改"
  table-del-text="移除"
/>
```

```html
<!-- 同上能力：文案 / 按钮 type 按行变化，用 (row) => …（须加冒号绑定） -->
<LSList
  :list-api="listApi"
  :table-column="tableColumn"
  add-btn-text="新建"
  :table-detail-text="(row) => (row.type === 'admin' ? '管理' : '查看')"
  :table-detail-type="(row) => (row.type === 'admin' ? 'warning' : 'primary')"
  :table-edit-text="(row) => (row.locked ? '只读' : '编辑')"
  :table-edit-type="(row) => (row.locked ? 'info' : 'primary')"
  :table-del-text="(row) => (row.archived ? '清理' : '删除')"
  :table-del-type="(row) => (row.archived ? 'warning' : 'danger')"
  :popconfirm-txt="(row) => '确认删除「' + row.name + '」？'"
  :del-message="(row) => '「' + row.name + '」已删除'"
/>
```

| 配置项 | 默认值 | 支持函数 | 说明 |
|--------|--------|---------|------|
| `addBtnText` | `'添加'` | — | 操作区添加按钮文案 |
| `tableDetailText` | `'查看'` | ✓ `(row) => string` | 操作列查看按钮文案 |
| `tableDetailType` | `'primary'` | ✓ `(row) => string` | 查看按钮 Element Plus 类型 |
| `tableEditText` | `'编辑'` | ✓ `(row) => string` | 操作列编辑按钮文案 |
| `tableEditType` | `'primary'` | ✓ `(row) => string` | 编辑按钮 Element Plus 类型 |
| `tableDelText` | `'删除'` | ✓ `(row) => string` | 操作列删除按钮文案 |
| `tableDelType` | `'danger'` | ✓ `(row) => string` | 删除按钮 Element Plus 类型 |
| `popconfirmTxt` | `是否${delText}当前行数据？` | ✓ `(row) => string` | 删除确认弹框标题（`delText` 为当前行解析后的删除按钮文案） |
| `delMessage` | `''`（空则走 `${delText}成功`） | ✓ `(row) => string` | 删除成功 ElMessage 提示 |
| `tableSwitchPopTxt` | `'请问是否关闭？'` | — | 开关**关闭**前 ElMessageBox 确认文案 |
| `tableOperateColumn.label` | `'操作'` | — | 操作列表头（`tableOperateColumn`） |
| `tableSwitchColumn.label` | `'是否开启'` | — | 开关列表头（`tableSwitchColumn`） |

**文案优先级（操作列按钮）**——行数据字段优先于 props，props 优先于组件内硬编码兜底：

```text
row.tableDetailText > tableDetailText prop > '查看'
row.tableEditText   > tableEditText prop   > '编辑'
row.tableDelText    > tableDelText prop    > '删除'
row.popconfirmTxt   > popconfirmTxt prop   > 是否${getTableDelText(row)}当前行数据？
```

**集中维护：对象形态配置（可配合 `v-bind` 展开）**

```js
// 文案与按钮类型集中在一个对象里，便于多环境 / 主题切换
// 支持函数项可写 (row) => string，与模板里 :table-xxx-text="(row) => …" 等价
export const listCopyConfig = {
  addBtnText: '新建记录',
  tableDetailText: '详情',
  tableDetailType: 'success',
  tableEditText: (row) => (row.locked ? '查看' : '修改'),
  tableEditType: (row) => (row.locked ? 'info' : 'warning'),
  tableDelText: '移除',
  tableDelType: 'danger',
  tableSwitchPopTxt: '确认关闭此项？',
  tableOperateColumn: { label: '动作', width: '180' },
  tableSwitchColumn: { label: '启用状态', width: '100' },
  popconfirmTxt: (row) => '确认移除「' + row.name + '」？',
  delMessage: (row) => '「' + row.name + '」已移除'
}
```

```html
<LSList
  :list-api="listApi"
  :table-column="tableColumn"
  v-bind="listCopyConfig"
/>
```

**逐项写在模板上的等价写法**

```html
<LSList
  :list-api="listApi"
  :table-column="tableColumn"
  add-btn-text="新建记录"
  table-detail-text="详情"
  table-detail-type="success"
  :table-edit-text="(row) => (row.locked ? '查看' : '修改')"
  :table-edit-type="(row) => (row.locked ? 'info' : 'warning')"
  table-del-text="移除"
  table-del-type="danger"
  table-switch-pop-txt="确认关闭此项？"
  :table-operate-column="{ label: '动作', width: '180' }"
  :table-switch-column="{ label: '启用状态', width: '100' }"
  :popconfirm-txt="(row) => '确认移除「' + row.name + '」？'"
  :del-message="(row) => '「' + row.name + '」已移除'"
/>
```

**行数据覆盖（后端下发，最高优先级）**

```js
// 列表接口返回的每条 record 可直接带按钮文案字段
{
  id: 1,
  name: '张三',
  tableDetailText: '审批详情',
  tableEditText: '去审批',
  tableDelText: '撤回',
  popconfirmTxt: '确认撤回该申请？'
}
```

---

## LSList 属性（Props） {#lslist-props}

```html
<!-- 常用 props 一览（按需删减） -->
<LSList
  :list-api="listApi"
  :deal-data="dealData"
  :deal-params="dealParams"
  :list-hook-config="listHookConfig"
  :del-api="delApi"
  :switch-api="switchApi"
/>
```

### 数据与接口

```js
// listApi + dealData（非 { records, total } 接口时）
const dealData = res => ({ data: res.result.rows, total: res.result.totalCount })
```

| 属性名 | 说明 | 类型 | 默认值 |
|--------|------|------|--------|
| **listApi** | 列表数据接口函数，接收（formData + 分页参数）作为入参，须返回 `Promise`。默认响应须为 `{ records: Array, total: number }` | `Function` | — |
| **dealParams** | 对请求参数预处理，返回值替代原始参数传给 listApi | `(params: object) => any` | — |
| **dealData** | 适配接口响应格式，必须返回 `{ data: Array, total: number }` 结构 | `(res: any) => { data: any[], total: number }` | — |
| **listHookConfig** | 透传给底层 `useTableListHook` 的额外配置项，详见下方子选项说明 | `Object` | — |
| **delApi** | 删除接口函数，默认接收 `row[tableRowKey]` 作为参数，须返回 `Promise` | `Function` | — |
| **dealDelParams** | 对删除请求参数预处理，接收整行数据，返回值作为 `delApi` 参数 | `(row: object) => any` | — |
| **delMessage** | 删除成功提示文案；为函数时接收整行数据动态返回文案 | `string \| (row: object) => string` | `''` |
| **switchApi** | 开关切换接口函数，默认接收 `row[tableRowKey]`，须返回 `Promise` | `Function` | — |
| **dealSwitchParams** | 对开关切换请求参数预处理 | `(row: object) => any` | — |

**listHookConfig 子选项：**

| 子选项 | 说明 | 类型 | 默认值 |
|--------|------|------|--------|
| `currentPageProp` | 初始页码 | `number` | `1` |
| `pageSizeProp` | 初始每页条数 | `number` | `10` |
| `autoFetch` | 组件挂载时是否自动加载数据。设为 `false` 可延迟首次加载，需手动调用 `loadData()` | `boolean` | `true` |
| `hasPanigation` | 是否携带分页参数（`currentPage`、`pageSize`）请求接口。设为 `false` 时不传分页参数，`listApi` 宜返回**数组**（或 `dealData` 返回 `data`）；此模式下 hook **不更新 `total`**，需自行 **`table-attrs.showPagination: false`** 以免底部分页与数据不符 | `boolean` | `true` |
| `isFullDose` | 是否一次性加载全量数据并在**前端**切片分页；翻页/改 `pageSize` 只调 `sliceTableData`，不重复请求。`pageSizeProp` 须与 **`table-attrs.pageSizes`** 对齐（否则 LSTable 会把 `pageSize` 改成 `pageSizes[0]`，常见为 10） | `boolean` | `false` |
| `isDelayLoader` | 是否启用延迟加载器（骨架屏效果增强）。开启后接口响应不会立即渲染，等待 `delayLoaderTime` 毫秒后再呈现，避免闪屏 | `boolean` | `false` |
| `delayLoaderTime` | 延迟加载时间（毫秒），仅 `isDelayLoader: true` 时生效 | `number` | `300` |
| `callbackAfter` | 每次请求完成后的回调。有分页时第二参为 `{ tableData, total }`（`Ref`）；**`hasPanigation: false` 时第二参为 `{}`** | `Function` | — |

```js
const listHookConfig = {
  pageSizeProp: 20,
  autoFetch: false,
  isFullDose: false,
  callbackAfter: (res, { total }) => { console.log(total.value) }
}
```

::: warning
`listHookConfig` 中**不应设置** `dealData` 和 `dealParams`——这两项应使用 LSList 的同名顶层 prop。由于底层展开顺序的原因，`listHookConfig` 中的同名字段会覆盖顶层 prop，造成混淆。
:::

### 搜索表单

```html
<LSList
  :list-api="listApi"
  :form-data="searchForm"
  :form-items="searchItems"
  :table-column="tableColumn"
  :form-attrs="{ column: 3 }"
/>
```

| 属性名 | 说明 | 类型 | 默认值 |
|--------|------|------|--------|
| **showForm** | 是否显示搜索表单区域 | `boolean` | `true` |
| **formClass** | 表单根元素追加的 class | `string` | `''` |
| **formData** | 搜索表单绑定的数据对象（同 LSForm form-data） | `Object` | `{}` |
| **formItems** | 搜索表单项配置数组（同 LSForm form-items） | `Array` | `[]` |
| **formAttrs** | 透传给内部 LSForm 的额外属性（如 label-width、column 等） | `Object` | `{}` |
| **queryFn** | 覆盖查询时的 **`loadData()`**；**之前仍会**执行 `handleCurrentPageChange(1, false)`（当前页置为 1，本轮不拉数）。须在 `queryFn` 内自行 `loadData()`，否则列表不刷新 | `(formData: object) => void` | — |
| **resetFn** | 覆盖列表侧的 **`handleReset()`**（回第一页并刷新）。用户点击「重置」时，LSForm **已先** `resetFields`，与是否配置 `resetFn` 无关；若自定义 `resetFn`，须自行 `loadData()` / `handleReset()` 等刷新列表 | `(formData: object) => void` | — |

```js
// queryFn：须自行 loadData
const queryFn = form => { listRef.value?.loadData() }
```

### 操作按钮区

```html
<LSList :list-api="listApi" :table-column="cols" add-btn-text="新建" :add-fn="onAdd">
  <template #operate-prepend><el-button>导入</el-button></template>
</LSList>
```

| 属性名 | 说明 | 类型 | 默认值 |
|--------|------|------|--------|
| **showOperate** | 是否显示操作按钮区域（含分割线和按钮） | `boolean` | `true` |
| **showOperateDivider** | 表单区与操作区之间是否显示虚线分割线 | `boolean` | `true` |
| **operateClass** | 操作区容器追加的 class | `string` | `''` |
| **showAdd** | 是否显示添加按钮 | `boolean` | `true` |
| **disabledAddBtn** | 是否禁用添加按钮（loading 时自动禁用） | `boolean` | `false` |
| **addBtnText** | 添加按钮文案 | `string` | `'添加'` |
| **addBtnAttrs** | 透传给添加按钮（`el-button`）的额外属性 | `Object` | `{}` |
| **addFn** | 覆盖添加按钮默认路由跳转行为 | `() => void` | — |

### 数据表格

```html
<LSList
  :list-api="listApi"
  :table-column="tableColumn"
  :table-attrs="{ stripe: true, border: true }"
  :table-listeners="{ 'selection-change': onSelectionChange }"
/>
```

| 属性名 | 说明 | 类型 | 默认值 |
|--------|------|------|--------|
| **tableColumn** | 表格列配置数组（同 LSTable table-column，支持 type: date/status/slot 等） | `Array` | `[]` |
| **tableRowKey** | 行唯一键字段名，用于操作列传参和开关 loading 匹配 | `string` | `'id'` |
| **tableAttrs** | 透传给内部 LSTable；LSTable 最终将其中与 `el-table` 兼容的项绑定到 **`el-table`**（`inheritAttrs: false`，以组件实现为准） | `Object` | `{}` |
| **tableListeners** | 透传给内部 LSTable 的事件对象（如 `{ 'selection-change': fn }`） | `Object` | `{}` |
| **showSkeleton** | 首次加载时是否显示骨架屏（仅首次生效） | `boolean` | `true` |
| **skeletonAttrs** | 透传给骨架屏（`el-skeleton`）的额外属性 | `Object` | `{}` |

### 开关列

```html
<LSList
  :list-api="listApi"
  :switch-api="switchApi"
  :table-column="tableColumn"
  :show-table-switch="true"
  switch-prop="enabled"
  table-switch-pop-txt="确认关闭？"
  :table-switch-column="{ label: '启用', width: '100' }"
/>
```

| 属性名 | 说明 | 类型 | 默认值 |
|--------|------|------|--------|
| **showTableSwitch** | 是否在表格中显示开关列 | `boolean` | `false` |
| **switchProp** | 开关绑定的行数据字段名（值为 truthy 时表示开启） | `string` | `'status'` |
| **tableSwitchColumn** | 透传给开关列（`el-table-column`）的额外属性（如 label、width） | `Object` | `{}` |
| **tableSwitchAttrs** | 透传给开关控件（`el-switch`）的额外属性 | `Object` | `{}` |
| **tableSwitchPopTxt** | 关闭前 ElMessageBox 的确认提示文案 | `string` | `'请问是否关闭？'` |
| **tableSwitchPopAttrs** | 透传给 ElMessageBox 确认弹框的额外配置 | `Object` | `{}` |
| **disabledTableSwitch** | 开关是否禁用，函数形式接收整行数据 | `boolean \| (row: object) => boolean` | `false` |

**开关交互说明（与 `List.vue` 一致）**

- 列绑定字段由 **`switch-prop`** 指定；单元格内为 **`el-switch`**，`active-value` / `inactive-value` 为 **`1` / `0`**，请保证行数据该字段与之一致（或可被隐式转换），否则显示会与数据不同步。
- **从「开」切到「关」**（当前行为 `row[switchProp]` 为真时去关闭）：会先弹出 **`table-switch-pop-txt`**（及 **`table-switch-pop-attrs`**）的确认框，确认后再请求 **`switch-api`**。
- **从「关」切到「开」**：不经过确认框，直接调 **`switch-api`**。
- 请求参数默认为 **`row[tableRowKey]`**；配置了 **`deal-switch-params`** 时，以 **`dealSwitchParams(row)`** 的返回值作为入参。
- 成功后组件内会 **`loadData(false)`** 刷新列表，并 **`emit('switchSuccess', row, status)`**（`status` 为切换前传入的状态位，用于区分开/关语义时请结合业务校验）。

### 操作列

```html
<LSList
  :list-api="listApi"
  :del-api="delApi"
  :table-column="tableColumn"
  add-route-path="/user/create"
  detail-route-path="/user/detail"
  edit-route-path="/user/edit"
  :table-detail-fn="row => openDetail(row)"
  :disabled-table-edit="row => row.locked"
/>
```

| 属性名 | 说明 | 类型 | 默认值 |
|--------|------|------|--------|
| **showTableOperate** | 是否显示操作列 | `boolean` | `true` |
| **tableOperateColumn** | 透传给操作列（`el-table-column`）的额外属性（如 label、width、fixed） | `Object` | `{}` |
| **addRoutePath** | 添加页路由路径，默认 `${currentPath}/add` | `string` | `''` |
| **detailRoutePath** | 详情页路由路径，默认 `${currentPath}/detail` | `string` | `''` |
| **editRoutePath** | 编辑页路由路径，默认 `${currentPath}/edit` | `string` | `''` |
| **tableDetailFn** | 覆盖查看按钮行为，接收整行数据 | `(row: object) => void` | — |
| **tableEditFn** | 覆盖编辑按钮行为，接收整行数据 | `(row: object) => void` | — |
| **tableDelFn** | 覆盖删除按钮行为，接收 `(row, setLoading)` 两个参数 | `(row: object, setLoading: (v: boolean) => void) => void` | — |
| **showTableDetail** | 查看按钮显隐控制 | `boolean \| (row: object) => boolean` | `true` |
| **disabledTableDetail** | 查看按钮禁用控制 | `boolean \| (row: object) => boolean` | `false` |
| **tableDetailText** | 查看按钮文案 | `string \| (row: object) => string` | `'查看'` |
| **tableDetailType** | 查看按钮类型（Element Plus button type） | `string \| (row: object) => string` | `'primary'` |
| **tableDetailBtnAttrs** | 透传给查看按钮（`el-button`）的额外属性 | `Object` | `{}` |
| **showTableEdit** | 编辑按钮显隐控制 | `boolean \| (row: object) => boolean` | `true` |
| **disabledTableEdit** | 编辑按钮禁用控制 | `boolean \| (row: object) => boolean` | `false` |
| **tableEditText** | 编辑按钮文案 | `string \| (row: object) => string` | `'编辑'` |
| **tableEditType** | 编辑按钮类型 | `string \| (row: object) => string` | `'primary'` |
| **tableEditBtnAttrs** | 透传给编辑按钮的额外属性 | `Object` | `{}` |
| **showTableDel** | 删除按钮显隐控制 | `boolean \| (row: object) => boolean` | `true` |
| **disabledTableDel** | 删除按钮禁用控制 | `boolean \| (row: object) => boolean` | `false` |
| **tableDelText** | 删除按钮文案 | `string \| (row: object) => string` | `'删除'` |
| **tableDelType** | 删除按钮类型 | `string \| (row: object) => string` | `'danger'` |
| **tableDelBtnAttrs** | 透传给删除按钮的额外属性 | `Object` | `{}` |
| **tableDelPopAttrs** | 透传给删除确认框（`el-popconfirm`）的额外属性 | `Object` | `{}` |
| **popconfirmTxt** | 删除确认框文案，默认 `是否${delText}当前行数据？` | `string \| (row: object) => string` | `''` |

> **行级数据覆盖（优先级最高）**：行数据中直接设置以下字段可覆盖同名 props：`row.tableDetailText`、`row.tableEditText`、`row.tableDelText`、`row.popconfirmTxt`。适合后端直接下发按钮配置的场景，优先级高于所有 props。

---

## LSList 事件（Events）

```html
<LSList
  :list-api="listApi"
  :table-column="cols"
  @submit-form="onSubmit"
  @reset-form="onReset"
  @del-success="onDelOk"
  @switch-success="onSwitchOk"
  @handle-loading="onLoading"
  @handle-current-page="onPage"
  @handle-page-size="onSize"
/>
```

| 事件名（脚本） | 模板监听（kebab-case） | 说明 | 回调参数 |
|--------|--------|------|----------|
| **submitForm** | `@submit-form` | 搜索表单提交（查询按钮）后触发 | `(formData: object)` |
| **resetForm** | `@reset-form` | 搜索表单重置（重置按钮）后触发 | `(formData: object)` |
| **delSuccess** | `@del-success` | 仅内置 **`del-api`** 删除成功时触发；自定义 **`table-del-fn`** 不会触发 | `(row: object, flag: boolean)`，`flag` 源码固定为 `true`，**不是**接口返回体 |
| **switchSuccess** | `@switch-success` | 内置 **`switch-api`** 调用成功后触发 | `(row: object, status: any)` |
| **handleLoading** | `@handle-loading` | 列表 loading 变化 | `(loading: boolean)` |
| **handleCurrentPage** | `@handle-current-page` | 当前页变化（含程序化改页触发的 watch） | `(currentPage: number)` |
| **handlePageSize** | `@handle-page-size` | 每页条数变化 | `(pageSize: number)` |

---

## LSList 插槽（Slots）

```html
<!-- 命名规则：${prop}-form-slot / ${prop}-table-slot -->
<LSList :list-api="listApi" :form-items="items" :table-column="cols">
  <template #form-append>...</template>
  <template #keyword-form-slot="{ value, updateModelValue }">...</template>
  <template #status-table-slot="{ row }">...</template>
  <template #table-operate-prepend="{ row }">...</template>
</LSList>
```

### 搜索表单插槽

```html
<template #form-append><el-button>高级筛选</el-button></template>
<template #dateRange-form-slot="{ value, updateModelValue }">
  <el-date-picker :model-value="value" @update:model-value="updateModelValue" />
</template>
```

| 插槽名 | 说明 | 作用域参数 |
|--------|------|------------|
| **#form-append** | 在所有表单项之后、查询/重置按钮之前插入自定义内容（透传给 LSForm default 插槽） | `{ ... }` |
| **#{prop}-form-slot** | 为 `type: 'itemSlot'` 表单项提供自定义渲染，插槽名须以 `-form-slot` 结尾 | `{ slotRow, value, updateModelValue }` |

### 操作区插槽

```html
<template #operate-prepend><el-button>导入</el-button></template>
<template #operate-append><el-button>导出</el-button></template>
<template #operate><div class="toolbar">完全自定义操作区</div></template>
```

| 插槽名 | 说明 | 作用域参数 |
|--------|------|------------|
| **#operate** | **完全替换**操作按钮区域（含分割线），使用此插槽时 showAdd 等属性失效 | — |
| **#operate-prepend** | 添加按钮之前插入内容 | — |
| **#operate-append** | 添加按钮之后插入内容 | — |

使用 **`#operate`** 时：不再渲染「表单区与操作区之间」的**默认虚线分割线**（`show-operate-divider` 仅作用于内置操作条那一支）；**`show-add`、`add-btn-text`、`add-fn` 等内置添加按钮相关 props 也不会再生效**，需在插槽内自行放置按钮。若只需在「添加」两侧加按钮，请用 **`#operate-prepend` / `#operate-append`**，以保留默认添加按钮与分割线逻辑。

### 表格插槽

```html
<template #amount-table-slot="{ row }">{{ row.amount }} 元</template>
<template #table-operate-prepend="{ row }"><el-button link>下载</el-button></template>
<template #table-append="{ tableData }"><el-table-column label="备注" /></template>
```

| 插槽名 | 说明 | 作用域参数 |
|--------|------|------------|
| **#{prop}-table-slot** | 为指定列单元格提供自定义渲染，插槽名须以 `-table-slot` 结尾 | `{ row, column, $index }` |
| **#table-operate-prepend** | 操作列内置按钮（查看/编辑/删除）之前插入内容 | `{ row }` |
| **#table-operate-append** | 操作列内置按钮（查看/编辑/删除）之后插入内容 | `{ row }` |
| **#table-append** | 表格所有配置列之后追加额外列（如汇总列、自定义操作列） | `{ tableData }` |

---

## LSList 暴露（Expose）

通过 `ref` 可访问以下方法和属性：

```html
<LSList ref="listRef" :list-api="listApi" :table-column="cols" />
```

```js
listRef.value.loadData()
listRef.value.handleReset()
// 代码里清空搜索表单：LSForm 的 resetForm 需传入内部 el-form 实例（见下）
const lsf = listRef.value.FormRef
lsf?.resetForm(lsf.FormRef)
listRef.value.TableRef?.TableRef?.getSelectionRows()
```

| 名称 | 类型 | 说明 |
|------|------|------|
| **loadData** | `(showLoading?: boolean, firstLoad?: boolean) => void` | 刷新当前页数据（不重置搜索表单）。对应 `useTableListHook`：`showLoading` 默认 `true`；为 `false` 时不进入 loading 态但仍会请求。`firstLoad` 为 `true` 时将 `isFirst` 置回 `true`（骨架屏可再次参与显示逻辑） |
| **handleReset** | `() => void` | 将页码置为 `1` 并 `loadData` 刷新列表。**不会**调用 `resetFields` 清空搜索表单；表单清空来自用户点击 LSForm 的「重置」按钮（先 `resetFields` 再走到列表侧逻辑）。若需在脚本里同时清空表单，应对内部 **LSForm** 调用 `resetForm(内部 el-form 实例)`，见下方代码块及 [LSForm 文档](./form.md) |
| **setCurrentPage** | `(page: number, isFetch?: boolean) => void` | 对应底层 `handleCurrentPageChange`。第二参数为 `isFetch`（默认 `true`）。**注意**：hook 内对 `currentPage` 有 `watch`，页码变化后往往会再次走加载逻辑，不要依赖「`isFetch: false` 即可完全不请求」 |
| **setPageSize** | `(size: number) => void` | 设置每页条数并重新加载 |
| **isFirst** | `Ref<boolean>` | 是否为首次加载（骨架屏显示的判断依据） |
| **loading** | `Ref<boolean>` | 当前加载状态 |
| **currentPage** | `Ref<number>` | 当前页码 |
| **pageSize** | `Ref<number>` | 每页条数 |
| **total** | `Ref<number>` | 数据总条数 |
| **routePath** | `ComputedRef<string>` | 当前路由路径（用于计算默认跳转路径） |
| **FormRef** | `Ref` | 内部 LSForm 组件实例；`validate` / `submitForm` / `resetForm` 等见 [LSForm](./form.md)。**`resetForm(formEl)`** 须传入 LSForm 暴露的 **`FormRef`（即内部 `el-form` 的 ref）**，例如 `lsf.resetForm(lsf.FormRef)` |
| **TableRef** | `Ref` | 内部 LSTable 实例，可通过 `TableRef.TableRef` 访问底层 `el-table` 实例（`clearSelection`、`getSelectionRows` 等） |

---

## 注意与说明事项

以下为使用 LSList / `useTableListHook` 时容易踩坑或与直觉不一致的行为，建议团队内对齐。

```js
// 典型注意点速记（script setup 中 ref 须 .value）
listRef.value.setCurrentPage(2, false) // 仍可能因 currentPage watch 再次请求
listRef.value.handleReset()            // 不清表单；清表单用 lsf.resetForm(lsf.FormRef)
// @del-success 第二参为 boolean（源码 emit(row, true)），不是接口响应体
```

### 分页与 `ref` 方法

```js
// 程序化改页：慎防重复请求，可结合业务防抖
listRef.value.setCurrentPage(3)
listRef.value.setPageSize(20)
```

- **`setCurrentPage` 与二次请求**：`useTableListHook` 内对 `currentPage` 注册了 `watch`，任意导致 `currentPage` 变化的路径都可能再次进入 `handleCurrentPageChange(newPage)`，且该回调**默认 `isFetch` 为 `true`**，从而再次触发加载。因此即使调用 `setCurrentPage(n, false)` 在本轮 `handleCurrentPageChange` 里跳过了 `loadData`，**仍可能**在 `watch` 触发后再次请求列表。不要依赖「第二参传 `false` 就绝对不会发请求」；若业务上必须严格单次请求，需在调用侧自行防抖/合并或评估是否改造 hook。
- **`pageSize` 同理**：`pageSize` 同样被 `watch`，变更后会走 `handleSizeChange`，非 `isFullDose` 时会 `loadData()`，与是否通过 `setPageSize` 暴露调用一致。
- **`handleReset` 只动分页与列表**：暴露的 `handleReset` 仅将页码置为 `1` 并刷新列表，**不会**清空搜索表单。清空表单依赖用户点击 LSForm「重置」，或在脚本里对 **LSForm** 调用 `resetForm(内部 el-form)`（与 `Form.vue` 暴露签名一致）。

```js
listRef.value.handleReset()

// 脚本中同时清空搜索条件：LSForm.resetForm 第一个参数须为内部 el-form 实例
const lsf = listRef.value.FormRef
lsf?.resetForm(lsf.FormRef)
```

### 数据格式与配置合并

```js
// ✅ 默认 listApi 返回
{ records: [], total: 0 }
// ✅ dealData 返回（字段名是 data，不是 records）
{ data: [], total: 0 }
// ❌ listHookConfig 里不要写 dealData / dealParams（会被展开覆盖顶层）
```

- **`listApi` 响应**：未配置 `dealData` 时，hook 按 `{ records, total }` 解构；字段名不是 `records` / `total` 时必须写 `dealData`，且 **`dealData` 返回值必须是 `{ data, total }`**（与无 `dealData` 时的解构字段不同，勿混用 `list`）。
- **`listHookConfig` 与顶层 prop**：`List.vue` 中传给 hook 的对象为 `{ dealData, dealParams, ...listHookConfig }`，后展开的 `listHookConfig` **会覆盖**同名的 `dealData` / `dealParams`。请勿在 `listHookConfig` 里再写这两项，统一用组件顶层 prop。
- **`queryFn`**：仅替换查询时的 `loadData()`；**不会**替换「查询前将页码置为 1」（`List.vue` 的 `submitForm` 里仍会先 `handleCurrentPageChange(1, false)`）。必须在 `queryFn` 内自行 `loadData()`。
- **`resetFn`**：仅替换列表侧 `handleReset()`；**不会**替换 LSForm 的 `resetFields`（重置按钮点击后表单字段总会先被清空）。必须在 `resetFn` 内自行 `loadData()` 或 `handleReset()` 等刷新列表。

```html
<LSList ref="listRef" :query-fn="onQuery" :reset-fn="onReset" />
```

```js
function onQuery() { listRef.value.loadData() }
function onReset() { listRef.value.handleReset() }
```

### 事件与删除流程

```html
<!-- del-success 第二参数为 boolean，不是 HTTP 响应体 -->
<LSList :del-api="delApi" @del-success="(row, flag) => {}" />
```

- **`delSuccess` 回调参数**：源码在删除成功后为 `emit('delSuccess', row, true)`，第二个参数是**布尔占位**，不是接口返回体；若需接口数据，请在 `delApi` 的 `then` 中自行处理（当前组件未把 `res` 透出到事件）。
- **自定义 `tableDelFn`**：走自定义删除时不会自动调内置 `delApi`，也不会自动触发 `delSuccess`；需要成功反馈时请在自己的逻辑里 `emit` 或业务层处理。

```js
// 自定义删除：自行提示与刷新
const tableDelFn = (row, setLoading) => {
  setLoading(true)
  api.del(row.id).finally(() => { setLoading(false); listRef.value.loadData() })
}
```

### 开关列行为简述

```html
<LSList
  :show-table-switch="true"
  :switch-api="switchApi"
  table-switch-pop-txt="关前确认"
/>
```

- **关闭前确认**：`row[switchProp]` 为开启态时，用户关开关会先弹出 `tableSwitchPopTxt`（及 `tableSwitchPopAttrs`）的确认框；从关到开一般直接请求 `switchApi`（以 `List.vue` 中 `status` 分支为准）。接入前建议用真实数据走一遍交互。

### 表格溢出提示（Tooltip）与 `table-operate-column` 列宽 {#list-tooltip-operate-column}

- LSList 向内 LSTable **默认开启** **`show-overflow-tooltip`**（`List.vue` 中写死为 `true`），单元格文字被**截断溢出**时，鼠标悬浮会出现 Tooltip。若项目不需要，可通过 **`table-attrs`** 传入同名属性覆盖（具体以 LSTable / `el-table` 支持为准，详见 [LSTable](./table.md)）。
- **`table-operate-column`**（如示例 8 中的 `{ width: 200 }`）作用在**右侧固定操作列**，会占用固定宽度，从而改变左侧**数据列**在表格总宽内的可用宽度。
- Element Plus 仅在内容**实际溢出**时才展示 Tooltip；**未溢出则不提示**。调整操作列宽度后，名称等列可能变宽、全文可见，此时悬浮**不再出现** Tooltip 是**正常现象**，不是 Tooltip「失效」。若仍希望弱提示，需自定义列 `slot` / `formatter` 等，而不能依赖溢出 Tooltip。

### 文案与行级覆盖

```js
// 行数据可覆盖按钮文案（优先级高于 props）
{ id: 1, name: '甲', tableEditText: '审批', popconfirmTxt: '确认撤回？' }
```

- **行内字段优先**：`row.tableDetailText`、`row.tableEditText`、`row.tableDelText`、`row.popconfirmTxt` 会覆盖同名 props，便于后端下发文案；与权限、多语言并存时注意合并策略，避免敏感操作文案被列表数据意外覆盖。

<script setup>
import { ref, computed } from 'vue';
import { ElMessage, ElButton, ElDatePicker, ElTag, ElAvatar, ElRate, ElDialog, ElInput } from 'element-plus';

// 公共 mock 数据
const mockUsers = [
  { id: 1, name: '张三', age: 28, dept: '技术部', status: '在职', type: 'A' },
  { id: 2, name: '李四', age: 32, dept: '产品部', status: '在职', type: 'B' },
  { id: 3, name: '王五', age: 25, dept: '设计部', status: '离职', type: 'A' }
];

// 1. 基础列表
function basicListApi() {
  return new Promise(resolve => setTimeout(() => resolve({ records: mockUsers, total: mockUsers.length }), 300));
}
const basicTableColumn = ref([
  { label: '姓名', prop: 'name' },
  { label: '年龄', prop: 'age',  width: '80' },
  { label: '部门', prop: 'dept' },
  { label: '状态', prop: 'status' }
]);

// 2. 接口适配（故意用 { list, count } 格式模拟"不标准"接口，用 dealData 转换）
const adaptFormData = ref({ username: '' });
const adaptFormItems = ref([
  { type: 'input', label: '用户名', prop: 'username', attrs: { placeholder: '请输入' } }
]);
const adaptTableColumn = ref([
  { label: '用户名', prop: 'username' },
  { label: '创建时间', prop: 'createTime' }
]);
function adaptListApi() {
  return new Promise(resolve => setTimeout(() => resolve({
    code: 0,
    data: {
      list: [{ id: 1, username: '张三', createTime: '2024-01-15' }, { id: 2, username: '李四', createTime: '2024-03-20' }],
      count: 2
    }
  }), 300));
}
// dealData 必须返回 { data: Array, total: number }
function adaptDealData(res) {
  return { data: res.data.list, total: res.data.count };
}
function adaptDealParams(params) {
  return Object.fromEntries(Object.entries(params).filter(([, v]) => v !== '' && v !== null && v !== undefined));
}

// 3. 搜索表单
const searchFormData = ref({ name: '', dept: '', status: '' });
const searchFormItems = ref([
  { type: 'input', label: '姓名', prop: 'name', attrs: { placeholder: '请输入姓名' } },
  {
    type: 'select', label: '部门', prop: 'dept',
    options: [{ label: '全部', value: '' }, { label: '技术部', value: 'tech' }, { label: '产品部', value: 'product' }, { label: '设计部', value: 'design' }]
  },
  {
    type: 'select', label: '状态', prop: 'status',
    options: [{ label: '全部', value: '' }, { label: '在职', value: '1' }, { label: '离职', value: '0' }]
  }
]);
const searchTableColumn = ref([
  { label: '姓名', prop: 'name' }, { label: '部门', prop: 'dept' }, { label: '状态', prop: 'status' }
]);
function searchListApi() {
  return new Promise(resolve => setTimeout(() => resolve({ records: mockUsers, total: mockUsers.length }), 300));
}

// 4. 纯展示
const readonlyTableColumn = ref([
  { label: '操作人', prop: 'operator' }, { label: '操作类型', prop: 'action' },
  { label: '操作时间', prop: 'time' }, { label: '结果', prop: 'result' }
]);
function readonlyListApi() {
  return new Promise(resolve => setTimeout(() => resolve({
    records: [
      { id: 1, operator: '张三', action: '登录',   time: '2024-05-01 09:00', result: '成功' },
      { id: 2, operator: '李四', action: '修改密码', time: '2024-05-01 10:30', result: '成功' },
      { id: 3, operator: '王五', action: '导出数据', time: '2024-05-01 14:00', result: '失败' }
    ],
    total: 3
  }), 200));
}

// 5. 操作区定制
const operateTableColumn = ref([
  { label: '姓名', prop: 'name' }, { label: '部门', prop: 'dept' }
]);
function operateListApi() {
  return new Promise(resolve => setTimeout(() => resolve({ records: mockUsers, total: mockUsers.length }), 200));
}

// 6. 操作列定制
const operateColTableColumn = ref([
  { label: '姓名', prop: 'name' }, { label: '角色', prop: 'typeText' }, { label: '状态', prop: 'statusText' }
]);
function operateColListApi() {
  return new Promise(resolve => setTimeout(() => resolve({
    records: [
      { id: 1, name: '张三', typeText: '管理员',  type: 'admin', statusText: '正常',   locked: false },
      { id: 2, name: '李四', typeText: '普通用户', type: 'user',  statusText: '已锁定', locked: true  },
      { id: 3, name: '王五', typeText: '普通用户', type: 'user',  statusText: '正常',   locked: false }
    ],
    total: 3
  }), 200));
}

// 7. 删除
const delTableColumn = ref([
  { label: '姓名', prop: 'name' }, { label: '部门', prop: 'dept' }
]);
function delListApi() {
  return new Promise(resolve => setTimeout(() => resolve({ records: mockUsers, total: mockUsers.length }), 200));
}
function mockDelApi() {
  return new Promise(resolve => setTimeout(resolve, 500));
}

// 8. 开关
const switchTableColumn = ref([
  { label: '名称', prop: 'name' }, { label: '描述', prop: 'desc' }, { label: '备注', prop: 'note' }
]);
function switchListApi() {
  return new Promise(resolve => setTimeout(() => resolve({
    records: [
      { id: 1, name: '用户注册',     desc: '允许用户注册', enabled: 1, system: false, note: '可关闭' },
      { id: 2, name: '系统核心服务', desc: '不可关闭',     enabled: 1, system: true,  note: '系统必须项' },
      { id: 3, name: '邮件通知',     desc: '发送邮件',     enabled: 0, system: false, note: '可开启' }
    ],
    total: 3
  }), 200));
}
function mockSwitchApi() {
  return new Promise(resolve => setTimeout(resolve, 400));
}

// 9. 弹框操作
const dialogVisible = ref(false);
const dialogMode = ref('add');
const dialogTitle = computed(() => ({ add: '新增', edit: '编辑', detail: '详情' }[dialogMode.value]));
const dialogRow = ref({ name: '', dept: '' });
function openDialog(mode, row) {
  dialogMode.value = mode;
  dialogRow.value = mode === 'add' ? { name: '', dept: '' } : { ...row };
  dialogVisible.value = true;
}
const dialogTableColumn = ref([
  { label: '姓名', prop: 'name' }, { label: '部门', prop: 'dept' }
]);
function dialogListApi() {
  return new Promise(resolve => setTimeout(() => resolve({ records: mockUsers, total: mockUsers.length }), 200));
}

// 11. 自定义查询/重置（query-fn / reset-fn 须自行 loadData / handleReset，否则列表不刷新）
const customQueryListRef = ref();
const customQueryFormData = ref({ keyword: '', type: '' });
const customQueryFormItems = ref([
  { type: 'input', label: '关键词', prop: 'keyword', attrs: { placeholder: '请输入' } },
  {
    type: 'select', label: '类型', prop: 'type',
    options: [{ label: '全部', value: '' }, { label: 'A类', value: 'A' }, { label: 'B类', value: 'B' }]
  }
]);
const customQueryTableColumn = ref([
  { label: '姓名', prop: 'name' }, { label: '部门', prop: 'dept' }
]);
function customQueryFn(formData) {
  ElMessage.info('自定义查询：' + JSON.stringify(formData));
  customQueryListRef.value?.loadData();
}
function customResetFn() {
  ElMessage.warning('自定义重置');
  customQueryListRef.value?.handleReset();
}
function customQueryListApi() {
  return new Promise(resolve => setTimeout(() => resolve({ records: mockUsers, total: mockUsers.length }), 200));
}

// 12. 表单插槽
const formSlotFormData = ref({ name: '', dateRange: null });
const formSlotFormItems = ref([
  { type: 'input',    label: '姓名',   prop: 'name',      attrs: { placeholder: '请输入姓名' } },
  { type: 'itemSlot', label: '创建日期', prop: 'dateRange' }
]);
const formSlotTableColumn = ref([
  { label: '姓名', prop: 'name' }, { label: '部门', prop: 'dept' }, { label: '状态', prop: 'status' }
]);
function formSlotListApi() {
  return new Promise(resolve => setTimeout(() => resolve({ records: mockUsers, total: mockUsers.length }), 200));
}

// 13. 表格自定义列
const tableSlotTableColumn = ref([
  { label: '头像', prop: 'avatar', width: '70'  },
  { label: '姓名', prop: 'name' },
  { label: '部门', prop: 'dept' },
  { label: '状态', prop: 'status',  width: '90'  },
  { label: '评分', prop: 'score',   width: '200' }
]);
function tableSlotListApi() {
  return new Promise(resolve => setTimeout(() => resolve({
    records: [
      { id: 1, name: '张三', dept: '技术部', status: '在职', statusType: 'success', score: 4 },
      { id: 2, name: '李四', dept: '产品部', status: '在职', statusType: 'success', score: 3 },
      { id: 3, name: '王五', dept: '设计部', status: '离职', statusType: 'info',    score: 2 }
    ],
    total: 3
  }), 200));
}

// 14. 操作列前后置
const operatePrependTableColumn = ref([
  { label: '姓名', prop: 'name' }, { label: '部门', prop: 'dept' }, { label: '状态', prop: 'status' }
]);
function operatePrependListApi() {
  return new Promise(resolve => setTimeout(() => resolve({ records: mockUsers, total: mockUsers.length }), 200));
}

// 15. listHookConfig
// ① isFullDose
function fullDoseListApi() {
  return new Promise(resolve => setTimeout(() => resolve({
    code: 0,
    items: [
      { id: 1, name: '张三', dept: '技术部' },
      { id: 2, name: '李四', dept: '产品部' },
      { id: 3, name: '王五', dept: '设计部' },
      { id: 4, name: '赵六', dept: '市场部' },
      { id: 5, name: '钱七', dept: '运营部' }
    ]
  }), 500));
}
function fullDoseDealData(res) {
  return { data: res.items, total: res.items.length };
}
const fullDoseTableColumn = ref([
  { label: '姓名', prop: 'name' },
  { label: '部门', prop: 'dept' }
]);
const fullDoseTableAttrs = { pageSizes: [2, 5, 10] };

// ② hasPanigation: false（须 table-attrs 关闭分页，否则 total 恒为 0 与表格不一致）
function noPaginationListApi(params) {
  console.log('无分页请求参数', params);
  return new Promise(resolve => setTimeout(() => resolve([
    { id: 1, name: '张三', dept: '技术部' },
    { id: 2, name: '李四', dept: '产品部' },
    { id: 3, name: '王五', dept: '设计部' }
  ]), 300));
}
const noPaginationTableColumn = ref([
  { label: '姓名', prop: 'name' },
  { label: '部门', prop: 'dept' }
]);

// ③ autoFetch: false
const autoFetchListRef = ref();
const autoFetchTableColumn = ref([
  { label: '姓名', prop: 'name' },
  { label: '部门', prop: 'dept' },
  { label: '状态', prop: 'status' }
]);
function autoFetchListApi() {
  return new Promise(resolve => setTimeout(() => resolve({ records: mockUsers, total: mockUsers.length }), 500));
}

// ④ callbackAfter
const callbackStats = ref({ total: 0, pageCount: 0, avgAge: 0 });
const callbackTableColumn = ref([
  { label: '姓名', prop: 'name' },
  { label: '年龄', prop: 'age', width: '80' },
  { label: '部门', prop: 'dept' }
]);
function callbackListApi() {
  return new Promise(resolve => setTimeout(() => resolve({
    code: 0,
    records: [
      { id: 1, name: '张三', age: 28, dept: '技术部' },
      { id: 2, name: '李四', age: 32, dept: '产品部' },
      { id: 3, name: '王五', age: 25, dept: '设计部' }
    ],
    total: 3,
    summary: { avgAge: 28.3 }
  }), 300));
}
function callbackDealData(res) {
  return { data: res.records, total: res.total };
}
const callbackListHookConfig = {
  callbackAfter(res, { tableData, total }) {
    callbackStats.value = {
      total: total.value,
      pageCount: tableData.value.length,
      avgAge: res.summary?.avgAge ?? 0
    };
  }
};

// 16. Expose
const exposeListRef = ref();

// 17. 文案与样式定制
const textCustomTableColumn = ref([
  { label: '姓名', prop: 'name' },
  { label: '部门', prop: 'dept' },
  { label: '状态', prop: 'status' }
]);
function textCustomListApi() {
  return new Promise(resolve => setTimeout(() => resolve({ records: mockUsers, total: mockUsers.length }), 200));
}
const exposeTableColumn = ref([
  { label: '姓名', prop: 'name' }, { label: '部门', prop: 'dept' }, { label: '状态', prop: 'status' }
]);
function exposeListApi() {
  return new Promise(resolve => setTimeout(() => resolve({ records: mockUsers, total: mockUsers.length }), 300));
}

// 18. 样式定制（卡片布局）
const cardStyleFormData = ref({ name: '', dept: '' });
const cardStyleFormItems = ref([
  { type: 'input', label: '姓名', prop: 'name', attrs: { placeholder: '请输入姓名' } },
  {
    type: 'select',
    label: '部门',
    prop: 'dept',
    options: [
      { label: '全部', value: '' },
      { label: '技术部', value: 'tech' },
      { label: '产品部', value: 'product' }
    ]
  }
]);
const cardStyleTableColumn = ref([
  { label: '姓名', prop: 'name' },
  { label: '部门', prop: 'dept' },
  { label: '状态', prop: 'status' }
]);
function cardStyleListApi() {
  return new Promise(resolve => setTimeout(() => resolve({ records: mockUsers, total: mockUsers.length }), 300));
}
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

/* §18 样式定制：搜索区单独成卡，操作栏 + 表格区合一卡（与文中 lsdoc-* 类名一致） */
.lsdoc-list-card-page-wrap {
  padding: 4px 0;
}
.lsdoc-list-card-page-wrap .lsdoc-card-form {
  padding: 16px 16px 8px;
  margin-bottom: 16px;
  background: var(--el-bg-color);
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 8px;
  box-shadow: var(--el-box-shadow-light);
}
.lsdoc-list-card-page-wrap .lsdoc-card-toolbar {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  padding: 12px 16px;
  background: var(--el-bg-color);
  border: 1px solid var(--el-border-color-lighter);
  border-bottom: none;
  border-radius: 8px 8px 0 0;
}
.lsdoc-list-card-page-wrap .ls-table-wrap {
  margin-top: 0 !important;
  padding: 0 16px 16px;
  background: var(--el-bg-color);
  border: 1px solid var(--el-border-color-lighter);
  border-top: none;
  border-radius: 0 0 8px 8px;
  box-shadow: var(--el-box-shadow-light);
}
</style>
