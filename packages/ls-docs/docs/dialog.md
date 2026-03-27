---
outline: deep
---

# Dialog 对话框

::: warning 基于 el-dialog 组件进行二次封装。
:::

## 使用方式

### 1. 基础对话框

<ClientOnly>
<LSButton type="primary" @click="dialogVisible = true">打开对话框</LSButton>
<LSDialog
  v-model="dialogVisible"
  title="对话框标题"
  width="500px"
>
  <div>这是对话框内容，您可以在这里添加任何您需要的内容。</div>
</LSDialog>
</ClientOnly>

:::details 点我查看代码

```html
<LSButton type="primary" @click="dialogVisible = true">打开对话框</LSButton>
<LSDialog v-model="dialogVisible" title="对话框标题" width="500px">
  <div>这是对话框内容，您可以在这里添加任何您需要的内容。</div>
</LSDialog>
```

```js
const dialogVisible = ref(false);
```

:::

### 2. 带自定义按钮的对话框

<ClientOnly>
<LSButton type="success" @click="dialogVisible2 = true">打开带自定义按钮的对话框</LSButton>
<LSDialog
  v-model="dialogVisible2"
  title="带自定义按钮的对话框"
  width="500px"
>
  <div>这是对话框内容，您可以在这里添加任何您需要的内容。</div>
  <template #footer>
    <span class="dialog-footer">
      <LSButton @click="dialogVisible2 = false">取消</LSButton>
      <LSButton type="primary" @click="dialogVisible2 = false">确认</LSButton>
    </span>
  </template>
</LSDialog>
</ClientOnly>

:::details 点我查看代码

```html
<LSButton type="success" @click="dialogVisible2 = true">打开带自定义按钮的对话框</LSButton>
<LSDialog v-model="dialogVisible2" title="带自定义按钮的对话框" width="500px">
  <div>这是对话框内容，您可以在这里添加任何您需要的内容。</div>
  <template #footer>
    <span class="dialog-footer">
      <LSButton @click="dialogVisible2 = false">取消</LSButton>
      <LSButton type="primary" @click="dialogVisible2 = false">确认</LSButton>
    </span>
  </template>
</LSDialog>
```

```js
const dialogVisible2 = ref(false);
```

:::

### 3. 不带标题的对话框

<ClientOnly>
<LSButton type="warning" @click="dialogVisible3 = true">打开无标题对话框</LSButton>
<LSDialog
  v-model="dialogVisible3"
  width="400px"
  :show-header="false"
>
  <div style="padding: 20px;">
    <h3 style="margin-top: 0;">无标题对话框</h3>
    <p>这是一个没有标题栏的对话框，您可以在这里添加任何您需要的内容。</p>
  </div>
  <template #footer>
    <span class="dialog-footer">
      <LSButton @click="dialogVisible3 = false">关闭</LSButton>
    </span>
  </template>
</LSDialog>
</ClientOnly>

:::details 点我查看代码

```html
<LSButton type="warning" @click="dialogVisible3 = true">打开无标题对话框</LSButton>
<LSDialog v-model="dialogVisible3" width="400px" :show-header="false">
  <div style="padding: 20px;">
    <h3 style="margin-top: 0;">无标题对话框</h3>
    <p>这是一个没有标题栏的对话框，您可以在这里添加任何您需要的内容。</p>
  </div>
  <template #footer>
    <span class="dialog-footer">
      <LSButton @click="dialogVisible3 = false">关闭</LSButton>
    </span>
  </template>
</LSDialog>
```

```js
const dialogVisible3 = ref(false);
```

:::

### 4. 点击遮罩层可关闭的对话框

<ClientOnly>
<LSButton type="danger" @click="dialogVisible4 = true">打开带遮罩的对话框</LSButton>
<LSDialog
  v-model="dialogVisible4"
  title="带遮罩的对话框"
  width="500px"
  :modal="true"
  :close-on-click-modal="true"
