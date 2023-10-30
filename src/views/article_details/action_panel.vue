<script setup>
const props = defineProps({
  left: {
    type: Number,
    default: 0
  },
  top: {
    type: Number,
    default: 120
  },
  data: {
    type: Object,
    default: () => { }
  }
})
const emit = defineEmits([
  'comment-show' // 评论按钮点击
  ])

// 点赞
</script>

<template>
  <div class="action-panel" :style="{ left: left + 'px', top: top + 'px' }">
    <!-- 头像 -->
    <!-- 点赞 -->
    <el-card class="action-panel-item" :class="{ active: data.is_star }"><el-icon
        class="iconfont icon-dianzan_kuai"></el-icon>
      <!-- 点赞数 -->
      <div class="n">{{ data.star_n }}</div>
    </el-card>
    <!-- 评论 -->
    <el-card class="action-panel-item" @click="$emit('comment-show')"><el-icon class="iconfont icon-pinglun"></el-icon>
      <!-- 评论数 -->
      <div class="n">{{ data.comment_n }}</div>
    </el-card>
    <!-- 收藏 -->
    <el-card class="action-panel-item" :class="{ active: data.col_is }"><el-icon
        class="iconfont icon-shoucang"></el-icon>
      <!-- 收藏数 -->
      <div class="n">{{ data.col_n }}</div>
    </el-card>
    <!-- 分享 -->
    <el-card class="action-panel-item"><el-icon class="iconfont icon-arrow-"></el-icon></el-card>
    <!-- 举报 -->
    <el-card class="action-panel-item"><el-icon class="iconfont icon-jubao1"></el-icon></el-card>
    <!-- 沉浸阅读模式 -->
    <el-card class="action-panel-item"><el-icon class="iconfont icon-bg-fullscreen"></el-icon></el-card>
  </div>
</template>

<style scoped>
.action-panel {
  position: fixed;
}

.action-panel-item {
  border-radius: 50%;
  --length--: 50px;
  width: var(--length--);
  height: var(--length--);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 14px;
  cursor: pointer;
  color: var(--el-color-info-dark-2);
  position: relative;
  overflow: visible;
}

.action-panel-item.active {
  color: var(--el-color-primary);
}

.action-panel-item:hover {
  color: var(--el-text-color-primary);
}

.n {
  color: #fff;
  background-color: var(--el-color-info-light-3);
  border-radius: 50%;
  font-size: 12px;
  padding: 0px 4px;
  position: absolute;
  top: -4px;
  right: -4px;
  z-index: 100;
}
</style>
