import React from 'react';

class Phone extends React.Component{
  constructor(){
    super()
    this.state = {
      brand: "Samsung",
      model: "Galaxy S20",
      color: "black",
      year: 2020
    }
  }

  changeColor=()=>{
    this.setState({color: 'blue'});
  }

  render() {
    return(
      <div>
        <h1>My phone is {this.state.brand}</h1>
        <h4>It is a {this.state.color} {this.state.model} from {this.state.year}</h4>
        <button type='text' onClick={this.changeColor}>Change color</button>
      </div>
      )
  }
} export default Phone;