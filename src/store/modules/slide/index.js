import * as CURRENT_SLIDE from '@/store/modules/slide/mutation-types'
import * as server from '@/services/API/slides'
// This module is used for create-newSlide and saveSlide
const SET_ALL_SLIDES = 'SET_ALL_SLIDES'
// state of this module
const newSlide = {
  // the title of the slide, what it is called by humans, has text, font information and color.
  title: { content: '', fontColor: null, fontSize: null, fontStyle: null, fontWeight: null },
  // similar to title, but generally larger text content.
  description: { content: '', fontColor: null, fontSize: null, fontStyle: null, fontWeight: null },
  // image array of image files (or link to image files?) to be displayed in the slide
  images: [],
  // the date of the slides event, has similar font info as title/description, content is date object
  date: { content: null, fontColor: null, fontSize: null, fontStyle: null, fontWeight: null },
  // the time of the event, same as date but time object instead of date object
  time: { content: null, fontColor: null, fontSize: null, fontStyle: null, fontWeight: null },

  meta: { template: null, timeout: '', repeatable: false, startDate: '', endDate: '' }
}

const state = {
  allSlides: [],
  // currentSlide is the slide which is currently being worked on by user, either because
  // it is a brand new slide, or an existing one is being edited
  currentSlide: newSlide,
  // this is true if the user just created a new slide
  // or has edited an existing slide
  isCurrentSlideDirty: false
}

// getters for this module's state
const getters = {
  // getter for allSlides
  getAllSlides: state => state.allSlides,

  getCurrentSlide: state => state.currentSlide,

  // getter for isCurrentSlideDirty
  getIsCurrentSlideDirty: state => state.isCurrentSlideDirty,

  // getters for the current slides title, and for each subfield
  getCurrentSlideTitle: state => state.currentSlide.title,
  getCurrentSlideTitleContent: state => state.currentSlide.title.content,
  getCurrentSlideTitleFontColor: state => state.currentSlide.title.fontColor,
  getCurrentSlideTitleFontSize: state => state.currentSlide.title.fontSize,
  getCurrentSlideTitleFontStyle: state => state.currentSlide.title.fontStyle,
  getCurrentSlideTitleFontWeight: state => state.currentSlide.title.fontWeight,

  // getters for the current slides description, and for each subfield
  getCurrentSlideDescription: state => state.currentSlide.description,
  getCurrentSlideDescriptionContent: state => state.currentSlide.description.content,
  getCurrentSlideDescriptionFontColor: state => state.currentSlide.description.fontColor,
  getCurrentSlideDescriptionFontSize: state => state.currentSlide.description.fontSize,
  getCurrentSlideDescriptionFontStyle: state => state.currentSlide.description.fontStyle,
  getCurrentSlideDescriptionFontWeight: state => state.currentSlide.description.fontWeight,

  getCurrentSlideImages: state => state.currentSlide.images,

  // getters for the current slides date, and for each subfield
  getCurrentSlideDate: state => state.currentSlide.date,
  getCurrentSlideDateContent: state => state.currentSlide.date.content,
  getCurrentSlideDateFontColor: state => state.currentSlide.date.fontColor,
  getCurrentSlideDateFontSize: state => state.currentSlide.date.fontSize,
  getCurrentSlideDateFontStyle: state => state.currentSlide.date.fontStyle,
  getCurrentSlideDateFontWeight: state => state.currentSlide.date.fontWeight,

  // getters for the current slides time, and for each subfield
  getCurrentSlideTime: state => state.currentSlide.time,
  getCurrentSlideTimeContent: state => state.currentSlide.time.content,
  getCurrentSlideTimeFontColor: state => state.currentSlide.time.fontColor,
  getCurrentSlideTimeFontSize: state => state.currentSlide.time.fontSize,
  getCurrentSlideTimeFontStyle: state => state.currentSlide.time.fontStyle,
  getCurrentSlideTimeFontWeight: state => state.currentSlide.time.fontWeight,

  // getters for the current slide meta fields
  getCurrentSlideMeta: state => state.currentSlide.meta,
  getCurrentSlideMetaTemplate: state => state.currentSlide.meta.template,
  getCurrentSlideMetaTimeout: state => state.currentSlide.meta.timeout,
  getCurrentSlideMetaRepeatable: state => state.currentSlide.meta.repeatable,
  getCurrentSlideMetaStartDate: state => state.currentSlide.meta.startDate,
  getCurrentSlideMetaEndDate: state => state.currentSlide.meta.endDate
}

