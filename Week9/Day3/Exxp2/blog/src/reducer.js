
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const initialState = {age: 20};

function reducer (state, action){
  if(action.type === "AGE_UP"){
    return {...state, age: state.age + 1}
  }
  if(action.type === "AGE_DOWN"){
    return {...state, age: state.age - 1}
  }
 return state
}

const middlewareEnhancer = applyMiddleware(thunk);

// function logAction (state, action){
//   return state
// }
export const store = createStore(reducer,initialState,middlewareEnhancer);