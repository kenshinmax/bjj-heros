// Fetch heroList
export const FETCH_HEROS = 'FETCH_HEROS'
export const FETCH_HEROS_SUCCESS = 'FETCH_HEROS_SUCCESS';
export const FETCH_HEROS_FAILURE = 'FETCH_HEROS_FAILURE';
export const RESET_HEROS = 'RESET_HEROS';

// Fetch hero
export const SELECT_HERO = 'SELECT_HERO';
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

const url = 'http://5a3a8e1ede64a0001262774a.mockapi.io/api/v1/items'

function requestHeros(request) {
	return {
    	type: FETCH_HEROS,
    	payload: request
    }
}
export function fetchHeros() {
	return dispatch => {
	  dispatch(requestHeros())
	  return fetch(url)
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

export function createHero (props) {
	const hero = {
		id: 1,
		name: 'new hero'
	}
	return {
		type: CREATE_HERO,
		payload: hero	
	}
}

export function createPostSuccess(newHero) {
  return {
    type: CREATE_HERO_SUCCESS,
    payload: newHero
  };
}

export function createPostFailure(error) {
  return {
    type: CREATE_HERO_FAILURE,
    payload: error
  };
}

export function resetNewPost() {
  return {
    type: RESET_NEW_HERO
  }
}

// Actions
// selected hero
export function selectHero(hero) {
	return {
		type: SELECT_HERO,
		hero
	}
}
// fetch hero by id
export function fetchHero(id) {
	return {
		type: FETCH_HERO,
		id
	}
}