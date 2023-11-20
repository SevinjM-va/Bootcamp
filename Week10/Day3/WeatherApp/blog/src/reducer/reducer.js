import {createStore} from 'redux';

const initialState = null;
// ! state i default olaraq null qoymagi tovsiyye etmezdim

function reducer (state=initialState, action){
  return state
}

export const store = createStore(reducer);