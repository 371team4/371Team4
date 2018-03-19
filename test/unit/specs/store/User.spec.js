import user from '@/store/modules/user/index'
// import * as CURRENT_USER from '@/store/mutation-types'

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

describe('', () => {
  it('signIn', done => {
    testAction(user.actions.signIn, [ { username: 'na', password: 'pass' } ], {}, [
      // mutation should been called in order from first to last
      { type: 'SET_LOADING', payload: { loading: true } },
      { type: 'SET_TOKEN', payload: 'as4' },
      { type: 'SET_LOADING', payload: false },
      { type: 'SET_USER', payload: { id: 123, name: 'na' } }
    ], done)
  })
})

// actions have not been tested

// const refreshState = () => {
//   return {
//     token: '',
//     _id: '',
//     username: ''
//   }
// }

// const assert = (s, val) => { expect(s).to.deep.equal(val) }

// describe('user', () => {
//   // TEST GETTERS
//   describe('getters', () => {
//   })

//   describe('mutations', () => {
//     let state

//     beforeEach(() => {
//       state = refreshState()
//     })

//     it('SET_TOKEN', () => {
//       const tokenBeforeMutation = ''

//       const tokenAfterMutation = 'a34f'
//       assert(state.token, tokenBeforeMutation)

//       user.mutations[CURRENT_USER.SET_TOKEN](state, tokenAfterMutation)

//       assert(state.token, tokenAfterMutation)
//     })

//     it('SET_USER', () => {
//       const userBeforeMutation = ''

//       const userAfterMutation = 'a34f'
//       assert(state.token, userBeforeMutation)

//       user.mutations[CURRENT_USER.SET_TOKEN](state, userAfterMutation)

//       assert(state.token, userAfterMutation)
//     })
//   })

//   describe.only('actions', () => {
//     let state

//     beforeEach(() => {
//       state = refreshState()
//     })

//     it('signIn', () => {
//       assert(state.token, userBeforeMutation)

//     })
//   })
// })
