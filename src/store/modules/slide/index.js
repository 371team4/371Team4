import * as MUTATIONS from '@/store/mutation-types'
import * as server from '@/services/API/slides'

/** BEGIN: PRIVATE MUTATION TYPES **/
const DELETE_SLIDE = 'DELETE_SLIDE'
const UPDATE_SLIDE = 'UPDATE_SLIDE'
const ADD_SLIDE = 'ADD_SLIDE'
/** END: PRIVATE MUTATION TYPES **/

// This module is used for create-newSlide and saveSlide

// state of this module
const newSlide = {
  // the title of the slide, what it is called by humans, has text, font information and color.
  title: { content: '', fontColor: null, fontSize: null, fontStyle: null, fontWeight: null },
  // similar to title, but generally larger text content.
  description: { content: '', fontColor: null, fontSize: null, fontStyle: null, fontWeight: null },
  // image array of image files (or link to image files?) to be displayed in the slide
  images: [],
  // the date of the slides event, has similar font info as title/description, content is date object
  date: { content: [], fontColor: null, fontSize: null, fontStyle: null, fontWeight: null },
  // the time of the event, same as date but time object instead of date object
  time: { content: null, fontColor: null, fontSize: null, fontStyle: null, fontWeight: null },

  meta: { template: null, timeout: '', datesOnDisplay: [] }
}

const state = {
  slides: [],
  // currentSlide is the slide which is currently being worked on by user, either because
  // it is a brand new slide, or an existing one is being edited
  currentSlide: JSON.parse(JSON.stringify(newSlide)),
  // this is true if the user just created a new slide
  // or has edited an existing slide
  isCurrentSlideDirty: false
}

// getters for this module's state
const getters = {
  // getter for allSlides
  allSlides: state => state.slides,

  currentSlide: state => state.currentSlide,

  // getter for isCurrentSlideDirty
  isCurrentSlideDirty: state => state.isCurrentSlideDirty,

  // getters for the current slides title, and for each subfield
  currentSlideTitle: state => state.currentSlide.title,
  currentSlideTitleContent: state => state.currentSlide.title.content,
  currentSlideTitleColor: state => state.currentSlide.title.fontColor,
  currentSlideTitleSize: state => state.currentSlide.title.fontSize,
  currentSlideTitleStyle: state => state.currentSlide.title.fontStyle,
  currentSlideTitleWeight: state => state.currentSlide.title.fontWeight,

  // getters for the current slides description, and for each subfield
  currentSlideDescription: state => state.currentSlide.description,
  currentSlideDescriptionContent: state => state.currentSlide.description.content,
  currentSlideDescriptionColor: state => state.currentSlide.description.fontColor,
  currentSlideDescriptionSize: state => state.currentSlide.description.fontSize,
  currentSlideDescriptionStyle: state => state.currentSlide.description.fontStyle,
  currentSlideDescriptionWeight: state => state.currentSlide.description.fontWeight,

  currentSlideImages: state => state.currentSlide.images,

  // getters for the current slides date, and for each subfield
  currentSlideDate: state => state.currentSlide.date,
  currentSlideDateContent: state => state.currentSlide.date.content,
  currentSlideDateColor: state => state.currentSlide.date.fontColor,
  currentSlideDateSize: state => state.currentSlide.date.fontSize,
  currentSlideDateStyle: state => state.currentSlide.date.fontStyle,
  currentSlideDateWeight: state => state.currentSlide.date.fontWeight,

  // getters for the current slides time, and for each subfield
  currentSlideTime: state => state.currentSlide.time,
  currentSlideTimeContent: state => state.currentSlide.time.content,
  currentSlideTimeColor: state => state.currentSlide.time.fontColor,
  currentSlideTimeSize: state => state.currentSlide.time.fontSize,
  currentSlideTimeStyle: state => state.currentSlide.time.fontStyle,
  currentSlideTimeWeight: state => state.currentSlide.time.fontWeight,

  // getters for the current slide meta fields
  currentSlideTemplate: state => state.currentSlide.meta.template,
  currentSlideTimeout: state => state.currentSlide.meta.timeout,
  currentSlideDatesOnDisplay: state => state.currentSlide.meta.datesOnDisplay
}

