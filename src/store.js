
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './modules'

export const history = createHistory()

const initialState = {
  heros: [{
    id: '001',
    firstname: 'Felipe',
    lastname: 'Andrew',
    nickname: '',
    rank: 'black belt',
    association: 'Zenith JJ Academy',
    division: ' Medium weight'
  },
  {
    id: '002',
    firstname: 'Roger',
    lastname: 'Gracie Gomes',
    nickname: '',
    rank: 'black belt',
    association: 'Gracie-Barra',
    division: 'Super Heavy Weight'
  },
  {
    id: '003',
    firstname: 'Andressa',
    lastname: 'Mezari Cintra',
    nickname: '',
    rank: 'black belt',
    association: 'Checkmat',
    division: 'Medium weight'
  }
  ]
}
const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)
console.log(store.getState())

export default store