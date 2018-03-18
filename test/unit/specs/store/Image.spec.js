import index from '@/store/modules/image/index'

// helper for testing action with expected mutations
const testAction = (action, args, state, expectedMutations, done) => {
  console.log(action)
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

describe('Image APIs', function () {
  describe('index', () => {
    it('getImage', done => {
      testAction(index.actions.getImage, ['5a98ada216608d51864ef43c'], {}, [
        { type: 'SET_IMAGE_ID', payload: '5a98ada216608d51864ef43c' },
        { type: 'SET_IMAGE_PATH', payload: '/images/google.jpg' },
        { type: 'SET_IMAGE_ID', payload: '' },
        { type: 'SET_TASK_STATUS', payload: true }
      ], done)
    })
  })

  // testing on a new uploaded image, can be used once, otherwise need restore
  describe('index', () => {
    it('deleteImage', done => {
      testAction(index.actions.deleteImage, ['5aaef49c2cf54b02f0114a54'], {}, [
        { type: 'SET_IMAGE_ID', payload: '5aaef49c2cf54b02f0114a54' },
        { type: 'SET_IMAGE_ID', payload: '' },
        { type: 'SET_TASK_STATUS', payload: true }
      ], done)
    })
  })
})
