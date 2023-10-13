<script setup>
import { ref } from 'vue'
import HeaderOne from './headerOne.vue'
import HeaderTwo from './headerTwo.vue'
import MyLy from './li.vue'
import * as api from '@/http/api'
import { useRoute } from 'vue-router'

const header = ref(1)
const route = useRoute()

const data = ref([])
async function getData() {
  const res = await api.course.getCourseList({
    course: route.params.course === 'bytetech' ? 'bytetech' : 'course',
    category: route.params.course === 'bytetech' ? route.params.category : route.params.course,
    sort: route.query.sort,
    vip: route.query.vip,
  })
  data.value.push(...res)
}
getData()
</script>

<template>
  <el-card class="main">
    <!-- 筛选与排序 -->
    <HeaderOne v-if="header === 1" @to-search="header = 2"></HeaderOne>
    <!-- 搜索 -->
    <HeaderTwo v-if="header === 2" @to-return="header = 1"></HeaderTwo>
    <!-- 课程列表 -->
    <div class="list">
      <MyLy class="li" v-for="item of data" :key="item.booklet_id" :data="item"></MyLy>
    </div>
  </el-card>
</template>

<style scoped>
.li{
  margin: 30px 0;
  cursor: pointer;
}
</style>
