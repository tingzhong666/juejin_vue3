<script setup>
import ActionComment from '@/components/action_comment.vue'
import GiveLike from '@/components/give_like.vue'
import Trial from '@/components/Trial.vue'
import LevelTag from '@/components/level_tag.vue'
import UserPopover from '@/components/user_popover.vue'
import CommentForm from '@/components/comment/comment_form.vue'
import { ref } from 'vue'
const props = defineProps({
  data: {
    type: Object,
    default: () => {
      return {}
    }
  },
})

// 评论
const commentlisttwoShow = ref(false)
const refCommentForm = ref(null)
const refActionComment = ref(null)
const updateCommentStatus = function (v) {
  commentlisttwoShow.value = v
  if (commentlisttwoShow.value) refCommentForm.value.focus()
}
const blurCommentForm = function () {
  // commentlisttwoShow.value = false
  // refActionComment.value.commentStatusSet(commentlisttwoShow.value)
}
</script>

<template>
  <div class="my-commenti-li">
    <div class="avatar">
      <UserPopover>
        <img :src="data.author.avatar" />
      </UserPopover>
    </div>
    <div class="right">
      <div class="head">
        <UserPopover>
          <template #default>
            <span class="head-user-info">
              <span class="name">{{ data.author.name }}</span>
              <!-- 掘友等级 创作者等级 -->
              <LevelTag :level="data.author.user_level" :mode="1" class="user-Level"></LevelTag>
              <LevelTag :level="data.author.author_level" :mode="2" class="author-level"></LevelTag>
            </span>
          </template>
        </UserPopover>
        <slot name="intro">
          <span class="intro">{{ data.author.intro }}</span>
        </slot>
        <span class="create-time">{{ data.created_at }}</span>
      </div>
      <div class="content">{{ data.content }}</div>
      <slot name="content-bottom"></slot>
      <div class="action">
        <GiveLike :star_n="data.star_n" :star_status="data.star_status" class="action-item" />
        <ActionComment ref="refActionComment" :comment_n="data.comment_n" class="action-item" @update:comment-status="updateCommentStatus" />
        <Trial :author-name="data.author.name" :dislike-item-show="true" class="action-item" />
      </div>
      <CommentForm @blur="blurCommentForm" ref="refCommentForm" class="my-comment-form" v-show="commentlisttwoShow">
      </CommentForm>
      <slot name="comment-form-bottom"></slot>
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
  cursor: pointer;
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

.head-user-info {
  cursor: pointer;
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

.my-comment-form {
  margin-top: 20px;
  background-color: var(--el-color-info-light-9);
}
</style>
