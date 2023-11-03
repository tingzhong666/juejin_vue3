<script setup>
import * as api from '@/http/api'
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore()

// 登录面板
const loginPanel = ref(false)
const loginPanelToggle = () => {
  loginPanel.value = !loginPanel.value
}
// 账号密码
const username = ref('tingzhong')
const password = ref('tingzhong')
// 登录
const login = async () => {
  const res = await api.user.login({ username: username.value, password: password.value })
  if (res === null) return
  counterStore.login(res)
}
</script>

<template>
  <div class="login">
    <el-popover placement="top-start" :width="300" trigger="hover" transition="none" :hide-after="0">
      <template #reference>
        <el-button type="primary" plain @click="loginPanelToggle">登录 | 注册</el-button>
      </template>
      <template #default>
        <el-space direction="vertical" class="login_float">
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
            <el-button type="primary" class="child" @click="loginPanelToggle">登录/注册</el-button>
          </div>
        </el-space>
      </template>
    </el-popover>


    <el-dialog class="login-dialog" v-model="loginPanel" title="登录掘金畅享更多权益">
      <div class="login-content">
        <div class="login-panel">
          <div class="login-method">密码登录</div>
          <el-input class="username-input" v-model="username" placeholder="请输入邮箱/手机号（国际号码加区号）" />
          <el-input class="password-input" v-model="password" placeholder="请输入密码" type="password">
            <template #suffix>
              <span class="forgot-password">忘记密码</span>
            </template>
          </el-input>
          <div class="login-buttons">
            <el-button class="register-button" type="primary" plain>注册</el-button>
            <el-button class="login-button" type="primary" @click="login">登录</el-button>
          </div>
          <div class="other-login-methods">
            <span class="other-login-label">其他登录:</span>
            <img class="login-icon" src="" alt="">
            <img class="login-icon" src="" alt="">
            <img class="login-icon" src="" alt="">
          </div>
        </div>

        <div class="qr-login-panel">
          <div class="qr-login-title">
            <span class="qr-login-method">扫码登录</span>
            <span class="qr-version">(6.4.1及以上版本支持)</span>
          </div>
          <img class="qr-code" src="" alt="">
          <div class="qr-instructions">
            <span class="qr-instruction">打开</span>
            <span class="app">稀土掘金APP</span>
          </div>
          <div class="qr-login-instructions">点击“我-左上角扫一扫”登录</div>
        </div>
      </div>

      <div class="agreement">
        <span class="agreement-text">注册登录即表示同意</span>
        <span class="user-agreement">用户协议</span>
        <span class="and-text">和</span>
        <span class="privacy-policy">隐私政策</span>
      </div>
    </el-dialog>



  </div>
</template>

<style scoped>
/* 登录注册按钮 */
.login .el-button:focus,
.el-button:hover {
  --el-button-hover-text-color: var(--el-button-text-color);
  --el-button-hover-bg-color: var(--el-button-bg-color);
  --el-button-hover-border-color: var(--el-button-border-color);
}

.login .el-button:active {
  --el-button-active-text-color: var(--el-button-text-color);
  --el-button-active-bg-color: var(--el-button-bg-color);
  --el-button-active-border-color: var(--el-button-border-color);
}


/* 登录注册 浮窗 */
.login_float {
  padding: 10px;
}

.login_float .awards {
  border: 1px solid var(--el-color-primary);
  border-radius: 5px;
  background: linear-gradient(to bottom, var(--el-color-primary-light-9), #ffffffff);
  padding: 10px;
}

.login_float .awards .child {
  font-size: 16px;
  text-align: center;
}

.login_float .awards .child:nth-child(1) {
  margin-bottom: 15px;
}

.login_float .awards .child .desc {
  font-size: 14px;
  margin-top: 5px;
}

.login_float .desc {
  font-size: 12px;
}

.login_float .btn .child {
  width: 250px;
}

.login_float .btn .child:active,
.login_float .btn .child:focus {
  background-color: var(--el-button-bg-color);
}

/* 登录面板 */
.login-content {
  display: flex;
  margin-bottom: 40px;
}

.login-panel {
  flex: 1;
  padding-right: 40px;
  border-right: 1px solid var(--el-border-color-light);
}

.login-method {
  font-size: 16px;
  color: #333;
  margin-bottom: 20px;
}

.username-input {
  margin-bottom: 20px;
}

.password-input {
  margin-bottom: 20px;
}

.login-buttons {
  margin-bottom: 20px;
  display: flex;
}

.register-button {
  flex: 1;
}

.login-button {
  flex: 1;
}

.qr-login-panel {
  padding-left: 40px;
  flex: 1;
}
.qr-login-method{
  color: #333;
  font-size: 16px;
}
.qr-version{
  color: var(--el-color-info);
  font-size: 12px;
}

.app {
  color: var(--el-color-primary);
  cursor: pointer;
}

.agreement {
  text-align: center;
}

.user-agreement,
.privacy-policy {
  color: var(--el-color-primary);
  cursor: pointer;
}</style>
