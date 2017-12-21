//     <a href='https://api.instagram.com/oauth/authorize/?client_id=afb682c734104e9790fe86ed286db918&redirect_uri=http://localhost:3000/auth/instagram/callback&response_type=code'>login</a>


import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class App extends React.Component {
  
  render() {
    return (
      <div>
        {/* <Header /> */}
        <div className="container">
          {/* <Primary /> */}
        </div>
        {/* <Footer /> */}
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body
  )
})
