import React from 'react';

class Exercise3 extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }


  
  render(){
    const exper = this.props.info.map((item) => (
    <div key={item.companyName} className='container'>
      <img src='{item.logo}'  ></img>
      <div><a href='{item.url}'> {item.companyName}</a></div>
        <div>{item.roles.map((rol)=>(
          <div className='prof'>{rol.title}
            <div className='dataLoc'>
              <div>{rol.startDate}</div>
              <div>{rol.location}</div>
            </div>
            <div className='descrip'>{rol.description}</div>
            
          </div>))}
        </div>
    </div>))
      return exper
  }};
export default Exercise3;