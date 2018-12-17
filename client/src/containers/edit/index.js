import React from 'react'
import { connect } from 'react-redux'
import { currentOffers, fetchHero, deleteHero } from '../../actions'
import HeroEditForm from '../../components/HeroEditForm'

function mapStateToProps (state, ownProps) {
  return {
    heroList: state.items.heroList,
    id: ownProps.id,
    rank: ownProps.activeHero.rank
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
 return {
    fetchHero: () => dispatch(fetchHero(ownProps.id)), 
    currentOffers: () => dispatch(currentOffers(ownProps.activeHero().rank))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeroEditForm)

