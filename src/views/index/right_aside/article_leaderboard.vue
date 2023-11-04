<script setup>
import * as api from '@/http/api'
import { computed, ref } from 'vue'
// 数据
const list = ref([])
const getList = async () => {
  const res = await api.leaderboard.article({})
  list.value.push(...res)
}
getList()
// 数据分页
const page = ref(1)
const pageSize = ref(5)
const currenList = computed(() => {
  return list.value.filter((v, i) => {
    if (i >= pageSize.value * (page.value - 1) && i < pageSize.value * page.value) {
      v.i = i + 1
      return v
    }
  })
})
// 翻页
const handleCurrentChange = () => {
  page.value = page.value * pageSize.value === list.value.length ? 1 : page.value + 1
}
</script>

<template>
  <el-card class="article-leaderboard">
    <div class="leaderboard-header">
      <el-icon class="iconfont icon-wenzhang"></el-icon>
      <span class="leaderboard-title">文章榜</span>
      <div class="refresh-button">
        <el-icon class="refresh-icon">
          <RefreshRight />
        </el-icon>
        <span class="refresh-text" @click="handleCurrentChange">换一换</span>
      </div>
    </div>

    <div class="leaderboard-list">
      <div class="list-item" v-for="item of currenList" :key="item.content.content_id">
        <span class="item-i" :class="{ first: item.i === 1, second: item.i === 2, third: item.i === 3, }">{{ item.i
        }}</span>
        <span class="item-title">{{ item.content.title }}</span>
      </div>
    </div>

    <div class="more">
      <div class="more-text">查看更多</div>
      <el-icon>
        <ArrowRight />
      </el-icon>
    </div>
  </el-card>
</template>

<style scoped>
/* 头部 */
.leaderboard-header {
  position: relative;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--el-color-info-light-8);
  margin-bottom: 10px;
}

.icon-wenzhang {
  color: var(--el-color-warning);
  margin-right: 10px;
}

.refresh-button {
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  color: var(--el-color-info);
  font-size: 12px;
  display: flex;
  align-items: center;
}

.refresh-button:hover {
  color: var(--el-color-primary);
}

/* 列表 */
.leaderboard-list {
  padding-bottom: 10px;
  border-bottom: 1px solid var(--el-color-info-light-8);
  margin-bottom: 10px;
}

.list-item {
  display: flex;
  --height--: 30px;
  height: var(--height--);
  line-height: var(--height--);
}

.list-item:hover {
  background-color: var(--el-color-info-light-9);
}

.item-i {
  width: 26px;
  color: var(--el-color-info);
  font-weight: 700;
  font-size: 14px;
}

.item-i.first {
  color: transparent;
  background: linear-gradient(to bottom, rgb(255, 0, 0), rgb(255, 80, 0));
  background-clip: text;
  -webkit-background-clip: text;
}

.item-i.second {
  color: transparent;
  background: linear-gradient(to bottom, rgb(255, 80, 0), rgb(255, 160, 0));
  background-clip: text;
  -webkit-background-clip: text;
}

.item-i.third {
  color: transparent;
  background: linear-gradient(to bottom, rgb(255, 160, 0), rgb(255, 255, 0));
  background-clip: text;
  -webkit-background-clip: text;
}

.item-title {
  flex: 1;
  overflow: hidden;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--el-text-color-regular);
  cursor: pointer;
}

/* 更多 */
.more {
  text-align: center;
  font-size: 14px;
  color: var(--el-color-info);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
