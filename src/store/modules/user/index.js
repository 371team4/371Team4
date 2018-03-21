import * as userAPI from '@/services/API/user'
// import { SET_USERNAME, SET_TOKEN } from '@/store/mutation-types'

// state of this module
const state = {
  users: [],
  token: '',
  _id: '',
  username: ''
}

// getters for this module's state
const getters = {
  user (state) {
    return state.user
  }
}

// mutations of this module, mutation must be sync and atomic
const mutations = {
  SET_ALL_USERS (state, payload) {
    state.users = payload
  }
}

// actions can be async and may have side effects
const actions = {
  getAllUsers ({ commit }) {
    userAPI.getAllUsers().then((response) => commit('SET_ALL_USERS', response.data))
  },
  // payload is: username, password, email
  createUser (payload) {
    userAPI.createUser(payload)
  },
  // payload is password
  updateUser (payload) {
    userAPI.updateUser(payload)
  },
  deleteUser (payload) {
    userAPI.deleteUser(payload)
  }
}

// export everything as default
export default {
  state,
  getters,
  actions,
  mutations
}
