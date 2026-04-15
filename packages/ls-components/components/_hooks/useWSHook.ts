import { ref, Ref, onUnmounted, watch } from 'vue';
import { useWebSocket as useVueUseWebSocket } from '@vueuse/core';

export type WsStatus = 'connecting' | 'open' | 'close' | 'error' | 'reconnecting';

export interface UseWSOptions {
  /** WebSocket 地址 */
  path?: string;
  /** 自动连接，默认 true */
  autoConnect?: boolean;
  /** 心跳间隔(ms)，默认 30000 */
  heartbeatInterval?: number;
  /** 自动重连，默认 true */
  autoReconnect?: boolean;
  /** 最大重连次数，默认 5 */
  maxReconnectAttempts?: number;
  /** 重连间隔(ms)，默认 3000 */
  reconnectInterval?: number;
  /** 连接成功回调 */
  onOpen?: () => void;
  /** 连接关闭回调 */
  onClose?: () => void;
  /** 错误回调 */
  onError?: (error: Event) => void;
  /** 消息回调 */
  onMessage?: (data: any) => void;
}

export interface UseWSReturn {
  /** 连接状态 */
  status: Ref<WsStatus>;
  /** 收到的消息数据 */
  wsData: Ref<any>;
  /** 消息历史列表 */
  messageList: Ref<any[]>;
  /** 是否正在连接 */
  isConnecting: Ref<boolean>;
  /** 是否已连接 */
  isConnected: Ref<boolean>;
  /** 连接成功回调 */
  onOpen: Ref<Function | undefined>;
  /** 连接关闭回调 */
  onClose: Ref<Function | undefined>;
  /** 错误回调 */
  onError: Ref<Function | undefined>;
  /** 消息回调 */
  onMessage: Ref<Function | undefined>;
  /** 创建连接 */
  createWebSocket: (path: string, callback?: Function) => void;
  /** 打开连接 */
  open: Ref<Function | undefined>;
  /** 关闭连接 */
  close: Ref<Function | undefined>;
  /** 发送消息 */
  send: Ref<Function | undefined>;
  /** 主动发送消息（快捷方法） */
  sendMessage: (data: any) => void;
  /** 重新连接 */
  reconnect: () => void;
  /** 主动心跳 */
  heartbeat: () => void;
  /** 清空消息历史 */
  clearMessages: () => void;
  /** 获取当前配置 */
  getOptions: () => UseWSOptions;
  /** 更新配置 */
  updateOptions: (options: Partial<UseWSOptions>) => void;
}

