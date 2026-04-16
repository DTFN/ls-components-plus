---
outline: deep
---

# List 列表

::: warning 基于LSForm和LSTable组合封装，提供完整的列表页面功能，包括查询、表格展示、操作等功能。
:::

## 使用方式

### 1. 基础列表

<br>
<ClientOnly>
<LSList
  :list-api="mockListApi"
  :table-column="column_1"
  :form-data="formData_1"
  :form-items="formItems_1"
>
</LSList>
</ClientOnly>

::: details 点我查看代码

```js
const formData_1 = ref({
  name: '',
  status: ''
});

const formItems_1 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  },
  {
    type: 'select',
    label: '状态',
    prop: 'status',
    placeholder: '请选择状态',
    options: [
      { label: '启用', value: 1 },
      { label: '禁用', value: 0 }
    ]
  }
]);

const column_1 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  },
  {
    label: '状态',
    prop: 'status',
    type: 'status',
    value: {
      1: { type: 'success', label: '启用' },
      0: { type: 'info', label: '禁用' }
    }
  }
]);

function mockListApi(params) {
  console.log('查询参数:', params);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25, status: 1 },
          { id: 2, name: '李四', age: 30, status: 0 },
          { id: 3, name: '王五', age: 22, status: 1 }
        ],
        total: 3
      });
    }, 1000);
  });
}
```

```html
<LSList :list-api="mockListApi" :table-column="column_1" :form-data="formData_1" :form-items="formItems_1"> </LSList>
```

:::

### 2. 自定义查询和重置

<br>
<ClientOnly>
<LSList
  :list-api="mockListApi2"
  :table-column="column_2"
  :form-data="formData_2"
  :form-items="formItems_2"
  :query-fn="customQuery"
  :reset-fn="customReset"
  @submit-form="handleSubmit"
  @reset-form="handleReset"
>
</LSList>
</ClientOnly>

::: details 点我查看代码

```js
const formData_2 = ref({
  keyword: ''
});

const formItems_2 = ref([
  {
    type: 'input',
    label: '关键词',
    prop: 'keyword',
    placeholder: '请输入关键词'
  }
]);

const column_2 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function customQuery(formData) {
  console.log('自定义查询:', formData);
  alert('自定义查询: ' + JSON.stringify(formData));
}

function customReset(formData) {
  console.log('自定义重置:', formData);
  alert('自定义重置');
}

function handleSubmit(formData) {
  console.log('表单提交事件:', formData);
}

function handleReset(formData) {
  console.log('表单重置事件:', formData);
}

function mockListApi2(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 }
        ],
        total: 2
      });
    }, 1000);
  });
}
```

```html
<LSList
  :list-api="mockListApi2"
  :table-column="column_2"
  :form-data="formData_2"
  :form-items="formItems_2"
  :query-fn="customQuery"
  :reset-fn="customReset"
  @submit-form="handleSubmit"
  @reset-form="handleReset"
>
</LSList>
```

:::

### 3. 隐藏表单

<br>
<ClientOnly>
<LSList
  :show-form="false"
  :list-api="mockListApi3"
  :table-column="column_3"
>
</LSList>
</ClientOnly>

::: details 点我查看代码

```js
const column_3 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function mockListApi3(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 }
        ],
        total: 2
      });
    }, 1000);
  });
}
```

```html
<LSList :show-form="false" :list-api="mockListApi3" :table-column="column_3"> </LSList>
```

:::

### 4. 隐藏操作按钮区域

<br>
<ClientOnly>
<LSList
  :show-operate="false"
  :list-api="mockListApi4"
  :table-column="column_4"
  :form-data="formData_4"
  :form-items="formItems_4"
>
</LSList>
</ClientOnly>

::: details 点我查看代码

```js
const formData_4 = ref({
  name: ''
});

const formItems_4 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_4 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function mockListApi4(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 }
        ],
        total: 2
      });
    }, 1000);
  });
}
```

```html
<LSList :show-operate="false" :list-api="mockListApi4" :table-column="column_4" :form-data="formData_4" :form-items="formItems_4">
</LSList>
```

:::

### 5. 自定义操作按钮区域

<br>
<ClientOnly>
<LSList
  :list-api="mockListApi5"
  :table-column="column_5"
  :form-data="formData_5"
  :form-items="formItems_5"
>
  <template #operate>
    <el-space>
      <LSButton type="primary" @click="handleBatchAdd">批量添加</LSButton>
      <LSButton type="success" @click="handleExport">导出数据</LSButton>
    </el-space>
  </template>
</LSList>
</ClientOnly>

::: details 点我查看代码

```js
const formData_5 = ref({
  name: ''
});

const formItems_5 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_5 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function handleBatchAdd() {
  alert('批量添加');
}

function handleExport() {
  alert('导出数据');
}

function mockListApi5(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 }
        ],
        total: 2
      });
    }, 1000);
  });
}
```

```html
<LSList :list-api="mockListApi5" :table-column="column_5" :form-data="formData_5" :form-items="formItems_5">
  <template #operate>
    <el-space>
      <LSButton type="primary" @click="handleBatchAdd">批量添加</LSButton>
      <LSButton type="success" @click="handleExport">导出数据</LSButton>
    </el-space>
  </template>
</LSList>
```

:::

### 6. 带开关切换的列表

<br>
<ClientOnly>
<LSList
  :list-api="mockListApi6"
  :table-column="column_6"
  :show-table-switch="true"
  :switch-api="mockSwitchApi"
  :switch-prop="'status'"
  :form-data="formData_6"
  :form-items="formItems_6"
>
</LSList>
</ClientOnly>

::: details 点我查看代码

```js
const formData_6 = ref({
  name: ''
});

const formItems_6 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_6 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function mockListApi6(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25, status: 1 },
          { id: 2, name: '李四', age: 30, status: 0 }
        ],
        total: 2
      });
    }, 1000);
  });
}

function mockSwitchApi(id) {
  console.log('开关切换:', id);
  return Promise.resolve();
}
```

```html
<LSList
  :list-api="mockListApi6"
  :table-column="column_6"
  :show-table-switch="true"
  :switch-api="mockSwitchApi"
  :switch-prop="'status'"
  :form-data="formData_6"
  :form-items="formItems_6"
>
</LSList>
```

:::

### 7. 带删除功能的列表

<br>
<ClientOnly>
<LSList
  :list-api="mockListApi7"
  :table-column="column_7"
  :del-api="mockDelApi"
  :show-table-operate="true"
  :form-data="formData_7"
  :form-items="formItems_7"
>
</LSList>
</ClientOnly>

::: details 点我查看代码

```js
const formData_7 = ref({
  name: ''
});

const formItems_7 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_7 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function mockListApi7(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 }
        ],
        total: 2
      });
    }, 1000);
  });
}

function mockDelApi(id) {
  console.log('删除:', id);
  return Promise.resolve();
}
```

```html
<LSList
  :list-api="mockListApi7"
  :table-column="column_7"
  :del-api="mockDelApi"
  :show-table-operate="true"
  :form-data="formData_7"
  :form-items="formItems_7"
>
</LSList>
```

:::

### 8. 自定义操作按钮文案

<br>
<ClientOnly>
<LSList
  :list-api="mockListApi8"
  :table-column="column_8"
  :table-detail-text="'详情'"
  :table-edit-text="'修改'"
  :table-del-text="'移除'"
  :form-data="formData_8"
  :form-items="formItems_8"
>
</LSList>
</ClientOnly>

::: details 点我查看代码

