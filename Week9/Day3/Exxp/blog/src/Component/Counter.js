import React from 'react';
import { connect } from 'react-redux';

const Counter =(props)=>{
// const [ num, setNum] = useState(0)
console.log(props.calcul.count)

  const addition=()=>{
    props.dispatch({type: 'INCREASE_COUNT',payload: 1})
  }
  
  const deduction=()=>{
    props.dispatch({type: 'DECREASE_COUNT', payload: 1})
  }

  const incrementIfOdd=()=>{
    props.dispatch({type: 'INCREMENT_IF_ODD'})
  }

  const incrementAsync= ()=>{
    setTimeout(()=>{
      props.dispatch({type: 'INCREMENT_ASYNC'})
    },1000)
    
  }
// !!! async incrementi action icerisinde istifade etmek lazim idi
// ! daha sonra middleware ile onu dispatch etmek
// !! store js de ise apply middleware istifade etmek

  return(
    <div className='container'>
      <p>Clicked: {props.calcul.count} times </p>
      <button onClick={addition}>+</button>
      <button onClick={deduction}>-</button>
      <button onClick={incrementIfOdd} >Increment if odd</button>
      <button onClick={incrementAsync} >Increment async</button>
    </div>
  )
}

const mapStateToProps=(state)=>({
  calcul: state
})

export default connect(mapStateToProps)(Counter);