import * as WeeksAPI from '@/services/API/weeks'
import { SET_LOADING, ADD_WEEK, DELETE_WEEK, UPDATE_MENU_ITEM } from '@/store/mutation-types'

/** BEGIN: PRIVATE MUTATION TYPES **/
const SET_ALL_WEEKS = 'SET_ALL_WEEKS'
const UPDATE_WEEK = 'UPDATE_WEEK'
/** END: PRIVATE MUTATION TYPES **/

// state of this module
const state = {
  weeks: []
}

// getters for this module's state
const getters = {
  weeks: state => state.weeks
}

// mutations of this module, mutation must be sync and atomic
const mutations = {
  [SET_ALL_WEEKS] (state, payload) {
    state.weeks = payload
  },
  [UPDATE_MENU_ITEM] (state, payload) {
    if (payload.weekIndex && payload.dayIndex && payload.mealName && payload.itemIndex && payload.value) {
      state.weeks[payload.weekIndex].days[payload.dayIndex].meals[payload.mealName][payload.itemIndex] = payload.value
    }
  },
  /** BEGIN: PRIVATE MUTATIONS **/
  [DELETE_WEEK] (state, payload) {
    state.weeks.splice(payload, 1)
  },
  [UPDATE_WEEK] (state, payload) {
    state.weeks[payload.index] = payload.updatedWeek
  },
  [ADD_WEEK] (state, payload) {
    state.weeks.push(payload)
  }
  /** BEGIN: PRIVATE MUTATIONS **/
}

// actions can be async and may have side effects
const actions = {
  retrieveAllWeeks ({ commit }) {
    commit(SET_LOADING, true)
    WeeksAPI
      .getAllWeeks()
      .then(response => {
        commit(SET_ALL_WEEKS, response.data)
        commit(SET_LOADING, false)
      })
      .catch(e => {
        console.log(e)
        commit(SET_LOADING, false)
      })
  },
  // payload is: a week object
  createWeek ({ commit, state }, payload) {
    commit(SET_LOADING, true)
    WeeksAPI
      .saveWeek(payload)
      .then(response => {
        commit(SET_ALL_WEEKS, [...state.weeks, response.data])
        commit(SET_LOADING, false)
      })
      .catch(e => {
        console.log(e)
        commit(SET_LOADING, false)
      })
  },
  // payload is week object
  updateUser ({ commit, state }, payload) {
    commit(SET_LOADING, true)
    WeeksAPI
      .saveWeek(payload)
      .then(response => {
        let index = -1
        for (let i = 0; i < state.weeks.length; i++) {
          if (response.data._id === state.weeks[i]._id) {
            index = -1
            break
          }
        }
        if (index === -1) {
          commit(ADD_WEEK, response.data)
        } else {
          commit(UPDATE_WEEK, { index: index, updatedWeek: response.data })
        }
        commit(SET_LOADING, false)
      })
      .catch(e => {
        console.log(e)
        commit(SET_LOADING, false)
      })
  },
  deleteWeek ({ commit, state }, payload) {
    commit(SET_LOADING, true)
    WeeksAPI
      .deleteWeek(payload)
      .then(response => {
        // need to update the list of user
        let index
        for (index = 0; index < state.weeks.length; index++) {
          if (response.data._id === state.weeks[index]._id) {
            break
          }
        }
        commit(DELETE_WEEK, index)
        commit(SET_LOADING, false)
      })
      .catch(e => {
        console.log(e)
        commit(SET_LOADING, false)
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
