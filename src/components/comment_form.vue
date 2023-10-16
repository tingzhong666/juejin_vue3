<script setup>
import { ref } from 'vue'
const input = ref('')
const myInput = ref(null)
defineExpose({
  focus() {
    myInput.value.focus()
  }
})
</script>

<template>
  <div class="form-box">
    <el-input @blur="$emit('blur')" ref="myInput" class="form-input" v-model="input" placeholder="输入评论（Enter换行，Ctrl + Enter发送）" />
    <!-- 行为 -->
    <div class="form-action">

    </div>
  </div>
</template>

<style scoped>
.form-input:deep(.el-input__wrapper) {
  background-color: var(--el-color-info-light-9);
  box-shadow: none;
  border: 1px solid #ffffffff;
}

.form-input:deep(.el-input__wrapper.is-focus) {
  background-color: #fff;
  border: 1px solid var(--el-color-primary);
}
</style>
