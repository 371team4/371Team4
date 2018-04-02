import axios from 'axios'
import { store } from '@/store'
import router from '@/router'

let signoutFunction = null

// initialize server
export const server = axios.create({
  baseURL: 'http://cmpt371g4.usask.ca:8081/'
})

export function setTokenHeader (token) {
  if (token) {
    server.defaults.headers['x-access-token'] = token
  } else {
    console.error('Need token for authentication ')
  }
}
// set token after login for actions require token
export function setLocalStorage (data) {
  if (data && data.token && data.user) {
    localStorage.setItem('token', data.token)
    localStorage.setItem('user', JSON.stringify(data.user))
  } else {
    console.error('Need token for authentication ')
  }
}

export function removeToken () {
  delete server.defaults.headers['x-access-token']
  localStorage.removeItem('token')
  localStorage.removeItem('user')
}

export function isTokenValid () {
  let isValid = false
  const tokenInLS = localStorage.getItem('token')
  // check that the token in localStorage and headers are the same
  if (tokenInLS && !isExpired(tokenInLS)) {
    setTokenHeader(tokenInLS)
    isValid = true
  }
  return isValid
}

// this is a weak check, the server is much stronger
function isExpired (token) {
  // xxxxxxx.yyyyyyy.zzzzzzzz
  // yyyyyyy is the token info
  const infoFrag = token.split('.')[1]
  const info = JSON.parse(atob(infoFrag))
  if (info.exp < (Date.now() / 1000)) {
    store.dispatch('signOut')
    router.push({ name: 'Sign in' })
    return true
  } else {
    if (!signoutFunction) {
      signoutFunction = setTimeout(() => {
        store.dispatch('signOut')
        router.push({ name: 'Sign in' })
      }, (info.exp - (Date.now() / 1000)) * 1000)
      console.log((info.exp - (Date.now() / 1000)) * 1000)
    }
    return false
  }
}
