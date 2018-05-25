import React, { Component } from 'react'
import  { push } from 'react-router-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HerosMenu  from '../../components/HerosMenu'
import HeroEditForm from '../../containers/edit'

class Hero extends Component {
  constructor(props) {
  	super(props)
  	this.state = {isEditing: false};
  	this.toggleEdit = this.toggleEdit.bind(this);
  }
  toggleEdit() {
    this.setState({isEditing: !this.state.isEditing})
  }

  componentWillReceiveProps(nextProps) {

    if (this.props.id != nextProps.id) {
      console.log("old hero", this.state.hero)
      this.setState({hero: nextProps.hero});
      console.log("hero has updated", this.state.hero)

    }
    

  }
  updateHeroState(event) {
    const field = event.target.name;
    const hero = this.state.hero;
    hero[field] = event.target.value;
    return this.setState({hero: hero});
  }
  saveHero(event){
    event.preventDefault();
    this.props.actions.updateHero(this.state.hero)
  }
  render(){
  
	const { heros }  = this.props.heroList
	const id  = this.props.id
	const hero = heros.find(current => current.id === id)
	const headerStyle = { backgroundImage: `url(/styles/images/${hero.cover})` };
  	
  	if (this.state.isEditing) {
      return (
      <div>
        <HeroEditForm hero={hero} onClick={this.toggleEdit} />
         
      </div>
      )
    }
  return (
		
		  <div className="hero-full">
		  <HerosMenu heros={heros} />
		    <div className="hero">
		      <header style={headerStyle} />
		      <div className="picture-container">
		         <img alt={`${hero.firstname}'s profile`} src={`/styles/images/${hero.image}`} />
		         <h2 className="name">{hero.firstname + ' ' + hero.lastname}</h2>
		      </div>
		      <section className="description">
                <p>First: {hero.firstname}</p>
                <p>Last: {hero.lastname}</p>
                <p>nickname: {hero.nickname}</p>
                <p>Rank: {hero.rank}</p>
                <p>Division: {hero.division}</p>
		      </section>
		      <button onClick={this.toggleEdit}>edit</button>
		    </div>
		    <div className="navigateBack">
	          <Link to="/">« Back to the index</Link>
	        </div>
		  </div>
	  )
	}	
}

function mapStateToProps(state, ownProps) {
  return {
    heroList: state.items.heroList
  };
}

export default connect(mapStateToProps)(Hero)