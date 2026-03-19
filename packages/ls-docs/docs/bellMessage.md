---
outline: deep
---

# BellMessage 消息通知列表

::: warning 快速创建常用头部消息通知列表功能，支持消息未读数量显示、消息阅读状态管理、消息列表加载等功能。
:::

## 使用方式

### 1. 基础使用

<br />
<LSBellMessage :loading="loading" :notice-num="noticeNum" :list="list" @read-msg="readMsg" @load-more="loadMore" @read-all="readAll" />

::: details 点我查看代码

```js
import { ref } from 'vue';
const loading = ref(true);
const noticeNum = ref(1);
const list = ref([
  {
    id: '1',
    title: '角色TITLE1',
    msgType: '角色权限变更',
    content: '角色权限已变更，将在下次登录后生效！',
    createdTime: '2024-02-01 12:00:00',
    readStatus: 0
  },
  {
    id: '2',
    title: '角色TITLE2',
    msgType: '角色权限变更',
    content: '角色权限已变更，将在下次登录后生效！',
    createdTime: '2024-02-01 13:00:00',
    readStatus: 1
  }
]);

setTimeout(() => {
  loading.value = false;
}, 1000);

const loadMore = () => {
  list.value = list.value.concat(list.value);
};

const readMsg = id => {
  list.value = list.value.map(item => {
    if (item.id === id) {
      item.readStatus = 1;
    }
    return item;
  });
};

const readAll = () => {
  list.value = list.value.map(item => {
    item.readStatus = 1;
    return item;
  });
  noticeNum.value = 0;
};
```

```html
<LSBellMessage
  :loading="loading"
  :notice-num="noticeNum"
  :list="list"
  @read-msg="readMsg"
  @load-more="loadMore"
  @read-all="readAll"
/>
```

:::

### 2. 自定义图标和徽章

<br />
<LSBellMessage :loading="loading" :notice-num="noticeNum2" :badge-max="50" :icon-config="iconConfig" :list="list" @read-msg="readMsg" @load-more="loadMore" @read-all="readAll2" />

::: details 点我查看代码

```js
import { ref } from 'vue';
const loading = ref(true);
const noticeNum2 = ref(55);
const iconConfig = ref({
  name: 'Bell',
  size: 24,
  color: '#606266'
});
const list = ref([
  {
    id: '1',
    title: '角色TITLE1',
    msgType: '角色权限变更',
    content: '角色权限已变更，将在下次登录后生效！',
    createdTime: '2024-02-01 12:00:00',
    readStatus: 0
  },
  {
    id: '2',
    title: '角色TITLE2',
    msgType: '角色权限变更',
    content: '角色权限已变更，将在下次登录后生效！',
    createdTime: '2024-02-01 13:00:00',
    readStatus: 1
  }
]);

setTimeout(() => {
  loading.value = false;
}, 1000);

const loadMore = () => {
  list.value = list.value.concat(list.value);
};

const readMsg = id => {
  list.value = list.value.map(item => {
    if (item.id === id) {
      item.readStatus = 1;
    }
    return item;
  });
};

const readAll2 = () => {
  list.value = list.value.map(item => {
    item.readStatus = 1;
    return item;
  });
  noticeNum2.value = 0;
};
```

```html
<LSBellMessage
  :loading="loading"
  :notice-num="noticeNum2"
  :badge-max="50"
  :icon-config="iconConfig"
  :list="list"
  @read-msg="readMsg"
  @load-more="loadMore"
  @read-all="readAll2"
/>
```

:::

### 3. 不同类型的消息

<br />
<LSBellMessage :loading="loading" :notice-num="noticeNum3" :list="list2" @read-msg="readMsg2" @load-more="loadMore2" @read-all="readAll3" />

::: details 点我查看代码

```js
import { ref } from 'vue';
const loading = ref(true);
const noticeNum3 = ref(3);
const list2 = ref([
  {
    id: '1',
    title: '系统通知',
    msgType: '系统',
    content: '系统将于今晚进行维护，预计维护时间为2小时，请提前做好准备。',
    createdTime: '2024-02-01 10:00:00',
    readStatus: 0
  },
  {
    id: '2',
    title: '审批通知',
    msgType: '审批',
    content: '您的请假申请已通过审批，请假时间为2024-02-05至2024-02-07。',
    createdTime: '2024-02-01 11:00:00',
    readStatus: 0
  },
  {
    id: '3',
    title: '任务通知',
    msgType: '任务',
    content: '您有一个新任务分配：完成项目需求文档的编写，截止时间为2024-02-10。',
    createdTime: '2024-02-01 12:00:00',
    readStatus: 0
  },
  {
    id: '4',
    title: '角色权限变更',
    msgType: '权限',
    content: '您的角色权限已变更，新增了"系统设置"权限。',
    createdTime: '2024-01-31 15:00:00',
    readStatus: 1
  }
]);

setTimeout(() => {
  loading.value = false;
}, 1000);

const loadMore2 = () => {
  // 模拟加载更多数据
  const newData = [
    {
      id: Date.now().toString(),
      title: '新消息',
      msgType: '系统',
      content: '这是一条新的系统消息，用于测试加载更多功能。',
      createdTime: new Date().toLocaleString('zh-CN'),
      readStatus: 0
    }
  ];
  list2.value = list2.value.concat(newData);
  noticeNum3.value += newData.length;
};

const readMsg2 = id => {
  list2.value = list2.value.map(item => {
    if (item.id === id) {
      item.readStatus = 1;
    }
    return item;
  });
  // 更新未读数量
  noticeNum3.value = list2.value.filter(item => item.readStatus === 0).length;
};

const readAll3 = () => {
  list2.value = list2.value.map(item => {
    item.readStatus = 1;
    return item;
  });
  noticeNum3.value = 0;
};
```

