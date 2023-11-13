import {createStore} from 'redux';

const initialState = [];

function Reducer(state=initialState, action){
  if (action.type === 'FETCHING_IMAGES'){
    // console.log('action.payload', action.payload)
    return action.payload
  }

  if(action.type ==='LOADING_ON' ){
    return true
  }
  if(action.type ==='LOADING_OFF' ){
    return false
  }
  return state;
}

export const store = createStore(Reducer)