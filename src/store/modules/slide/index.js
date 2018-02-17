import { NEW_SLIDE } from '@/store/mutation-types'

// state of this module
const state = {
  // The new Slide. Currently contains nothing but a slide name (and observer)
  // Could be changed to a new slide item with name added
  newSlide: {
    'Name': 'newSlide'
  }
}

// getters for this module's state
const getters = {

}

// mutations of this module, mutation must be sync and atomic
const mutations = {
  // Create new slide. Take the slide name as payload.
  [NEW_SLIDE] (state, payload) {
    // Assign the title name to the newSlide
    state.newSlide.Name = payload
    // console.log(state.newSlide)
    // We can see the newSlide in state is temporary saved
  }
}

// actions can be async and may have side effects
const actions = {
  createSlide ({ commit, dispatch }, payload) {
    commit(NEW_SLIDE, payload)
  }
}

// export everything as default
export default {
  state,
  getters,
  actions,
  mutations
}
