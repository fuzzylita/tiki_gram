const initialState = {
  fetchingData: false,
  images: [],
  currentImage: {}
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
    case 'REQUEST_IMAGE':
      return {
        ...state,
        fetchingData: true
      }
    case 'RECEIVE_IMAGE': 
  // this case should receive a payload containing the image data
      return {
        ...state,
        fetchingData: false, 
        currentImage: action.currentImage
      }
    case 'CLEAR_IMAGE':
      return {
        ...state,
        fetchingData: false,
        currentImage: {}
      }
    default:
      return state;
  }
}

export default imageReducer