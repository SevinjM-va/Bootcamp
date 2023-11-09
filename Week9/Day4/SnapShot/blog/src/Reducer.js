import {createStore} from 'redux';

const initialState = [];

function Reducer(state=initialState, action){
  if(action.type ==='LOADING_ON' ){
    console.log('true')
    return true
  }
  if(action.type ==='LOADING_OFF' ){
    console.log('false')
    return false
  }
  return state;
}

export const store = createStore(Reducer)