```html
<LSBellMessage
  :loading="loading"
  :notice-num="noticeNum3"
  :list="list2"
  @read-msg="readMsg2"
  @load-more="loadMore2"
  @read-all="readAll3"
/>
```

:::

### 4. 无更多数据状态

<br />
<LSBellMessage :loading="false" :notice-num="0" :list="list3" :no-more="true" @read-msg="readMsg3" @load-more="loadMore3" @read-all="readAll4" />

::: details 点我查看代码

```js
import { ref } from 'vue';
const list3 = ref([
  {
    id: '1',
    title: '系统通知',
    msgType: '系统',
    content: '系统维护已完成，所有功能已恢复正常。',
    createdTime: '2024-02-01 09:00:00',
    readStatus: 1
  },
  {
    id: '2',
    title: '角色权限变更',
    msgType: '权限',
    content: '您的角色权限已变更，移除了"系统设置"权限。',
    createdTime: '2024-01-31 10:00:00',
    readStatus: 1
  }
]);

const loadMore3 = () => {
  // 无更多数据，无需处理
  console.log('No more data');
};

const readMsg3 = id => {
  list3.value = list3.value.map(item => {
    if (item.id === id) {
      item.readStatus = 1;
    }
    return item;
  });
};

const readAll4 = () => {
  list3.value = list3.value.map(item => {
    item.readStatus = 1;
    return item;
  });
};
```

```html
<LSBellMessage
  :loading="false"
  :notice-num="0"
  :list="list3"
  :no-more="true"
  @read-msg="readMsg3"
  @load-more="loadMore3"
  @read-all="readAll4"
/>
```

:::

### 5. 带点击事件的消息通知

<br />
<LSBellMessage :loading="false" :notice-num="noticeNum4" :list="list4" @read-msg="readMsg4" @load-more="loadMore4" @read-all="readAll5" />

::: details 点我查看代码

```js
import { ref } from 'vue';
const noticeNum4 = ref(2);
const list4 = ref([
  {
    id: '1',
    title: '任务提醒',
    msgType: '任务',
    content: '您有一个任务即将到期：完成项目计划文档',
    createdTime: '2024-02-01 14:00:00',
    readStatus: 0
  },
  {
    id: '2',
    title: '会议通知',
    msgType: '会议',
    content: '明天上午10点将召开项目启动会议，请准时参加',
    createdTime: '2024-02-01 13:00:00',
    readStatus: 0
  }
]);

const loadMore4 = () => {
  // 模拟加载更多数据
  const newData = [
    {
      id: Date.now().toString(),
      title: '新任务',
      msgType: '任务',
      content: '这是一条新的任务消息，点击查看详情',
      createdTime: new Date().toLocaleString('zh-CN'),
      readStatus: 0
    }
  ];
  list4.value = list4.value.concat(newData);
  noticeNum4.value += newData.length;
};

const readMsg4 = id => {
  // 标记为已读
  list4.value = list4.value.map(item => {
    if (item.id === id) {
      item.readStatus = 1;
    }
    return item;
  });
  // 更新未读数量
  noticeNum4.value = list4.value.filter(item => item.readStatus === 0).length;
  // 执行点击事件逻辑
  console.log('点击了消息:', id);
  // 这里可以添加跳转到消息详情页等逻辑
};

const readAll5 = () => {
  list4.value = list4.value.map(item => {
    item.readStatus = 1;
    return item;
  });
  noticeNum4.value = 0;
};
```

```html
<LSBellMessage
  :loading="false"
  :notice-num="noticeNum4"
  :list="list4"
  @read-msg="readMsg4"
  @load-more="loadMore4"
  @read-all="readAll5"
/>
```

:::

### 6. 带过滤功能的消息通知

<br />
<LSBellMessage :loading="false" :notice-num="noticeNum5" :list="filteredList" @read-msg="readMsg5" @load-more="loadMore5" @read-all="readAll6" />

::: details 点我查看代码

```js
import { ref, computed } from 'vue';
const noticeNum5 = ref(4);
const list5 = ref([
  {
    id: '1',
    title: '系统通知',
    msgType: '系统',
    content: '系统将于今晚进行维护，预计维护时间为2小时',
    createdTime: '2024-02-01 10:00:00',
    readStatus: 0
  },
  {
    id: '2',
    title: '审批通知',
    msgType: '审批',
    content: '您的请假申请已通过审批',
    createdTime: '2024-02-01 09:00:00',
    readStatus: 0
  },
  {
    id: '3',
    title: '任务通知',
    msgType: '任务',
    content: '您有一个新任务分配',
    createdTime: '2024-01-31 16:00:00',
    readStatus: 1
  },
  {
    id: '4',
    title: '角色权限变更',
    msgType: '权限',
    content: '您的角色权限已变更',
    createdTime: '2024-01-31 15:00:00',
    readStatus: 1
  }
]);

// 过滤出未读消息
const filteredList = computed(() => {
  return list5.value.filter(item => item.readStatus === 0);
});

const loadMore5 = () => {
  // 模拟加载更多数据
  const newData = [
    {
      id: Date.now().toString(),
      title: '新系统通知',
      msgType: '系统',
      content: '这是一条新的系统消息',
      createdTime: new Date().toLocaleString('zh-CN'),
      readStatus: 0
    }
  ];
  list5.value = list5.value.concat(newData);
  noticeNum5.value += newData.length;
};

const readMsg5 = id => {
  list5.value = list5.value.map(item => {
    if (item.id === id) {
      item.readStatus = 1;
    }
    return item;
  });
  // 更新未读数量
  noticeNum5.value = list5.value.filter(item => item.readStatus === 0).length;
};

const readAll6 = () => {
  list5.value = list5.value.map(item => {
    item.readStatus = 1;
    return item;
  });
  noticeNum5.value = 0;
};
```

