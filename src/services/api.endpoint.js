import axios from 'axios'

// initialize server
export const server = axios.create({
  baseURL: 'http://cmpt371g4.usask.ca:8081/'
})

// set token after login for actions require token
export function setLocalStorage (data) {
  if (data && data.token && data.user) {
    server.defaults.headers['x-access-token'] = data.token
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

export function checkToken () {
  let isValid = false
  const tokenInLS = localStorage.getItem('token')
  // check that the token in localStorage and headers are the same
  if (tokenInLS && !isExpired(tokenInLS)) {
    setLocalStorage({ token: tokenInLS, user: localStorage.getItem('user') })
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
  return info.exp > Date.now()
}
