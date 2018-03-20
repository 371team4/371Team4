import axios from 'axios'
const server = 'https://cmpt371g4.usask.ca:8081'

function getAllSlide () {
  axios.get(server + 'api/slides/')
}

// Takes id as payload and gets the slide with the given id
function getSlide (payload) {
  const id = payload.currentSlide._id
  axios.get(server + 'api/slides/' + {
    _id: id
  })
}

// used for saving both new slides, and edits to existing slides.
function saveSlide (payload) {
  // trys to assign the database key(_id) to id
  const id = payload.currentSlide._id
  // checks if id object exists (it does if already in DB) otherwise it doesn't and will be false.
  if (id) {
    // If id already exist, post the body of current slide in the id that already exist
    axios.put(server + '/api/slides/' + id, {
      body: state.currentSlide })
    // reloads the window or page
    window.location.reload()
  } else {
    // id does not exist in the database so we save as new slide
    axios.post(server + '/api/slides/', {
      body: state.currentSlide
    })
  }

  // This should not be set to false until it is confirmed that the slide is saved
  // Because the modifications to the slide have now been saved to database,
  // both this version, and the database one should be the same, so dirty
  // state is now false.
}
// takes currentSlide as payload, used for deleting slides from database.
function deleteSlide (payload) {
  // assign the database key(_id) to id
  const id = state.currentSlide._id

  axios.delete(server + '/api/slides/' + {
    id
  })
  // reloads the window or page
  window.location.reload()
}
