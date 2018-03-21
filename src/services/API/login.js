import server from '@/services/api.endpoint'
import { SET_USERNAME, SET_TOKEN, SET_LOADING } from '@/store/mutation-types'

function signInRequest ({ commit }, payload) {
  commit(SET_LOADING, { loading: true })

  return new Promise((resolve, reject) => {
    server.post('/api/login', payload)
      .then(function (response) {
        commit(SET_TOKEN, response.token)
        commit(SET_LOADING, { loading: false })
        commit(SET_USERNAME, response.username)
      })
      .catch(function (err) {
        reject(err)
        commit(SET_LOADING, { loading: false })
        console.log(err)
      })
  })
}

function signOutRequest ({ commit }) {
  commit(SET_TOKEN, '')
  alert('logged out')
}
