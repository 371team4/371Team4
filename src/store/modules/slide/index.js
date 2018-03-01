import { NEW_SLIDE, SAVE_SLIDE } from '@/store/mutation-types'
// import * as CURRENT_SLIDE from '@/store/modules/slide/mutation-types'
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
  // getter for allSlides
  getAllSlides: state => state.allSlides,

  // getters for the current slides title, and for each subfield
  getCurrentSlideTitle: state => state.title,
  getCurrentSlideTitleContent: state => state.title.content,
  getCurrentSlideTitleFontColor: state => state.title.fontColor,
  getCurrentSlideTitleFontSize: state => state.title.fontSize,
  getCurrentSlideTitleFontStyle: state => state.title.fontStyle,
  getCurrentSlideTitleFontWeight: state => state.title.fontWeight,

  // getters for the current slides description, and for each subfield
  getCurrentSlideDescription: state => state.description,
  getCurrentSlideDescriptionContent: state => state.description.content,
  getCurrentSlideDescriptionFontColor: state => state.description.fontColor,
  getCurrentSlideDescriptionFontSize: state => state.description.fontSize,
  getCurrentSlideDescriptionFontStyle: state => state.description.fontStyle,
  getCurrentSlideDescriptionFontWeight: state => state.description.fontWeight,

  getCurretSlideImages: state => state.images,

  // getters for the current slides date, and for each subfield
  getCurrentSlideDate: state => state.date,
  getCurrentSlideDateContent: state => state.date.content,
  getCurrentSlideDateFontColor: state => state.date.fontColor,
  getCurrentSlideDateFontSize: state => state.date.fontSize,
  getCurrentSlideDateFontStyle: state => state.date.fontStyle,
  getCurrentSlideDateFontWeight: state => state.date.fontWeight,

  // getters for the current slides time, and for each subfield
  getCurrentSlideTime: state => state.time,
  getCurrentSlideTimeContent: state => state.time.content,
  getCurrentSlideTimeFontColor: state => state.time.fontColor,
  getCurrentSlideTimeFontSize: state => state.time.fontSize,
  getCurrentSlideTimeFontStyle: state => state.time.fontStyle,
  getCurrentSlideTimeFontWeight: state => state.time.fontWeight,

  // getter for current slides template
  getCurrentSlideTemplate: state => state.template,

  // getter for currentslides timeout value
  getCurrentSlideTimeout: state => state.timeout
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
