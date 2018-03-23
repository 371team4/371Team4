import axios from 'axios'

export const server = axios.create({
  baseURL: 'http://cmpt371g4.usask.ca:8081'
})

export function setToken (token) {
  if (token) {
    server.defaults.headers['x-access-token'] = token
  } else {
    console.error('Need token for authentication ')
  }
}

export function removeToken () {
  delete server.defaults.headers['x-access-token']
}
