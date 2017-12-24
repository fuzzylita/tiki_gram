import React from 'react'

const Image = (props) => {

  return(
    <div>
      <img src={props.image_data.images.low_resolution.url} />
    </div>
  )
}

export default Image