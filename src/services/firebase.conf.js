import { initializeApp } from 'firebase'

import { store } from '../store'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBT7DMm3c5lM6QyoTL11B5yi6tzVKXbrSY',
  authDomain: 'repartyed.firebaseapp.com',
  databaseURL: 'https://repartyed.firebaseio.com',
  projectId: 'repartyed',
  storageBucket: 'repartyed.appspot.com',
  messagingSenderId: '205921360328'
}

const app = initializeApp(config)
const db = app.database()

export const eventsDB = db.ref('/events')
export const authService = app.auth()

/**
 * Sync store.state.user with firebase.auth().currentUser
 *
 * This callback is called when firebase.auth() detects user changes,
 * so just update the vuex store with the new user object.
 */
authService.onAuthStateChanged(user => {
  const newUser = {
    id: user.uid,
    name: user.email
  }
  store.commit('setUser', { 'user': newUser })
})
