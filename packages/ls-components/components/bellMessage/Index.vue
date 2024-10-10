<script setup lang="ts" name="LSBellMessage">
import { useNamespace } from '@cpo/_hooks/useNamespace';
import { lsBellMessageProps, emitNames } from './types';

const emitAll = defineEmits(emitNames);

defineProps(lsBellMessageProps);

const defAttrs: any = ref({
  width: 360,
  placement: 'bottom-end',
  trigger: 'click'
});

const defBadgeAttrs: any = ref({
  showZero: false,
  max: 99,
  offset: [3, 2]
});

const ns = useNamespace('bell-message');
const comClass: string = ns.b();

function readAll() {
  emitAll('readAll');
}

function readMsg(id: string) {
  emitAll('readMsg', id);
}

function loadMore() {
  emitAll('loadMore');
}
</script>

<template>
  <div :class="comClass">
    <el-popover v-bind="Object.assign(defAttrs, $attrs)" popper-class="ls-bell-message-popover">
      <template #reference>
        <el-badge
          v-bind="Object.assign(defBadgeAttrs, $attrs)"
          class="icon-message"
          :value="Number(noticeNum)"
          dot-class="notice-dot"
        >
          <template #default>
            <LSIcon v-if="iconConfig.name" v-bind="iconConfig" />
            <el-icon v-else><BellFilled /></el-icon>
          </template>
        </el-badge>
      </template>
      <div class="msg-list-view">
        <div class="top-box">
          <LSButton class="pl-12 read_all" link :type="noticeNum > 0 ? 'primary' : ''" :disabled="noticeNum < 1" @click="readAll"
            >全部已读</LSButton
          >
        </div>

        <div class="content-box" v-loading="loading">
          <div v-for="(item, index) in list" :key="index" class="mlr-6 msg-item" @click="readMsg(item.id)">
            <h1>{{ item.title }}</h1>
            <el-tag v-if="item.msgType" type="primary" class="msg-type">{{ item.msgType }}</el-tag>
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
            <el-button v-else link type="primary" :loading="loading" @click="loadMore">加载更多</el-button>
          </div>
        </div>
      </div>
    </el-popover>
  </div>
</template>

<style lang="scss" scoped>
.ls-bell-message {
  position: relative;
  display: inline-block;
  font-size: 0;
  line-height: normal;
  vertical-align: middle;
  .icon-message {
    position: relative;
    font-size: 18px;
    color: var(--el-color-primary);
    cursor: pointer;
  }
}
.ls-bell-message-popover {
  .msg-list-view {
    max-height: calc(100vh - 200px);
    overflow: hidden;
    .top-box {
      padding-top: 10px;
      padding-bottom: 10px;
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
            color: $color-theme;
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
}
</style>
