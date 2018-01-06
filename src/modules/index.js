import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import heros from './heros'

export default combineReducers({
  routing: routerReducer,
  counter,
  heros
})