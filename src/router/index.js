import Vue from 'vue'
import Router from 'vue-router'
import Cat from '@/components/Cat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Cat',
      component: Cat
    }
  ]
})
