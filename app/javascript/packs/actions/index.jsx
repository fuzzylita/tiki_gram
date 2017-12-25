import fetchJsonp from 'fetch-jsonp'
const TIKI_IMAGE_URL = `https://api.instagram.com/v1/users/5798671360/media/recent/?access_token=`


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
      dispatch(getImages)
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
  fetchJsonp(TIKI_IMAGE_URL + getState().session.userInfo.access_token)
      .then((resp) => resp.json())
      .then((body) => {
        let images = body.data.map((img) => {
          return {
            id: img.id,
            images: img.images,
            type: img.type
          }
        })
        dispatch(receiveImages(images))
      })
}


