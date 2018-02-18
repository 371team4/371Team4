import index from '../../../../src/store/modules/upload/index'

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

  // call action with mock commit and args
  action({ commit, state }, ...args)

  // check if mutation is dispatched
  if (expectedMutations.length === 0) {
    expect(count).to.equal(0)
    done()
  }
}

// create a mock file for test upload
let f = new File(['these are the content of this file. It should be a base64 string but will do that later'], 'filename')

describe('index', () => {
  it('uploadSingleFile', done => {
    testAction(index.actions.uploadSingleFile, [f], {}, [
      // mutation should been called in order from first to last
      { type: 'SET_IS_UPLOADING', payload: true },
      { type: 'SET_BYTES_UPLOADED', payload: 0 },
      { type: 'SET_BYTES_REMAINING', payload: 87 },
      { type: 'SET_BYTES_UPLOADED', payload: 0 },
      { type: 'SET_BYTES_REMAINING', payload: 87 },
      { type: 'SET_BYTES_UPLOADED', payload: 87 },
      { type: 'SET_BYTES_REMAINING', payload: 0 },
      { type: 'SET_IS_UPLOADING', payload: false },
      { type: 'SET_BYTES_UPLOADED', payload: 0 },
      { type: 'SET_BYTES_REMAINING', payload: 0 },
      { type: 'SET_CANCEL_UPLOAD', payload: false }
    ], done)
  })
})
