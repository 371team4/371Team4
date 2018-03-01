import { NEW_SLIDE, SAVE_SLIDE } from '@/store/mutation-types'
import { slidesDB } from '@/services/firebase.conf'
import { firebaseMutations } from 'vuexfire'

// This module is used for create-newSlide and saveSlide

// state of this module
const state = {
  allSlides: [],
  // currentSlide is the slide which is currently being worked on by user, either because
  // it is a brand new slide, or an existing one is being edited, this is the working store
  // of the given slides information, no changes to this currentSlide should be reflected
  // in the database until the button to save slide changes has been pressed in the
  // appropriate editing view. When it is, all information in the currentSlide field
  // should be pushed to the databse
  currentSlide: {
    // the title of the slide, what it is called by humans, has text, font information and color.
    title: { content: '', fontColor: null, fontSize: null, fontStyle: null, fontWeight: null },
    // similar to title, but generally larger text content.
    description: { content: '', fontColor: null, fontSize: null, fontStyle: null, fontWeight: null },
    // image file (or link to image file?) to be displayed in the slide
    images: null,
    // the date of the slides event, has similar font info as title/description, content is date object
    date: { content: null, fontColor: null, fontSize: null, fontStyle: null, fontWeight: null },
    // the time of the event, same as date but time object instead of date object
    time: { content: null, fontColor: null, fontSize: null, fontStyle: null, fontWeight: null },
    // the template used to display the slide information contained herein
    template: null,
    // integer, number of seconds the slide is to be displayed in the carousel being switching to another
    timeout: 1
  },
  // this is true if the user just created a new slide
  // or has edited an existing slide
  isCurrentSlideDirty: false
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
