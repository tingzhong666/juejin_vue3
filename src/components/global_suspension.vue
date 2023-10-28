<script setup>
</script>

<template>
  <div class="global-suspension">
    <!-- 返回顶部 -->
    <el-backtop :right="0" :bottom="0" class="my-backtop" />

    <!-- 反馈 -->
    <el-card class="item"><el-icon class="iconfont icon-pinglun1"></el-icon></el-card>

    <!-- 菜单小按钮 -->
    <el-popover placement="left" :width="150" trigger="hover">
      <template #reference>
        <el-card class="item"><el-icon>
            <MoreFilled />
          </el-icon></el-card>
      </template>
      <template #default>
        <!-- 几个小菜单项 -->
        <div class="menu">
          <div class="menu-item download"><el-icon class="iconfont icon-xiazai"></el-icon> 下载APP</div>
          <div class="menu-item weixin"><el-icon class="iconfont icon-weixin"></el-icon>微信公众号</div>
          <div class="menu-item xinlang"><el-icon class="iconfont icon-xinlang"></el-icon>新浪微博</div>
        </div>
      </template>
    </el-popover>
  </div>
</template>

<style scoped>
.global-suspension {
  position: fixed;
  right: 30px;
  bottom: 30px;
}

.my-backtop {
  position: relative;
}

.item {
  background-color: #fff;
  font-size: 20px;
  font-weight: 700;
  border-radius: 50%;
  color: var(--el-color-primary);
  padding: 6px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
}
/* 小菜单项 */
.menu-item{
  font-size: 14px;
  cursor: pointer;
  padding: 10px;
}
.menu-item:hover{
  background-color: var(--el-color-info-light-9);
}
.weixin .iconfont,
.xinlang .iconfont{
  font-size: 20px;
}
.menu-item .iconfont{
  margin-right: 10px;
}
</style>
