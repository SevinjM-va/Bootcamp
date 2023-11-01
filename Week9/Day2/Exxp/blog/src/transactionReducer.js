
import { combineReducers, createStore} from 'redux';


const initialState = [
  // {accountNumber: '',fsc: '', holdeName: '', amount: ''}
]
let id = initialState.length;

function transactionReducer(state=initialState,action){
 if(action.type === 'ADD_TRANSACTIONS'){
  const tx = {...action.payload, id: ++id}
  return [...state, tx]
 } 
if (action.type === 'DELETED_DATA' ){
  return [...state.filter(item=> item.id != action.id )]
 } 
//  console.log(state)
 return state
}

function selectedTxReducer(state = null, action){
  if(action.type === 'EDITED_DATA'){
    console.log(action)
    return action.obj;
  }
  if(action.type === 'DELETED_TRANSACTION'){
    if(state?.id != action.id) return state;
   return null
  }
  if(action.type === 'RESET_SELECTED_TRANSACTION'){
   return null
  } if(action.type === 'UPDATE_TRANSACTION'){
    const stateWithoutPreviousTx = state.filter(tx => tx.id  != action.payload.id)
    return [...stateWithoutPreviousTx,action.payload]
   }
  return state;
}

const rootReducer = combineReducers({
  transactions: transactionReducer,
  selectedTx: selectedTxReducer
})
export const store = createStore(rootReducer);