```html
<LSBellMessage
  :loading="false"
  :notice-num="noticeNum5"
  :list="filteredList"
  @read-msg="readMsg5"
  @load-more="loadMore5"
  @read-all="readAll6"
/>
```

:::

### 7. 样式定制

<br />
<div class="custom-bell-message">
  <LSBellMessage :loading="false" :notice-num="noticeNum6" :list="list6" @read-msg="readMsg6" @load-more="loadMore6" @read-all="readAll7" />
</div>

::: details 点我查看代码

```js
import { ref } from 'vue';
const noticeNum6 = ref(2);
const list6 = ref([
  {
    id: '1',
    title: '样式定制示例',
    msgType: '示例',
    content: '这是一条使用自定义样式的消息通知',
    createdTime: '2024-02-01 15:00:00',
    readStatus: 0
  },
  {
    id: '2',
    title: '另一条消息',
    msgType: '示例',
    content: '自定义样式可以让消息通知更符合你的应用风格',
    createdTime: '2024-02-01 14:00:00',
    readStatus: 0
  }
]);

const loadMore6 = () => {
  // 模拟加载更多数据
  const newData = [
    {
      id: Date.now().toString(),
      title: '新消息',
      msgType: '示例',
      content: '这是一条新的样式定制示例消息',
      createdTime: new Date().toLocaleString('zh-CN'),
      readStatus: 0
    }
  ];
  list6.value = list6.value.concat(newData);
  noticeNum6.value += newData.length;
};

const readMsg6 = id => {
  list6.value = list6.value.map(item => {
    if (item.id === id) {
      item.readStatus = 1;
    }
    return item;
  });
  // 更新未读数量
  noticeNum6.value = list6.value.filter(item => item.readStatus === 0).length;
};

const readAll7 = () => {
  list6.value = list6.value.map(item => {
    item.readStatus = 1;
    return item;
  });
  noticeNum6.value = 0;
};
```

```html
<div class="custom-bell-message">
  <LSBellMessage
    :loading="false"
    :notice-num="noticeNum6"
    :list="list6"
    @read-msg="readMsg6"
    @load-more="loadMore6"
    @read-all="readAll7"
  />
</div>

<style scoped>
  .custom-bell-message {
    /* 自定义容器样式 */
    width: 400px;
    border: 1px solid #e4e7ed;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  /* 自定义消息项样式 */
  .custom-bell-message :deep(.ls-bell-message-item) {
    padding: 16px;
    border-bottom: 1px solid #f0f0f0;
    transition: all 0.3s;
  }

  .custom-bell-message :deep(.ls-bell-message-item:hover) {
    background-color: #f5f7fa;
  }

  /* 自定义未读消息样式 */
  .custom-bell-message :deep(.ls-bell-message-item.unread) {
    background-color: #ecf5ff;
  }

  /* 自定义消息标题样式 */
  .custom-bell-message :deep(.ls-bell-message-item-title) {
    font-size: 16px;
    font-weight: 600;
    color: #303133;
    margin-bottom: 8px;
  }

  /* 自定义消息内容样式 */
  .custom-bell-message :deep(.ls-bell-message-item-content) {
    font-size: 14px;
    color: #606266;
    line-height: 1.5;
    margin-bottom: 8px;
  }

  /* 自定义消息时间样式 */
  .custom-bell-message :deep(.ls-bell-message-item-time) {
    font-size: 12px;
    color: #909399;
  }

  /* 自定义消息类型样式 */
  .custom-bell-message :deep(.ls-bell-message-item-type) {
    font-size: 12px;
    color: #409eff;
    background-color: #ecf5ff;
    padding: 2px 8px;
    border-radius: 10px;
    margin-left: 8px;
  }

  /* 自定义全部已读按钮样式 */
  .custom-bell-message :deep(.ls-bell-message-read-all) {
    display: block;
    width: 100%;
    padding: 12px;
    text-align: center;
    color: #409eff;
    background-color: #f5f7fa;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
  }

  .custom-bell-message :deep(.ls-bell-message-read-all:hover) {
    background-color: #ecf5ff;
  }

  /* 自定义加载更多按钮样式 */
  .custom-bell-message :deep(.ls-bell-message-load-more) {
    display: block;
    width: 100%;
    padding: 12px;
    text-align: center;
    color: #606266;
    background-color: #f5f7fa;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
  }

  .custom-bell-message :deep(.ls-bell-message-load-more:hover) {
    background-color: #ecf5ff;
    color: #409eff;
  }
</style>
```

:::

### 8. 响应式设计

<br />
<div class="responsive-bell-message">
  <LSBellMessage :loading="false" :notice-num="noticeNum7" :list="list7" @read-msg="readMsg7" @load-more="loadMore7" @read-all="readAll8" />
</div>

::: details 点我查看代码

