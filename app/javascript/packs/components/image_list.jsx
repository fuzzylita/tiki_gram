import React from 'react'
import Image from './image'

const ImageList = (props) => {
  
  const tikiPics = props.images.map((img) => {
    return <Image key={img.id} image_data={img}/>
  }) 


  return(
    <div>
      <h1>Welcome to pictures of Tiki</h1>
      { tikiPics }
    </div>
  )
}

export default ImageList