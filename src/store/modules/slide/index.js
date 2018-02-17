import { NEW_SLIDE, SAVE_SLIDE } from '@/store/mutation-types'
import { slidesDB } from '@/services/firebase.conf'
import { firebaseMutations } from 'vuexfire'

// This module is used for create-newSlide and saveSlide

// state of this module
const state = {
  slides: [],
  // The new Slide. Currently contains nothing but a slide name (and observer)
  // Could be changed to a new slide item with name added
  // The module does not contain a "saveSlide". Instead, everything is done in this "newSlide".
  // That is, this newSlide is also "saveSlide". It will be in cache and allow the user to modify until it is pushed into firebase.
  // We only allow the user to temporarily leave one slide unsaved.
  // The user can either keep working on the unsaved slide until he pressed "save" button or discard it.
  // He cannot create another new slide if there exists one unsaved slide.
  newSlide: {
    'Name': 'newSlide'
  },
  // After the "saveSlide" function is called, the currentSlideKey will points to the SlideKey just added
  currentSlideKey: 0
}

// getters for this module's state
const getters = {
  // getter method
  getCurrentSlideKey (state) {
    return state.currentSlideKey
  },
  getSlide (state) {
    return state.slide
  }
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
    // Submit everything from payload into the "newSlide" state.
    // Here is just an example: Change the name of the slide to the payload.
    // Since for now there is only "name" element in the newSlide
    state.newSlide.Name = payload
    // Push the new Slide into database and generate the key
    state.currentSlideKey = slidesDB.push(state.newSlide).key
    // console.log(state.currentSlideKey)
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
