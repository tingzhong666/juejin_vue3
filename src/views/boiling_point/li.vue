<script setup>
import { provide, ref } from 'vue'
import comment from './comment.vue'
import giveLike from '@/components/give_like.vue'
import actionComment from '@/components/action_comment.vue'
import UserPopover from '@/components/user_popover.vue'
const props = defineProps({
  options: Object
})
provide('boilingPointAuthorId', props.options.author.id)

const comment_status = ref(false)
</script>

<template>
  <el-card class="component">
    <!-- 头部 -->
    <div class="pin-header">
      <UserPopover>
        <img :src="options.author.avatar" alt="" class="avatar">
      </UserPopover>
      <div class="pin-header-right">
        <UserPopover>
          <div class="name">{{ options.author.name }}</div>
        </UserPopover>
        <span class="intro">{{ options.author.intro }} ·</span>
        <span class="time">{{ options.created_at }}</span>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content">
      {{ options.content }}
    </div>
    <!-- 图片 -->
    <div class="imgs" v-if="options.img.length">
      <img :src="v" alt="" v-for="v of options.img" :key="v">
    </div>
    <!-- 链接 -->
    <a class="link" v-if="options.link.url" :href="options.link.url" target="_blank">
      <img class="link-img" :src="options.link.img || '/023ed669a394d8fea5d4b84fdaf20e47.svg'" />
      <div class="link-right">
        <div class="link-title">{{ options.link.title }}</div>
        <div class="link-url">{{ options.link.url.replace(/https?:\/\//, '').replace(/\/.*$/, '') }}</div>
      </div>
    </a>
    <!-- 圈子 点赞 -->
    <div class="footer">
      <div class="footer-club" v-if="options.club.id"><el-icon class="iconfont icon-quanzi-xuanzhong"></el-icon>{{
        options.club.name }}></div>
      <div class="footer-star" v-if="options.star_n > 0">查看点赞用户</div>
    </div>
    <!-- 行为 -->
    <div class="action">
      <div class="share">
        <el-icon class="iconfont icon-fenxiang"></el-icon>
        分享
      </div>
      <actionComment class="action-comment" :comment-n="options.comment_n" v-model:comment-status="comment_status"
        hover-mode="two" />
      <giveLike :star-status="options.star_status" :star-n="options.star_n" hover-mode="two" />
    </div>
    <!-- 评论 -->
    <comment v-if="comment_status" class="comment" :id="options.id" />
  </el-card>
</template>

<style scoped>
.component {
  margin-bottom: 20px;
}

/* 头部 */
.pin-header {
  display: flex;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
  cursor: pointer;
}

.name {
  margin-bottom: 5px;
  cursor: pointer;
}

.intro,
.time {
  color: var(--el-color-info);
}

.intro {
  margin-right: 5px;
}

.content,
.imgs,
.link,
.footer {
  margin-left: 50px;
}

/* 内容 */
.content {
  line-height: 2.5rem;
}

/* 图片 */
.imgs {
  display: flex;
}

.imgs>img {
  width: 160px;
  height: 160px;
  margin-right: 10px;
  margin-bottom: 10px;
}

/* 链接 */
.link {
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  background-color: var(--el-color-info-light-9);
  border-radius: 5px;
  text-decoration-line: none;
  color: var(--el-text-color-primary);
  padding: 10px 0;
}

.link-img {
  width: 30px;
  height: 30px;
  margin: 10px;
}

.link-url {
  font-size: var(--el-font-size-extra-small);
  color: var(--el-text-color-regular);
  margin-top: 3px;
}

/* 圈子 点赞 */
.footer {
  margin-top: 10px;
  position: relative;
  height: 30px;
}

.footer-club {
  font-size: var(--el-font-size-extra-small);
  background-color: var(--el-color-primary-light-8);
  border-radius: 10px;
  padding: 3px 5px;
  color: var(--el-color-primary-dark-2);
  cursor: pointer;
  display: inline-block;
}

.footer-club:hover {
  background-color: var(--el-color-primary-light-7);
}

.footer-star {
  position: absolute;
  right: 0;
  top: 0;
}

/* 行为 */
.action {
  display: flex;
  width: 100%;
  text-align: center;
  cursor: pointer;
  border-top: 1px solid var(--el-color-info-light-9);
  padding-top: 15px;
}

.action>div {
  flex: 1;
}

.action .share {
  font-size: var(--el-font-size-extra-small);
  color: var(--el-text-color-regular);
}

.action .share:hover {
  color: var(--el-color-info);
}

.comment {
  margin-top: 20px;
}
</style>
