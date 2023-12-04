import React from 'react';
import {  Link } from "react-router-dom";
import linkedin from '../Img/linkedin.svg';
import facebook from '../Img/facebook.svg';
import youtube from '../Img/linkedin.svg';
import github from '../Img/github.svg';
import img1 from '../Img/finalProject/img1.jpg';
import img2 from '../Img/movieApp/img1.jpg';

export const Home =()=>{
  return(
    <div>
      <section id="left-nav">
      <div class="icon-container">
        <a href="https://www.linkedin.com/in/sevinj-mammadova-47574316a/">
          <img class="icon" src={linkedin} alt="LinkedIn Profile"/>
        </a>
        <img class="icon" src={facebook} alt=""/>
        <a href="https://www.youtube.com/@mammadovasevinj">
        <img class="icon" src={youtube} alt=""/></a>
        <a href="https://github.com/SevinjM-va?tab=repositories">
        <img class="icon" src={github} alt=""/></a>
      </div>
    </section>

    <main id="section-1">
      <div class="header">
        <h1 class="heading">HEY, I'M SEVINJ MAMMADOVA</h1>
        <p class="headerp"> A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
        <button>PROJECTS</button>
      </div>
    </main>

    
    <section class="sections" id="section-2">
      <div class="aboutme">
        <h1 class="abouthead">About me</h1>
          <p class="aboutp">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology </p>
      </div>

      <div class="gettoknowme-myskills">
        <div class="gettoknowme">
          <h3>Get to know me!</h3>
            <p class="gettoknowmep">
              I'm a <b>Frontend Web Developer</b> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <b>Projects</b>
            </p> 
            <p class="gettoknowmep">
              I also like sharing content related to the stuff that I have learned over the years in <b>Web Development</b> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a href="https://www.linkedin.com/in/sevinj-mammadova-47574316a/">Linkedin</a> where I post useful content related to Web Development and Programming
            </p>
            <p class="gettoknowmep">
              I'm open to <b>Job</b> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <b>contact</b> me.
            </p>
            <Link to='/contact'>
              <button>CONTACT</button>
            </Link>
        </div>

        <div class="myskills">
          <h3>My Skills</h3>
            <div class="button-container">
              <p class="skills">HTML</p>
              <p class="skills">CSS</p>
              <p class="skills">JavaScript</p>
              <p class="skills">React</p>
              <p class="skills">Redux</p>
              <p class="skills">SQL</p>
              <p class="skills">GIT</p>
              <p class="skills">Github</p>
              <p class="skills">Terminal</p>
            </div>
        </div>
      </div>
    </section>

    <section class="sections" id="section-3">
      <div class="aboutme">
        <h1 class="abouthead">Projects</h1>
          <p class="aboutp">Here you will find my latest projects </p>
      </div>

      <div class="project1">
        <div class="projectimgDiv" >
          <img class="project2img" src={img1} alt=""/>
        </div>
        <div className='detail'>
          <h3>SeeFoo-Food Delivery</h3>
            <p class="project1p">
            Crafted an Food Delivery website useing React.js with dinamic galeries. I utilized React.js and Node.js in the development of a food delivery website. The site features various restaurants from which users can choose their preferred meals. Each restaurant has a dedicated menu page displaying available food items. User data for login and sign-up processes are stored in a PostgreSQL database. Additionally, I have implemented a system to ensure that all orders are accurately recorded in the database.  
            </p>
            <a href='https://github.com/SevinjM-va/My_Project/tree/main/FoodDelivery' target='blank'>
            <button >View in GitHub<i class="fa-regular fa-eye"></i></button>
            </a>
        </div>
      </div>

      <div class="project2">
        <div  class="projectimgDiv" >
          <img class="project2img" src={img2} alt=""/>
        </div>
        <div className='detail'>
          <h3>Movie App</h3>
            <p class="project1p">
              Crafted an Food Delivery website useing React.js with dinamic galeries. I utilized React.js and Node.js in the development of a food delivery website. The site features various restaurants from which users can choose their preferred meals. Each restaurant has a dedicated menu page displaying available food items. User data for login and sign-up processes are stored in a PostgreSQL database. Additionally, I have implemented a system to ensure that all orders are accurately recorded in the database.
            </p>
            <a href='https://github.com/SevinjM-va/My_Project/tree/main/FoodDelivery' target='blank'>
            <button >View in GitHub<i class="fa-regular fa-eye"></i></button>
            </a>
        </div>
      </div>

      <div class="project3">
        <div  class="projectimgDiv">
          <img class="project3img" src="./Img/foodDeliv.jpg" alt=""/>
        </div>
        <div className='detail'>
          <h3>SeeFoo-Food Delivery</h3>
            <p class="project1p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aspernatur nihil ipsa recusandae, ipsum illum ab unde qui sapiente provident magni obcaecati commodi voluptatibus esse harum, et numquam dicta .
            </p>
            <a href='https://github.com/SevinjM-va/My_Project/tree/main/FoodDelivery' target='blank'>
            <button >View in GitHub<i class="fa-regular fa-eye"></i></button>
            </a>
        </div>
      </div>
    </section>

    <section class="sections" id="section-4">
      <div class="aboutme">
        <h1 class="abouthead">CONTACT</h1>
          <p class="aboutp">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology </p>
      </div>
    

      <div class="form-container">
        <form action="">
          <label for="">Name</label>
          <input type="text" placeholder="Enter Your Name"/>
          <label for="">Email</label>
          <input type="email" placeholder="Enter Your Email"/>
          <label for="">Message</label>
          <textarea name="" id="" cols="30" rows="10" placeholder="Enter Your Email"></textarea>
          <button>SUBMIT</button>
        </form>
      </div>
    </section>
    
    </div>
  )}