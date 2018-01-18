import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { HeroCard } from '../../components/home/HeroCard'

const Home = props => (
  <div className="home">
    <div className="heros-selector">
      {props.heros.map(
        hero => <HeroCard key={hero.id} {...hero} />,
      )}
    </div>
  </div>
)

const mapStateToProps = state => ({
  heros: state.heros
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)