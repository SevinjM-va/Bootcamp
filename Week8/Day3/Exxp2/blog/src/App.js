import './App.css';
import React from 'react';
import Color from './Color';
import Child from './Color';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { show: true}
  }
  deleteHeader=()=>{

    let a = this.state.show;
    a = false;
    this.setState({ show: a })
  }


  render() {
    
  return (
    <div>
      {/* <Color/> */}
      {this.state.show ? <Child/> : null}
      <button type='button' onClick={this.deleteHeader}>Deleted Header</button>

    </div>
  );
}}

export default App;