>
  <div>这是一个点击遮罩层可关闭的对话框，点击遮罩层可以关闭对话框。</div>
</LSDialog>
</ClientOnly>

:::details 点我查看代码

```html
<LSButton type="danger" @click="dialogVisible4 = true">打开带遮罩的对话框</LSButton>
<LSDialog v-model="dialogVisible4" title="带遮罩的对话框" width="500px" :modal="true" :close-on-click-modal="true">
  <div>这是一个点击遮罩层可关闭的对话框，点击遮罩层可以关闭对话框。</div>
</LSDialog>
```

```js
const dialogVisible4 = ref(false);
```

:::

### 5. 无关闭按钮的对话框

<ClientOnly>
<LSButton type="info" @click="dialogVisible5 = true">打开无关闭按钮的对话框</LSButton>
<LSDialog
  v-model="dialogVisible5"
  title="无关闭按钮的对话框"
  width="500px"
  :close-on-click-modal="false"
  :close-on-press-escape="false"
  :show-close="false"
>
  <div>这是一个无关闭按钮的对话框，您只能通过代码来关闭它。</div>
  <template #footer>
    <span class="dialog-footer">
      <LSButton type="primary" @click="dialogVisible5 = false">确认</LSButton>
    </span>
  </template>
</LSDialog>
</ClientOnly>

:::details 点我查看代码

```html
<LSButton type="info" @click="dialogVisible5 = true">打开无关闭按钮的对话框</LSButton>
<LSDialog
  v-model="dialogVisible5"
  title="无关闭按钮的对话框"
  width="500px"
  :close-on-click-modal="false"
  :close-on-press-escape="false"
  :show-close="false"
>
  <div>这是一个无关闭按钮的对话框，您只能通过代码来关闭它。</div>
  <template #footer>
    <span class="dialog-footer">
      <LSButton type="primary" @click="dialogVisible5 = false">确认</LSButton>
    </span>
  </template>
</LSDialog>
```

```js
const dialogVisible5 = ref(false);
```

:::

### 6. 居中的对话框

<ClientOnly>
<LSButton type="primary" @click="dialogVisible6 = true">打开居中对话框</LSButton>
<LSDialog
  v-model="dialogVisible6"
  title="居中的对话框"
  width="500px"
  center
>
  <div>这是一个居中显示的对话框，它会在屏幕中央显示。</div>
</LSDialog>
</ClientOnly>

:::details 点我查看代码

```html
<LSButton type="primary" @click="dialogVisible6 = true">打开居中对话框</LSButton>
<LSDialog v-model="dialogVisible6" title="居中的对话框" width="500px" center>
  <div>这是一个居中显示的对话框，它会在屏幕中央显示。</div>
</LSDialog>
```

```js
const dialogVisible6 = ref(false);
```

:::

### 7. 带表单的对话框

<ClientOnly>
<LSButton type="success" @click="dialogVisible7 = true">打开带表单的对话框</LSButton>
<LSDialog
  v-model="dialogVisible7"
  title="用户信息"
  width="500px"
>
  <el-form :model="form" label-width="80px">
    <el-form-item label="姓名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="年龄">
      <el-input-number v-model="form.age" :min="0" :max="120"></el-input-number>
    </el-form-item>
    <el-form-item label="性别">
      <el-radio-group v-model="form.gender">
        <el-radio label="male">男</el-radio>
        <el-radio label="female">女</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="邮箱">
      <el-input v-model="form.email" type="email"></el-input>
    </el-form-item>
  </el-form>
  <template #footer>
    <span class="dialog-footer">
      <LSButton @click="dialogVisible7 = false">取消</LSButton>
      <LSButton type="primary" @click="handleSubmit">保存</LSButton>
    </span>
  </template>
</LSDialog>
</ClientOnly>

:::details 点我查看代码

