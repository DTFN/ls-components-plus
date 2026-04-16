---
outline: deep
---

# Button 按钮

::: warning 结合 el-button、el-button-group 组件进行二次封装，提供更多自定义选项和图标配置功能。
:::

## 使用方式

### 1. 基础按钮

<ClientOnly>
<LSButton>默认按钮</LSButton>
<LSButton type="primary">主要按钮</LSButton>
<LSButton type="success">成功按钮</LSButton>
<LSButton type="warning">警告按钮</LSButton>
<LSButton type="danger">危险按钮</LSButton>
<LSButton type="info">信息按钮</LSButton>
</ClientOnly>

:::details 点我查看代码

```html
<LSButton>默认按钮</LSButton>
<LSButton type="primary">主要按钮</LSButton>
<LSButton type="success">成功按钮</LSButton>
<LSButton type="warning">警告按钮</LSButton>
<LSButton type="danger">危险按钮</LSButton>
<LSButton type="info">信息按钮</LSButton>

```

:::

### 2. 按钮尺寸

<ClientOnly>
<LSButton size="large">大型按钮</LSButton>
<LSButton>默认按钮</LSButton>
<LSButton size="small">小型按钮</LSButton>
</ClientOnly>

:::details 点我查看代码

```html
<LSButton size="large">大型按钮</LSButton>
<LSButton>默认按钮</LSButton>
<LSButton size="small">小型按钮</LSButton>

```

:::

### 3. 带图标的按钮

<ClientOnly>
<LSButton type="primary" :icon="Edit">编辑</LSButton>
<LSButton type="success" :icon="Check">成功</LSButton>
<LSButton type="warning" :icon="Warning">警告</LSButton>
<LSButton type="danger" :icon="Delete">删除</LSButton>
<LSButton type="info" :icon="InfoFilled">信息</LSButton>
</ClientOnly>

:::details 点我查看代码

```js
import { Check, Delete, Edit, InfoFilled, Warning } from '@element-plus/icons-vue'
```

```html
<LSButton type="primary" :icon="Edit">编辑</LSButton>
<LSButton type="success" :icon="Check">成功</LSButton>
<LSButton type="warning" :icon="Warning">警告</LSButton>
<LSButton type="danger" :icon="Delete">删除</LSButton>
<LSButton type="info" :icon="InfoFilled">信息</LSButton>

```

:::

### 4. 仅图标按钮

<ClientOnly>
<LSButton type="primary" :icon="Edit"></LSButton>
<LSButton type="success" :icon="Check"></LSButton>
<LSButton type="warning" :icon="Warning"></LSButton>
<LSButton type="danger" :icon="Delete"></LSButton>
<LSButton type="info" :icon="InfoFilled"></LSButton>
</ClientOnly>

:::details 点我查看代码

```html
<LSButton type="primary" :icon="Edit"></LSButton>
<LSButton type="success" :icon="Check"></LSButton>
<LSButton type="warning" :icon="Warning"></LSButton>
<LSButton type="danger" :icon="Delete"></LSButton>
<LSButton type="info" :icon="InfoFilled"></LSButton>

```

:::

### 5. 加载状态按钮

<ClientOnly>
<LSButton type="primary" :loading="true">加载中</LSButton>
<LSButton type="success" :loading="true">加载中</LSButton>
<LSButton type="warning" :loading="true">加载中</LSButton>
<LSButton type="danger" :loading="true">加载中</LSButton>
<LSButton type="info" :loading="true">加载中</LSButton>
</ClientOnly>

:::details 点我查看代码

```html
<LSButton type="primary" :loading="true">加载中</LSButton>
<LSButton type="success" :loading="true">加载中</LSButton>
<LSButton type="warning" :loading="true">加载中</LSButton>
<LSButton type="danger" :loading="true">加载中</LSButton>
<LSButton type="info" :loading="true">加载中</LSButton>

```

:::

### 6. 禁用状态按钮

<ClientOnly>
<LSButton disabled>禁用按钮</LSButton>
<LSButton type="primary" disabled>禁用主要按钮</LSButton>
<LSButton type="success" disabled>禁用成功按钮</LSButton>
<LSButton type="warning" disabled>禁用警告按钮</LSButton>
<LSButton type="danger" disabled>禁用危险按钮</LSButton>
<LSButton type="info" disabled>禁用信息按钮</LSButton>
</ClientOnly>

:::details 点我查看代码

