import Vue from 'vue'
import Router from 'vue-router'
import { store } from '../store/index'
import { SET_LOADING } from '../store/mutation-types'

const ShowView = () => import(/* webpackChunkName: "ShowView.vue" */'@/components/ShowView')
const Slides = () => import(/* webpackChunkName: "Slides.vue" */'@/components/Slides')
const Designer = () => import(/* webpackChunkName: "Designer.vue" */'@/components/Designer')
const Calendar = () => import(/* webpackChunkName: "Calendar.vue" */'@/components/Calendar')
const Login = () => import(/* webpackChunkName: "login.vue" */ '@/components/Login')
const FoodMenuWidget = () => import(/* webpackChunkName: "FoodMenuWidget.vue" */'@/components/FoodMenuWidget')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {
        name: 'Sign in'
      },
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/signin',
      name: 'Sign in',
      icon: 'account_circle',
      scrollToTop: true,
      component: Login,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/view',
      name: 'Show View',
      icon: 'live_tv',
      component: ShowView,
      scrollToTop: true,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/Slides',
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
      props: true,
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
      path: '/foodmenu',
      name: 'Food Menu Widget',
      icon: 'local_dining',
      component: FoodMenuWidget,
      scrollToTop: true,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  store.commit(SET_LOADING, { loading: true })
  if (to.matched.some(record => record.meta.requiresAuth && !store.getters.isAuthenticated)) {
    next({ path: '/signin', query: { redirect: to.fullPath } })
  }
  next()
})

router.afterEach(() => {
  store.commit(SET_LOADING, { loading: false })
})

export default router
