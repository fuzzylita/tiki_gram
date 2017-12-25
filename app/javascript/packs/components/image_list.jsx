import React from 'react'
import Gallery from 'react-photo-gallery'
import { connect } from 'react-redux'

const ImageList = (props) => {
  const tikiPics = props.images.map((img) => {
    return {src: img.images.low_resolution.url}
  }) 


  return(
    <div>
      <h1>Welcome to Tiki-Gram</h1>
      <Gallery photos={tikiPics}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    fetchingData: state.images.fetchingData,
    images: state.images.images
   }
}

export default connect(mapStateToProps)(ImageList)