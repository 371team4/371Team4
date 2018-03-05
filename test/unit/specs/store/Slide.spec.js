import slide from '@/store/modules/slide/index'
import * as CURRENT_SLIDE from '@/store/modules/slide/mutation-types'

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

// TEST MUTATORS
describe('set', () => {
  let state

  beforeEach(() => {
    state = refreshState()
  })

  it('SET', () => {
    const titleStateBeforeMutation = {
      title: { content: '', fontColor: null, fontSize: null, fontStyle: null, fontWeight: null },
      description: { content: '', fontColor: null, fontSize: null, fontStyle: null, fontWeight: null },
      images: [],
      date: { content: null, fontColor: null, fontSize: null, fontStyle: null, fontWeight: null },
      time: { content: null, fontColor: null, fontSize: null, fontStyle: null, fontWeight: null },
      meta: { template: null, timeout: null, repeatable: null, startDate: null, endDate: null }
    }

    const titleStateAfterMutation = {
      images: [
        {
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
        }
      ],
      title: {
        content: 'Slide1',
        fontColor: 'Red',
        fontSize: 'Large',
        fontStyle: 'Normal',
        fontWeight: 'Bold'
      },
      description: {
        content: 'This is the description for Slide1',
        fontColor: 'Red',
        fontSize: 'Large',
        fontStyle: 'Normal',
        fontWeight: 'Bold'
      },
      date: {
        content: '2018-02-15',
        fontColor: 'Red',
        fontSize: 'Large',
        fontStyle: 'Normal',
        fontWeight: 'Bold'
      },
      time: {
        content: '13:05',
        fontColor: 'Red',
        fontSize: 'Large',
        fontStyle: 'Normal',
        fontWeight: 'Bold'
      },
      meta: {
        template: 'DefaultSlideTemplate',
        timeout: '40',
        repeatable: false,
        startDate: '2018-02-16',
        endDate: '2018-03-01'
      }
    }
    assert(state.currentSlide, titleStateBeforeMutation)

    slide.mutations[CURRENT_SLIDE.SET](state, {
      images: [
        {
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
        }
      ],
      title: {
        content: 'Slide1',
        fontColor: 'Red',
        fontSize: 'Large',
        fontStyle: 'Normal',
        fontWeight: 'Bold'
      },
      description: {
        content: 'This is the description for Slide1',
        fontColor: 'Red',
        fontSize: 'Large',
        fontStyle: 'Normal',
        fontWeight: 'Bold'
      },
      date: {
        content: '2018-02-15',
        fontColor: 'Red',
        fontSize: 'Large',
        fontStyle: 'Normal',
        fontWeight: 'Bold'
      },
      time: {
        content: '13:05',
        fontColor: 'Red',
        fontSize: 'Large',
        fontStyle: 'Normal',
        fontWeight: 'Bold'
      },
      meta: {
        template: 'DefaultSlideTemplate',
        timeout: '40',
        repeatable: false,
        startDate: '2018-02-16',
        endDate: '2018-03-01'
      }
    })

    assert(state.currentSlide, titleStateAfterMutation)
  })

  it('SET_STATUS', () => {
    assert(state.isCurrentSlideDirty, false)

    slide.mutations[CURRENT_SLIDE.SET_STATUS](state, true)

    assert(state.isCurrentSlideDirty, true)
  })
})

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

    slide.mutations[CURRENT_SLIDE.SET_TITLE_FONT_COLOR](state, 'Red')

    assert(state.currentSlide.title.fontColor, 'Red')
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

    slide.mutations[CURRENT_SLIDE.SET_DESCRIPTION_FONT_COLOR](state, 'Red')

    assert(state.currentSlide.description.fontColor, 'Red')
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
})

