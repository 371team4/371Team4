import * as userAPI from '@/services/API/user'
import { SET_LOADING, SET_ALL_USERS } from '@/store/mutation-types'

/** BEGIN: PRIVATE MUTATION TYPES **/
const DELETE_USER = 'DELETE_USER'
const UPDATE_USER = 'UPDATE_USER'
const ADD_USER = 'ADD_USER'
/** END: PRIVATE MUTATION TYPES **/

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
  [SET_ALL_USERS] (state, payload) {
    state.users = payload
  },

  /** BEGIN: PRIVATE MUTATIONS **/
  [DELETE_USER] (state, payload) {
    state.users.splice(payload, 1)
  },
  [UPDATE_USER] (state, payload) {
    state.users[payload.index] = payload.updatedUser
  },
  [ADD_USER] (state, payload) {
    state.users.push(payload)
  }
  /** BEGIN: PRIVATE MUTATIONS **/
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
        let index = -1
        for (let i = 0; i < state.users.length; i++) {
          if (response.data._id === state.users[i]._id) {
            index = -1
            break
          }
        }
        if (index === -1) {
          commit(ADD_USER, response.data)
        } else {
          commit(UPDATE_USER, { index: index, updatedUser: response.data })
        }
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
        let index
        for (index = 0; index < state.users.length; index++) {
          if (response.data._id === state.users[index]._id) {
            break
          }
        }
        commit(DELETE_USER, index)
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
