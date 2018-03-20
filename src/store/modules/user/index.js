import userAPI from '@/services/API/user'
// import { SET_USERNAME, SET_TOKEN } from '@/store/mutation-types'

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
  }
}

// mutations of this module, mutation must be sync and atomic
const mutations = {

}

// actions can be async and may have side effects
const actions = {
  // payload is: username, password, email
  createUser (payload) {
    userAPI.createUserRequest(payload)
  },
  // payload is password
  updateUser (payload) {
    userAPI.updateUserRequest(payload)
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
