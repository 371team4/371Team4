// mutation types
const SET_LOADING = 'SET_LOADING'

// state of this module
const state = {
  loading: false
}

// getters for this module's state
const getters = {
  isLoading (state) {
    return state.loading
  }
}

// mutations of this module, mutation must be sync and atomic
const mutations = {
  [SET_LOADING] (state, payload) {
    state.loading = payload.loading
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
