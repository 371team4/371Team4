import util from 'util'

import * as API from '@/services/API/images'
import { SET_LOADING } from '@/store/mutation-types'

// state of this module
const state = { }

// getters for this module's state
const getters = { }

// mutations of this module, mutation must be sync and atomic
const mutations = { }

// actions of this module, actions is async and may have side effects
const actions = {
  // action for get Imgae
  retrieveImage ({ commit }, payload) {
    commit(SET_LOADING, true)
    return new Promise((resolve, reject) => {
      API.getImage(payload).then(function (response) {
        resolve(response.data)
        commit(SET_LOADING, false)
      }).catch(function (err) {
        console.error('get image error: '.concat(util.inspect(err, false, null)))
        reject(err)
        commit(SET_LOADING, false)
      })
    })
  },
  // action fro upload image
  uploadImage ({ commit }, payload) {
    commit(SET_LOADING, true)
    return new Promise((resolve, reject) => {
      API.uploadImage(payload).then(function (response) {
        resolve(response.data)
        commit(SET_LOADING, false)
      }).catch(function (err) {
        console.error('upload image error: '.concat(util.inspect(err, false, null)))
        reject(err)
        commit(SET_LOADING, false)
      })
    })
  },
  // action for delete image
  deleteImage ({ commit }, payload) {
    commit(SET_LOADING, true)
    return new Promise((resolve, reject) => {
      API.deleteImage(payload).then(function (response) {
        resolve(response.data)
        commit(SET_LOADING, false)
      }).catch(function (err) {
        console.error('delete image error: '.concat(util.inspect(err, false, null)))
        reject(err)
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