// mutations of this module, mutation must be sync and atomic
const mutations = {
  //
  [SET_ALL_SLIDES] (state, payload) {
    state.allSlides = payload
  },
  // takes a slide object as payload, sets current slide to it.
  [CURRENT_SLIDE.SET] (state, payload) {
    state.currentSlide = payload
  },

  // takes boolean as payload, sets if slide has changes made compared to version in DB.
  [CURRENT_SLIDE.SET_STATUS] (state, payload) {
    state.isCurrentSlideDirty = payload
  },

  // takes title object as payload, set currentslide title to it. dirty slide for title and all its sub setters
  [CURRENT_SLIDE.SET_TITLE] (state, payload) {
    state.currentSlide.title = payload
    state.isCurrentSlideDirty = true
  },
  // takes content as payload (text). sets content for title of currentslide
  [CURRENT_SLIDE.SET_TITLE_CONTENT] (state, payload) {
    state.currentSlide.title.content = payload
    state.isCurrentSlideDirty = true
  },
  // takes fontcolor as payload. sets fontcolor for title of currentslide.
  [CURRENT_SLIDE.SET_TITLE_FONT_COLOR] (state, payload) {
    state.currentSlide.title.fontColor = payload
    state.isCurrentSlideDirty = true
  },
  // takes fontsize as payload. sets fontsize of title for currentslide.
  [CURRENT_SLIDE.SET_TITLE_FONT_SIZE] (state, payload) {
    state.currentSlide.title.fontSize = payload
    state.isCurrentSlideDirty = true
  },
  // takes fontstyle as payload. sets fontstyle of title for currentslide.
  [CURRENT_SLIDE.SET_TITLE_FONT_STYLE] (state, payload) {
    state.currentSlide.title.fontStyle = payload
    state.isCurrentSlideDirty = true
  },
  // takes fontweight for payload. sets fontweight of title for currentslide.
  [CURRENT_SLIDE.SET_TITLE_FONT_WEIGHT] (state, payload) {
    state.currentSlide.title.fontWeight = payload
    state.isCurrentSlideDirty = true
  },

  // takes a description object as payload and sets it for currentslide.
  // It and all sub setters of description set slide to dirty
  [CURRENT_SLIDE.SET_DESCRIPTION] (state, payload) {
    state.currentSlide.description = payload
    state.isCurrentSlideDirty = true
  },
  // takes content (text) as payload. sets content of description for currentslide.
  [CURRENT_SLIDE.SET_DESCRIPTION_CONTENT] (state, payload) {
    state.currentSlide.description.content = payload
    state.isCurrentSlideDirty = true
  },
  // takes fontcolor as payload. sets fontcolor of description for currentslide.
  [CURRENT_SLIDE.SET_DESCRIPTION_FONT_COLOR] (state, payload) {
    state.currentSlide.description.fontColor = payload
    state.isCurrentSlideDirty = true
  },
  // takes fontsize as payload. sets fontsize of description for currentslide
  [CURRENT_SLIDE.SET_DESCRIPTION_FONT_SIZE] (state, payload) {
    state.currentSlide.description.fontSize = payload
    state.isCurrentSlideDirty = true
  },
  // takes fontstyle as payload. sets fontsize of description for currentslide
  [CURRENT_SLIDE.SET_DESCRIPTION_FONT_STYLE] (state, payload) {
    state.currentSlide.description.fontStyle = payload
    state.isCurrentSlideDirty = true
  },
  // takes fontweight as payload. sets fontweight of description for currentslide
  [CURRENT_SLIDE.SET_DESCRIPTION_FONT_WEIGHT] (state, payload) {
    state.currentSlide.description.fontWeight = payload
    state.isCurrentSlideDirty = true
  },

  // takes image as payload. set currentslide image to it.
  [CURRENT_SLIDE.SET_IMAGE] (state, payload) {
    state.currentSlide.images = payload
    state.isCurrentSlideDirty = true
  },
  // here is where DELETE_IMAGE or equivilent will go if used.

  // takes a date object as payload and sets it for currentslide.
  // It and all sub setters of date set slide to dirty
  [CURRENT_SLIDE.SET_DATE] (state, payload) {
    state.currentSlide.date = payload
    state.isCurrentSlideDirty = true
  },
  // takes content as payload. sets content of date for currentslide
  [CURRENT_SLIDE.SET_DATE_CONTENT] (state, payload) {
    state.currentSlide.date.content = payload
    state.isCurrentSlideDirty = true
  },
  // takes fontcolor as payload. sets fontcolor of date for currentslide
  [CURRENT_SLIDE.SET_DATE_FONT_COLOR] (state, payload) {
    state.currentSlide.date.fontColor = payload
    state.isCurrentSlideDirty = true
  },
  // takes fontsize as payload. sets fontsize of date for currentslide
  [CURRENT_SLIDE.SET_DATE_FONT_SIZE] (state, payload) {
    state.currentSlide.date.fontSize = payload
    state.isCurrentSlideDirty = true
  },
  // takes fontstyle as payload. sets fontstyle of date for currentslide
  [CURRENT_SLIDE.SET_DATE_FONT_STYLE] (state, payload) {
    state.currentSlide.date.fontStyle = payload
    state.isCurrentSlideDirty = true
  },
  // takes fontweight as payload. sets fontweight of date for currentslide
  [CURRENT_SLIDE.SET_DATE_FONT_WEIGHT] (state, payload) {
    state.currentSlide.date.fontWeight = payload
    state.isCurrentSlideDirty = true
  },

  // takes a time object as payload and sets it for currentslide.
  // It and all sub setters of time set slide to dirty
  [CURRENT_SLIDE.SET_TIME] (state, payload) {
    state.currentSlide.time = payload
    state.isCurrentSlideDirty = true
  },
  // takes content as payload. sets content of currentslide time to it.
  [CURRENT_SLIDE.SET_TIME_CONTENT] (state, payload) {
    state.currentSlide.time.content = payload
    state.isCurrentSlideDirty = true
  },
  // takes fontcolor as payload. sets fontcolor of currentslide time to it.
  [CURRENT_SLIDE.SET_TIME_FONT_COLOR] (state, payload) {
    state.currentSlide.time.fontColor = payload
    state.isCurrentSlideDirty = true
  },
  // takes fontsize as payload. sets fontsize of currentslide time to it.
  [CURRENT_SLIDE.SET_TIME_FONT_SIZE] (state, payload) {
    state.currentSlide.time.fontSize = payload
    state.isCurrentSlideDirty = true
  },
  // takes fontstyle as payload. sets fontstyle of currentslide time to it.
  [CURRENT_SLIDE.SET_TIME_FONT_STYLE] (state, payload) {
    state.currentSlide.time.fontStyle = payload
    state.isCurrentSlideDirty = true
  },
  // takes fontweight as payload. sets fontweight of currentslide to it.
  [CURRENT_SLIDE.SET_TIME_FONT_WEIGHT] (state, payload) {
    state.currentSlide.time.fontWeight = payload
    state.isCurrentSlideDirty = true
  },

  [CURRENT_SLIDE.SET_META] (state, payload) {
    state.currentSlide.meta = payload
    state.isCurrentSlideDirty = true
  },
  [CURRENT_SLIDE.SET_META_TEMPLATE] (state, payload) {
    state.currentSlide.meta.template = payload
    state.isCurrentSlideDirty = true
  },
  [CURRENT_SLIDE.SET_META_TIMEOUT] (state, payload) {
    state.currentSlide.meta.timeout = payload
    state.isCurrentSlideDirty = true
  },
  [CURRENT_SLIDE.SET_META_REPEATABLE] (state, payload) {
    state.currentSlide.meta.repeatable = payload
    state.isCurrentSlideDirty = true
  },
  [CURRENT_SLIDE.SET_META_STARTDATE] (state, payload) {
    state.currentSlide.meta.startDate = payload
    state.isCurrentSlideDirty = true
  },
  [CURRENT_SLIDE.SET_META_ENDDATE] (state, payload) {
    state.currentSlide.meta.endDate = payload
    state.isCurrentSlideDirty = true
  }
}

// actions can be async and may have side effects
const actions = {
  // Gets all the slides in the database
  initAllSlides ({ commit }) {
    server.getAllSlides()
      .then(response => {
        commit(SET_ALL_SLIDES, response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  },

  // Takes id as payload and gets the slide with the given id
  getSlide ({ commit }, id) {
    server.getSlide(id)
      .then(response => {
        commit(CURRENT_SLIDE.SET, response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  },

  // used for saving both new slides, and edits to existing slides.
  saveSlide ({ state, commit }) {
    server.saveSlide(state.currentSlide)
      .then(response => {
        commit(CURRENT_SLIDE.SET, response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  // takes currentSlide as payload, used for deleting slides from database.
  deleteSlide ({ commit }) {
    server.deleteSlide('')
      .then(response => {
        commit(CURRENT_SLIDE.SET, newSlide)
      })
      .catch(function (error) {
        console.log(error)
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