```js
const formData_8 = ref({
  name: ''
});

const formItems_8 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_8 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function mockListApi8(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 }
        ],
        total: 2
      });
    }, 1000);
  });
}
```

```html
<LSList
  :list-api="mockListApi8"
  :table-column="column_8"
  :table-detail-text="'详情'"
  :table-edit-text="'修改'"
  :table-del-text="'移除'"
  :form-data="formData_8"
  :form-items="formItems_8"
>
</LSList>
```

:::

### 9. 动态控制操作按钮显示

<br>
<ClientOnly>
<LSList
  :list-api="mockListApi9"
  :table-column="column_9"
  :show-table-detail="showDetail"
  :show-table-edit="showEdit"
  :show-table-del="showDel"
  :form-data="formData_9"
  :form-items="formItems_9"
>
</LSList>
</ClientOnly>

::: details 点我查看代码

```js
const showDetail = ref(true);
const showEdit = ref(true);
const showDel = ref(true);

const formData_9 = ref({
  name: ''
});

const formItems_9 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_9 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function mockListApi9(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 }
        ],
        total: 2
      });
    }, 1000);
  });
}
```

```html
<LSList
  :list-api="mockListApi9"
  :table-column="column_9"
  :show-table-detail="showDetail"
  :show-table-edit="showEdit"
  :show-table-del="showDel"
  :form-data="formData_9"
  :form-items="formItems_9"
>
</LSList>
```

:::

### 10. 根据行数据控制按钮显示

<br>
<ClientOnly>
<LSList
  :list-api="mockListApi10"
  :table-column="column_10"
  :show-table-detail="(row) => row.id !== 1"
  :show-table-edit="(row) => row.age > 25"
  :show-table-del="(row) => row.id !== 1"
  :form-data="formData_10"
  :form-items="formItems_10"
>
</LSList>
</ClientOnly>

::: details 点我查看代码

```js
const formData_10 = ref({
  name: ''
});

const formItems_10 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_10 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function mockListApi10(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 },
          { id: 3, name: '王五', age: 22 }
        ],
        total: 3
      });
    }, 1000);
  });
}
```

```html
<LSList
  :list-api="mockListApi10"
  :table-column="column_10"
  :show-table-detail="(row) => row.id !== 1"
  :show-table-edit="(row) => row.age > 25"
  :show-table-del="(row) => row.id !== 1"
  :form-data="formData_10"
  :form-items="formItems_10"
>
</LSList>
```

:::

### 11. 自定义路由跳转

<br>
<ClientOnly>
<LSList
  :list-api="mockListApi11"
  :table-column="column_11"
  add-route-path="/custom/add"
  edit-route-path="/custom/edit"
  detail-route-path="/custom/detail"
  :form-data="formData_11"
  :form-items="formItems_11"
>
</LSList>
</ClientOnly>

::: details 点我查看代码

```js
const formData_11 = ref({
  name: ''
});

const formItems_11 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_11 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function mockListApi11(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 }
        ],
        total: 2
      });
    }, 1000);
  });
}
```

```html
<LSList
  :list-api="mockListApi11"
  :table-column="column_11"
  add-route-path="/custom/add"
  edit-route-path="/custom/edit"
  detail-route-path="/custom/detail"
  :form-data="formData_11"
  :form-items="formItems_11"
>
</LSList>
```

:::

### 12. 自定义操作事件

<br>
<ClientOnly>
<LSList
  :list-api="mockListApi12"
  :table-column="column_12"
  :table-detail-fn="customDetail"
  :table-edit-fn="customEdit"
  :table-del-fn="customDel"
  :add-fn="customAdd"
  :form-data="formData_12"
  :form-items="formItems_12"
>
</LSList>
</ClientOnly>

::: details 点我查看代码

```js
const formData_12 = ref({
  name: ''
});

const formItems_12 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_12 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function customDetail(row) {
  alert('自定义查看: ' + JSON.stringify(row));
}

function customEdit(row) {
  alert('自定义编辑: ' + JSON.stringify(row));
}

function customDel(row, callback) {
  if (confirm('确定删除吗？')) {
    callback(true);
  }
}

function customAdd() {
  alert('自定义添加');
}

function mockListApi12(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 }
        ],
        total: 2
      });
    }, 1000);
  });
}
```

```html
<LSList
  :list-api="mockListApi12"
  :table-column="column_12"
  :table-detail-fn="customDetail"
  :table-edit-fn="customEdit"
  :table-del-fn="customDel"
  :add-fn="customAdd"
  :form-data="formData_12"
  :form-items="formItems_12"
>
</LSList>
```

:::

### 13. 自定义添加按钮

<br>
<ClientOnly>
<LSList
  :list-api="mockListApi13"
  :table-column="column_13"
  :add-btn-text="'新建用户'"
  :disabled-add-btn="false"
  :add-btn-attrs="{ size: 'large', icon: 'Plus' }"
  :form-data="formData_13"
  :form-items="formItems_13"
>
</LSList>
</ClientOnly>

::: details 点我查看代码

```js
const formData_13 = ref({
  name: ''
});

const formItems_13 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_13 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function mockListApi13(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 }
        ],
        total: 2
      });
    }, 1000);
  });
}
```

```html
<LSList
  :list-api="mockListApi13"
  :table-column="column_13"
  :add-btn-text="'新建用户'"
  :disabled-add-btn="false"
  :add-btn-attrs="{ size: 'large', icon: 'Plus' }"
  :form-data="formData_13"
  :form-items="formItems_13"
>
</LSList>
```

:::

### 14. 禁用操作按钮

<br>
<ClientOnly>
<LSList
  :list-api="mockListApi14"
  :table-column="column_14"
  :disabled-table-detail="true"
  :disabled-table-edit="true"
  :disabled-table-del="false"
  :form-data="formData_14"
  :form-items="formItems_14"
>
</LSList>
</ClientOnly>

::: details 点我查看代码

```js
const formData_14 = ref({
  name: ''
});

const formItems_14 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_14 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function mockListApi14(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 }
        ],
        total: 2
      });
    }, 1000);
  });
}
```

```html
<LSList
  :list-api="mockListApi14"
  :table-column="column_14"
  :disabled-table-detail="true"
  :disabled-table-edit="true"
  :disabled-table-del="false"
  :form-data="formData_14"
  :form-items="formItems_14"
>
</LSList>
```

:::

### 15. 带骨架屏加载

<br>
<ClientOnly>
<LSList
  :list-api="mockListApi15"
  :table-column="column_15"
  :show-skeleton="true"
  :form-data="formData_15"
  :form-items="formItems_15"
  :skeleton-attrs="{ rows: 5, animated: true }"
>
</LSList>
</ClientOnly>

::: details 点我查看代码

```js
const formData_15 = ref({
  name: ''
});

const formItems_15 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_15 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function mockListApi15(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 }
        ],
        total: 2
      });
    }, 2000);
  });
}
```

```html
<LSList
  :list-api="mockListApi15"
  :table-column="column_15"
  :show-skeleton="true"
  :form-data="formData_15"
  :form-items="formItems_15"
  :skeleton-attrs="{ rows: 5, animated: true }"
>
</LSList>
```

:::

### 16. 自定义表格属性

<br>
<ClientOnly>
<LSList
  :list-api="mockListApi16"
  :table-column="column_16"
  :table-attrs="{ border: true, stripe: true, size: 'large' }"
  :form-data="formData_16"
  :form-items="formItems_16"
>
</LSList>
</ClientOnly>

::: details 点我查看代码

```js
const formData_16 = ref({
  name: ''
});

const formItems_16 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_16 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function mockListApi16(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 }
        ],
        total: 2
      });
    }, 1000);
  });
}
```

