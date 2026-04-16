<script setup lang="ts" name="LSMap">
/**
 * @summary 地图组件 - 基于高德地图的二次封装
 *
 * 这是自研库的地图组件，基于高德地图JSAPI实现。
 * 支持地图加载、区域搜索、标记点、多边形绘制等功能。
 *
 * @attr {string} mapKey - 高德地图Key
 * @attr {string} securityCode - 安全密钥
 * @attr {number[]} center - 地图中心坐标
 * @attr {number} zoom - 缩放级别
 * @attr {number[]} zooms - 缩放范围
 * @attr {string} searchWord - 搜索区域关键词
 * @attr {any[]} markers - 标记点数据
 * @attr {string} width - 地图宽度
 * @attr {string} height - 地图高度
 *
 * @slot 无
 *
 * @event 无
 *
 * @csspart map - 地图容器
 *
 * @example
 * <!-- 基础地图 -->
 * <LSMap
 *   mapKey="your-amap-key"
 *   securityCode="your-security-code"
 *   :center="[116.397428, 39.90923]"
 *   :zoom="13"
 * />
 */
import AMapLoader from '@amap/amap-jsapi-loader'
import { useNamespace } from '@cpo/_hooks/useNamespace'
import markerIcon from '@cpo/map/mark_icon.png'
import { lsMapProps } from './types'

const props = defineProps(lsMapProps)
const ns = useNamespace('map')
const comClass: string = ns.b()

const containerId = ref(`lsMapContainer${new Date().getTime()}`)

const mapObj: any = ref(null)
const aMap: any = ref(null)

const comStyle = computed(() => {
  return {
    width: `${props.width}`,
    height: `${props.height}`,
  }
})

watch(
  () => props.securityCode,
  (val: any) => {
    (window as any)._AMapSecurityConfig = {
      securityJsCode: val,
    }
  },
  {
    immediate: true,
    deep: true,
  },
)

function initMap() {
  if (!props.mapKey) {
    return
  }
  AMapLoader.load({
    key: props.mapKey, // 申请好的Web端开发者Key，首次调用 load 时必填
    version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ['AMap.DistrictSearch'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  }).then((AMap) => {
    aMap.value = AMap

    if (props.searchWord) {
      const district = new AMap.DistrictSearch({ subdistrict: 0, level: 'district', extensions: 'all' })
      district.search(props.searchWord, (status: any, result: any) => {
        createMap(AMap, result)
      })
    }
    else {
      createMap(AMap)
    }
  })
}

function createMap(AMap: any, result?: any) {
  mapObj.value = new AMap.Map(containerId.value, {
    center: props.center,
    zoom: props.zoom,
    zooms: props.zooms,
    expandZoomRange: true,
  })
  mapObj.value && createArea(AMap, mapObj, result)
}

function createArea(AMap: any, map: any, result?: any) {
  if (result) {
    const outer = [
      new AMap.LngLat(-360, 90, true),
      new AMap.LngLat(-360, -90, true),
      new AMap.LngLat(360, -90, true),
      new AMap.LngLat(360, 90, true),
    ]
    const holes = result?.districtList[0]?.boundaries || []
    const pathArray = [outer]
    // eslint-disable-next-line prefer-spread
    pathArray.push.apply(pathArray, holes)
    const polygon = new AMap.Polygon({
      pathL: pathArray,
      strokeColor: props.areaColor,
      strokeWeight: 0,
      fillColor: props.areaColor,
      fillOpacity: 1,
    })
    polygon.setPath(pathArray)
    map.value.add(polygon)
  }

  props.showMarker && addMarker(AMap, map)
}

function createMarkerIcon(AMap: any) {
  const size = new AMap.Size(props.markerIconSize[0], props.markerIconSize[1])

  return new AMap.Icon({
    size, // 图标尺寸
    image: props.markerIcon || markerIcon, // Icon 的图像
    imageSize: size,
  })
}

function addMarker(AMap: any, map: any) {
  const icon = createMarkerIcon(AMap);
  (props.markerList || []).forEach((item: any) => {
    const markerInstance = new AMap.Marker({
      position: item.lnglat,
      icon,
    })

    if (props.showMarkerDialog && props.markerDialogContent) {
      const infoWindow = new AMap.InfoWindow({
        isCustom: true,
        content: props.markerDialogContent,
        anchor: props.markerDialogAnchor,
        offset: new AMap.Pixel(props.markerDialogOffset[0], props.markerDialogOffset[1]),
      })

      // 鼠标移入
      markerInstance.on('mouseover', () => {
        infoWindow.open(map.value, markerInstance.getPosition())
      })
      // 鼠标移出
      markerInstance.on('mouseout', () => {
        infoWindow.close()
      })
    }
    map.value.add(markerInstance)
  })
}

watch(
  () => props.markerList,
  async () => {
    await nextTick()

    if (aMap.value && mapObj.value) {
      props.showMarker && addMarker(aMap.value, mapObj)
    }
  },
  {
    deep: true,
  },
)

onMounted(() => {
  initMap()
})

onUnmounted(() => {
  mapObj.value && mapObj.value.destroy()
})
</script>

<template>
  <div :id="containerId" :class="comClass" :style="comStyle"></div>
</template>

<style lang="scss" scoped>
.ls-map {
  width: 100%;
}
:deep(.amap-logo) {
  display: none !important;
}
:deep(.amap-copyright) {
  display: none !important;
}
</style>
