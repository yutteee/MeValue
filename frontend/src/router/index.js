import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import AboutMePage from '../views/AboutMePage.vue'
import ContactPage from '../views/ContactPage.vue'
import MyPage from '../views/MyPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/about',
    name: 'aboutme',
    component: AboutMePage
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: MyPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
