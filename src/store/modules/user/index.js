import { authService } from '@/services/firebase.conf'

// mutation types
const SET_USER = 'SET_USER'

// state of this module
const state = {
  user: { id: '_change', email: 'blah@blah.com' }
}

// getters for this module's state
const getters = {
  user (state) {
    return state.user
  },
  isAuthenticated (state) {
    return state.user !== null && state.user !== undefined
  }
}

// mutations of this module, mutation must be sync and atomic
const mutations = {
  [SET_USER] (state, payload) {
    state.user = payload.user
  }
}

// actions can be async and may have side effects
const actions = {
  signIn ({ commit }, payload) {
    commit('setLoading', { loading: true })
    authService.signInWithEmailAndPassword(`${payload.username}@${payload.domain}`, payload.password)
      .then(
        user => {
          const newUser = {
            id: user.uid,
            name: user.email
          }
          commit('setLoading', { loading: false })
          commit('setUser', { 'user': newUser })
        }
      )
      .catch(
        error => {
          commit('setLoading', { loading: false })
          console.log(error)
        }
      )
  },
  signOut () {
    authService.signOut().then(function () {
      alert('Logged out')
    }).catch(
      error => {
        console.log(error)
      }
    )
  }
}

// export everything as default
export default {
  state,
  getters,
  actions,
  mutations
}
