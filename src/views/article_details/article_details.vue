<script setup>
import * as api from '@/http/api'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// 文章数据
const data = ref({})
async function getData() {
  const res = await api.article.get({ id: route.params.id })
  data.value = res
}
getData()

// 阅读时间
const readTime = computed(() => {
  const minutes = Math.ceil(data.value.read_time % 3600 / 60)
  const hour = Math.floor(data.value.read_time / 3600)
  if (hour) return `阅读${hour}小时${minutes}分钟`
  else return `阅读${minutes}分钟`
})

// 文章渲染
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import 'highlight.js/styles/lioshi.min.css'
import '@/assets/mweb3-themes/light/mweb-indigo.css'
const md = new MarkdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value
      } catch (__) { }
    }
    return '' // 使用额外的默认转义
  }
})
const fence = md.renderer.rules.fence
md.renderer.rules.fence = (tokens, idx, options, env, self) => {
  const token = tokens[idx]
  let html = fence(tokens, idx, options, env, self)
  html = html.replace(/<pre>([\s\S]*?)<\/pre>/, `<pre class="language-${token}">$1</pre>`)
  return html
}
const content = computed(() => md.render(data.value.content || ''))
</script>

<template>
  <div class="article-details">
    <!-- 主体 -->
    <el-card class="main">
      <!-- 文章 -->
      <div class="article">
        <!-- 标题 -->
        <h1 class="title">{{ data.title }}</h1>
        <div class="metadata">
          <span class="author-name metadata-item">{{ data.author_name }}</span>
          <span class="created-at metadata-item">{{ data.created_at }}</span>
          <span class="read_n metadata-item"><span class="iconfont icon-liulanliang"></span>{{ data.read_n }}</span>
          <span class="read_time metadata-item"><span class="iconfont icon-shijian1"></span>{{ readTime }}</span>
          <span class="special-column metadata-item" v-if="data.topic_id"><span class="iconfont icon-tushu"></span>专栏：{{
            data.special_column_name }}</span>
        </div>
        <div class="content">
          <div class="markdown-body" v-html="content"></div>
        </div>
        <div class="labels">
          <!-- 标签 -->
          <span v-if="data.tags && data.tags.length">
            <span class="label">标签：</span>
            <span class="label-item" v-for="item of data.tags" :key="item.id">{{ item.name }}</span>
          </span>
          <!-- 话题 -->
          <span v-if="data.topic_id">
            <span class="label">话题：</span>
            <span class="label-item">{{ data.topic_name }}</span>
          </span>
        </div>
      </div>
      <!-- 评论 -->
      <!-- 为你推荐 -->
    </el-card>

    <!-- 右侧边 -->
    <div class="aside-right">
      右侧边
      <!-- 作者 -->
      <!-- 目录大纲 -->
      <!-- 相关推荐 -->
      <!-- 官方群 -->
    </div>
  </div>
</template>

<style scoped>
.article-details {
  width: 1140px;
  margin: 20px auto;
  display: flex;
}

.main {
  flex: 1;
}

/* 右侧边 */
.aside-right {
  width: 260px;
  margin-left: 20px;
}

.title {
  margin-bottom: 10px;
}

.metadata {
  margin-bottom: 40px;
}

.metadata-item {
  margin-right: 10px;
  font-size: 14px;
  color: var(--el-color-info-dark-2);
}

.metadata .iconfont {
  font-size: 14px;
  margin-right: 4px;
}

.author-name {
  color: #333;
}

.content {
  margin-bottom: 20px;
}

.labels {
  margin-bottom: 20px;
}

.label-item {
  display: inline-block;
  border-radius: 4px;
  background-color: var(--el-color-info-light-8);
  font-size: 14px;
  padding: 4px 10px;
  margin-right: 10px;
  transition: all .1s linear;
  cursor: pointer;
}

.label-item:hover {
  color: var(--el-color-primary);
  background-color: var(--el-color-primary-light-9);
}

/* 内容markdown */
.content ul li {
  list-style: inside;
}
.content:deep(code){
  background-color: inherit;
}
</style>
