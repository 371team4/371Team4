import index from '@/store/modules/upload/index'
/* eslint-disable no-unused-vars */
const chai = require('chai')
/* eslint-enable no-unused-vars */

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

// Unit test for cancelUpload
describe('index', () => {
  it('should cancel an Upload', done => {
    testAction(index.actions.cancelUpload, [true], {}, [
      { type: 'SET_CANCEL_UPLOAD', payload: true }
    ], done)
  })
})
