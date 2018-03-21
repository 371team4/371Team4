import { storageDB } from '@/services/firebase.conf'
import Firebase from 'firebase'

// mutation types
const SET_BYTES_UPLOADED = 'SET_BYTES_UPLOADED'
const SET_BYTES_REMAINING = 'SET_BYTES_REMAINING'
const SET_IS_UPLOADING = 'SET_IS_UPLOADING'
const SET_CANCEL_UPLOAD = 'SET_CANCEL_UPLOAD'
const SET_UPLOAD_TASK = 'SET_UPLOAD_TASK'

// state of this module
const state = {
  uploadTask: '',
  isUploading: false,
  bytesUploaded: 0,
  bytesRemaining: 0,
  cancelUpload: false
}

// getters for this module's state
const getters = {
  getUploadTask: state => state.uploadTask,
  getIsUploading: state => state.isUploading,
  getBytesUploaded: state => state.bytesUploaded,
  getBytesRemaining: state => state.bytesRemaining,
  getCancelUpload: state => state.cancelUpload
}

// mutations of this module, mutation must be sync and atomic
const mutations = {
  [SET_UPLOAD_TASK] (state, payload) {
    state.uploadTask = payload
  },
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
    if (file) {
      return new Promise((resolve, reject) => {
      // pre-set upload status
        context.commit(SET_IS_UPLOADING, true)
        context.commit(SET_BYTES_UPLOADED, 0)
        context.commit(SET_BYTES_REMAINING, file.size)
        // start upload
        const upload = storageDB.child('files/' + file.name).put(file)

        upload.on(Firebase.storage.TaskEvent.STATE_CHANGED, function (snapshot) {
        // update upload status
          context.commit(SET_BYTES_UPLOADED, snapshot.bytesTransferred)
          context.commit(SET_BYTES_REMAINING, snapshot.totalBytes - snapshot.bytesTransferred)
          // check if user cancel upload
          if (context.state.cancelUpload) {
            upload.cancel()
            context.commit(SET_IS_UPLOADING, false)
            context.commit(SET_BYTES_UPLOADED, 0)
            context.commit(SET_BYTES_REMAINING, 0)
            context.commit(SET_CANCEL_UPLOAD, false)
            resolve()
          }
        }, function (error) {
        // if upload error
          console.log(error.code)
          context.commit(SET_IS_UPLOADING, false)
          context.commit(SET_BYTES_UPLOADED, 0)
          context.commit(SET_BYTES_REMAINING, 0)
          context.commit(SET_CANCEL_UPLOAD, false)
          reject(error)
        }, function () {
        // if upload success
          context.commit(SET_IS_UPLOADING, false)
          context.commit(SET_BYTES_UPLOADED, 0)
          context.commit(SET_BYTES_REMAINING, 0)
          context.commit(SET_CANCEL_UPLOAD, false)
          context.commit(SET_UPLOAD_TASK, upload.snapshot.downloadURL)
          resolve()
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
