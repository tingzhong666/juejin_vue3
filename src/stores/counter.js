import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  let isLogin = ref(true)
  let userinfo =reactive({
    avatar: 'src/assets/toux.jpg',
    name: 'tingzhong',
    ore: 100,
    level: 3,
    // 当前等级已有经验
    exprience: 129.2,
    // 当前等级升级所需要得经验
    all_exprience: 150,
    follow: 23,
    star: 92,
    collect: 34
  })

  return { count, doubleCount, increment, isLogin, userinfo }
})
