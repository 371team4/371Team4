// mutation types
const SET_BYTES_UPLOADED = 'SET_BYTES_UPLOADED'
const SET_BYTES_REMAINING = 'SET_BYTES_REMAINING'
const SET_IS_UPLOADING = 'SET_IS_UPLOADING'
const SET_CANCEL_UPLOAD = 'SET_CANCEL_UPLOAD'

// state of this module
const state = {
  cancelUpload: false
}

// getters for this module's state
const getters = {
  getCancelUpload: state => state.cancelUpload
}

// mutations of this module, mutation must be sync and atomic
const mutations = {
  [SET_BYTES_UPLOADED] (state, payload) {
    state.bytesUploaded = payload.bytesUploaded
  },
  [SET_BYTES_REMAINING] (state, payload) {
    state.bytesRemaining = payload.bytesRemaining
  },
  [SET_IS_UPLOADING] (state, payload) {
    state.isUploading = payload.isUploading
  },
  [SET_CANCEL_UPLOAD] (state, payload) {
    state.cancelUpload = payload.cancelUpload
  }
}

// actions can be async and may have side effects
const actions = {
}

// export everything as default
export default {
  state,
  getters,
  actions,
  mutations
}
