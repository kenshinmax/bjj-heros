// Fetch heroList
export const FETCH_HEROS = 'FETCH_HEROS'
export const FETCH_HEROS_SUCCESS = 'FETCH_HEROS_SUCCESS';
export const FETCH_HEROS_FAILURE = 'FETCH_HEROS_FAILURE';
export const RESET_HEROS = 'RESET_HEROS';

// Fetch hero
export const FETCH_HERO = 'FETCH_HERO';
export const FETCH_HERO_SUCCESS = 'FETCH_HERO_SUCCESS';
export const FETCH_HERO_FAILURE = 'FETCH_HERO_FAILURE';
export const RESET_ACTIVE_HERO = 'RESET_ACTIVE_HERO';
export const RESET_DELETED_HERO = 'RESET_DELETED_HERO'

// Create Hero
export const CREATE_HERO = 'CREATE_HERO'
export const CREATE_HERO_SUCCESS = 'CREATE_HERO_SUCCESS'
export const CREATE_HERO_FAILURE = 'CREATE_HERO_FAILURE'
export const RESET_NEW_HERO = 'RESET_NEW_HERO' 

const url = 'http://5a3a8e1ede64a0001262774a.mockapi.io/api/v1'

export function createHero(props, tokenFromStorage) {
  const request = fetch(url + '/items/',{
    method: 'post',
    body: JSON.stringify(props)
  }).then(function(response) {
    return response.json()
  }).then(function (data) {
    console.log('got data', data)
  })

  return {
    type: CREATE_HERO,
    payload: request
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

function fetchHero(id) {
   return dispatch => {
   	  dispatch(requestHero())
   	  return fetch(url + '/items/'+id)
   	       .then(response => response.json())
   	       .then(json => dispatch(fetchHeroSuccess))
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


export function fetchHeros() {
	return dispatch => {
	  dispatch(requestHeros())
	  return fetch(url+'/items')
          .then(response => response.json())
          .then(json => dispatch(fetchHerosSuccess(json)))  
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



