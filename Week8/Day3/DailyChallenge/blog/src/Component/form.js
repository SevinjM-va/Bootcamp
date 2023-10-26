import React from 'react';

class Simpleform extends React.Component{
  constructor(props){
    console.log(props)
    super(props)
    this.state= { 
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      destination: '',
      nutsFree: 'No',
      lactoseFree: 'No',
      vegan: 'No'
    }
  }

  letsChange = event => {

    console.log(event.target.name)
   let inputName = event.target.name;
   let inputValue = event.target.value;
   this.setState({[inputName]:inputValue})
   console.log(this.state)
    console.log(event.target.value)
};

changeInputValue = (event) => {
  event.preventDefault()

}

  render(){
    return (
      <div className='container'>
        <h1>Simple form</h1>
        <form>
          <input className='text1' name='firstName' id='input1' type='text' placeholder='First Name' value={this.state.firstName} onChange={this.letsChange}></input>
          <br></br>
          <input  className='text2' name='lastName' id='input2' type='text' placeholder='Last Name' value={this.state.lastName} onChange={this.letsChange}></input>
          <br></br>
          <input className='text3' name='age' id='input3' type='number' placeholder='Age' value={this.state.age} onChange={this.letsChange} ></input>
          <br></br>
          
          <br></br>
          <input type="radio" name='gender' id='gender1'value='male' onChange={this.letsChange} ></input>
          <label htmlFor="male">Male</label>
          <br></br>
          <input type="radio" name='gender' id='gender2' value='female' onChange={this.letsChange}></input>
          <label htmlFor="male">Female</label>
          <br></br>
          <label>Select your destination</label>
          <br></br>
          <select name='destination' onChange={this.letsChange} id='op2'>
            <option>--Please Choose a destination--</option>
            <option  value='Thailand'  id='op1'>Thailand</option>
            <option name='destination' value='Japan' >Japan</option>
            <option name='destination' value='Brazil' >Brazil</option>
          </select>
          <br></br>
          <br></br>

          <label>Dietary restrictions</label>
          <br></br>
          <input type="checkbox" name='nutsFree' value= 'Yes' id='nutsfree' onChange={this.letsChange}></input>
          <label>Nuts free</label>
          <br></br>
          <input type="checkbox" name='lactoseFree' value= 'Yes'id='lactosefree' onChange={this.letsChange}></input>
          <label>Lactose free</label>
          <br></br>
          <input type="checkbox"name='vegan' value= 'Yes' id='vegan' onChange={this.letsChange}></input>
          <label>Vegan</label>
          <br></br>

          <input className='submitbtn' type='submit'onClick={this.changeInputValue} ></input>
        </form>
        <br></br>
        <div className='container2' id='container2'>
          <h>Entered information:</h>
          <p>Your name:{this.state.firstName} {this.state.lastName}</p>
          <p>Your age:{this.state.age} </p>
          <p>Your gender: {this.state.gender}</p>
          <p>Your destination: {this.state.destination}</p>
          <p>Your dietary restrictions:</p>
          <p>**Nuts free : {this.state.nutsFree}</p>
          <p>**Lactose free : {this.state.lactoseFree}</p>
          <p>**Vegan meal : {this.state.vegan}</p>

      </div>
      </div>
    );
  }
 
} export default Simpleform;
