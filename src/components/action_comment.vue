<script setup>
import { ref } from 'vue'
const props = defineProps({
  commentN: {
    type: Number,
    default: 0
  },
  hoverMode: {
    type: String,
    default: 'one',
    validator(value) {
      return ['one', 'two'].includes(value)
    }
  },
  text: {
    type: String,
    default: '评论'
  }
})
// 评论按钮avtive状态
const commentStatus = ref(false)
const emit = defineEmits(['update:comment-status'])

const click = () => {
  commentStatus.value = !commentStatus.value
  emit('update:comment-status', commentStatus.value)
}

defineExpose({
  commentStatusSet(v) {
    commentStatus.value = v
  }
})
</script>

<template>
  <div class="action-comment" :class="{ 'hover-one': hoverMode == 'one', 'hover-two': hoverMode == 'two' }"
    @click="click">
    <el-icon class="iconfont"
      :class="{ 'icon-pinglun1': !commentStatus, 'icon-pinglun active': commentStatus }"></el-icon>
    {{ commentN || text }}
  </div>
</template>

<style scoped>
.action-comment {
  font-size: var(--el-font-size-extra-small);
  color: var(--el-text-color-regular);
  cursor: pointer;
  display: inline-block;
}

.hover-one:hover {
  color: var(--el-color-primary);
}

.hover-two:hover {
  color: var(--el-color-info);
}

.active {
  color: var(--el-color-primary);
}
</style>
