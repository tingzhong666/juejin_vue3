<script setup>
import left_aside from './left_aside.vue'
import mymain from './main/main.vue'
import right_aside from './right_aside.vue'
import { ref } from 'vue'
let category = ref('recommended')
</script>

<template>
  <div>
    <el-container class="container">
      <!-- 左侧栏 -->
      <el-aside width="176px"><left_aside v-model:category="category"/></el-aside>
      <!-- 列表 -->
      <el-main class="main"><mymain :category="category"/></el-main>
      <!-- 右侧栏 -->
      <el-aside><right_aside/></el-aside>
    </el-container>
  </div>
</template>

<style scoped>
.container{
  width: 1230px;
  margin: 0 auto;
  margin-top: 20px;
}
.main{
  padding-top: 0;
}
</style>
