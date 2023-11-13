import {createStore} from 'redux';

const initialState = [
  {icon: 'fa-regular fa-hand-point-up fa-rotate-90', label: 'Points', number: 3000},
  {icon: 'fa-solid fa-bolt',label: 'Lightnings', number: 6540},
  {icon: 'fa-regular fa-hand-scissors fa-rotate-90', label: 'Shakas', number: 337010},
  {icon: 'fa-regular fa-gem', label: 'Diamonds', number: 98661}
];

function Reducer (state= initialState,action){
  return state
}

export const store = createStore(Reducer)