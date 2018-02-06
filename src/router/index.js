import Vue from 'vue'
import Router from 'vue-router'
import { authService } from '../services/firebase.conf'
import { store } from '../store/index'

const ShowView = () => import(/* webpackChunkName: "ShowView.vue" */'@/components/ShowView')
const Slides = () => import(/* webpackChunkName: "Slides.vue" */'@/components/Slides')
const Designer = () => import(/* webpackChunkName: "Designer.vue" */'@/components/Designer')
const Calendar = () => import(/* webpackChunkName: "Calendar.vue" */'@/components/Calendar')
const Login = () => import(/* webpackChunkName: "login.vue" */ '@/components/Login')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      // star is for 404 page, dummy!
      path: '*',
      name: 'Sign in',
      icon: 'person',
      scrollToTop: true,
      component: Login
    },
    {
      path: '/view',
      name: 'Show View',
      icon: 'live_tv',
      component: ShowView,
      scrollToTop: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/slides',
      name: 'Slides',
      icon: 'perm_media',
      scrollToTop: true,
      component: Slides,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/designer',
      name: 'Designer',
      icon: 'format_shapes',
      scrollToTop: true,
      component: Designer,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/calendar',
      name: 'Calendar',
      icon: 'event',
      scrollToTop: true,
      component: Calendar,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  store.commit('setLoading', { loading: true })
  // this route requires auth, check if logged in
  // if not, redirect to login page
  let user = authService.currentUser
  if (to.matched.some(record => record.meta.requiresAuth) && !user) {
    store.commit('setLoading', { loading: false })
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    store.commit('setLoading', { loading: false })
    next()
  }
})

export default router
