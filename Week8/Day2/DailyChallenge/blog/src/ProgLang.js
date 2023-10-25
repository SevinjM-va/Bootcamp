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
    this.setState = { languages: [0].votes + 1 };
    // burada alinmir

    // !!! evvelki statei yadda saxlayaraq onun uzerinde deyisiklik etmek ucun
    // !!! set state icerisinde arrow func istifade edirik
    // !!! arrow func parametrine state in deyeri dusur
    // (state)=>{return state+1} numune syntax

    // !!! ve ya option 2
    //   let newLanguages = [...this.state.languages];
    // newLanguages[i].votes++;

    // this.setState({ languages: newLanguages });
    // console.log(this.setState);
    // !!!
  }

  // !!! elave olaraq her birine ayrica func yazmaq yerine  artirmaq ucun umumi func yazib icerisine parametr oturub ferqli call etsek daha duzgun olar

  render(){
    return(
      <div className='container'>
        {/* !!! mapden istifade ede bilersen her bir dil ucun componentlerin eynidi */}
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