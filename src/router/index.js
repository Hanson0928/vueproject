import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'

import info from "@/components/info"

import mes from "@/components/routerstwo/mes";
import lu from "@/components/routerstwo/lu"
import problem from "@/components/routerstwo/problem"
import chenck from "@/components/routerstwo/chenck"
import project from "@/components/routerstwo/project"
import manage from "@/components/routerstwo/manage"
import create from "@/components/routerstwo/create"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path:"/info",
      component:info,
      children:[
        {path:'mes',component:mes},
        {path:'lu',component:lu},
        {path:'problem',component:problem},
        {path:'project',component:project},
        {path:'chenck',component:chenck},
        {path:'manage',component:manage},
        {path:'create',component:create}
      ]
    }
  ]
})
