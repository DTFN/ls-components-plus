---
outline: deep
---

# BellMessage 消息通知列表

::: warning 快速创建常用头部消息通知列表功能。
:::

## 使用方式

<LSBellMessage :notice-num="noticeNum" :list="list" @read-msg="readMsg" @load-more="loadMore" />

::: details 点我查看代码

```js
import { ref } from 'vue';

const noticeNum = ref(1);
const list = ref([
  {
    id: '1',
    msgType: '角色权限变更',
    content: '角色权限已变更，将在下次登录后生效！',
    createdTime: '2024-02-01 12:00:00',
    readStatus: 0
  },
  {
    id: '2',
    msgType: '角色权限变更',
    content: '角色权限已变更，将在下次登录后生效！',
    createdTime: '2024-02-01 13:00:00',
    readStatus: 1
  }
]);

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
<LSBellMessage :notice-num="noticeNum" :list="list" @read-msg="readMsg" @load-more="loadMore" />
```

:::

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

#### 1.1 list

<ApiIntro :tableColumn="tableColumn" :tableData="tableData2" />

### 2. Methods，通过emit抛出的可使用方法

<ApiIntro :tableColumn="tableMethodColumn" :tableData="tableData3" />

<script setup>
import { tableColumn, tableMethodColumn } from './constant';
import { ref } from 'vue';

const noticeNum = ref(1);
const list = ref([
  {
    id: '1',
    msgType: '角色权限变更',
    content: '角色权限已变更，将在下次登录后生效！',
    createdTime: '2024-02-01 12:00:00',
    readStatus: 0
  },
  {
    id: '2',
    msgType: '角色权限变更',
    content: '角色权限已变更，将在下次登录后生效！',
    createdTime: '2024-02-01 13:00:00',
    readStatus: 1
  }
]);

const loadMore = () => {
  list.value = list.value.concat(list.value);
};

const readMsg = (id) => {
  list.value = list.value.map((item) => {
    if (item.id === id) {
      item.readStatus = 1;
    }
    return item;
  });
};

const readAll = () => {
  list.value = list.value.map((item) => {
    item.readStatus = 1;
    return item;
  });
  noticeNum.value = 0;
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
    type: 'array',
    value: '[]'
  }
])

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
])

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
])
</script>

<style lang="scss" scoped>

</style>