```html
<LSList
  :list-api="mockListApi16"
  :table-column="column_16"
  :table-attrs="{ border: true, stripe: true, size: 'large' }"
  :form-data="formData_16"
  :form-items="formItems_16"
>
</LSList>
```

:::

### 17. 使用插槽自定义内容

<br>
<ClientOnly>
<LSList
  :list-api="mockListApi17"
  :table-column="column_17"
  :form-data="formData_17"
  :form-items="formItems_17"
>
  <template #form-append>
    <LSButton type="info" @click="handleExtraQuery">额外查询</LSButton>
  </template>
  <template #operate-prepend>
    <LSButton type="warning">前置操作</LSButton>
  </template>
  <template #operate-append>
    <LSButton type="success">后置操作</LSButton>
  </template>
  <template #table-operate-prepend="{ row }">
    <LSButton type="info" link size="small">自定义操作</LSButton>
  </template>
</LSList>
</ClientOnly>

::: details 点我查看代码

```js
const formData_17 = ref({
  name: ''
});

const formItems_17 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_17 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function handleExtraQuery() {
  alert('额外查询');
}

function mockListApi17(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 }
        ],
        total: 2
      });
    }, 1000);
  });
}
```

```html
<LSList :list-api="mockListApi17" :table-column="column_17" :form-data="formData_17" :form-items="formItems_17">
  <template #form-append>
    <LSButton type="info" @click="handleExtraQuery">额外查询</LSButton>
  </template>
  <template #operate-prepend>
    <LSButton type="warning">前置操作</LSButton>
  </template>
  <template #operate-append>
    <LSButton type="success">后置操作</LSButton>
  </template>
  <template #table-operate-prepend="{ row }">
    <LSButton type="info" link size="small">自定义操作</LSButton>
  </template>
</LSList>
```

:::

### 18. 自定义删除确认弹窗

<br>
<ClientOnly>
<LSList
  :list-api="mockListApi18"
  :table-column="column_18"
  :del-api="mockDelApi18"
  :popconfirm-txt="'确定要删除这条数据吗？此操作不可恢复！'"
  :table-del-pop-attrs="{ width: 280, confirmButtonText: '确认删除', cancelButtonText: '再想想' }"
  :del-message="'删除成功'"
  :form-data="formData_18"
  :form-items="formItems_18"
>
</LSList>
</ClientOnly>

::: details 点我查看代码

```js
const formData_18 = ref({
  name: ''
});

const formItems_18 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_18 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function mockListApi18(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 }
        ],
        total: 2
      });
    }, 1000);
  });
}

function mockDelApi18(id) {
  console.log('删除:', id);
  return Promise.resolve();
}
```

```html
<LSList
  :list-api="mockListApi18"
  :table-column="column_18"
  :del-api="mockDelApi18"
  :popconfirm-txt="'确定要删除这条数据吗？此操作不可恢复！'"
  :table-del-pop-attrs="{ width: 280, confirmButtonText: '确认删除', cancelButtonText: '再想想' }"
  :del-message="'删除成功'"
  :form-data="formData_18"
  :form-items="formItems_18"
>
</LSList>
```

:::

### 19. 处理接口参数和返回数据

<br>
<ClientOnly>
<LSList
  :list-api="mockListApi19"
  :deal-params="customDealParams"
  :deal-data="customDealData"
  :table-column="column_19"
  :form-data="formData_19"
  :form-items="formItems_19"
>
</LSList>
</ClientOnly>

::: details 点我查看代码

```js
const formData_19 = ref({
  name: '',
  status: ''
});

const formItems_19 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  },
  {
    type: 'select',
    label: '状态',
    prop: 'status',
    placeholder: '请选择状态',
    options: [
      { label: '启用', value: 1 },
      { label: '禁用', value: 0 }
    ]
  }
]);

const column_19 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  },
  {
    label: '状态',
    prop: 'status'
  }
]);

function customDealParams(params) {
  console.log('原始参数:', params);
  return {
    ...params,
    customField: 'customValue',
    timestamp: Date.now()
  };
}

function customDealData(response) {
  console.log('原始响应:', response);
  return {
    data: response.data.map(item => ({
      ...item,
      customProcessed: true
    })),
    total: response.total
  };
}

function mockListApi19(params) {
  console.log('处理后参数:', params);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25, status: 1 },
          { id: 2, name: '李四', age: 30, status: 0 }
        ],
        total: 2
      });
    }, 1000);
  });
}
```

```html
<LSList
  :list-api="mockListApi19"
  :deal-params="customDealParams"
  :deal-data="customDealData"
  :table-column="column_19"
  :form-data="formData_19"
  :form-items="formItems_19"
>
</LSList>
```

:::

### 20. 完整功能示例

<br>
<ClientOnly>
<LSList
  ref="listRef20"
  :list-api="mockListApi20"
  :del-api="mockDelApi20"
  :switch-api="mockSwitchApi20"
  :show-table-switch="true"
  :show-table-operate="true"
  :show-add="true"
  :table-column="column_20"
  :form-data="formData_20"
  :form-items="formItems_20"
  :table-attrs="{ border: true, stripe: true }"
  @handle-loading="handleLoading20"
  @handle-current-page="handlePageChange"
  @handle-page-size="handleSizeChange"
  @submit-form="handleSubmit20"
  @reset-form="handleReset20"
  @del-success="handleDelSuccess"
  @switch-success="handleSwitchSuccess"
>
  <template #form-append>
    <LSButton type="warning" @click="handleBatchExport">批量导出</LSButton>
  </template>
</LSList>
</ClientOnly>

::: details 点我查看代码

```js
const listRef20 = ref(null);

const formData_20 = ref({
  name: '',
  status: ''
});

const formItems_20 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  },
  {
    type: 'select',
    label: '状态',
    prop: 'status',
    placeholder: '请选择状态',
    options: [
      { label: '启用', value: 1 },
      { label: '禁用', value: 0 }
    ]
  }
]);

const column_20 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  },
  {
    label: '状态',
    prop: 'status',
    type: 'status',
    value: {
      1: { type: 'success', label: '启用' },
      0: { type: 'info', label: '禁用' }
    }
  }
]);

function mockListApi20(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25, status: 1 },
          { id: 2, name: '李四', age: 30, status: 0 },
          { id: 3, name: '王五', age: 22, status: 1 }
        ],
        total: 3
      });
    }, 1000);
  });
}

function mockDelApi20(id) {
  return Promise.resolve();
}

function mockSwitchApi20(id) {
  return Promise.resolve();
}

function handleLoading20(loading) {
  console.log('加载状态:', loading);
}

function handlePageChange(page) {
  console.log('当前页:', page);
}

function handleSizeChange(size) {
  console.log('每页条数:', size);
}

function handleSubmit20(formData) {
  console.log('表单提交:', formData);
}

function handleReset20(formData) {
  console.log('表单重置:', formData);
}

function handleDelSuccess(row, res) {
  console.log('删除成功:', row, res);
}

function handleSwitchSuccess(row, status) {
  console.log('开关切换成功:', row, status);
}

function handleBatchExport() {
  alert('批量导出');
}
```

```html
<LSList
  ref="listRef20"
  :list-api="mockListApi20"
  :del-api="mockDelApi20"
  :switch-api="mockSwitchApi20"
  :show-table-switch="true"
  :show-table-operate="true"
  :show-add="true"
  :table-column="column_20"
  :form-data="formData_20"
  :form-items="formItems_20"
  :table-attrs="{ border: true, stripe: true }"
  @handle-loading="handleLoading20"
  @handle-current-page="handlePageChange"
  @handle-page-size="handleSizeChange"
  @submit-form="handleSubmit20"
  @reset-form="handleReset20"
  @del-success="handleDelSuccess"
  @switch-success="handleSwitchSuccess"
>
  <template #form-append>
    <LSButton type="warning" @click="handleBatchExport">批量导出</LSButton>
  </template>
</LSList>
```

