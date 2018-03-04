import slide from '@/store/modules/slide/index'
import * as CURRENT_SLIDE from '@/store/modules/slide/mutation-types'

const refreshState = () => {
  return {
    allSlides: [],

    currentSlide: {
      title: { content: '', fontColor: null, fontSize: null, fontStyle: null, fontWeight: null },
      description: { content: '', fontColor: null, fontSize: null, fontStyle: null, fontWeight: null },
      images: [],
      date: { content: null, fontColor: null, fontSize: null, fontStyle: null, fontWeight: null },
      time: { content: null, fontColor: null, fontSize: null, fontStyle: null, fontWeight: null },
      meta: { template: null, timeout: '', repeatable: false, startDate: '', endDate: '' }
    },

    isCurrentSlideDirty: false

  }
}

const assert = (s, val) => { expect(s).to.deep.equal(val) }

describe.only('title', () => {
  let state

  beforeEach(() => {
    state = refreshState()
  })

  it('SET_TITLE', () => {
    const titleStateBeforeMutation = { content: '', fontColor: null, fontSize: null, fontStyle: null, fontWeight: null }

    const titleStateAfterMutation = {
      content: 'Slide1',
      fontColor: 'Red',
      fontSize: 'Large',
      fontStyle: 'Normal',
      fontWeight: 'Bold'
    }
    assert(state.currentSlide.title, titleStateBeforeMutation)
    assert(state.isCurrentSlideDirty, false)

    slide.mutations[CURRENT_SLIDE.SET_TITLE](state, {
      content: 'Slide1',
      fontColor: 'Red',
      fontSize: 'Large',
      fontStyle: 'Normal',
      fontWeight: 'Bold'
    })

    assert(state.currentSlide.title, titleStateAfterMutation)
    assert(state.isCurrentSlideDirty, true)
  })

  it('SET_TITLE_CONTENT', () => {
    assert(state.currentSlide.title.content, '')
    assert(state.isCurrentSlideDirty, false)

    slide.mutations[CURRENT_SLIDE.SET_TITLE_CONTENT](state, 'title')

    assert(state.currentSlide.title.content, 'title')
    assert(state.isCurrentSlideDirty, true)
  })

  it('SET_TITLE_FONT_COLOR', () => {
    assert(state.currentSlide.title.fontColor, null)
    assert(state.isCurrentSlideDirty, false)

    slide.mutations[CURRENT_SLIDE.SET_TITLE_CONTENT](state, 'Red')

    assert(state.currentSlide.title.content, 'Red')
    assert(state.isCurrentSlideDirty, true)
  })

  it('SET_TITLE_FONT_SIZE', () => {
    assert(state.currentSlide.title.fontSize, null)
    assert(state.isCurrentSlideDirty, false)

    slide.mutations[CURRENT_SLIDE.SET_TITLE_FONT_SIZE](state, 'Large')

    assert(state.currentSlide.title.fontSize, 'Large')
    assert(state.isCurrentSlideDirty, true)
  })

  it('SET_TITLE_FONT_STYLE', () => {
    assert(state.currentSlide.title.fontStyle, null)
    assert(state.isCurrentSlideDirty, false)

    slide.mutations[CURRENT_SLIDE.SET_TITLE_FONT_STYLE](state, 'Normal')

    assert(state.currentSlide.title.fontStyle, 'Normal')
    assert(state.isCurrentSlideDirty, true)
  })

  it('SET_TITLE_FONT_WEIGHT', () => {
    assert(state.currentSlide.title.fontWeight, null)
    assert(state.isCurrentSlideDirty, false)

    slide.mutations[CURRENT_SLIDE.SET_TITLE_FONT_WEIGHT](state, 'Bold')

    assert(state.currentSlide.title.fontWeight, 'Bold')
    assert(state.isCurrentSlideDirty, true)
  })
})
