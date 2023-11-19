import {createStore} from 'redux';
const initialState={
    VehName: [],
    HomePlanet: [],
    PilotName: []
  }

function reducer (state=initialState, action){
  
  return state
}

export const store = createStore(reducer);