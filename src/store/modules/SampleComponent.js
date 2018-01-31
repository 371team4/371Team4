import { firebaseAction } from 'vuexfire'

const state = {
  PageItems: []
}

const getters = {
  getPageItems: state => state.PageItems
}

const mutations = {

}

const actions = {
  setPageRef: firebaseAction(({ bindFirebaseRef }, { ref }) => {
    bindFirebaseRef('PageItems', ref)
  })
}

export default {
  state,
  mutations,
  getters,
  actions
}
