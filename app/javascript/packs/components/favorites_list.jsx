import React from 'react'
import Gallery from 'react-photo-gallery'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { getFavorites } from '../actions'
import Image from './image'

class FavoritesList extends React.Component {
  componentDidMount() {
    if (this.props.isLoggedIn) {
      this.props.dispatch(getFavorites)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isLoggedIn != nextProps.isLoggedIn) {
      this.props.dispatch(getFavorites)
    }
  }

  render() {
    const tikiPics = this.props.favorites.map((fav) => {
      return {
        id: fav.id,
        src: fav.images.low_resolution.url
      }
    })

    if (!this.props.isLoggedIn) {
      return <h1> Log in to view your Tikis! </h1>
    }

    return (
      
      <div>
        <h1>Your favorite Tikis!</h1>
        { tikiPics.length < 1 ? (
          <p>You haven't favorited any Tikis!</p>
          ): (
          <Gallery
            photos={tikiPics} 
            ImageComponent={Image} />
          )
        }
        <Link to="/all" className="btn btn-sm btn-primary">Find More Tikis!</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.session.isLoggedIn,
    fetchingData: state.favorites.fetchingData,
    favorites: state.favorites.images
   }
}

export default connect(mapStateToProps)(FavoritesList)