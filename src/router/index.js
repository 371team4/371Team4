import Vue from 'vue'
import Router from 'vue-router'
import { store } from '../store/index'
import { SET_LOADING } from '../store/mutation-types'

const ShowView = () => import(/* webpackChunkName: "ShowView.vue" */'@/components/ShowView')
const Slides = () => import(/* webpackChunkName: "Slides.vue" */'@/components/Slides')
const Designer = () => import(/* webpackChunkName: "Designer.vue" */'@/components/Designer')
const Calendar = () => import(/* webpackChunkName: "Calendar.vue" */'@/components/Calendar')
/* const Login = () => import(/* webpackChunkName: "login.vue" \*\/ '@/components/Login') */
const DefaultSlideTemplate = () => import(/* webpackChunkName: "DefaultSlideTemplate.vue" */'@/components/templates/DefaultSlideTemplate')
const FoodMenuWidget = () => import(/* webpackChunkName: "FoodMenuWidget.vue" */'@/components/widgets/FoodMenuWidget')

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
      path: '/',
      redirect: {
        name: 'Slides'
      }
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
      path: '/slide',
      name: 'Slide Template',
      icon: 'live_tv',
      component: DefaultSlideTemplate,
      scrollToTop: true,
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
  next()
})

router.afterEach(() => {
  store.commit(SET_LOADING, { loading: false })
})

export default router
