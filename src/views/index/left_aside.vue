<script setup>
import { reactive } from "vue"
import { useRoute } from "vue-router";

const props = defineProps(['category'])
const emit = defineEmits(['update:category'])

const path_current = useRoute().path == '/' ? '/recommended' : useRoute().path
const list = reactive([
  { text: '关注', categoty: 'following', path: '/following', icon: 'icon-heyue' },
  { text: '综合', categoty: 'recommended', path: '/recommended', icon: 'icon-compass-full' },
  { text: '后端', categoty: 'backend', path: '/backend', icon: 'icon-data' },
  { text: '前端', categoty: 'frontend', path: '/frontend', icon: 'icon-developer-fill' },
  { text: 'Android', categoty: 'android', path: '/android', icon: 'icon-android' },
  { text: 'IOS', categoty: 'ios', path: '/ios', icon: 'icon-iOS' },
  { text: '人工智能', categoty: 'ai', path: '/ai', icon: 'icon-fenxichaxun' },
  { text: '开发工具', categoty: 'freebie', path: '/freebie', icon: 'icon-banshou_Line' },
  { text: '代码人生', categoty: 'career', path: '/career', icon: 'icon-wendangguanli-xiangmuleiwendang' },
  { text: '阅读', categoty: 'article', path: '/article', icon: 'icon--books' },
  { text: '排行榜', path: '/hot/articles', icon: 'icon-xiehuifuwu' }
])
emit('update:category', list.find(v => path_current == v.path).categoty)
</script>

<template>
  <div>
    <el-card class="card">
      <el-menu :default-active="path_current" class="menu" router>
        <el-menu-item v-for=" item in list" :index="item.path" :key="item.path" class="item">
          <span :class="item.icon + ' iconfont'"></span>
          {{ item.text }}
        </el-menu-item>
      </el-menu>
    </el-card>
  </div>
</template>

<style scoped>
.card {
  width: 176px;
}

.card:deep(.el-card__body) {
  padding: 10px;
}

.menu {
  border: 0;
}

.menu .item {
  transition-duration: 0s;
  color: var(--el-text-color-regular);
  border-radius: 5px;
  height: 45px;
}

.menu .item:hover,
.menu .item.is-active {
  background-color: var(--el-color-info-light-9);
  color: var(--el-color-primary);
}

.menu .item .iconfont {
  margin-right: 10px;
}
</style>
