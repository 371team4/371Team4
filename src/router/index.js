import Vue from 'vue'
import Router from 'vue-router'
import { store } from '../store'
import { SET_LOADING, SET_USER } from '../store/mutation-types'
import { isTokenValid } from '@/services/api.endpoint'

const ShowView = () => import(/* webpackChunkName: "ShowView.vue" */'@/components/ShowView')
const Slides = () => import(/* webpackChunkName: "Slides.vue" */'@/components/Slides')
const Designer = () => import(/* webpackChunkName: "Designer.vue" */'@/components/Designer')
const Calendar = () => import(/* webpackChunkName: "Calendar.vue" */'@/components/Calendar')
const Login = () => import(/* webpackChunkName: "login.vue" */ '@/components/Login')
const FoodMenuWidget = () => import(/* webpackChunkName: "FoodMenuWidget.vue" */'@/components/widgets/FoodMenuWidget')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      showInTabs: false,
      redirect: {
        name: 'Slides'
      }
    },
    {
      path: '/signin',
      name: 'Sign in',
      showInTabs: false,
      icon: 'account_circle',
      scrollToTop: true,
      component: Login
    },
    {
      path: '/view',
      name: 'Show View',
      icon: 'live_tv',
      showInTabs: true,
      component: ShowView,
      scrollToTop: true,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/Slides',
      name: 'Slides',
      showInTabs: true,
      icon: 'perm_media',
      scrollToTop: true,
      component: Slides,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/designer',
      showInTabs: false,
      redirect: {
        name: 'Designer',
        params: {
          id: 'new'
        }
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/designer/:id',
      name: 'Designer',
      showInTabs: true,
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
      showInTabs: true,
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
      showInTabs: true,
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
  if (!isTokenValid()) {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      next({ path: '/signin', query: { redirect: to.fullPath } })
    }
  } else {
    store.commit(SET_USER, JSON.parse(localStorage.getItem('user')))
  }
  next()
})

router.afterEach(() => {
  store.commit(SET_LOADING, { loading: false })
})

export default router
