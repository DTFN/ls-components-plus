<script setup lang="ts">
defineProps({
  url: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div>
    <video v-if="url" class="video-container" controls muted>
      <source :src="url" type="video/mp4" />
    </video>
  </div>
</template>

<style lang="scss" scoped>
.video-container {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
