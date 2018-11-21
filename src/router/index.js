import Vue from 'vue'
import Router from 'vue-router'
import demo from '../examples/demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo',
      component: demo
    }
  ]
})
