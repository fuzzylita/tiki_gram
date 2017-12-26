import React from 'react'
import { Link } from 'react-router-dom'

const Image = (props) => {
  return(
    <Link className="gallery-image" to={`/image/${props.photo.id}`} >
      <img src={props.photo.src} />
    </Link>
  )
}

export default Image