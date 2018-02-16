import { storageDB } from '@/services/firebase.conf'
import Firebase from 'firebase'

// mutation types
const SET_BYTES_UPLOADED = 'SET_BYTES_UPLOADED'
const SET_BYTES_REMAINING = 'SET_BYTES_REMAINING'
const SET_IS_UPLOADING = 'SET_IS_UPLOADING'
const SET_CANCEL_UPLOAD = 'SET_CANCEL_UPLOAD'

// state of this module
const state = {
  cancelUpload: false,
  isUploading: false,
  bytesUploaded: 0,
  bytesRemaining: 0
}

// getters for this module's state
const getters = {
  getCancelUpload: state => state.cancelUpload,
  getIsUploading: state => state.isUploading,
  getBytesUploaded: state => state.bytesUploaded,
  getBytesRemaining: state => state.bytesRemaining
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
  // cancel upload action
  cancelUpload (state, payload) {
    state.commit(SET_CANCEL_UPLOAD, payload)
  },
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
      // check if user cancel upload
      if (context.state.cancelUpload) {
        alert('upload canceled')
        upload.cancel()
        context.commit(SET_IS_UPLOADING, false)
        context.commit(SET_BYTES_UPLOADED, 0)
        context.commit(SET_BYTES_REMAINING, 0)
        context.commit(SET_CANCEL_UPLOAD, false)
      }
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
      // store it to event so load event directly use this url not use download api
      // console.log(upload.snapshot.downloadURL)
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
