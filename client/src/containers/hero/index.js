import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteHero } from '../../actions'
import HeroEditForm from '../../containers/edit'

   
function mapStateToProps(state, ownProps) {

  return {
    heroList: state.items.heroList.heros, 
    activeHero: () => (
      state.items.heroList.heros.find(current => current.id === ownProps.id)
    )
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
 return {
    deleteHero: () => {
      dispatch(deleteHero(ownProps.hero.id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroEditForm)