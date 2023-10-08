<script setup>
const props = defineProps({
  comment_n: {
    type: Number,
    default: 0
  },
  comment_status: {
    type: Boolean,
    default: false
  },
  hover_mode: {
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
const emit = defineEmits(['update:comment_status'])
</script>

<template>
  <div class="component" :class="{ hover_one: 'hover-mode' == 'one', 'hover-two': hover_mode == 'two' }"
    @click="$emit('update:comment_status', !comment_status)">
    <el-icon class="iconfont"
      :class="{ 'icon-pinglun1': !comment_status, 'icon-pinglun active': comment_status }"></el-icon>
    {{ comment_n || text }}
  </div>
</template>

<style scoped>
.component {
  font-size: var(--el-font-size-extra-small);
  color: var(--el-text-color-regular);
}

.hover-one:hover {
  color: var(--el-color-primary);
}

.hover-two:hover {
  color: var(--el-color-info);
}

.active {
  color: var(--el-color-primary);
}</style>
