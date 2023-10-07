<script setup>
import * as api from '@/http/api'
import commenti_li from './commenti_li.vue'
import { ref } from 'vue'

const props = defineProps(['id'])

const list = ref([])
async function getList() {
  const res = await api.boilingPoint.comment.getCommentList({ id: props.id })
  list.value.push(...res)
}
getList()

const input = ref('')
</script>

<template>
  <div class="component">
    <!-- 评论发送 -->
    <div class="comment-form">
      <!-- 头像 -->
      <div class="avatar">
        <!-- <img :src="" alt=""> -->
      </div>

      <div class="form-box">
        <el-input v-model="input" placeholder="输入评论（Enter换行，Ctrl + Enter发送）" />
        <!-- 行为 -->
        <div class="form-action">

        </div>
      </div>
    </div>
    <!-- 评论排序 -->
    <div class="sor">

    </div>
    <!-- 评论列表 -->
    <div class="comment-list">
      <commenti_li v-for="item of list" :key="item.id" :data="item" class="comment"/>
    </div>
    <!-- 查看更多评论 进入沸点详情 -->
    <div class="fetch-more-comment"></div>
  </div>
</template>

<style scoped>
.comment-list .comment{
  border-bottom: 1px solid var(--el-color-info-light-8);
}
.comment-list .comment:last-child{
  border: 0;
}
</style>
