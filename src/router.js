import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/course',
      name: 'course',
      component: () => import(/* webpackChunkName: "about" */ './views/Course.vue')
    },
    {
      path: '/myinformation',
      name: 'myinformation',
      component: () => import(/* webpackChunkName: "about" */ './views/Course.vue')
    },

  ]
})
