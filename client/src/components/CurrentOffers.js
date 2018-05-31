import React, { Component, PropTypes } from 'react';


const CurrentOffers = ({currentOffer}) => (
  
  <div className="offer-container">
   <span className="current-offer">{currentOffer}</span>
  </div>
)

export default CurrentOffers;