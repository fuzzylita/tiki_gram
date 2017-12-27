const initialState = {
  fetchingData: false,
  images: []
}

function favoriteReducer(state = initialState, action){      
  switch (action.type) {
    case 'REQUEST_FAVORITES':
      return {
        ...state,
        fetchingData: true
      }
    case 'RECEIVE_FAVORITES': 
    // this case should receive a payload containing the favorite data
      return {
        ...state,
        fetchingData: false, 
        images: action.favorites
      }
    default:
      return state;
  }
}

export default favoriteReducer