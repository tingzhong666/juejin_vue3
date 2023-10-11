<script setup>
import { ref } from 'vue'
import HeaderOne from './headerOne.vue'
import HeaderTwo from './headerTwo.vue'
const header = ref(1)
</script>

<template>
  <el-card class="main">
    <!-- 筛选与排序 -->
    <HeaderOne v-if="header === 1" @to-search="header=2"></HeaderOne>
    <!-- 搜索 -->
    <HeaderTwo v-if="header === 2"></HeaderTwo>
    <!-- 课程列表 -->
  </el-card>
</template>

<style scoped>
</style>
