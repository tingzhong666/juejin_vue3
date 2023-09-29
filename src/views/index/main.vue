<script setup>
import { reactive, onMounted } from "vue"
import { article } from '@/http/api.js'
import { useRoute } from "vue-router";

const list = reactive([])

// 文章列表
list.push(...article.get_list({ limit: 10, page: 1, category: 'recommended', mode: 'recommended' }))
</script>

<template>
  <div>
    <el-card>
      <div class="head" v-if="useRoute().path != '/following'">
        <el-menu
          :default-active="1"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">推荐</el-menu-item>
          <el-menu-item index="2">最新</el-menu-item>
        </el-menu>
      </div>
      <ul class="list">
        <li v-for="item in list" :key="item.id">{{ item.title }}</li>
      </ul>
    </el-card>
  </div>
</template>

<style scoped></style>
