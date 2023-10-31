import React from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../movieActions';

function MovieDetails (props){
console.log(props.selectedMovie)
  return(
    <div>
      <h1>Movie</h1>
      {props.selectedMovie ?
          <div>
            <p>Title: {props.selectedMovie?.title}</p>
            <p>Realise Date:{props.selectedMovie?.releaseDate}</p>
            <p>Rating: {props.selectedMovie?.rating}</p>
      </div>: ''}
    </div>
  )
}
const mapStateToProps = (state)=>({
  selectedMovie: state.selectedMovie
})

export default connect(mapStateToProps)(MovieDetails);


