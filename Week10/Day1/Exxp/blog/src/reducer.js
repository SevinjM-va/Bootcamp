import { createStore } from "redux";

const initialState = 
{ data: [],
  city:[],
  lang: []
};

function reducer (state = initialState, action){
  if(action.type === 'CITY_NAME'){
   return {...state, data: action.payload}
  }
  if(action.type === 'FINDING_CITY'){
    console.log('aktion',action.payload)
    return {...state, city: action.payload}
   }
  return state;
}

export const store = createStore(reducer);