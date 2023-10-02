<script setup>
import left_aside from './left_aside.vue'
import mymain from './main/main.vue'
import right_aside from './right_aside.vue'
import { ref, onMounted, onUnmounted } from 'vue'
let category = ref('recommended')


const aside_left_scroll = ref(false)
async function window_scroll_event(){
  // 超过200 向上移动60
  if(window.scrollY > 200) aside_left_scroll.value = true
  else aside_left_scroll.value = false
}

onMounted(async () => {
  window.addEventListener('scroll', window_scroll_event)
})
onUnmounted(async () => {
  window.removeEventListener('scroll', window_scroll_event)
})
</script>

<template>
  <div>
    <el-container class="container">
      <!-- 左侧栏 -->
      <el-aside width="176px" class="aside_left" :class="{ aside_left_scroll }"><left_aside v-model:category="category"/></el-aside>
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
.aside_left{
  position: fixed;
  z-index: 9999;
  transition: all 0.2s linear;
}
.aside_left_scroll{
  transform: translateY(calc(-1 * var(--my-global_tap_height)));
}
.main{
  padding-top: 0;
  margin-left: 176px;
}

</style>
