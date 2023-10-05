<script setup>
import publish from './publish.vue'
import list from './list.vue'
</script>

<template>
  <div class="component">
    <publish/>

    <list class="list"/>
  </div>
</template>

<style scoped>
.list {
  margin-top: 20px;
}
</style>
