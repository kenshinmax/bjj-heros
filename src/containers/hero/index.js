import React, { Component } from 'react'
import  { push } from 'react-router-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Hero extends Component {
  constructor(props) {
  	super(props)
  }
  render(){
  	
	const { heros, id } = this.props.heroList
	const hero = heros.find(current => current.id === id)
	const headerStyle = { backgroundImage: `url(/styles/images/${hero.cover})` };
  return (
		
		  <div className="hero-full">
		    <div className="hero">
		      <header style={headerStyle} />
		      <div className="picture-container">
		         <img alt={`${hero.name}'s profile`} src={`/styles/images/${hero.image}`} />
		         <h2 className="name">{hero.name}</h2>
		      </div>
		      <section className="description">
                more details here...
		      </section>
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
    heros: state.heros,
  };
}
const mapDispatchToProps = dispatch => bindActionCreators({
 
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hero)