<script setup>

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

          <div class="creator">
            <el-button type="primary" color="#1e80ff" class="link">创作者中心</el-button>
            <el-popover
              placement="top-start"
              :width="200"
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
                小卡片
              </template>
            </el-popover>
          </div>

          <div class="vip">
            <el-link :underline="false">
              <img src="@/assets/vip.svg">
              <span>会员</span>
            </el-link>
          </div>

          <!-- 登录显示 -->
          <div class="msg">
            <el-popover
              placement="top-start"
              :width="200"
              trigger="hover"
            >
              <template #reference>
                <el-icon class="icon"><Message /></el-icon>
              </template>
              <template #default>
                321
              </template>
            </el-popover>
          </div>

          <!-- 登录显示 -->
          <div class="user">
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
                321
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

.vip a{
  height: 60px;
}

.vip .el-link:hover{
  color: var(--el-link-text-color);
}

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

.user img{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