export default function useWS(customOptions: UseWSOptions = {}): UseWSReturn {
  // 状态
  const status = ref<WsStatus>('close');
  const wsData = ref<any>(null);
  const messageList = ref<any[]>([]);
  const isConnecting = ref(false);
  const isConnected = ref(false);

  // 内部引用
  let wsInstance: any = null;
  let currentPath = '';
  let reconnectAttempts = 0;
  let reconnectTimer: ReturnType<typeof setTimeout> | null = null;
  let heartbeatTimer: ReturnType<typeof setInterval> | null = null;

  // 配置
  const options: UseWSOptions = {
    autoConnect: false,
    heartbeatInterval: 30000,
    autoReconnect: true,
    maxReconnectAttempts: 5,
    reconnectInterval: 3000,
    ...customOptions
  };

  // 回调
  const openCallback = ref<Function | undefined>(options.onOpen);
  const closeCallback = ref<Function | undefined>(options.onClose);
  const errorCallback = ref<Function | undefined>(options.onError);
  const messageCallback = ref<Function | undefined>(options.onMessage);

  // refs for useWebSocket
  const open = ref<Function>();
  const close = ref<Function>();
  const send = ref<Function>();

  /**
   * 清除心跳定时器
   */
  const clearHeartbeat = () => {
    if (heartbeatTimer) {
      clearInterval(heartbeatTimer);
      heartbeatTimer = null;
    }
  };

  /**
   * 清除重连定时器
   */
  const clearReconnect = () => {
    if (reconnectTimer) {
      clearTimeout(reconnectTimer);
      reconnectTimer = null;
    }
  };

  /**
   * 启动心跳
   */
  const startHeartbeat = () => {
    clearHeartbeat();
    if (options.heartbeatInterval && options.heartbeatInterval > 0) {
      heartbeatTimer = setInterval(() => {
        heartbeat();
      }, options.heartbeatInterval);
    }
  };

  /**
   * 主动心跳
   */
  const heartbeat = () => {
    if (send.value) {
      send.value(JSON.stringify({ type: 'ping', timestamp: Date.now() }));
    }
  };

  /**
   * 处理重连
   */
  const handleReconnect = () => {
    if (!options.autoReconnect || reconnectAttempts >= (options.maxReconnectAttempts || 5)) {
      if (reconnectAttempts >= (options.maxReconnectAttempts || 5)) {
        status.value = 'close';
        isConnected.value = false;
        console.warn(`[WebSocket] Max reconnect attempts (${options.maxReconnectAttempts}) reached`);
      }
      return;
    }

    status.value = 'reconnecting';
    reconnectAttempts++;

    reconnectTimer = setTimeout(() => {
      console.log(`[WebSocket] Reconnecting... Attempt ${reconnectAttempts}`);
      createWebSocket(currentPath);
    }, options.reconnectInterval);
  };

  /**
   * 创建 WebSocket 连接
   */
  const createWebSocket = (path: string, callback?: Function) => {
    if (!path) {
      console.warn('[WebSocket] Path is required');
      return;
    }

    // 清除之前的连接
    if (wsInstance) {
      clearHeartbeat();
      clearReconnect();
      close.value?.();
      wsInstance = null;
    }

    currentPath = path;
    isConnecting.value = true;
    status.value = 'connecting';
    reconnectAttempts = 0;

    // 如果有额外回调，合并到 messageCallback
    const messageHandler = (data: any) => {
      try {
        // 尝试解析 JSON
        let parsedData = data;
        try {
          parsedData = JSON.parse(data);
        } catch {
          // 不是 JSON，保持原样
        }

        // 过滤心跳响应
        if (parsedData !== 'pong' && parsedData?.type !== 'pong') {
          wsData.value = parsedData;
          messageList.value.push({
            data: parsedData,
            timestamp: Date.now()
          });
          callback?.(parsedData);
          messageCallback.value?.(parsedData);
        }
      } catch (error) {
        console.error('[WebSocket] Message parse error:', error);
      }
    };

    try {
      const ws = useVueUseWebSocket(path, {
        immediate: false,
        autoClose: false,
        autoReconnect: false, // 我们自己处理重连
        heartbeat: false // 我们自己处理心跳
      });

      // 监听连接状态变化
      watch(
        () => ws.status.value,
        (newStatus, oldStatus) => {
          switch (newStatus) {
            case 'OPEN':
              status.value = 'open';
              isConnecting.value = false;
              isConnected.value = true;
              reconnectAttempts = 0;
              console.log('[WebSocket] Connected');
              openCallback.value?.();
              startHeartbeat();
              break;
            case 'CLOSED':
              status.value = 'close';
              isConnecting.value = false;
              isConnected.value = false;
              clearHeartbeat();
              console.log('[WebSocket] Closed');
              closeCallback.value?.();
              if (oldStatus === 'OPEN') {
                handleReconnect();
              }
              break;
            case 'CONNECTING':
              status.value = 'connecting';
              isConnecting.value = true;
              break;
            default:
              if (newStatus !== 'CLOSING') {
                status.value = 'error';
                isConnecting.value = false;
                isConnected.value = false;
                console.error('[WebSocket] Error');
                errorCallback.value?.(new Event('WebSocket error'));
                handleReconnect();
              }
              break;
          }
        },
        { immediate: true }
      );

      // 监听消息
      watch(
        () => ws.data.value,
        (newData) => {
          if (newData) {
            messageHandler(newData);
          }
        }
      );

      open.value = ws.open;
      close.value = ws.close;
      send.value = ws.send;
      wsInstance = ws;

      // 打开连接
      ws.open();

    } catch (error) {
      status.value = 'error';
      isConnecting.value = false;
      console.error('[WebSocket] Create error:', error);
      errorCallback.value?.(error as Event);
    }
  };

  /**
   * 重新连接
   */
  const reconnect = () => {
    if (currentPath) {
      reconnectAttempts = 0;
      createWebSocket(currentPath);
    }
  };

  /**
   * 发送消息
   */
  const sendMessage = (data: any) => {
    if (!send.value) {
      console.warn('[WebSocket] Not connected, cannot send message');
      return false;
    }
    const message = typeof data === 'string' ? data : JSON.stringify(data);
    send.value(message);
    return true;
  };

  /**
   * 清空消息历史
   */
  const clearMessages = () => {
    messageList.value = [];
    wsData.value = null;
  };

  /**
   * 获取当前配置
   */
  const getOptions = (): UseWSOptions => {
    return { ...options };
  };

  /**
   * 更新配置
   */
  const updateOptions = (newOptions: Partial<UseWSOptions>) => {
    Object.assign(options, newOptions);
  };

  // 组件卸载时清理
  onUnmounted(() => {
    clearHeartbeat();
    clearReconnect();
    close.value?.();
  });

  // 如果设置了 autoConnect，自动连接
  if (options.autoConnect && options.path) {
    createWebSocket(options.path);
  }

  return {
    status,
    wsData,
    messageList,
    isConnecting,
    isConnected,
    onOpen: openCallback,
    onClose: closeCallback,
    onError: errorCallback,
    onMessage: messageCallback,
    createWebSocket,
    open,
    close,
    send,
    sendMessage,
    reconnect,
    heartbeat,
    clearMessages,
    getOptions,
    updateOptions
  };
}
