import slide from '@/store/modules/slide'
import * as MUTATIONS from '@/store/mutation-types'

// actions have not been tested

const refreshState = () => {
  return {
    allSlides: [],

    currentSlide: {
      title: { content: '', fontColor: null, fontSize: null, fontStyle: null, fontWeight: null },
      description: { content: '', fontColor: null, fontSize: null, fontStyle: null, fontWeight: null },
      images: [],
      date: { content: [], fontColor: null, fontSize: null, fontStyle: null, fontWeight: null },
      time: { content: null, fontColor: null, fontSize: null, fontStyle: null, fontWeight: null },
      meta: { template: null, timeout: null, datesOnDisplay: [] }
    },

    isCurrentSlideDirty: false

  }
}

const assert = (s, val) => { expect(s).to.deep.equal(val) }

describe('slide', () => {
  // TEST GETTERS
  describe('getters', () => {
    describe('title', () => {
      let state

      beforeEach(() => {
        state = refreshState()
      })

      it('SET_TITLE', () => {
        const titleStateBeforeMutation = {
          content: '',
          fontColor: null,
          fontSize: null,
          fontStyle: null,
          fontWeight: null
        }

        const titleStateAfterMutation = {
          content: 'Slide1',
          fontColor: 'Red',
          fontSize: 'Large',
          fontStyle: 'Normal',
          fontWeight: 'Bold'
        }
        assert(state.currentSlide.title, titleStateBeforeMutation)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_TITLE](state, {
          content: 'Slide1',
          fontColor: 'Red',
          fontSize: 'Large',
          fontStyle: 'Normal',
          fontWeight: 'Bold'
        })

        assert(slide.getters.currentSlideTitle(state), titleStateAfterMutation)
        assert(slide.getters.isCurrentSlideDirty(state), true)
      })

      it('SET_TITLE_CONTENT', () => {
        assert(state.currentSlide.title.content, '')
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_TITLE_CONTENT](state, 'title')

        assert(slide.getters.currentSlideTitleContent(state), 'title')
        assert(slide.getters.isCurrentSlideDirty(state), true)
      })

      it('SET_TITLE_FONT_COLOR', () => {
        assert(state.currentSlide.title.fontColor, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_TITLE_FONT_COLOR](state, 'Red')

        assert(slide.getters.currentSlideTitleColor(state), 'Red')
        assert(slide.getters.isCurrentSlideDirty(state), true)
      })

      it('SET_TITLE_FONT_SIZE', () => {
        assert(state.currentSlide.title.fontSize, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_TITLE_FONT_SIZE](state, 'Large')

        assert(slide.getters.currentSlideTitleSize(state), 'Large')
        assert(slide.getters.isCurrentSlideDirty(state), true)
      })

      it('SET_TITLE_FONT_STYLE', () => {
        assert(state.currentSlide.title.fontStyle, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_TITLE_FONT_STYLE](state, 'Normal')

        assert(slide.getters.currentSlideTitleStyle(state), 'Normal')
        assert(slide.getters.isCurrentSlideDirty(state), true)
      })

      it('SET_TITLE_FONT_WEIGHT', () => {
        assert(state.currentSlide.title.fontWeight, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_TITLE_FONT_WEIGHT](state, 'Bold')

        assert(slide.getters.currentSlideTitleWeight(state), 'Bold')
        assert(slide.getters.isCurrentSlideDirty(state), true)
      })
    })

    describe('description', () => {
      let state

      beforeEach(() => {
        state = refreshState()
      })

      it('SET_DESCRIPTION', () => {
        const titleStateBeforeMutation = {
          content: '',
          fontColor: null,
          fontSize: null,
          fontStyle: null,
          fontWeight: null
        }

        const titleStateAfterMutation = {
          content: 'Slide1',
          fontColor: 'Red',
          fontSize: 'Large',
          fontStyle: 'Normal',
          fontWeight: 'Bold'
        }
        assert(state.currentSlide.description, titleStateBeforeMutation)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_DESCRIPTION](state, {
          content: 'Slide1',
          fontColor: 'Red',
          fontSize: 'Large',
          fontStyle: 'Normal',
          fontWeight: 'Bold'
        })

        assert(slide.getters.currentSlideDescription(state), titleStateAfterMutation)
        assert(slide.getters.isCurrentSlideDirty(state), true)
      })

      it('SET_DESCRIPTION_CONTENT', () => {
        assert(state.currentSlide.description.content, '')
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_DESCRIPTION_CONTENT](state, 'title')

        assert(slide.getters.currentSlideDescriptionContent(state), 'title')
        assert(slide.getters.isCurrentSlideDirty(state), true)
      })

      it('SET_DESCRIPTION_FONT_COLOR', () => {
        assert(state.currentSlide.description.fontColor, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_DESCRIPTION_FONT_COLOR](state, 'Red')

        assert(slide.getters.currentSlideDescriptionColor(state), 'Red')
        assert(slide.getters.isCurrentSlideDirty(state), true)
      })

      it('SET_DESCRIPTION_FONT_SIZE', () => {
        assert(state.currentSlide.description.fontSize, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_DESCRIPTION_FONT_SIZE](state, 'Large')

        assert(slide.getters.currentSlideDescriptionSize(state), 'Large')
        assert(slide.getters.isCurrentSlideDirty(state), true)
      })

      it('SET_DESCRIPTION_FONT_STYLE', () => {
        assert(state.currentSlide.description.fontStyle, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_DESCRIPTION_FONT_STYLE](state, 'Normal')

        assert(slide.getters.currentSlideDescriptionStyle(state), 'Normal')
        assert(slide.getters.isCurrentSlideDirty(state), true)
      })

      it('SET_DESCRIPTION_FONT_WEIGHT', () => {
        assert(state.currentSlide.description.fontWeight, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_DESCRIPTION_FONT_WEIGHT](state, 'Bold')

        assert(slide.getters.currentSlideDescriptionWeight(state), 'Bold')
        assert(slide.getters.isCurrentSlideDirty(state), true)
      })
    })

    describe('image', () => {
      let state

      beforeEach(() => {
        state = refreshState()
      })

      it('SET_IMAGE', () => {
        assert(state.currentSlide.images, [])
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_IMAGE](state, {
          src: 'https://picsum.photos/200/300/?image=92'
        },
        {
          src: 'https://picsum.photos/200/300/?image=19'
        },
        {
          src: 'https://picsum.photos/200/300/?image=14'
        },
        {
          src: 'https://picsum.photos/200/300/?image=94'
        })

        assert(slide.getters.currentSlideImages(state), {
          src: 'https://picsum.photos/200/300/?image=92'
        },
        {
          src: 'https://picsum.photos/200/300/?image=19'
        },
        {
          src: 'https://picsum.photos/200/300/?image=14'
        },
        {
          src: 'https://picsum.photos/200/300/?image=94'
        })
        assert(slide.getters.isCurrentSlideDirty(state), true)
      })
    })

    describe('date', () => {
      let state

      beforeEach(() => {
        state = refreshState()
      })

      it('SET_DATE', () => {
        const titleStateBeforeMutation = {
          content: null,
          fontColor: null,
          fontSize: null,
          fontStyle: null,
          fontWeight: null
        }

        const titleStateAfterMutation = {
          content: 'Slide1',
          fontColor: 'Red',
          fontSize: 'Large',
          fontStyle: 'Normal',
          fontWeight: 'Bold'
        }
        assert(state.currentSlide.date, titleStateBeforeMutation)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_DATE](state, {
          content: 'Slide1',
          fontColor: 'Red',
          fontSize: 'Large',
          fontStyle: 'Normal',
          fontWeight: 'Bold'
        })

        assert(slide.getters.currentSlideDate(state), titleStateAfterMutation)
        assert(slide.getters.isCurrentSlideDirty(state), true)
      })

      it('SET_DATE_CONTENT', () => {
        assert(state.currentSlide.date.content, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_DATE_CONTENT](state, 'title')

        assert(slide.getters.currentSlideDateContent(state), 'title')
        assert(slide.getters.isCurrentSlideDirty(state), true)
      })

      it('SET_DATE_FONT_COLOR', () => {
        assert(state.currentSlide.date.fontColor, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_DATE_FONT_COLOR](state, 'Red')

        assert(slide.getters.currentSlideDateColor(state), 'Red')
        assert(slide.getters.isCurrentSlideDirty(state), true)
      })

      it('SET_DATE_FONT_SIZE', () => {
        assert(state.currentSlide.date.fontSize, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_DATE_FONT_SIZE](state, 'Large')

        assert(slide.getters.currentSlideDateSize(state), 'Large')
        assert(slide.getters.isCurrentSlideDirty(state), true)
      })

      it('SET_DATE_FONT_STYLE', () => {
        assert(state.currentSlide.date.fontStyle, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_DATE_FONT_STYLE](state, 'Normal')

        assert(slide.getters.currentSlideDateStyle(state), 'Normal')
        assert(slide.getters.isCurrentSlideDirty(state), true)
      })

      it('SET_DATE_FONT_WEIGHT', () => {
        assert(state.currentSlide.date.fontWeight, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_DATE_FONT_WEIGHT](state, 'Bold')

        assert(slide.getters.currentSlideDateWeight(state), 'Bold')
        assert(slide.getters.isCurrentSlideDirty(state), true)
      })
    })

    describe('time', () => {
      let state

      beforeEach(() => {
        state = refreshState()
      })

      it('SET_TIME_CONTENT', () => {
        assert(state.currentSlide.time.content, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_TIME_CONTENT](state, 'title')

        assert(slide.getters.currentSlideTimeContent(state), 'title')
        assert(slide.getters.isCurrentSlideDirty(state), true)
      })

      it('SET_TIME_FONT_COLOR', () => {
        assert(state.currentSlide.time.fontColor, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_TIME_FONT_COLOR](state, 'Red')

        assert(slide.getters.currentSlideTimeColor(state), 'Red')
        assert(slide.getters.isCurrentSlideDirty(state), true)
      })

      it('SET_TIME_FONT_SIZE', () => {
        assert(state.currentSlide.time.fontSize, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_TIME_FONT_SIZE](state, 'Large')

        assert(slide.getters.currentSlideTimeSize(state), 'Large')
        assert(slide.getters.isCurrentSlideDirty(state), true)
      })

      it('SET_TIME_FONT_STYLE', () => {
        assert(state.currentSlide.time.fontStyle, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_TIME_FONT_STYLE](state, 'Normal')

        assert(slide.getters.currentSlideTimeStyle(state), 'Normal')
        assert(slide.getters.isCurrentSlideDirty(state), true)
      })

      it('SET_TIME_FONT_WEIGHT', () => {
        assert(state.currentSlide.time.fontWeight, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_TIME_FONT_WEIGHT](state, 'Bold')

        assert(slide.getters.currentSlideTimeWeight(state), 'Bold')
        assert(slide.getters.isCurrentSlideDirty(state), true)
      })
    })

    describe('meta', () => {
      let state

      beforeEach(() => {
        state = refreshState()
      })

      it('SET_META', () => {
        const titleStateBeforeMutation = {
          template: null,
          timeout: null,
          repeatable: null,
          startDate: null,
          endDate: null
        }

        const titleStateAfterMutation = {
          template: 'DefaultSlideTemplate',
          timeout: '40',
          repeatable: false,
          startDate: '2018-02-16',
          endDate: '2018-03-01'
        }
        assert(slide.getters.currentSlideMeta(state), titleStateBeforeMutation)
        assert(slide.getters.isCurrentSlideDirty(state), false)

        slide.mutations[MUTATIONS.SET_TIME](state, {
          template: 'DefaultSlideTemplate',
          timeout: '40',
          repeatable: false,
          startDate: '2018-02-16',
          endDate: '2018-03-01'
        })

        assert(state.currentSlide.time, titleStateAfterMutation)
        assert(state.isCurrentSlideDirty, true)
      })

      it('SET_META_TEMPLATE', () => {
        assert(state.currentSlide.meta.template, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_META_TEMPLATE](state, 'DefaultSlideTemplate')

        assert(slide.getters.currentSlideMetaTemplate(state), 'DefaultSlideTemplate')
        assert(slide.getters.isCurrentSlideDirty(state), true)
      })

      it('SET_META_TIMEOUT', () => {
        assert(state.currentSlide.meta.timeout, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_META_TIMEOUT](state, '40')

        assert(slide.getters.currentSlideMetaTimeout(state), '40')
        assert(slide.getters.isCurrentSlideDirty(state), true)
      })
    })
  })
})
