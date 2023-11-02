import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // 登录 与 用户 相关
  const isLogin = ref(false)
  const userinfo = ref({})
  const login = (info) => {
    isLogin.value = true
    userinfo.value = info
  }
  const logout = () => {
    isLogin.value = false
    userinfo.value = {}
  }

  return { isLogin, userinfo, login, logout }
})
