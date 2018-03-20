import axios from 'axios'

export const server = axios.create({
  baseURL: 'http://cmpt371g4.usask.ca:8081'
})
