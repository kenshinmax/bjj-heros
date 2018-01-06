export const FETCH_REQUESTED = 'heros/FETCH_REQUESTED'

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

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_REQUESTED':
      return {
        ...state
      }
    default:
      return state
  }
}