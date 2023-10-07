<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => {
      return {}
    }
  },
})
</script>

<template>
  <div class="component">
    <div class="avatar">
      <img :src="data.auther.avatar" />
    </div>
    <div class="right">
      <div class="head">
        <span class="name">{{ data.auther.name }}</span>
        <!-- 掘友等级 创作者等级 先不做 -->
        <span class="intro">{{ data.auther.intro }}</span>
        <span class="create-time">{{ data.created_at }}</span>
      </div>
      <div class="content">{{ data.content }}</div>
      <div class="action">行为</div>
    </div>
  </div>
</template>

<style scoped>
.component{
  display: flex;
  padding: 20px 0;
}

.avatar {
  padding-right: 10px;
}
.avatar img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.intro,
.create-time {
  color: var(--el-color-info-dark-2);
  font-size: var(--el-font-size-small);
}
.head > span {
  display: inline-block;
  margin-right: 15px;
}
.intro{
  border-right: 2px solid var(--el-color-info-light-8);
  padding-right: 15px ;
}

/* 内容 */
.content{
  font-size: var(--el-font-size-base);
  margin: 10px 0;
  color: var(--el-text-color-regular);
}
</style>
