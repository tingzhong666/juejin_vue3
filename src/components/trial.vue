<script setup>
const props = defineProps({
  // 作者名称
  authorName: {
    type: String,
    default: ''
  },
  // 菜单按钮显示状态
  dislikeItemShow: {
    type: Boolean,
    default: false,
  },
})
// 屏蔽 事件提交 
const emit = defineEmits([
  // 浮窗显示状态
  'update:visible',
  // 屏蔽作者
  'maskingAuthor',
  // 举报
  'report'])
</script>

<template>
  <el-popover placement="bottom-end" :width="200" trigger="hover" transition="none" class="trial"
    @after-leave="$emit('update:visible', false)" @show="$emit('update:visible', true)">
    <template #reference>
      <span class="dislike-item icon-shenglvehao iconfont" v-show="dislikeItemShow"></span>
    </template>
    <template #default data-qw>
      <div class="dislike-menu">
        <slot name="one"></slot>
        <div class="item iconfont icon-ren-pingbi" @click="$emit('maskingAuthor')">屏蔽作者：{{ authorName }}</div>
        <slot name="two"></slot>
        <div class="item iconfont icon-jubao" @click="$emit('report')">举报</div>
        <slot name="three"></slot>
      </div>
    </template>
  </el-popover>
</template>

<style scoped>
.trial{
  display: inline-block;
}
.dislike-item {
  font-size: 13px;
  cursor: pointer;
}

.dislike-item:hover {
  color: var(--el-color-primary);
}

.dislike-menu .item {
  cursor: pointer;
  line-height: 35px;
  font-size: 13px;
}

.dislike-menu .item:hover {
  background-color: var(--el-color-info-light-9);
}

.dislike-menu .item::before {
  margin-right: 10px;
}
</style>
