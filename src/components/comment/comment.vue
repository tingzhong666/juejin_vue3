<script setup>
import CommentTwo from './comment_two.vue'
import CommentForm from '@/components/comment/comment_form.vue'
import { useCounterStore } from '@/stores/counter.js'
const counter = useCounterStore()

const props = defineProps({
  authorId:{
    type: String,
    default: ''
  },
  list:{
    type: Array,
    default: []
  },
  count:{
    type: Number,
    default: 0
  },
})
</script>

<template>
  <div class="my-comment">
    <!-- 标题 -->
    <div class="head">评论 {{ count }}</div>
    <!-- 评论编辑 -->
    <div class="comment-form">
      <!-- 头像 -->
      <img :src="counter.userinfo.avatar" alt="" class="avatar">

      <CommentForm class="my-form-box"></CommentForm>
    </div>

    <!-- 评论排序 -->
    <div class="sort">

    </div>
    <!-- 评论列表 -->
    <div class="comment-list">
      <CommentTwo v-for="item of list" :key="item.id" :data="item" class="comment" :author-id="authorId" />
    </div>
    <!-- 查看更多评论 进入沸点详情 -->
    <div class="fetch-more-comment"></div>
  </div>
</template>

<style scoped>
.my-comment-form {
  display: flex;
}
/* 标题 */
.head{
  margin-bottom: 20px;
  font-size: 16px;
}
/* 评论编辑 */
.comment-form {
  display: flex;
}

.comment-form .avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 14px;
}

.comment-form .my-form-box {
  flex: 1;
}

/* 评论列表 */
.comment-list .comment {
  border-bottom: 1px solid var(--el-color-info-light-8);
}

.comment-list .comment:last-child {
  border: 0;
}
</style>
