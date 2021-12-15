import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/SelectLevel',
      name: 'SelectLevel',
      component: () => import('../components/SelectLevel.vue'),
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: () => import('../components/Dashboard.vue'),
    },
    {
      path: '/ModeOne',
      name: 'ModeOne',
      component: () => import('../components/ModeOne.vue'),
    },
    {
      path: '/ModeTwo',
      name: 'ModeTwo',
      component: () => import('../components/ModeTwo.vue'),
    },
    {
      path: '/LiveChart',
      name: 'LiveChart',
      component: () => import('../components/LiveChart.vue'),
    },
    // {
    //   path: '/',
    //   name: 'Dashboard',
    //   component: Dashboard
    // }
  ]
})
