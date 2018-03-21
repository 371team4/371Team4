import { server } from '@/services/api.endpoint'

const route = '/api/users/'

function validateUser (user) {
  let flag = true
  if (!user) {
    console.error('Need User object')
    flag = false
  }
  if (!user.username) {
    console.error('Need username for user')
    flag = false
  }
  if (!user.password) {
    console.error('Need password for user')
    flag = false
  }
  if (!user.email) {
    console.error('Need email for user')
    flag = false
  }
  return flag
}

export function getAllUsers () {
  return server.get(route)
}

// payload is: username, password, email
export function createUser (user) {
  if (validateUser(user)) {
    return server.post(route,
      { body:
        { username: user.username,
          password: user.password,
          email: user.email
        }
      }
    )
  }
}

// payload is user
export function updateUser (user) {
  if (validateUser(user)) {
    if (user._id) {
      return server.post(`${route}${user._id}`,
        { body:
        { username: user.username,
          password: user.password,
          email: user.email
        }
        })
    } else {
      console.error('No _id is present')
    }
  }
}

export function deleteUser (user) {
  if (validateUser(user)) {
    if (user._id) {
      return server.delete(`${route}${user._id}`)
    } else {
      console.error('No _id is present')
    }
  }
}
