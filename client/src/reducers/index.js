import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form';
import heroReducer from './reducer_heros'
import locationReducer from './reducer_locations'

export default combineReducers({
  routing: routerReducer,
  items : heroReducer,
  locations: locationReducer,
  form: formReducer
})