import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import { firebaseMutations } from 'vuexfire'

import root from './root'
import user from './modules/user'
import upload from './modules/upload'
import slide from './modules/slide'
import image from './modules/image'
import login from './modules/login'

Vue.use(Vuex)

const isDebug = process.env.NODE_ENV !== 'production'

export const store = new Vuex.Store({
  strict: isDebug,
  mutations: firebaseMutations,
  modules: {
    root,
    user,
    upload,
    slide,
    image,
    login
  },
  plugins: isDebug ? [createLogger()] : []
})

if (module.hot) {
  // accept actions and mutations as hot modules
  module.hot.accept(['./root', './modules/user', './modules/slide', './modules/image', './modules/upload','./modules/login'], () => {
    // require the updated modules
    // have to add .default here due to babel 6 module output
    const root = require('./root').default
    const user = require('./modules/user').default
    const slide = require('./modules/slide').default
    const upload = require('./modules/upload').default
    const image = require('./modules/image').default
    const login = require('./modules/login').default
    // swap in the new actions and mutations
    store.hotUpdate({
      modules: {
        root,
        user,
        slide,
        upload,
        image,
        login
      }
    })
  })
}
