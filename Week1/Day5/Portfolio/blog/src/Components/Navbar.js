import React from 'react';
import photo from '../Img/SEVINJ.jpg'
import {  Link } from "react-router-dom";

export const Navbar =()=>{
  return(
    <header class="headcont">
      <nav class="container">
        <div class="navbar-container1">
          <img class="profilimg" src={photo} alt=""/>
          <h3 class="namesurname">SEVINJ MAMMADOVA</h3>
        </div>

        <div class="navbar-container2">
          <ul>
            <li><Link to='/'><a href="#section-1">HOME</a></Link></li>
            <li><a href="#section-2">ABOUT</a></li>
            <li><a href="#section-3">PROJECTS</a></li>
            <li><Link to='/contact'>CONTACT</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}