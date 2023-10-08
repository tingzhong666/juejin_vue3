<script setup>
const props = defineProps({
  star_n: {
    type: Number,
    default: 0
  },
  star_status: {
    type: Boolean,
    default: false
  },
  hover_mode: {
    type: String,
    default: 'one',
    validator(value) {
      return ['one', 'two'].includes(value)
    }
  }
})
</script>

<template>
  <div class="component" :class="{ one: hover_mode == 'one', two: hover_mode == 'two' }">
    <el-icon class="iconfont" :class="{ 'icon-youbangzhu': !star_status, 'icon-dianzan_kuai': star_status }"></el-icon>
    {{ star_n || '点赞' }}
  </div>
</template>

<style scoped>
.component {
  font-size: var(--el-font-size-extra-small);
  color: var(--el-text-color-regular);
  display: inline-block;
}

.component.one:hover {
  color: var(--el-color-primary);
}

.component.two:hover {
  color: var(--el-color-info);
}
</style>
