<script setup>
import { computed } from 'vue';

const props = defineProps({
  level: {
    type: Number,
    default: 0,
  },
  mode: {
    type: Number,
    default: 1,
    validator(v) {
      // 1掘友等级 2创作者等级
      return [1, 2].includes(v)
    }
  }
})
const title = computed(() =>{
  switch (props.mode) {
    case 1:
      return `掘友${props.level}级`
    case 2:
      return `创作等级LV.${props.level}`
  }
})
</script>

<template>
  <div class="level-tag" :class="{ 'author-level': mode === 1, 'user-level': mode === 2 }" :title="title">
    Lv.{{ level }}
  </div>
</template>

<style scoped>
.level-tag {
  display: inline-block;
  color: #fff;
  background: linear-gradient(to right, var(--el-color-primary-light-7), var(--el-color-primary));
  padding: 0 12px;
  font-size: 12px;
  border-radius: 6px;
}

.author-level {
  background: linear-gradient(to right, var(--el-color-primary-light-7), var(--el-color-primary));
}

.user-level {
  background: linear-gradient(to right, var(--el-color-danger-light-7), var(--el-color-danger-dark-2));
}
</style>
