import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { render } from 'react-dom';

function Carousellist (){
    return (
      <div className='container'>
      <Carousel  autoPlay>
        <div>
          <img src='https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg'></img>
          <p className="Hong Kong"></p>
        </div>
        <div>
          <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp"></img>
          <p className="Macao"></p>
        </div>
        <div>
          <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp"></img>
          <p className="Japan"></p>
        </div>
        <div>
          <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp"></img>
            <p className="Las Vegas"></p>
        </div>
      </Carousel>
      </div>
    )
  }
  export default Carousellist;