import React from 'react'
import { Route, Link } from 'react-router-dom'

const HeroMenuLink = ({ id, to, label }) => (
  <Route path={`/hero/${id}`}>
   {({ match }) => (
      <Link to={to} className={match ? 'active' : ''}>{label}</Link>
    )}
  </Route>
)

const HerosMenu = ({ heros, type }) => (
  <nav className="heros-menu">
   {
   	heros.map(hero => 
      <HeroMenuLink key={hero.id} to={`/hero/${hero.id}`} label={hero.firstname + ' ' + hero.lastname} />
   	)
   }
  </nav>
)

export default HerosMenu;