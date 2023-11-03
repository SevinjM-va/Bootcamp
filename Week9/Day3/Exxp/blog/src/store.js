import {createStore} from 'redux';

const initialValue = {count: 0};

function calcul (state = initialValue, action){
   if (action.type === 'INCREASE_COUNT'){
    console.log('payload',action.payload) 
    return {...state, count: state.count + action.payload}
  } 
  if (action.type === 'DECREASE_COUNT'){
    return {...state, count: state.count - action.payload}
  }
  if (action.type === 'INCREMENT_IF_ODD'){
    if(state.count % 2 === 1){
      return {...state, count: state.count - 1}
    }
  }
  if (action.type === 'INCREMENT_ASYNC'){
    return {...state, count: state.count + 1}
  }
  return state
}

export const store = createStore(calcul);