<script setup>
const props = defineProps({
  options: Object
})
</script>

<template>
  <el-card class="component">
    <!-- 头部 -->
    <div class="pin-header">
      <img :src="options.auther.avatar" alt="" class="avatar">
      <div class="pin-header-right">
        <div class="name">{{ options.auther.name }}</div>
        <span class="intro">{{ options.auther.intro }} ·</span>
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
        <div class="link-url">{{ options.link.url.replace(/https?:\/\//, '').replace(/\/.*$/ , '') }}</div>
      </div>
    </a>
    <!-- 圈子 点赞 -->
    <div class="footer">
      <div class="club">{{ options.club.name }}</div>
      <div class="footer-star">查看点赞用户</div>
    </div>
    <!-- 行为 -->
    <div class="action">
      <div class="share">分享</div>
      <div class="comment">评论</div>
      <div class="action-star">点赞</div>
    </div>
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
}

.name {
  margin-bottom: 5px;
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
.link-url{
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
}

.action>div {
  flex: 1;
}
</style>
