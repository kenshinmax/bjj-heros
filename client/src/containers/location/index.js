import { connect } from 'react-redux'
import { fetchLocations, fetchLocationSuccess, fetchLocationFailure } from '../../actions'
import LocationList from '../../components/location/LocationList'

const mapStateToProps = (state) => {
  return {
    locationList: state.locations.locationList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocations: () => {
      dispatch(fetchLocations())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationList)
