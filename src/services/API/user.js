import axios from 'axios'
import server from '@/services/api.endpoint'


// payload is: username, password, email
function createUserRequest (payload) {
  return new Promise((resolve, reject) => {
    server.post('/api/user/',
      { body:
        {
          token: login.getters.token,
          username: payload.username,
          password: payload.password,
          email: payload.email
        }
      })
      .then(function (response) {
      })
      .catch(function (err) {
        reject(err)
        console.log(err)
      })
  })

 // payload is password
 function updateUserRequest (payload) {
  const id = state._id

  if (id) {
    return new Promise((resolve, reject) => {
      server.post('/api/user/' + id, payload)
        .then(function (responce) {
        })
        .catch(function (err) {
          reject(err)
          console.log(err)
        })
    })
  }
}

function deleteUserRequest (payload) {
  const id = state._id

  if (id) {
    return new Promise((resolve, reject) => {
      axios.delete(server + '/api/user/' + id)
        .then(function (responce) {
        })
        .catch(function (err) {
          reject(err)
          console.log(err)
        })
    })
  }
}