```js
import { ref } from 'vue';
const noticeNum7 = ref(2);
const list7 = ref([
  {
    id: '1',
    title: '响应式设计示例',
    msgType: '示例',
    content: '这是一条在不同屏幕尺寸上都能正常显示的消息通知',
    createdTime: '2024-02-01 16:00:00',
    readStatus: 0
  },
  {
    id: '2',
    title: '另一条响应式消息',
    msgType: '示例',
    content: '响应式设计可以让消息通知在手机、平板和桌面设备上都有良好的显示效果',
    createdTime: '2024-02-01 15:00:00',
    readStatus: 0
  }
]);

const loadMore7 = () => {
  // 模拟加载更多数据
  const newData = [
    {
      id: Date.now().toString(),
      title: '新响应式消息',
      msgType: '示例',
      content: '这是一条新的响应式设计示例消息',
      createdTime: new Date().toLocaleString('zh-CN'),
      readStatus: 0
    }
  ];
  list7.value = list7.value.concat(newData);
  noticeNum7.value += newData.length;
};

const readMsg7 = id => {
  list7.value = list7.value.map(item => {
    if (item.id === id) {
      item.readStatus = 1;
    }
    return item;
  });
  // 更新未读数量
  noticeNum7.value = list7.value.filter(item => item.readStatus === 0).length;
};

const readAll8 = () => {
  list7.value = list7.value.map(item => {
    item.readStatus = 1;
    return item;
  });
  noticeNum7.value = 0;
};
```

```html
<div class="responsive-bell-message">
  <LSBellMessage
    :loading="false"
    :notice-num="noticeNum7"
    :list="list7"
    @read-msg="readMsg7"
    @load-more="loadMore7"
    @read-all="readAll8"
  />
</div>

<style scoped>
  .responsive-bell-message {
    /* 基础容器样式 */
    width: 100%;
    max-width: 500px;
    border: 1px solid #e4e7ed;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  /* 响应式设计 */
  @media screen and (max-width: 768px) {
    .responsive-bell-message {
      /* 在平板和手机上的样式 */
      max-width: 100%;
      margin: 0 16px;
      border-radius: 4px;
    }

    /* 调整消息项内边距 */
    .responsive-bell-message :deep(.ls-bell-message-item) {
      padding: 12px;
    }

    /* 调整字体大小 */
    .responsive-bell-message :deep(.ls-bell-message-item-title) {
      font-size: 14px;
    }

    .responsive-bell-message :deep(.ls-bell-message-item-content) {
      font-size: 13px;
    }

    /* 调整按钮大小 */
    .responsive-bell-message :deep(.ls-bell-message-read-all),
    .responsive-bell-message :deep(.ls-bell-message-load-more) {
      padding: 10px;
      font-size: 13px;
    }
  }

  /* 自定义消息项样式 */
  .responsive-bell-message :deep(.ls-bell-message-item) {
    padding: 16px;
    border-bottom: 1px solid #f0f0f0;
    transition: all 0.3s;
  }

  .responsive-bell-message :deep(.ls-bell-message-item:hover) {
    background-color: #f5f7fa;
  }

  /* 自定义未读消息样式 */
  .responsive-bell-message :deep(.ls-bell-message-item.unread) {
    background-color: #ecf5ff;
  }

  /* 自定义消息标题样式 */
  .responsive-bell-message :deep(.ls-bell-message-item-title) {
    font-size: 16px;
    font-weight: 600;
    color: #303133;
    margin-bottom: 8px;
  }

  /* 自定义消息内容样式 */
  .responsive-bell-message :deep(.ls-bell-message-item-content) {
    font-size: 14px;
    color: #606266;
    line-height: 1.5;
    margin-bottom: 8px;
  }

  /* 自定义消息时间样式 */
  .responsive-bell-message :deep(.ls-bell-message-item-time) {
    font-size: 12px;
    color: #909399;
  }

  /* 自定义消息类型样式 */
  .responsive-bell-message :deep(.ls-bell-message-item-type) {
    font-size: 12px;
    color: #409eff;
    background-color: #ecf5ff;
    padding: 2px 8px;
    border-radius: 10px;
    margin-left: 8px;
  }

  /* 自定义全部已读按钮样式 */
  .responsive-bell-message :deep(.ls-bell-message-read-all) {
    display: block;
    width: 100%;
    padding: 12px;
    text-align: center;
    color: #409eff;
    background-color: #f5f7fa;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
  }

  .responsive-bell-message :deep(.ls-bell-message-read-all:hover) {
    background-color: #ecf5ff;
  }

  /* 自定义加载更多按钮样式 */
  .responsive-bell-message :deep(.ls-bell-message-load-more) {
    display: block;
    width: 100%;
    padding: 12px;
    text-align: center;
    color: #606266;
    background-color: #f5f7fa;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
  }

  .responsive-bell-message :deep(.ls-bell-message-load-more:hover) {
    background-color: #ecf5ff;
    color: #409eff;
  }
</style>
```

:::

#### 8.1 响应式设计最佳实践

1. **使用相对单位**：使用`%`、`em`、`rem`等相对单位，避免使用固定像素值
2. **媒体查询**：根据不同屏幕尺寸设置不同的样式
3. **弹性布局**：使用Flexbox或Grid布局，使组件能够自适应不同的容器大小
4. **内容优先级**：在小屏幕上优先显示重要内容，隐藏或简化次要内容
5. **触摸友好**：在移动设备上增大点击区域，提高用户体验
6. **测试**：在不同设备和屏幕尺寸上测试响应式效果

### 9. 与其他组件的集成

<br />
<div class="integration-bell-message">
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      <LSBellMessage 
        :loading="false" 
        :notice-num="noticeNum8" 
        :list="list8" 
        :icon-config="dropdownIconConfig" 
        @read-msg="readMsg8" 
        @load-more="loadMore8" 
        @read-all="readAll9" 
      />
    </span>
    <template #dropdown>
      <div class="dropdown-content">
        <div class="dropdown-header">
          <h3>消息通知</h3>
          <span class="read-all-btn" @click="readAll9">全部已读</span>
        </div>
        <div class="dropdown-body">
          <LSBellMessage 
            :loading="false" 
            :notice-num="noticeNum8" 
            :list="list8" 
            :no-more="true" 
            @read-msg="readMsg8" 
          />
        </div>
      </div>
    </template>
  </el-dropdown>
