import { useWebSocket } from '@vueuse/core';

export default function () {
  const wsOpen = ref();
  const wsClose = ref();
  const wsSend = ref();
  const wsData = ref();

  const createWebSocket = (wsPath: string, callback: Function) => {
    if (!wsPath) {
      return;
    }
    const { data, open, close, send } = useWebSocket(wsPath, {
      immediate: false,
      heartbeat: true,
      autoReconnect: true,
      autoClose: false,
      onMessage() {
        wsData.value = '{}';
        const { value } = data || {};
        if (value !== 'pong') {
          wsData.value = value;
        }
        callback();
      }
    });
    wsSend.value = send;
    wsOpen.value = open;
    wsClose.value = close;
  };
  return {
    createWebSocket,
    wsOpen,
    wsClose,
    wsData,
    wsSend
  };
}
