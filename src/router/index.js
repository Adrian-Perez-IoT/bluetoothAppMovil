import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CordovaComponent from '@/components/CordovaComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
      /* name: 'CordovaComponent',
      component: CordovaComponent */
    },
    {
      path: '/cordovarouter',
      name: 'CordovaComponent',
      component: CordovaComponent
    }
  ]
})
