import axios from 'axios'
import server from '@/services/api.endpoint'


// payload is: username, password, email
function createUserRequest (user) {
  return new Promise((resolve, reject) => {
    server.post('/api/user/',
      { body:
        {
          token: login.getters.token,
          username: user.username,
          password: user.password,
          email: user.email
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
 function updateUserRequest (password) {
  const id = state._id

  if (id) {
    return new Promise((resolve, reject) => {
      server.post('/api/user/' + id, password)
        .then(function (responce) {
        })
        .catch(function (err) {
          reject(err)
          console.log(err)
        })
    })
  }
}

function deleteUserRequest (user) {
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
