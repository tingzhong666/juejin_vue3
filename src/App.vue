<script setup>
import global_tap from '@/components/global_tap.vue'
</script>

<template>
  <div class="app">
    <global_tap/>

    <RouterView />
  </div>
</template>

<style scoped>
.app{
  background-color: #f2f3f5;
}
</style>
