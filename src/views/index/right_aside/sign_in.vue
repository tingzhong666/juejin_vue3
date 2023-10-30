<script setup>
import { ref } from 'vue';

const dayTime = ref('')
if (new Date().getHours() >= 0 && new Date().getHours() < 12)
  dayTime.value = '上午好'
else if (new Date().getHours() >= 12 && new Date().getHours() < 24)
  dayTime.value = '下午好'
</script>

<template>
  <el-card class="sign-in">
    <div class="greeting">{{ dayTime }}</div>
    <div class="message">点亮在社区的每一天</div>
    <el-button class="sign-in-button" type="primary" plain>去签到</el-button>
  </el-card>
</template>

<style scoped>
.sign-in {
  position: relative;
}

.greeting {
  font-weight: 700;
  margin-bottom: 10px;
}

.message {
  font-size: 12px;
  color: var(--el-color-info);
}

.sign-in-button {
  position: absolute;
  right: 20px;
  top: 30px;
}
</style>
