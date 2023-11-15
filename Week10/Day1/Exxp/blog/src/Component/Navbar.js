import React, { useEffect, useRef, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import {createClient} from 'pexels';
import { connect } from 'react-redux';

const API_Key= 'lMpe61ouqWnEg9fMOOGvAVTlenGK0tkU';

const API = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=	lMpe61ouqWnEg9fMOOGvAVTlenGK0tkU&q=`

const API_2 =  'http://dataservice.accuweather.com/currentconditions/v1/'

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


  const searchInput = useRef();

  const handleChange =async(e)=>{
    e.preventDefault(); 
    // const search = searchInput.current.value;
    // const fetchData = await fetch(API+search);
    // const data = await fetchData.json();
    //   if(data !== null){
    //     console.log(data)
        // setCity(e.target.value)
        props.dispatch({type: 'CITY_NAME', payload: testData})
    }
    // }
  
    const handleSubmit=async(e)=>{
      e.preventDefault(); 
    //   let changeCity =  city.charAt(0).toUpperCase()+city.slice(1);

    //   const compareData =await props.info.data.find(item=>item.LocalizedName === changeCity)
      
    //   props.dispatch({type: 'FINDING_CITY', payload: compareData});

    //   console.log('compare',compareData )
    //   const fetchingTemp = await fetch(`https://dataservice.accuweather.com/currentconditions/v1/${compareData.Key}?apikey=lMpe61ouqWnEg9fMOOGvAVTlenGK0tk`);
    //   const key = await fetchingTemp.json();
    //   if(key !== null){
    //         console.log(key)
    // }
}
  
// console.log('checking',props.info.data)
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

        <form  onSubmit={handleSubmit}><Link to='/home'>
          
          <input type='search' list='cities' ref={searchInput} name='searchInput' id='searchInput' onChange={handleChange}/>
            <datalist id='cities' name='optiondata'> 
              {props.info.data.map((item)=>{
                return(
                    <option key={item.Key} value={item.LocalizedName}>{item.LocalizedName}</option>
                )
              })}
            </datalist></Link>
        </form>
      </div>
    </div>
    
  )}

const mapStateTpProps=(state)=>({
  info: state
})
export default connect(mapStateTpProps)(Navbar);