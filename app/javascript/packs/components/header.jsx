
import React from 'react'
import Login from './login'
import ProfileInfo from './profile_info'

const Header = (props) => {
  return(
    <header className="navbar navbar-fixed-top navbar-inverse">
      <div className="container">
        <a id="logo" href="/">Tikigram</a>
        <nav>
          <ul className="nav navbar-nav navbar-right">
            { props.isLoggedIn ? <ProfileInfo /> : <Login /> }
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header