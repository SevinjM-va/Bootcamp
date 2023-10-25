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

  vote=(index)=>{
    let langArr = [...this.state.languages];
    langArr[index].votes++;
    console.log(index)
    this.setState({languages: langArr})

  }

  render(){
    return(
      <div className='container'>
          {this.state.languages.map((item,index) => (
              <div className='div1' key={index}>
                <p>{item.votes}</p>
                <p>{item.name}</p>
                <a onClick={this.vote.bind(this,index)}>Click Here</a>
            </div>
            )
        )}
      </div>
    )
  }
}
 export default Language;