:::

### 21. 带树形表格的列表

<br>
<ClientOnly>
<LSList
  :list-api="mockListApi21"
  :table-column="column_21"
  :table-attrs="{ 'row-key': 'id', 'value-expand-all': true }"
  :show-pagination="false"
  :form-data="formData_21"
  :form-items="formItems_21"
>
</LSList>
</ClientOnly>

::: details 点我查看代码

```js
const formData_21 = ref({
  name: ''
});

const formItems_21 = ref([
  {
    type: 'input',
    label: '名称',
    prop: 'name',
    placeholder: '请输入名称'
  }
]);

const column_21 = ref([
  {
    label: '名称',
    prop: 'name'
  },
  {
    label: '数量',
    prop: 'count'
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'date'
  }
]);

function mockListApi21(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          {
            id: 1,
            name: '部门A',
            count: 10,
            createTime: '2024-01-01',
            children: [
              { id: 11, name: '小组A1', count: 5, createTime: '2024-01-02' },
              { id: 12, name: '小组A2', count: 5, createTime: '2024-01-03' }
            ]
          },
          {
            id: 2,
            name: '部门B',
            count: 8,
            createTime: '2024-01-04',
            children: [
              { id: 21, name: '小组B1', count: 4, createTime: '2024-01-05' },
              { id: 22, name: '小组B2', count: 4, createTime: '2024-01-06' }
            ]
          }
        ],
        total: 2
      });
    }, 1000);
  });
}
```

```html
<LSList
  :list-api="mockListApi21"
  :table-column="column_21"
  :table-attrs="{ 'row-key': 'id', 'value-expand-all': true }"
  :show-pagination="false"
  :form-data="formData_21"
  :form-items="formItems_21"
>
</LSList>
```

:::

### 22. 带自定义列渲染的列表

<br>
<ClientOnly>
<LSList
  :list-api="mockListApi22"
  :table-column="column_22"
  :form-data="formData_22"
  :form-items="formItems_22"
>
  <template #avatar="{ row }">
    <el-avatar :size="40" :src="row.avatar" />
  </template>
  <template #tags-table-slot="{ row }">
    <el-space wrap>
      <el-tag v-for="tag in row.tags" :key="tag.label" :type="tag.type">
        {{ tag.label }}
      </el-tag>
    </el-space>
  </template>
  <template #status-table-slot="{ row }">
    <el-tag :type="row.status === 1 ? 'success' : 'info'">
      {{ row.status === 1 ? '在职' : '离职' }}
    </el-tag>
  </template>
  <template #progress-table-slot="{ row }">
    <el-progress :percentage="row.progress" :stroke-width="8" />
  </template>
  <template #action-table-slot="{ row }">
    <el-space size="small">
      <LSButton size="small" type="primary">查看</LSButton>
      <LSButton size="small" type="success">编辑</LSButton>
      <LSButton size="small" type="danger">删除</LSButton>
    </el-space>
  </template>
</LSList>
</ClientOnly>

::: details 点我查看代码

```js
const formData_22 = ref({
  name: ''
});

const formItems_22 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_22 = ref([
  {
    label: '头像',
    prop: 'avatar',
    type: 'slot',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '职位',
    prop: 'position'
  },
  {
    label: '状态',
    prop: 'status',
    type: 'slot',
    width: 100
  },
  {
    label: '完成度',
    prop: 'progress',
    type: 'slot',
    width: 200
  },
  {
    label: '标签',
    prop: 'tags',
    type: 'slot',
    width: 200
  },
  {
    label: '操作',
    prop: 'action',
    type: 'slot',
    width: 200
  }
]);

function mockListApi22(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          {
            id: 1,
            name: '张三',
            position: '前端开发',
            avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
            status: 1,
            progress: 85,
            tags: [
              { label: 'Vue', type: 'success' },
              { label: 'React', type: 'primary' }
            ]
          },
          {
            id: 2,
            name: '李四',
            position: '后端开发',
            avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
            status: 1,
            progress: 60,
            tags: [
              { label: 'Java', type: 'warning' },
              { label: 'Go', type: 'danger' }
            ]
          },
          {
            id: 3,
            name: '王五',
            position: '产品经理',
            avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
            status: 0,
            progress: 100,
            tags: [
              { label: '产品', type: 'info' },
              { label: '管理', type: 'warning' }
            ]
          }
        ],
        total: 3
      });
    }, 1000);
  });
}
```

```html
<LSList :list-api="mockListApi22" :table-column="column_22" :form-data="formData_22" :form-items="formItems_22">
  <template #avatar="{ row }">
    <el-avatar :size="40" :src="row.avatar" />
  </template>
  <template #tags-table-slot="{ row }">
    <el-space wrap>
      <el-tag v-for="tag in row.tags" :key="tag.label" :type="tag.type"> {{ tag.label }} </el-tag>
    </el-space>
  </template>
  <template #status-table-slot="{ row }">
    <el-tag :type="row.status === 1 ? 'success' : 'info'">
      {{ row.status === 1 ? '在职' : '离职' }}
    </el-tag>
  </template>
  <template #progress-table-slot="{ row }">
    <el-progress :percentage="row.progress" :stroke-width="8" />
  </template>
  <template #action-table-slot="{ row }">
    <el-space size="small">
      <LSButton size="small" type="primary">查看</LSButton>
      <LSButton size="small" type="success">编辑</LSButton>
      <LSButton size="small" type="danger">删除</LSButton>
    </el-space>
  </template>
</LSList>
```

:::

### 23. 带合计行的列表

<br>
<ClientOnly>
<LSList
  :list-api="mockListApi23"
  :table-column="column_23"
  :table-attrs="{ 'show-summary': true, 'summary-method': getSummaries }"
  :form-data="formData_23"
  :form-items="formItems_23"
>
</LSList>
</ClientOnly>

::: details 点我查看代码

```js
const formData_23 = ref({
  name: ''
});

const formItems_23 = ref([
  {
    type: 'input',
    label: '产品名称',
    prop: 'name',
    placeholder: '请输入产品名称'
  }
]);

const column_23 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '产品名称',
    prop: 'name'
  },
  {
    label: '数量',
    prop: 'quantity',
    type: 'number'
  },
  {
    label: '单价',
    prop: 'price',
    type: 'number'
  },
  {
    label: '总价',
    prop: 'total',
    type: 'number'
  }
]);

function getSummaries(param) {
  const { columns, data } = param;
  const sums = [];
  columns.forEach((column, index) => {
    if (index === 0) {
      sums[index] = '合计';
      return;
    }
    if (column.property === 'quantity') {
      sums[index] = data.reduce((sum, row) => sum + row.quantity, 0);
    } else if (column.property === 'total') {
      sums[index] = data.reduce((sum, row) => sum + row.total, 0).toFixed(2);
    } else {
      sums[index] = '-';
    }
  });
  return sums;
}

function mockListApi23(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '产品A', quantity: 10, price: 100, total: 1000 },
          { id: 2, name: '产品B', quantity: 5, price: 200, total: 1000 },
          { id: 3, name: '产品C', quantity: 3, price: 300, total: 900 }
        ],
        total: 3
      });
    }, 1000);
  });
}
```

