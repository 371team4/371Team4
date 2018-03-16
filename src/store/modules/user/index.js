import request from 'superagent'
import { SET_USER, SET_TOKEN, SET_LOADING } from '@/store/mutation-types'

const server = 'https://cmpt371g4.usask.ca:8443'

// state of this module
const state = {
  token: '',
  user: { id: '_change', email: 'blah@blah.com' }
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
  [SET_USER] (state, payload) {
    state.user = payload.user
  },
  [SET_TOKEN] (state, payload) {
    state.token = payload.token
  }
}

// actions can be async and may have side effects
const actions = {
  signIn ({ commit }, payload) {
    commit(SET_LOADING, { loading: true })

    return new Promise((resolve, reject) => {
      request.post(server + '/api/login/' + payload)
        .then(function (responce) {
          commit(SET_TOKEN, responce)
          const newUser = {
            id: responce.id,
            name: responce
          }
          commit(SET_LOADING, { loading: false })
          commit(SET_USER, { 'user': newUser })
        })
        .catch(function (err) {
          reject(err)
          commit(SET_LOADING, { loading: false })
          console.log(err)
        })
    })
  },
  signOut () {
    // authService.signOut().then(function () {
    //   alert('Logged out')
    // }).catch(
    //   error => {
    //     console.log(error)
    //   }
  }
}

// export everything as default
export default {
  state,
  getters,
  actions,
  mutations
}
