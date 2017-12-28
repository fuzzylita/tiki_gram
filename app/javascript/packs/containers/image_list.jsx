import React from 'react'
import Gallery from 'react-photo-gallery'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'
import { getImages } from '../actions'
import Image from './image'

class ImageList extends React.Component {
  componentDidMount() {
    if (this.props.isLoggedIn) {
      this.props.dispatch(getImages)
      .catch(() => {
        toast.error('Failed to load images')
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isLoggedIn != nextProps.isLoggedIn) {
      this.props.dispatch(getImages)
      .catch(() => {
        toast.error('Failed to load images')
      })
    }
  }

  render() {
    const tikiPics = this.props.images.map((img) => {
      return {
        id: img.id,
        src: img.images.low_resolution.url
      }
    })
  
    return(
      <div>
        <h1>Welcome to Tiki-Gram</h1>
        <Gallery photos={tikiPics} 
          ImageComponent={Image}/>
        <Link to="/" className="btn btn-sm btn-primary">Back to your favorites</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.session.isLoggedIn,
    fetchingData: state.images.fetchingData,
    images: state.images.images
   }
}

export default connect(mapStateToProps)(ImageList)