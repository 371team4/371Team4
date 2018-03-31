import * as userAPI from '@/services/API/user'
import { SET_LOADING, SET_ALL_USERS } from '@/store/mutation-types'

// state of this module
const state = {
  users: []
}

// getters for this module's state
const getters = {
  users (state) {
    return state.users
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
  retrieveAllUsers ({ commit }) {
    commit(SET_LOADING, true)
    userAPI
      .getAllUsers()
      .then(response => {
        commit(SET_ALL_USERS, response.data)
        commit(SET_LOADING, false)
      })
      .catch(e => {
        console.log(e)
        commit(SET_LOADING, false)
      })
  },
  // payload is: username, password, email
  createUser ({ commit, state }, payload) {
    commit(SET_LOADING, true)
    userAPI
      .createUser(payload)
      .then(response => {
        commit(SET_ALL_USERS, [...state.users, response.data])
        commit(SET_LOADING, false)
      })
      .catch(e => {
        console.log(e)
        commit(SET_LOADING, false)
      })
  },
  // payload is password
  updateUser ({ commit, state }, payload) {
    commit(SET_LOADING, true)
    userAPI
      .updateUser(payload)
      .then(response => {
        // need to update the list of user
        for (let i = 0; i < state.users.length; i++) {
          if (state.users[i]._id === response.data._id) {
            state.users[i] = response.data
            break
          }
        }
        commit(SET_ALL_USERS, state.users)
        commit(SET_LOADING, false)
      })
      .catch(e => {
        console.log(e)
        commit(SET_LOADING, false)
      })
  },
  deleteUser ({ commit, state }, payload) {
    commit(SET_LOADING, true)
    userAPI
      .deleteUser(payload)
      .then(response => {
        // need to update the list of user
        let i
        for (i = 0; i < state.users.length; i++) {
          if (state.users[i]._id === response.data._id) {
            break
          }
        }
        commit(SET_ALL_USERS, state.users.splice(i, 1))
        commit(SET_LOADING, false)
      })
      .catch(e => {
        console.log(e)
        commit(SET_LOADING, false)
      })
  }
}

// export everything as default
export default {
  state,
  getters,
  actions,
  mutations
}
