import { server } from '@/services/api.endpoint'

export function getAllSlides () {
  return server.get('api/slides/')
}

// Takes id as payload and gets the slide with the given id
export function getSlide (id) {
  if (id) {
    return server.get(`api/slides/${id}`)
  } else {
    console.log('Need it for `getSlide`')
  }
}

// used for saving both new slides, and edits to existing slides.
export function saveSlide (slide) {
  // trys to assign the database key(_id) to id
  if (slide) {
    // checks if id object exists (it does if already in DB) otherwise it doesn't and will be false.
    if (slide._id) {
      // If id already exist, post the body of current slide in the id that already exist
      return server.put(`api/slides/${slide._id}`, slide)
    } else {
      // id does not exist in the database so we save as new slide
      return server.post('api/slides/', slide)
    }
  } else {
    console.log('Need slide for `saveSlide`')
  }
}
// takes currentSlide as payload, used for deleting slides from database.
export function deleteSlide (id) {
  if (id) {
    return server.delete(`api/slides/${id}`)
  } else {
    console.log('Need it for `deleteSlide`')
  }
}
