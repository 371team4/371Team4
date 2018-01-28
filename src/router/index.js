import Vue from 'vue'
import Router from 'vue-router'
import ShowView from '@/components/ShowView'
import Projects from '@/components/Projects'
import Designer from '@/components/Designer'
import Calendar from '@/components/Calendar'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ShowView',
      component: ShowView
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/designer',
      name: 'Designer',
      component: Designer
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    }
  ]
})
