<script setup>
import left_aside from './index/left_aside.vue'
import mymain from './index/main.vue'
import right_aside from './index/right_aside.vue'
</script>

<template>
  <div>
    <el-container class="container">
      <!-- 左侧栏 -->
      <el-aside width="176px"><left_aside/></el-aside>
      <!-- 列表 -->
      <el-main><mymain/></el-main>
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
</style>
