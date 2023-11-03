import React from 'react';
import { connect } from 'react-redux';
import {logAction} from '../action';



class Age extends React.Component{

  constructor(props){

    super(props)
    this.state = {}
  }

  onAgeUp =()=>{
    this.props.changeAge('up')
  }
  onAgeDown =()=>{
    this.props.changeAge('down')
  }

  render(){
  return (
    <div className="App">
      <div>
        <h1><span>{this.props.calcul.age}</span></h1>
        <button onClick={this.onAgeUp}>Age UP</button>
        <button onClick={this.onAgeDown }>Age DOWN</button>
      </div>
     
    </div>
  );
}}

const mapStateToProps=(state)=>({
  calcul: state
})

const mapDispatchToProps=(dispatch)=>({
  changeAge: (param)=>dispatch(logAction(param))
})
export default connect(mapStateToProps,mapDispatchToProps)(Age);