```html
<LSButton type="success" @click="dialogVisible7 = true">打开带表单的对话框</LSButton>
<LSDialog v-model="dialogVisible7" title="用户信息" width="500px">
  <el-form :model="form" label-width="80px">
    <el-form-item label="姓名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="年龄">
      <el-input-number v-model="form.age" :min="0" :max="120"></el-input-number>
    </el-form-item>
    <el-form-item label="性别">
      <el-radio-group v-model="form.gender">
        <el-radio label="male">男</el-radio>
        <el-radio label="female">女</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="邮箱">
      <el-input v-model="form.email" type="email"></el-input>
    </el-form-item>
  </el-form>
  <template #footer>
    <span class="dialog-footer">
      <LSButton @click="dialogVisible7 = false">取消</LSButton>
      <LSButton type="primary" @click="handleSubmit">保存</LSButton>
    </span>
  </template>
</LSDialog>
```

```js
const dialogVisible7 = ref(false);
const form = ref({
  name: '',
  age: 0,
  gender: 'male',
  email: ''
});

const handleSubmit = () => {
  console.log('保存用户信息:', form.value);
  dialogVisible7.value = false;
};

const handleConfirmWithLoading = () => {
  // 显示按钮loading状态
  confirmLoading.value = true;

  // 模拟2秒的异步操作
  setTimeout(() => {
    // 关闭loading状态
    confirmLoading.value = false;
    // 关闭对话框
    dialogVisible12.value = false;
  }, 2000);
};
```

:::

### 8. 带加载状态的对话框

<ClientOnly>
<LSButton type="warning" @click="dialogVisible8 = true">打开带加载的对话框</LSButton>
<LSDialog
  v-model="dialogVisible8"
  title="处理中"
  width="400px"
  :show-close="false"
  :close-on-click-modal="false"
  :close-on-press-escape="false"
>
  <div class="loading-content">
    <el-icon class="is-loading"><Loading /></el-icon>
    <span style="margin-left: 10px;">正在处理，请稍候...</span>
  </div>
</LSDialog>
</ClientOnly>

:::details 点我查看代码

```html
<LSButton type="warning" @click="dialogVisible8 = true">打开带加载的对话框</LSButton>
<LSDialog
  v-model="dialogVisible8"
  title="处理中"
  width="400px"
  :show-close="false"
  :close-on-click-modal="false"
  :close-on-press-escape="false"
>
  <div class="loading-content">
    <el-icon class="is-loading"><Loading /></el-icon>
    <span style="margin-left: 10px;">正在处理，请稍候...</span>
  </div>
</LSDialog>
```

```js
import { Loading } from '@element-plus/icons-vue';
const dialogVisible8 = ref(false);
```

```css
.loading-content {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
}

.is-loading {
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

:::

### 9. 嵌套对话框

<ClientOnly>
<LSButton type="danger" @click="dialogVisible9 = true">打开对话框1</LSButton>
<LSDialog
  v-model="dialogVisible9"
  title="对话框1"
  width="500px"
>
  <div>这是第一个对话框，您可以在里面打开另一个对话框。</div>
  <LSButton type="primary" @click="dialogVisible10 = true">打开对话框2</LSButton>
  <LSDialog
    v-model="dialogVisible10"
    title="对话框2"
    width="400px"
  >
    <div>这是第二个对话框，它嵌套在第一个对话框中。</div>
  </LSDialog>
</LSDialog>
</ClientOnly>

:::details 点我查看代码

```html
<LSButton type="danger" @click="dialogVisible9 = true">打开对话框1</LSButton>
<LSDialog v-model="dialogVisible9" title="对话框1" width="500px">
  <div>这是第一个对话框，您可以在里面打开另一个对话框。</div>
  <LSButton type="primary" @click="dialogVisible10 = true">打开对话框2</LSButton>
  <LSDialog v-model="dialogVisible10" title="对话框2" width="400px">
    <div>这是第二个对话框，它嵌套在第一个对话框中。</div>
  </LSDialog>
</LSDialog>
```

```js
const dialogVisible9 = ref(false);
const dialogVisible10 = ref(false);
```

:::

### 10. 带自定义头部的对话框

<ClientOnly>
<LSButton type="info" @click="dialogVisible11 = true">打开带自定义头部的对话框</LSButton>
<LSDialog
  v-model="dialogVisible11"
  width="500px"
>
  <template #header>
    <div class="custom-header">
      <h3>自定义头部</h3>
      <LSButton type="text" @click="dialogVisible11 = false">
        <el-icon><Close /></el-icon>
      </LSButton>
    </div>
  </template>
  <div>这是一个带自定义头部的对话框，您可以完全控制头部的内容和样式。</div>
</LSDialog>
</ClientOnly>

:::details 点我查看代码

```html
<LSButton type="info" @click="dialogVisible11 = true">打开带自定义头部的对话框</LSButton>
<LSDialog v-model="dialogVisible11" width="500px">
  <template #header>
    <div class="custom-header">
      <h3>自定义头部</h3>
      <LSButton type="text" @click="dialogVisible11 = false">
        <el-icon><Close /></el-icon>
      </LSButton>
    </div>
  </template>
  <div>这是一个带自定义头部的对话框，您可以完全控制头部的内容和样式。</div>
</LSDialog>
```

```js
import { Close } from '@element-plus/icons-vue';
const dialogVisible11 = ref(false);
```

```css
.custom-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #ebeef5;
}

.custom-header h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}
```

:::

### 11. 带确认按钮loading状态的对话框

<ClientOnly>
<LSButton type="primary" @click="dialogVisible12 = true">打开带loading的对话框</LSButton>
<LSDialog
  v-model="dialogVisible12"
  title="带确认按钮loading的对话框"
  width="500px"
  :loading="confirmLoading"
  @on-confirm="handleConfirmWithLoading"
>
  <div>点击确定按钮后，按钮会显示loading状态，2秒后关闭对话框。</div>
</LSDialog>
</ClientOnly>

:::details 点我查看代码

```html
<LSButton type="primary" @click="dialogVisible12 = true">打开带loading的对话框</LSButton>
<LSDialog
  v-model="dialogVisible12"
  title="带确认按钮loading的对话框"
  width="500px"
  :loading="confirmLoading"
  @on-confirm="handleConfirmWithLoading"
>
  <div>点击确定按钮后，按钮会显示loading状态，2秒后关闭对话框。</div>
</LSDialog>
```

```js
const dialogVisible12 = ref(false);
const confirmLoading = ref(false);

const handleConfirmWithLoading = () => {
  // 显示按钮loading状态
  confirmLoading.value = true;

  // 模拟2秒的异步操作
  setTimeout(() => {
    // 关闭loading状态
    confirmLoading.value = false;
    // 关闭对话框
    dialogVisible12.value = false;
  }, 2000);
};
```

:::

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="dialogTableData" />

### 2. 按钮配置

对话框内置了确认和取消按钮，支持自定义配置：

```ts
type DialogBtnType = {
  txt?: string              // 按钮文本
  type?: string             // 按钮类型（primary/success/warning/danger/info）
  iconConfig?: {             // 图标配置
    name?: string           // 图标名称
    color?: string          // 图标颜色
    size?: number           // 图标大小
  }
  // 继承 Element Plus Button 的所有属性
}
```

示例：

```html
<LSDialog
  v-model="dialogVisible"
  title="自定义按钮"
  :btn-cancel-config="{ txt: '关闭', type: 'info' }"
  :btn-confirm-config="{ 
    txt: '提交', 
    type: 'success',
    iconConfig: { name: 'Check', color: '#fff', size: 16 }
  }"
/>
```

### 3. 滚动区域

当内容超出对话框高度时，可以开启滚动区域：

```html
<LSDialog
  v-model="dialogVisible"
  title="带滚动的对话框"
  width="600px"
  :open-scroll="true"
>
  <!-- 长内容 -->
  <div style="height: 1000px;">很长很长的内容...</div>
</LSDialog>
```

开启后，内容区域会自动计算高度并显示滚动条。

### 4. 加载状态

支持两种加载状态：

1. **按钮加载**：通过 `loading` prop 控制确认按钮的加载状态
2. **内容加载**：通过 `content-loading` prop 控制内容区域的加载状态

```html
<LSDialog
  v-model="dialogVisible"
  title="加载示例"
  :loading="confirmLoading"
  :content-loading="contentLoading"
  @on-confirm="handleConfirm"
>
  <div>对话框内容</div>
</LSDialog>

<script setup>
const confirmLoading = ref(false)
const contentLoading = ref(false)

const handleConfirm = () => {
  confirmLoading.value = true
  // 模拟异步操作
  setTimeout(() => {
    confirmLoading.value = false
    dialogVisible.value = false
  }, 2000)
}
</script>
```

### 5. 自定义底部按钮

可以通过 `footer` slot 完全自定义底部按钮区域：

```html
<LSDialog v-model="dialogVisible" title="自定义底部">
  <div>对话框内容</div>
  <template #footer>
    <div class="custom-footer">
      <LSButton @click="dialogVisible = false">取消</LSButton>
      <LSButton type="primary" @click="handleSave">保存</LSButton>
      <LSButton type="success" @click="handleSubmit">提交</LSButton>
    </div>
  </template>
</LSDialog>
```

### 6. 其他原生属性

组件基于 Element Plus 的 `el-dialog` 进行二次封装，支持所有原生属性，如：

- `top` - 对话框距离顶部的高度
- `custom-class` - 自定义类名
- `lock-scroll` - 是否在 Dialog 出现时将 body 滚动锁定
- `before-close` - 关闭前的回调函数
- `open-delay` - Dialog 打开的延时时间
- `close-delay` - Dialog 关闭的延时时间

### 7. Events

<ApiIntro :tableColumn="eventTableColumn" :tableData="dialogEventTableData" />

### 8. Slots

<ApiIntro :tableColumn="slotTableColumn" :tableData="dialogSlotTableData" />

### 9. Exposes

<ApiIntro :tableColumn="exposesTableColumn" :tableData="dialogExposesTableData" />

<script setup>
import { ref } from 'vue';
import { Loading, Close } from '@element-plus/icons-vue';
import { tableColumn } from '../constant';
import { ElForm, ElFormItem, ElInput, ElRadio, ElRadioGroup, ElInputNumber, ElIcon } from 'element-plus'

const dialogVisible = ref(false);
const dialogVisible2 = ref(false);
const dialogVisible3 = ref(false);
const dialogVisible4 = ref(false);
const dialogVisible5 = ref(false);
const dialogVisible6 = ref(false);
const dialogVisible7 = ref(false);
const dialogVisible8 = ref(false);
const dialogVisible9 = ref(false);
const dialogVisible10 = ref(false);
const dialogVisible11 = ref(false);
const dialogVisible12 = ref(false);
const dialogVisible13 = ref(false);
const confirmLoading = ref(false);
const contentLoading = ref(false);

const form = ref({
  name: '',
  age: 0,
  gender: 'male',
  email: ''
});

const openContentLoadingDialog = () => {
  dialogVisible13.value = true;
  contentLoading.value = true;
  
  // 模拟内容加载
  setTimeout(() => {
    contentLoading.value = false;
  }, 2000);
};

const handleSubmit = () => {
  console.log('保存用户信息:', form.value);
  dialogVisible7.value = false;
};

const handleConfirmWithLoading = () => {
  // 显示按钮loading状态
  confirmLoading.value = true;
  
  // 模拟2秒的异步操作
  setTimeout(() => {
    // 关闭loading状态
    confirmLoading.value = false;
    // 关闭对话框
    dialogVisible12.value = false;
  }, 2000);
};

const dialogTableData = ref([
  {
    name: 'modelValue / v-model',
    desc: '对话框可见性',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'title',
    desc: '对话框标题',
    type: 'string',
    value: '提示'
  },
  {
    name: 'width',
    desc: '对话框宽度',
    type: 'string',
    value: '50%'
  },
  {
    name: 'showHeader',
    desc: '是否显示头部',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'showClose',
    desc: '是否显示关闭按钮',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'modal',
    desc: '是否显示遮罩层',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'modalAppendToBody',
    desc: '遮罩层是否插入到 body 元素下',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'closeOnClickModal',
    desc: '是否可以通过点击遮罩层关闭对话框',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'closeOnPressEscape',
    desc: '是否可以通过按下 ESC 键关闭对话框',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'center',
    desc: '是否居中显示',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'destroyOnClose',
    desc: '关闭时是否销毁对话框内容',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'draggable',
    desc: '是否可拖拽',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'resize',
    desc: '是否可调整大小',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'hasFooter',
    desc: '是否显示底部按钮区域',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'hasCancelBtn',
    desc: '是否显示取消按钮',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'hasConfirmBtn',
    desc: '是否显示确认按钮',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'loading',
    desc: '确认按钮的加载状态（显示loading并禁用）',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'btnCancelConfig',
    desc: '取消按钮配置，继承 Button 所有属性',
    type: 'object',
    value: '{}'
  },
  {
    name: 'btnConfirmConfig',
    desc: '确认按钮配置，继承 Button 所有属性',
    type: 'object',
    value: '{}'
  },
  {
    name: 'contentLoading',
    desc: '内容区域的加载状态（显示loading）',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'openScroll',
    desc: '是否开启内容区域滚动（超出高度时显示滚动条）',
    type: 'boolean',
    value: 'false'
  }
]);

const eventTableColumn = ref([
  {
    prop: 'name',
    label: '事件名'
  },
  {
    prop: 'desc',
    label: '说明'
  },
  {
    prop: 'params',
    label: '参数'
  }
]);

const dialogEventTableData = ref([
  {
    name: 'open',
    desc: '对话框打开时触发',
    params: '-'
  },
  {
    name: 'opened',
    desc: '对话框打开动画结束时触发',
    params: '-'
  },
  {
    name: 'close',
    desc: '对话框关闭时触发',
    params: '-'
  },
  {
    name: 'closed',
    desc: '对话框关闭动画结束时触发',
    params: '-'
  },
  {
    name: 'onCancel',
    desc: '点击取消按钮或关闭按钮时触发',
    params: '-'
  },
  {
    name: 'onConfirm',
    desc: '点击确认按钮时触发',
    params: '-'
  }
]);

const slotTableColumn = ref([
  {
    prop: 'name',
    label: '插槽名'
  },
  {
    prop: 'desc',
    label: '说明'
  }
]);

const dialogSlotTableData = ref([
  {
    name: 'default',
    desc: '对话框内容区域'
  },
  {
    name: 'header',
    desc: '对话框头部区域（自定义头部）'
  },
  {
    name: 'title',
    desc: '对话框标题区域'
  },
  {
    name: 'footer',
    desc: '对话框底部按钮区域（完全自定义底部）'
  }
]);

const exposesTableColumn = ref([
  {
    prop: 'name',
    label: '方法名'
  },
  {
    prop: 'desc',
    label: '说明'
  },
  {
    prop: 'params',
    label: '参数'
  },
  {
    prop: 'return',
    label: '返回值'
  }
]);

const dialogExposesTableData = ref([
  {
    name: 'lsDialogRef',
    desc: 'el-dialog 组件的 DOM 引用',
    params: '-',
    return: 'HTMLElement'
  },
  {
    name: 'updateHeight',
    desc: '手动更新滚动区域高度（openScroll 为 true 时有效）',
    params: '-',
    return: 'Promise<void>'
  }
]);
</script>

<style scoped>
.loading-content {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
}

.is-loading {
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.custom-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #ebeef5;
}

.custom-header h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
</style>