</div>

::: details 点我查看代码

```js
import { ref } from 'vue';
const noticeNum8 = ref(3);
const dropdownIconConfig = ref({
  name: 'Bell',
  size: 20,
  color: '#606266'
});
const list8 = ref([
  {
    id: '1',
    title: '系统通知',
    msgType: '系统',
    content: '系统将于今晚进行维护，预计维护时间为2小时',
    createdTime: '2024-02-01 10:00:00',
    readStatus: 0
  },
  {
    id: '2',
    title: '审批通知',
    msgType: '审批',
    content: '您的请假申请已通过审批',
    createdTime: '2024-02-01 09:00:00',
    readStatus: 0
  },
  {
    id: '3',
    title: '任务通知',
    msgType: '任务',
    content: '您有一个新任务分配',
    createdTime: '2024-01-31 16:00:00',
    readStatus: 0
  }
]);

const loadMore8 = () => {
  // 模拟加载更多数据
  const newData = [
    {
      id: Date.now().toString(),
      title: '新消息',
      msgType: '系统',
      content: '这是一条新的系统消息',
      createdTime: new Date().toLocaleString('zh-CN'),
      readStatus: 0
    }
  ];
  list8.value = list8.value.concat(newData);
  noticeNum8.value += newData.length;
};

const readMsg8 = id => {
  list8.value = list8.value.map(item => {
    if (item.id === id) {
      item.readStatus = 1;
    }
    return item;
  });
  // 更新未读数量
  noticeNum8.value = list8.value.filter(item => item.readStatus === 0).length;
};

const readAll9 = () => {
  list8.value = list8.value.map(item => {
    item.readStatus = 1;
    return item;
  });
  noticeNum8.value = 0;
};
```

```html
<div class="integration-bell-message">
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      <LSBellMessage
        :loading="false"
        :notice-num="noticeNum8"
        :list="list8"
        :icon-config="dropdownIconConfig"
        @read-msg="readMsg8"
        @load-more="loadMore8"
        @read-all="readAll9"
      />
    </span>
    <template #dropdown>
      <div class="dropdown-content">
        <div class="dropdown-header">
          <h3>消息通知</h3>
          <span class="read-all-btn" @click="readAll9">全部已读</span>
        </div>
        <div class="dropdown-body">
          <LSBellMessage :loading="false" :notice-num="noticeNum8" :list="list8" :no-more="true" @read-msg="readMsg8" />
        </div>
      </div>
    </template>
  </el-dropdown>
</div>

<style scoped>
  .integration-bell-message {
    /* 集成示例容器样式 */
    margin: 20px 0;
  }

  .dropdown-content {
    /* 下拉菜单内容样式 */
    width: 400px;
    max-height: 500px;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    background-color: #fff;
  }

  .dropdown-header {
    /* 下拉菜单头部样式 */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid #f0f0f0;
  }

  .dropdown-header h3 {
    /* 标题样式 */
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: #303133;
  }

  .read-all-btn {
    /* 全部已读按钮样式 */
    font-size: 14px;
    color: #409eff;
    cursor: pointer;
    transition: color 0.3s;
  }

  .read-all-btn:hover {
    color: #66b1ff;
  }

  .dropdown-body {
    /* 下拉菜单体部样式 */
    max-height: 400px;
    overflow-y: auto;
  }

  /* 响应式设计 */
  @media screen and (max-width: 768px) {
    .dropdown-content {
      width: 300px;
    }

    .dropdown-header {
      padding: 12px;
    }

    .dropdown-header h3 {
      font-size: 14px;
    }
  }
</style>
```

:::

#### 9.1 集成示例说明

本示例展示了如何将`LSBellMessage`组件与Element Plus的`el-dropdown`组件集成，创建一个点击展开的消息通知下拉菜单。集成时需要注意以下几点：

1. **图标配置**：可以通过`icon-config`属性自定义消息图标，使其与下拉菜单的风格一致
2. **事件处理**：在集成环境中需要正确处理`read-msg`、`load-more`和`read-all`等事件
3. **样式调整**：根据集成环境的样式需求，可能需要调整组件的样式
4. **响应式设计**：确保集成后的组件在不同屏幕尺寸上都能正常显示

### 10. 性能优化

1. **虚拟滚动**：对于大量消息，可以使用虚拟滚动技术，只渲染可见区域的消息项
2. **懒加载**：使用`load-more`事件实现消息的分页加载，避免一次性加载过多数据
3. **缓存**：缓存已加载的消息数据，减少重复请求
4. **防抖**：对滚动和搜索等频繁触发的事件使用防抖处理
5. **按需渲染**：根据消息的重要性和优先级，优先渲染重要的消息

### 11. 常见问题与解决方案

| 问题           | 原因                                    | 解决方案                                           |
| -------------- | --------------------------------------- | -------------------------------------------------- |
| 消息数量不更新 | 未正确处理`read-msg`和`read-all`事件    | 在事件回调中更新消息的`readStatus`和`noticeNum`    |
| 样式不生效     | CSS选择器优先级问题或使用了错误的选择器 | 使用`:deep()`选择器或增加选择器优先级              |
| 响应式布局问题 | 未设置媒体查询或使用了固定像素值        | 使用相对单位和媒体查询，确保在不同屏幕尺寸上的适配 |
| 性能问题       | 消息数量过多或频繁更新                  | 使用虚拟滚动、懒加载等性能优化技术                 |
| 与其他组件冲突 | 样式或事件冲突                          | 使用命名空间或隔离样式，避免事件名称冲突           |

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

#### 1.1 属性详细说明

