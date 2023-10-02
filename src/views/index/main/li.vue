<script setup>
import cloneDeep from 'lodash/cloneDeep'
import { reactive, computed, ref, onMounted } from 'vue'

const props = defineProps({
  item: Object
})

const component = ref(null)
const dislike_menu = ref(null)

// 小三点菜单的显示
const hide_after = ref(200)
const on_li = ref(false) // 是否在li上
const on_float_window = ref(false) // 是否在浮窗上
const dislike_item_show = computed(() => on_li.value || on_float_window.value) // 是否在浮窗或li上
onMounted(() => {
  component.value.addEventListener('mouseenter', () => {
    on_li.value = true
  })
  component.value.addEventListener('mouseleave', () => {
    // 这里采用与浮窗一样的延时关闭 防止小三点过早关闭 导致浮窗会有些许bug
    setTimeout(() => {
      on_li.value = false
    }, hide_after.value);
  })
  dislike_menu.value.addEventListener('mouseenter', () => {
    on_float_window.value = true
  })
})

// 屏蔽标签相关
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
function shield_tag_show(tags){
  shield.status = !shield.status
  shield.tags = cloneDeep(tags)
}
// 浮窗隐藏时回调
function shield_tag_clear(){
  // 这里采用与浮窗一样的延时关闭 防止小三点过早关闭 导致浮窗会有些许bug
  setTimeout(() => {
      on_float_window.value = false
    }, hide_after.value);

  shield.status = false
  shield.tags = []
}
</script>

<template>
  <div class="component" ref="component">
    <li class="item">
      <div class="content-main">
        <div class="title">{{ item.title }}</div>
        <div class="intro">{{ item.intro }}</div>
        <div class="entry-footer">
          <div class="action-list">
            <span class="author">{{ item.author }}</span>
            <span class="read_n icon-liulanliang iconfont">{{ item.read_n }}</span>
            <span class="star_n icon-youbangzhu iconfont">{{ item.star_n }}</span>
            <el-popover
              placement="bottom-end"
              :width="200"
              trigger="hover"
              :hide-after="hide_after"
              transition="none"
              @hide="shield_tag_clear"
            >
              <template #reference>
                <span class="dislike-item icon-shenglvehao iconfont" v-show="dislike_item_show"></span>
              </template>
              <template #default>
                <div class="dislike-menu" ref="dislike_menu">
                  <div class="item iconfont icon-buganxingqu">不感兴趣</div>
                  <div class="item iconfont icon-ren-pingbi">屏蔽作者：{{ item.author }}</div>
                  <div class="item iconfont icon-guanbishouquantubiao" @click="shield_tag_show(item.tags)">屏蔽标签</div>
                  <div class="shield_tag" v-show="shield.status">
                    <div class="tags">
                      <span
                        class="tag"
                        :class="{ active: v.active }"
                        v-for="v in shield.tags"
                        :key="v.id"
                        @click="v.active = !v.active"
                      >{{ v.name }}</span>
                    </div>
                    <el-button type="primary" class="submit" :disabled="!shield_active">确定屏蔽</el-button>
                  </div>
                  <div class="item iconfont icon-jubao">举报</div>
                </div>
              </template>
            </el-popover>
          </div>
          <div class="tags">
            <span class="tag" v-for="v in item.tags" :key="v.id">{{ v.name }}</span>
          </div>
        </div>
      </div>
      <img :src="item.cover_img" v-if="item.cover_img">
    </li>
  </div>
</template>

<style scoped>

.component .item{
  display: flex;
  cursor: pointer;
  border-bottom: 1px solid var(--el-color-info-light-7);
  padding: 15px;
  color: var(--el-color-info);
  font-size: 13px;
}

.component .item:hover{
  background-color: var(--el-color-info-light-9);
}
.title{
  font-weight: 700;
  color: var(--el-text-color-primary);
  font-size: 16px;
}


.entry-footer{
  position: relative;
}

.intro{
  margin: 10px;
  height: 16px;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.action-list .author{
  padding-right: 10px;
  border-right: 1px solid var(--el-color-info-light-5);
  margin-right: 10px;
}
.action-list .author:hover{
  color: var(--el-color-primary);
}
.iconfont{
  font-size: 13px;
}
.iconfont:before{
  margin-right: 3px;
}
.action-list .read_n,
.action-list .star_n{
  margin-right: 16px;
}
.action-list .star_n:hover{
  color: var(--el-color-primary);
}

.action-list .dislike-item:hover{
  color: var(--el-color-primary);
}

.dislike-menu .item{
  cursor: pointer;
  line-height: 35px;
  font-size: 13px;
}
.dislike-menu .item:hover{
  background-color: var(--el-color-info-light-9);
}
.dislike-menu .item::before{
  margin-right: 10px;
}

.shield_tag .tags{
  margin: 10px 0;
}
.shield_tag .tags .tag{
  cursor: pointer;
}
.shield_tag .tags .tag.active{
  color: var(--el-color-primary);
  background-color: var(--el-color-primary-light-9);
}
.shield_tag .submit{
  margin-bottom: 10px;
}

.entry-footer > .tags{
  position: absolute;
  right: 0;
  bottom: 0;
}

.tags .tag{
  background-color: var(--el-color-info-light-8);
  border-radius: 3px;
  padding: 3px;
  font-size: 12px;
  margin-left: 5px;
}

.item img{
  width: 108px;
  height: 72px;
  margin-left: 20px;
  border-radius: 3px;
}
</style>
