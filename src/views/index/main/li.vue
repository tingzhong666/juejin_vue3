<script setup>
import cloneDeep from 'lodash/cloneDeep'
import { reactive, computed, ref, onMounted, watch } from 'vue'
import GiveLike from '@/components/give_like.vue'
import Trial from '@/components/Trial.vue'
import UserPopover from '@/components/user_popover.vue'

const props = defineProps({
  item: Object
})

const component = ref(null)

// 小三点菜单的显示状态==============
const dislike = ref({
  onLi: false, // 鼠标是否在当前组件li上
  floatWindowShow: false, // 浮窗显示状态
})
// 小三点菜单的状态
const dislikeItemShow = computed(() => dislike.value.onLi || dislike.value.floatWindowShow)
onMounted(() => {
  component.value.addEventListener('mouseenter', () => {
    dislike.value.onLi = true
  })
  component.value.addEventListener('mouseleave', () => {
    dislike.value.onLi = false
  })
})

// 屏蔽标签相关==================
const shield = reactive({
  // 屏蔽标签 on/off
  status: false,
  // 标签
  tags: []
})
// 有一个选中 则真 用于屏蔽标签的提交按钮的是否可点击
const shield_active = computed(() => {
  return shield.tags.find(v => v.active)
})
function shield_tag_show(tags) {
  shield.status = !shield.status
  shield.tags = cloneDeep(tags)
}
watch(() => dislike.value.floatWindowShow, (newV, oldV) => {
  // 浮窗隐藏时回调
  if (oldV && !newV) {
    shield.status = false
    shield.tags = []
  }
})
</script>

<template>
  <div class="component" ref="component">
    <li class="item">
      <div class="content-main">
        <div class="title">{{ item.title }}</div>
        <div class="intro">{{ item.intro }}</div>
        <div class="entry-footer">
          <!-- action -->
          <div class="action-list">
            <UserPopover :id="item.author_id">
              <template #default>
                <span class="author">{{ item.author }}</span>
              </template>
            </UserPopover>
            <span class="read_n icon-liulanliang iconfont">{{ item.read_n }}</span>
            <GiveLike class="star_n" :star-status="item.star_status" :star-n="item.star_n" />
            <!-- 屏蔽与举报菜单 -->
            <Trial :author-name="item.author" :dislike-itemShow="dislikeItemShow"
              @update:visible="v => dislike.floatWindowShow = v">
              <template #one>
                <div class="item iconfont icon-buganxingqu">不感兴趣</div>
              </template>
              <template #two>
                <!-- 睥睨标签 -->
                <div class="item iconfont icon-guanbishouquantubiao" @click="shield_tag_show(item.tags)">屏蔽标签</div>
                <div class="shield_tag" v-show="shield.status">
                  <div class="tags">
                    <span class="tag" :class="{ active: v.active }" v-for="v in shield.tags" :key="v.id"
                      @click="v.active = !v.active">{{ v.name }}</span>
                  </div>
                  <el-button type="primary" class="submit" :disabled="!shield_active">确定屏蔽</el-button>
                </div>
              </template>
            </Trial>
          </div>
          <!-- 标签 -->
          <div class="tags">
            <span class="tag" v-for="v in item.tags" :key="v.id">{{ v.name }}</span>
          </div>
        </div>
      </div>
      <!-- 封面 -->
      <img :src="item.cover_img" v-if="item.cover_img">
    </li>
  </div>
</template>

<style scoped>
.component .item {
  display: flex;
  cursor: pointer;
  border-bottom: 1px solid var(--el-color-info-light-7);
  padding: 15px;
  color: var(--el-color-info);
  font-size: 13px;
}

.component .item:hover {
  background-color: var(--el-color-info-light-9);
}

.title {
  font-weight: 700;
  color: var(--el-text-color-primary);
  font-size: 16px;
}



.intro {
  margin: 10px;
  height: 16px;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.entry-footer {
  position: relative;
}

.action-list .author {
  padding-right: 10px;
  border-right: 1px solid var(--el-color-info-light-5);
  margin-right: 10px;
}

.action-list >>> .author:hover {
  color: var(--el-color-primary);
}

.iconfont {
  font-size: 13px;
}

.iconfont:before {
  margin-right: 3px;
}

.action-list .read_n,
.action-list .star_n {
  margin-right: 16px;
}

.dislike-menu .item {
  cursor: pointer;
  line-height: 35px;
  font-size: 13px;
}

.dislike-menu .item:hover {
  background-color: var(--el-color-info-light-9);
}

.shield_tag .tags {
  margin: 10px 0;
}

.shield_tag .tags .tag {
  cursor: pointer;
}

.shield_tag .tags .tag.active {
  color: var(--el-color-primary);
  background-color: var(--el-color-primary-light-9);
}

.shield_tag .submit {
  margin-bottom: 10px;
}

.entry-footer>.tags {
  position: absolute;
  right: 0;
  bottom: 0;
}

.tags .tag {
  background-color: var(--el-color-info-light-8);
  border-radius: 3px;
  padding: 3px;
  font-size: 12px;
  margin-left: 5px;
}

.item img {
  width: 108px;
  height: 72px;
  margin-left: 20px;
  border-radius: 3px;
}
</style>
