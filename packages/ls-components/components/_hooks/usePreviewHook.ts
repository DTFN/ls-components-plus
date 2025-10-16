import { ElLoading, LoadingOptions } from 'element-plus';
import { useNamespace } from '@cpo/_hooks/useNamespace';

export default function (props: any, previewVisible: any) {
  const { zoomSize } = toRefs(props);
  const defAttrs: any = reactive({
    zoomSize: zoomSize?.value,
    source: ''
  });
  const ns = useNamespace('preview');
  const comClass: string = ns.b();
  const loadInstance: any = ref();

  let timer: any = null;

  const watermarkStyle = {
    width: '100%',
    height: '100%',
    top: 0,
    left: 0
  };

  watch(
    () => previewVisible?.value,
    val => {
      if (val) {
        openLoading();
      }
    },
    {
      immediate: true,
      deep: true
    }
  );

  watch(
    () => props.source,
    val => {
      defAttrs.source = val;
      if (val) {
        clearTimeout(timer);
      }
    },
    {
      immediate: true,
      deep: true
    }
  );

  function openLoading() {
    props.needLoading && (loadInstance.value = ElLoading.service(props.loadingOption as LoadingOptions));

    defAttrs.zoomSize = props.zoomSize;
    defAttrs.hasDownload = props.hasDownload;
    if (defAttrs.hasDownload) {
      defAttrs.downloadData = props.downloadData;
    }

    timer = setTimeout(() => {
      if (!props.source) {
        ElMessage.error('加载超时，请检查网络后重试！');
        closeLoading();
        previewVisible.value = false;
      }
      clearTimeout(timer);
    }, 20000);
  }

  const closeLoading = () => {
    timer && clearTimeout(timer);
    props.needLoading && loadInstance.value && loadInstance.value.close();
  };

  onBeforeMount(() => {
    previewVisible.value && openLoading();
  });

  onBeforeUnmount(() => {
    closeLoading();
  });

  return { previewVisible, comClass, defAttrs, closeLoading, watermarkStyle };
}
