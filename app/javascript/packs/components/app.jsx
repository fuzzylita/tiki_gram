import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      fetchingData: true,
      images: {}
    }
  }

  render() {
    return (
      <div>
        <Header isLoggedIn={false}/>
        <div className="container">
          {
            fetchingData ?
            <h1>Images are loading!</h1> :
            <h1>Images have loaded successfully!</h1>
          }
          {/* <Primary /> */}
          <Footer />
        </div>
      </div>
    )
  }
}


