import { server } from '@/services/api.endpoint'

const route = '/api/login'

export function signIn (username, password) {
  if (username && password) {
    return server.post(route, {
      username: username,
      password: password
    })
  } else {
    console.error('No username or password is present')
  }
}
