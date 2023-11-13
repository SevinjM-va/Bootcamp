import { Link, Navigate, useNavigate } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import {createClient} from 'pexels';
import { client } from '../API_Key';



const Navbar=(props)=>{
  console.log('proppppssssssssss', props.info)
  const [photo, setPhotos] = useState('');
  const [searchName, setsearchName ] = useState('');
  const [changebtn, setChangebtn] = useState('');
  const navigate = useNavigate();

  const mountainbtn=(e)=>{
    e.preventDefault();
    const btnValue = e.target.innerHTML;
    if(btnValue === 'Mountain'){setsearchName(btnValue)}
    if(btnValue === 'Beaches'){setsearchName(btnValue)}
    if(btnValue === 'Birds'){setsearchName(btnValue)}
    if(btnValue === 'Food'){setsearchName(btnValue)}
  }
  console.log('nammmmmmm', searchName)

  useEffect(()=>{
    props.dispatch({type: 'LOADING_ON'})
     setTimeout(()=>{
         const fetchImg = async()=>{
            client.photos.search({query: searchName ,per_page:24}).then((res)=>{props.dispatch({type: 'FETCHING_IMAGES',payload: res.photos})})
           }
           fetchImg()
           props.dispatch({type: 'LOADING_OFF'})
     },500)
 },[searchName])
 
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    const etarget = e.target;
    const formData =  new FormData(etarget)
    const searchInput = formData.get('search');
    navigate('/'+ searchInput);
    setsearchName(searchInput)
  }
  const changeBtn=(e)=>{
    setChangebtn(e.target.value)
  }

  return(
      <div className='container'>
        <div className='header'>
          <h1>SnapShot</h1>
          <form onSubmit={handleSubmit}>
            <input className='search' name='search' type='text' placeholder='Search...' onChange={changeBtn}></input>
            <button className='submitInput' style={{backgroundColor: changebtn? '#051c33' : ''}} type='submit' ><i style={{color: changebtn? 'white' : ''}}className="fa-solid fa-magnifying-glass"></i></button>
          </form>
        </div>

        <div className='button_container'>
          <ul>
            <li onClick={mountainbtn} name ='mountain'><Link to="/mountain">Mountain</Link></li>
            <li onClick={mountainbtn} name ='beaches'><Link to="/beaches">Beaches</Link></li>
            <li onClick={mountainbtn} name ='birds'><Link to="/birds">Birds</Link></li>
            <li onClick={mountainbtn} name ='food'><Link to="/food">Food</Link></li>
          </ul>
        </div>
        <h2>{searchName.charAt(0).toUpperCase()+searchName.slice(1)} Pictures</h2>
      </div>
  )
}
const mapStateToProps=(state)=>({
  info: state
})
export default connect(mapStateToProps)(Navbar);