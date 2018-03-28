import { setToken } from '@/services/api.endpoint'
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
  signIn ({ commit }, payload) {
    loginAPI.signIn(payload.username, payload.password)
      .then(response => setToken(response.data.token))
  }
}

// export everything as default
export default {
  state,
  getters,
  actions,
  mutations
}
