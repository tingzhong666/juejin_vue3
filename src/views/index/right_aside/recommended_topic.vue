<script setup>
import * as api from '@/http/api'
import { ref } from 'vue'
// 数据
const list = ref([])
const currentPage = ref(1)
const page = ref(10)
const getList = async () => {
  const res = await api.leaderboard.topic({})
  list.value.push(...res)
  list.value.forEach(v => {
    v.theme.hot = Math.floor(v.theme.hot / 1000) + 'k'
  })
}
getList()

// 数据翻页
const handleCurrentChange = async () => {
  list.value.splice(0, list.value.length)
  page.value++
  await getList()
}
</script>

<template>
  <el-card class="recommended-topic">
    <div class="leaderboard-header">
      <span class="leaderboard-title">推荐话题</span>
      <div class="refresh-button">
        <el-icon class="refresh-icon">
          <RefreshRight />
        </el-icon>
        <span class="refresh-text" @click="handleCurrentChange">换一换</span>
      </div>
    </div>

    <div class="leaderboard-list">
      <div class="list-item" v-for="item of list" :key="item.theme.theme_id">
        <div class="topic-name">#{{ item.theme.name }}#</div>
        <div class="topic-hot">{{ item.theme.hot }}</div>
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
  cursor: pointer;
}

.topic-name {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
}

.topic-name:hover {
  color: var(--el-color-primary);
}

.topic-hot {
  width: 40px;
  text-align: right;
  font-size: 12px;
  color: var(--el-color-info);
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
}</style>
