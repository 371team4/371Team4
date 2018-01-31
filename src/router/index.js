import Vue from 'vue'
import Router from 'vue-router'
import ShowView from '@/components/ShowView'
import Projects from '@/components/Projects'
import Designer from '@/components/Designer'
import Calendar from '@/components/Calendar'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Sign in',
      icon: 'person',
      component: Login
    },
    {
      path: '/view',
      name: 'Show View',
      icon: 'live_tv',
      component: ShowView
    },
    {
      path: '/projects',
      name: 'Projects',
      icon: 'perm_media',
      component: Projects
    },
    {
      path: '/designer',
      name: 'Designer',
      icon: 'format_shapes',
      component: Designer
    },
    {
      path: '/calendar',
      name: 'Calendar',
      icon: 'event',
      component: Calendar
    }
  ]
})
