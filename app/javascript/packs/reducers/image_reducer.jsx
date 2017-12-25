const initialState = {
  fetchingData: false,
  images: []
}

function imageReducer(state = initialState, action){      
  switch (action.type) {
    case 'REQUEST_IMAGES':
      return {
        ...state,
        fetchingData: true
      }
    case 'RECEIVE_IMAGES': 
    // this case should receive a payload containing the image data
      return {
        ...state,
        fetchingData: false, 
        images: action.images
      }
    default:
      return state;
  }
}

export default imageReducer