import axios from 'axios'
// import { SET_USERNAME, SET_TOKEN } from '@/store/mutation-types'

const server = 'http://cmpt371g4.usask.ca:8081'

// state of this module
const state = {
  token: '',
  _id: '',
  username: ''
}

// getters for this module's state
const getters = {
  user (state) {
    return state.user
  }
}

// mutations of this module, mutation must be sync and atomic
const mutations = {

}

// actions can be async and may have side effects
const actions = {
  // payload is username and password
  createUser (payload) {
    return new Promise((resolve, reject) => {
      axios.post(server + '/api/user/', payload)
        .then(function (responce) {
        })
        .catch(function (err) {
          reject(err)
          console.log(err)
        })
    })
  },
  // payload is password
  updateUser (payload) {
    const id = state._id

    if (id) {
      return new Promise((resolve, reject) => {
        axios.post(server + '/api/user/:' + id, payload)
          .then(function (responce) {
          })
          .catch(function (err) {
            reject(err)
            console.log(err)
          })
      })
    }
  },
  deleteUser (payload) {
    const id = state._id

    if (id) {
      return new Promise((resolve, reject) => {
        axios.delete(server + '/api/user/:' + id)
          .then(function (responce) {
          })
          .catch(function (err) {
            reject(err)
            console.log(err)
          })
      })
    }
  }
}

// export everything as default
export default {
  state,
  getters,
  actions,
  mutations
}