```html
<LSList
  :list-api="mockListApi23"
  :table-column="column_23"
  :table-attrs="{ 'show-summary': true, 'summary-method': getSummaries }"
  :form-data="formData_23"
  :form-items="formItems_23"
>
</LSList>
```

:::

### 24. 带自定义分页配置的列表

<br>
<ClientOnly>
<LSList
  :list-api="mockListApi24"
  :table-column="column_24"
  :list-hook-config="{ pageSize: 20, pageSizes: [10, 20, 50, 100] }"
  :form-data="formData_24"
  :form-items="formItems_24"
>
</LSList>
</ClientOnly>

::: details 点我查看代码

```js
const formData_24 = ref({
  name: ''
});

const formItems_24 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_24 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function mockListApi24(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const records = [];
      for (let i = 1; i <= 50; i++) {
        records.push({
          id: i,
          name: `用户${i}`,
          age: 20 + Math.floor(Math.random() * 30)
        });
      }
      resolve({
        records: records,
        total: 50
      });
    }, 1000);
  });
}
```

```html
<LSList
  :list-api="mockListApi24"
  :table-column="column_24"
  :list-hook-config="{ pageSize: 20, pageSizes: [10, 20, 50, 100] }"
  :form-data="formData_24"
  :form-items="formItems_24"
>
</LSList>
```

:::

### 25. 带批量操作的列表

<br>
<ClientOnly>
<LSList
  ref="listRef25"
  :list-api="mockListApi25"
  :table-column="column_25"
  :table-attrs="{ 'row-key': 'id' }"
  :form-data="formData_25"
  :form-items="formItems_25"
  @handle-loading="handleLoading25"
>
  <template #form-append>
    <LSButton type="success" @click="handleBatchEnable" :disabled="selectedRows.length === 0">
      批量启用 ({{ selectedRows.length }})
    </LSButton>
    <LSButton type="danger" @click="handleBatchDisable" :disabled="selectedRows.length === 0">
      批量禁用 ({{ selectedRows.length }})
    </LSButton>
  </template>
</LSList>
</ClientOnly>

::: details 点我查看代码

```js
const listRef25 = ref(null);
const selectedRows = ref([]);

const formData_25 = ref({
  name: ''
});

const formItems_25 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_25 = ref([
  {
    type: 'selection',
    width: 55
  },
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  },
  {
    label: '状态',
    prop: 'status',
    type: 'status',
    value: {
      1: { type: 'success', label: '启用' },
      0: { type: 'info', label: '禁用' }
    }
  }
]);

function handleLoading25(loading) {
  if (!loading && listRef25.value?.TableRef) {
    const tableRef = listRef25.value.TableRef;
    selectedRows.value = tableRef.getSelectionRows();
  }
}

function handleBatchEnable() {
  alert('批量启用: ' + JSON.stringify(selectedRows.value.map(row => row.id)));
}

function handleBatchDisable() {
  alert('批量禁用: ' + JSON.stringify(selectedRows.value.map(row => row.id)));
}

function mockListApi25(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25, status: 1 },
          { id: 2, name: '李四', age: 30, status: 0 },
          { id: 3, name: '王五', age: 22, status: 1 }
        ],
        total: 3
      });
    }, 1000);
  });
}
```

```html
<LSList
  ref="listRef25"
  :list-api="mockListApi25"
  :table-column="column_25"
  :table-attrs="{ 'row-key': 'id' }"
  :form-data="formData_25"
  :form-items="formItems_25"
  @handle-loading="handleLoading25"
>
  <template #form-append>
    <LSButton type="success" @click="handleBatchEnable" :disabled="selectedRows.length === 0">
      批量启用 ({{ selectedRows.length }})
    </LSButton>
    <LSButton type="danger" @click="handleBatchDisable" :disabled="selectedRows.length === 0">
      批量禁用 ({{ selectedRows.length }})
    </LSButton>
  </template>
</LSList>
```

:::

### 26. 自定义操作列宽度

<br>
<ClientOnly>
<LSList
  :list-api="mockListApi26"
  :table-column="column_26"
  :form-data="formData_26"
  :form-items="formItems_26"
  :table-operate-column="{width: 340 }"
>
</LSList>
</ClientOnly>

::: details 点我查看代码

```js
const formData_26 = ref({
  name: ''
});

const formItems_26 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_26 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function mockListApi26(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 }
        ],
        total: 2
      });
    }, 1000);
  });
}
```

```html
<LSList 
  :list-api="mockListApi26" 
  :table-column="column_26" 
  :form-data="formData_26" 
  :form-items="formItems_26"
  :table-operate-column="{width: 340 }"
>
</LSList>
```

:::

### 27. 多选案例

<br>
<ClientOnly>
<LSList
  :list-api="mockListApi27"
  :table-column="column_27"
  :form-data="formData_27"
  :form-items="formItems_27"
  :table-attrs="{
    showSelect:true,
    selectColumnOptions:{
      reserveSelection:true
    }
  }"
>
</LSList>
</ClientOnly>

::: details 点我查看代码

```js
const formData_27 = ref({
  name: ''
});

const formItems_27 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_27 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function mockListApi27(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 },
          { id: 3, name: '王五', age: 22 }
        ],
        total: 3
      });
    }, 1000);
  });
}
```

```html
<LSList 
  :list-api="mockListApi27" 
  :table-column="column_27" 
  :form-data="formData_27" 
  :form-items="formItems_27"
  :table-attrs="{
    showSelect:true,
    selectColumnOptions:{
      reserveSelection:true
    }
  }"
>
</LSList>
```

:::

### 28. 单选案例

<br>
<ClientOnly>
<LSList
  :list-api="mockListApi28"
  :table-column="column_28"
  :form-data="formData_28"
  :form-items="formItems_28"
  :table-attrs="{
    showRadio:true,
    currentRow: currentSelectedRow,
    highlightCurrentRow: true,
  }"
  :table-listeners="{
    'current-change': (val:any) => {
      currentSelectedRow = val;
    },
  }"
>
</LSList>
</ClientOnly>

::: details 点我查看代码

```js
const currentSelectedRow = ref([]);
const formData_28 = ref({
  name: ''
});

const formItems_28 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_28 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function mockListApi28(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 },
          { id: 3, name: '王五', age: 22 }
        ],
        total: 3
      });
    }, 1000);
  });
}
```

```html
<LSList
  :list-api="mockListApi28"
  :table-column="column_28"
  :form-data="formData_28"
  :form-items="formItems_28"
  :table-attrs="{
    showRadio:true,
    currentRow: currentSelectedRow,
    highlightCurrentRow: true,
  }"
  :table-listeners="{
    'current-change': (val:any) => {
      currentSelectedRow = val;
    },
  }"
>
```

:::

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="attrTableData" />

### 2. Events

<ApiIntro :tableColumn="tableMethodColumn" :tableData="eventsTableData" />

### 3. Slots

<ApiIntro :tableColumn="tableSlotColumn" :tableData="slotTableData" />

### 4. Exposes

<ApiIntro :tableColumn="tableExposesColumn" :tableData="exposesTableData" />

<script setup>
import { ref } from 'vue';
import { tableColumn, tableMethodColumn, tableSlotColumn, tableExposesColumn } from '../constant';

const formData_1 = ref({
  name: '',
  status: ''
});

const formItems_1 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  },
  {
    type: 'select',
    label: '状态',
    prop: 'status',
    placeholder: '请选择状态',
    options: [
      { label: '启用', value: 1 },
      { label: '禁用', value: 0 }
    ]
  }
]);

