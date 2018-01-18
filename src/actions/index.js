//Fetch hero
export const SELECT_HERO = 'SELECT_HERO';
export const FETCH_HERO = 'FETCH_HERO';
export const FETCH_HERO_SUCCESS = 'FETCH_HERO_SUCCESS';
export const FETCH_HERO_FAILURE = 'FETCH_HERO_FAILURE';
export const RESET_ACTIVE_HERO = 'RESET_ACTIVE_HERO';

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