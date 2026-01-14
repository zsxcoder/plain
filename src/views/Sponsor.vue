<script setup>
import { onMounted, ref } from 'vue'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

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
  const loadingBar = event.target.closest('.relative').querySelector('.loading-bar')
  if (loadingBar) {
    loadingBar.style.opacity = '0'
    loadingBar.style.pointerEvents = 'none'
  }
}
// 初始化 Fancybox
onMounted(() => {
  Fancybox.bind('[data-fancybox]', {
    // 配置选项
  })
})
</script>

<template>
  <div class="sponsor-page">
    <div class="card-base p-6 md:p-8">
      <div class="mb-6 flex items-center gap-2">
        <div class="h-8 w-8 flex items-center justify-center rounded-lg bg-[var(--primary)] text-white dark:text-black/70">
          <i class="icon-favorite" />
        </div>
        <h1 class="text-2xl text-black font-bold dark:text-white">
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

      <div class="grid grid-cols-1 mx-auto mb-6 max-w-4xl gap-6 lg:grid-cols-2">
        <!-- 支付宝 -->
        <div class="donate-card">
          <div class="mb-4 flex items-center gap-3">
            <div class="h-10 w-10 flex items-center justify-center rounded-lg bg-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                <path fill="#FFFFFF" d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48S0 37.255 0 24S10.745 0 24 0m0 4.364C13.155 4.364 4.364 13.155 4.364 24S13.155 43.636 24 43.636c6.738 0 12.683-3.393 16.22-8.565a64 64 0 0 1-6.683-2.402q-1.855-.78-5.541-2.459C25.056 33.173 20.769 36 16.174 36c-3.188-.016-8.538-1.627-8.538-6.654s4.956-6.224 8.172-6.224q2.919 0 10.33 3.222l.077.03q1.989-2.434 2.73-5.653l.1-.464h-12.87v-2.32h5.857v-2.9h-8.201v-1.74h8.201l.001-3.479h4.687v3.48h9.374v1.74H26.72v2.899h7.486q-.165 1.086-.371 1.973l-.084.347q-.517 1.868-2.325 5.442c-.32.632-.782 1.364-1.366 2.139q2.766 1.024 5.6 1.99q3.67 1.249 6.345 2.02A19.6 19.6 0 0 0 43.636 24c0-10.845-8.791-19.636-19.636-19.636m-13.685 24.18c0 3.198 6.69 4.472 12.11 1.106q-.915-.57-1.71-1.213l-.018-.008l-.427-.262q-5.074-3.087-7.882-3.348c-1.719-.159-5.493.527-5.493 3.725m18.73-8.287h2.209z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg text-black font-bold dark:text-white">
                支付宝
              </h3>
              <p class="text-sm text-black/60 dark:text-white/60">
                扫码支付
              </p>
            </div>
          </div>
          <div class="qr-code-placeholder">
            <div class="relative mx-auto h-48 w-48 overflow-hidden rounded-lg">
              <div class="loading-bar absolute left-1/2 top-1/2 z-10 h-1 w-32 overflow-hidden rounded-full bg-gray-200 -translate-x-1/2 -translate-y-1/2 dark:bg-gray-700">
                <div class="loading-progress animate-loading-progress h-full w-8 rounded-full bg-[var(--primary)]" />
              </div>
              <a href="https://cdn.jsdmirror.com/gh/zsxcoder/picx-images-hosting@master/qrcode/alipay-qrcode.2oc0ofw4v3.webp" data-fancybox="donate" data-caption="支付宝二维码">
                <img
                  src="https://cdn.jsdmirror.com/gh/zsxcoder/picx-images-hosting@master/qrcode/alipay-qrcode.2oc0ofw4v3.webp"
                  alt="支付宝二维码"
                  class="h-full w-full cursor-pointer object-cover opacity-0 transition-opacity duration-500"
                  @load="handleImageLoad"
                >
              </a>
            </div>
          </div>
        </div>

        <!-- 微信支付 -->
        <div class="donate-card">
          <div class="mb-4 flex items-center gap-3">
            <div class="h-10 w-10 flex items-center justify-center rounded-lg bg-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g fill="none" stroke="#FFFFFF" stroke-linejoin="round">
                  <path stroke-linecap="round" stroke-width="2" d="M7 7h.009m5.982 0H13m4.991 7.5H18m-4 0h.009" />
                  <path stroke-width="1.5" d="M10 16c0 2.761 2.686 5 6 5c.907 0 1.767-.168 2.538-.468c.189-.073.393-.1.592-.063L22 21l-.652-2.03a1.13 1.13 0 0 1 .11-.89A4.3 4.3 0 0 0 22 16c0-2.761-2.686-5-6-5s-6 2.239-6 5Z" />
                  <path stroke-width="1.5" d="M17.873 11.249Q18 10.639 18 10c0-3.866-3.582-7-8-7s-8 3.134-8 7c0 1.112.297 2.164.824 3.098c.147.26.196.567.108.853L2 17l3.914-.76c.208-.041.422-.013.617.07a9 9 0 0 0 3.589.69" />
                </g>
              </svg>
            </div>
            <div>
              <h3 class="text-lg text-black font-bold dark:text-white">
                微信支付
              </h3>
              <p class="text-sm text-black/60 dark:text-white/60">
                扫码支付
              </p>
            </div>
          </div>
          <div class="qr-code-placeholder">
            <div class="relative mx-auto h-48 w-48 overflow-hidden rounded-lg">
              <div class="loading-bar absolute left-1/2 top-1/2 z-10 h-1 w-32 overflow-hidden rounded-full bg-gray-200 -translate-x-1/2 -translate-y-1/2 dark:bg-gray-700">
                <div class="loading-progress animate-loading-progress h-full w-8 rounded-full bg-[var(--primary)]" />
              </div>
              <a href="https://cdn.jsdmirror.com/gh/zsxcoder/picx-images-hosting@master/qrcode/wechat-qrcode.4n87es1yz3.webp" data-fancybox="donate" data-caption="微信支付二维码">
                <img
                  src="https://cdn.jsdmirror.com/gh/zsxcoder/picx-images-hosting@master/qrcode/wechat-qrcode.4n87es1yz3.webp"
                  alt="微信支付二维码"
                  class="h-full w-full cursor-pointer object-cover opacity-0 transition-opacity duration-500"
                  @load="handleImageLoad"
                >
              </a>
            </div>
          </div>
        </div>

        <!-- 爱发电 -->
        <div class="donate-card lg:col-span-2">
          <div class="mb-4 flex items-center gap-3">
            <div class="h-10 w-10 flex items-center justify-center rounded-lg bg-[#e11d48]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                <path fill="#FFFFFF" d="M10.586 1C12.268 1 13.5 2.37 13.5 4.25c0 1.745-.996 3.359-2.622 4.831q-.25.226-.509.438l1.116 5.584a.75.75 0 0 1-.991.852l-2.409-.876a.25.25 0 0 0-.17 0l-2.409.876a.75.75 0 0 1-.991-.852L5.63 9.519a14 14 0 0 1-.51-.438C3.497 7.609 2.5 5.995 2.5 4.25C2.5 2.37 3.732 1 5.414 1c.963 0 1.843.403 2.474 1.073L8 2.198l.112-.125a3.4 3.4 0 0 1 2.283-1.068zm-3.621 9.495l-.718 3.594l1.155-.42a1.75 1.75 0 0 1 1.028-.051l.168.051l1.154.42l-.718-3.592q-.3.195-.505.314l-.169.097a.75.75 0 0 1-.72 0a10 10 0 0 1-.515-.308zM10.586 2.5c-.863 0-1.611.58-1.866 1.459c-.209.721-1.231.721-1.44 0C7.025 3.08 6.277 2.5 5.414 2.5C4.598 2.5 4 3.165 4 4.25c0 1.23.786 2.504 2.128 3.719c.49.443 1.018.846 1.546 1.198l.325.21l.076-.047l.251-.163a13 13 0 0 0 1.546-1.198C11.214 6.754 12 5.479 12 4.25c0-1.085-.598-1.75-1.414-1.75" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg text-black font-bold dark:text-white">
                爱发电
              </h3>
              <p class="text-sm text-black/60 dark:text-white/60">
                支持创作者
              </p>
            </div>
          </div>
          <div class="qr-code-placeholder">
            <div class="relative mx-auto h-48 w-48 overflow-hidden rounded-lg">
              <div class="loading-bar absolute left-1/2 top-1/2 z-10 h-1 w-32 overflow-hidden rounded-full bg-gray-200 -translate-x-1/2 -translate-y-1/2 dark:bg-gray-700">
                <div class="loading-progress animate-loading-progress h-full w-8 rounded-full bg-[var(--primary)]" />
              </div>
              <a href="https://cdn.jsdmirror.com/gh/zsxjun-github/picx-images-hosting@main/qrcode/afdian-qrcode.4u2g1q6t9h.webp" data-fancybox="donate" data-caption="爱发电二维码">
                <img
                  src="https://cdn.jsdmirror.com/gh/zsxcoder/picx-images-hosting@master/qrcode/aifadian.1aphkelemk.webp"
                  alt="爱发电二维码"
                  class="h-full w-full cursor-pointer object-cover opacity-0 transition-opacity duration-500"
                  @load="handleImageLoad"
                >
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- 其他支持方式 -->
      <div class="card-base mb-6 p-6">
        <h2 class="mb-3 text-xl text-black font-bold dark:text-white">
          其他支持方式
        </h2>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div class="support-card">
            <div class="mb-2 flex items-center gap-2">
              <i class="icon-share text-[1.2rem] text-[var(--primary)]" />
              <span class="text-black font-semibold dark:text-white">分享推荐</span>
            </div>
            <p class="text-sm text-black/60 dark:text-white/60">
              将我的博客分享给更多朋友
            </p>
          </div>

          <div class="support-card">
            <div class="mb-2 flex items-center gap-2">
              <i class="icon-comment text-[1.2rem] text-[var(--primary)]" />
              <span class="text-black font-semibold dark:text-white">留言互动</span>
            </div>
            <p class="text-sm text-black/60 dark:text-white/60">
              在文章下方留下您的想法
            </p>
          </div>

          <div class="support-card">
            <div class="mb-2 flex items-center gap-2">
              <i class="icon-star text-[1.2rem] text-[var(--primary)]" />
              <span class="text-black font-semibold dark:text-white">关注订阅</span>
            </div>
            <p class="text-sm text-black/60 dark:text-white/60">
              订阅RSS或关注社交媒体
            </p>
          </div>
        </div>
      </div>

      <!-- 已赞助的小伙伴 -->
      <div class="card-base sponsors-section p-6">
        <h2 class="mb-3 flex items-center gap-2 text-xl text-black font-bold dark:text-white">
          <i class="icon-group text-[1.5rem] text-[var(--primary)]" />
          <span>已赞助的小伙伴</span>
        </h2>
        <p class="mb-4 text-sm text-black/60 dark:text-white/60">
          如果您已赞助，并且想加入赞助名单，<a href="mailto:3149261770@qq.com" class="text-[var(--primary)] hover:underline">请联系我</a>
        </p>
        <div class="sponsors-grid">
          <div v-for="sponsor in sponsors" :key="sponsor.id" class="sponsor-card">
            <div class="flex items-center gap-3 border border-black/10 rounded-lg bg-[var(--card-bg)] p-4 dark:border-white/10" style="backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);">
              <div class="h-10 w-10 flex items-center justify-center overflow-hidden rounded-lg">
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
                <h4 class="text-sm text-black font-semibold dark:text-white">
                  {{ sponsor.name }}
                </h4>
                <p class="text-xs text-black/60 dark:text-white/60">
                  {{ sponsor.date }}
                </p>
              </div>
              <div class="text-xs text-[var(--primary)] font-medium">
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
