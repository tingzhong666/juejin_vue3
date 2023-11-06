<script setup>
import SignIn from './sign_in.vue'
import ArticleLeaderboard from './article_leaderboard.vue'
import AuthorLeaderboard from './author_leaderboard.vue'
import RecommendedTopic from './recommended_topic.vue'
import Copyright from './copyright.vue'
</script>

<template>
  <div>
    <!-- 签到 -->
    <SignIn class="signIn"></SignIn>
    <!-- 文章榜 -->
    <ArticleLeaderboard class="ArticleLeaderboard"></ArticleLeaderboard>
    <!-- 广告 -->
    <!-- 作者榜 -->
    <AuthorLeaderboard class="AuthorLeaderboard"></AuthorLeaderboard>
    <!-- 推荐话题 -->
    <RecommendedTopic class="RecommendedTopic"></RecommendedTopic>
    <!-- 版权 -->
    <Copyright></Copyright>
  </div>
</template>

<style scoped>
.signIn {
  margin-bottom: 20px;
}

.ArticleLeaderboard {
  margin-bottom: 20px;
}

.AuthorLeaderboard {
  margin-bottom: 20px;
}

.RecommendedTopic {
  margin-bottom: 20px;
}</style>