```html
<LSButton disabled>禁用按钮</LSButton>
<LSButton type="primary" disabled>禁用主要按钮</LSButton>
<LSButton type="success" disabled>禁用成功按钮</LSButton>
<LSButton type="warning" disabled>禁用警告按钮</LSButton>
<LSButton type="danger" disabled>禁用危险按钮</LSButton>
<LSButton type="info" disabled>禁用信息按钮</LSButton>

```

:::

### 7. 圆角按钮

<ClientOnly>
<LSButton round>圆角按钮</LSButton>
<LSButton type="primary" round>主要圆角按钮</LSButton>
<LSButton type="success" round>成功圆角按钮</LSButton>
<LSButton type="warning" round>警告圆角按钮</LSButton>
<LSButton type="danger" round>危险圆角按钮</LSButton>
<LSButton type="info" round>信息圆角按钮</LSButton>
</ClientOnly>

:::details 点我查看代码

```html
<LSButton round>圆角按钮</LSButton>
<LSButton type="primary" round>主要圆角按钮</LSButton>
<LSButton type="success" round>成功圆角按钮</LSButton>
<LSButton type="warning" round>警告圆角按钮</LSButton>
<LSButton type="danger" round>危险圆角按钮</LSButton>
<LSButton type="info" round>信息圆角按钮</LSButton>

```

:::

### 8. 圆形按钮

<ClientOnly>
<LSButton circle :icon="Edit"></LSButton>
<LSButton type="primary" circle :icon="Check"></LSButton>
<LSButton type="success" circle :icon="Warning"></LSButton>
<LSButton type="warning" circle :icon="Delete"></LSButton>
<LSButton type="danger" circle :icon="InfoFilled"></LSButton>
<LSButton type="info" circle :icon="Search"></LSButton>
</ClientOnly>

:::details 点我查看代码

```js
import { Check, Delete, Edit, InfoFilled, Search, Warning } from '@element-plus/icons-vue'
```

```html
<LSButton circle :icon="Edit"></LSButton>
<LSButton type="primary" circle :icon="Check"></LSButton>
<LSButton type="success" circle :icon="Warning"></LSButton>
<LSButton type="warning" circle :icon="Delete"></LSButton>
<LSButton type="danger" circle :icon="InfoFilled"></LSButton>
<LSButton type="info" circle :icon="Search"></LSButton>

```

:::

### 9. 文字按钮

<ClientOnly>
<LSButton link>文字按钮</LSButton>
<LSButton type="primary" link>主要文字按钮</LSButton>
<LSButton type="success" link>成功文字按钮</LSButton>
<LSButton type="warning" link>警告文字按钮</LSButton>
<LSButton type="danger" link>危险文字按钮</LSButton>
<LSButton type="info" link>信息文字按钮</LSButton>
</ClientOnly>

:::details 点我查看代码

```html
<LSButton link>文字按钮</LSButton>
<LSButton type="primary" link>主要文字按钮</LSButton>
<LSButton type="success" link>成功文字按钮</LSButton>
<LSButton type="warning" link>警告文字按钮</LSButton>
<LSButton type="danger" link>危险文字按钮</LSButton>
<LSButton type="info" link>信息文字按钮</LSButton>

```

:::

### 10. 朴素按钮

<ClientOnly>
<LSButton plain>朴素按钮</LSButton>
<LSButton type="primary" plain>主要朴素按钮</LSButton>
<LSButton type="success" plain>成功朴素按钮</LSButton>
<LSButton type="warning" plain>警告朴素按钮</LSButton>
<LSButton type="danger" plain>危险朴素按钮</LSButton>
<LSButton type="info" plain>信息朴素按钮</LSButton>
</ClientOnly>

:::details 点我查看代码

```html
<LSButton plain>朴素按钮</LSButton>
<LSButton type="primary" plain>主要朴素按钮</LSButton>
<LSButton type="success" plain>成功朴素按钮</LSButton>
<LSButton type="warning" plain>警告朴素按钮</LSButton>
<LSButton type="danger" plain>危险朴素按钮</LSButton>
<LSButton type="info" plain>信息朴素按钮</LSButton>

```

:::

### 11. 带自定义图标的按钮

<ClientOnly>
<LSButton :icon-config="{ type: 1, name: 'iconoir:fish', color: 'blue', width: 20, height: 20 }">鱼图标</LSButton>
<LSButton :icon-config="{ type: 1, name: 'iconoir:heart', color: 'red', width: 20, height: 20 }">心形图标</LSButton>
<LSButton :icon-config="{ type: 1, name: 'iconoir:star', color: 'yellow', width: 20, height: 20 }">星形图标</LSButton>
</ClientOnly>

:::details 点我查看代码

