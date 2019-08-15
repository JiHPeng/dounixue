import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [{
        path: 'index',
        name: 'index',
        component: () => import('./views/index.vue'), // 首页
      },
        {
          path: 'mylesson',
          name: 'mylesson',
          component: () => import('./views/MyLesson.vue') // 我的课程
        },
        {
          path: 'myinfo',
          name: 'myinfo',
          component: () => import('./views/MyInfo.vue') // 我的
        }
      ]
    },
    {
      path: '/chapter',
      name: 'chapter',
      component: () => import('./views/chapter.vue'),
    }
  ]
})
