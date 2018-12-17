import { combineReducers } from 'redux'
import {
	FETCH_LOCATIONS, FETCH_LOCATIONS_SUCCESS, FETCH_LOCATIONS_FAILURE
} from '../actions'


const initialState = {
	locationList: {
		locations: [],
		error: null,
		loading: false
	}
}

export default function (state = initialState, action) {
	let error;
	switch (action.type) {
		case FETCH_LOCATIONS: // start fetching locations and set loading = true
 		return {...state, locationList: { locations: [], error: null, loading: true} }
        
        case FETCH_LOCATIONS_SUCCESS: // return list of posts and make loading false
        return { ...state, locationList: { locations: action.payload , error: null, loading: false } }
        
        case FETCH_LOCATIONS_FAILURE: // return an error and make loading = false
        return { ...state, locationList: { locations: [], error: true, loading: false } }
 
	default:
	   return state
	}
}