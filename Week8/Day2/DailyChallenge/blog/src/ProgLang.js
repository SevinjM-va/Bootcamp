import React from 'react';

class Language extends React.Component{
  constructor(){
    super()
    this.state = {
      languages: [{name: "Php", votes: 0},
      {name: "Python", votes: 0},
      {name: "JavaSript", votes: 0},
      {name: "Java", votes: 0}]}
  };

  phpFunc=()=>{
    this.setState = ({languages:[0].votes + 1});
    // burada alinmir 
    console.log(this.setState)
    
  }

  render(){
    return(
      <div className='container'>
        <div className='div1'>
          <p>{this.state.languages[0].votes}</p>
          <p>{this.state.languages[0].name}</p>
          <a onClick={this.phpFunc}>Click Here</a>
        </div>
        <div className='div2'>
          <p>{this.state.languages[1].votes}</p>
          <p>{this.state.languages[1].name}</p>
          <a onClick={this.pythonFunc}>Click Here</a>
        </div>
        <div className='div3' >
          <p>{this.state.languages[2].votes}</p>
          <p>{this.state.languages[2].name}</p>
          <a onClick={this.javaScriptFunc}>Click Here</a>
        </div>
        <div className='div3'>
          <p>{this.state.languages[3].votes}</p>
          <p>{this.state.languages[3].name}</p>
          <a onClick={this.javaFunc}>Click Here</a>
        </div>
      </div>
    )
  }
}
 export default Language;