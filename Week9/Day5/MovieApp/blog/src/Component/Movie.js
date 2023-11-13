import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import{  withRouter } from 'react-router-dom';
import{ Link } from 'react-router-dom';

const OMDbAPI = `https://www.omdbapi.com/?apikey=95ea4de7&i=`;



function Movie(props) {
  // console.log('props',props)
const [movie, setMovie] = useState('')

const id = props.match.params.id;

useEffect(()=>{
  function fetchData(){
    const urlMov = OMDbAPI + id;
    fetch(urlMov)
    .then(res=>res.json())
    .then((data)=>{
      const movieDaetails = data;
      props.dispatch({type: "FETCH_MOVIE", payload: movieDaetails})
    })
  }
  fetchData();
},[])

// console.log('movie',props.movie[0].movie)


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 card card-body">
          <img src={props.movie[0].movie.Poster} className="thumbnail" alt="Poster"></img>
        </div>
        
        <div className="col-md-8">
          <h2 className="mb-4">Harry Potter and the Order of the Phoenix</h2>
          <ul className="list-group">
            <li className="list-group-item"><strong>Genre: </strong> {props.movie[0].movie.Genre}</li>
            <li className="list-group-item"><strong>Released:</strong> {props.movie[0].movie.Released}</li>
            <li className="list-group-item"><strong>Rated:</strong> {props.movie[0].movie.Rated}</li>
            <li className="list-group-item"><strong>IMDB Rating:</strong> {props.movie[0].movie.imdbRating}</li>
            <li className="list-group-item"><strong>Director:</strong> {props.movie[0].movie.Director}</li>
            <li className="list-group-item"><strong>Writer:</strong> {props.movie[0].movie.Writer}</li>
            <li className="list-group-item"><strong>Actors:</strong> {props.movie[0].movie.Actors}</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="card card-body bg-dark my-5 text-light">
          <div className="col-md-12">
            <h3>About</h3>
            {props.movie[0].movie.Plot}
            <hr></hr>
            <Link to={{ pathname: 'https://www.imdb.com/title/'+ props.movie[0].movie.imdbID}}target="_blank" rel="noopener noreferrer" className="btn btn-primary">View on IMDB</Link>
            <Link className="btn btn-default text-light" to="/">Go Back To Search
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps=(state)=>({
  movie: state
})
export default connect(mapStateToProps)(withRouter(Movie));
