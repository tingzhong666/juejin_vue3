<script setup>
import { computed, ref } from 'vue';

const textarea = ref('')
const textarea_length = computed(() =>{
  return textarea.value.length
})
</script>

<template>
  <div class="component">
    <el-card class="card">
      <div class="textarea">
        <el-input
          v-model="textarea"
          type="textarea"
          placeholder="快和掘友一起分享新鲜事！告诉你个小秘密，发布沸点时添加圈子和话题会被更多掘友看到哦～"
          class="el-textarea"
          :autosize="{ minRows: 3 }"
          resize="none"
          show-word-limit
        />

        <!-- 话题显示 -->
        <!-- 字数显示 -->
        <div class="limit" :class="{ exceed: textarea_length > 1000 }">{{ textarea_length }} / 1000</div>
        <!-- 圈子显示/选择 -->
        <div class="club">请选择圈子</div>
      </div>

      <!-- 插入栏 -->
      <div class="insert">
        <!-- 表情 -->
        <!-- 图片 -->
        <!-- 链接 -->
        <!-- 话题 -->
        <!-- 代码 -->
        <!-- 发布 -->
        <el-button type="primary" class="submit" :disabled="textarea_length > 1000">发布</el-button>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.textarea{
  position: relative;
}
.el-textarea:deep(.el-textarea__inner) {
  background-color: var(--el-color-info-light-9);
  box-shadow: none;
  border: 1px solid #ffffffff;
  padding-bottom: 30px;
}

.el-textarea:deep(.el-textarea__inner:focus) {
  background-color: #fff;
  border: 1px solid var(--el-color-primary);
}
.limit{
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: var(--el-font-size-extra-small);
  color: var(--el-text-color-regular);
}
.limit.exceed{
  color: red;
}

.club{
  position: absolute;
  left: 10px;
  bottom: 10px;
}
.insert{
  position: relative;
  height: 50px;
}
/* 插入栏 */
.insert .submit{
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 0 30px;
}
</style>
