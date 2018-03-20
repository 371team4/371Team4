import axios from 'axios'
import loginAPI from '@/services/API/login'
import { SET_USERNAME, SET_TOKEN, SET_LOADING } from '@/store/mutation-types'

// state of this module
const state = {
  token: '',
  _id: '',
  username: ''
}

// getters for this module's state
const getters = {
  user (state) {
    return state.user
  },
  token (state) {
    return state.token
  },
  isAuthenticated (state) {
    return state.user !== null && state.user !== undefined
  }
}

// mutations of this module, mutation must be sync and atomic
const mutations = {
  [SET_USERNAME] (state, payload) {
    state.user = payload
  },
  [SET_TOKEN] (state, payload) {
    state.token = payload
  }
}

// actions can be async and may have side effects
const actions = {
  // payload is username and password
  signIn ({ commit }, payload) {
    loginAPI.signIn({ commit }, payload)
  },
  signOut ({ commit }) {
    loginAPI.signOut({ commit })
  }
}

// export everything as default
export default {
  state,
  getters,
  actions,
  mutations
}
