import { server } from '@/services/api.endpoint'

const route = '/api/login'

export function signIn (username, password) {
  return server.post(route, {
    username: username,
    password: password
  })
}
