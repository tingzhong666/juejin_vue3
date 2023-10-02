<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import aside_left from './aside_left.vue'

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
  <div class="view">
    <el-container class="container">
      <el-aside class="aside-left" :class="{ 'aside-left-scroll': aside_left_scroll }" width="180"><aside_left/></el-aside>
      <el-main class="main">主体</el-main>
      <el-aside class="aside-right">侧边信息</el-aside>
    </el-container>
  </div>
</template>

<style scoped>
.main,
.aside-right{
  background-color: #fff;
  border: 1px solid #000;
  height: 2000px;
}

.container{
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
}
.aside-left{
  position: fixed;
  /* top: 100px; */
  transition: all 0.2s linear;
}
.aside-left-scroll{
  transform: translateY(calc(var(--my-global_tap_height) * -1));
}
.main {
  margin: 0 20px;
  margin-left: 190px;
}

</style>
