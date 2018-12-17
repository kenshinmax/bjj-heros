import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteHero, deleteHeroSuccess, deleteHeroFailure } from '../../actions'
import HeroEditForm from '../../containers/edit'
import { push } from 'react-router-redux'
   
function mapStateToProps(state, ownProps) {
  return {
    heroList: state.items.heroList.hereos, 
    activeHero: () => (
      state.items.heroList.heroes.find(current => current.id === ownProps.id)
    )
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
 return {
    deleteHero: () => {
         dispatch(deleteHero(ownProps.id))
         .then(result => {
           dispatch(push('/'))
        } 
       )
      }
    }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroEditForm)