import { combineReducers, createStore } from 'redux';

const initialState = [
  // {accountNumber: '',fsc: '', holdeName: '', amount: ''}
];
let id = initialState.length;

function transactionReducer(state = initialState, action) {
  if (action.type === 'ADD_TRANSACTIONS') {
          console.log(
            '🚀 ~ file: transactionReducer.js:12 ~ transactionReducer ~ action.payload:',
            action.payload
          );

    if (action.payload.id) {
      const tx = { ...action.payload};
      return [...state, tx];
    } else {
      const tx = { ...action.payload, id: ++id };
      return [...state, tx];
    }
  }
  if (action.type === 'DELETED_DATA') {
    return [...state.filter((item) => item.id != action.id)];
  }
  if (action.type === 'UPDATE_TRANSACTION') {
    return state.map((item) => {
      if (item.id == action.payload.id) {
        return action.payload;
      } else {
        return item;
      }
    });

  }
  return state;
}


const rootReducer = combineReducers({
  transactions: transactionReducer,

});
export const store = createStore(rootReducer);
