// mutation types

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
