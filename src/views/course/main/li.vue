<script setup>
import { useRoute } from 'vue-router';

const props = defineProps({
  data: {
    type: Object,
  }
})
const route = useRoute()
</script>

<template>
  <!-- 普通小册 -->
  <div class="booklet" v-if="route.params.course !== 'bytetech'">
    <!-- 封面图 -->
    <img class="cover-img" :src="data.base_info.cover_img" />
    <div class="right">
      <div class="head">
        <!-- 是否新品标签 -->
        <div class="new head-item" v-if="data.is_new">新品</div>
        <!-- vip标签 -->
        <div class="vip head-item" v-if="data.base_info.can_vip_borrow">VIP</div>
        <!-- 标题 -->
        <div class="title head-item">{{ data.base_info.title }}</div>
      </div>
      <div class="intro">{{ data.base_info.summary }}</div>
      <div class="author-info">
        <!-- 作者头像 -->
        <img :src="data.user_info.avatar_large" alt="" class="author-img author-info-item">
        <!-- 作者名称 -->
        <div class="author-name author-info-item">{{ data.user_info.user_name }}</div>
        <!-- 创作等级 待定-->
        <!-- vip标签 待定-->
        <!-- 职业公司 -->
        <div class="author-intro author-info-item">{{ data.user_info.job_title || '' }}{{ data.user_info.company ? ' @ ' +
          data.user_info.company :
          ''
        }}</div>
      </div>
      <div class="status">
        <!-- 免费 -->
        <div class="free status-item" v-if="!data.base_info.price">免费</div>
        <!-- 价格 -->
        <div class="price status-item" v-if="data.base_info.price">￥{{ data.base_info.price / 100 }}</div>
        <!-- 完结/连载 -->
        <div class="messages status-item">{{ data.base_info.is_finished ? '已完成 ' : '连载中 ' }}{{
          data.base_info.section_count
        }} {{ '' }} 小节</div>
        <!-- 购买人数 -->
        <div class="messages status-item" v-if="data.base_info.price">{{ data.base_info.buy_count }}人已购买</div>
      </div>
    </div>
  </div>
  <!-- 掘金内部课 -->
</template>

<style scoped>
.booklet {
  display: flex;
}

/* 封面 */
.booklet .cover-img {
  width: 103px;
  height: 147px;
  margin-right: 20px;
}

/* 右 */
.booklet .right {
  flex: 1;
}

/* 头部 */
.booklet .head .head-item {
  display: inline-block;
  margin-bottom: 10px;
}

.booklet .head .new {
  margin-right: 10px;
  padding: 2px 6px;
  border-radius: 4px;
  color: #fff;
  background-color: red;
  font-size: 12px;
}

.booklet .head .title {
  color: #000;
  font-size: 20px;
}

/* 简介 */
.booklet .intro {
  color: var(--el-text-color-regular);
  font-size: 14px;
  margin-bottom: 6px;
}

/* 用户信息 */
.booklet .author-info {
  margin-bottom: 10px;
}

.booklet .author-info-item {
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  margin-right: 4px;
}

.booklet .author-info img {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-top: 4px;
}

.booklet .author-intro {
  color: var(--el-text-color-regular);
}

/* 其他信息 */
.booklet .status .status-item {
  display: inline-block;
}

.booklet .status .free {
  color: var(--el-color-primary);
  font-size: 14px;
  margin-right: 16px;
}

.booklet .status .price {
  color: red;
  font-size: 20px;
  margin-right: 16px;
}

.booklet .status .messages {
  color: var(--el-color-info-dark-2);
  margin-right: 6px;
  font-size: 12px;
}
</style>
