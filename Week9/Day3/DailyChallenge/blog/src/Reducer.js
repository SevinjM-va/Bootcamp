import {combineReducers, createStore} from 'redux';


const initialState = [];


function robotDetails (state= initialState,action){
  if(action.type === 'SEARCHING_DATA'){
    return action.payload
  }
  return state;
}


function loading (state=null,action){
  if(action.type === 'IS_LOADINA'){
    return true
  }
  if(action.type === 'NOT_LOADINA'){
    return false
  }
  return state;
}
const rootReducer = combineReducers({
  search: robotDetails,
  load: loading
})


export const store = createStore(rootReducer);