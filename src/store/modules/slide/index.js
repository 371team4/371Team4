import { DELETE_SLIDE } from '@/store/mutation-types'
import { slidesDB } from '@/services/firebase.conf'

// This module is used for create-newSlide and saveSlide

// state of this module
const state = {
  deleteSlideKey: 0
}

// getters for this module's state
const getters = {
  // getter method
  getDeleteSlideKey (state) {
    return state.deleteSlideKey
  }
}

// mutations of this module, mutation must be sync and atomic
const mutations = {
  // The delete mutation takes slideKey as payload and delete the certain slide
  [DELETE_SLIDE] (state, payload) {
    // Assign the deleteSlideKey to payload
    state.deleteSlideKey = payload
    // Remove
    slidesDB.child(payload).remove()
  }
}

// actions can be async and may have side effects
const actions = {
  // delete the slide after 1000ms
  // Delete action here takes the '.key' as payload
  deleteTheSlide ({ commit }, payload) {
    setTimeout(() => {
      commit(DELETE_SLIDE, payload)
    }, 1000)
  }
}

// export everything as default
export default {
  state,
  getters,
  actions,
  mutations
}
