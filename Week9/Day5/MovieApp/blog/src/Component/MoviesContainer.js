import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import{ Link } from 'react-router-dom';

const Moviescontainer= (props)=>{
  console.log('cardprop',props.info)
  return(
    <div className='container'> 
       <div  className='containerCard'>
      {props.info[0]? props.info[0].movies.map(item=>{
        return (
            <div key={item.imdbID} className="card card-body bg-dark text-center h-100">
              <img className="w-100 mb-2" src={item.Poster}  alt="Movie Cover"></img>
              <h5 className="text-light card-title">{item.Title} - {item.Year}</h5>
              <Link className="btn btn-primary" to={`/movie/${item.imdbID}`}>Movie Details
              <i className="fas fa-chevron-right"></i>
              </Link>
            </div>   
        )
      }) : ''}
       </div>
    </div>
  )
}

const mapStateToProps=(state)=>({
  info: state
})
export default connect(mapStateToProps)(Moviescontainer);