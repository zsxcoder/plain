<script setup>
import { ref } from 'vue'

// 模拟赞助者数据
const sponsors = ref([
  {
    id: 1,
    name: '张三',
    avatar: 'https://ui-avatars.com/api/?name=张三&background=random&color=fff',
    date: '2024-01-01',
    amount: '¥50',
  },
  {
    id: 2,
    name: '李四',
    avatar: 'https://ui-avatars.com/api/?name=李四&background=random&color=fff',
    date: '2024-01-02',
    amount: '¥30',
  },
  {
    id: 3,
    name: '王五',
    date: '2024-01-03',
    amount: '¥20',
  },
])

// 处理图片加载
function handleImageLoad(event) {
  event.target.style.opacity = '1'
  const loadingBar = event.target.parentElement.querySelector('.loading-bar')
  if (loadingBar)
    loadingBar.style.opacity = '0'
}
</script>

<template>
  <div class="sponsor-page">
    <div class="card-base p-6 md:p-8">
      <div class="flex items-center gap-2 mb-6">
        <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--primary)] text-white dark:text-black/70">
          <i class="icon-favorite" />
        </div>
        <h1 class="text-2xl font-bold text-black dark:text-white">
          赞助支持
        </h1>
      </div>

      <div class="mb-6">
        <p class="mb-3 text-lg text-black/80 dark:text-white/80">
          如果您觉得我的内容对您有帮助，欢迎通过以下方式支持我的创作。您的每一份支持都是我持续创作的动力！
        </p>
        <p class="text-sm text-black/60 dark:text-white/60">
          所有赞助将用于网站维护、服务器费用以及内容创作。
        </p>
      </div>

      <div class="mx-auto mb-6 grid max-w-4xl grid-cols-1 gap-6 lg:grid-cols-2">
        <!-- 支付宝 -->
        <div class="donate-card">
          <div class="flex items-center gap-3 mb-4">
            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
              <i class="icon-alipay text-[1.5rem] text-white" />
            </div>
            <div>
              <h3 class="text-lg font-bold text-black dark:text-white">
                支付宝
              </h3>
              <p class="text-sm text-black/60 dark:text-white/60">
                扫码支付
              </p>
            </div>
          </div>
          <div class="qr-code-placeholder">
            <div class="mx-auto relative h-48 w-48 overflow-hidden rounded-lg">
              <div class="loading-bar absolute top-1/2 left-1/2 z-10 h-1 w-32 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                <div class="loading-progress h-full w-8 animate-loading-progress rounded-full bg-[var(--primary)]" />
              </div>
              <img
                src="https://cdn.jsdmirror.com/gh/zsxcoder/picx-images-hosting@master/qrcode/alipay-qrcode.2oc0ofw4v3.webp"
                alt="支付宝二维码"
                class="h-full w-full object-cover opacity-0 transition-opacity duration-500"
                @load="handleImageLoad"
              >
            </div>
          </div>
        </div>

        <!-- 微信支付 -->
        <div class="donate-card">
          <div class="flex items-center gap-3 mb-4">
            <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500">
              <i class="icon-wechat text-[1.5rem] text-white" />
            </div>
            <div>
              <h3 class="text-lg font-bold text-black dark:text-white">
                微信支付
              </h3>
              <p class="text-sm text-black/60 dark:text-white/60">
                扫码支付
              </p>
            </div>
          </div>
          <div class="qr-code-placeholder">
            <div class="mx-auto relative h-48 w-48 overflow-hidden rounded-lg">
              <div class="loading-bar absolute top-1/2 left-1/2 z-10 h-1 w-32 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                <div class="loading-progress h-full w-8 animate-loading-progress rounded-full bg-[var(--primary)]" />
              </div>
              <img
                src="https://cdn.jsdmirror.com/gh/zsxcoder/picx-images-hosting@master/qrcode/wechat-qrcode.4n87es1yz3.webp"
                alt="微信支付二维码"
                class="h-full w-full object-cover opacity-0 transition-opacity duration-500"
                @load="handleImageLoad"
              >
            </div>
          </div>
        </div>
      </div>

      <!-- 其他支持方式 -->
      <div class="card-base mb-6 p-6">
        <h2 class="mb-3 text-xl font-bold text-black dark:text-white">
          其他支持方式
        </h2>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div class="support-card">
            <div class="flex items-center gap-2 mb-2">
              <i class="icon-share text-[1.2rem] text-[var(--primary)]" />
              <span class="font-semibold text-black dark:text-white">分享推荐</span>
            </div>
            <p class="text-sm text-black/60 dark:text-white/60">
              将我的博客分享给更多朋友
            </p>
          </div>

          <div class="support-card">
            <div class="flex items-center gap-2 mb-2">
              <i class="icon-comment text-[1.2rem] text-[var(--primary)]" />
              <span class="font-semibold text-black dark:text-white">留言互动</span>
            </div>
            <p class="text-sm text-black/60 dark:text-white/60">
              在文章下方留下您的想法
            </p>
          </div>

          <div class="support-card">
            <div class="flex items-center gap-2 mb-2">
              <i class="icon-star text-[1.2rem] text-[var(--primary)]" />
              <span class="font-semibold text-black dark:text-white">关注订阅</span>
            </div>
            <p class="text-sm text-black/60 dark:text-white/60">
              订阅RSS或关注社交媒体
            </p>
          </div>
        </div>
      </div>

      <!-- 已赞助的小伙伴 -->
      <div class="sponsors-section card-base p-6">
        <h2 class="mb-3 flex items-center gap-2 text-xl font-bold text-black dark:text-white">
          <i class="icon-group text-[1.5rem] text-[var(--primary)]" />
          <span>已赞助的小伙伴</span>
        </h2>
        <p class="mb-4 text-sm text-black/60 dark:text-white/60">
          如果您已赞助，并且想加入赞助名单，请联系我
        </p>
        <div class="sponsors-grid">
          <div v-for="sponsor in sponsors" :key="sponsor.id" class="sponsor-card">
            <div class="flex items-center gap-3 rounded-lg border border-black/10 bg-[var(--card-bg)] p-4 dark:border-white/10" style="backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);">
              <div class="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg">
                <img
                  v-if="sponsor.avatar"
                  :src="sponsor.avatar"
                  :alt="`${sponsor.name}的头像`"
                  class="h-full w-full object-cover opacity-0 transition-opacity duration-500"
                  @load="handleImageLoad"
                >
                <i v-else class="icon-person text-[1.2rem] text-gray-500 dark:text-gray-400" />
              </div>
              <div class="flex-1">
                <h4 class="text-sm font-semibold text-black dark:text-white">
                  {{ sponsor.name }}
                </h4>
                <p class="text-xs text-black/60 dark:text-white/60">
                  {{ sponsor.date }}
                </p>
              </div>
              <div class="text-xs font-medium text-[var(--primary)]">
                {{ sponsor.amount }}
              </div>
            </div>
          </div>
          <div v-if="sponsors.length === 0" class="py-8 text-center text-sm text-black/60 dark:text-white/60">
            暂无赞助记录，期待您的支持！
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sponsor-page {
  @apply mx-auto max-w-4xl py-8;
}

