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
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/view',
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
