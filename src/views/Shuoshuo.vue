<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { Fancybox } from '@fancyapps/ui'
import { formatDate } from '../utils/format'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

interface ShuoshuoItem {
  id: string
  text: string
  image: string[]
  time: number
  views: string
  tags: string[]
}

interface ShuoshuoData {
  nextBefore: number
  Region: string
  version: string
  ChannelMessageData: ShuoshuoItem[]
}

const shuoshuoList = ref<ShuoshuoItem[]>([])
const loading = ref(true)
const error = ref('')
const displayCount = ref(10)

async function fetchShuoshuoData() {
  try {
    loading.value = true
    error.value = ''
    const response = await fetch('https://tg-api.mcyzsx.top/')
    if (!response.ok)
      throw new Error('Failed to fetch data')

    const data: ShuoshuoData = await response.json()
    shuoshuoList.value = data.ChannelMessageData
  }
  catch (err) {
    error.value = '获取数据失败，请稍后再试'
    console.error('Error fetching shuoshuo data:', err)
  }
  finally {
    loading.value = false
  }
}

function loadMore() {
  displayCount.value += 10
}

function openImage(images: string[], index: number) {
  Fancybox.show(
    images.map(src => ({
      src,
      type: 'image',
    })),
    {
      startIndex: index,
    },
  )
}

onMounted(() => {
  fetchShuoshuoData()
})

onUnmounted(() => {
  Fancybox.destroy()
})
</script>

<template>
  <div class="shuoshuo-page slide-enter-1">
    <h1 class="mb-6 text-2xl font-bold">
      说说
    </h1>

    <div v-if="loading" class="animate-blink animate-iteration-infinite text-center font-size-4 text-gray-400">
      加载中...
    </div>

    <div v-else-if="error" class="text-center text-red-500">
      {{ error }}
    </div>

    <div v-else-if="shuoshuoList.length === 0" class="text-center text-gray-400">
      暂无说说
    </div>

    <div v-else>
      <div class="shuoshuo-list space-y-6">
        <div
          v-for="item in shuoshuoList.slice(0, displayCount)"
          :key="item.id"
          class="shuoshuo-item border border-gray-200 rounded-lg p-4 transition-shadow dark:border-gray-700 hover:shadow-md"
        >
          <!-- 用户信息 -->
          <div class="user-info mb-3 flex items-center">
            <img
              src="https://home.zsxcoder.top/api/avatar.png"
              alt="Avatar"
              class="mr-3 h-10 w-10 rounded-full object-cover"
            >
            <div class="user-details">
              <div class="username font-medium">
                钟神秀
              </div>
              <div class="shuoshuo-meta flex items-center text-xs text-gray-500 dark:text-gray-400">
                <span class="shuoshuo-time mr-4">
                  {{ formatDate(item.time.toString()) }}
                </span>
                <span class="shuoshuo-views">
                  浏览 {{ item.views }}
                </span>
              </div>
            </div>
          </div>

          <div class="shuoshuo-content mb-4" v-html="item.text"></div>

          <div v-if="item.image && item.image.length > 0" class="shuoshuo-images grid grid-cols-2 mb-4 gap-2">
            <div
              v-for="(img, index) in item.image"
              :key="index"
              class="cursor-pointer"
              @click="openImage(item.image, index)"
            >
              <img
                :src="img"
                alt="Shuoshuo image"
                class="h-auto w-full rounded-md object-cover"
              >
            </div>
          </div>

          <div v-if="item.tags && item.tags.length > 0" class="shuoshuo-tags mt-3 flex flex-wrap gap-1">
            <span
              v-for="(tag, index) in item.tags"
              :key="index"
              class="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-300"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <!-- 加载更多按钮 -->
      <div v-if="displayCount < shuoshuoList.length" class="mt-8 text-center">
        <button
          class="border border-gray-300 rounded-md px-4 py-2 transition-colors dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
          @click="loadMore"
        >
          加载更多
        </button>
      </div>

      <div v-else-if="shuoshuoList.length > 0" class="mt-8 text-center text-gray-400">
        没有更多了
      </div>
    </div>
  </div>
</template>

<style scoped>
.shuoshuo-page {
  min-height: 70vh;
}

.shuoshuo-item {
  position: relative;
}

.user-info {
  margin-bottom: 1rem;
}

.username {
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.shuoshuo-content {
  line-height: 1.6;
}

.shuoshuo-content a {
  color: var(--primary);
  text-decoration: none;
}

.shuoshuo-content a:hover {
  text-decoration: underline;
}

.shuoshuo-content b {
  font-weight: 600;
}
</style>
