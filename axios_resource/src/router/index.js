import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VueResource from 'vue-resource'
import Node from '@/components/Node'
import Axios from '@/components/Axios'
Vue.use(Router)
Vue.use(VueResource)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path:'/node',
      name:'Node',
      component:Node
    },{
      path:'/axios',
      name:'Axios',
      component:Axios
    }
  ]
})
