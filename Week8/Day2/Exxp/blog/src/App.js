import './App.css';
import CarInfo from './Components/Car'
import React from 'react';
import Events from './Components/Events';
import Phone from './Phone';
import Color from './Color';

// Ex1
// const carinfo = {
//   name: "Ford", 
//   model: "Mustang"
// };

class App extends React.Component {
  render() {
    
  return (
    <div>
     {/* Ex1
      <CarInfo carlist = {carinfo}/> <Events/>  */}
      {/* event komponentini bu sekilde oturmek uygun deyil
      eger eventi car komponentinin icerisinde cagirmaq isteyirsense
      birbasa hemin car compnentinin icerisinde import ede bilersen */}

      {/* Ex3
      <Phone/> */}

      {/* Ex 5
      <Color/> */}

    </div>
  );
}}

export default App;
