import React from 'react'
import { Link } from 'react-router-dom';

const ProfileInfo = (props) => {
  return (
    // these li's will be rendered to a ul and because there's more than one, 
    // I'm going to use this new functionality that will act like a single
    // dummy element that React will strip out. Means I can avoid repeating the ul
    // here and in login.

    <React.Fragment>
      <li><Link to="/user_info" >{props.currentUser.username}</Link></li>
      <li><img src={props.currentUser.profile_picture} id="profile_picture"/></li>
      <li><Link to="/logout">Log Out 👋</Link></li>
    </React.Fragment>
  )
}

export default ProfileInfo