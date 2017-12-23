import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'

const BASE_URL = `https://api.instagram.com/v1/users/self/media/recent/?access_token=ACCESS-TOKEN`

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      isLoggedIn: false,
      currentUser: {},
      fetchingData: true,
      images: {}
    }
  }

  componentWillMount() {
    //We are checking to see if the user is logged in before we load the header
    fetch('/user', {credentials: 'same-origin'}).
      then((resp) => resp.json()).
      then((user) => {
        this.setState({isLoggedIn: true, currentUser: user})
      }).catch((err) => {
        //if no user is returned, catch that condition and respond appropriately
        this.setState({isLoggedIn: false})
      })
  }

  render() {
    return (
      <div>
        <Header isLoggedIn={this.state.isLoggedIn} currentUser={this.state.currentUser}/>
        <div className="container">
          {
            this.state.fetchingData ?
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