| 属性名     | 类型    | 默认值 | 说明                            | 使用场景                                 | 注意事项                                                                   |
| ---------- | ------- | ------ | ------------------------------- | ---------------------------------------- | -------------------------------------------------------------------------- |
| noticeNum  | number  | 0      | 消息通知未读数量                | 显示未读消息的数量，用于提醒用户         | 当所有消息都已读时，应设置为0                                              |
| badgeMax   | number  | 99     | 徽章展示数值最大值              | 当未读消息数量超过该值时，显示为"99+"    | 建议根据UI设计合理设置该值                                                 |
| iconConfig | object  | {}     | 图标配置，具体配置参考LSIcon    | 自定义消息图标，包括名称、大小、颜色等   | 若不设置，将使用默认图标                                                   |
| loading    | boolean | true   | 是否展示列表数据加载loading样式 | 初始加载或加载更多数据时显示加载状态     | 数据加载完成后应设置为false                                                |
| noMore     | boolean | false  | 是否已经没有更多数据            | 当所有数据都已加载完成时显示"无更多数据" | 与loadMore事件配合使用                                                     |
| list       | array   | []     | 列表数据，具体结构见下方        | 展示消息列表内容                         | 每个消息项必须包含id、title、msgType、content、createdTime、readStatus字段 |

#### 1.2 list属性数据结构

<ApiIntro :tableColumn="tableColumn" :tableData="tableData2" />

| 字段名      | 类型   | 说明                    | 使用场景                           | 注意事项                                      |
| ----------- | ------ | ----------------------- | ---------------------------------- | --------------------------------------------- |
| id          | string | 消息id                  | 唯一标识每条消息，用于读取状态更新 | 必须唯一，建议使用后端返回的id                |
| title       | string | 消息标题                | 显示消息的标题                     | 建议简洁明了，突出消息主题                    |
| msgType     | string | 消息类型文案            | 显示消息的类型，如"系统"、"审批"等 | 用于区分不同类型的消息                        |
| content     | string | 消息内容                | 显示消息的详细内容                 | 建议控制长度，过长时会自动截断                |
| createdTime | string | 消息创建时间            | 显示消息的发送时间                 | 建议使用标准时间格式，如"2024-02-01 12:00:00" |
| readStatus  | number | 消息状态: 0 未读 1 已读 | 控制消息的阅读状态和显示样式       | 未读消息会显示特殊样式，点击后应更新为已读    |

### 2. Methods

<ApiIntro :tableColumn="tableMethodColumn" :tableData="tableData3" />

#### 2.1 方法详细说明

| 方法名   | 参数       | 说明                             | 使用场景                       | 注意事项                                                    |
| -------- | ---------- | -------------------------------- | ------------------------------ | ----------------------------------------------------------- |
| readAll  | 无         | 点击全部已读回调方法             | 当用户点击"全部已读"按钮时触发 | 应在回调中更新所有消息的readStatus为1，并将noticeNum设置为0 |
| readMsg  | id: string | 点击单条消息回调方法，返回消息id | 当用户点击单条消息时触发       | 应在回调中更新对应消息的readStatus为1，并重新计算未读数量   |
| loadMore | 无         | 点击加载更多回调方法             | 当用户点击"加载更多"按钮时触发 | 应在回调中加载新数据并添加到列表中                          |

<script setup>
import { tableColumn, tableMethodColumn } from '../constant';
import { ref, computed } from 'vue';
import { ElDropdown } from 'element-plus';

const loading = ref(true);
const noticeNum = ref(1);
const noticeNum2 = ref(55);
const noticeNum3 = ref(3);
const iconConfig = ref({
  name: 'Bell',
  size: 24,
  color: '#606266'
});
const list = ref([
  {
    id: '1',
    title: '角色TITLE1',
    msgType: '角色权限变更',
    content: '角色权限已变更，将在下次登录后生效！',
    createdTime: '2024-02-01 12:00:00',
    readStatus: 0
  },
  {
    id: '2',
    title: '角色TITLE2',
    msgType: '角色权限变更',
    content: '角色权限已变更，将在下次登录后生效！',
    createdTime: '2024-02-01 13:00:00',
    readStatus: 1
  }
]);

const list2 = ref([
  {
    id: '1',
    title: '系统通知',
    msgType: '系统',
    content: '系统将于今晚进行维护，预计维护时间为2小时，请提前做好准备。',
    createdTime: '2024-02-01 10:00:00',
    readStatus: 0
  },
  {
    id: '2',
    title: '审批通知',
    msgType: '审批',
    content: '您的请假申请已通过审批，请假时间为2024-02-05至2024-02-07。',
    createdTime: '2024-02-01 11:00:00',
    readStatus: 0
  },
  {
    id: '3',
    title: '任务通知',
    msgType: '任务',
    content: '您有一个新任务分配：完成项目需求文档的编写，截止时间为2024-02-10。',
    createdTime: '2024-02-01 12:00:00',
    readStatus: 0
  },
  {
    id: '4',
    title: '角色权限变更',
    msgType: '权限',
    content: '您的角色权限已变更，新增了"系统设置"权限。',
    createdTime: '2024-01-31 15:00:00',
    readStatus: 1
  }
]);

const list3 = ref([
  {
    id: '1',
    title: '系统通知',
    msgType: '系统',
    content: '系统维护已完成，所有功能已恢复正常。',
    createdTime: '2024-02-01 09:00:00',
    readStatus: 1
  },
  {
    id: '2',
    title: '角色权限变更',
    msgType: '权限',
    content: '您的角色权限已变更，移除了"系统设置"权限。',
    createdTime: '2024-01-31 10:00:00',
    readStatus: 1
  }
]);

setTimeout(() => {
  loading.value = false;
}, 1000);

const loadMore = () => {
  list.value = list.value.concat(list.value);
};

