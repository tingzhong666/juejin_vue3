<script setup>
import Comment from '@/components//Comment/Comment.vue'
import * as api from '@/http/api'
import { ref } from 'vue'
const props = defineProps(['id','authorId'])
const list = ref([])
async function getList() {
  const res = await api.boilingPoint.comment.getCommentList({ id: props.id })
  list.value.push(...res)
}
getList()
</script>

<template>
  <div class="comment">
    <Comment :list="list" :author-id="authorId"></Comment>
  </div>
</template>

<style scoped></style>
