import React from 'react';

class BuggyCounter extends React.Component{
  constructor(props){  
    super(props)
    this.state = {counter: 0}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick=()=>{
    let count = this.state.counter;
    count++;
   
      this.setState ({counter: count})
     
  }

  render(){
    if (this.state.counter == 5) {
      throw new Error('Limiti aşdınız')
    }
    return(
      <div onClick={this.handleClick}>{this.state.counter}</div>
    )
  }
} export default BuggyCounter;


