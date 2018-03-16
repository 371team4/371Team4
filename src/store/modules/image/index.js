import axios from 'axios'

const server = 'https://cmpt371g4.usask.ca:8443'

// mutation types
const SET_IMAGE_ID = 'SET_IMAGE_ID'

// state of this module
const state = {
  currentImageId: ''
}

// getters for this module's state
const getters = {
  getCurrentImage: state => state.currentImageId
}

// mutations of this module, mutation must be sync and atomic
const mutations = {
  // takes a slide object as payload, sets current slide to it.
  [SET_IMAGE_ID] (state, payload) {
    state.currentImageId = payload
  }
}

const actions = {
  getImage (state, payload) {
    state.commit(SET_IMAGE_ID, payload)
    return new Promise((resolve, reject) => {
      axios.get(server + '/api/images/' + payload)
        .then(function (responce) {
          resolve(server + responce.path)
          state.commit(SET_IMAGE_ID, '')
        })
        .catch(function (err) {
          reject(err)
          state.commit(SET_IMAGE_ID, '')
        })
    })
  },
  uploadImage (state, payload) {
    state.commit(SET_IMAGE_ID, 'new Image')
    return new Promise((resolve, reject) => {
      var formData = new FormData()
      formData.append('image', payload)
      formData.append('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpYXQiOjE1MjExNjM1MTEsImV4cCI6MTUyMTE2NzExMX0.Z64815D6pH1iDPjDIuzloxMNKwrEM0tyzUUfDhCJdqQ')
      axios.put(server + '/api/images', formData)
        .then(function (responce) {
          resolve(responce.data)
          state.commit(SET_IMAGE_ID, '')
        })
        .catch(function (err) {
          console.log('request fail')
          reject(err)
          state.commit(SET_IMAGE_ID, '')
        })
    })
  },
  deleteImage (state, payload) {
    state.commit(SET_IMAGE_ID, payload)
    return new Promise((resolve, reject) => {
      axios.delete(server + '/api/images/' + payload, {
        data:
        {
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpYXQiOjE1MjExNjM1MTEsImV4cCI6MTUyMTE2NzExMX0.Z64815D6pH1iDPjDIuzloxMNKwrEM0tyzUUfDhCJdqQ'
        }
      })
        .then(function (responce) {
          resolve()
          state.commit(SET_IMAGE_ID, '')
        })
        .catch(function (err) {
          reject(err)
          state.commit(SET_IMAGE_ID, '')
        })
    })
  }
}

// export everything as default
export default {
  state,
  getters,
  actions,
  mutations
}
