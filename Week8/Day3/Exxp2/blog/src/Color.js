import React from 'react';

class Color extends React.Component{
  constructor(){
    super()
    this.state ={
      favoriteColor: 'red',
     }
    
  }
  changing=()=>{
    this.setState({favoriteColor: 'blue'})
  }

  componentDidMount(){
    this.setState({favoriteColor: 'yellow'})
  }
  componentDidUpdate(){
    console.log("after update")
    this.state ={favoriteColor: 'red'}
  }

  shouldComponentUpdate(){
    return true;
  }

  componentWillUnmount(){
    this.setState({favoriteColor: 'yellow'});
    }
 

  getSnapshotBeforeUpdate(){
    console.log("in getSnapshotBeforeUpdate");
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
// export default Color;


class Child extends React.Component{

  componentWillUnmount(){
    alert('Component is Unmounted')
  }
  
  
  render(){
    return(
      <div>
      <h1>Hello World!</h1>
      </div>
    )
  }
} export default Child;

// !!! bir file da 1 class componenti olmasi duzgun yazilis