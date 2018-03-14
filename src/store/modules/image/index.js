import request from 'superagent'

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
      request.get(server + '/api/images/' + payload)
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
      request.put(server + '/api/images')
        .set('Content-Type', 'application/octet-stream')
        .send(payload)
        .then(function (responce) {
          resolve(responce._id)
          state.commit(SET_IMAGE_ID, '')
        })
        .catch(function (err) {
          reject(err)
          state.commit(SET_IMAGE_ID, '')
        })
    })
  },
  deleteImage (state, payload) {
    state.commit(SET_IMAGE_ID, payload)
    return new Promise((resolve, reject) => {
      request.delete(server + '/api/images/' + payload)
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