// mutations of this module, mutation must be sync and atomic
const mutations = {
  //
  [MUTATIONS.SET_ALL_SLIDES] (state, payload) {
    state.slides = payload
  },
  // takes a slide object as payload, sets current slide to it.
  [MUTATIONS.SET] (state, payload) {
    state.currentSlide = JSON.parse(JSON.stringify(payload))
  },

  [MUTATIONS.CLEAR] (state) {
    state.currentSlide = JSON.parse(JSON.stringify(newSlide))
  },

  // takes boolean as payload, sets if slide has changes made compared to version in DB.
  [MUTATIONS.SET_STATUS] (state, payload) {
    state.isCurrentSlideDirty = payload
  },

  // takes content as payload (text). sets content for title of currentslide
  [MUTATIONS.SET_TITLE_CONTENT] (state, payload) {
    state.currentSlide.title.content = payload
    state.isCurrentSlideDirty = true
  },
  // takes fontcolor as payload. sets fontcolor for title of currentslide.
  [MUTATIONS.SET_TITLE_FONT_COLOR] (state, payload) {
    state.currentSlide.title.fontColor = payload
    state.isCurrentSlideDirty = true
  },
  // takes fontsize as payload. sets fontsize of title for currentslide.
  [MUTATIONS.SET_TITLE_FONT_SIZE] (state, payload) {
    state.currentSlide.title.fontSize = payload
    state.isCurrentSlideDirty = true
  },
  // takes fontstyle as payload. sets fontstyle of title for currentslide.
  [MUTATIONS.SET_TITLE_FONT_STYLE] (state, payload) {
    state.currentSlide.title.fontStyle = payload
    state.isCurrentSlideDirty = true
  },
  // takes fontweight for payload. sets fontweight of title for currentslide.
  [MUTATIONS.SET_TITLE_FONT_WEIGHT] (state, payload) {
    state.currentSlide.title.fontWeight = payload
    state.isCurrentSlideDirty = true
  },

  // takes content (text) as payload. sets content of description for currentslide.
  [MUTATIONS.SET_DESCRIPTION_CONTENT] (state, payload) {
    state.currentSlide.description.content = payload
    state.isCurrentSlideDirty = true
  },
  // takes fontcolor as payload. sets fontcolor of description for currentslide.
  [MUTATIONS.SET_DESCRIPTION_FONT_COLOR] (state, payload) {
    state.currentSlide.description.fontColor = payload
    state.isCurrentSlideDirty = true
  },
  // takes fontsize as payload. sets fontsize of description for currentslide
  [MUTATIONS.SET_DESCRIPTION_FONT_SIZE] (state, payload) {
    state.currentSlide.description.fontSize = payload
    state.isCurrentSlideDirty = true
  },
  // takes fontstyle as payload. sets fontsize of description for currentslide
  [MUTATIONS.SET_DESCRIPTION_FONT_STYLE] (state, payload) {
    state.currentSlide.description.fontStyle = payload
    state.isCurrentSlideDirty = true
  },
  // takes fontweight as payload. sets fontweight of description for currentslide
  [MUTATIONS.SET_DESCRIPTION_FONT_WEIGHT] (state, payload) {
    state.currentSlide.description.fontWeight = payload
    state.isCurrentSlideDirty = true
  },

  // takes image as payload. adds an image to currentslide.
  [MUTATIONS.ADD_IMAGE] (state, payload) {
    state.currentSlide.images.push(payload)
    state.isCurrentSlideDirty = true
  },
  // takes image as payload. removes and image from currentslide.
  [MUTATIONS.DELETE_IMAGE] (state, payload) {
    state.currentSlide.images.splice(state.currentSlide.images.indexOf(payload), 1)
    state.isCurrentSlideDirty = true
  },

  // takes content as payload. adds a date to currentslide
  [MUTATIONS.ADD_DATE] (state, payload) {
    state.currentSlide.date.content.push(payload)
    state.isCurrentSlideDirty = true
  },
  // takes content as payload. removes a date from currentSlide
  [MUTATIONS.DELETE_DATE] (state, payload) {
    state.currentSlide.date.content.splice(payload, 1)
    state.isCurrentSlideDirty = true
  },
  // takes fontcolor as payload. sets fontcolor of date for currentslide
  [MUTATIONS.SET_DATE_FONT_COLOR] (state, payload) {
    state.currentSlide.date.fontColor = payload
    state.isCurrentSlideDirty = true
  },
  // takes fontsize as payload. sets fontsize of date for currentslide
  [MUTATIONS.SET_DATE_FONT_SIZE] (state, payload) {
    state.currentSlide.date.fontSize = payload
    state.isCurrentSlideDirty = true
  },
  // takes fontstyle as payload. sets fontstyle of date for currentslide
  [MUTATIONS.SET_DATE_FONT_STYLE] (state, payload) {
    state.currentSlide.date.fontStyle = payload
    state.isCurrentSlideDirty = true
  },
  // takes fontweight as payload. sets fontweight of date for currentslide
  [MUTATIONS.SET_DATE_FONT_WEIGHT] (state, payload) {
    state.currentSlide.date.fontWeight = payload
    state.isCurrentSlideDirty = true
  },

  // takes content as payload. sets content of currentslide time to it.
  [MUTATIONS.SET_TIME_CONTENT] (state, payload) {
    state.currentSlide.time.content = payload
    state.isCurrentSlideDirty = true
  },
  // takes fontcolor as payload. sets fontcolor of currentslide time to it.
  [MUTATIONS.SET_TIME_FONT_COLOR] (state, payload) {
    state.currentSlide.time.fontColor = payload
    state.isCurrentSlideDirty = true
  },
  // takes fontsize as payload. sets fontsize of currentslide time to it.
  [MUTATIONS.SET_TIME_FONT_SIZE] (state, payload) {
    state.currentSlide.time.fontSize = payload
    state.isCurrentSlideDirty = true
  },
  // takes fontstyle as payload. sets fontstyle of currentslide time to it.
  [MUTATIONS.SET_TIME_FONT_STYLE] (state, payload) {
    state.currentSlide.time.fontStyle = payload
    state.isCurrentSlideDirty = true
  },
  // takes fontweight as payload. sets fontweight of currentslide to it.
  [MUTATIONS.SET_TIME_FONT_WEIGHT] (state, payload) {
    state.currentSlide.time.fontWeight = payload
    state.isCurrentSlideDirty = true
  },

  [MUTATIONS.SET_TEMPLATE] (state, payload) {
    state.currentSlide.meta.template = payload
    state.isCurrentSlideDirty = true
  },
  [MUTATIONS.SET_TIMEOUT] (state, payload) {
    state.currentSlide.meta.timeout = payload
    state.isCurrentSlideDirty = true
  },

  // takes date as payload. adds a display date to currentslide.
  [MUTATIONS.ADD_DATE_ON_DISPLAY] (state, payload) {
    state.currentSlide.meta.datesOnDisplay.push(payload)
    state.isCurrentSlideDirty = true
  },
  // takes date as payload. removes a display date from currentslide.
  [MUTATIONS.DELETE_DATE_ON_DISPLAY] (state, payload) {
    state.currentSlide.meta.datesOnDisplay.splice(payload, 1)
    state.isCurrentSlideDirty = true
  },

  /** BEGIN: PRIVATE MUTATIONS **/
  [DELETE_SLIDE] (state, payload) {
    state.slides.splice(payload, 1)
  },
  [UPDATE_SLIDE] (state, payload) {
    state.slides[payload.index] = payload.updatedSlide
  },
  [ADD_SLIDE] (state, payload) {
    state.slides.push(payload)
  }
  /** BEGIN: PRIVATE MUTATIONS **/
}

