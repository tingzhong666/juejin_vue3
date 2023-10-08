<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  hideAfter: {
    type: Number,
    default: 200,
  },
  authorName: {
    type: String,
    default: ''
  },
  visible: {
    type: Boolean,
    default: false,
  },
  dislikeItemShow: {
    type: Boolean,
    default: false,
  },
})
// 屏蔽 事件提交 
const emit = defineEmits(['update:visible', 'maskingAuthor', 'report'])
</script>

<template>
  <el-popover placement="bottom-end" :width="200" trigger="hover" :hide-after="hideAfter" transition="none"
    class="component" @after-leave="$emit('update:visible', false)" @show="$emit('update:visible', true)">
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
.dislike-item{
  font-size: 13px;
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