const column_1 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  },
  {
    label: '状态',
    prop: 'status',
    type: 'status',
    value: {
      1: { type: 'success', label: '启用' },
      0: { type: 'info', label: '禁用' }
    }
  }
]);

function mockListApi(params) {
  console.log('查询参数:', params);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25, status: 1 },
          { id: 2, name: '李四', age: 30, status: 0 },
          { id: 3, name: '王五', age: 22, status: 1 }
        ],
        total: 3
      });
    }, 1000);
  });
}

const formData_2 = ref({
  keyword: ''
});

const formItems_2 = ref([
  {
    type: 'input',
    label: '关键词',
    prop: 'keyword',
    placeholder: '请输入关键词'
  }
]);

const column_2 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function customQuery(formData) {
  console.log('自定义查询:', formData);
  alert('自定义查询: ' + JSON.stringify(formData));
}

function customReset(formData) {
  console.log('自定义重置:', formData);
  alert('自定义重置');
}

function handleSubmit(formData) {
  console.log('表单提交事件:', formData);
}

function handleReset(formData) {
  console.log('表单重置事件:', formData);
}

function mockListApi2(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25, status: 1 },
          { id: 2, name: '李四', age: 30, status: 0 },
          { id: 3, name: '王五', age: 22, status: 1 }
        ],
        total: 3
      });
    }, 1000);
  });
}

const column_3 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function mockListApi3(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 }
        ],
        total: 2
      });
    }, 1000);
  });
}

const formData_4 = ref({
  name: ''
});

const formItems_4 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_4 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function mockListApi4(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 }
        ],
        total: 2
      });
    }, 1000);
  });
}

const formData_5 = ref({
  name: ''
});

const formItems_5 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_5 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function handleBatchAdd() {
  alert('批量添加');
}

function handleExport() {
  alert('导出数据');
}

function mockListApi5(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 }
        ],
        total: 2
      });
    }, 1000);
  });
}

const formData_6 = ref({
  name: ''
});

const formItems_6 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_6 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function mockListApi6(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25, status: 1 },
          { id: 2, name: '李四', age: 30, status: 0 }
        ],
        total: 2
      });
    }, 1000);
  });
}

function mockSwitchApi(id) {
  console.log('开关切换:', id);
  return Promise.resolve();
}

const formData_7 = ref({
  name: ''
});

const formItems_7 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_7 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function mockListApi7(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 }
        ],
        total: 2
      });
    }, 1000);
  });
}

function mockDelApi(id) {
  console.log('删除:', id);
  return Promise.resolve();
}

const formData_8 = ref({
  name: ''
});

const formItems_8 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_8 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function mockListApi8(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 }
        ],
        total: 2
      });
    }, 1000);
  });
}

const showDetail = ref(true);
const showEdit = ref(true);
const showDel = ref(true);

const formData_9 = ref({
  name: ''
});

const formItems_9 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_9 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function mockListApi9(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 }
        ],
        total: 2
      });
    }, 1000);
  });
}

const formData_10 = ref({
  name: ''
});

const formItems_10 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_10 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function mockListApi10(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 },
          { id: 3, name: '王五', age: 22 }
        ],
        total: 3
      });
    }, 1000);
  });
}

const formData_11 = ref({
  name: ''
});

const formItems_11 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_11 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function mockListApi11(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 }
        ],
        total: 2
      });
    }, 1000);
  });
}

const formData_12 = ref({
  name: ''
});

const formItems_12 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_12 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function customDetail(row) {
  alert('自定义查看: ' + JSON.stringify(row));
}

function customEdit(row) {
  alert('自定义编辑: ' + JSON.stringify(row));
}

function customDel(row, callback) {
  if (confirm('确定删除吗？')) {
    callback(true);
  }
}

function customAdd() {
  alert('自定义添加');
}

function mockListApi12(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 }
        ],
        total: 2
      });
    }, 1000);
  });
}

const formData_13 = ref({
  name: ''
});

const formItems_13 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_13 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function mockListApi13(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 }
        ],
        total: 2
      });
    }, 1000);
  });
}

const formData_14 = ref({
  name: ''
});

const formItems_14 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_14 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function mockListApi14(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 }
        ],
        total: 2
      });
    }, 1000);
  });
}

const formData_15 = ref({
  name: ''
});

const formItems_15 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_15 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function mockListApi15(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 }
        ],
        total: 2
      });
    }, 2000);
  });
}

const formData_16 = ref({
  name: ''
});

const formItems_16 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_16 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function mockListApi16(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 }
        ],
        total: 2
      });
    }, 1000);
  });
}

const formData_17 = ref({
  name: ''
});

const formItems_17 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_17 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function handleExtraQuery() {
  alert('额外查询');
}

function mockListApi17(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 }
        ],
        total: 2
      });
    }, 1000);
  });
}

const formData_18 = ref({
  name: ''
});

const formItems_18 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_18 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function mockListApi18(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 }
        ],
        total: 2
      });
    }, 1000);
  });
}

function mockDelApi18(id) {
  console.log('删除:', id);
  return Promise.resolve();
}

const formData_19 = ref({
  name: '',
  status: ''
});

const formItems_19 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  },
  {
    type: 'select',
    label: '状态',
    prop: 'status',
    placeholder: '请选择状态',
    options: [
      { label: '启用', value: 1 },
      { label: '禁用', value: 0 }
    ]
  }
]);

const column_19 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  },
  {
    label: '状态',
    prop: 'status'
  }
]);

function customDealParams(params) {
  console.log('原始参数:', params);
  return {
    ...params,
    customField: 'customValue',
    timestamp: Date.now()
  };
}

function customDealData(response) {
  console.log('原始响应:', response);
  return {
    records: response.records.map(item => ({
      ...item,
      customProcessed: true
    })),
    total: response.total
  };
}

function mockListApi19(params) {
  console.log('处理后参数:', params);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25, status: 1 },
          { id: 2, name: '李四', age: 30, status: 0 }
        ],
        total: 2
      });
    }, 1000);
  });
}

const listRef20 = ref(null);

const formData_20 = ref({
  name: '',
  status: ''
});

const formItems_20 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  },
  {
    type: 'select',
    label: '状态',
    prop: 'status',
    placeholder: '请选择状态',
    options: [
      { label: '启用', value: 1 },
      { label: '禁用', value: 0 }
    ]
  }
]);

const column_20 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  },
  {
    label: '状态',
    prop: 'status',
    type: 'status',
    value: {
      1: { type: 'success', label: '启用' },
      0: { type: 'info', label: '禁用' }
    }
  }
]);

function mockListApi20(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25, status: 1 },
          { id: 2, name: '李四', age: 30, status: 0 },
          { id: 3, name: '王五', age: 22, status: 1 }
        ],
        total: 3
      });
    }, 1000);
  });
}

function mockDelApi20(id) {
  return Promise.resolve();
}

function mockSwitchApi20(id) {
  return Promise.resolve();
}

function handleLoading20(loading) {
  console.log('加载状态:', loading);
}

function handlePageChange(page) {
  console.log('当前页:', page);
}

function handleSizeChange(size) {
  console.log('每页条数:', size);
}

function handleSubmit20(formData) {
  console.log('表单提交:', formData);
}

function handleReset20(formData) {
  console.log('表单重置:', formData);
}

function handleDelSuccess(row, res) {
  console.log('删除成功:', row, res);
}

function handleSwitchSuccess(row, status) {
  console.log('开关切换成功:', row, status);
}

function handleBatchExport() {
  alert('批量导出');
}

const formData_21 = ref({
  name: ''
});

