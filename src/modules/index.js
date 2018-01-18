import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import rootReducer from '../reducers'

export default combineReducers({
  routing: routerReducer,
  heros : rootReducer
})