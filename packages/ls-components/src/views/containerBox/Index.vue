<script setup lang="ts">
const width = ref(1920)
const height = ref(1080)
const scale = ref(1)

const customWidth = ref(800)
const customHeight = ref(600)
const customScale = ref(0.5)

const mobileWidth = ref(375)
const mobileHeight = ref(812)
const mobileScale = ref(0.6)

function onResize() {
  const container = document.querySelector('.container-box-demo .demo-section') as HTMLElement
  if (!container)
    return
  const w = container.clientWidth - 48
  scale.value = Number((w / width.value).toFixed(3))
}

onMounted(() => {
  onResize()
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <div class="container-box-demo">
    <h2>容器盒子 LSContainerBox</h2>

    <div class="demo-section">
      <h3>大屏自适应容器</h3>
      <p class="desc">
        容器盒子用于大屏可视化场景，内部按照 1920×1080 设计稿编写，通过 scale 等比例缩放适配不同屏幕。
      </p>
      <div class="demo-toolbar">
        <span>设计稿：{{ width }}×{{ height }}</span>
        <span>当前缩放比例：{{ scale }}</span>
      </div>
      <div class="box-wrap">
        <LSContainerBox :width="width" :height="height" :style="{ transform: `scale(${scale})`, transformOrigin: 'top left' }">
          <div class="screen-content">
            <div class="screen-header">
              <h1>数据可视化大屏</h1>
            </div>
            <div class="screen-body">
              <div class="panel">
                <h4> panel A</h4>
                <div class="panel-value">
                  1,234
                </div>
              </div>
              <div class="panel">
                <h4> panel B</h4>
                <div class="panel-value">
                  5,678
                </div>
              </div>
              <div class="panel">
                <h4> panel C</h4>
                <div class="panel-value">
                  9,012
                </div>
              </div>
            </div>
          </div>
        </LSContainerBox>
      </div>
    </div>

    <div class="demo-section">
      <h3>自定义尺寸</h3>
      <p class="desc">
        通过 width 和 height 自定义容器设计稿尺寸，适配非 1920×1080 的场景。
      </p>
      <div class="demo-toolbar">
        <span>设计稿：{{ customWidth }}×{{ customHeight }}</span>
        <span>缩放比例：{{ customScale }}</span>
      </div>
      <div class="box-wrap" style="width: 400px; height: 300px;">
        <LSContainerBox :width="customWidth" :height="customHeight" :style="{ transform: `scale(${customScale})`, transformOrigin: 'top left' }">
          <div class="screen-content" style="background: linear-gradient(135deg, #1e3a8a, #0f766e);">
            <div class="screen-header">
              <h1>自定义尺寸</h1>
            </div>
            <div class="screen-body">
              <div class="panel">
                <h4> 800×600</h4>
                <div class="panel-value">
                  scale 0.5
                </div>
              </div>
            </div>
          </div>
        </LSContainerBox>
      </div>
    </div>

    <div class="demo-section">
      <h3>移动端适配</h3>
      <p class="desc">
        按照 375×812 设计稿编写，适用于移动端 H5 大屏或竖屏展示场景。
      </p>
      <div class="demo-toolbar">
        <span>设计稿：{{ mobileWidth }}×{{ mobileHeight }}</span>
        <span>缩放比例：{{ mobileScale }}</span>
      </div>
      <div class="box-wrap mobile-wrap" style="width: 260px; height: 520px;">
        <LSContainerBox :width="mobileWidth" :height="mobileHeight" :style="{ transform: `scale(${mobileScale})`, transformOrigin: 'top left' }">
          <div class="screen-content mobile-content">
            <div class="screen-header mobile-header">
              <h1>移动大屏</h1>
            </div>
            <div class="screen-body mobile-body">
              <div class="panel mobile-panel">
                <h4>实时数据</h4>
                <div class="panel-value">
                  8,888
                </div>
              </div>
              <div class="panel mobile-panel">
                <h4>在线设备</h4>
                <div class="panel-value">
                  128
                </div>
              </div>
            </div>
          </div>
        </LSContainerBox>
      </div>
    </div>

    <div class="demo-section">
      <h3>嵌套交互内容</h3>
      <p class="desc">
        容器内部可放置按钮、表单等交互组件，缩放后交互事件位置自动适配。
      </p>
      <div class="box-wrap" style="width: 100%; height: 200px;">
        <LSContainerBox :width="1200" :height="400" style="transform: scale(0.4); transform-origin: top left;">
          <div class="screen-content interact-content">
            <div class="screen-header">
              <h1>交互内容示例</h1>
            </div>
            <div class="screen-body">
              <div class="panel">
                <h4>操作面板</h4>
                <div class="interact-btns">
                  <el-button type="primary">
                    新增
                  </el-button>
                  <el-button type="success">
                    保存
                  </el-button>
                  <el-button type="danger">
                    删除
                  </el-button>
                </div>
              </div>
            </div>
          </div>
        </LSContainerBox>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-box-demo {
  padding: 24px;
}
h2 {
  margin-bottom: 24px;
  font-size: 22px;
}
.demo-section {
  padding: 20px;
  margin-bottom: 24px;
  background: #ffffff;
  border: 1px solid #e4e7ed;
  border-radius: 8px;
  h3 {
    margin-bottom: 12px;
    font-size: 16px;
    color: #303133;
  }
  .desc {
    margin-bottom: 16px;
    font-size: 14px;
    color: #606266;
  }
}
.demo-toolbar {
  display: flex;
  gap: 24px;
  align-items: center;
  margin-bottom: 12px;
  font-size: 13px;
  color: #606266;
}
.box-wrap {
  overflow: hidden;
  background: #0b1120;
  border-radius: 8px;
}
.screen-content {
  width: 1920px;
  height: 1080px;
  color: #ffffff;
  background: linear-gradient(135deg, #0f172a, #1e293b);
}
.screen-header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  h1 {
    margin: 0;
    font-size: 48px;
    font-weight: 700;
    letter-spacing: 4px;
  }
}
.screen-body {
  display: flex;
  gap: 40px;
  justify-content: center;
  padding: 40px;
}
.panel {
  width: 520px;
  height: 760px;
  padding: 24px;
  background: rgb(255 255 255 / 6%);
  border: 1px solid rgb(255 255 255 / 10%);
  border-radius: 12px;
  h4 {
    margin: 0 0 16px;
    font-size: 24px;
    color: #94a3b8;
  }
}
.panel-value {
  font-size: 72px;
  font-weight: 700;
  color: #38bdf8;
}
.mobile-content {
  width: 375px !important;
  height: 812px !important;
  background: linear-gradient(135deg, #4c1d95, #831843);
}
.mobile-header {
  height: 100px;
  h1 {
    font-size: 32px;
    letter-spacing: 2px;
  }
}
.mobile-body {
  flex-direction: column;
  gap: 24px;
  padding: 24px;
}
.mobile-panel {
  width: 327px;
  height: 280px;
  h4 {
    font-size: 18px;
  }
  .panel-value {
    font-size: 48px;
  }
}
.interact-content {
  h1 {
    font-size: 36px;
  }
}
.interact-btns {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 20px;
  :deep(.el-button) {
    font-size: 20px;
    height: 48px;
    padding: 0 24px;
  }
}
</style>