const formItems_21 = ref([
  {
    type: 'input',
    label: '名称',
    prop: 'name',
    placeholder: '请输入名称'
  }
]);

const column_21 = ref([
  {
    label: '名称',
    prop: 'name'
  },
  {
    label: '数量',
    prop: 'count'
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'date'
  }
]);

function mockListApi21(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          {
            id: 1,
            name: '部门A',
            count: 10,
            createTime: '2024-01-01',
            children: [
              { id: 11, name: '小组A1', count: 5, createTime: '2024-01-02' },
              { id: 12, name: '小组A2', count: 5, createTime: '2024-01-03' }
            ]
          },
          {
            id: 2,
            name: '部门B',
            count: 8,
            createTime: '2024-01-04',
            children: [
              { id: 21, name: '小组B1', count: 4, createTime: '2024-01-05' },
              { id: 22, name: '小组B2', count: 4, createTime: '2024-01-06' }
            ]
          }
        ],
        total: 2
      });
    }, 1000);
  });
}

const formData_22 = ref({
  name: ''
});

const formItems_22 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_22 = ref([
  {
    label: '头像',
    prop: 'avatar',
    type: 'slot',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '职位',
    prop: 'position'
  },
  {
    label: '标签',
    prop: 'tags',
    type: 'slot',
    width: 200
  }
]);

function mockListApi22(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          {
            id: 1,
            name: '张三',
            position: '前端开发',
            avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
            tags: [
              { label: 'Vue', type: 'success' },
              { label: 'React', type: 'primary' }
            ]
          },
          {
            id: 2,
            name: '李四',
            position: '后端开发',
            avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
            tags: [
              { label: 'Java', type: 'warning' },
              { label: 'Go', type: 'danger' }
            ]
          }
        ],
        total: 2
      });
    }, 1000);
  });
}

const formData_23 = ref({
  name: ''
});

const formItems_23 = ref([
  {
    type: 'input',
    label: '产品名称',
    prop: 'name',
    placeholder: '请输入产品名称'
  }
]);

const column_23 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '产品名称',
    prop: 'name'
  },
  {
    label: '数量',
    prop: 'quantity',
    type: 'number'
  },
  {
    label: '单价',
    prop: 'price',
    type: 'number'
  },
  {
    label: '总价',
    prop: 'total',
    type: 'number'
  }
]);

function getSummaries(param) {
  const { columns, data } = param;
  const sums = [];
  columns.forEach((column, index) => {
    if (index === 0) {
      sums[index] = '合计';
      return;
    }
    if (column.property === 'quantity') {
      sums[index] = data.reduce((sum, row) => sum + row.quantity, 0);
    } else if (column.property === 'total') {
      sums[index] = data.reduce((sum, row) => sum + row.total, 0).toFixed(2);
    } else {
      sums[index] = '-';
    }
  });
  return sums;
}

function mockListApi23(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '产品A', quantity: 10, price: 100, total: 1000 },
          { id: 2, name: '产品B', quantity: 5, price: 200, total: 1000 },
          { id: 3, name: '产品C', quantity: 3, price: 300, total: 900 }
        ],
        total: 3
      });
    }, 1000);
  });
}

const formData_24 = ref({
  name: ''
});

const formItems_24 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_24 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function mockListApi24(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const records = [];
      for (let i = 1; i <= 50; i++) {
        records.push({
          id: i,
          name: `用户${i}`,
          age: 20 + Math.floor(Math.random() * 30)
        });
      }
      resolve({
        records: records,
        total: 50
      });
    }, 1000);
  });
}

const listRef25 = ref(null);
const selectedRows = ref([]);

const formData_25 = ref({
  name: ''
});

const formItems_25 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_25 = ref([
  {
    type: 'selection',
    width: 55
  },
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  },
  {
    label: '状态',
    prop: 'status',
    type: 'status',
    value: {
      1: { type: 'success', label: '启用' },
      0: { type: 'info', label: '禁用' }
    }
  }
]);

function handleLoading25(loading) {
  if (!loading && listRef25.value?.TableRef) {
    const tableRef = listRef25.value.TableRef;
    selectedRows.value = tableRef.getSelectionRows();
  }
}

function handleBatchEnable() {
  alert('批量启用: ' + JSON.stringify(selectedRows.value.map(row => row.id)));
}

function handleBatchDisable() {
  alert('批量禁用: ' + JSON.stringify(selectedRows.value.map(row => row.id)));
}

function mockListApi25(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25, status: 1 },
          { id: 2, name: '李四', age: 30, status: 0 },
          { id: 3, name: '王五', age: 22, status: 1 }
        ],
        total: 3
      });
    }, 1000);
  });
}

