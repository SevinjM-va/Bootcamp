import React from 'react';

class Exercise1 extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    const display = this.props.info.map((item) => (
      <li key={item}>{item}</li>))
      return display
  }
}
export default Exercise1;