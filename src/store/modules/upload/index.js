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
  /*
  // function to upload multiple file, should be able to work but hard to test
  uploadFiles ({ commit, dispatch }, files) {
    // console.log(files)
    var filesCopy = files.slice()
    for (var i = 0; i < filesCopy.length; i++) {
      // push all file to file queue
      commit(PUSH_UPLOAD_QUEUE, filesCopy[i]['name'])
    }
    for (var j = 0; j < filesCopy.length; j++) {
      // get last file in queue
      var k = filesCopy.length - j - 1
      // pop file
      commit(POP_UPLOAD_QUEUE)
      // set state to is uploading
      commit(SET_IS_UPLOADING, true)
      // set byte state to start status
      commit(SET_BYTES_UPLOADED, 0)
      commit(SET_BYTES_REMAINING, filesCopy[k]['size'])
      // upload file with api
      var upload = storageDB.child('files/' + filesCopy[k]['name']).put(filesCopy[k])
      // check file upload status
      upload.on(firebase.storage.TaskEvent.STATE_CHANGED, function (snapshot) {
        // set byte state during upload
        // these commit`s order and # of time occur is unpredicable
        commit(SET_BYTES_UPLOADED, snapshot.bytesTransferred)
        commit(SET_BYTES_REMAINING, snapshot.totalBytes - snapshot.bytesTransferred)
      }, function (error) {
        // upload fail
        alert(error.code)
        // reset uploading state
        commit(SET_IS_UPLOADING, false)
      }, function () {
        // upload success
        alert('upload success')
        // reset upload state
        commit(SET_IS_UPLOADING, false)
        // store it to event so load event directly use this url not use download api
        // console.log(upload.snapshot.downloadURL)
        // push file to finish queue
        commit(APPEND_FILES_UPLOADED, filesCopy[k]['name'])
      })
    }
  },
  */
 // action to cancel upload
  cancelUploadFile (context, payload) {
    context.commit(SET_CANCEL_UPLOAD, true)
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
