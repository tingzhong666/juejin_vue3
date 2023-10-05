<script setup>
import * as api from '@/http/api'
import { ref } from 'vue';
import myLi from './li.vue'

const list = ref([])
async function getList() {
  list.value.push(...await api.boilingPoint.getList())
}
getList()
</script>

<template>
  <div class="component">
    <myLi v-for="item of list" :key="item.id" :options="item"/>
  </div>
</template>

<style scoped>

</style>
