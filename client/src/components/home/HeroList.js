import React, { Component } from 'react';
import { Link } from 'react-router';


import { HeroCard } from './HeroCard'
import { AddHero } from './AddHero'

class HeroList extends Component {
  componentWillMount() {
    this.props.fetchHeros();
  }

  renderHeros(heros) {
    return heros.map((hero) => {
      return (
         
                <HeroCard key={hero.id} {...hero} />
           
      );
    });
  }

  render() {
    const { heros, loading, error } = this.props.heroList;
    

    if(loading) {
      return <div className="container"><h1>Heros</h1><h3>Loading...</h3></div>      
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }

    return (

      <div className="container">
        <AddHero />
        <h1>Heros</h1>
        <ul className="list-group">
         <div className="home">
            <div className="heros-selector">
          {this.renderHeros(heros)}
           </div>
          </div>
        </ul>
      </div>
    );
  }
}

export default HeroList;