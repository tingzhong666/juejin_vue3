<script setup>
import { useCounterStore } from '@/stores/counter.js'
import { reactive } from 'vue'
const store = useCounterStore()

const inspiration = reactive([
  '创作者训练营',
  '中秋创意投稿大赛',
  '苹果发布会 2023'
])
</script>

<template>
  <div class="view">
    <div class="container">
      <div class="left">
        <el-link class="logo" href="/" :underline="false">
          <img src="@/assets/logo.svg" alt="">
        </el-link>

        <div class="nav">
          <el-menu
            default-active="1"
            mode="horizontal"
            @select="handleSelect"
            :router="true"
          >
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">沸点</el-menu-item>
            <el-menu-item index="3">课程</el-menu-item>
            <el-menu-item index="4">直播</el-menu-item>
            <el-menu-item index="5">活动</el-menu-item>
            <el-menu-item index="6">竞赛</el-menu-item>
            <el-menu-item index="7">商城</el-menu-item>
            <el-menu-item index="8">APP</el-menu-item>
            <el-menu-item index="9">插件</el-menu-item>
          </el-menu>
        </div>
      </div>

      <div class="right">
        <el-space :size="15">
          <!-- 搜索 -->
          <div class="search">
            <el-input
              v-model="input3"
              placeholder="探索稀土掘金"
            >
              <template #append>
                <el-icon><Search /></el-icon>
              </template>
            </el-input>
          </div>

          <!-- 创作者中心 -->
          <div class="creator">
            <el-button type="primary" color="#1e80ff" class="link">创作者中心</el-button>
            <el-popover
              placement="top-start"
              :width="330"
              trigger="hover"
              :hide-after="0"
              transition="none"
            >
              <template #reference>
                <el-button class="arrow" type="primary" color="#1e80ff">
                  <el-icon><CaretBottom /></el-icon>
                </el-button>
              </template>
              <template #default>
                <div class="creator_float">
                  <el-space fill :fill-ratio="20" class="menu" :size="0">
                    <div class="item">
                      <div class="icon"></div>
                      <el-text>写文章</el-text>
                    </div>
                    <div class="item">
                      <div class="icon"></div>
                      <el-text>发沸点</el-text>
                    </div>
                    <div class="item">
                      <div class="icon"></div>
                      <el-text>写笔记</el-text>
                    </div>
                    <div class="item">
                      <div class="icon"></div>
                      <el-text>写代码</el-text>
                    </div>
                    <div class="item">
                      <div class="icon"></div>
                      <el-text>草稿箱</el-text>
                    </div>
                  </el-space>
                  <el-row class="info">
                    <el-col :span="12" class="item">创作灵感</el-col>
                    <el-col :span="12" class="item">
                      <!-- 登录可路由 未登录弹出登录框 -->
                      <el-link>查看更多</el-link>
                    </el-col>
                  </el-row>
                  <el-row class="list">
                    <el-col v-for="item in inspiration" :key="item">
                      <el-row class="item">
                        <el-col :span="4">
                          <el-tag>话题</el-tag>
                        </el-col>
                        <el-col :span="20">#{{ item }}#</el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </div>
              </template>
            </el-popover>
          </div>

          <div class="vip">
            <el-link :underline="false">
              <img src="@/assets/vip.svg">
              <span>会员</span>
            </el-link>
          </div>

          <!-- 未登录显示 -->
          <div class="login" v-if="!store.isLogin">
            <el-popover
              placement="top-start"
              :width="300"
              trigger="hover"
              transition="none"
              hide-after="0"
            >
              <template #reference>
                <el-button type="primary" plain>登录 | 注册</el-button>
              </template>
              <template #default>
                <el-space  direction="vertical" class="login_float">
                  <el-row :gutter="20" class="awards">
                    <el-col :span="24" class="child">
                      首次登录 / 注册免费领取
                    </el-col>
                    <el-col :span="8" class="child">
                      <img src="@/assets/vip.svg" alt="">
                      <div class="desc">7天会员</div>
                    </el-col>
                    <el-col :span="8" class="child">
                      <img src="@/assets/787ccfbc0314568cd120b10713b3a54e.svg~tplv-k3u1fbpfcp-image.svg" alt="">
                      <div class="desc">小册7折券</div>
                    </el-col>
                    <el-col :span="8" class="child">
                      <img src="@/assets/0d15112b3c153745a9942e2b93674cf3.svg~tplv-k3u1fbpfcp-image.svg" alt="">
                      <div class="desc">5万钻石</div>
                    </el-col>
                  </el-row>
                  <div class="desc">免费试学课程 · 收藏优质内容 · 提升成长等级</div>
                  <div class="btn">
                    <el-button type="primary" class="child">登录/注册</el-button>
                  </div>
                </el-space>
              </template>
            </el-popover>
          </div>

          <!-- 登录显示 -->
          <div class="msg" v-if="store.isLogin">
            <el-popover
              placement="top-start"
              :width="200"
              trigger="hover"
            >
              <template #reference>
                <el-icon class="icon"><Message /></el-icon>
              </template>
              <template #default>
                <div class="msg_float">
                  <div class="item">评论</div>
                  <div class="item">赞和收藏</div>
                  <div class="item">新增粉丝</div>
                  <div class="item">私信</div>
                  <div class="item">系统通知</div>
                </div>
              </template>
            </el-popover>
          </div>

          <!-- 登录显示 -->
          <div class="user" v-if="store.isLogin">
            <el-popover
              placement="bottom"
              :width="200"
              trigger="click"
              transition="none"
              :hide-after="0"
            >
              <template #reference>
                <img src="@/assets/toux.jpg">
              </template>
              <template #default>
                <div class="user_float">
                  123
                </div>
              </template>
            </el-popover>
          </div>
        </el-space>
      </div>
    </div>
  </div>
