import React from 'react';
import { increaseCount, decreaseCount} from '../action'
import store from '../store';

function Counter(){
  const { count } = store.getState();

  function increaseCount(){
    store.dispatch({type: 'INCREASE_COUNT', payload: 5})
  }
  function decreaseCount(){
    store.dispatch({type: 'DECREASE_COUNT'})
    console.log(count)
  }
    return(
      <div>
         <button onClick={increaseCount}>+</button>
          <p>{count}</p>
          <button onClick={decreaseCount}>-</button>
      </div>
    )
  };

export default Counter;