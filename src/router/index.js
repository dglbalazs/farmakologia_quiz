import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/quiz',
    name: 'Quiz',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Quiz.vue')
  },
  {
    path: '/learning',
    name: 'Learning',
    component: () => import(/* webpackChunkName: "about" */ '../views/Learning.vue')
  },
  {
    path: '/smthelse',
    name: 'SomethingElse',
    component: () => import(/* webpackChunkName: "about" */ '../views/SomethingElse.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