// actions can be async and may have side effects
const actions = {
  // Gets all the slides in the database
  retrieveAllSlides ({ commit }) {
    commit(MUTATIONS.SET_LOADING, true)
    server
      .getAllSlides()
      .then(response => {
        commit(MUTATIONS.SET_ALL_SLIDES, response.data)
        commit(MUTATIONS.SET_LOADING, false)
      })
      .catch(function (error) {
        console.log(error)
        commit(MUTATIONS.SET_LOADING, false)
      })
  },

  // Takes id as payload and gets the slide with the given id
  retrieveSlide ({ commit }, id) {
    commit(MUTATIONS.SET_LOADING, true)
    server
      .getSlide(id)
      .then(response => {
        commit(MUTATIONS.SET, response.data)
        commit(MUTATIONS.SET_LOADING, false)
      })
      .catch(function (error) {
        console.log(error)
        commit(MUTATIONS.SET_LOADING, false)
      })
  },

  // used for saving both new slides, and edits to existing slides.
  saveSlide ({ state, commit }) {
    commit(MUTATIONS.SET_LOADING, true)
    server
      .saveSlide(state.currentSlide)
      .then(response => {
        let index = -1
        for (let i = 0; i < state.slides.length; i++) {
          if (response.data._id === state.slides[i]._id) {
            index = -1
            break
          }
        }
        commit(MUTATIONS.SET, response.data)
        if (index === -1) {
          commit(ADD_SLIDE, response.data)
        } else {
          commit(UPDATE_SLIDE, { index: index, updatedSlide: response.data })
        }
        commit(MUTATIONS.SET_LOADING, false)
      })
      .catch(function (error) {
        console.log(error)
        commit(MUTATIONS.SET_LOADING, false)
      })
  },
  // takes currentSlide as payload, used for deleting slides from database.
  deleteSlide ({ commit, state }, id) {
    commit(MUTATIONS.SET_LOADING, true)
    server
      .deleteSlide(id)
      .then(response => {
        let index
        for (index = 0; index < state.slides.length; index++) {
          if (response.data._id === state.slides[index]._id) {
            break
          }
        }
        commit(MUTATIONS.SET, newSlide)
        commit(DELETE_SLIDE, index)
        commit(MUTATIONS.SET_LOADING, false)
      })
      .catch(function (error) {
        console.log(error)
        commit(MUTATIONS.SET_LOADING, false)
      })
  }
}

// export everything as default
export default {
  state,
  getters,
  actions,
  mutations
}
