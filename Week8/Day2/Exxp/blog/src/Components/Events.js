import React from 'react';


class Events extends React.Component{
  constructor(){
    super()
    this.state = {isToggleOn: true}
  }

  clickMe = ()=>{
    alert('I was clicked');
  }
  handleKeyDown =()=>{
    alert('The Enter key was pressed, your input is:React');
  }
  changeToggle = ()=>{
    this.setState({isToggleOn: false});
  }
  render(){
    return(
      <div>
       
        <button type='button' onClick={this.clickMe}>Click me</button>
        <br></br>
        <input type='text' placeholder='Press the ENTER key!' onKeyDown={this.handleKeyDown}></input> 
        <br></br>
        <button type='Button' onClick={this.changeToggle}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
      </div>
    )
  }
} export default Events;



