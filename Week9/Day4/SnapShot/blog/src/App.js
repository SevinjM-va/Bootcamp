import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter, Switch } from 'react-router-dom';
import Mountain from './Component/Mountain';
import Beaches from './Component/Beaches';
import Birds from './Component/Birds';
import Food from './Component/Food';
import { client } from './API_Key';
import { connect } from 'react-redux';


function App (props) {
  const [photo, setPhotos] = useState('');

    return (
      <div className='container'>
        <Navbar/>
        {props.info === true ? <div><i className="fa-solid fa-spinner fa-spin-pulse"></i></div> : 
          <Routes>
            <Route exact path='/:mountain_id' element={<Mountain/>}/>
            <Route path='/beaches' element={<Beaches/>}/>
            <Route path='/birds' element={<Birds/>}/>
            <Route path='/food' element={<Food/>}/>
          </Routes>}
     </div>
       
    );
  }

  const mapStateToProps=(state)=>({
    info: state
  })
  export default connect(mapStateToProps)(App);
