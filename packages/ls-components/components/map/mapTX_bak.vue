<template>
  <div id="container"></div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue';
import iconMarker from '@/assets/img/icon_marker.png';

const props = defineProps({
  nodeList: {
    type: Array,
    default: () => {
      return {};
    }
  }
});

watch(
  () => props.nodeList,
  async () => {
    await nextTick();
    setMarker();
  },
  {
    deep: true
  }
);

const mapKey = 'F32BZ-4XT6V-EOBPM-5YTY2-U5XS2-COBXJ';
const mapObj: any = ref(null);

function initMap() {
  const qqApi = (window as any).qq;

  const myOptions = {
    zoom: 14,
    minZoom: 6,
    maxZoom: 26,
    center: new qqApi.maps.LatLng(30.893647, 121.923358),
    mapTypeId: qqApi.maps.MapTypeId.ROADMAP,
    zoomControl: false,
    panControl: false,
    disableDefaultUI: true
  };
  mapObj.value = new qqApi.maps.Map(document.getElementById('container'), myOptions);

  setMarker();
}

function setMarker() {
  const qqApi = (window as any).qq;
  if (!qqApi.maps.LatLng) {
    return;
  }
  (props.nodeList || []).forEach(marker => {
    const { lnglat }: any = marker;
    const markerObj = new qqApi.maps.Marker({
      position: new qqApi.maps.LatLng(lnglat[1], lnglat[0]),
      map: mapObj.value
    });
    const anchor = new qqApi.maps.Point(20, 20);
    const size = new qqApi.maps.Size(31, 30);
    const origin = new qqApi.maps.Point(0, 0);
    const icon = new qqApi.maps.MarkerImage(iconMarker, size, origin, anchor);
    markerObj.setIcon(icon);

    setInfoWindow(marker, markerObj);
  });
}

function setInfoWindow(data: any, marker: any) {
  const qqApi = (window as any).qq;
  const info = new qqApi.maps.InfoWindow({
    map: mapObj.value
  });

  qqApi.maps.event.addListener(marker, 'click', function () {
    info.open();
    info.setContent(`<div class='point-wrap'>
      <div class='title'>已生产区块数</div>
      <div class='value'>${data.outBlockNum || 0}</div>
      <div class='title'>已存证Hash</div>
      <div class='value'>${data.saveProofNum || 0}</div>
      <div class='title'>地点</div>
      <div class='value'>${data.name || '--'}</div>
    </div>`);
    info.setPosition(marker.getPosition());
  });
}

(window as any).initMap = initMap;

function loadScript() {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = `https://map.qq.com/api/js?v=2.exp&key=${mapKey}&callback=initMap`;
  document.body.appendChild(script);
}

onMounted(() => {
  loadScript();
});
</script>

<style lang="scss" scoped>
#container {
  width: 100%;
  height: 390px;
}
:deep() .point-wrap {
  position: relative;
  box-sizing: border-box;
  min-width: 129px;
  padding: 8px 4px;
  .title {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    color: $theme-color;
  }
  .value {
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 700;
    line-height: 26px;
    color: #3d3d3d;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
