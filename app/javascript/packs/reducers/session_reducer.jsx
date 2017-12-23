
function sessionReducer(state, action){      
  switch (action.type) {
    case 'LOGIN': // this case should receive a payload containing the user data (action.user_info)
      return {is_logged_in: true, user_info: action.user_info}
    case 'LOGOUT' // this case should set the state to null or whatever
      return {count: state.count - 1}
    default:
      return state;
  }
}