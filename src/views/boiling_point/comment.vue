<script setup>
import Comment from '@/components//Comment/Comment.vue'
import * as api from '@/http/api'
import { ref } from 'vue'

const props = defineProps(['id','authorId'])

// 评论数据
const list = ref([])
async function getList() {
  const res = await api.boilingPoint.comment.getCommentList({ id: props.id })
  list.value.push(...res)
}
getList()

// 评论数
const count = ref(0)
async function getCount() {
  count.value = await api.boilingPoint.comment.getCommentTotal({ id: props.id })
}
getCount()
</script>

<template>
  <div class="comment">
    <Comment :list="list" :author-id="authorId" :count="count"></Comment>
  </div>
</template>

<style scoped></style>
