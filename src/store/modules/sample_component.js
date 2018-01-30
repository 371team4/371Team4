import { firebaseAction } from 'vuexfire'

const state = {
  PageItems: []
}

const getters = {
  getMenuItems: state =>  state.menuItems
}

const mutations = {

}

const actions = {
  setMenuRef: firebaseAction(({ bindFirebaseRef }, { ref }) => {
    bindFirebaseRef('simplePageItems', ref)
  })
}

export default {
  state,
  mutations,
  getters,
  actions
}