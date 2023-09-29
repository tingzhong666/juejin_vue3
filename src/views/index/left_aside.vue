<script setup>
import { reactive } from "vue"
import { useRoute } from "vue-router";

const list = reactive([
  { text: '关注', path: '/following', icon: 'icon-heyue' },
  { text: '综合', path: '/recommended', icon: 'icon-compass-full' },
  { text: '后端', path: '/backend', icon: 'icon-data' },
  { text: '前端', path: '/frontend', icon: 'icon-developer-fill' },
  { text: 'Android', path: '/android', icon: 'icon-android' },
  { text: 'IOS', path: '/ios', icon: 'icon-iOS' },
  { text: '人工智能', path: '/ai', icon: 'icon-fenxichaxun' },
  { text: '开发工具', path: '/freebie', icon: 'icon-banshou_Line' },
  { text: '代码人生', path: '/career', icon: 'icon-wendangguanli-xiangmuleiwendang' },
  { text: '阅读', path: '/article', icon: 'icon--books' },
  { text: '排行榜', path: '/hot/articles', icon: 'icon-xiehuifuwu' }
])

</script>

<template>
  <div>
    <el-card class="card">
      <el-menu
        :default-active="useRoute().path"
        class="menu"
        router
      >
        <el-menu-item v-for=" item in list" :index="item.path" :key="item.path" class="item">
          <span :class="item.icon + ' iconfont'"></span>
          {{ item.text }}
        </el-menu-item>
      </el-menu>
    </el-card>
  </div>
</template>

<style scoped>
.card{
  width: 176px;
}
.card >>> .el-card__body{
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
.menu .item.is-active{
  background-color: var(--el-color-info-light-9);
  color: var(--el-color-primary);
}

.menu .item .iconfont{
  margin-right: 10px;
}
</style>