```html
<LSButton :icon-config="{ type: 1, name: 'iconoir:fish', color: 'blue', width: 20, height: 20 }">鱼图标</LSButton>
<LSButton :icon-config="{ type: 1, name: 'iconoir:heart', color: 'red', width: 20, height: 20 }">心形图标</LSButton>
<LSButton :icon-config="{ type: 1, name: 'iconoir:star', color: 'yellow', width: 20, height: 20 }">星形图标</LSButton>

```

:::

### 12. 带图标插槽的按钮

<ClientOnly>
<LSButton type="primary">
  <template #icon>
    <LSIcon :type="1" name="iconoir:settings" color="#fff" width="18" height="18" />
  </template>
  设置
</LSButton>
<LSButton type="success">
  <template #icon>
    <LSIcon :type="1" name="iconoir:save-floppy-disk" color="#fff" width="18" height="18" />
  </template>
  保存
</LSButton>
<LSButton type="danger">
  <template #icon>
    <LSIcon :type="1" name="iconoir:trash" color="#fff" width="18" height="18" />
  </template>
  删除
</LSButton>
</ClientOnly>

:::details 点我查看代码

```html
<LSButton type="primary">
  <template #icon>
    <LSIcon :type="1" name="iconoir:settings" color="#fff" width="18" height="18" />
  </template>
  设置
</LSButton>
<LSButton type="success">
  <template #icon>
    <LSIcon :type="1" name="iconoir:save-floppy-disk" color="#fff" width="18" height="18" />
  </template>
  保存
</LSButton>
<LSButton type="danger">
  <template #icon>
    <LSIcon :type="1" name="iconoir:trash" color="#fff" width="18" height="18" />
  </template>
  删除
</LSButton>

```

:::

### 13. 按钮组

<ClientOnly>
<LSButtonGroup>
  <LSButton type="primary" :icon="ArrowLeft">上一步</LSButton>
  <LSButton type="primary">下一步</LSButton>
</LSButtonGroup>

<LSButtonGroup style="margin-left: 20px;">
  <LSButton type="success">编辑</LSButton>
  <LSButton type="warning">复制</LSButton>
  <LSButton type="danger">删除</LSButton>
</LSButtonGroup>
</ClientOnly>

:::details 点我查看代码

```js
import { ArrowLeft } from '@element-plus/icons-vue'
```

```html
<LSButtonGroup>
  <LSButton type="primary" :icon="ArrowLeft">上一步</LSButton>
  <LSButton type="primary">下一步</LSButton>
</LSButtonGroup>

<LSButtonGroup style="margin-left: 20px">
  <LSButton type="success">编辑</LSButton>
  <LSButton type="warning">复制</LSButton>
  <LSButton type="danger">删除</LSButton>
</LSButtonGroup>

```

:::

### 14. 带分隔符的按钮组

<ClientOnly>
<LSButtonGroup type="primary" separator="|" :separator-size="14">
  <LSButton link>按钮1</LSButton>
  <LSButton link>按钮2</LSButton>
  <LSButton link>按钮3</LSButton>
</LSButtonGroup>

<LSButtonGroup type="success" separator="/" :separator-size="14" style="margin-left: 20px;">
  <LSButton link>按钮A</LSButton>
  <LSButton link>按钮B</LSButton>
  <LSButton link>按钮C</LSButton>
</LSButtonGroup>
</ClientOnly>

:::details 点我查看代码

```html
<LSButtonGroup type="primary" separator="|" :separator-size="14">
  <LSButton link>按钮1</LSButton>
  <LSButton link>按钮2</LSButton>
  <LSButton link>按钮3</LSButton>
</LSButtonGroup>

<LSButtonGroup type="success" separator="/" :separator-size="14" style="margin-left: 20px">
  <LSButton link>按钮A</LSButton>
  <LSButton link>按钮B</LSButton>
  <LSButton link>按钮C</LSButton>
</LSButtonGroup>

```

:::

### 15. 带图标的按钮组

<ClientOnly>
<LSButtonGroup type="primary">
  <LSButton :icon="Edit">编辑</LSButton>
  <LSButton :icon="Check">保存</LSButton>
  <LSButton :icon="Delete">删除</LSButton>
</LSButtonGroup>
</ClientOnly>

:::details 点我查看代码

```js
import { Check, Delete, Edit } from '@element-plus/icons-vue'
```

```html
<LSButtonGroup type="primary">
  <LSButton :icon="Edit">编辑</LSButton>
  <LSButton :icon="Check">保存</LSButton>
  <LSButton :icon="Delete">删除</LSButton>
</LSButtonGroup>

```

:::

### 16. 按钮组的嵌套使用

