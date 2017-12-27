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

  createFavorite(id) {
    return () => {
      let body = {
        image_id: id
      }

      fetch('/favorites', {
        method: "POST",
        body: body,
        credentials: 'same-origin'
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
    if (this.props.accessToken) {
      this.props.dispatch(getImage(this.props.match.params.id))
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.accessToken) {
      this.props.dispatch(getImage(nextProps.match.params.id))
    }
  }

  componentWillUnmount() {
    this.props.dispatch(clearImage())
  }

  render() {
    return (
      <div>
        { this.props.image.images ? (
          <img src={this.props.image.images.standard_resolution.url} />
        ) : <div>loading your Tiki</div>
        }
        <div>
          <br/><br/>
          <Link to='/' className="btn btn-sm btn-primary">Go Back</Link>
          <button onClick={this.createFavorite(this.props.match.params.id)} className="btn btn-sm btn-primary"> ❤️ </button>
          <button onClick={this.deleteFavorite(this.props.match.params.id)} className="btn btn-sm btn-primary"> 💔 </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    accessToken: state.session.userInfo.access_token,
    image: state.images.currentImage
  }
}

export default connect(mapStateToProps)(ImageDetail)