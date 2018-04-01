import login from '@/store/modules/login'
import { server } from '@/services/api.endpoint'

// helper for testing action with expected mutations
const testAction = (action, args, state, expectedMutations, done) => {
  let count = 0

  // mock commit
  const commit = (type, payload) => {
    const mutation = expectedMutations[count]

    try {
      expect(mutation.type).to.equal(type)
      if (payload) {
        if (typeof payload === 'object') {
          expect(mutation.payload).to.deep.equal(payload.username)
        } else {
          expect(mutation.payload).to.deep.equal(payload)
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

describe('login, this suite is order dependenant', () => {
  describe('actions', () => {
    // initial users in /src/config/seed.js must stay the same
    it('signIn', done => {
      testAction(login.actions.signIn, [ { username: 'test', password: 'admin001' } ], {}, [
      // mutation should been called in order from first to last
        { type: 'SET_USER', payload: 'test' }
      ], done)
    })

    it('shoud have a token with each request after signIn', () => {
      expect(server.defaults.headers['x-access-token']).to.not.equal('')
    })

    it('signOut', done => {
      testAction(login.actions.signOut, [], {}, [
      // mutation should been called in order from first to last
        { type: 'SET_USER', payload: {} }
      ], done)
    })

    it('shoud not have a token after signOut', () => {
      expect(server.defaults.headers).to.not.contain.key('x-access-token')
    })
  })
})
