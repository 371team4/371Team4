import { NEW_SLIDE, SAVE_SLIDE } from '@/store/mutation-types'
import { slidesDB } from '@/services/firebase.conf'
import { firebaseMutations } from 'vuexfire'

// This module is used for create-newSlide and saveSlide

// state of this module
const state = {
  // The new Slide. Currently contains nothing but a slide name (and observer)
  // Could be changed to a new slide item with name added
  newSlide: {
    'Name': 'newSlide'
  },
  SlideID: 0
}

// getters for this module's state
const getters = {
  // getter method
}

// mutations of this module, mutation must be sync and atomic
const mutations = {
  // Create new slide. Take the slide name as payload.
  [NEW_SLIDE] (state, payload) {
    // Assign the title name to the newSlide
    state.newSlide.Name = payload
    // console.log(state.newSlide)
    // We can see the newSlide in state is temporary saved
  },
  // Push the slide into the firebase
  [SAVE_SLIDE] (state, payload) {
    state.newSlide.Name = payload
    slidesDB.push(state.newSlide)
    // state.SlideID = slidesDB.push(state.newSlide).key
    // console.log(state.SlideID)
  },
  ...firebaseMutations
}

// actions can be async and may have side effects
const actions = {
  createSlide ({ commit, dispatch }, payload) {
    commit(NEW_SLIDE, payload)
  },
  saveSlide ({ commit }, payload) {
    commit(SAVE_SLIDE, payload)
  }
}

// export everything as default
export default {
  state,
  getters,
  actions,
  mutations
}
