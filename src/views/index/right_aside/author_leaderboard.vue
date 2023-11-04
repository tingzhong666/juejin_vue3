<script setup>
import { ref } from 'vue'
import * as api from '@/http/api'

// 数据
const list = ref([])
const getList = async () => {
  const res = await api.leaderboard.author({})
  list.value.push(...res)
}
getList()

// 关注
const follow = (id) => {
  // 关注
  // 取消关注
}
</script>

<template>
  <el-card class="author-leaderboard">
    <div class="leaderboard-header">
      <el-icon class="iconfont icon-yonghu"></el-icon>
      <span class="leaderboard-title">作者榜</span>
    </div>

    <div class="leaderboard-list">
      <div class="list-item" v-for="item of list" :key="item.user_info.user_id">
        <img class="author-image" :src="item.user_info.avatar_large" alt="">
        <div class="author-details">
          <div class="author-name">{{ item.user_info.user_name }}</div>
          <div class="author-info">
            <span v-if="item.user_info.job_title" class="job-title">{{ item.user_info.job_title }}</span>
            <span v-if="item.user_info.company" class="company">@{{ item.user_info.company }}</span>
          </div>
        </div>
        <div class="follow-button" @click="follow(item.user_info.user_id)">+关注</div>
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
  display: flex;
  align-items: center;
}

.icon-yonghu {
  color: var(--el-color-primary);
  margin-right: 10px;
  font-size: 20px;
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
  height: 44px;
  cursor: pointer;
  align-items: center;
}

.list-item:hover {
  background-color: var(--el-color-info-light-9);
}

.author-image {
  --side--length: 26px;
  width: var(--side--length);
  height: var(--side--length);
  border-radius: 50%;
  margin-right: 10px;
}

.author-details {
  /* flex: 1; */
  width: 70%;
}

.author-name {
  font-size: 14px;
}

.author-info {
  font-size: 12px;
  color: var(--el-color-info);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 90%;
}
.follow-button{
  font-size: 14px;
  color: var(--el-color-primary);
  width: 40px;
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
