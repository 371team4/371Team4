import Vue from 'vue'
import Router from 'vue-router'
import ShowView from '@/components/ShowView'
import Projects from '@/components/Projects'
import Designer from '@/components/Designer'
import Calendar from '@/components/Calendar'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      icon: 'person',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      icon: 'error',
      component: SignUp
    },
    {
      path: '/view',
      name: 'ShowView',
      icon: 'error',
      component: ShowView
    },
    {
      path: '/projects',
      name: 'Projects',
      icon: 'error',
      component: Projects
    },
    {
      path: '/designer',
      name: 'Designer',
      icon: 'error',
      component: Designer
    },
    {
      path: '/calendar',
      name: 'Calendar',
      icon: 'error',
      component: Calendar
    }
  ]
})
