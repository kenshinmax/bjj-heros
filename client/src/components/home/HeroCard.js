import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = props => (
 <Link to={`/hero/${props.id}`}>
  <div className="hero-preview">
   <img src={`styles/images/${props.image}`} alt={`${props.name}'s profile`} />
   <h2 className="name">{props.name}</h2>
  </div>
 </Link>
)