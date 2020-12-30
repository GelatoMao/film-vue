import Vue from 'vue'
import VueRouter from 'vue-router'
import Center from '@/views/Center'
import Film from '@/views/Film'
import Cinema from '@/views/Cinema'
import Detail from '@/views/Detail'
import Nowplaying from '@/views/Film/Nowplaying'
import Comingsoon from '@/views/Film/Comingsoon'
Vue.use(VueRouter)

const routes = [
  {
    path: '/film',
    component: Film,
    // 二级路由
    children: [
      {
        path: 'nowplaying',
        component: Nowplaying
      },
      {
        path: 'comingsoon',
        component: Comingsoon
      },
      {
        path: '',
        redirect: '/film/nowplaying'
      }
    ]
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/detail/:id', //使用动态路由
    name: 'haha',
    component: Detail,
    props: true
  },
  // 重定向 当以上都不匹配时 重定向到film页面
  {
    path: '*',
    redirect: '/film'
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

//全局守卫
// router.beforeEach((to,from,next)=>{
//   //
// })

export default router
