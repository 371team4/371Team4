import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBT7DMm3c5lM6QyoTL11B5yi6tzVKXbrSY',
  authDomain: 'repartyed.firebaseapp.com',
  databaseURL: 'https://repartyed.firebaseio.com',
  projectId: 'repartyed',
  storageBucket: 'repartyed.appspot.com',
  messagingSenderId: '205921360328'
}

firebase.initializeApp(config)
export default {
  db: firebase.database(),
  dbRef: firebase.database().ref('/repartyed'),
  auth: firebase.auth()
}
