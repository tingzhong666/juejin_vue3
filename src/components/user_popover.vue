<script setup>
import * as api from '@/http/api'
import { ref } from 'vue'
import LevelTag from '@/components/Level_Tag.vue'

const props = defineProps(['id'])
const data = ref({})
async function getData() {
  const res = await api.user.getUserInfo({ id: props.id })
  data.value = res
}
getData()
</script>

<template>
  <el-popover placement="top-start" :width="300" trigger="hover" class="user-popover">
    <template #reference>
      <slot name="default"></slot>
    </template>
    <template #default>
      <div class="top-start-container">
        <div class="header">
          <!-- 头秀 -->
          <img class="profile-image" :src="data.avatar_large" alt="">
          <div class="profile-info">
            <div class="author-info">
              <!-- 作者昵称 -->
              <div class="author-nickname author-info-item" :title="data.user_name">{{ data.user_name }}</div>
              <!-- 创作者等级 -->
              <LevelTag class="creator-level author-info-item" :mode="2"
                :level="data.user_growth_info && data.user_growth_info.jpower_level"></LevelTag>
              <!-- 掘友等级 -->
              <LevelTag class="jueryou-level author-info-item" :mode="1"
                :level="data.user_growth_info && data.user_growth_info.jscore_level"></LevelTag>
            </div>
            <div class="profession-company">
              <!-- 职业与公司 -->
              {{ data.job_title }}{{ ' @ ' }}{{ data.company }}
            </div>
          </div>
        </div>

        <div class="buttons">
          <!-- 关注按钮 -->
          <el-button type="primary" class="follow-button buttons-item">关注</el-button>
          <!-- 私信按钮 -->
          <el-button type="primary" plain class="message-button buttons-item">私信</el-button>
        </div>

        <div class="follow-stats">
          <!-- 关注的数量 -->
          <div class="following-count follow-stats-item">
            <!-- 数量 -->
            <div class="count-number">{{ data.followee_count }}</div>
            <div class="count-label">关注</div>
          </div>
          <!-- 粉丝的数量 -->
          <div class="followers-count follow-stats-item">
            <!-- 数量 -->
            <div class="count-number">{{ data.follower_count }}</div>
            <div class="count-label">粉丝</div>
          </div>
        </div>
      </div>

    </template>
  </el-popover>
</template>

<style scoped>
.header {
  display: flex;
  margin-bottom: 20px;
}

/* 头像 */
.profile-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}

.profile-info {
  flex: 1;
  padding: 0 10px;
}

.author-info {
  cursor: pointer;
}

.author-info-item {
  margin-right: 10px;
  display: inline-block;
  vertical-align: middle;
}

.author-nickname {
  width: 5rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

/* 按钮 */
.buttons {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  border-bottom: 1px solid var(--el-color-info-light-7);
  padding-bottom: 10px;
}

.buttons-item {
  width: 40%;
}

/* 统计 */
.follow-stats {
  display: flex;
  justify-content: space-between;
}

.follow-stats-item {
  flex: 1;
  text-align: center;
  cursor: pointer;
}

.count-label {
  color: var(--el-color-info-dark-2);
}</style>
