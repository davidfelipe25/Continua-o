import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Trabalho223 from '@/components/Trabalho223'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path: '/Trabalho',
      	name: 'Trabalho223',
      	component: Trabalho223
    }
  ]
})
