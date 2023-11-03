<script setup>
import { useCounterStore } from '@/stores/counter.js'
const store = useCounterStore()
// 退出登录
const logout = () => {
  store.logout()
}
</script>

<template>
  <div class="user">
    <el-popover placement="bottom-end" :width="250" trigger="click" transition="none" :hide-after="0">
      <template #reference>
        <img :src="store.userinfo.avatar">
      </template>
      <template #default>
        <div class="user_float">
          <div class="one">
            <el-row :gutter="20">
              <el-col :span="6" class="avatar">
                <el-avatar :src="store.userinfo.avatar"></el-avatar>
              </el-col>
              <el-col :span="18">
                <div class="name">{{ store.userinfo.name }}</div>
                <div class="ore">矿石：{{ store.userinfo.ore }}<el-icon class="icon">
                    <ArrowRight />
                  </el-icon></div>
              </el-col>
            </el-row>
          </div>
          <div class="two">
            <div class="level">掘友等级 JY.{{ store.userinfo.level }}</div>
            <div class="exprience">{{ store.userinfo.exprience }}/{{ store.userinfo.all_exprience }}</div>
            <div class="exprience_line">
              <el-progress :percentage="store.userinfo.exprience / store.userinfo.all_exprience * 100"
                :show-text="false" />
            </div>
          </div>
          <div class="three">
            <el-row>
              <el-col :span="8" class="item">
                <div>{{ store.userinfo.follow }}</div>
                <div>关注</div>
              </el-col>
              <el-col :span="8" class="item">
                <div>{{ store.userinfo.star }}</div>
                <div>赞过</div>
              </el-col>
              <el-col :span="8" class="item">
                <div>{{ store.userinfo.collect }}</div>
                <div>收藏</div>
              </el-col>
            </el-row>
          </div>
          <div class="four">
            <el-row>
              <el-col :span="12" class="item">
                <el-icon class="icon" :size="20">
                  <UserFilled />
                </el-icon>
                <span>我的主页</span>
              </el-col>
              <el-col :span="12" class="item">
                <el-icon class="icon" :size="20">
                  <Present />
                </el-icon>
                <span>成长福利</span>
              </el-col>
              <el-col :span="12" class="item">
                <el-icon class="icon" :size="20">
                  <EditPen />
                </el-icon>
                <span>闪念笔记</span>
              </el-col>
              <el-col :span="12" class="item">
                <el-icon class="icon" :size="20">
                  <Memo />
                </el-icon>
                <span>会员中心</span>
              </el-col>
              <el-col :span="12" class="item">
                <el-icon class="icon" :size="20">
                  <Reading />
                </el-icon>
                <span>课程中心</span>
              </el-col>
              <el-col :span="12" class="item">
                <el-icon class="icon" :size="20">
                  <Ticket />
                </el-icon>
                <span>我的优惠</span>
              </el-col>
              <el-col :span="12" class="item">
                <el-icon class="icon" :size="20">
                  <Flag />
                </el-icon>
                <span>我的报名</span>
              </el-col>
              <el-col :span="12" class="item">
                <el-icon class="icon" :size="20">
                  <Connection />
                </el-icon>
                <span>我的足迹</span>
              </el-col>
            </el-row>
          </div>
          <div class="five">
            <el-link class="item">我的设置</el-link>
            <el-link class="item" @click="logout">退出登录</el-link>
          </div>
        </div>
      </template>
    </el-popover>
  </div>
</template>

<style scoped>
/* 头像 */
.user img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}

/* 用户浮窗 */
.user_float .avatar {
  text-align: center;
}

.user_float .name {
  cursor: pointer;
}

.user_float .ore {
  font-size: var(--el-font-size-extra-small);
  margin-top: 6px;
  cursor: pointer;
}

.user_float .ore .icon {
  position: relative;
  top: 1.5px;
  right: -3px;
}

.user_float .two {
  background: linear-gradient(var(--el-color-primary-light-8), var(--el-color-primary-light-9));
  height: 50px;
  border-radius: 10px;
  padding: 10px;
  position: relative;
  margin-top: 10px;
  cursor: pointer;
}

.user_float .two .level {
  font-size: var(--el-font-size-extra-small);
  color: var(--el-color-primary);
}

.user_float .two .exprience {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: var(--el-font-size-extra-small);
  color: var(--el-color-primary);
}

.user_float .two .exprience_line {
  margin-top: 10px;
}

.user_float .three {
  text-align: center;
  margin-top: 10px;
}

.user_float .three .item {
  cursor: pointer;
  color: var(--el-text-color-primary);
}

.user_float .three .item div:last-child {
  font-size: var(--el-font-size-extra-small);
}

.user_float .four {
  margin-top: 10px;
}

.user_float .four .item {
  padding: 5px;
  padding-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
}

.user_float .four .item:hover {
  background-color: var(--el-color-info-light-9);
}

.user_float .four .item .icon {
  position: relative;
  top: 4px;
}

.user_float .four .item span {
  margin-left: 10px;
}

.user_float .five {
  position: relative;
}

.user_float .five .item {
  font-size: var(--el-font-size-extra-small);
}

.user_float .five .item:hover:after {
  border: 0;
}

.user_float .five .item:last-child {
  position: absolute;
  right: 10px;
}
</style>
