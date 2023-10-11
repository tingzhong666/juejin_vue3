<script setup>
import MyMain from './main/main.vue'

</script>

<template>
  <div class="course">
    <div class="container">
      <!-- 左边主体 -->
      <MyMain class="main"></MyMain>
      <!-- 右侧栏 -->
      <div class="aside">
        右侧栏
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 960px;
  margin: 0 auto;
  display: flex;
}
.main{
  flex: 1;
  margin-right: 20px;
}

.aside {
  background-color: #fff;
  width: 200px;
}
</style>
