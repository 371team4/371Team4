import { setLocalStorage, removeToken } from '@/services/api.endpoint'
import * as loginAPI from '@/services/API/login'
import { SET_USER } from '@/store/mutation-types'

// state of this module
const state = {
  currentUser: null
}

// getters for this module's state
const getters = {
  currentUser (state) {
    return state.currentUser
  },
  isAuthenticated (state) {
    return state.currentUser !== null && state.currentUser !== undefined
  }
}

// mutations of this module, mutation must be sync and atomic
const mutations = {
  [SET_USER] (state, payload) {
    state.currentUser = payload
  }
}

// actions can be async and may have side effects
const actions = {
  // payload is username and password
  signIn ({ commit }, { username, password }) {
    return new Promise((resolve, reject) => {
      loginAPI.signIn(username, password)
        .then(response => {
          // need to change the response on the server side to return the user object
          commit(SET_USER, response.data.user)
          setLocalStorage(response.data)// need to set the authentication token on the axios instance
          resolve(response)
        }).catch(err => reject(err))
    })
  },

  signOut ({ commit }) {
    commit(SET_USER, null) // empty the user object
    removeToken() // need to remove the authentication token from the axios instance
  }
}

// export everything as default
export default {
  state,
  getters,
  actions,
  mutations
}
