

function reducer(state, action){
  if(action.type === 'INCREASE_COUNT'){
   return {...state, count: state.count+ action.payload}
  } else if (action.type === 'DECREASE_COUNT'){
    return {...state, count: state.count-1}
  }
  return state
}

export default reducer;