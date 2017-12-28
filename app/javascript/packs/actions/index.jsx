import fetchJsonp from 'fetch-jsonp'
const TIKI_IMAGE_URL = `https://api.instagram.com/v1/users/5798671360/media/recent/?access_token=`
const BASE_URL = `https://api.instagram.com/v1/media/`

// actions for session reducer

const login = (user) => {
  return {
    type: 'LOGIN',
    user_info: user
  }
}

const resetUser = () => {
  return {type: 'RESET_USER'}
}

// using thunk to allow us to dispatch functions. Thunk can take the dispatch and getState as arguments
//We are checking to see if the user is logged in before we load the header

export const setSession = (dispatch) => {
  return fetch('/user', {credentials: 'same-origin'})
    .then((resp) => resp.json())
    .then((user) => {
      dispatch(login(user))
    }).catch((err) => {
      //if no user is returned, catch that condition and respond appropriately
      //by ensuring that there is no user set
      dispatch(resetUser())
    }) 
}

// actions for image reducer

// starting the request
const requestImages = () => {
  return {type: 'REQUEST_IMAGES'}
}

// receiving the images
const receiveImages = (images) => {
  return {
    type: 'RECEIVE_IMAGES',
    images: images
  }
}

export const getImages = (dispatch, getState) => {
  dispatch(requestImages())
  return fetchJsonp(TIKI_IMAGE_URL + getState().session.userInfo.access_token)
      .then((resp) => resp.json())
      .then((body) => {
        let images = body.data.map((img) => {
          return {
            id: img.id,
            likes: img.likes.count,
            images: img.images,
            type: img.type
          }
        })
        dispatch(receiveImages(images))
      })
}

// Recieve a single image
const requestImage = () => {
  return {type: 'REQUEST_IMAGE'}
}

// receiving the images
const receiveImage = (image) => {
  return {
    type: 'RECEIVE_IMAGE',
    currentImage: image
  }
}

export const clearImage = () => {
  return {type: 'CLEAR_IMAGE'}
}

export const getImage = (id) => {
  return function(dispatch, getState) {
    dispatch(requestImage())
    return fetchJsonp(BASE_URL + id + '?access_token=' + getState().session.userInfo.access_token)
    .then((resp) => resp.json())
    .then((body) => {
      dispatch(receiveImage(body.data))
    })
  }
}

// actions for favorites page
// starting the request
const requestFavorites = () => {
  return {type: 'REQUEST_FAVORITES'}
}

// receiving the images
const receiveFavorites = (favorites) => {
  return {
    type: 'RECEIVE_FAVORITES',
    favorites: favorites
  }
}

export const getFavorites = (dispatch, getState) => {
  dispatch(requestFavorites())
  fetch('/favorites', {credentials: 'same-origin'})
      .then((resp) => resp.json())
      .then((data) => {
        let favorites = data.map((fav) => {
          return {
            id: fav.image_id,
            images: fav.images
          }
        })
        dispatch(receiveFavorites(favorites))
      })
}


