import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/Index'
import DSIndex from 'components/dangshan/Index'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/dangshan',
      name:'DSIndex',
      component:DSIndex
    }
  ]
})
