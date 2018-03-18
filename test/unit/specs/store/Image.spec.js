import index from '@/store/modules/image/index'
import Mock from 'mockjs'

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

const sampleImage = Mock.Random.image()

describe.only('index', () => {
  it('uploadImage', done => {
    testAction(index.actions.uploadImage, [sampleImage], {}, [
      // mutation should been called in order from first to last
      { type: 'SET_IMAGE_ID', payload: 'new Image' },
      { type: 'SET_IMAGE_ID', payload: '' }
    ], done)
  })
})

describe.only('index', () => {
  it('getImage', done => {
    testAction(index.actions.getImage, ['5a98ada216608d51864ef43c'], {}, [
      { type: 'SET_IMAGE_ID', payload: '5a98ada216608d51864ef43c' },
      { type: 'SET_IMAGE_PATH', payload: '/images/google.jpg' }
    ], done)
  })
})



