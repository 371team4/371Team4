import index from '@/store/modules/image'
import { setToken } from '@/services/api.endpoint'
import * as loginAPI from '@/services/API/login'

// helper for testing action with expected mutations
const testAction = (action, args, state, expectedMutations, done) => {
  let count = 0

  // mock commit
  const commit = (type, payload) => {
    const mutation = expectedMutations[count]

    try {
      expect(mutation.type).to.equal(type)
      if (payload) {
        // else is a special case for set sampleImageID to new uploaded id and used when deleteImage
        if (mutation.payload !== 'new') {
          expect(mutation.payload).to.deep.equal(payload)
        } else {
          sampleImageID = payload
        }
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

// mock image
var sampleImage

// uploaded mock image id
var sampleImageID

describe('Image APIs', function () {
  this.timeout(15000)
  before(done => {
    // create mock image
    var b64 = ['data:image/png;base64,nothing crazy here']
    sampleImage = new Blob(b64, { type: 'image/png' })
    // ask for login to get token
    loginAPI.signIn('test', 'admin001')
      .then(async (response) => {
        await setToken(response.data.token)
        done()
      })
  })

  // test retrieveImage
  describe('index', () => {
    it('retrieveImage', done => {
      testAction(index.actions.retrieveImage, ['5a98ada216608d51864ef43c'], {}, [
        { type: 'SET_IMAGE_ID', payload: '5a98ada216608d51864ef43c' },
        { type: 'SET_IMAGE_PATH', payload: '/images/google.jpg' },
        { type: 'SET_IMAGE_ID', payload: '' },
        { type: 'SET_TASK_STATUS', payload: true }
      ], done)
    })
  })

  // test uploadImage
  describe('index', () => {
    it('uploadImage', done => {
      testAction(index.actions.uploadImage, [sampleImage], {}, [
        { type: 'SET_IMAGE_ID', payload: 'new Image' },
        { type: 'SET_IMAGE_ID', payload: 'new' },
        { type: 'SET_TASK_STATUS', payload: true }
      ], done)
    })
  })

  // test deleteImage
  describe('index', () => {
    it('deleteImage', done => {
      testAction(index.actions.deleteImage, [sampleImageID], {}, [
        { type: 'SET_IMAGE_ID', payload: sampleImageID },
        { type: 'SET_IMAGE_ID', payload: '' },
        { type: 'SET_TASK_STATUS', payload: true }
      ], done)
    })
  })
})
