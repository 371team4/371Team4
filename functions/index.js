const functions = require('firebase-functions')
const admin = require('firebase-admin')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
admin.initializeApp(functions.config().firebase)
function listAllUsers (nextPageToken) {
  // List batch of users, 1000 at a time.
  admin.auth().listUsers(1000, nextPageToken)
    .then(function (listUsersResult) {
      listUsersResult.users.forEach(function (userRecord) {
        console.log('user', userRecord.toJSON())
      })
      if (listUsersResult.pageToken) {
        // List next batch of users.
        listAllUsers(listUsersResult.pageToken)
      }
    })
    .catch(function (error) {
      console.log('Error listing users:', error)
    })
}
// Start listing users from the beginning, 1000 at a time.
exports.helloWorld = functions.https.onRequest((request, response) => {
  listAllUsers()
  response.send('Hello from Firebase!')
})
