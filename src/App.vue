<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Header from './components/Header.vue'
import Copyright from './components/Copyright.vue'
import BackToTop from './components/BackToTop.vue'
import { getNotice } from './api'

const notice = ref({
  content: '',
  color: 'rgba(255, 255, 255, 0.8)',
})
const noticeRef = ref<HTMLElement | null>(null)

onMounted(async () => {
  try {
    notice.value = await getNotice()
    const res = await fetch('https://api.ip.sb/geoip')
    // const res = await fetch('https://api.ip.uicop.com/json') // info.data.ip
    if (res.ok)
      await res.json()
      // 可以在这里使用 info.ip 做一些事情，比如记录日志
  }
  catch (error) {
    console.error('Error occurs at get IP,', error)
    return null
  }
})
</script>

<template>
  <div>
    <Header />
    <div class="my-20 min-h-60vh">
      <router-view class="all:transition-150" />
    </div>
    <Copyright v-if="notice.content" class="pb-10" />
    <Copyright v-else />
    <BackToTop />
    <div v-if="notice.content" :style="{ background: notice.color }" class="position-fixed bottom-0 left-0 right-0 m-0 p-2">
      <div ref="noticeRef" class="m-0 flex overflow-hidden text-center text-nowrap font-size-sm text-gray-900 mask-s">
        <p class="m-0 min-w-100% flex-shrink-0">
          {{ notice.content }}
        </p>
      </div>
    </div>
  </div>
</template>
