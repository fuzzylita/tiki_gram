import React from 'react'
import { Link } from 'react-router-dom'

const Image = (props) => {
  return(
    <div>
      <Link to={`/image/${props.photo.id}`} >
        <img src={props.photo.src} />
      </Link>
    </div>
  )
}

export default Image