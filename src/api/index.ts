import { fetchWithToken } from '../utils/fetch'
import { formatFriend, formatPost } from '../utils/format'
import { isSpecificJSONFormat } from '../utils'
import type { Friend, Post, Tag } from '../types/index'
import { createNotify } from '../services/notifyService'

// const isDev = /^(10\.|172\.(1[6-9]|2\d|3[01])\.|192\.168\.|::1|127\.0\.0\.1|localhost)/.test(window.location.host)
const USERNAME: string = import.meta.env.V_USERNAME
const REPO: string = import.meta.env.V_REPOSITORY
const FR_REPO: string = import.meta.env.V_FRIENDS_REPO
const BLOG_PER_PAGE = import.meta.env.V_BLOG_COUNT || 100
const FRIEND_PER_PAGE = import.meta.env.V_FRIEND_COUNT || 100
if (!USERNAME || !REPO) {
  createNotify({
    message: 'V_USERNAME 和 V_REPOSITORY 没有配置',
    type: 'error',
    duration: 6000,
  })
  throw new Error('V_USERNAME, V_REPOSITORY must be set')
}

// API 链接拼接
const BLOG_PREFIX = `/repos/${USERNAME}/${REPO}`
const FR_PREFIX = `/repos/${USERNAME}/${FR_REPO}`

/*
 * 获取博客列表
 * */
export async function getPosts({ page = 1, pageSize = BLOG_PER_PAGE }) {
  const res = await fetchWithToken(`${BLOG_PREFIX}/issues?state=open&page=${page}&per_page=${pageSize}`)
  return res.map(formatPost)
}

/*
 * 获取友链列表
 * */
export async function getFriends({ page = 1, pageSize = FRIEND_PER_PAGE }) {
  const res = await fetchWithToken(`${FR_PREFIX}/issues?state=closed&page=${page}&per_page=${pageSize}&direction=asc`)
  return res.map(formatFriend)
}

interface Fr {
  body: string
}
export async function getFriendsByComments() {
  const res = await fetchWithToken(`${BLOG_PREFIX}/issues?state=closed&labels=Friend`)
  if (!res?.length)
    return []
  const commentsUrl = res[0].comments_url
  const friendRes = await fetchWithToken(`${commentsUrl}?page=1&per_page=${FRIEND_PER_PAGE}`)
  const friends: Friend[] = []
  friendRes.forEach((fr: Fr) => {
    if (isSpecificJSONFormat(fr.body)) {
      const friend = JSON.parse(fr.body)
      friends.push(friend)
    }
  })
  return friends
}

/*
 * 搜索
 * */
export async function searchPosts({ keyword = '', page = 1, pageSize = BLOG_PER_PAGE }) {
  const res = await fetchWithToken(`/search/issues?q=${keyword}+repo:${USERNAME}/${REPO}+type:issue+state:open&page=${page}&per_page=${pageSize}`)
  const posts = res?.items.map(formatPost)
  return {
    total_count: res?.total_count,
    posts,
  }
}

/*
 * 获取博客详情
 * */
export async function getPost({ number = 0 }) {
  const res = await fetchWithToken(`${BLOG_PREFIX}/issues/${number}?state=open`)
  return formatPost(res)
}

/*
 * 获取博客评论
 * */
export async function getComments({ url = '' }) {
  const res = await fetchWithToken(url)
  return res
}

/*
 * 获取文章标签
 * */
export async function getTags() {
  const filterLabel = ['Notice', 'Inspiration', 'Friend', 'Book', 'About']
  const res: Tag[] = await fetchWithToken(`${BLOG_PREFIX}/labels?page=1&per_page=1000`)
  const resFilter = res.filter(item => !filterLabel.includes(item.name))
  const tags = resFilter.map(item => ({
    id: item.id,
    name: item.name,
    count: item.count || 0,
  }))

  return tags
}

/*
 * 获取关于页面
 * */
export async function getAbout() {
  const res = await fetchWithToken(`${BLOG_PREFIX}/issues?state=closed&labels=About`)
  return res?.[0].body
}

/*
 * 获取通知
 * */
export async function getNotice() {
  const res = await fetchWithToken(`${BLOG_PREFIX}/issues?state=closed&labels=Notice`)
  return {
    content: res?.[0].body,
    color: `#${res?.[0].labels[0].color}`,
  }
}

/**
 * 设置文章阅读量（使用 Vercount）
 * @param post 文章信息（需包含 id 和 title）
 * @returns 成功返回 true，失败返回 false
 */
export async function setCounter(post: Pick<Post, 'id' | 'title'>): Promise<boolean> {
  if (import.meta.env.DEV)
    return false

  // 参数校验
  if (!post?.id || !post?.title) {
    console.warn('SetCounter: 文章 id 或 title 缺失', post)
    return false
  }

  // Vercount 会自动处理页面访问统计
  // 这里我们可以添加一个标记，确保页面上的阅读量元素被正确渲染
  return true
}

/**
 * 批量获取文章阅读量（使用 Vercount）
 * @param ids 文章 id 数组
 * @returns 键为文章 id，值为阅读量的对象（默认 1）
 */
export async function getCounter(ids: number[]): Promise<Record<number, number>> {
  if (!Array.isArray(ids) || ids.length === 0) {
    console.warn('GetCounter: 文章 id 数组为空')
    return {}
  }

  // Vercount 会通过前端脚本自动更新阅读量
  // 这里我们返回一个默认值，确保页面正常显示
  return ids.reduce((map, id) => ({ ...map, [id]: 1 }), {})
}
