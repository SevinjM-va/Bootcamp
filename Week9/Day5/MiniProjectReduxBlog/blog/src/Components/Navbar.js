import React from 'react';
import{  Router, Link, Routes, Route } from 'react-router-dom';


export const Navbar =()=>{

    return (
      <div>
        <nav className='a.active'>
          <div className="nav-wrapper red darken-3">
            <a href="/" className="brand-logo">My Blog</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  };