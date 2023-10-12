<script setup>
import { onMounted, ref } from 'vue'
const q = ref('')

// 搜索栏聚焦
const input = ref(null)
onMounted(async () => {
  input.value.focus()
})
</script>

<template>
  <div class="header-2">
    <div class="left">
      <!-- 返回 -->
      <div class="return item" @click="$emit('to-return')">
        <div class="box">
          <el-icon class="icon">
            <ArrowLeftBold />
          </el-icon>
          返回
        </div>
      </div>
      <!-- 标题 -->
      <div class="item">
        课程搜索
      </div>
    </div>
    <!-- 搜索框 -->
    <el-input class="search" v-model="q" placeholder="搜索课程" ref="input">
      <template #append>
        <el-icon>
          <Search />
        </el-icon>
      </template>
    </el-input>
  </div>
</template>

<style scoped>
.header-2 {
  position: relative;
  padding: 10px 0 20px;
  border-bottom: 1px solid var(--el-color-info-light-7);
}

.left{
  display: flex;
}

.item {
  display: inline-block;
  padding: 0 10px;
  font-size: var(--el-font-size-base);
  text-align: center;
}

/* 返回 */
.return {
  cursor: pointer;
  color: var(--el-text-color-regular);
  border-right: 2px solid var(--el-color-info-light-8);
}

.return .box {
  display: flex;
  align-items: center;
}

.return .icon {
  margin-right: 4px;
}

/* 搜索 */
.search {
  width: 300px;
  position: absolute;
  right: 0;
  top: 0;
}
</style>
