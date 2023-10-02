import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  let isLogin = ref(true)
  let userinfo =reactive({
    avatar: '/mock/toux.jpg',
    name: 'tingzhong',
    ore: 100,
    level: 3,
    // 当前等级已有经验
    exprience: 129.2,
    // 当前等级升级所需要得经验
    all_exprience: 150,
    follow: 23,
    star: 92,
    collect: 34,
    id: 'dsfwoiejowenro23423545234'
  })

  return { isLogin, userinfo }
})