<ClientOnly>
<LSButtonGroup>
  <LSButton type="primary">文件</LSButton>
  <LSButtonGroup>
    <LSButton type="success">新建</LSButton>
    <LSButton type="warning">打开</LSButton>
    <LSButton type="info">保存</LSButton>
  </LSButtonGroup>
  <LSButton type="danger">退出</LSButton>
</LSButtonGroup>
</ClientOnly>

:::details 点我查看代码

```html
<LSButtonGroup>
  <LSButton type="primary">文件</LSButton>
  <LSButtonGroup>
    <LSButton type="success">新建</LSButton>
    <LSButton type="warning">打开</LSButton>
    <LSButton type="info">保存</LSButton>
  </LSButtonGroup>
  <LSButton type="danger">退出</LSButton>
</LSButtonGroup>

```

:::

### 17. 响应式按钮

<ClientOnly>
<div class="responsive-buttons">
  <LSButton type="primary" class="responsive-btn">提交</LSButton>
  <LSButton type="success" class="responsive-btn">保存</LSButton>
  <LSButton type="danger" class="responsive-btn">取消</LSButton>
</div>
</ClientOnly>

:::details 点我查看代码

```html
<div class="responsive-buttons">
  <LSButton type="primary" class="responsive-btn">提交</LSButton>
  <LSButton type="success" class="responsive-btn">保存</LSButton>
  <LSButton type="danger" class="responsive-btn">取消</LSButton>
</div>

<style scoped>
  .responsive-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .responsive-btn {
    flex: 1;
    min-width: 100px;
  }

  /* 在小屏幕上调整按钮大小 */
  @media (max-width: 768px) {
    .responsive-btn {
      flex: 100%;
    }
  }
</style>

```

:::

### 18. 与其他组件的集成

<ClientOnly>
<div class="integration-example">
  <h3>与表单的集成</h3>
  <div class="form-buttons">
    <LSButton type="primary">提交</LSButton>
    <LSButton>重置</LSButton>
  </div>

  <h3>与对话框的集成</h3>
  <div class="dialog-buttons">
    <LSButton>取消</LSButton>
    <LSButton type="primary">确认</LSButton>
  </div>

  <h3>与卡片的集成</h3>
  <div class="card-buttons">
    <LSButton type="success" size="small">编辑</LSButton>
    <LSButton type="danger" size="small">删除</LSButton>
  </div>
</div>
</ClientOnly>

:::details 点我查看代码

```html
<div class="integration-example">
  <h3>与表单的集成</h3>
  <div class="form-buttons">
    <LSButton type="primary">提交</LSButton>
    <LSButton>重置</LSButton>
  </div>

  <h3>与对话框的集成</h3>
  <div class="dialog-buttons">
    <LSButton>取消</LSButton>
    <LSButton type="primary">确认</LSButton>
  </div>

  <h3>与卡片的集成</h3>
  <div class="card-buttons">
    <LSButton type="success" size="small">编辑</LSButton>
    <LSButton type="danger" size="small">删除</LSButton>
  </div>
</div>

<style scoped>
  .integration-example {
    max-width: 600px;
  }

  .integration-example h3 {
    margin: 20px 0 10px;
    font-size: 16px;
    font-weight: 600;
  }

  .form-buttons,
  .dialog-buttons,
  .card-buttons {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
</style>

```

:::

## API

### 1. Button Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="buttonTableData" />

#### 属性详细说明

| 属性名            | 类型           | 默认值  | 说明         | 使用场景                     | 注意事项                                              |
| ----------------- | -------------- | ------- | ------------ | ---------------------------- | ----------------------------------------------------- |
| type              | string         | default | 按钮类型     | 区分不同功能的按钮           | primary / success / warning / danger / info / default |
| size              | string         | default | 按钮尺寸     | 适应不同空间的布局           | large / default / small                               |
| icon              | Component      | -       | 图标组件     | 在按钮中显示图标             | 仅支持 Element Plus 图标组件                          |
| iconConfig        | IconConfigType | -       | 图标配置     | 配置更丰富的图标类型         | 支持 Element Plus 图标、iconify、图片和 SVG           |
| loading           | boolean        | false   | 加载状态     | 显示按钮正在处理中           | 设置为 true 时按钮会显示加载动画并禁用                |
| disabled          | boolean        | false   | 禁用状态     | 禁止用户点击按钮             | 设置为 true 时按钮会变为灰色且不可点击                |
| round             | boolean        | false   | 圆角按钮     | 创建圆角样式的按钮           | -                                                     |
| circle            | boolean        | false   | 圆形按钮     | 创建圆形样式的按钮           | 通常与图标配合使用                                    |
| link              | boolean        | false   | 文字按钮     | 创建文字样式的按钮           | 显示为文字链接形式                                    |
| plain             | boolean        | false   | 朴素按钮     | 创建朴素样式的按钮           | 背景透明，仅显示边框和文字                            |
| auto-insert-space | boolean        | true    | 自动插入空格 | 在文字和图标之间自动插入空格 | -                                                     |

