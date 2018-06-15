import React from 'react'
import { Link } from 'react-router-dom'

const fullName = (first, last) => {
	return first + " " + last
}
export const HeroCard = props => (
 <Link to={`/hero/${props.id}`}>
  <div className="hero-preview">
   <img src={`styles/images/${props.image}`} alt={`${fullName(props.firstname, props.lastname)}'s profile`} />
   <h2 className="name">{fullName(props.firstname, props.lastname)}</h2>
  </div>
 </Link>
)