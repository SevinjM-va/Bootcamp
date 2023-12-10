import {createStore} from 'redux';
const initialstate = {
  celebrities: '',
  planets : ''
}


function reducer (state = initialstate, action){
  if(action.type === "DISPATCHING_DATA_CELEBRITIES"){
    return {...state, celebrities: action.payload}
  }
  
  if(action.type === 'DISPATCHING_DATA_PLANETS'){
    return {...state, planets: action.payload}
  }
  
  return state
}

export const store = createStore(reducer)