import Vue from 'vue'
import Vuex from 'vuex'
import { authService } from '../services/firebase.conf'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    user: { id: '_change', email: 'blah@blah.com' },
    loading: false
  },
  actions: {
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
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload.user
    },
    setLoading (state, payload) {
      state.loading = payload.loading
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    isAuthenticated (state) {
      return state.user !== null && state.user !== undefined
    },
    isLoading (state) {
      return state.loading
    }
  }
})
