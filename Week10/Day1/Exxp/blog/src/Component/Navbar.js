import React, { useEffect, useRef, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import {createClient} from 'pexels';
import { connect } from 'react-redux';

const API_Key='lMpe61ouqWnEg9fMOOGvAVTlenGK0tkU';

const API = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=	lMpe61ouqWnEg9fMOOGvAVTlenGK0tkU&q=`

const API_2 ='http://dataservice.accuweather.com/currentconditions/v1/'

const testData = [
  {
      "Version": 1,
      "Key": "27103",
      "Type": "City",
      "Rank": 20,
      "LocalizedName": "Baku",
      "Country": {
          "ID": "AZ",
          "LocalizedName": "Azerbaijan"
      },
      "AdministrativeArea": {
          "ID": "BA",
          "LocalizedName": "Baku"
      }
  },
  {
      "Version": 1,
      "Key": "2595527",
      "Type": "City",
      "Rank": 65,
      "LocalizedName": "Bakuo Subdistrict",
      "Country": {
          "ID": "CN",
          "LocalizedName": "China"
      },
      "AdministrativeArea": {
          "ID": "XZ",
          "LocalizedName": "Tibet"
      }
  },
  {
      "Version": 1,
      "Key": "171485",
      "Type": "City",
      "Rank": 65,
      "LocalizedName": "Bakuriani",
      "Country": {
          "ID": "GE",
          "LocalizedName": "Georgia"
      },
      "AdministrativeArea": {
          "ID": "SJ",
          "LocalizedName": "Samtskhe-Javakheti"
      }
  },
  {
      "Version": 1,
      "Key": "3471519",
      "Type": "City",
      "Rank": 65,
      "LocalizedName": "Bakunase",
      "Country": {
          "ID": "ID",
          "LocalizedName": "Indonesia"
      },
      "AdministrativeArea": {
          "ID": "NT",
          "LocalizedName": "East Nusa Tenggara"
      }
  },
  {
      "Version": 1,
      "Key": "255423",
      "Type": "City",
      "Rank": 65,
      "LocalizedName": "Bakura",
      "Country": {
          "ID": "NG",
          "LocalizedName": "Nigeria"
      },
      "AdministrativeArea": {
          "ID": "SO",
          "LocalizedName": "Sokoto"
      }
  },
  {
      "Version": 1,
      "Key": "255805",
      "Type": "City",
      "Rank": 65,
      "LocalizedName": "Bakundi",
      "Country": {
          "ID": "NG",
          "LocalizedName": "Nigeria"
      },
      "AdministrativeArea": {
          "ID": "TA",
          "LocalizedName": "Taraba"
      }
  },
  {
      "Version": 1,
      "Key": "262314",
      "Type": "City",
      "Rank": 65,
      "LocalizedName": "Bakun",
      "Country": {
          "ID": "PH",
          "LocalizedName": "Philippines"
      },
      "AdministrativeArea": {
          "ID": "BEN",
          "LocalizedName": "Benguet"
      }
  },
  {
      "Version": 1,
      "Key": "174081",
      "Type": "City",
      "Rank": 73,
      "LocalizedName": "Bakum",
      "Country": {
          "ID": "DE",
          "LocalizedName": "Germany"
      },
      "AdministrativeArea": {
          "ID": "NI",
          "LocalizedName": "Lower Saxony"
      }
  },
  {
      "Version": 1,
      "Key": "111073",
      "Type": "City",
      "Rank": 75,
      "LocalizedName": "Baku",
      "Country": {
          "ID": "CD",
          "LocalizedName": "Democratic Republic of the Congo"
      },
      "AdministrativeArea": {
          "ID": "IT",
          "LocalizedName": "Ituri"
      }
  },
  {
      "Version": 1,
      "Key": "3165319",
      "Type": "City",
      "Rank": 75,
      "LocalizedName": "Bakula Guri",
      "Country": {
          "ID": "IN",
          "LocalizedName": "India"
      },
      "AdministrativeArea": {
          "ID": "AS",
          "LocalizedName": "Assam"
      }
  }
]

const Navbar=(props)=>{
//   console.log('ppp',props.info.data)
const [inputName, setInputName] = useState('')
const [city, setCity] = useState('');

//   const searchInput = useRef();

  const handleChange =async(e)=>{
    e.preventDefault(); 
    const search = e.target.value;
    setInputName(search);
    const fetchData = await fetch(API+search);
    const data = await fetchData.json();
      if(data !== null){
        props.dispatch({type: 'CITY_NAME', payload: data})
    } else {
        props.dispatch({type: 'CITY_NAME', payload: []})
    }
    }
  
    const handleSubmit=async(e)=>{
      e.preventDefault(); 
      const form = e.target;
      const formData =  new FormData(form);
      const searchIn = formData.get('searchInput')
      const correctName = searchIn.charAt(0).toUpperCase()+searchIn.slice(1);
      props.dispatch({type: 'CITY_NAME', payload: []})
      const findCity = await props.info.data.find(item=>item.LocalizedName == correctName)
      console.log('tapdim',findCity)
      if(findCity){
        setCity(findCity)
        
      }
    }
  
    // const fetch1 = async() => {
    //     try{
    //     await fetch(API_2+city.Key+'?apikey='+API_Key)
    //       .then(response => response.json())
    //       .then(data => console.log(data));
    //     }catch(error){
    //         console.error('Error fetching data1:', error);
    //     }
    // };



    const handleClick=(e)=>{
        console.log('clilkeyende', e.target.innerText)
        props.dispatch({type: 'CITY_NAME', payload: []})
        setInputName(e.target.innerText)
    }





  return(
    <div className='navbarContainer'>
      <div className='navbar'>
          <h3>Herolo Weather Task</h3>
          <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/favourites'>Favourites</Link></li>
          </ul>
      </div>
      <div className='formDiv'>

        <form onSubmit={handleSubmit} onClick={fetch1}>
          
          <input type='search' list='cities' onChange={handleChange} name='searchInput' value={inputName}
           id='searchInput'></input>
            <div id='cities' name='optiondata'>
              {props.info.data? props.info.data.map((item)=>{
                return(
                    <p key={item.Key} onClick={handleClick} value={item.LocalizedName}>{item.LocalizedName}</p>
                )
              }) : ''}
              
            </div>
            
            </form>
      </div>

      <div className='container'>
            <h1>Home</h1>
        <div className='dataBox'>
            <h3>{city.LocalizedName}</h3>
        </div>
      
    </div>
    </div>
    
  )}

const mapStateToProps=(state)=>({
  info: state
})
export default connect(mapStateToProps)(Navbar);