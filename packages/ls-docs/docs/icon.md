---
outline: deep
---

# Icon 图标

::: warning 基于 Element Plus Icon、iconify、img、svg 提供多种图标使用方式，支持丰富的样式定制和动画效果。
:::

## 使用方式

### 1. Element Plus Icon

::: tip 需安装依赖 [@element-plus/icons-vue](https://element-plus.org/zh-CN/component/icon.html)。
并注册需要用到的icon图标，注册方式请查看ei-icon文档
:::
<LSIcon name="Notification" color="red" size="20" />

```html
<LSIcon name="Notification" color="red" size="20" />
```

### 2. iconify

::: tip 需安装依赖 [@iconify/vue](https://www.npmjs.com/package/@iconify/vue)。
:::
<LSIcon :type="1" name="iconoir:fish" width="30" height="30" color="red" />

```html
<LSIcon :type="1" name="iconoir:fish" width="30" height="30" color="red" />
```

### 3. img

<LSIcon :type="2" name="img" width="100" height="100" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />

```html
<LSIcon
  :type="2"
  name="img"
  width="100"
  height="100"
  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
/>
```

### 4. svg

<LSIcon :type="2" :name="svgIcon" width="30" height="30" color="yellow" />

```ts
import svgIcon from '/public/vue.svg';
```

```html
<LSIcon :type="2" :name="svgIcon" width="30" height="30" color="yellow" />
```

### 5. 不同尺寸的Element Plus图标

<div class="icon-size-example">
  <LSIcon name="Notification" color="red" size="16" />
  <LSIcon name="Notification" color="red" size="24" />
  <LSIcon name="Notification" color="red" size="32" />
  <LSIcon name="Notification" color="red" size="48" />
</div>

::: details 点我查看代码

```html
<div class="icon-size-example">
  <LSIcon name="Notification" color="red" size="16" />
  <LSIcon name="Notification" color="red" size="24" />
  <LSIcon name="Notification" color="red" size="32" />
  <LSIcon name="Notification" color="red" size="48" />
</div>

<style scoped>
  .icon-size-example {
    display: flex;
    align-items: center;
    gap: 16px;
  }
</style>
```

:::

### 6. 不同颜色的Element Plus图标

<div class="icon-color-example">
  <LSIcon name="Notification" color="red" size="24" />
  <LSIcon name="Notification" color="green" size="24" />
  <LSIcon name="Notification" color="blue" size="24" />
  <LSIcon name="Notification" color="yellow" size="24" />
  <LSIcon name="Notification" color="purple" size="24" />
</div>

::: details 点我查看代码

```html
<div class="icon-color-example">
  <LSIcon name="Notification" color="red" size="24" />
  <LSIcon name="Notification" color="green" size="24" />
  <LSIcon name="Notification" color="blue" size="24" />
  <LSIcon name="Notification" color="yellow" size="24" />
  <LSIcon name="Notification" color="purple" size="24" />
</div>

<style scoped>
  .icon-color-example {
    display: flex;
    align-items: center;
    gap: 16px;
  }
</style>
```

:::

### 7. 带点击事件的图标

<div class="icon-click-example">
  <LSIcon 
    name="RefreshRight" 
    color="#409eff" 
    size="24" 
    style="cursor: pointer;" 
    @click="handleIconClick"
  />
  <span>{{ clickMessage }}</span>
</div>

::: details 点我查看代码

```js
import { ref } from 'vue';
const clickMessage = ref('点击图标试试');

const handleIconClick = () => {
  clickMessage.value = '图标被点击了！';
  setTimeout(() => {
    clickMessage.value = '点击图标试试';
  }, 1000);
};
```

```html
<div class="icon-click-example">
  <LSIcon name="RefreshRight" color="#409eff" size="24" style="cursor: pointer;" @click="handleIconClick" />
  <span>{{ clickMessage }}</span>
</div>

<style scoped>
  .icon-click-example {
    display: flex;
    align-items: center;
    gap: 16px;
  }
</style>
```

:::

### 8. 图标组的使用

<div class="icon-group-example">
  <div class="icon-group">
    <LSIcon name="User" color="#606266" size="20" />
    <span>用户</span>
  </div>
  <div class="icon-group">
    <LSIcon name="Message" color="#606266" size="20" />
    <span>消息</span>
  </div>
  <div class="icon-group">
    <LSIcon name="Setting" color="#606266" size="20" />
    <span>设置</span>
  </div>
  <div class="icon-group">
    <LSIcon name="HelpFilled" color="#606266" size="20" />
    <span>帮助</span>
  </div>
</div>

::: details 点我查看代码

```html
<div class="icon-group-example">
  <div class="icon-group">
    <LSIcon name="User" color="#606266" size="20" />
    <span>用户</span>
  </div>
  <div class="icon-group">
    <LSIcon name="Message" color="#606266" size="20" />
    <span>消息</span>
  </div>
  <div class="icon-group">
    <LSIcon name="Setting" color="#606266" size="20" />
    <span>设置</span>
  </div>
  <div class="icon-group">
    <LSIcon name="HelpFilled" color="#606266" size="20" />
    <span>帮助</span>
  </div>
</div>

<style scoped>
  .icon-group-example {
    display: flex;
    gap: 32px;
  }

  .icon-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    padding: 12px;
    border-radius: 8px;
    transition: all 0.3s;
  }

  .icon-group:hover {
    background-color: #f5f7fa;
  }

  .icon-group span {
    font-size: 14px;
    color: #606266;
  }
</style>
```

:::

### 9. 动态切换图标

<div class="dynamic-icon-example">
  <LSIcon :name="currentIcon" :color="iconColor" size="32" />
  <div class="icon-controls">
    <LSButton @click="switchIcon('SuccessFilled')" class="control-btn">成功</LSButton>
    <LSButton @click="switchIcon('WarningFilled')" class="control-btn">警告</LSButton>
    <LSButton @click="switchIcon('InfoFilled')" class="control-btn">信息</LSButton>
  </div>
</div>

::: details 点我查看代码

```js
import { ref, computed } from 'vue';
const currentIcon = ref('SuccessFilled');
const iconColor = computed(() => {
  const colorMap = {
    SuccessFilled: '#67c23a',
    WarningFilled: '#e6a23c',
    ErrorFilled: '#f56c6c',
    InfoFilled: '#409eff'
  };
  return colorMap[currentIcon.value] || '#606266';
});

const switchIcon = iconName => {
  currentIcon.value = iconName;
};
```

```html
<div class="dynamic-icon-example">
  <LSIcon :name="currentIcon" :color="iconColor" size="32" />
  <div class="icon-controls">
    <LSButton @click="switchIcon('SuccessFilled')" class="control-btn">成功</LSButton>
    <LSButton @click="switchIcon('WarningFilled')" class="control-btn">警告</LSButton>
    <LSButton @click="switchIcon('InfoFilled')" class="control-btn">信息</LSButton>
  </div>
</div>

<style scoped>
  .dynamic-icon-example {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .icon-controls {
    display: flex;
    gap: 12px;
  }

  .control-btn {
    padding: 8px 16px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
    transition: all 0.3s;
  }

  .control-btn:hover {
    border-color: #409eff;
    color: #409eff;
  }
</style>
```

:::

### 10. 样式定制

<div class="custom-icon-example">
  <h3>基础样式定制</h3>
  <div class="icon-styles">
    <LSIcon name="Star" class="icon-style-1" />
    <LSIcon name="Star" class="icon-style-2" />
    <LSIcon name="Star" class="icon-style-3" />
    <LSIcon name="Star" class="icon-style-4" />
  </div>
  
  <h3>动画效果</h3>
  <div class="icon-animations">
    <LSIcon name="RefreshRight" class="icon-animation-1" />
    <LSIcon name="Star" class="icon-animation-2" />
    <LSIcon name="ArrowRight" class="icon-animation-3" />
  </div>
</div>

::: details 点我查看代码

```html
<div class="custom-icon-example">
  <h3>基础样式定制</h3>
  <div class="icon-styles">
    <LSIcon name="Star" class="icon-style-1" />
    <LSIcon name="Star" class="icon-style-2" />
    <LSIcon name="Star" class="icon-style-3" />
    <LSIcon name="Star" class="icon-style-4" />
  </div>

  <h3>动画效果</h3>
  <div class="icon-animations">
    <LSIcon name="RefreshRight" class="icon-animation-1" />
    <LSIcon name="Star" class="icon-animation-2" />
    <LSIcon name="ArrowRight" class="icon-animation-3" />
  </div>
</div>

<style scoped>
  .custom-icon-example {
    max-width: 600px;
  }

  .custom-icon-example h3 {
    margin: 20px 0 10px;
    font-size: 16px;
    font-weight: 600;
    color: #303133;
  }

  .icon-styles {
    display: flex;
    gap: 24px;
    margin-bottom: 30px;
  }

  /* 基础样式定制 */
  .icon-style-1 {
    font-size: 24px;
    color: #606266;
  }

  .icon-style-2 {
    font-size: 32px;
    color: #409eff;
  }

  .icon-style-3 {
    font-size: 40px;
    color: #67c23a;
    opacity: 0.7;
  }

  .icon-style-4 {
    font-size: 48px;
    color: #e6a23c;
    transform: rotate(45deg);
  }

  .icon-animations {
    display: flex;
    gap: 40px;
  }

  /* 动画效果 */
  .icon-animation-1 {
    font-size: 32px;
    color: #409eff;
    animation: rotateAni 2s linear infinite;
  }

  .icon-animation-2 {
    font-size: 32px;
    color: #e6a23c;
    animation: pulse 1.5s ease-in-out infinite;
  }

  .icon-animation-3 {
    font-size: 32px;
    color: #67c23a;
    animation: bounce 1s ease-in-out infinite;
  }

  @keyframes rotateAni {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
</style>
```

:::

### 11. 与其他组件的集成

<div class="integration-example">
  <h3>与按钮组件的集成</h3>
  <div class="button-integration">
    <LSButton class="icon-button">
      <LSIcon name="Search" size="16" />
      <span>搜索</span>
    </LSButton>
    <LSButton class="icon-button primary">
      <LSIcon name="Check" size="16" />
      <span>确认</span>
    </LSButton>
    <LSButton class="icon-button danger">
      <LSIcon name="Delete" size="16" />
      <span>删除</span>
    </LSButton>
  </div>
  
  <h3>与导航菜单的集成</h3>
  <div class="nav-integration">
    <div class="nav-item">
      <LSIcon name="Home" size="18" />
      <span>首页</span>
    </div>
    <div class="nav-item active">
      <LSIcon name="Menu" size="18" />
      <span>菜单</span>
    </div>
    <div class="nav-item">
      <LSIcon name="Setting" size="18" />
      <span>设置</span>
    </div>
  </div>
  
  <h3>与表单组件的集成</h3>
  <div class="form-integration">
    <div class="form-item">
      <LSIcon name="User" size="16" />
      <input type="text" placeholder="用户名" />
    </div>
    <div class="form-item">
      <LSIcon name="Lock" size="16" />
      <input type="password" placeholder="密码" />
    </div>
  </div>
  
  <h3>与卡片组件的集成</h3>
  <div class="card-integration">
    <div class="card">
      <div class="card-icon">
        <LSIcon name="Monitor" size="24" />
      </div>
      <div class="card-content">
        <h4>系统状态</h4>
        <p>运行正常</p>
      </div>
    </div>
    <div class="card">
      <div class="card-icon warning">
        <LSIcon name="WarningFilled" size="24" />
      </div>
      <div class="card-content">
        <h4>警告信息</h4>
        <p>需要注意</p>
      </div>
    </div>
    <div class="card">
      <div class="card-icon success">
        <LSIcon name="SuccessFilled" size="24" />
      </div>
      <div class="card-content">
        <h4>成功信息</h4>
        <p>无需处理</p>
      </div>
    </div>
  </div>
</div>

::: details 点我查看代码

```html
<div class="integration-example">
  <h3>与按钮组件的集成</h3>
  <div class="button-integration">
    <LSButton class="icon-button">
      <LSIcon name="Search" size="16" />
      <span>搜索</span>
    </LSButton>
    <LSButton class="icon-button primary">
      <LSIcon name="Check" size="16" />
      <span>确认</span>
    </LSButton>
    <LSButton class="icon-button danger">
      <LSIcon name="Delete" size="16" />
      <span>删除</span>
    </LSButton>
  </div>

  <h3>与导航菜单的集成</h3>
  <div class="nav-integration">
    <div class="nav-item">
      <LSIcon name="Home" size="18" />
      <span>首页</span>
    </div>
    <div class="nav-item active">
      <LSIcon name="Menu" size="18" />
      <span>菜单</span>
    </div>
    <div class="nav-item">
      <LSIcon name="Setting" size="18" />
      <span>设置</span>
    </div>
  </div>

  <h3>与表单组件的集成</h3>
  <div class="form-integration">
    <div class="form-item">
      <LSIcon name="User" size="16" />
      <input type="text" placeholder="用户名" />
    </div>
    <div class="form-item">
      <LSIcon name="Lock" size="16" />
      <input type="password" placeholder="密码" />
    </div>
  </div>

  <h3>与卡片组件的集成</h3>
  <div class="card-integration">
    <div class="card">
      <div class="card-icon">
        <LSIcon name="Monitor" size="24" />
      </div>
      <div class="card-content">
        <h4>系统状态</h4>
        <p>运行正常</p>
      </div>
    </div>
    <div class="card">
      <div class="card-icon warning">
        <LSIcon name="WarningFilled" size="24" />
      </div>
      <div class="card-content">
        <h4>警告信息</h4>
        <p>需要注意</p>
      </div>
    </div>
    <div class="card">
      <div class="card-icon success">
        <LSIcon name="SuccessFilled" size="24" />
      </div>
      <div class="card-content">
        <h4>成功信息</h4>
        <p>无需处理</p>
      </div>
    </div>
  </div>
</div>

<style scoped>
  .integration-example {
    max-width: 800px;
  }

  .integration-example h3 {
    margin: 30px 0 15px;
    font-size: 16px;
    font-weight: 600;
    color: #303133;
  }

  /* 与按钮组件的集成 */
  .button-integration {
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
  }

  .icon-button {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
    transition: all 0.3s;
  }

  .icon-button:hover {
    border-color: #c0c4cc;
  }

  .icon-button.primary {
    background-color: #409eff;
    border-color: #409eff;
    color: #fff;
  }

  .icon-button.primary:hover {
    background-color: #66b1ff;
    border-color: #66b1ff;
  }

  .icon-button.danger {
    background-color: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }

  .icon-button.danger:hover {
    background-color: #f78989;
    border-color: #f78989;
  }

  /* 与导航菜单的集成 */
  .nav-integration {
    display: flex;
    gap: 24px;
    margin-bottom: 20px;
  }

  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
    color: #606266;
  }

  .nav-item:hover {
    background-color: #ecf5ff;
    color: #409eff;
  }

  .nav-item.active {
    background-color: #ecf5ff;
    color: #409eff;
    font-weight: 600;
  }

  /* 与表单组件的集成 */
  .form-integration {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 20px;
    max-width: 400px;
  }

  .form-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 16px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    background-color: #fff;
  }

  .form-item input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 14px;
  }

  .form-item input::placeholder {
    color: #c0c4cc;
  }

  /* 与卡片组件的集成 */
  .card-integration {
    display: flex;
    gap: 24px;
    margin-bottom: 20px;
  }

  .card {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px;
    border: 1px solid #e4e7ed;
    border-radius: 8px;
    background-color: #fff;
    flex: 1;
  }

  .card-icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #ecf5ff;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #409eff;
  }

  .card-icon.warning {
    background-color: #fdf6ec;
    color: #e6a23c;
  }

  .card-icon.success {
    background-color: #f0f9eb;
    color: #67c23a;
  }

  .card-content h4 {
    margin: 0 0 4px;
    font-size: 14px;
    font-weight: 600;
    color: #303133;
  }

  .card-content p {
    margin: 0;
    font-size: 12px;
    color: #909399;
  }
</style>
```

:::

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

#### 属性详细说明

| 属性名   | 类型            | 默认值 | 说明                                      | 使用场景                   | 注意事项                                                                                              |
| -------- | --------------- | ------ | ----------------------------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------- |
| type     | string / number | -      | 图标类型，默认el-icon，1：iconify，2：img | 根据需要选择不同类型的图标 | 当使用不同类型时，其他属性的支持情况可能不同                                                          |
| name     | string / object | -      | 图标名称                                  | 指定要显示的图标           | 对于el-icon，使用图标组件名；对于iconify，使用完整图标名；对于img，使用图片名称；对于SVG，使用SVG对象 |
| color    | string          | -      | 图标颜色                                  | 自定义图标的颜色           | 对于el-icon和iconify有效，对于img和SVG可能需要通过其他方式设置                                        |
| width    | string / number | 16     | 图标宽度，适用于iconify和svg              | 控制图标的宽度             | 当type为1或2时有效                                                                                    |
| height   | string / number | 16     | 图标高度，适用于iconify和svg              | 控制图标的高度             | 当type为1或2时有效                                                                                    |
| size     | string / number | 16     | 图标大小，适用于el-icon                   | 控制Element Plus图标的大小 | 当type为默认值时有效                                                                                  |
| src      | string          | -      | img图片地址，type为2的时候使用            | 指定图片的URL地址          | 当type为2且使用图片时必须设置                                                                         |
| symbolId | string / number | -      | 图标符号ID                                | 用于自定义SVG图标系统      | 当使用自定义SVG图标系统时可能需要设置                                                                 |

### 2. Slot

<ApiIntro :tableColumn="tableSlotColumn" :tableData="tableData2" />

#### 插槽详细说明

| 插槽名  | 说明         | 使用场景         | 注意事项                         |
| ------- | ------------ | ---------------- | -------------------------------- |
| default | 添加默认插槽 | 自定义图标的内容 | 使用插槽时，其他属性可能不会生效 |

<script setup>
import svgIcon from '/public/vue.svg';
import { ref, computed } from 'vue';
import { tableColumn, tableSlotColumn } from '../constant'

// 带点击事件的图标
const clickMessage = ref('点击图标试试');

const handleIconClick = () => {
  clickMessage.value = '图标被点击了！';
  setTimeout(() => {
    clickMessage.value = '点击图标试试';
  }, 1000);
};

// 动态切换图标
const currentIcon = ref('SuccessFilled');
const iconColor = computed(() => {
  const colorMap = {
    'SuccessFilled': '#67c23a',
    'WarningFilled': '#e6a23c',
    'ErrorFilled': '#f56c6c',
    'InfoFilled': '#409eff'
  };
  return colorMap[currentIcon.value] || '#606266';
});

const switchIcon = (iconName) => {
  currentIcon.value = iconName;
};

const tableData = ref([
  {
    name: 'type',
    desc: '图标类型， 默认el-icon，1：iconify，2：img',
    type: 'string / number',
    value: '-'
  },
  {
    name: 'name',
    desc: '图标名称',
    type: 'string / object',
    value: '-'
  },
  {
    name: 'color',
    desc: '图标颜色',
    type: 'string',
    value: '-'
  },
  {
    name: 'width',
    desc: '图标宽度，适用于iconify和svg',
    type: 'string / number',
    value: 16
  },
  {
    name: 'height',
    desc: '图标高度，适用于iconify和svg',
    type: 'string / number',
    value: 16
  },
  {
    name: 'size',
    desc: '图标大小，适用于el-icon',
    type: 'string / number',
    value: 16
  },
  {
    name: 'src',
    desc: 'img图片地址，type为2的时候使用',
    type: 'string',
    value: '-'
  },
  {
    name: 'symbolId',
    desc: '图标符号ID',
    type: 'string / number',
    value: '-'
  }
]);

const tableData2 = ref([
  {
    name: 'default',
    desc: '添加默认插槽',
  }
]);
</script>

<style scoped>
  /* 不同尺寸的Element Plus图标 */
  .icon-size-example {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  /* 不同颜色的Element Plus图标 */
  .icon-color-example {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  /* 带点击事件的图标 */
  .icon-click-example {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  /* 图标组的使用 */
  .icon-group-example {
    display: flex;
    gap: 32px;
  }

  .icon-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    padding: 12px;
    border-radius: 8px;
    transition: all 0.3s;
  }

  .icon-group:hover {
    background-color: #f5f7fa;
  }

  .icon-group span {
    font-size: 14px;
    color: #606266;
  }

  /* 动态切换图标 */
  .dynamic-icon-example {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .icon-controls {
    display: flex;
    gap: 12px;
  }

  .control-btn {
    padding: 8px 16px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
    transition: all 0.3s;
  }

  .control-btn:hover {
    border-color: #409eff;
    color: #409eff;
  }

  /* 样式定制 */
  .custom-icon-example {
    max-width: 600px;
  }

  .custom-icon-example h3 {
    margin: 20px 0 10px;
    font-size: 16px;
    font-weight: 600;
    color: #303133;
  }

  .icon-styles {
    display: flex;
    gap: 24px;
    margin-bottom: 30px;
  }

  /* 基础样式定制 */
  .icon-style-1 {
    font-size: 24px;
    color: #606266;
  }

  .icon-style-2 {
    font-size: 32px;
    color: #409eff;
  }

  .icon-style-3 {
    font-size: 40px;
    color: #67c23a;
    opacity: 0.7;
  }

  .icon-style-4 {
    font-size: 48px;
    color: #e6a23c;
    transform: rotate(45deg);
  }

  .icon-animations {
    display: flex;
    gap: 40px;
  }

  /* 动画效果 */
  .icon-animation-1 {
    font-size: 32px;
    color: #409eff;
  }

  .icon-animation-1 :deep(.el-icon),
  .icon-animation-1 :deep(.iconify),
  .icon-animation-1 :deep(img),
  .icon-animation-1 :deep(svg) {
    font-size: 32px;
    color: #409eff;
    animation: rotateAni 2s linear infinite;
  }

  .icon-animation-2 {
    font-size: 32px;
    color: #e6a23c;
  }

  .icon-animation-2 :deep(.el-icon),
  .icon-animation-2 :deep(.iconify),
  .icon-animation-2 :deep(img),
  .icon-animation-2 :deep(svg) {
    font-size: 32px;
    color: #e6a23c;
    animation: pulse 1.5s ease-in-out infinite;
  }

  .icon-animation-3 {
    font-size: 32px;
    color: #67c23a;
  }

  .icon-animation-3 :deep(.el-icon),
  .icon-animation-3 :deep(.iconify),
  .icon-animation-3 :deep(img),
  .icon-animation-3 :deep(svg) {
    font-size: 32px;
    color: #67c23a;
    animation: bounce 1s ease-in-out infinite;
  }

  @keyframes rotateAni {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }

  /* 与其他组件的集成 */
  .integration-example {
    max-width: 800px;
  }

  .integration-example h3 {
    margin: 30px 0 15px;
    font-size: 16px;
    font-weight: 600;
    color: #303133;
  }

  /* 与按钮组件的集成 */
  .button-integration {
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
  }

  .icon-button {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
    transition: all 0.3s;
  }

  .icon-button:hover {
    border-color: #c0c4cc;
  }

  .icon-button.primary {
    background-color: #409eff;
    border-color: #409eff;
    color: #fff;
  }

  .icon-button.primary:hover {
    background-color: #66b1ff;
    border-color: #66b1ff;
  }

  .icon-button.danger {
    background-color: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }

  .icon-button.danger:hover {
    background-color: #f78989;
    border-color: #f78989;
  }

  /* 与导航菜单的集成 */
  .nav-integration {
    display: flex;
    gap: 24px;
    margin-bottom: 20px;
  }

  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
    color: #606266;
  }

  .nav-item:hover {
    background-color: #ecf5ff;
    color: #409eff;
  }

  .nav-item.active {
    background-color: #ecf5ff;
    color: #409eff;
    font-weight: 600;
  }

  /* 与表单组件的集成 */
  .form-integration {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 20px;
    max-width: 400px;
  }

  .form-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 16px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    background-color: #fff;
  }

  .form-item input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 14px;
  }

  .form-item input::placeholder {
    color: #c0c4cc;
  }

  /* 与卡片组件的集成 */
  .card-integration {
    display: flex;
    gap: 24px;
    margin-bottom: 20px;
  }

  .card {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px;
    border: 1px solid #e4e7ed;
    border-radius: 8px;
    background-color: #fff;
    flex: 1;
  }

  .card-icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #ecf5ff;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #409eff;
  }

  .card-icon.warning {
    background-color: #fdf6ec;
    color: #e6a23c;
  }

  .card-icon.success {
    background-color: #f0f9eb;
    color: #67c23a;
  }

  .card-content h4 {
    margin: 0 0 4px;
    font-size: 14px;
    font-weight: 600;
    color: #303133;
  }

  .card-content p {
    margin: 0;
    font-size: 12px;
    color: #909399;
  }
</style>
