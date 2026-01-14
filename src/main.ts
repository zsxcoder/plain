import { createApp } from 'vue'
import './style.css'
import 'virtual:uno.css'
import '@unocss/reset/normalize.css'
import { createPinia } from 'pinia'
import directives from './directives/index'
import App from './App.vue'
import router from './router'
import i18n from './locale'
import './custom.css'

const pinia = createPinia()

const app = createApp(App)
app.use(directives)
  .use(router)
  .use(pinia)
  .use(i18n)
  .mount('#app')

// 添加 Vercount 脚本
if (typeof window !== 'undefined') {
  const script = document.createElement('script')
  script.src = 'https://events.vercount.one/js'
  script.defer = true
  script.dataset.vercount = 'true'
  document.head.appendChild(script)
}
