import React from 'react'
import { connect } from 'react-redux'
import { fetchHero, deleteHero } from '../../actions'
import HeroEditForm from '../../components/HeroEditForm'

function mapStateToProps (state, ownProps) {
  return {
    heroList: ownProps.heroList,
    id: ownProps.id
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
 return {
    deleteHero: () => 
    	dispatch(deleteHero(ownProps))
    , 
    fetchHero: () => {
    	dispatch(fetchHero(ownProps.id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeroEditForm)

