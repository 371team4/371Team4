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

describe('title', () => {
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

describe('description', () => {
  let state

  beforeEach(() => {
    state = refreshState()
  })

  it('SET_DESCRIPTION', () => {
    const titleStateBeforeMutation = { content: '', fontColor: null, fontSize: null, fontStyle: null, fontWeight: null }

    const titleStateAfterMutation = {
      content: 'Slide1',
      fontColor: 'Red',
      fontSize: 'Large',
      fontStyle: 'Normal',
      fontWeight: 'Bold'
    }
    assert(state.currentSlide.description, titleStateBeforeMutation)
    assert(state.isCurrentSlideDirty, false)

    slide.mutations[CURRENT_SLIDE.SET_DESCRIPTION](state, {
      content: 'Slide1',
      fontColor: 'Red',
      fontSize: 'Large',
      fontStyle: 'Normal',
      fontWeight: 'Bold'
    })

    assert(state.currentSlide.description, titleStateAfterMutation)
    assert(state.isCurrentSlideDirty, true)
  })

  it('SET_DESCRIPTION_CONTENT', () => {
    assert(state.currentSlide.description.content, '')
    assert(state.isCurrentSlideDirty, false)

    slide.mutations[CURRENT_SLIDE.SET_DESCRIPTION_CONTENT](state, 'title')

    assert(state.currentSlide.description.content, 'title')
    assert(state.isCurrentSlideDirty, true)
  })

  it('SET_DESCRIPTION_FONT_COLOR', () => {
    assert(state.currentSlide.description.fontColor, null)
    assert(state.isCurrentSlideDirty, false)

    slide.mutations[CURRENT_SLIDE.SET_DESCRIPTION_CONTENT](state, 'Red')

    assert(state.currentSlide.description.content, 'Red')
    assert(state.isCurrentSlideDirty, true)
  })

  it('SET_DESCRIPTION_FONT_SIZE', () => {
    assert(state.currentSlide.description.fontSize, null)
    assert(state.isCurrentSlideDirty, false)

    slide.mutations[CURRENT_SLIDE.SET_DESCRIPTION_FONT_SIZE](state, 'Large')

    assert(state.currentSlide.description.fontSize, 'Large')
    assert(state.isCurrentSlideDirty, true)
  })

  it('SET_DESCRIPTION_FONT_STYLE', () => {
    assert(state.currentSlide.description.fontStyle, null)
    assert(state.isCurrentSlideDirty, false)

    slide.mutations[CURRENT_SLIDE.SET_DESCRIPTION_FONT_STYLE](state, 'Normal')

    assert(state.currentSlide.description.fontStyle, 'Normal')
    assert(state.isCurrentSlideDirty, true)
  })

  it('SET_DESCRIPTION_FONT_WEIGHT', () => {
    assert(state.currentSlide.description.fontWeight, null)
    assert(state.isCurrentSlideDirty, false)

    slide.mutations[CURRENT_SLIDE.SET_DESCRIPTION_FONT_WEIGHT](state, 'Bold')

    assert(state.currentSlide.description.fontWeight, 'Bold')
    assert(state.isCurrentSlideDirty, true)
  })

  describe('date', () => {
    let state

    beforeEach(() => {
      state = refreshState()
    })

    it('SET_DATE', () => {
      const titleStateBeforeMutation = { content: null, fontColor: null, fontSize: null, fontStyle: null, fontWeight: null }

      const titleStateAfterMutation = {
        content: 'Slide1',
        fontColor: 'Red',
        fontSize: 'Large',
        fontStyle: 'Normal',
        fontWeight: 'Bold'
      }
      assert(state.currentSlide.date, titleStateBeforeMutation)
      assert(state.isCurrentSlideDirty, false)

      slide.mutations[CURRENT_SLIDE.SET_DATE](state, {
        content: 'Slide1',
        fontColor: 'Red',
        fontSize: 'Large',
        fontStyle: 'Normal',
        fontWeight: 'Bold'
      })

      assert(state.currentSlide.date, titleStateAfterMutation)
      assert(state.isCurrentSlideDirty, true)
    })

    it('SET_DATE_CONTENT', () => {
      assert(state.currentSlide.date.content, null)
      assert(state.isCurrentSlideDirty, false)

      slide.mutations[CURRENT_SLIDE.SET_DATE_CONTENT](state, 'title')

      assert(state.currentSlide.date.content, 'title')
      assert(state.isCurrentSlideDirty, true)
    })

    it('SET_DATE_FONT_COLOR', () => {
      assert(state.currentSlide.date.fontColor, null)
      assert(state.isCurrentSlideDirty, false)

      slide.mutations[CURRENT_SLIDE.SET_DATE_CONTENT](state, 'Red')

      assert(state.currentSlide.date.content, 'Red')
      assert(state.isCurrentSlideDirty, true)
    })

    it('SET_DATE_FONT_SIZE', () => {
      assert(state.currentSlide.date.fontSize, null)
      assert(state.isCurrentSlideDirty, false)

      slide.mutations[CURRENT_SLIDE.SET_DATE_FONT_SIZE](state, 'Large')

      assert(state.currentSlide.date.fontSize, 'Large')
      assert(state.isCurrentSlideDirty, true)
    })

    it('SET_DATE_FONT_STYLE', () => {
      assert(state.currentSlide.date.fontStyle, null)
      assert(state.isCurrentSlideDirty, false)

      slide.mutations[CURRENT_SLIDE.SET_DATE_FONT_STYLE](state, 'Normal')

      assert(state.currentSlide.date.fontStyle, 'Normal')
      assert(state.isCurrentSlideDirty, true)
    })

    it('SET_DATE_FONT_WEIGHT', () => {
      assert(state.currentSlide.date.fontWeight, null)
      assert(state.isCurrentSlideDirty, false)

      slide.mutations[CURRENT_SLIDE.SET_DATE_FONT_WEIGHT](state, 'Bold')

      assert(state.currentSlide.date.fontWeight, 'Bold')
      assert(state.isCurrentSlideDirty, true)
    })
  })

  describe('time', () => {
    let state

    beforeEach(() => {
      state = refreshState()
    })

    it('SET_TIME', () => {
      const titleStateBeforeMutation = { content: null, fontColor: null, fontSize: null, fontStyle: null, fontWeight: null }

      const titleStateAfterMutation = {
        content: 'Slide1',
        fontColor: 'Red',
        fontSize: 'Large',
        fontStyle: 'Normal',
        fontWeight: 'Bold'
      }
      assert(state.currentSlide.time, titleStateBeforeMutation)
      assert(state.isCurrentSlideDirty, false)

      slide.mutations[CURRENT_SLIDE.SET_TIME](state, {
        content: 'Slide1',
        fontColor: 'Red',
        fontSize: 'Large',
        fontStyle: 'Normal',
        fontWeight: 'Bold'
      })

      assert(state.currentSlide.time, titleStateAfterMutation)
      assert(state.isCurrentSlideDirty, true)
    })

    it('SET_TIME_CONTENT', () => {
      assert(state.currentSlide.time.content, null)
      assert(state.isCurrentSlideDirty, false)

      slide.mutations[CURRENT_SLIDE.SET_TIME_CONTENT](state, 'title')

      assert(state.currentSlide.time.content, 'title')
      assert(state.isCurrentSlideDirty, true)
    })

    it('SET_TIME_FONT_COLOR', () => {
      assert(state.currentSlide.time.fontColor, null)
      assert(state.isCurrentSlideDirty, false)

      slide.mutations[CURRENT_SLIDE.SET_TIME_CONTENT](state, 'Red')

      assert(state.currentSlide.time.content, 'Red')
      assert(state.isCurrentSlideDirty, true)
    })

    it('SET_TIME_FONT_SIZE', () => {
      assert(state.currentSlide.time.fontSize, null)
      assert(state.isCurrentSlideDirty, false)

      slide.mutations[CURRENT_SLIDE.SET_TIME_FONT_SIZE](state, 'Large')

      assert(state.currentSlide.time.fontSize, 'Large')
      assert(state.isCurrentSlideDirty, true)
    })

    it('SET_TIME_FONT_STYLE', () => {
      assert(state.currentSlide.time.fontStyle, null)
      assert(state.isCurrentSlideDirty, false)

      slide.mutations[CURRENT_SLIDE.SET_TIME_FONT_STYLE](state, 'Normal')

      assert(state.currentSlide.time.fontStyle, 'Normal')
      assert(state.isCurrentSlideDirty, true)
    })

    it('SET_TIME_FONT_WEIGHT', () => {
      assert(state.currentSlide.time.fontWeight, null)
      assert(state.isCurrentSlideDirty, false)

      slide.mutations[CURRENT_SLIDE.SET_TIME_FONT_WEIGHT](state, 'Bold')

      assert(state.currentSlide.time.fontWeight, 'Bold')
      assert(state.isCurrentSlideDirty, true)
    })
  })
})
