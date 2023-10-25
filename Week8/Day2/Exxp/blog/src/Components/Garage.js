import React from 'react';

class GarageComp extends React.Component{
  constructor (props){
    super (props)
    this.state ={ garageSize: 'small'}
  }

  render(){
    return(
      <div>
        <h1>Who lives in my {this.props.garageSize} Garage?</h1>
      </div>
    )
  }
}
export default GarageComp;