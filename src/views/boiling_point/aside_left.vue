<script setup>
import * as api from '@/http/api.js'
import {  onMounted, onUnmounted, reactive, ref } from 'vue';
import { useCounterStore } from '@/stores/counter.js'
import { useRoute } from 'vue-router';

const myclub = reactive([])
const club = reactive([])
const scrollbar = ref(null)

async function main(){
  // 获取我的圈子
  myclub.push(...await api.myclub.get_list({ user_id: useCounterStore }))
  // 获取圈子
  club.push(...(await api.club.get_list()).splice(0, 5))
}
main()

async function resize_event(){
  scrollbar.value.$el.style.height = window.innerHeight - 100 + 'px'
}
window.addEventListener('resize', resize_event)

onMounted(async () => {
  resize_event()
})
onUnmounted(async () => {
  window.removeEventListener('resize', resize_event)
})
</script>

<template>
  <div class="component">
    <el-scrollbar ref="scrollbar" class="scrollbar">
      <el-card class="card">
        <el-menu
          :default-active="useRoute().path == '/boiling_point' ? '/boiling_point/new' : useRoute().path"
          router
          class="menu"
        >
          <el-menu-item index="/boiling_point/new" class="menu-item">
            <el-icon class="iconfont icon-shijian"></el-icon>
            <span>最新</span>
          </el-menu-item>
          <el-menu-item index="/boiling_point/hot" class="menu-item">
            <el-icon  class="iconfont icon-remenx"></el-icon>
            <span>热门</span>
          </el-menu-item>
          <el-menu-item index="/boiling_point/following" class="menu-item">
            <el-icon class="iconfont icon-heyue"></el-icon>
            <span>关注</span>
          </el-menu-item>
          <el-sub-menu
            index="/boiling_point/myclu"
            class="sub-menu"
            :show-timeout="0"
            :hide-timeout="0">
            <template #title>
              <div class="menu-item">
                <el-icon class="iconfont icon-quanzi-xuanzhong"></el-icon>
                <span>我的圈子</span>
              </div>
            </template>
            <el-menu-item class="menu-item" :index="'/boiling_point/myclub/' + item.id" v-for="item in myclub" :key="item.id">{{ item.name }}</el-menu-item>
          </el-sub-menu>
          <el-sub-menu
            index="/boiling_point/club"
            class="sub-menu"
            :show-timeout="0"
            :hide-timeout="0">
            <template #title class="menu-item">
              <div class="menu-item">
                <el-icon class="iconfont icon-tianchongxing-"></el-icon>
                <span>推荐圈子</span>
              </div>
            </template>
            <el-menu-item class="menu-item" :index="'/boiling_point/club/' + item.id" v-for="item in club" :key="item.id">{{ item.name }}</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-card>
    </el-scrollbar>
  </div>
</template>

<style scoped>
.component{
  border-radius: 3px;
}
.scrollbar{
  overflow: auto;
}
.card:deep(.el-card__body) {
  padding: 10px;
}
.menu {
  border: 0;
}

.menu-item,
.sub-menu{
  color: var(--el-text-color-regular);
  margin-bottom: 3px;
}
.menu-item:hover,
.sub-menu:hover{
  background-color: var(--el-color-info-light-9);
}
.menu-item.is-active {
  background-color: var(--el-color-primary-light-9);
  border-radius: 5px;
  color: var(--el-color-primary);
}
.sub-menu:deep(.el-sub-menu__icon-arrow) {
  display: none;
}
</style>
