<script setup>
import { ref } from 'vue'
const input = ref('')
const myInput = ref(null)
// const focus = ref(false)
defineExpose({
  focus() {
    myInput.value.focus()
  }
})
</script>

<template>
  <div class="form-box">
    <el-input @blur="$emit('blur')" ref="myInput" :class="{ focus }" class="form-input" v-model="input"
      placeholder="输入评论（Enter换行，Ctrl + Enter发送）" />
    <!-- 行为 -->
    <div class="form-action">
      <!-- 表情选择 -->
      <el-icon class="icon-biaoqing iconfont form-action-item">表情</el-icon>
      <!-- 图片选择 -->
      <el-icon class="icon-charutupian iconfont form-action-item">图片</el-icon>
      <!-- 占位 -->
      <div class="placeholder form-action-item"></div>
      <!-- 快捷键提示 -->
      <!-- <div class="shortcut form-action-item"></div> -->
      <!-- 发送按钮 -->
      <el-button class="submit form-action-item" type="primary" :class="{ 'is-null': !input }">发送评论</el-button>
    </div>
  </div>
</template>

<style scoped>
.form-box {
  padding: 10px;
}

.form-input:deep(.el-input__wrapper) {
  background-color: var(--el-color-info-light-9);
  box-shadow: none;
  border: 1px solid #ffffffff;
}

.form-input:deep(.el-input__wrapper.is-focus),
.form-box:focus-within .form-input.focus:deep(.el-input__wrapper) {
  background-color: #fff;
  border: 1px solid var(--el-color-primary);
}



.form-action {
  display: flex;
  margin-top: 20px;
  align-items: center;
}

.iconfont {
  width: 70px;
  font-size: 14px;
  color: var(--el-color-info-dark-2);
  cursor: pointer;
}

.iconfont:hover {
  color: var(--el-color-primary-dark-2);
}

.iconfont::before {
  margin-right: 6px;
}

.placeholder {
  flex: 1;
}

.submit:hover {
  --el-button-hover-bg-color: var(--el-color-primary-dark-2);
  /* width: 200px; */
}

.submit.is-null {
  cursor: not-allowed;
  --el-button-hover-bg-color: var(--el-color-primary-light-3);
  --el-button-bg-color: var(--el-color-primary-light-3);
  --el-button-active-bg-color: var(--el-color-primary-light-3);
}
</style>
