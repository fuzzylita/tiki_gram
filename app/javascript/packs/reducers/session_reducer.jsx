const initialState = {
  isLoggedIn: false,
  userInfo: {}
}

function sessionReducer(state = initialState, action){      
  switch (action.type) {
    case 'LOGIN':
     // this case should receive a payload containing the user data (action.user_info)
      return {
        isLoggedIn: true, 
        userInfo: action.user_info
      }
    case 'RESET_USER': 
    // this case should set the state to null or whatever
      return {
        isLoggedIn: false,
        userInfo: {}
      }
    default:
      return state;
  }
}

export default sessionReducer