import axios from 'axios'
import { SET_USERNAME, SET_TOKEN, SET_LOADING } from '@/store/mutation-types'

const server = 'http://cmpt371g4.usask.ca:8081'

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
    commit(SET_LOADING, { loading: true })

    return new Promise((resolve, reject) => {
      axios.post(server + '/api/login', payload)
        .then(function (responce) {
          commit(SET_TOKEN, responce.token)
          commit(SET_LOADING, { loading: false })
          commit(SET_USERNAME, responce.username)
        })
        .catch(function (err) {
          reject(err)
          commit(SET_LOADING, { loading: false })
          console.log(err)
        })
    })
  },
  signOut ({ commit }) {
    commit(SET_TOKEN, '')
    alert('logged out')
  }
}

// export everything as default
export default {
  state,
  getters,
  actions,
  mutations
}