const loadMore2 = () => {
  // 模拟加载更多数据
  const newData = [
    {
      id: Date.now().toString(),
      title: '新消息',
      msgType: '系统',
      content: '这是一条新的系统消息，用于测试加载更多功能。',
      createdTime: new Date().toLocaleString('zh-CN'),
      readStatus: 0
    }
  ];
  list2.value = list2.value.concat(newData);
  noticeNum3.value += newData.length;
};

const loadMore3 = () => {
  // 无更多数据，无需处理
  console.log('No more data');
};

const readMsg = id => {
  list.value = list.value.map(item => {
    if (item.id === id) {
      item.readStatus = 1;
    }
    return item;
  });
};

const readMsg2 = id => {
  list2.value = list2.value.map(item => {
    if (item.id === id) {
      item.readStatus = 1;
    }
    return item;
  });
  // 更新未读数量
  noticeNum3.value = list2.value.filter(item => item.readStatus === 0).length;
};

const readMsg3 = id => {
  list3.value = list3.value.map(item => {
    if (item.id === id) {
      item.readStatus = 1;
    }
    return item;
  });
};

const readAll = () => {
  list.value = list.value.map(item => {
    item.readStatus = 1;
    return item;
  });
  noticeNum.value = 0;
};

const readAll2 = () => {
  list.value = list.value.map(item => {
    item.readStatus = 1;
    return item;
  });
  noticeNum2.value = 0;
};

const readAll3 = () => {
  list2.value = list2.value.map(item => {
    item.readStatus = 1;
    return item;
  });
  noticeNum3.value = 0;
};

const readAll4 = () => {
  list3.value = list3.value.map(item => {
    item.readStatus = 1;
    return item;
  });
};

// 带点击事件的消息通知
const noticeNum4 = ref(2);
const list4 = ref([
  {
    id: '1',
    title: '任务提醒',
    msgType: '任务',
    content: '您有一个任务即将到期：完成项目计划文档',
    createdTime: '2024-02-01 14:00:00',
    readStatus: 0
  },
  {
    id: '2',
    title: '会议通知',
    msgType: '会议',
    content: '明天上午10点将召开项目启动会议，请准时参加',
    createdTime: '2024-02-01 13:00:00',
    readStatus: 0
  }
]);

const loadMore4 = () => {
  // 模拟加载更多数据
  const newData = [
    {
      id: Date.now().toString(),
      title: '新任务',
      msgType: '任务',
      content: '这是一条新的任务消息，点击查看详情',
      createdTime: new Date().toLocaleString('zh-CN'),
      readStatus: 0
    }
  ];
  list4.value = list4.value.concat(newData);
  noticeNum4.value += newData.length;
};

const readMsg4 = id => {
  // 标记为已读
  list4.value = list4.value.map(item => {
    if (item.id === id) {
      item.readStatus = 1;
    }
    return item;
  });
  // 更新未读数量
  noticeNum4.value = list4.value.filter(item => item.readStatus === 0).length;
  // 执行点击事件逻辑
  console.log('点击了消息:', id);
  // 这里可以添加跳转到消息详情页等逻辑
};

const readAll5 = () => {
  list4.value = list4.value.map(item => {
    item.readStatus = 1;
    return item;
  });
  noticeNum4.value = 0;
};

// 带过滤功能的消息通知
const noticeNum5 = ref(4);
const list5 = ref([
  {
    id: '1',
    title: '系统通知',
    msgType: '系统',
    content: '系统将于今晚进行维护，预计维护时间为2小时',
    createdTime: '2024-02-01 10:00:00',
    readStatus: 0
  },
  {
    id: '2',
    title: '审批通知',
    msgType: '审批',
    content: '您的请假申请已通过审批',
    createdTime: '2024-02-01 09:00:00',
    readStatus: 0
  },
  {
    id: '3',
    title: '任务通知',
    msgType: '任务',
    content: '您有一个新任务分配',
    createdTime: '2024-01-31 16:00:00',
    readStatus: 1
  },
  {
    id: '4',
    title: '角色权限变更',
    msgType: '权限',
    content: '您的角色权限已变更',
    createdTime: '2024-01-31 15:00:00',
    readStatus: 1
  }
]);

// 过滤出未读消息
const filteredList = computed(() => {
  return list5.value.filter(item => item.readStatus === 0);
});

const loadMore5 = () => {
  // 模拟加载更多数据
  const newData = [
    {
      id: Date.now().toString(),
      title: '新系统通知',
      msgType: '系统',
      content: '这是一条新的系统消息',
      createdTime: new Date().toLocaleString('zh-CN'),
      readStatus: 0
    }
  ];
  list5.value = list5.value.concat(newData);
  noticeNum5.value += newData.length;
};

const readMsg5 = id => {
  list5.value = list5.value.map(item => {
    if (item.id === id) {
      item.readStatus = 1;
    }
    return item;
  });
  // 更新未读数量
  noticeNum5.value = list5.value.filter(item => item.readStatus === 0).length;
};

const readAll6 = () => {
  list5.value = list5.value.map(item => {
    item.readStatus = 1;
    return item;
  });
  noticeNum5.value = 0;
};

// 样式定制示例
const noticeNum6 = ref(2);
const list6 = ref([
  {
    id: '1',
    title: '样式定制示例',
    msgType: '示例',
    content: '这是一条使用自定义样式的消息通知',
    createdTime: '2024-02-01 15:00:00',
    readStatus: 0
  },
  {
    id: '2',
    title: '另一条消息',
    msgType: '示例',
    content: '自定义样式可以让消息通知更符合你的应用风格',
    createdTime: '2024-02-01 14:00:00',
    readStatus: 0
  }
]);

