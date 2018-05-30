import React, { Component, PropTypes } from 'react';


const RenderOffer = ({offer}) => (
  <div className="offer-container">
   <span className="current-offer">{offer.message}</span>
  </div>
)

export default RenderOffer;