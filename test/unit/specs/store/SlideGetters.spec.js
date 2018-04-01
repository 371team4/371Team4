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
      date: { content: null, fontColor: null, fontSize: null, fontStyle: null, fontWeight: null },
      time: { content: null, fontColor: null, fontSize: null, fontStyle: null, fontWeight: null },
      meta: { template: null, timeout: null, repeatable: null, startDate: null, endDate: null }
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

        assert(slide.getters.getCurrentSlideTitle(state), titleStateAfterMutation)
        assert(slide.getters.getIsCurrentSlideDirty(state), true)
      })

      it('SET_TITLE_CONTENT', () => {
        assert(state.currentSlide.title.content, '')
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_TITLE_CONTENT](state, 'title')

        assert(slide.getters.getCurrentSlideTitleContent(state), 'title')
        assert(slide.getters.getIsCurrentSlideDirty(state), true)
      })

      it('SET_TITLE_FONT_COLOR', () => {
        assert(state.currentSlide.title.fontColor, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_TITLE_FONT_COLOR](state, 'Red')

        assert(slide.getters.getCurrentSlideTitleFontColor(state), 'Red')
        assert(slide.getters.getIsCurrentSlideDirty(state), true)
      })

      it('SET_TITLE_FONT_SIZE', () => {
        assert(state.currentSlide.title.fontSize, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_TITLE_FONT_SIZE](state, 'Large')

        assert(slide.getters.getCurrentSlideTitleFontSize(state), 'Large')
        assert(slide.getters.getIsCurrentSlideDirty(state), true)
      })

      it('SET_TITLE_FONT_STYLE', () => {
        assert(state.currentSlide.title.fontStyle, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_TITLE_FONT_STYLE](state, 'Normal')

        assert(slide.getters.getCurrentSlideTitleFontStyle(state), 'Normal')
        assert(slide.getters.getIsCurrentSlideDirty(state), true)
      })

      it('SET_TITLE_FONT_WEIGHT', () => {
        assert(state.currentSlide.title.fontWeight, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_TITLE_FONT_WEIGHT](state, 'Bold')

        assert(slide.getters.getCurrentSlideTitleFontWeight(state), 'Bold')
        assert(slide.getters.getIsCurrentSlideDirty(state), true)
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

        assert(slide.getters.getCurrentSlideDescription(state), titleStateAfterMutation)
        assert(slide.getters.getIsCurrentSlideDirty(state), true)
      })

      it('SET_DESCRIPTION_CONTENT', () => {
        assert(state.currentSlide.description.content, '')
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_DESCRIPTION_CONTENT](state, 'title')

        assert(slide.getters.getCurrentSlideDescriptionContent(state), 'title')
        assert(slide.getters.getIsCurrentSlideDirty(state), true)
      })

      it('SET_DESCRIPTION_FONT_COLOR', () => {
        assert(state.currentSlide.description.fontColor, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_DESCRIPTION_FONT_COLOR](state, 'Red')

        assert(slide.getters.getCurrentSlideDescriptionFontColor(state), 'Red')
        assert(slide.getters.getIsCurrentSlideDirty(state), true)
      })

      it('SET_DESCRIPTION_FONT_SIZE', () => {
        assert(state.currentSlide.description.fontSize, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_DESCRIPTION_FONT_SIZE](state, 'Large')

        assert(slide.getters.getCurrentSlideDescriptionFontSize(state), 'Large')
        assert(slide.getters.getIsCurrentSlideDirty(state), true)
      })

      it('SET_DESCRIPTION_FONT_STYLE', () => {
        assert(state.currentSlide.description.fontStyle, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_DESCRIPTION_FONT_STYLE](state, 'Normal')

        assert(slide.getters.getCurrentSlideDescriptionFontStyle(state), 'Normal')
        assert(slide.getters.getIsCurrentSlideDirty(state), true)
      })

      it('SET_DESCRIPTION_FONT_WEIGHT', () => {
        assert(state.currentSlide.description.fontWeight, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_DESCRIPTION_FONT_WEIGHT](state, 'Bold')

        assert(slide.getters.getCurrentSlideDescriptionFontWeight(state), 'Bold')
        assert(slide.getters.getIsCurrentSlideDirty(state), true)
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

        assert(slide.getters.getCurrentSlideImages(state), {
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
        assert(slide.getters.getIsCurrentSlideDirty(state), true)
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

        assert(slide.getters.getCurrentSlideDate(state), titleStateAfterMutation)
        assert(slide.getters.getIsCurrentSlideDirty(state), true)
      })

      it('SET_DATE_CONTENT', () => {
        assert(state.currentSlide.date.content, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_DATE_CONTENT](state, 'title')

        assert(slide.getters.getCurrentSlideDateContent(state), 'title')
        assert(slide.getters.getIsCurrentSlideDirty(state), true)
      })

      it('SET_DATE_FONT_COLOR', () => {
        assert(state.currentSlide.date.fontColor, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_DATE_FONT_COLOR](state, 'Red')

        assert(slide.getters.getCurrentSlideDateFontColor(state), 'Red')
        assert(slide.getters.getIsCurrentSlideDirty(state), true)
      })

      it('SET_DATE_FONT_SIZE', () => {
        assert(state.currentSlide.date.fontSize, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_DATE_FONT_SIZE](state, 'Large')

        assert(slide.getters.getCurrentSlideDateFontSize(state), 'Large')
        assert(slide.getters.getIsCurrentSlideDirty(state), true)
      })

      it('SET_DATE_FONT_STYLE', () => {
        assert(state.currentSlide.date.fontStyle, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_DATE_FONT_STYLE](state, 'Normal')

        assert(slide.getters.getCurrentSlideDateFontStyle(state), 'Normal')
        assert(slide.getters.getIsCurrentSlideDirty(state), true)
      })

      it('SET_DATE_FONT_WEIGHT', () => {
        assert(state.currentSlide.date.fontWeight, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_DATE_FONT_WEIGHT](state, 'Bold')

        assert(slide.getters.getCurrentSlideDateFontWeight(state), 'Bold')
        assert(slide.getters.getIsCurrentSlideDirty(state), true)
      })
    })

    describe('time', () => {
      let state

      beforeEach(() => {
        state = refreshState()
      })

      it('SET_TIME', () => {
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
        assert(state.currentSlide.time, titleStateBeforeMutation)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_TIME](state, {
          content: 'Slide1',
          fontColor: 'Red',
          fontSize: 'Large',
          fontStyle: 'Normal',
          fontWeight: 'Bold'
        })

        assert(slide.getters.getCurrentSlideTime(state), titleStateAfterMutation)
        assert(slide.getters.getIsCurrentSlideDirty(state), true)
      })

      it('SET_TIME_CONTENT', () => {
        assert(state.currentSlide.time.content, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_TIME_CONTENT](state, 'title')

        assert(slide.getters.getCurrentSlideTimeContent(state), 'title')
        assert(slide.getters.getIsCurrentSlideDirty(state), true)
      })

      it('SET_TIME_FONT_COLOR', () => {
        assert(state.currentSlide.time.fontColor, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_TIME_FONT_COLOR](state, 'Red')

        assert(slide.getters.getCurrentSlideTimeFontColor(state), 'Red')
        assert(slide.getters.getIsCurrentSlideDirty(state), true)
      })

      it('SET_TIME_FONT_SIZE', () => {
        assert(state.currentSlide.time.fontSize, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_TIME_FONT_SIZE](state, 'Large')

        assert(slide.getters.getCurrentSlideTimeFontSize(state), 'Large')
        assert(slide.getters.getIsCurrentSlideDirty(state), true)
      })

      it('SET_TIME_FONT_STYLE', () => {
        assert(state.currentSlide.time.fontStyle, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_TIME_FONT_STYLE](state, 'Normal')

        assert(slide.getters.getCurrentSlideTimeFontStyle(state), 'Normal')
        assert(slide.getters.getIsCurrentSlideDirty(state), true)
      })

      it('SET_TIME_FONT_WEIGHT', () => {
        assert(state.currentSlide.time.fontWeight, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_TIME_FONT_WEIGHT](state, 'Bold')

        assert(slide.getters.getCurrentSlideTimeFontWeight(state), 'Bold')
        assert(slide.getters.getIsCurrentSlideDirty(state), true)
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
        assert(slide.getters.getCurrentSlideMeta(state), titleStateBeforeMutation)
        assert(slide.getters.getIsCurrentSlideDirty(state), false)

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

        assert(slide.getters.getCurrentSlideMetaTemplate(state), 'DefaultSlideTemplate')
        assert(slide.getters.getIsCurrentSlideDirty(state), true)
      })

      it('SET_META_TIMEOUT', () => {
        assert(state.currentSlide.meta.timeout, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_META_TIMEOUT](state, '40')

        assert(slide.getters.getCurrentSlideMetaTimeout(state), '40')
        assert(slide.getters.getIsCurrentSlideDirty(state), true)
      })

      it('SET_META_REPEATABLE', () => {
        assert(state.currentSlide.meta.repeatable, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_META_REPEATABLE](state, false)

        assert(slide.getters.getCurrentSlideMetaRepeatable(state), false)
        assert(slide.getters.getIsCurrentSlideDirty(state), true)
      })

      it('SET_META_STARTDATE', () => {
        assert(state.currentSlide.meta.startDate, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_META_STARTDATE](state, '2018-02-16')

        assert(slide.getters.getCurrentSlideMetaStartDate(state), '2018-02-16')
        assert(slide.getters.getIsCurrentSlideDirty(state), true)
      })

      it('SET_META_ENDDATE', () => {
        assert(state.currentSlide.meta.endDate, null)
        assert(state.isCurrentSlideDirty, false)

        slide.mutations[MUTATIONS.SET_META_ENDDATE](state, '2018-02-16')

        assert(slide.getters.getCurrentSlideMetaEndDate(state), '2018-02-16')
        assert(slide.getters.getIsCurrentSlideDirty(state), true)
      })
    })
  })
})
