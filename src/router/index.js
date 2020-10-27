import Vue from 'vue'
import Cvp from '@/components/index'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cvp',
      component: Cvp
    }
  ]
})
