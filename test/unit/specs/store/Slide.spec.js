import index from '@/store/modules/slide/index'

// const emptySlide = {
//   // the title of the slide, what it is called by humans, has text, font information and color.
//   title: { content: '', fontColor: null, fontSize: null, fontStyle: null, fontWeight: null },
//   // similar to title, but generally larger text content.
//   description: { content: '', fontColor: null, fontSize: null, fontStyle: null, fontWeight: null },
//   // image array of image files (or link to image files?) to be displayed in the slide
//   images: [],
//   // the date of the slides event, has similar font info as title/description, content is date object
//   date: { content: null, fontColor: null, fontSize: null, fontStyle: null, fontWeight: null },
//   // the time of the event, same as date but time object instead of date object
//   time: { content: null, fontColor: null, fontSize: null, fontStyle: null, fontWeight: null },

//   meta: { template: null, timeout: '', repeatable: false, startDate: '', endDate: '' }
// }

const mockSlide = [
  {
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
      content: 'SlideAPIUnitTest1',
      fontColor: 'Blue',
      fontSize: 'Large',
      fontStyle: 'Normal',
      fontWeight: 'Bold'
    },
    description: {
      content: 'This is just for Slide API unit test',
      fontColor: 'Blue',
      fontSize: 'Large',
      fontStyle: 'Normal',
      fontWeight: 'Bold'
    },
    date: {
      content: '2018-03-21',
      fontColor: 'Red',
      fontSize: 'Large',
      fontStyle: 'Normal',
      fontWeight: 'Bold'
    },
    time: {
      content: '11:40',
      fontColor: 'Red',
      fontSize: 'Large',
      fontStyle: 'Normal',
      fontWeight: 'Bold'
    },
    meta: {
      template: 'DefaultSlideTemplate',
      timeout: '40',
      repeatable: false,
      startDate: '2018-03-21',
      endDate: '2018-03-30'
    }
  }
]

// helper for testing action with expected mutations
const testAction = (action, args, state, expectedMutations, done) => {
  let count = 0

  // mock commit
  const commit = (type, payload) => {
    const mutation = expectedMutations[count]

    try {
      expect(mutation.type).to.equal(type)
      if (payload) {
        expect(mutation.payload).to.deep.equal(payload)
      }
    } catch (error) {
      done(error)
    }

    count++
    if (count >= expectedMutations.length) {
      done()
    }
  }

  // call the action with mocked store and argument
  action({ commit, state }, ...args)

  // Check if no mutation should have been dispatched
  if (expectedMutations.length === 0) {
    expect(count).to.equal(0)
    done()
  }
}

// const slideID = '5aaeb4523cc35925c0bd615f'

describe('index', function () {
  it('should getAllSLides', done => {
    expect(index.state.allSlides).to.be.deep.equal([])
    testAction(index.actions.initAllSlides, {}, {}, [], done)
    expect(index.state.allSlides).to.be.not.equal([])
  })
})

describe('index', function () {
  it('should saveSlide', done => {
    testAction(index.actions.saveSlide(), {}, { mockSlide }, [], done)
  })
})

// describe('index', function () {
//   it('should getSlide', done => {
//     expect(index.state.currentSlide).to.be.deep.equal(emptySlide)
//     testAction(index.actions.initSlide(), [{ mockSlide }], {}, [], done)
//     expect(index.state.currentSlide).to.be.not.equal(emptySlide)
//   })
// })
