import { server } from '@/services/api.endpoint'

export function getAllWeeks () {
  return server.get('api/weeks/')
}

// Takes id as payload and gets the Weekwith the given id
export function getWeek (id) {
  if (id) {
    return server.get(`api/weeks/${id}`)
  } else {
    console.log('Need id for `getWeek`')
  }
}

// used for saving both new weeks, and edits to existing weeks.
export function saveWeek (week) {
  // trys to assign the database key(_id) to id
  if (week) {
    // checks if id object exists (it does if already in DB) otherwise it doesn't and will be false.
    if (week._id) {
      // If id already exist, post the body of week in the id that already exist
      return server.put(`api/weeks/${week._id}`, week)
    } else {
      // id does not exist in the database so we save as new week
      return server.post('api/weeks/', week)
    }
  } else {
    console.log('Need Week for `saveWeek`')
  }
}
// takes currentWeek as payload, used for deleting weeks from database.
export function deleteWeek (id) {
  if (id) {
    return server.delete(`api/weeks/${id}`)
  } else {
    console.log('Need id for `deleteWeek')
  }
}
