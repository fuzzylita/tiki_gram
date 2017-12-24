import React from 'react'
import PropTypes from 'prop-types'
import fetchJsonp from 'fetch-jsonp'

import Header from './header'
import Footer from './footer'
import ImageList from './image_list'

const TIKI_IMAGE_URL = `https://api.instagram.com/v1/users/5798671360/media/recent/?access_token=`

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      isLoggedIn: false,
      currentUser: {},
      // fetchingData: true,
      // images: []
    }
  }

  componentDidMount() {
    //We are checking to see if the user is logged in before we load the header
    fetch('/user', {credentials: 'same-origin'})
      .then((resp) => resp.json())
      .then((user) => {
        this.setState({isLoggedIn: true, currentUser: user})
        this.getImages()
      }).catch((err) => {
        //if no user is returned, catch that condition and respond appropriately
        this.setState({isLoggedIn: false})
      }) 
  }

  getImages() {
    this.setState({fetchingData: true})
    fetchJsonp(TIKI_IMAGE_URL + this.state.currentUser.access_token)
      .then((resp) => resp.json())
      .then((body) => {
        this.setState({fetchingData: false})
        let images = body.data.map((img) => {
          return {
            id: img.id,
            images: img.images,
            type: img.type
          }
        })
        this.setState({images: images})
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
            <ImageList images={this.state.images}/>
          }
          <Footer />
        </div>
      </div>
    )
  }
}