.donate-card {
  @apply flex flex-col rounded-lg border border-black/10 bg-[var(--card-bg)] p-4 transition hover:border-black/20 dark:border-white/10 dark:hover:border-white/20;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.support-card {
  @apply rounded-lg border border-black/10 bg-[var(--card-bg)] p-4 transition hover:border-black/20 hover:bg-black/5 dark:border-white/10 dark:hover:border-white/20 dark:hover:bg-white/5;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.qr-code-placeholder {
  @apply text-center;
}

.sponsors-section {
  @apply mt-6;
}

.sponsors-grid {
  @apply grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3;
}

.sponsor-card {
  @apply transition-all duration-200 hover:scale-105 hover:shadow-md;
}

.loading-bar {
  transition: opacity 0.5s ease-out;
}

@keyframes loading-progress {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(400%);
  }
}

.animate-loading-progress {
  animation: loading-progress 1.5s ease-in-out infinite;
}

/* 图标样式 */
.icon-favorite::before {
  content: "❤️";
  font-size: 1.5rem;
}

.icon-share::before {
  content: "🔗";
  font-size: 1.2rem;
}

.icon-comment::before {
  content: "💬";
  font-size: 1.2rem;
}

.icon-star::before {
  content: "⭐";
  font-size: 1.2rem;
}

.icon-group::before {
  content: "👥";
  font-size: 1.5rem;
}

.icon-person::before {
  content: "👤";
  font-size: 1.2rem;
}

.icon-alipay::before {
  content: "支付宝";
  font-size: 0.8rem;
  font-weight: bold;
}

.icon-wechat::before {
  content: "微信";
  font-size: 0.8rem;
  font-weight: bold;
}
</style>
