// aws library
import Amplify, { API } from 'aws-amplify'
import aws_exports from '../aws-exports'

// Fetch heroList
export const FETCH_HEROS = 'FETCH_HEROS'
export const FETCH_HEROS_SUCCESS = 'FETCH_HEROS_SUCCESS'
export const FETCH_HEROS_FAILURE = 'FETCH_HEROS_FAILURE'
export const RESET_HEROS = 'RESET_HEROS'

// Fetch hero
export const FETCH_HERO = 'FETCH_HERO'
export const FETCH_HERO_SUCCESS = 'FETCH_HERO_SUCCESS'
export const FETCH_HERO_FAILURE = 'FETCH_HERO_FAILURE'
export const RESET_ACTIVE_HERO = 'RESET_ACTIVE_HERO'
export const RESET_DELETED_HERO = 'RESET_DELETED_HERO'

//Validate post fields like Title, Categries on the server
export const VALIDATE_HERO_FIELDS = 'VALIDATE_HERO_FIELDS'
export const VALIDATE_HERO_FIELDS_SUCCESS = 'VALIDATE_HERO_FIELDS_SUCCESS'
export const VALIDATE_HERO_FIELDS_FAILURE = 'VALIDATE_HERO_FIELDS_FAILURE'
export const RESET_HERO_FIELDS = 'RESET_HERO_FIELDS'

// Create Hero
export const CREATE_HERO = 'CREATE_HERO'
export const CREATE_HERO_SUCCESS = 'CREATE_HERO_SUCCESS'
export const CREATE_HERO_FAILURE = 'CREATE_HERO_FAILURE'
export const RESET_NEW_HERO = 'RESET_NEW_HERO' 

// Update Hero
export const UPDATE_HERO = 'UPDATE_HERO'
export const UPDATE_HERO_SUCCESS = 'UPDATE_HERO_SUCCESS'
export const UPDATE_HERO_FAILURE = 'UPDATE_HERO_FAILURE'

// Delete Hero
export const DELETE_HERO = 'DELETE_HERO'
export const DELETE_HERO_SUCCESS = 'DELETE_HERO_SUCCESS'
export const DELETE_HERO_FAILURE = 'DELETE_HERO_FAILURE'

// Current offers
export const FETCH_OFFER = 'FETCH_OFFER'
export const FETCH_OFFER_SUCCESS = 'FETCH_OFFER_SUCCESS'
export const FETCH_OFFER_FAILURE = 'FETCH_OFFER_FAILURE'

// Locations
export const FETCH_LOCATION = 'FETCH_LOCATION'
export const FETCH_LOCATION_SUCCESS = 'FETCH_LOCATION_SUCCESS'
export const FETCH_LOCATION_FAILURE = 'FETCH_LOCATION_FAILURE'

// Locations
export const FETCH_LOCATIONS = 'FETCH_LOCATIONS'
export const FETCH_LOCATIONS_SUCCESS = 'FETCH_LOCATIONS_SUCCESS'
export const FETCH_LOCATIONS_FAILURE = 'FETCH_LOCATIONS_FAILURE'


Amplify.configure(aws_exports);

const url = 'http://localhost:3001'

export function validateHeroFields(props) {
  const request = fetch(url + '/items/validate/fields', { 
      method: 'post', 
      body: JSON.stringify(props)
    })
  return {
    type: VALIDATE_HERO_FIELDS,
    payload: request
  }
}

export function validateHeroFieldsSuccess() {
  return {
    type: VALIDATE_HERO_FIELDS_SUCCESS
  };
}

export function validateHeroFieldsFailure(error) {
  return {
    type: VALIDATE_HERO_FIELDS_FAILURE,
    payload: error
  };
}

export function requestLocations(request) {
  return {
    type: FETCH_LOCATIONS,
    payload: request
  }
}

export function fetchLocationsSuccess(newLocation) {
  return {
    type: FETCH_LOCATIONS_SUCCESS,
    payload: newLocation
  }
}

export function fetchLocationsFailure(error) {
  return {
    type: FETCH_LOCATIONS_FAILURE,
    payload: error
  }
}

export function fetchLocation(request) {
  return {
    type: FETCH_LOCATION,
    payload: request
  }
}

export function fetchLocationSuccess(newLocation) {
  return {
    type: FETCH_LOCATION_SUCCESS,
    payload: newLocation
  }
}

