import React from 'react'
import { connect } from 'react-redux'
import { fetchHero } from '../../actions'
import HeroEditForm from '../../components/HeroEditForm'

function mapStateToProps (state, ownProps) {
  
  return {
    activeHero: ownProps
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
 return {
    fetchHero: () => {
    	dispatch(fetchHero(ownProps.hero.id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeroEditForm)

