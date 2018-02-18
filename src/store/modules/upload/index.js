import { storageDB } from '@/services/firebase.conf'
import Firebase from 'firebase'

// mutation types
const SET_BYTES_UPLOADED = 'SET_BYTES_UPLOADED'
const SET_BYTES_REMAINING = 'SET_BYTES_REMAINING'
const SET_IS_UPLOADING = 'SET_IS_UPLOADING'
const SET_CANCEL_UPLOAD = 'SET_CANCEL_UPLOAD'

// state of this module
const state = {
  isUploading: false,
  bytesUploaded: 0,
  bytesRemaining: 0,
  cancelUpload: false
}

// getters for this module's state
const getters = {
  getIsUploading: state => state.isUploading,
  getBytesUploaded: state => state.bytesUploaded,
  getBytesRemaining: state => state.bytesRemaining,
  getCancelUpload: state => state.cancelUpload
}

// mutations of this module, mutation must be sync and atomic
const mutations = {
  [SET_BYTES_UPLOADED] (state, payload) {
    state.bytesUploaded = payload
  },
  [SET_BYTES_REMAINING] (state, payload) {
    state.bytesRemaining = payload
  },
  [SET_IS_UPLOADING] (state, payload) {
    state.isUploading = payload
  },
  [SET_CANCEL_UPLOAD] (state, payload) {
    state.cancelUpload = payload
  }
}

// actions can be async and may have side effects
const actions = {
  // action to upload file
  uploadSingleFile (context, file) {
    // pre-set upload status
    context.commit(SET_IS_UPLOADING, true)
    context.commit(SET_BYTES_UPLOADED, 0)
    context.commit(SET_BYTES_REMAINING, file.size)
    // start upload
    var upload = storageDB.child('files/' + file.name).put(file)
    upload.on(Firebase.storage.TaskEvent.STATE_CHANGED, function (snapshot) {
      // update upload status
      context.commit(SET_BYTES_UPLOADED, snapshot.bytesTransferred)
      context.commit(SET_BYTES_REMAINING, snapshot.totalBytes - snapshot.bytesTransferred)
    }, function (error) {
      // if upload error
      alert(error.code)
      context.commit(SET_IS_UPLOADING, false)
      context.commit(SET_BYTES_UPLOADED, 0)
      context.commit(SET_BYTES_REMAINING, 0)
      context.commit(SET_CANCEL_UPLOAD, false)
    }, function () {
      // if upload success
      alert('upload success')
      context.commit(SET_IS_UPLOADING, false)
      context.commit(SET_BYTES_UPLOADED, 0)
      context.commit(SET_BYTES_REMAINING, 0)
      context.commit(SET_CANCEL_UPLOAD, false)
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
