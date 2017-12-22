import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'

export default class App extends React.Component {
  
  render() {
    return (
      <div>
        <Header isLoggedIn={false}/>
        <div className="container">
          Hello
          {/* <Primary /> */}
          <Footer />
        </div>
      </div>
    )
  }
}


