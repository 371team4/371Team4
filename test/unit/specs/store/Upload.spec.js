import index from '@/store/modules/upload/index'

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

// create a mock file for test upload
const str = 'these are the content of this file. It should be a base64 string but will do that later'
const f = new File([str], 'filename')

describe('index', () => {
  it('uploadSingleFile', done => {
    testAction(index.actions.uploadSingleFile, [f], {}, [
      // mutation should been called in order from first to last
      { type: 'SET_IS_UPLOADING', payload: true },
      { type: 'SET_BYTES_UPLOADED', payload: 0 },
      { type: 'SET_BYTES_REMAINING', payload: str.length },
      { type: 'SET_BYTES_UPLOADED', payload: 0 },
      { type: 'SET_BYTES_REMAINING', payload: str.length },
      { type: 'SET_BYTES_UPLOADED', payload: str.length },
      { type: 'SET_BYTES_REMAINING', payload: 0 },
      { type: 'SET_IS_UPLOADING', payload: false },
      { type: 'SET_BYTES_UPLOADED', payload: 0 },
      { type: 'SET_BYTES_REMAINING', payload: 0 },
      { type: 'SET_CANCEL_UPLOAD', payload: false }
    ], done)
  })
})

// Unit test for cancelUpload
describe('index', () => {
  it('should cancel an Upload', done => {
    testAction(index.actions.cancelUpload, [true], {}, [
      { type: 'SET_CANCEL_UPLOAD', payload: true }
    ], done)
  })
})

// Unit test for cancelUpload fail
describe('index', () => {
  it('should not cancel an Upload. Cancel upload failed', done => {
    testAction(index.actions.cancelUpload, [false], {}, [
      { type: 'SET_CANCEL_UPLOAD', payload: false }
    ], done)
  })
})
