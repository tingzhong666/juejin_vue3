<script setup>
import SignIn from './sign_in.vue'
import ArticleLeaderboard from './article_leaderboard.vue'
import AuthorLeaderboard from './author_leaderboard.vue'
</script>

<template>
  <div>
    <!-- 签到 -->
    <SignIn class="signIn"></SignIn>
    <!-- 文章榜 -->
    <ArticleLeaderboard class="ArticleLeaderboard"></ArticleLeaderboard>
    <!-- 广告 -->
    <!-- 作者榜 -->
    <AuthorLeaderboard></AuthorLeaderboard>
    <!-- 推荐话题 -->
    <!-- 版权 -->
  </div>
</template>

<style scoped>
.signIn {
  margin-bottom: 20px;
}
.ArticleLeaderboard{
  margin-bottom: 20px;
}
</style>