describe('image', () => {
  let state

  beforeEach(() => {
    state = refreshState()
  })

  it('SET_IMAGE', () => {
    assert(state.currentSlide.images, [])
    assert(state.isCurrentSlideDirty, false)

    slide.mutations[CURRENT_SLIDE.SET_IMAGE](state, {
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

    assert(state.currentSlide.images, {
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
    assert(state.isCurrentSlideDirty, true)
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

    slide.mutations[CURRENT_SLIDE.SET_DATE_FONT_COLOR](state, 'Red')

    assert(state.currentSlide.date.fontColor, 'Red')
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

    slide.mutations[CURRENT_SLIDE.SET_TIME_FONT_COLOR](state, 'Red')

    assert(state.currentSlide.time.fontColor, 'Red')
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
    assert(state.currentSlide.meta, titleStateBeforeMutation)
    assert(state.isCurrentSlideDirty, false)

    slide.mutations[CURRENT_SLIDE.SET_TIME](state, {
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

    slide.mutations[CURRENT_SLIDE.SET_META_TEMPLATE](state, 'DefaultSlideTemplate')

    assert(state.currentSlide.meta.template, 'DefaultSlideTemplate')
    assert(state.isCurrentSlideDirty, true)
  })

  it('SET_META_TIMEOUT', () => {
    assert(state.currentSlide.meta.timeout, null)
    assert(state.isCurrentSlideDirty, false)

    slide.mutations[CURRENT_SLIDE.SET_META_TIMEOUT](state, '40')

    assert(state.currentSlide.meta.timeout, '40')
    assert(state.isCurrentSlideDirty, true)
  })

  it('SET_META_REPEATABLE', () => {
    assert(state.currentSlide.meta.repeatable, null)
    assert(state.isCurrentSlideDirty, false)

    slide.mutations[CURRENT_SLIDE.SET_META_REPEATABLE](state, false)

    assert(state.currentSlide.meta.repeatable, false)
    assert(state.isCurrentSlideDirty, true)
  })

  it('SET_META_STARTDATE', () => {
    assert(state.currentSlide.meta.startDate, null)
    assert(state.isCurrentSlideDirty, false)

    slide.mutations[CURRENT_SLIDE.SET_META_STARTDATE](state, '2018-02-16')

    assert(state.currentSlide.meta.startDate, '2018-02-16')
    assert(state.isCurrentSlideDirty, true)
  })

  it('SET_META_ENDDATE', () => {
    assert(state.currentSlide.meta.endDate, null)
    assert(state.isCurrentSlideDirty, false)

    slide.mutations[CURRENT_SLIDE.SET_META_ENDDATE](state, '2018-02-16')

    assert(state.currentSlide.meta.endDate, '2018-02-16')
    assert(state.isCurrentSlideDirty, true)
  })
})

// TEST GETTERS
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

    slide.mutations[CURRENT_SLIDE.SET_TITLE](state, {
      content: 'Slide1',
      fontColor: 'Red',
      fontSize: 'Large',
      fontStyle: 'Normal',
      fontWeight: 'Bold'
    })

    assert(slide.getters.getCurrentSlideTitle(state), titleStateAfterMutation)
    assert(state.isCurrentSlideDirty, true)
  })

  it('SET_TITLE_CONTENT', () => {
    assert(state.currentSlide.title.content, '')
    assert(state.isCurrentSlideDirty, false)

    slide.mutations[CURRENT_SLIDE.SET_TITLE_CONTENT](state, 'title')

    assert(slide.getters.getCurrentSlideTitleContent(state), 'title')
    assert(state.isCurrentSlideDirty, true)
  })

  it('SET_TITLE_FONT_COLOR', () => {
    assert(state.currentSlide.title.fontColor, null)
    assert(state.isCurrentSlideDirty, false)

    slide.mutations[CURRENT_SLIDE.SET_TITLE_FONT_COLOR](state, 'Red')

    assert(slide.getters.getCurrentSlideTitleFontColor(state), 'Red')
    assert(state.isCurrentSlideDirty, true)
  })

  it('SET_TITLE_FONT_SIZE', () => {
    assert(state.currentSlide.title.fontSize, null)
    assert(state.isCurrentSlideDirty, false)

    slide.mutations[CURRENT_SLIDE.SET_TITLE_FONT_SIZE](state, 'Large')

    assert(slide.getters.getCurrentSlideTitleFontSize(state), 'Large')
    assert(state.isCurrentSlideDirty, true)
  })

  it('SET_TITLE_FONT_STYLE', () => {
    assert(state.currentSlide.title.fontStyle, null)
    assert(state.isCurrentSlideDirty, false)

    slide.mutations[CURRENT_SLIDE.SET_TITLE_FONT_STYLE](state, 'Normal')

    assert(slide.getters.getCurrentSlideTitleFontStyle(state), 'Normal')
    assert(state.isCurrentSlideDirty, true)
  })

  it('SET_TITLE_FONT_WEIGHT', () => {
    assert(state.currentSlide.title.fontWeight, null)
    assert(state.isCurrentSlideDirty, false)

    slide.mutations[CURRENT_SLIDE.SET_TITLE_FONT_WEIGHT](state, 'Bold')

    assert(slide.getters.getCurrentSlideTitleFontWeight(state), 'Bold')
    assert(state.isCurrentSlideDirty, true)
  })
})