export function fetchLocationFailure(error) {
  return {
    type: FETCH_LOCATION_FAILURE,
    payload: error
  }
}

export function fetchOffer(request) {
  return {
      type: FETCH_OFFER,
      payload: request
    }
}

export function fetchOfferSuccess(newOffer) {
  return {
    type: FETCH_OFFER_SUCCESS,
    payload: newOffer
  };
}

export function fetchOfferFailure(error) {
  return {
    type: FETCH_OFFER_FAILURE,
    payload: error
  };
}

export function updateHeroSuccess(newHero) {
  return {
    type: UPDATE_HERO_SUCCESS,
    payload: newHero
  };
}

export function updateHeroFailure(error) {
  return {
    type: UPDATE_HERO_FAILURE,
    payload: error
  };
}

export function createHeroSuccess(newHero) {
  return {
    type: CREATE_HERO_SUCCESS,
    payload: newHero
  };
}

export function createHeroFailure(error) {
  return {
    type: CREATE_HERO_FAILURE,
    payload: error
  };
}

export function setHero(request) {
  return {
    type: UPDATE_HERO,
    payload: request
  }
}

export function addHero(request) {
  return {
      type: CREATE_HERO,
      payload: request
    }
}

export function deleteHeroSuccess(removedHero) {
  return {
    type: DELETE_HERO_SUCCESS,
    deletedHero: removedHero
  };
}

export function deleteHeroFailure(error) {
  return {
    type: DELETE_HERO_FAILURE,
    payload: error
  };
}

export function removeHero(request) {
  return {
      type: DELETE_HERO,
      payload: request
    }
}


export function resetNewHero() {
  return {
    type: RESET_NEW_HERO
  }
}


function requestHeros(request) {
	return {
    	type: FETCH_HEROS,
    	payload: request
    }
}

function requestHero(request) {
  return {
  	type: FETCH_HERO,
  	payload: request
  }
}

export function currentOffers(props) {
  return dispatch => {
    dispatch(fetchOffer())
    return fetch(url + '/items/offer/' + props, {
      method: "GET",
      headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(json => dispatch(fetchOfferSuccess(json)))
  }
}
export function fetchLocations() {
  return dispatch => {
    dispatch(requestLocations())
    return fetch(url+'/locations')
           .then(response => response.json())
           .then(json => dispatch(fetchLocationsSuccess(json)))
  }
}
export function fetchHeros() {
  return dispatch => {
    dispatch(requestHeros())
    return fetch(url+'/items')
          .then(response => response.json())
          .then(json => dispatch(fetchHerosSuccess(json)))  
  }
}

export function deleteHero(props) {
  return dispatch => {
    dispatch(removeHero())
    return fetch(url + '/items/removeHero/' + props, {
      method: "DELETE",
      headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(json => dispatch(deleteHeroSuccess(json)))
  }
}
export function updateHero(props){
  return dispatch => { 
    dispatch(setHero())
    return  fetch(url + '/items/updateHero/' + props.id, { 
      method: "POST",
      headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
      }, 
      body: JSON.stringify(props)
    })
    .then(response => response.json())
    .then(json => dispatch(updateHeroSuccess(json)))
  }
}

export function createHero(props) {
  return dispatch => {
    dispatch(addHero())
    return fetch(url + '/items/addHero', { 
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            }, 
            body: JSON.stringify(props)
       })
      .then(response => response.json())
      .then(json => dispatch(createHeroSuccess(json)))
  }
}

export function fetchHero(id) {
   return dispatch => {
   	  dispatch(requestHero())
   	  return fetch(url + '/items/'+id)
   	       .then(response => response.json())
   	       .then(json => dispatch(fetchHeroSuccess(json)))
   }

}
export function fetchHeroSuccess(activeHero) {
  return {
    type: FETCH_HERO_SUCCESS,
    payload: activeHero
  };
}

export function fetchHeroFailure(error) {
  return {
    type: FETCH_HERO_FAILURE,
    payload: error
  };
}

export function resetActiveHero() {
  return {
    type: RESET_ACTIVE_HERO
  }
}

export function fetchHerosSuccess(heros) {
  return {
    type: FETCH_HEROS_SUCCESS,
    payload: heros,
    receivedAt: Date.now()
  };
}

export function fetchHerosFailure(error) {
  return {
    type: FETCH_HEROS_FAILURE,
    payload: error
  };
}



