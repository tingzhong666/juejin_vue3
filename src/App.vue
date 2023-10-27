<script setup>
import GlobalTap from '@/components/global_tap.vue'
import GlobalSuspension from '@/components/global_suspension.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const global_tap_ref = ref(null)

const global_tap_scroll = ref(false)
async function window_scroll_event(){
  // 超过200 向上移动60
  if(window.scrollY > 200) global_tap_scroll.value = true
  else global_tap_scroll.value = false
}

onMounted(async () => {
  window.addEventListener('scroll', window_scroll_event)
  global_tap_ref.value.$el.style.width = window.innerWidth + 'px'
})
onUnmounted(async () => {
  window.removeEventListener('scroll', window_scroll_event)
})
</script>

<template>
  <div class="app">
    <!-- 全局顶部 -->
    <GlobalTap class="global_tap" :class="{ global_tap_scroll: global_tap_scroll }" ref="global_tap_ref"/>
    
    <!-- 路由页面 -->
    <RouterView :key="$route.fullPath" class="router-view"/>

    <!-- 全局 功能按钮 -->
    <GlobalSuspension></GlobalSuspension>
  </div>
</template>

<style scoped>
.app{
  padding-top: 60px;
}

.global_tap{
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.2s linear;
  z-index: 99999999;
}
.global_tap_scroll{
  top: calc(var(--my-global_tap_height) * -1);
}

.router-view{
  margin-top: 20px;
}
</style>
