import { Link, Navigate, useNavigate } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import {createClient} from 'pexels';
import { client } from '../API_Key';



const Navbar=(props)=>{
  const [photo, setPhotos] = useState('');
  const [name, setName ] = useState('');
  const [changebtn, setChangebtn] = useState('');
  const navigate = useNavigate();
  let query;

  const mountainbtn=(e)=>{
    e.preventDefault();
    const btnValue = e.target.innerHTML;
    if(btnValue === 'Mountain'){setName(btnValue)}
    if(btnValue === 'Beaches'){setName(btnValue)}
    if(btnValue === 'Birds'){setName(btnValue)}
    if(btnValue === 'About'){setName(btnValue)}
  }
  useEffect(()=>{
    props.dispatch({type: 'LOADING_ON'})
     setTimeout(()=>{
         const fetchImg = async()=>{
            client.photos.search({query: 'Mountain',per_page:24}).then(res=>setPhotos(res.photos))
           }
           fetchImg()
           props.dispatch({type: 'LOADING_OFF'})
     },1000)
 }, [])
 
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    const etarget = e.target;
    const formData =  new FormData(etarget)
    const searchInput = formData.get('search');
    navigate('/'+ searchInput);
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
        <h2>{name} Pictures</h2>
      </div>
  )
}
const mapStateToProps=(state)=>({
  info: state
})
export default connect(mapStateToProps)(Navbar);