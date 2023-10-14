<script setup>
import ActionComment from '@/components/action_comment.vue'
import GiveLike from '@/components/give_like.vue'
import Trial from '@/components/Trial.vue'
import LevelTag from '@/components/level_tag.vue'
import { ref } from 'vue'
const props = defineProps({
  data: {
    type: Object,
    default: () => {
      return {}
    }
  },
})

const commentlisttwoShow = ref(false)
</script>

<template>
  <div class="my-commenti-li">
    <div class="avatar">
      <img :src="data.author.avatar" />
    </div>
    <div class="right">
      <div class="head">
        <span class="name">{{ data.author.name }}</span>
        <!-- 掘友等级 创作者等级 先不做 -->
        <LevelTag :level="data.author.user_level" :mode="1" class="user-Level"></LevelTag>
        <LevelTag :level="data.author.author_level" :mode="2" class="author-level"></LevelTag>
        <slot name="intro">
          <span class="intro">{{ data.author.intro }}</span>
        </slot>
        <span class="create-time">{{ data.created_at }}</span>
      </div>
      <div class="content">{{ data.content }}</div>
      <slot name="content-bottom"></slot>
      <div class="action">
        <GiveLike :star_n="data.star_n" :star_status="data.star_status" class="action-item" />
        <ActionComment :comment_n="data.comment_n" class="action-item"
          @update:comment-status="v => commentlisttwoShow = v" />
        <Trial :author-name="data.author.name" :dislike-item-show="true" class="action-item" />
      </div>
      <slot name="action-bottom"></slot>
    </div>
  </div>
</template>

<style scoped>
.my-commenti-li {
  display: flex;
  padding: 20px 0;
  width: 100%;
}

.avatar {
  padding-right: 10px;
}

.avatar img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.right {
  flex: 1;
}

.intro,
.create-time {
  color: var(--el-color-info-dark-2);
  font-size: var(--el-font-size-small);
}

.head .name,
.user-Level,
.author-level {
  display: inline-block;
  margin-right: 15px;
}

.intro {
  border-right: 2px solid var(--el-color-info-light-8);
  padding-right: 15px;
}

/* 内容 */
.content {
  font-size: var(--el-font-size-base);
  margin: 10px 0;
  color: var(--el-text-color-regular);
}

/* action */
.action-item {
  margin-right: 10px;
}

/* 二维评论 */
.comment-list-two {
  background-color: var(--el-color-info-light-9);
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
}
</style>
