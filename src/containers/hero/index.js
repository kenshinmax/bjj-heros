import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Hero extends Component {
  constructor(props) {
  	super(props)
  	
  }
  render(){
	const { heros, id } = this.props
	const hero = heros.find(current => current.id === id)
		return (
		  <div className="hero-full">
		    <div className="hero">
		      <h1>Detail for {id}</h1>
		      { 
		      	 
		      }
		      <div>
                 <h1>{hero.name}</h1>
		      </div>
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