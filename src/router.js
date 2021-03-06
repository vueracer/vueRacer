import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Home from './views/Room.vue'
import LoginPage from './views/FrontPage.vue'
import Game from '@/components/Game.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/game',
      name: 'game',
      component: Game,
      props: true
    }
  ]
})
