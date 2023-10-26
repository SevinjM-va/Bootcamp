import React from 'react';

class Exercise2 extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }


  
  render(){
    const skills = this.props.info.map((item) => (
      <ul key={item.Area}>{item.Area}
        <li>{item.SkillSet.map((item)=>(<li>{item.Name}</li>))}</li>
      </ul>
      ))
      return skills
  }};
export default Exercise2;