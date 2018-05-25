import React from 'react'
import { connect } from 'react-redux'
import { resetNewHero } from '../../actions'
import HerosForm from '../../components/HerosForm'

const mapDispatchToProps = (dispatch) => {
 return {
    resetMe: () => {
      dispatch(resetNewHero())
    }
  }
}


function mapStateToProps (state, ownProps) {
  return {
    newHero: state.items.newHero
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HerosForm)

