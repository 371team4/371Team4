import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import root from './root'
import user from './modules/user'
import Upload from './modules/upload'
import slide from './modules/slide'

Vue.use(Vuex)

const isDebug = process.env.NODE_ENV !== 'production'

export const store = new Vuex.Store({
  strict: isDebug,
  modules: {
    root,
    user,
    Upload,
    slide
  },
  plugins: isDebug ? [createLogger()] : []
})

if (module.hot) {
  // accept actions and mutations as hot modules
  module.hot.accept(['./root', './modules/user', './modules/slide'], () => {
    // require the updated modules
    // have to add .default here due to babel 6 module output
    const root = require('./root').default
    const user = require('./modules/user').default
    const slide = require('./modules/slide').default
    // swap in the new actions and mutations
    store.hotUpdate({
      modules: {
        root,
        user,
        slide
      }
    })
  })
}
