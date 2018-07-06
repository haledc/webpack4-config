import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/hello'
    },
    {
      path: '/hello',
      component: () => import('../views/hello')
    }
  ]
})
