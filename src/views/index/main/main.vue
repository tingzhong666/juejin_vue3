<script setup>
import { reactive, ref, defineProps, onMounted, onUnmounted } from "vue"
import { article } from '@/http/api.js'
import { useRoute } from "vue-router"
import myli from './li.vue'
import * as api from '@/http/api.js'

const props = defineProps(['category'])

const list = reactive([])
let page = ref(1)
let mode = ref('recommended')

let flag = false //列表追加请求

async function scroll_lod(){
    const to_bottom = document.body.offsetHeight - window.scrollY - window.innerHeight
    if(to_bottom < 400 && !flag){
      flag = true
      list.push(...await api.article.get_list({ limit: 10, page: ++page.value, category: props.category, mode: mode.value }))
      flag = false
    }
}

function change(inde){
  mode.value = inde
}

onMounted(async () => {
  // 文章列表
  list.push(...await article.get_list({ limit: 10, page: page.value, category: props.category, mode: mode.value }))

  // 文章追加
  window.addEventListener('scroll', scroll_lod)
})

onUnmounted(() => {
  window.removeEventListener('scroll', scroll_lod)
})
</script>

<template>
  <div class="component">
    <el-card class="card">
      <div class="head" v-if="useRoute().path != '/following'">
        <el-menu
          v-model:default-active="mode"
          mode="horizontal"
          @select="change"
        >
          <el-menu-item index="recommended" class="item">推荐</el-menu-item>
          <el-menu-item index="latest" class="item">最新</el-menu-item>
        </el-menu>
      </div>
      <ul class="list">
        <myli v-for="item in list" :key="item.id" :item="item"/>
      </ul>
    </el-card>
  </div>
</template>

<style scoped>
.component:deep(.el-card__body){
  padding: 0;
}
.head .item{
  transition-duration: 0s;
  border-width: 4px;
  color: var(--el-color-info-light-3);
}
.head .item:hover,
.head .item:focus{
  background-color: #ffffffff;
}

/* 这个!important没办法，ui组件里面css也用的这个，不这样改不了样式 */
.head .item.is-active{
  color: var(--el-text-color-regular)!important;
}
.head .item.is-active:hover{
  color: var(--el-color-primary)!important;
}

</style>
