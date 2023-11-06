import React, { useState } from 'react';
import { connect } from 'react-redux';


const OMDbAPI = `https://www.omdbapi.com/?apikey=95ea4de7&s=`


const loading = (ms = 1000)=>
 new Promise((resolve,reject) => {
  setTimeout(resolve, ms)
})


function SearchForm(props) {
// console.log('props',props.info)

  const handleSubmit=async (e)=>{
    e.preventDefault();
    // console.log(e.target)
    props.dispatch({type: 'LOADING', payload: true})
    const form = e.target;
    const formData = new FormData(form);
    const searchInputValue = formData.get('searchText');
    if (searchInputValue == null || searchInputValue == '') return;
    const urlSearch = OMDbAPI + encodeURI(searchInputValue);
    console.log(urlSearch)
    await loading();

    const fetchData = fetch(urlSearch)
    .then(res=>res.json())
    .then((data)=>{
      const movies = data.Search;
      console.log('movies',movies)
      props.dispatch({type: 'SEARCH_MOVIE', payload: movies})
      props.dispatch({type: 'LOADING', payload: false})
    });
  }
  console.log('loading axtariram',props)


  return (
    <div className='container'>
        <div className="jumbotron jumbotron-fluid mt-5 text-center">

        {/* {props.info[0].loading === 'true'? <div>loadinggg</div> :  */}
          <div className="container">
            <h1 className="display-4 mb-3">
              <i className="fa fa-search"></i> Search for a movie ,TV series ..
            </h1>
            <form onSubmit={handleSubmit} id="searchForm">
              <input type="text" className="form-control"  name="searchText" placeholder="Search Movies, TV Series ..."></input>
                <button type="submit"  className="btn btn-primary btn-bg mt-3">Search
                </button>
              </form>
            </div>
            {/* } */}
          </div>
    </div>
  );
}

const mapStateToProps=(state)=>({
  info: state,
})
export default connect(mapStateToProps)(SearchForm);
