import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HelloWorld'
import Indexs from '@/components/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/index',
      name: 'Indexs',
      component: Indexs
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
