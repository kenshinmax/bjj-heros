import { combineReducers } from 'redux'
import {
  SELECT_HERO, CREATE_HERO, CREATE_HERO_SUCCESS,
  CREATE_HERO_FAILURE, RESET_DELETED_HERO, FETCH_HEROS, FETCH_HEROS_SUCCESS,
  FETCH_HEROS_FAILURE, RESET_HEROS
} from '../actions'

const initialState = {
  heroList: { 
        heros: [],
        error: null,
        loading: false
  },
  newHero:{ hero:null, error: null, loading: false}, 
  activeHero:{ hero:null, error:null, loading: false}, 
  deletedHero: { hero: null, error:null, loading: false},
};


export default function (state = initialState, action) {
  let error;
  switch (action.type) {
    case FETCH_HEROS: // start fetching heros and set loading = true 
      return { ...state, heroList: { heros: [], error: null, loading: true } }
    case FETCH_HEROS_SUCCESS: // return list of posts and make loading false
      return { ...state, heroList: { heros: action.payload , error: null, loading: false } }
    case FETCH_HEROS_FAILURE: // return an error and make loading = false
      return { ...state, heroList: { heros: [], error: true, loading: false } }
    case RESET_HEROS: // reset the heroList to the initial state
      return { ...state, heroList: { heros: initialState, error: null, loading: false} }

    case SELECT_HERO: 
      return { ...state, newHero: action.hero}
    case CREATE_HERO:
      return {...state, newHero: {...state.newHero, loading: true}}
    case CREATE_HERO_SUCCESS:
      return {...state, newHero: {hero:action.payload, error:null, loading: false}}
    case CREATE_HERO_FAILURE:
      error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
      return {...state, newHero: {hero:null, error:error, loading: false}}
    case RESET_DELETED_HERO:
      return {...state, newHero:{hero:null, error:null, loading: false}}
    
    case 'RESET':
      // By adding a `RESET` action, we can dispatch this to re-initialize our store.
      // You can dispatch this action on logout, or whenever you need to reset.
      return undefined;
    
    default:
      return state
  }
}
