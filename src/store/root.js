import { SET_LOADING, SET_SNACKBAR_BUTTON, SET_SNACKBAR_HANDLER, SET_SNACKBAR_STATUS, SET_SNACKBAR_MESSAGE, SET_SNACKBAR_TIMEOUT } from './mutation-types'

// state of this module
const state = {
  isLoading: false,
  snackbarMessage: '',
  snackbarStatus: false,
  snackbarTimeout: 10000,
  snackbarButton: 'close',
  snackbarHandler: null
}

// getters for this module's state
const getters = {
  isLoading: state => state.isLoading,
  snackbarMessage: state => state.snackbarMessage,
  snackbarStatus: state => state.snackbarStatus,
  snackbarTimeout: state => state.snackbarTimeout,
  snackbarButton: state => state.snackbarButton,
  snackbarHandler: state => state.snackbarHandler
}

// mutations of this module, mutation must be sync and atomic
const mutations = {
  [SET_LOADING] (state, payload) {
    state.isLoading = payload.isLoading
  },
  [SET_SNACKBAR_MESSAGE] (state, payload) {
    state.snackbarMessage = payload
  },
  [SET_SNACKBAR_STATUS] (state, payload) {
    state.snackbarStatus = payload
  },
  [SET_SNACKBAR_TIMEOUT] (state, payload) {
    state.snackbarTimeout = payload
  },
  [SET_SNACKBAR_BUTTON] (state, payload) {
    state.snackbarButton = payload
  },
  [SET_SNACKBAR_HANDLER] (state, payload) {
    if (state.snackbarHandler && state.snackbarHandler instanceof Number) {
      clearTimeout(state.snackbarHandler)
    }
    state.snackbarHandler = payload
  }
}

// actions can be async and may have side effects
const actions = { }

// export everything as default
export default {
  state,
  getters,
  actions,
  mutations
}
