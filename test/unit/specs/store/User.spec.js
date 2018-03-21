import { store } from '@/store'

describe('user', () => {
  it('getAllUsers', () => {
    expect(store.state.user.users).to.be.deep.equal([])
    store.dispatch('signIn', { username: 'test', password: 'admin001' })
    expect(store.state.users).to.be.not.equal([])
  })
})
