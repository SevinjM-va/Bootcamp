import React from 'react';
import GarageComp from './Garage';



class CarInfo extends React.Component{
  constructor(props){
    super(props);
    this.state = { color: 'red'};
    
  }
 
  render(){
    const { carlist } = this.props;
    
    return(
      <div>
        <GarageComp garageSize = {'medium'}/>
        <h1>This is a {carlist.model}</h1>
        <h1>It's color {this.state.color}</h1>
      </div>
     
    )
  }

}export default CarInfo;
