//https://www.youtube.com/watch?v=niPgyv53x8c
import Vuex from 'vuex'

export const store = new Vuex.Store({
  state: {
    _isTrue: false
  },
  getters: {
    isTrue (state) {
      return state._isTrue
    }
  },
  mutations: {
    toggle (state, newVal) {
      state._isTrue = newVal
    }
  },
  actions: {

  }
})
