import React from 'react';
import './App.css';
import {Snapshot} from './Component/Snapshot';
import { Gallery } from './Component/Gallery';
// import { createClient } from 'pexels';
import { Routes, Route, Link } from "react-router-dom";



// const client = createClient('4MaxbIrInFUX4BeJSPUJgp8PxPHbvEBuiVFSCa6YHn0Ls6AJniVpAliB');
// const query = 'Nature';



function App () {
    return (
        <div className='container'>
            <div className='header'>
              <h1>SnapShot</h1>
              <input type='text' placeholder='Search...'></input>
            </div>


            <div className='button_container'>
          <ul>
            <li><Link to="/"> SnapScout</Link></li>
            <li><Link to="/mountain">Mountain</Link></li>
            <li><Link to="/beaches">Beaches</Link></li>
            <li><Link to="/birds">Birds</Link></li>
            <li><Link to="/food">Food</Link></li>
          </ul>
          {/* <Routes>
            <Route exact path = '/' element={<App/>}/>
            <Route path = '/mountain' element={<Gallery/>}/>
            <Route path = '/beaches' element={<Snapshot/>}/>
            <Route path = '/birds' element={<Snapshot/>}/>
            <Route path = '/food' element={<Snapshot/>}/>
          </Routes> */}
          </div>
        </div>
    );
  }

export default App;
