import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { getImage, clearImage } from '../actions'


class ImageDetail extends React.Component {
  constructor(props) {
    super(props)
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
        <Link to='/' className="btn btn-sm btn-primary">Go Back</Link>
        { this.props.image.images ? (
          <img src={this.props.image.images.standard_resolution.url} />
        ) : <div>loading your Tiki</div>
        }
        
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