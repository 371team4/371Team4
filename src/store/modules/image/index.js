import util from 'util'

import * as API from '@/services/API/images'
import { server } from '@/services/api.endpoint'
import { SET_IMAGE_ID, SET_IMAGE_PATH, SET_TASK_STATUS, SET_LOADING } from '@/store/mutation-types'

// state of this module
const state = {
  currentImageId: '',
  currentImagePath: '',
  currentTaskStatus: false
}

// getters for this module's state
const getters = {
  currentImageId: state => state.currentImageId,
  currentImagePath: state => state.currentImagePath,
  currentTaskStatus: state => state.currentTaskStatus
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
  retrieveImage ({ commit }, payload) {
    commit(SET_LOADING, true)
    commit(SET_IMAGE_ID, payload)
    return new Promise((resolve, reject) => {
      API.getImage(payload).then(function (response) {
        resolve(`${server.defaults.baseURL}${response.data.path}`)
        commit(SET_IMAGE_PATH, response.data.path)
        commit(SET_IMAGE_ID, '')
        commit(SET_TASK_STATUS, true)
        commit(SET_LOADING, false)
      }).catch(function (err) {
        console.error('get image error: '.concat(util.inspect(err, false, null)))
        reject(err)
        commit(SET_IMAGE_ID, '')
        commit(SET_TASK_STATUS, false)
        commit(SET_LOADING, false)
      })
    })
  },
  // action fro upload image
  uploadImage ({ commit }, payload) {
    commit(SET_LOADING, true)
    commit(SET_IMAGE_ID, 'new Image')
    return new Promise((resolve, reject) => {
      API.uploadImage(payload).then(function (response) {
        resolve(response.data)
        commit(SET_IMAGE_ID, response.data._id)
        commit(SET_TASK_STATUS, true)
        commit(SET_LOADING, false)
      }).catch(function (err) {
        console.error('upload image error: '.concat(util.inspect(err, false, null)))
        reject(err)
        commit(SET_IMAGE_ID, '')
        commit(SET_TASK_STATUS, false)
        commit(SET_LOADING, false)
      })
    })
  },
  // action for delete image
  deleteImage ({ commit }, payload) {
    commit(SET_LOADING, true)
    commit(SET_IMAGE_ID, payload)
    return new Promise((resolve, reject) => {
      API.deleteImage(payload).then(function (response) {
        resolve()
        commit(SET_IMAGE_ID, '')
        commit(SET_TASK_STATUS, true)
        commit(SET_LOADING, false)
      }).catch(function (err) {
        console.error('delete image error: '.concat(util.inspect(err, false, null)))
        reject(err)
        commit(SET_IMAGE_ID, '')
        commit(SET_TASK_STATUS, false)
        commit(SET_LOADING, false)
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
