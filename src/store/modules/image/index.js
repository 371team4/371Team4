import axios from 'axios'
import util from 'util'

const server = 'http://cmpt371g4.usask.ca:8081'

// mutation types
const SET_IMAGE_ID = 'SET_IMAGE_ID'
const SET_IMAGE_PATH = 'SET_IMAGE_PATH'
const SET_TASK_STATUS = 'SET_TASK_STATUS'

// state of this module
const state = {
  currentImageId: '',
  currentImagePath: '',
  currentTaskStatus: false
}

// getters for this module's state
const getters = {
  getCurrentImageId: state => state.currentImageId,
  getCurrentImagePath: state => state.currentImagePath,
  getCurrentTaskStatus: state => state.currentTaskStatus
}

// mutations of this module, mutation must be sync and atomic
const mutations = {
  // takes a slide object as payload, sets current slide to it.
  [SET_IMAGE_ID] (state, payload) {
    state.currentImageId = payload
  },
  [SET_IMAGE_PATH] (state, payload) {
    state.currentImagePath = payload
  },
  [SET_TASK_STATUS] (state, payload) {
    state.currentTaskStatus = payload
  }
}

const actions = {
  getImage (state, payload) {
    state.commit(SET_IMAGE_ID, payload)
    return new Promise((resolve, reject) => {
      axios.get(server + '/api/images/' + payload)
        .then(function (responce) {
          resolve(server + responce.data.path)
          state.commit(SET_IMAGE_PATH, responce.data.path)
          state.commit(SET_IMAGE_ID, '')
          state.commit(SET_TASK_STATUS, true)
        })
        .catch(function (err) {
          console.log(util.inspect(err, false, null))
          reject(err)
          state.commit(SET_IMAGE_ID, '')
          state.commit(SET_TASK_STATUS, false)
        })
    })
  },
  uploadImage (state, payload) {
    state.commit(SET_IMAGE_ID, 'new Image')
    return new Promise((resolve, reject) => {
      console.log(util.inspect(payload, false, null))
      var formData = new FormData()
      formData.append('image', payload)
      formData.append('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpYXQiOjE1MjE0MTQ1NDEsImV4cCI6MTUyMTQxODE0MX0.dXWzmMs_Mdv8Y2wQOF5o22STdlRDJu1KUkWWArfNDek')
      // var token = this.$store.getters.token
      // formData.append('token', token)
      axios.put(server + '/api/images', formData)
        .then(function (responce) {
          resolve(responce.data)
          state.commit(SET_IMAGE_ID, responce.data._id)
          state.commit(SET_TASK_STATUS, true)
        })
        .catch(function (err) {
          console.log(util.inspect(err, false, null))
          reject(err)
          state.commit(SET_IMAGE_ID, '')
          state.commit(SET_TASK_STATUS, false)
        })
    })
  },
  deleteImage (state, payload) {
    state.commit(SET_IMAGE_ID, payload)
    return new Promise((resolve, reject) => {
      axios.delete(server + '/api/images/' + payload, {
        data:
        {
          // token: this.$store.getters.token
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpYXQiOjE1MjE0MTQ1NDEsImV4cCI6MTUyMTQxODE0MX0.dXWzmMs_Mdv8Y2wQOF5o22STdlRDJu1KUkWWArfNDek'
        }
      })
        .then(function (responce) {
          resolve()
          state.commit(SET_IMAGE_ID, '')
          state.commit(SET_TASK_STATUS, true)
        })
        .catch(function (err) {
          reject(err)
          state.commit(SET_IMAGE_ID, '')
          state.commit(SET_TASK_STATUS, false)
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
