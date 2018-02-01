import Vue from 'vue'
import Vuex from 'vuex'
import { firebaseMutations } from 'vuexfire'
import { authService } from '../services/firebase.conf'
import SampleComponent from './modules/SampleComponent'
import users from './modules/Users'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: null
  },
  actions: {
    signUserUp ({ commit }, payload) {
      authService.createUserWithEmailAndPassword(payload.userid, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              name: user.email,
              userid: user.id
            }
            debugger
            commit('setUser', { 'user': newUser })
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    }
  },
  signUserIn ({ commit }, payload) {
    authService.signInWithEmailAndPassword(payload.userid, payload.password)
      .then(
        user => {
          const newUser = {
            id: user.uid,
            name: user.email,
            userid: user.id
          }
          debugger
          commit('setUser', { 'user': newUser })
        }
      )
      .catch(
        error => {
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
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload.user
    },
    ...firebaseMutations
  },
  modules: {
    SampleComponent,
    users
  },
  getters: {
    user (state) {
      return state.user
    }
  }
})