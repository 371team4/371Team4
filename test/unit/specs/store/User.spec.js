import user from '@/store/modules/user/index'
import * as CURRENT_USER from '@/store/mutation-types'

// helper for testing action with expected mutations
const testAction = (action, args, state, expectedMutations, done) => {
  let count = 0

  // mock commit
  const commit = (type, payload) => {
    const mutation = expectedMutations[count]

    // need extra case for SET_TOKEN since cannot know token beforehand and must get it from state after set by another
    if (mutation.type === CURRENT_USER.SET_TOKEN) {
      try {
        expect(mutation.type).to.equal(type)
        expect(mutation.payload.token).to.not.equal('')
      } catch (error) {
        done(error)
      }
    } else {
      try {
        expect(mutation.type).to.equal(type)
        if (payload) {
          expect(mutation.payload).to.deep.equal(payload)
        }
      } catch (error) {
        done(error)
      }
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

describe('', () => {
  // initial users in /src/config/seed.js must stay the same
  it('signIn', done => {
    testAction(user.actions.signIn, [ { username: 'test', password: 'admin001' } ], {}, [
      // mutation should been called in order from first to last
      { type: 'SET_LOADING', payload: { loading: true } },
      { type: 'SET_TOKEN', payload: 'as4' },
      { type: 'SET_LOADING', payload: { loading: false } },
      { type: 'SET_USERNAME', payload: 'test' }
    ], done)
  })
})
