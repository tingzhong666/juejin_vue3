<script setup>
import * as api from '@/http/api'
import commenti_li from './commenti_li.vue'
import { ref } from 'vue'
import CommentForm from '@/components/comment_form.vue'
import { useCounterStore } from '@/stores/counter.js'
const counter = useCounterStore()

const props = defineProps(['id'])

const list = ref([])
async function getList() {
  const res = await api.boilingPoint.comment.getCommentList({ id: props.id })
  list.value.push(...res)
}
getList()

</script>

<template>
  <div class="my-comment">
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
      <commenti_li v-for="item of list" :key="item.id" :data="item" class="comment" :boiling-point-author-id="id" />
    </div>
    <!-- 查看更多评论 进入沸点详情 -->
    <div class="fetch-more-comment"></div>
  </div>
</template>

<style scoped>
.my-comment-form {
  display: flex;
}

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
