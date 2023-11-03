import React from 'react';
import { connect } from 'react-redux';
import {ageUp, ageDown} from '../action';



function Age(props){
  console.log(props.calcul)

  const onAgeUp =()=>{
    props.dispatch(ageUp())
  }
  const onAgeDown =()=>{
    props.dispatch(ageDown())
  }


  return (
    <div className="App">
      <div>
        <h1><span>{props.calcul.age}</span></h1>
        <button onClick={onAgeUp}>Age UP</button>
        <button onClick={onAgeDown }>Age DOWN</button>
      </div>
     
    </div>
  );
}

const mapStateToProps=(state)=>({
  calcul: state
})
export default connect(mapStateToProps)(Age);