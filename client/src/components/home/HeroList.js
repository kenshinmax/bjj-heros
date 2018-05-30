import React, { Component } from 'react';
import { Link } from 'react-router';
import { HeroCard } from '../../components/home/HeroCard'

class HeroList extends Component {
  componentWillMount() {
    this.props.fetchHeros();
  }


  renderHeros(heros) {
    return heros.map((hero) => {
      return (
          <div className="home" key={ hero.id }>
            <div className="heros-selector">
                <HeroCard key={ hero.id } {...hero} />
            </div>
          </div>
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
        <h1>Heros</h1>
        <ul className="list-group">
          {this.renderHeros(heros)}
        </ul>
      </div>
    );
  }
}


export default HeroList;