import { SET_SLIDE } from '@/store/mutation-types'

// state of this module
const state = {
  slide: { }
}

// getters for this module's state
const getters = {
  slide (state) {
    return state.slide
  }
}

// mutations of this module, mutation must be sync and atomic
const mutations = {
  [SET_SLIDE] (state, payload) {
    state.slide = payload.slide
  }
}

// actions can be async and may have side effects
const actions = {
  createSlide ({ commit, dispatch }, payload) {

  }
}

// export everything as default
export default {
  state,
  getters,
  actions,
  mutations
}