const loadMore6 = () => {
  // 模拟加载更多数据
  const newData = [
    {
      id: Date.now().toString(),
      title: '新消息',
      msgType: '示例',
      content: '这是一条新的样式定制示例消息',
      createdTime: new Date().toLocaleString('zh-CN'),
      readStatus: 0
    }
  ];
  list6.value = list6.value.concat(newData);
  noticeNum6.value += newData.length;
};

const readMsg6 = id => {
  list6.value = list6.value.map(item => {
    if (item.id === id) {
      item.readStatus = 1;
    }
    return item;
  });
  // 更新未读数量
  noticeNum6.value = list6.value.filter(item => item.readStatus === 0).length;
};

const readAll7 = () => {
  list6.value = list6.value.map(item => {
    item.readStatus = 1;
    return item;
  });
  noticeNum6.value = 0;
};

// 响应式设计示例
const noticeNum7 = ref(2);
const list7 = ref([
  {
    id: '1',
    title: '响应式设计示例',
    msgType: '示例',
    content: '这是一条在不同屏幕尺寸上都能正常显示的消息通知',
    createdTime: '2024-02-01 16:00:00',
    readStatus: 0
  },
  {
    id: '2',
    title: '另一条响应式消息',
    msgType: '示例',
    content: '响应式设计可以让消息通知在手机、平板和桌面设备上都有良好的显示效果',
    createdTime: '2024-02-01 15:00:00',
    readStatus: 0
  }
]);

const loadMore7 = () => {
  // 模拟加载更多数据
  const newData = [
    {
      id: Date.now().toString(),
      title: '新响应式消息',
      msgType: '示例',
      content: '这是一条新的响应式设计示例消息',
      createdTime: new Date().toLocaleString('zh-CN'),
      readStatus: 0
    }
  ];
  list7.value = list7.value.concat(newData);
  noticeNum7.value += newData.length;
};

const readMsg7 = id => {
  list7.value = list7.value.map(item => {
    if (item.id === id) {
      item.readStatus = 1;
    }
    return item;
  });
  // 更新未读数量
  noticeNum7.value = list7.value.filter(item => item.readStatus === 0).length;
};

const readAll8 = () => {
  list7.value = list7.value.map(item => {
    item.readStatus = 1;
    return item;
  });
  noticeNum7.value = 0;
};

// 与其他组件集成示例
const noticeNum8 = ref(3);
const dropdownIconConfig = ref({
  name: 'Bell',
  size: 20,
  color: '#606266'
});
const list8 = ref([
  {
    id: '1',
    title: '系统通知',
    msgType: '系统',
    content: '系统将于今晚进行维护，预计维护时间为2小时',
    createdTime: '2024-02-01 10:00:00',
    readStatus: 0
  },
  {
    id: '2',
    title: '审批通知',
    msgType: '审批',
    content: '您的请假申请已通过审批',
    createdTime: '2024-02-01 09:00:00',
    readStatus: 0
  },
  {
    id: '3',
    title: '任务通知',
    msgType: '任务',
    content: '您有一个新任务分配',
    createdTime: '2024-01-31 16:00:00',
    readStatus: 0
  }
]);

const loadMore8 = () => {
  // 模拟加载更多数据
  const newData = [
    {
      id: Date.now().toString(),
      title: '新消息',
      msgType: '系统',
      content: '这是一条新的系统消息',
      createdTime: new Date().toLocaleString('zh-CN'),
      readStatus: 0
    }
  ];
  list8.value = list8.value.concat(newData);
  noticeNum8.value += newData.length;
};

const readMsg8 = id => {
  list8.value = list8.value.map(item => {
    if (item.id === id) {
      item.readStatus = 1;
    }
    return item;
  });
  // 更新未读数量
  noticeNum8.value = list8.value.filter(item => item.readStatus === 0).length;
};

const readAll9 = () => {
  list8.value = list8.value.map(item => {
    item.readStatus = 1;
    return item;
  });
  noticeNum8.value = 0;
};

const tableData = ref([
  {
    name: 'noticeNum',
    desc: '消息通知未读数量',
    type: 'number',
    value: '0'
  },
  {
    name: 'badgeMax',
    desc: '徽章展示数值最大值',
    type: 'number',
    value: '99'
  },
  {
    name: 'iconConfig',
    desc: '图标配置，具体配置参考LSIcon',
    type: 'json',
    value: '{}'
  },
  {
    name: 'loading',
    desc: '是否展示列表数据加载loading样式',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'noMore',
    desc: '是否已经没有更多数据',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'list',
    desc: '列表数据',
    type: 'BellMessageListType',
    value: '[]'
  }
]);

const tableData2 = ref([
  {
    name: 'id',
    desc: '消息id',
    type: 'string',
    value: '-'
  },
  {
    name: 'msgType',
    desc: '消息类型文案',
    type: 'string',
    value: '-'
  },
  {
    name: 'content',
    desc: '消息内容',
    type: 'string',
    value: '-'
  },
  {
    name: 'createdTime',
    desc: '消息创建时间',
    type: 'string',
    value: '-'
  },
  {
    name: 'readStatus',
    desc: '消息状态: 0 未读 1 已读',
    type: 'number',
    value: '0'
  }
]);

const tableData3 = ref([
  {
    name: 'readAll',
    desc: '点击全部已读回调方法',
    type: 'function',
    value: ''
  },
  {
    name: 'readMsg',
    desc: '点击单条消息回调方法，返回消息id',
    type: 'function',
    value: 'id'
  },
  {
    name: 'loadMore',
    desc: '点击加载更多回调方法',
    type: 'function',
    value: ''
  }
]);
</script>

<style scoped>

</style>
