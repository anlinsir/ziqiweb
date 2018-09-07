import Vue from 'vue'
import Router from 'vue-router'



const Index = r => require.ensure([], () => r(require('@/pages/index')), 'index')
const News = r => require.ensure([], () => r(require('@/pages/news')), 'news')
const NewsD = r => require.ensure([], () => r(require('@/pages/newsDetalli')), 'newsDealis')




Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
     {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/newsDealis/:id',
      name: 'newsDealis',
      component: NewsD
    },
    
    { path: '*', redirect: "/index"}
  ]
})
