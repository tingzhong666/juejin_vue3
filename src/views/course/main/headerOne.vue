<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import * as api from '@/http/api'

const route = useRoute()
const router = useRouter()
const emit = defineEmits(['toSearch'])

const category = ref([])
async function getCategory() {
  category.value.push({ name: '全部', path: route.path.startsWith('/course/bytetech') ? '/course/bytetech' : '/course' })
  let res = await api.course.getCategory({ course: route.path.startsWith('/course/bytetech') ? 'bytetech' : 'course' })
  res = res.map(v => {
    return {
      name: v.name,
      path: route.path.startsWith('/course/bytetech') ? '/course/bytetech/' + v.id : '/course/' + v.id,
    }
  })
  category.value.push(...res)
}
getCategory()


// 排序 all|new|hot|priceDescend|priceAscend
const sort = ref('all')
</script>

<template>
  <div class="header-1">
    <!-- 筛选 -->
    <div class="filter-course">
      <div class="label">课程：</div>
      <div class="label-content">
        <RouterLink :class="{ active: !route.path.startsWith('/course/bytetech') }" class="label-item" to="/course">掘金小册
        </RouterLink>
        <RouterLink :class="{ active: route.path.startsWith('/course/bytetech') }" class="label-item"
          to="/course/bytetech">字节内部课
          <div class="vip">VIP免费</div>
        </RouterLink>
      </div>
      <el-icon class="search" @click="$emit('toSearch')" v-show="!route.path.startsWith('/course/bytetech')">
        <Search />
      </el-icon>
    </div>
    <div class="filter-category">
      <div class="label">分类：</div>
      <div class="label-content">
        <RouterLink :class="{ active: route.path === item.path }" :to="item.path" class="label-item"
          v-for="item of category" :key="item.id">
          {{ item.name }}
        </RouterLink>
      </div>
    </div>
    <!-- 排序 -->
    <div class="sort" v-if="!route.path.includes('/course/bytetech')">
      <RouterLink :to="route.path" class="sort-item" :class="{ active: !route.query.sort }">全部</RouterLink>
      <RouterLink :to="route.path + '?sort=new'" class="sort-item" :class="{ active: route.query.sort === 'new' }">最新
      </RouterLink>
      <RouterLink :to="route.path + '?sort=hot'" class="sort-item" :class="{ active: route.query.sort === 'hot' }">热销
      </RouterLink>
      <RouterLink
        :to="route.query.sort === 'priceDescend' ? route.path + '?sort=priceAscend' : route.path + '?sort=priceDescend'"
        class="sort-item price-item" :class="{ active: route.query.sort && route.query.sort.includes('price') }">价格
        <el-icon class="icon Caret-Top" :class="{ 'active': route.query.sort === 'priceDescend' }">
          <CaretTop />
        </el-icon>
        <el-icon class="icon Caret-Bottom" :class="{ 'active': route.query.sort === 'priceAscend' }">
          <CaretBottom />
        </el-icon>
      </RouterLink>

      <a @click="router.push({ path: route.path, query: { ...route.query, type: route.query.type ? undefined : 'vip' } })"
        class="sort-item vip" :class="{ active: route.query.type && route.query.type === 'vip' }">
        <input type="checkbox" name="vip" :checked="route.query.type && route.query.type === 'vip'">只看vip课程
      </a>
    </div>
  </div>
</template>

<style scoped>
.filter-course,
.filter-category {
  display: flex;
  height: 40px;
  align-items: center;
}

.label {
  font-size: var(--el-font-size-base);
  color: var(--el-color-info-dark-2);
}

.label-content {
  flex: 1;
  font-size: var(--el-font-size-base);
}

/* routerlink初始化 */
.sort-item,
.label-item {
  text-decoration: none;
}

.label-item {
  color: var(--el-color-info-dark-2);
  margin: 0 4px;
  border: 1px solid var(--el-color-info-light-7);
  border-radius: 8px;
  padding: 2px 8px;
  display: inline-block;
}

.label-item:hover {
  color: var(--el-text-color-primary);
}

.label-item[href="/course/bytetech"] {
  position: relative;
}

.label-content .vip {
  position: absolute;
  top: -4px;
  right: -50px;
  background-color: rgb(246, 231, 203);
  border-radius: 8px 8px 8px 0;
  padding: 0 4px;
  font-weight: 700;
  color: rgb(126, 93, 37);
  font-size: 10px;
}

.label-item.active {
  background-color: var(--el-color-info-light-8);
  border: 1px solid var(--el-color-info-light-8);
}

.label-item.active:hover {
  background-color: var(--el-color-info-light-7);
  border: 1px solid var(--el-color-info-light-7);
}


.search {
  width: 16px;
  height: 16px;
  cursor: pointer;
}


.filter-category {
  border-bottom: 1px solid var(--el-color-info-light-8);
  padding-bottom: 10px;
}

/* 排序 */
.sort {
  margin-top: 12px;
  position: relative;
}

.sort-item {
  display: inline-block;
  color: var(--el-text-color-primary);
  font-size: var(--el-font-size-base);
  margin-right: 20px;
}

/* 价格排序 */
.price-item .icon.active,
.sort-item.active {
  color: var(--el-color-primary);
}

.price-item {
  position: relative;
}

.price-item .icon {
  position: absolute;
  right: -16px;
  font-size: 12px;
  color: var(--el-text-color-primary);
}

.price-item .Caret-Bottom {
  bottom: 0;
}

/* 只看vip课程 */
.sort-item.vip {
  position: absolute;
  right: 0;
  cursor: pointer;
  color: var(--el-text-color-primary);
}
</style>
