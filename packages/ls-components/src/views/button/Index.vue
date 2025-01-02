<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue';
import SvgIconVue from '@/assets/vue.svg';
import SvgIconCount from '@/assets/count.svg';
import SvgIconDataIcv from '@/assets/data_icv.svg';
import m1 from '@/assets/m1.mp4?url';
import m2 from '@/assets/m2.mp4?url';
import { IconConfigType } from '@cpo/_types';

const iconName = ref('iconoir:fish');
const separatorColor = ref('red');

setTimeout(() => {
  separatorColor.value = 'blue';
  iconName.value = 'game-icons:whale-tail';
}, 2000);

const liveRef = ref();
const liveRef2 = ref();
const liveRef3 = ref();
const liveUrl = ref('http://192.168.2.144:10086/flv/live/9G3D6xLIg.flv');
const liveUrl2 = ref('https://video.shipin520.com/video_listen/588ku_video/21/03/15/12/06/22/video604edd3ee67a6.mp4');
liveUrl2.value = m1;
onMounted(() => {
  liveRef.value && liveRef.value.createPlayer(liveUrl);
  liveRef2.value && liveRef2.value.createPlayer(liveUrl2);
  liveRef3.value && liveRef3.value.createPlayer(m2);
});

const isShow = ref(false);

setTimeout(() => {
  isShow.value = true;
}, 2000);

const iconConfig: Ref<IconConfigType> = ref({ type: 1, name: 'mingcute:look-left-fill' });
</script>

<template>
  <div>
    <LSButton :icon="Edit" />
    <LSButton :loading="true">按钮1</LSButton>
    <LSButton :icon-config="iconConfig"></LSButton>
    <LSButton :icon-config="{ type: 1, name: 'iconoir:fish', color: 'blue', width: 20, height: 20 }">按钮2</LSButton>
    <LSButton>
      <SvgIconDataIcv />
    </LSButton>
    <LSButton type="primary" :icon-config="{ name: 'Plus' }">
      <span>添加入池</span>
    </LSButton>

    <br />

    <LSButtonGroup type="primary" separator="|" :separator-color="separatorColor" :separator-size="12">
      <LSButton :icon="Edit" link>按钮3</LSButton>
      <LSButton :icon-config="{ type: 1, name: iconName }" link>按钮4</LSButton>
      <LSButton link>按钮5</LSButton>
    </LSButtonGroup>

    <br />

    <LSButtonGroup type="primary" separator="#" :separator-color="'green'" :separator-size="16">
      <LSButton :icon="Edit" link>按钮6</LSButton>
      <LSButton :icon-config="{ type: 1, name: iconName }" link>按钮7</LSButton>
      <LSButton link>
        <template #icon>
          <el-icon size="20"> <Edit /> </el-icon>
          <SvgIconVue />
        </template>
        按钮8</LSButton
      >
    </LSButtonGroup>

    <LSIcon :type="1" name="iconoir:fish" width="30" height="30" color="red" />
    <LSIcon name="HomeFilled" color="blue" />
    <LSIcon>
      <el-icon size="20">
        <Edit />
      </el-icon>
    </LSIcon>
    <LSIcon :type="2" :name="SvgIconVue" width="30" height="30" color="yellow" />
    <LSIcon :type="2" :name="SvgIconCount" width="30" height="30" color="orange" />
    <LSIcon :type="2" :name="SvgIconDataIcv" width="30" height="30" color="green" />
    <SvgIconVue />
    <LSIcon width="30" height="30">
      <SvgIconVue />
    </LSIcon>

    <br />

    <LSLive ref="liveRef" class="live-wrap" :autoplay="true" :muted="false" />

    <br />
    <LSLive ref="liveRef2" class="live-wrap" type="mp4" :is-live="false" :autoplay="false" :loop="false" />

    <br />

    <LSLive ref="liveRef3" class="live-wrap" type="mp4" :is-live="false" :autoplay="true" :loop="false" :muted="false" />

    <br />

    <LSButton v-auth="{ code: 'c', show: isShow }">test1</LSButton>
  </div>
</template>

<style lang="scss" scoped>
.live-wrap {
  width: 385px;
  height: 300px;
}
</style>
