import axios from 'axios'
import util from 'util'

const server = 'https://cmpt371g4.usask.ca:8443'

// mutation types
const SET_IMAGE_ID = 'SET_IMAGE_ID'
const SET_IMAGE_PATH = 'SET_IMAGE_PATH'

// state of this module
const state = {
  currentImageId: '',
  currentImagePath: ''
}

// getters for this module's state
const getters = {
  getCurrentImageId: state => state.currentImageId,
  getCurrentImagePath: state => state.currentImagePath
}

// mutations of this module, mutation must be sync and atomic
const mutations = {
  // takes a slide object as payload, sets current slide to it.
  [SET_IMAGE_ID] (state, payload) {
    state.currentImageId = payload
  },
  [SET_IMAGE_PATH] (state, payload) {
    state.currentImagePath = payload
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
        })
        .catch(function (err) {
          console.log(util.inspect(err,false,null))
          reject(err)
          state.commit(SET_IMAGE_ID, '')
        })
    })
  },
  uploadImage (state, payload) {
    state.commit(SET_IMAGE_ID, 'new Image')
    return new Promise((resolve, reject) => {
      var formData = new FormData()
      formData.append('image', payload)
      formData.append('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpYXQiOjE1MjEzNTM2NzEsImV4cCI6MTUyMTM1NzI3MX0.vmovhluY9vLB74uyvJye8LoXWkRz0aR1J-5bFrQpJqw')
      // var token = this.$store.getters.token
      // formData.append('token', token)
      axios.put(server + '/api/images', formData)
        .then(function (responce) {
          resolve(responce.data)
          state.commit(SET_IMAGE_ID, responce.data._id)
        })
        .catch(function (err) {
          console.log(util.inspect(err,false,null))
          reject(err)
          state.commit(SET_IMAGE_ID, '')
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
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QiLCJpYXQiOjE1MjEzNDU4MTMsImV4cCI6MTUyMTM0OTQxM30.St-FtQEA5XcR5WeoP5JfDC-72Id1Wd9zTon3VodjS7Y'
        }
      })
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
