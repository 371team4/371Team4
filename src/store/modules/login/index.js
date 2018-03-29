import { setToken, removeToken } from '@/services/api.endpoint'
import * as loginAPI from '@/services/API/login'
import { SET_USER } from '@/store/mutation-types'

// state of this module
const state = {
  username: ''
}

// getters for this module's state
const getters = {
  user1 (state) {
    return state.user
  },
  isAuthenticated (state) {
    return state.user !== null && state.user !== undefined
  }
}

// mutations of this module, mutation must be sync and atomic
const mutations = {
  [SET_USER] (state, payload) {
    state.user = payload
  }
}

// actions can be async and may have side effects
const actions = {
  // payload is username and password
  signIn ({ commit }, { username, password }) {
    loginAPI.signIn(username, password)
      .then(response => {
        // need to change the response on the server side to return the user object
        commit(SET_USER, response.data.username) // we will use the username for now
        setToken(response.data.token)// need to set the authentication token on the axios instance
      })
  },

  signOut ({ commit }) {
    commit(SET_USER, {}) // empty the user object
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