</template>

<style scoped>
.view {
  background-color: #fff;
  height: 60px;
}

.container {
  width: 1440px;
  margin: 0 auto;
  position: relative;
}

.left{
  display: flex;
}

.logo{
  height: 60px;
  width: 100px;
}

.logo img {
  width: 100px;
}

.nav{
  width: 700px;
}

.nav .el-menu--horizontal.el-menu{
  border: 0;
}

.nav .el-menu--horizontal>.el-menu-item.is-active{
  border: 0;
  color: var(--el-text-color-primary);
}

.view .nav .el-menu--horizontal .el-menu-item:not(.is-disabled):focus{
  border: 0;
}

.nav .el-menu--horizontal>.el-menu-item{
  border: 0;
  padding-left: 13px;
  padding-right: 13px;
}

.nav .el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover{
  background-color: #ffffffff;
  border-bottom: 2px solid var(--el-menu-active-color);
  color: var(--el-text-color-primary);
}

.right {
  position: absolute;
  right: 0;
  top: 0;
  height: 60px;
  display: flex;
  align-items: center;
}

.right .search{
  width: 400px;
  height: 30px;
}
.creator .el-button:hover{
  background-color: #1171ee;
}

.creator .link{
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

/* 下箭头 */
.creator .arrow{
  margin: 0;
  width: 15px;
  padding: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

/* 创作者浮窗 */
.creator_float{
  cursor: pointer;
}
.creator_float .menu{
  width: 100%;
  cursor: pointer;
}

.creator_float .menu .item{
  text-align: center;
}
.creator_float .menu .item:hover{
  background-color: var(--el-menu-hover-bg-color);
  transition: all .3s;
}

.creator_float .menu .item .icon{
  background-image: url(@/assets/69704c654798bb27cffca68e5a79976e.svg);
  background-repeat: no-repeat;
  width: 50px;
  height: 50px;
  background-position: center;
  margin: 0 auto;
}
.creator_float .menu .el-space__item:nth-child(2) .icon{
  background-image: url(@/assets/c225c20007c699a48fe9aa8a32be2ee6.svg);
}

.creator_float .menu .el-space__item:nth-child(3) .icon{
  background-image: url(@/assets/92ff1e17678887b64c952833d9d0dd0b.svg);
}
.creator_float .menu .el-space__item:nth-child(4) .icon{
  background-image: url(@/assets/cf3f3dbcd5a32a7a4de5c7b834402cef.svg);
}
.creator_float .menu .el-space__item:nth-child(5) .icon{
  background-image: url(@/assets/b1008fc20ddf1733b5bd800ed4bcc18e.svg);
}

.creator_float .info{
  border-top: 1px solid var(--el-color-info-light-7);
  margin-top: 10px;
  padding-top: 10px;
}

.creator_float .info .item:first-child{
  color: var(--el-text-color-primary);
}

.creator_float .info .item:nth-child(2){
  text-align: right;
}

.creator_float .list .item{
  margin: 10px 0;
}

.creator_float .list .item:hover{
  color: var(--el-text-color-secondary);
}

/* 会员 */
.vip a{
  height: 60px;
}

.vip .el-link:hover{
  color: var(--el-link-text-color);
}

.login .el-button:focus, .el-button:hover{
  --el-button-hover-text-color: var(--el-button-text-color);
  --el-button-hover-bg-color: var(--el-button-bg-color);
  --el-button-hover-border-color: var(--el-button-border-color);
}

.login .el-button:active{
  --el-button-active-text-color: var(--el-button-text-color);
  --el-button-active-bg-color: var(--el-button-bg-color);
  --el-button-active-border-color: var(--el-button-border-color);
}

/* 消息 */
.msg{
  cursor: pointer;
}

.msg .icon{
  color: #86909c;
  height: 60px;
}
.msg .icon:hover{
  color: #252933;
}
/* 消息浮窗 */
.msg_float .item{
  line-height: 40px;
  padding: 0 10px;
  cursor: pointer;
}
.msg_float .item:hover{
  background-color: var(--el-color-info-light-9);
}

.user img{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}


/* 登录注册 浮窗 */
.login_float {
  padding: 10px;
}
.login_float .awards{
  border: 1px solid var(--el-color-primary);
  border-radius: 5px;
  background: linear-gradient(to bottom, var(--el-color-primary-light-9), #ffffffff);
  padding: 10px;
}

.login_float .awards .child{
  font-size: 16px;
  text-align: center;
}
.login_float .awards .child:nth-child(1){
  margin-bottom: 15px;
}
.login_float .awards .child .desc{
  font-size: 14px;
  margin-top: 5px;
}
.login_float .desc {
  font-size: 12px;
}

.login_float .btn .child{
  width: 250px;
}

.login_float .btn .child:active,
.login_float .btn .child:focus{
  background-color: var(--el-button-bg-color);
}

</style>
