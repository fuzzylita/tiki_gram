import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'

import { getImage, clearImage } from '../actions'


class ImageDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  createFavorite(id, images) {
    return () => {
      let body = {
        image_id: id,
        images: images
      }

      fetch('/favorites', {
        method: "POST",
        body: JSON.stringify(body),
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((resp) => resp.json())  
        .then((body) => {
          toast.success("Favorited this Tiki! 🍹")
        })
    } 
  }

  deleteFavorite(id) {
    return () => {
      fetch(`/favorites/${id}`, {
        method: "DELETE",
        credentials: 'same-origin'
      })
      .then((resp) => resp.json())  
      .then((body) => {
        toast.warn("Removed this Tiki from favorites 💩")
      })
    }
  }

  componentDidMount() {
    if (this.props.isLoggedIn) {
      this.props.dispatch(getImage(this.props.match.params.id))
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isLoggedIn != nextProps.isLoggedIn) {
      this.props.dispatch(getImage(nextProps.match.params.id))
      .catch(() => {
        toast.error('Failed to fetch image')
      })
    }
  }

  componentWillUnmount() {
    this.props.dispatch(clearImage())
  }

  render() {
    let { image, match } = this.props

    return (
      <div>
        { image.images ? (
          <img src={image.images.standard_resolution.url} />
        ) : <div>loading your Tiki</div>
        }
        <div>
          <br/><br/>
          <Link to='/all' className="btn btn-sm btn-primary">Add more Tikis</Link>
          <Link to='/' className="btn btn-sm btn-primary">Go Back</Link>
          <button onClick={this.createFavorite(match.params.id, image.images)} className="btn btn-sm btn-primary"> ❤️ </button>
          <button onClick={this.deleteFavorite(match.params.id)} className="btn btn-sm btn-primary"> 💔 </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.session.isLoggedIn,
    image: state.images.currentImage
  }
}

export default connect(mapStateToProps)(ImageDetail)