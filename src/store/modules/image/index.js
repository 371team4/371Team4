import { server } from '@/services/api.endpoint'
import * as API from '@/services/API/images'
import util from 'util'

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
  // takes a id string as payload, sets currentImageId to it.
  [SET_IMAGE_ID] (state, payload) {
    state.currentImageId = payload
  },
  // takes a path string as payload, sets currentImagePath to it.
  [SET_IMAGE_PATH] (state, payload) {
    state.currentImagePath = payload
  },
  // takes a boolean as payload, sets currentTaskStatus to it.
  [SET_TASK_STATUS] (state, payload) {
    state.currentTaskStatus = payload
  }
}

// actions of this module, actions is async and may have side effects
const actions = {
  // action for get Imgae
  getImage (state, payload) {
    state.commit(SET_IMAGE_ID, payload)
    return new Promise((resolve, reject) => {
      API.getImage(payload).then(function (response) {
        resolve(`${server.defaults.baseURL}${response.data.path}`)
        state.commit(SET_IMAGE_PATH, response.data.path)
        state.commit(SET_IMAGE_ID, '')
        state.commit(SET_TASK_STATUS, true)
      }).catch(function (err) {
        console.error('get image error: '.concat(util.inspect(err, false, null)))
        reject(err)
        state.commit(SET_IMAGE_ID, '')
        state.commit(SET_TASK_STATUS, false)
      })
    })
  },
  // action fro upload image
  uploadImage (state, payload) {
    state.commit(SET_IMAGE_ID, 'new Image')
    return new Promise((resolve, reject) => {
      API.uploadImage(payload).then(function (response) {
        resolve(response.data)
        state.commit(SET_IMAGE_ID, response.data._id)
        state.commit(SET_TASK_STATUS, true)
      }).catch(function (err) {
        console.error('upload image error: '.concat(util.inspect(err, false, null)))
        reject(err)
        state.commit(SET_IMAGE_ID, '')
        state.commit(SET_TASK_STATUS, false)
      })
    })
  },
  // action for delete image
  deleteImage (state, payload) {
    state.commit(SET_IMAGE_ID, payload)
    return new Promise((resolve, reject) => {
      API.deleteImage(payload).then(function (response) {
        resolve()
        state.commit(SET_IMAGE_ID, '')
        state.commit(SET_TASK_STATUS, true)
      }).catch(function (err) {
        console.error('delete image error: '.concat(util.inspect(err, false, null)))
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
