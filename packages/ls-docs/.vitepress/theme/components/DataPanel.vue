<script setup lang="ts"></script>

<template>
  <div class="panel">
    <!-- <div class="container">
      <section class="grid">
        <span class="text"> 本站总访问量 <span id="busuanzi_value_site_pv" class="font-bold">--</span> 次 </span>
        <img src="/heart.gif" alt="heart" width="50" height="50" />
        <span class="text"> 本站访客数 <span id="busuanzi_value_site_uv" class="font-bold">--</span> 人次 </span>
      </section>
    </div> -->
  </div>
</template>

<style scoped>
.panel {
  margin-top: 12px;
  margin-bottom: 8px;
}
.container {
  width: 100%;
  max-width: 1152px;
  min-height: 32px;
  margin-right: auto;
  margin-left: auto;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  place-items: center center;
  padding: 12px;
  font-weight: 500;
}
.text {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
</style>
