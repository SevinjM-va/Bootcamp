import React from 'react'
import './App.css';
import Simpleform from './Component/form';

class App extends React.Component {
  constructor(){
    super()
    this.state = {}
  }



  render(){
    return (
      <div> 
       <Simpleform page1={this.state}/>
      </div>
    );
  }
}

export default App;
