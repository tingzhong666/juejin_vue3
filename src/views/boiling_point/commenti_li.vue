<script setup>
import CommentLi from '@/components/comment_Li.vue'
import { inject } from 'vue';
const props = defineProps({
  data: {
    type: Object,
    default: () => {
      return {}
    }
  },
})
const boilingPointAuthorId = inject('boilingPointAuthorId')
</script>

<template>
  <CommentLi :data="data">
    <!-- 二维评论 -->
    <template #comment-form-bottom>
      <div class="comment-list-two" v-if="data.comment_two.length">
        <CommentLi class="comment-list-two-li" :data="item" v-for="item of data.comment_two" :key="item.id">
          <template #intro>
            <!-- 此评论是否为沸点/文章作者 -->
            {{ boilingPointAuthorId === item.author.id ? '(作者)' : '' }}
            <!-- 回复谁 -->
            <div class="reply" v-if="item.comment_to_user_id">
              回复
              <el-link href="#">{{ item.comment_to_user_name }}</el-link>
              <!-- 目标评论是否为沸点/文章作者 -->
              {{ boilingPointAuthorId === item.comment_to_user_id ? '(作者)' : '' }}
            </div>
          </template>
          <template #content-bottom>
            <!-- 回复的目标内容 -->
            <div class="reply-to-reply" v-if="item.comment_to_user_id">
              "{{ item.comment_to_content }}"
            </div>
          </template>
        </CommentLi>
      </div>
    </template>
  </CommentLi>
</template>

<style scoped>
/* 二维评论 */
.comment-list-two {
  background-color: var(--el-color-info-light-9);
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
}

.reply {
  margin-right: 14px;
  display: inline-block;
}

.reply-to-reply {
  background-color: var(--el-color-info-light-8);
  border-radius: 6px;
  padding: 10px;
}
</style>
