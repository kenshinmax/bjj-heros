import React from 'react'
import PropTypes from 'prop-types'

class Gallery extends React.Component {
  renderImage(imageUrl, index){
  	return (
      <div> 
        <img key={index} alt={index} src={imageUrl} />
      </div>
  	)
  }

  render() {
  	return (
      <div className="gallery">
        <div className="images">
           {this.props.imageUrls.map((imgUrl,index) => this.renderImage(imgUrl, index))}
        </div> 
      </div>
  	)
  }
}

Gallery.propTypes = {
	imageUrls: PropTypes.array.isRequired
}

export default Gallery