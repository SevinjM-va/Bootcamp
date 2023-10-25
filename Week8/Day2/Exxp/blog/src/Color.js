import React from 'react';

class Color extends React.Component{
  constructor(){
    super()
    this.state ={favoriteColor: 'red'}
    
  }
  changing=()=>{
    this.setState({favoriteColor: 'blue'})
  }
  render (){
    return(

      <div>
        <h1>My favourite Color is {this.state.favoriteColor}</h1>
        <button type='button' onClick={this.changing}>Change</button>
      </div>
    )
  }
}
export default Color;