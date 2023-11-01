
import React from 'react';
import { connect } from 'react-redux'
import { selectMovie } from '../movieActions';


function MovieList (props){

  const showDetails = (title)=>{
   
    const selectedM = props.movies.find(item=> item.title === title);
     props.dispatch(selectMovie(selectedM))


  }
  return(
    <div className='container'>
       <h1>Movie List</h1>
          {props.movies.map((movie)=>(
          <div key={movie.title} className='mini-container'>
            <p>{movie.title}</p>
            <button  onClick={()=>showDetails(movie.title)} >details</button>
           
            </div>
          ))}
    </div>
  )
};
const mapStateToProps = (state)=>({
  movies: state.movies,
})
export default connect(mapStateToProps)(MovieList);