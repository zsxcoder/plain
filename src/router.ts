// createWebHistory createWebHashHistory
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('./views/Home.vue'),
  },
  {
    path: '/tags',
    name: 'tags',
    component: () => import('./views/Tags.vue'),
  },
  {
    path: '/posts',
    name: 'posts',
    component: () => import('./views/Posts.vue'),
  },
  {
    path: '/friend',
    name: 'friend',
    component: () => import('./views/Friend.vue'),
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('./views/Search.vue'),
  },
  {
    path: '/sponsor',
    name: 'sponsor',
    component: () => import('./views/Sponsor.vue'),
  },
  {
    path: '/shuoshuo',
    name: 'shuoshuo',
    component: () => import('./views/Shuoshuo.vue'),
  },
  {
    path: '/post/:num',
    name: 'post',
    component: () => import('./views/Post.vue'),
  },
]
export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() { // to, from, savedPosition
    return { top: 0 }
  },
})
