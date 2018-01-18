import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Hero = props => (
  <div>
    <h1>Detail</h1>
    <p>Hello Hero</p>
  </div>
)

function mapStateToProps(state, ownProps) {
  return {
    id: ownProps.params,
  };
}
const mapDispatchToProps = dispatch => bindActionCreators({
 
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hero)