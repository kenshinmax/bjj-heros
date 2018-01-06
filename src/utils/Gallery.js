import React from 'react'
import PropTypes from 'prop-types'

class Gallery extends React.Component {
  renderImage(imageUrl, index){
  	return (
      <li key={index}>
       <img alt='' src={imageUrl} />   
      </li>   
  	)
  }

  render() {
  	return (
      <div className="gallery">
        <div className="images">
          <ul> 
            {this.props.imageUrls.map((imgUrl, index) => 
            	 this.renderImage(imgUrl, index)
            )}
          </ul>
        </div> 
      </div>
  	)
  }
}

Gallery.propTypes = {
	imageUrls: PropTypes.array.isRequired
}

export default Gallery