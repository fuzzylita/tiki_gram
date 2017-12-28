import React from 'react'
import { connect } from 'react-redux'

const User = (props) => {
  return (
    <div>
      <h1>{props.userInfo.username}</h1>
      <img src={props.userInfo.profile_picture} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
     isLoggedIn: state.session.isLoggedIn,
     userInfo: state.session.userInfo
   }
}

export default connect(mapStateToProps)(User)
