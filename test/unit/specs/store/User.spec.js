import { store } from '@/store'
import login from '@/store/modules/user/index'

describe('user', () => {
  it('getAllUsers', () => {
    expect(store.state.user.users).to.be.deep.equal([])
    store.dispatch('signIn', { username: 'test', password: 'admin001' })
    expect(store.state.users).to.be.not.equal([])
  })

  it('createUser', () => {
    login.actions.createUser({ username: 'test001', password: 'admin001', email: 'good@gooddd.com' })
  })

  it('updateUser', () => {
    login.actions.updateUser({ _id: 'afakeid', username: 'test001', password: 'admin', email: 'good@gooddd.com' })
  })

  it('deleteUser', () => {
    login.actions.deleteUser({ _id: 'afakeid', username: 'test001', password: 'admin001', email: 'good@gooddd.com' })
  })
})