### 2. ButtonGroup Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="buttonGroupTableData" />

#### 属性详细说明

| 属性名         | 类型            | 默认值 | 说明             | 使用场景               | 注意事项                     |
| -------------- | --------------- | ------ | ---------------- | ---------------------- | ---------------------------- |
| separator      | string          | -      | 按钮之间的分隔符 | 在按钮组中添加分隔符号 | 可以使用任意字符串作为分隔符 |
| separatorColor | string          | #333   | 分隔符颜色       | 自定义分隔符的颜色     | 支持 CSS 颜色值              |
| separatorSize  | string / number | 12     | 分隔符大小       | 自定义分隔符的字体大小 | 单位为像素                   |

### 3. Button Events

<ApiIntro :tableColumn="eventTableColumn" :tableData="buttonEventTableData" />

#### 事件详细说明

| 事件名     | 说明               | 参数  | 使用场景           |
| ---------- | ------------------ | ----- | ------------------ |
| click      | 点击按钮时触发     | event | 处理按钮的点击操作 |
| mouseenter | 鼠标进入按钮时触发 | event | 处理鼠标悬停效果   |
| mouseleave | 鼠标离开按钮时触发 | event | 处理鼠标离开效果   |

<ClientOnly>
<LSButton type="primary" @click="handleClick">点击我</LSButton>
</ClientOnly>

:::details 点我查看代码

```js
function handleClick() {
  alert('按钮被点击了')
}
```

```html
<LSButton type="primary" @click="handleClick">点击我</LSButton>
```

:::

<script setup>
import { ref } from 'vue';
import { Edit, Check, Warning, Delete, InfoFilled, Search, ArrowLeft } from '@element-plus/icons-vue';
import { tableColumn } from '../constant';

const buttonTableData = ref([
  {
    name: 'type',
    desc: '按钮类型',
    type: 'string',
    value: 'primary / success / warning / danger / info'
  },
  {
    name: 'size',
    desc: '按钮尺寸',
    type: 'string',
    value: 'large / default / small'
  },
  {
    name: 'icon',
    desc: '图标组件',
    type: 'Component',
    value: '-'
  },
  {
    name: 'iconConfig',
    desc: '图标配置，具体配置参考LSIcon',
    type: 'IconConfigType',
    value: '-'
  },
  {
    name: 'loading',
    desc: '加载状态',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'disabled',
    desc: '禁用状态',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'round',
    desc: '圆角按钮',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'circle',
    desc: '圆形按钮',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'link',
    desc: '文字按钮',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'plain',
    desc: '朴素按钮',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'auto-insert-space',
    desc: '自动在文字和图标之间插入空格',
    type: 'boolean',
    value: 'true'
  }
]);

const buttonGroupTableData = ref([
  {
    name: 'separator',
    desc: '按钮之间分割符号',
    type: 'string',
    value: '-'
  },
  {
    name: 'separatorColor',
    desc: '按钮之间分割符号颜色',
    type: 'string',
    value: '#333'
  },
  {
    name: 'separatorSize',
    desc: '按钮之间分割符号大小',
    type: 'string / number',
    value: '12'
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

const buttonEventTableData = ref([
  {
    name: 'click',
    desc: '点击按钮时触发',
    params: 'event'
  },
  {
    name: 'mouseenter',
    desc: '鼠标进入按钮时触发',
    params: 'event'
  },
  {
    name: 'mouseleave',
    desc: '鼠标离开按钮时触发',
    params: 'event'
  }
]);

const handleClick = () => {
  alert('按钮被点击了');
};
</script>

<style scoped>
  /* 响应式按钮 */
  .responsive-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .responsive-btn {
    flex: 1;
    min-width: 100px;
  }

  /* 在小屏幕上调整按钮大小 */
  @media (max-width: 768px) {
    .responsive-btn {
      flex: 100%;
    }
  }

  /* 与其他组件的集成 */
  .integration-example {
    max-width: 600px;
  }

  .integration-example h3 {
    margin: 20px 0 10px;
    font-size: 16px;
    font-weight: 600;
  }

  .form-buttons,
  .dialog-buttons,
  .card-buttons {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
</style>
