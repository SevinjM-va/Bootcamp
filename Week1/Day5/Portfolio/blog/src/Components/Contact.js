import React from 'react';


export const Contact =()=>{
  return(
    <div className='mainContainer'>
      <div className='contactContainer'>
        <h3>CONNECT WITH ME</h3>
        <hr></hr>
        <p>Thank you for your interest! Feel free to reach out through any of the following channels.</p>
        <p>
        <i class="fa-solid fa-envelope"></i>
          Mammadovasevindj9@gmail.com
        </p>
        <p>
        <i class="fa-solid fa-phone"></i>
          +994558570842
        </p>
        <a href='https://www.linkedin.com/in/sevinj-mammadova-47574316a/' target='blank'>
        <button className='linkedinLink'>View in Linkedin<i class="fa-regular fa-eye"></i></button>
        </a>
        <a href='https://github.com/SevinjM-va?tab=repositories' target='blank' >
        <button className='githubLink'>View in GitHub<i class="fa-regular fa-eye"></i></button>
        </a>
      </div>
     
    </div>
  )}