<script setup lang="ts">
import { useNamespace } from '@cpo/_hooks/useNamespace';
import { lsBellMessageProps, emitNames } from './types';

const emitAll = defineEmits(emitNames);

const props = defineProps(lsBellMessageProps);

const ns = useNamespace('bell-message');
const comClass: string = ns.b();

const loading = ref(false);
const noMore = ref(false);
const messageCount = ref(0);
const msgList = ref<Array<any>>([]);
const params = ref({
  currentPage: 1,
  pageSize: 10
});

async function readAll() {
  if (props.readAllApi) {
    await props.readAllApi();
    msgList.value = msgList.value.map((item: any) => {
      item.readStatus = true;
      return item;
    });
    emitAll('updateNotice');
  }
}

async function readMsg(id: number) {
  if (props.readApi) {
    await props.readApi(id);
    msgList.value = msgList.value.map((item: any) => {
      if (id === item.id) {
        item.readStatus = true;
      }
      return item;
    });
  }
  allReadFunc();
}

function allReadFunc() {
  let allRead = true;
  msgList.value = msgList.value.map((item: any) => {
    if (item.readStatus == 0) {
      allRead = false;
    }
    return item;
  });
  allRead && noMore.value && emitAll('updateNotice');
}
</script>

<template>
  <div :class="comClass">
    <div class="ptb-10 top-box">
      <LSButton
        class="pl-12 read_all"
        link
        :type="messageCount > 1 ? 'primary' : ''"
        :disabled="messageCount < 1"
        @click="readAll"
        >全部已读</LSButton
      >
    </div>

    <div class="content-box" v-loading="loading">
      <div v-for="(item, index) in msgList" :key="index" class="mlr-6 msg-item" @click="readMsg(item.id)">
        <h1>{{ item.title }}</h1>
        <el-tag v-if="msgTypeMap[item.type]?.label" type="primary" class="msg-type">{{ msgTypeMap[item.type]?.label }}</el-tag>
        <div class="mt-8 content" v-html="item.content"></div>
        <div class="mt-8 time">{{ item.createdTime }}</div>
        <div v-show="item.readStatus == 0" class="dot"></div>
      </div>

      <div
        class="flex-center ptb-24"
        :style="{
          textAlign: 'center'
        }"
      >
        <div v-if="noMore" class="no-more">暂无更多</div>
        <el-button v-else-if="params.currentPage > 1" link type="primary" :loading="loading" @click="loadMore"
          >加载更多</el-button
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ls-bell-message {
  max-height: calc(100vh - 200px);
  overflow: hidden;
  .top-box {
    text-align: right;
    border-bottom: 1px dashed #e3e2ea;
    .read_all {
      font-size: 14px;
    }
  }
  .content-box {
    max-height: calc(100vh - 254px);
    overflow: hidden auto;
    .icon-loading {
      color: var(--el-color-primary);
    }
    .no-more {
      font-size: 12px;
      color: #999999;
      text-align: center;
    }
    &::-webkit-scrollbar {
      width: 7px;
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: transparent;
      background-clip: content-box;
      border-radius: 10px;
    }
    &:hover {
      &::-webkit-scrollbar-thumb {
        background-color: rgb(144 147 153 / 40%) !important;
        transition: background-color 0.3s;
      }
    }
    .msg-item {
      position: relative;
      padding: 12px 14px;
      cursor: pointer;
      border-bottom: 1px solid #d8d8d8;
      &:last-child {
        border-bottom: none;
      }
      &:hover {
        background: rgba($color: var(--el-color-primary), $alpha: 10%);
      }
      h1 {
        font-size: 16px;
      }
      p {
        font-size: 12px;
      }
      span {
        font-size: 12px;
        color: #999999;
      }
      .dot {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 9px;
        height: 9px;
        background: var(--el-color-error);
        border-radius: 100%;
      }
      .detail {
        width: 60px;
        font-size: 12px;
        color: var(--el-color-primary);
        &:hover {
          color: #2466ff;
        }
      }
      .msg-type {
        margin-top: 6px;
        color: var(--el-color-primary);
      }
      .content {
        font-size: 14px;
      }
      .time {
        font-size: 12px;
        color: var(--el-color-info);
      }
    }
  }
}
</style>