// API数据
const attrTableData = [
  {
    name: 'list-api',
    type: 'Function',
    value: '',
    desc: '列表数据接口，返回Promise'
  },
  {
    name: 'table-column',
    type: 'Array',
    value: '[]',
    desc: '表格列配置'
  },
  {
    name: 'form-data',
    type: 'Object',
    value: '{}',
    desc: '表单数据'
  },
  {
    name: 'form-items',
    type: 'Array',
    value: '[]',
    desc: '表单表单项配置'
  },
  {
    name: 'show-form',
    type: 'Boolean',
    value: 'true',
    desc: '是否显示表单'
  },
  {
    name: 'show-operate',
    type: 'Boolean',
    value: 'true',
    desc: '是否显示操作按钮区域'
  },
  {
    name: 'show-add',
    type: 'Boolean',
    value: 'true',
    desc: '是否显示添加按钮'
  },
  {
    name: 'add-route-path',
    type: 'String',
    value: '',
    desc: '添加页面路由'
  },
  {
    name: 'edit-route-path',
    type: 'String',
    value: '',
    desc: '编辑页面路由'
  },
  {
    name: 'detail-route-path',
    type: 'String',
    value: '',
    desc: '详情页面路由'
  },
  {
    name: 'show-table-operate',
    type: 'Boolean',
    value: 'true',
    desc: '是否显示表格操作列'
  },
  {
    name: 'show-table-detail',
    type: 'Boolean/Function',
    value: 'true',
    desc: '是否显示详情按钮，可传入函数根据行数据动态判断'
  },
  {
    name: 'show-table-edit',
    type: 'Boolean/Function',
    value: 'true',
    desc: '是否显示编辑按钮，可传入函数根据行数据动态判断'
  },
  {
    name: 'show-table-del',
    type: 'Boolean/Function',
    value: 'true',
    desc: '是否显示删除按钮，可传入函数根据行数据动态判断'
  },
  {
    name: 'show-table-switch',
    type: 'Boolean',
    value: 'false',
    desc: '是否显示状态开关'
  },
  {
    name: 'switch-prop',
    type: 'String',
    value: 'status',
    desc: '开关状态字段'
  },
  {
    name: 'switch-api',
    type: 'Function',
    value: '',
    desc: '开关切换接口'
  },
  {
    name: 'del-api',
    type: 'Function',
    value: '',
    desc: '删除接口'
  },
  {
    name: 'table-detail-text',
    type: 'String/Function',
    value: '详情',
    desc: '详情按钮文本，可传入函数根据行数据动态生成'
  },
  {
    name: 'table-edit-text',
    type: 'String/Function',
    value: '编辑',
    desc: '编辑按钮文本，可传入函数根据行数据动态生成'
  },
  {
    name: 'table-del-text',
    type: 'String/Function',
    value: '删除',
    desc: '删除按钮文本，可传入函数根据行数据动态生成'
  },
  {
    name: 'add-btn-text',
    type: 'String',
    value: '添加',
    desc: '添加按钮文本'
  },
  {
    name: 'disabled-add-btn',
    type: 'Boolean',
    value: 'false',
    desc: '是否禁用添加按钮'
  },
  {
    name: 'disabled-table-detail',
    type: 'Boolean/Function',
    value: 'false',
    desc: '是否禁用详情按钮，可传入函数根据行数据动态判断'
  },
  {
    name: 'disabled-table-edit',
    type: 'Boolean/Function',
    value: 'false',
    desc: '是否禁用编辑按钮，可传入函数根据行数据动态判断'
  },
  {
    name: 'disabled-table-del',
    type: 'Boolean/Function',
    value: 'false',
    desc: '是否禁用删除按钮，可传入函数根据行数据动态判断'
  },
  {
    name: 'disabled-table-switch',
    type: 'Boolean/Function',
    value: 'false',
    desc: '是否禁用开关按钮，可传入函数根据行数据动态判断'
  },
  {
    name: 'add-btn-attrs',
    type: 'Object',
    value: '{}',
    desc: '添加按钮属性'
  },
  {
    name: 'table-detail-fn',
    type: 'Function',
    value: '',
    desc: '详情按钮点击事件'
  },
  {
    name: 'table-edit-fn',
    type: 'Function',
    value: '',
    desc: '编辑按钮点击事件'
  },
  {
    name: 'table-del-fn',
    type: 'Function',
    value: '',
    desc: '删除按钮点击事件'
  },
  {
    name: 'add-fn',
    type: 'Function',
    value: '',
    desc: '添加按钮点击事件'
  },
  {
    name: 'query-fn',
    type: 'Function',
    value: '',
    desc: '查询按钮点击事件'
  },
  {
    name: 'reset-fn',
    type: 'Function',
    value: '',
    desc: '重置按钮点击事件'
  },
  {
    name: 'deal-params',
    type: 'Function',
    value: '',
    desc: '处理接口参数'
  },
  {
    name: 'deal-data',
    type: 'Function',
    value: '',
    desc: '处理接口返回数据'
  },
  {
    name: 'deal-del-params',
    type: 'Function',
    value: '',
    desc: '处理删除接口参数'
  },
  {
    name: 'deal-switch-params',
    type: 'Function',
    value: '',
    desc: '处理开关接口参数'
  },
  {
    name: 'popconfirm-txt',
    type: 'String/Function',
    value: '是否删除当前行数据？',
    desc: '删除确认文本，可传入函数根据行数据动态生成'
  },
  {
    name: 'table-switch-pop-txt',
    type: 'String',
    value: '请问是否关闭？',
    desc: '开关操作确认文本'
  },
  {
    name: 'table-switch-pop-attrs',
    type: 'Object',
    value: '{}',
    desc: '开关操作确认弹窗属性'
  },
  {
    name: 'del-message',
    type: 'String/Function',
    value: '删除成功',
    desc: '删除成功提示信息，可传入函数根据行数据动态生成'
  },
  {
    name: 'table-del-pop-attrs',
    type: 'Object',
    value: '{}',
    desc: '删除确认弹窗属性'
  },
  {
    name: 'show-skeleton',
    type: 'Boolean',
    value: 'false',
    desc: '是否显示骨架屏'
  },
  {
    name: 'skeleton-attrs',
    type: 'Object',
    value: '{}',
    desc: '骨架屏属性'
  },
  {
    name: 'table-attrs',
    type: 'Object',
    value: '{}',
    desc: '表格属性，支持showSelect, showRadio单选、selectColumnOptions（选择列配置，包含reserveSelection（是否保留选择））'
  },
  {
    name: 'list-hook-config',
    type: 'Object',
    value: '{}',
    desc: '列表hook配置'
  },
  {
    name: 'show-pagination',
    type: 'Boolean',
    value: 'true',
    desc: '是否显示分页'
  },
  {
    name: 'table-operate-column',
    type: 'Object',
    value: '{}',
    desc: '操作列配置，可设置width等属性'
  }
];

const eventsTableData = [
  {
    name: 'submit-form',
    desc: '表单提交事件',
    type: 'Function',
    value: 'formData'
  },
  {
    name: 'reset-form',
    desc: '表单重置事件',
    type: 'Function',
    value: 'formData'
  },
  {
    name: 'handle-loading',
    desc: '加载状态变化事件',
    type: 'Function',
    value: 'loading'
  },
  {
    name: 'handle-current-page',
    desc: '页码变化事件',
    type: 'Function',
    value: 'page'
  },
  {
    name: 'handle-page-size',
    desc: '每页条数变化事件',
    type: 'Function',
    value: 'size' 
  },
  {
    name: 'del-success',
    desc: '删除成功事件',
    type: 'Function',
    value: 'row, res'
  },
  {
    name: 'switch-success',
    desc: '开关切换成功事件',
    type: 'Function',
    value: 'row, status'
  }
];

const slotTableData = [
  {
    name: 'operate',
    desc: '操作按钮区域插槽'
  },
  {
    name: 'operate-prepend',
    desc: '操作按钮区域前置插槽'
  },
  {
    name: 'operate-append',
    desc: '操作按钮区域后置插槽'
  },
  {
    name: 'form-append',
    desc: '表单区域后置插槽'
  },
  {
    name: 'table-operate-prepend',
    desc: '表格操作列前置插槽',
  },
  {
    name: 'table-operate-append',
    desc: '表格操作列后置插槽',
  }
];

const exposesTableData = [
  {
    name: 'TableRef',
    desc: '表格组件引用',
    type: 'Object',
    value: '{}',
  },
  {
    name: 'FormRef',
    desc: '表单组件引用',
    type: 'Object',
    value: '{}',
  },
  {
    name: 'loadData',
    desc: '加载数据方法',
    type: 'Function',
    value: '',
  },
  {
    name: 'handleReset',
    desc: '重置方法',
    type: 'Function',
    value: '',
  },
  {
    name: 'setCurrentPage',
    desc: '设置当前页码',
    type: 'Function',
    value: '',
  },
  {
    name: 'setPageSize',
    desc: '设置每页条数',
    type: 'Function',
    value: '',
  },
  {
    name: 'isFirst',
    desc: '是否首次加载',
    type: 'Boolean',
    value: 'true',
  },
  {
    name: 'loading',
    desc: '加载状态',
    type: 'Boolean',
    value: 'false',
  },
  {
    name: 'routePath',
    desc: '当前路由路径',
    type: 'String',
    value: ''
  },
  {
    name: 'currentPage',
    desc: '当前页码',
    type: 'Number',
    value: '1'
  },
  {
    name: 'pageSize',
    desc: '每页条数',
    type: 'Number',
    value: '20'
  },
  {
    name: 'total',
    desc: '总条数',
    type: 'Number',
    value: '0'
  }
];

const formData_26 = ref({
  name: ''
});

const formItems_26 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_26 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function mockListApi26(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 }
        ],
        total: 2
      });
    }, 1000);
  });
}

const formData_27 = ref({
  name: ''
});

const formItems_27 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_27 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function mockListApi27(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 },
          { id: 3, name: '王五', age: 22 }
        ],
        total: 3
      });
    }, 1000);
  });
}
const currentSelectedRow = ref([]);
const formData_28 = ref({
  name: ''
});

const formItems_28 = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    placeholder: '请输入姓名'
  }
]);

const column_28 = ref([
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  }
]);

function mockListApi28(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        records: [
          { id: 1, name: '张三', age: 25 },
          { id: 2, name: '李四', age: 30 },
          { id: 3, name: '王五', age: 22 }
        ],
        total: 3
      });
    }, 1000);
  });
}
</script>