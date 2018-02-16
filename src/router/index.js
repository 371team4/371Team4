import Vue from 'vue'
import Router from 'vue-router'
import { store } from '../store/index'
import { SET_LOADING } from '../store/mutation-types'

const ShowView = () => import(/* webpackChunkName: "ShowView.vue" */'@/components/ShowView')
const Slides = () => import(/* webpackChunkName: "Slides.vue" */'@/components/Slides')
const Designer = () => import(/* webpackChunkName: "Designer.vue" */'@/components/Designer')
const Calendar = () => import(/* webpackChunkName: "Calendar.vue" */'@/components/Calendar')
/* const Login = () => import(/* webpackChunkName: "login.vue" \*\/ '@/components/Login') */
const Upload = () => import(/* webpackChunkName: "Upload.vue" */'@/components/UploadView')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    /* {
      // star is for catch all
      path: '*',
      name: 'Sign in',
      icon: 'person',
      scrollToTop: true,
      component: Login
    }, */
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
      path: '/',
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
    },
    {
      path: '/upload',
      name: 'Upload',
      icon: 'event',
      scrollToTop: true,
      component: Upload,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  store.commit(SET_LOADING, { loading: true })
  // this route requires auth, check if logged in
  // if not, redirect to login page
  if (to.matched.some(record => record.meta.requiresAuth) && !store.getters.isAuthenticated) {
    store.commit(SET_LOADING, { loading: false })
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    store.commit(SET_LOADING, { loading: false })
    next()
  }
})

export default router
