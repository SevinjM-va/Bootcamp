import {createStore} from 'redux';

const initialState = null;

function reducer(state = initialState, action){
  return state
}

export const store = createStore(reducer);