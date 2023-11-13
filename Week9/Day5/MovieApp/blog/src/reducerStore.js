import { createStore} from 'redux';

const initialState = [
  {
  movies: [],
  loading: false,
  movie: []
}
]

function reducer (state = initialState,action){
  if(action.type === 'SEARCH_MOVIE'){
    // console.log("action payload",action.payload);
    return [...state, state[0].movies = action.payload];
  }
  if(action.type === 'FETCH_MOVIE'){
    // console.log('actionnn',action.payload)
    return [...state, state[0].movie = action.payload];
  }
  if(action.type === 'LOADING'){
    return [...state, state[0].loading === action.payload];
  }
  return state
}

export const store = createStore(reducer);