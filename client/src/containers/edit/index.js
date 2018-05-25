import React from 'react'
import { connect } from 'react-redux'
import { fetchHero } from '../../actions'
import HeroEditForm from '../../components/HeroEditForm'

function mapStateToProps (state, ownProps) {
  return {
    //activeHero: state.heros.activeHero
  }
}

const mapDispatchToProps = (dispatch) => {
 return {
    fetchHero: () => {
    	dispatch(fetchHero(this.props.hero.id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeroEditForm)

