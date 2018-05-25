import { connect } from 'react-redux'
import { fetchHeros, fetchHerosSuccess, fetchHerosFailure } from '../../actions'
import HeroList from '../../components/home/HeroList';

const mapStateToProps = (state) => {
  return {
    heroList: state.items.heroList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHeros: () =>  {
      dispatch(fetchHeros())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroList)