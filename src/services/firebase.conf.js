import { initializeApp } from 'firebase'

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

export const slidesDB = db.ref('/slides')
export const authService = app.auth()
