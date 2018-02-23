import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import heroReducer from './reducer_heros'

export default combineReducers({
  routing: routerReducer,
  heros : heroReducer
})