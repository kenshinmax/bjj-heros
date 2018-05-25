import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form';
import heroReducer from './reducer_heros'

export default combineReducers({
  routing: routerReducer,
  items : heroReducer,
  form: formReducer
})