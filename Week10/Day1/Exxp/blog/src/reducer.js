import { createStore } from "redux";

const initialState = 
{ data: [],
  city:'',
  lang: []
};

function reducer (state = initialState, action){
  if(action.type === 'CITY_NAME'){
   return {...state, data: action.payload}
  }
  if(action.type === 'FINDING_CITY'){
    return {...state, city: action.payload}
   }
  return state;
}

// !! favorit city hissesi yoxdur

export const store = createStore(reducer);