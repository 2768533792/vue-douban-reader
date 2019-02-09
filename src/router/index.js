import Vue from 'vue'
import Router from 'vue-router'
import wrapperDefault from '@/pages/wrapperDefault'
import home from '@/pages/home/home'
import searchResult from '@/pages/search/result'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: wrapperDefault,
      children: [
        {
          path: '/home',
          component: home
        },
        {
          path: '/search/:keywords',
          name: 'search',
          component: searchResult
        }
      ]
    }
  ]
})
