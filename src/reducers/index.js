import { combineReducers } from 'redux'
import {
  SELECT_HERO
} from '../actions'

const initialState = [
  {
    id: '001',
    firstname: 'Felipes',
    lastname: 'Andrew',
    name: 'Felipe Andrew',
    image: 'felipe-andrew.png',
    nickname: '',
    rank: 'black belt',
    association: 'Zenith JJ Academy',
    division: ' Medium weight'
  },
  {
    id: '002',
    firstname: 'Roger',
    lastname: 'Gracie Gomes',
    name: 'Roger Gracie Gomes',
    image: 'roger-gracie.png',
    nickname: '',
    rank: 'black belt',
    association: 'Gracie-Barra',
    division: 'Super Heavy Weight'
  },
  {
    id: '003',
    firstname: 'Andressa',
    lastname: 'Mezari Cintra',
    name: 'Andressa Mezari Cintra',
    image: 'adressa-cintra.png',
    nickname: '',
    rank: 'black belt',
    association: 'Checkmat',
    division: 'Medium weight'
  }
]


export default function (state = initialState, action) {
  switch (action.type) {
    case SELECT_HERO: 
      return { ... state, hero: action.hero}
    case 'RESET':
      // By adding a `RESET` action, we can dispatch this to re-initialize our store.
      // You can dispatch this action on logout, or whenever you need to reset.
      return undefined;
    
    default:
      return state
  }
}
