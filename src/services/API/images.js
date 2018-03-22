import { server } from '@/services/api.endpoint'

export function getImage (Id) {
  // check if id provided
  if (Id) {
    return server.get(`/api/images/${Id}`)
  } else {
    console.error('Id is not provided for getImage')
  }
}

export function uploadImage (image) {
  // check if image provided
  if (image) {
    var formData = new FormData()
    formData.append('image', image)
    return server.put('/api/images', formData)
  } else {
    console.error('Image file is not provided for uploadImage')
  }
}

export function deleteImage (Id) {
  // check if id provided
  if (Id) {
    return server.delete(`/api/images/${Id}`)
  } else {
    console.error('Id is not provided for deleteImage')
  }
}
