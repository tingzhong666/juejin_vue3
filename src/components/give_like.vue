<script setup>
const props = defineProps({
  starN: {
    type: Number,
    default: 0
  },
  starStatus: {
    type: Boolean,
    default: false
  },
  hoverMode: {
    type: String,
    default: 'one',
    validator(value) {
      return ['one', 'two'].includes(value)
    }
  }
})
</script>

<template>
  <div class="give-like" :class="{ one: hoverMode == 'one', two: hoverMode == 'two' }">
    <el-icon class="iconfont" :class="{ 'icon-youbangzhu': !starStatus, 'icon-dianzan_kuai': starStatus }"></el-icon>
    {{ starN || '点赞' }}
  </div>
</template>

<style scoped>
.give-like {
  font-size: var(--el-font-size-extra-small);
  color: var(--el-text-color-regular);
  display: inline-block;
  cursor: pointer;
}

.give-like.one:hover {
  color: var(--el-color-primary);
}

.give-like.two:hover {
  color: var(--el-color-info);
}
</style>
