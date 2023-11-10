import React from 'react';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';



// const maiUrl = 'https://jsonplaceholder.typicode.com/users';

const RobofriendsSearch = (props)=>{
console.log('ppppp',props.robotics.load)
const [robot, setRobot]=useState('')



useEffect(()=>{
  const fetchedData = async ()=> {
    try{
      props.dispatch({type: 'IS_LOADINA',payload: true})
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json();
      props.dispatch({type: 'SEARCHING_DATA',payload: data})
      } catch(error){
        console.log('error',error)
    }};
      fetchedData();
      props.dispatch({type: 'NOT_LOADINA',payload: false})
    },[]);



const inputValue= (event)=>{ 
  const val = event.target.value;  
  setRobot(val)
  }
console.log(robot)
  return(

    <div className='container'>
      <div className='header'>
        <h1>ROBOFRIENDS</h1>
        <input type='text' name='robotName' onChange={inputValue} placeholder='Search robots...'></input>
      </div>

       <div className='rorbotsContainer'>
        
       {props.robotics? 
       robot.length === 0 ? props.robotics.search.map(robo=>(
        <div key={robo.id} className='robots' >
          <img src={`https://robohash.org/${robo.id}?size=200x200`}></img>
          <h2>{robo.name}</h2>
          <p>{robo.email}</p>
        </div>))

         : robot.length > 0 ? props.robotics.filter(robo=>robo.name.includes(robot)).map(robo=>(
          <div key={robo.id} className='robots' >
          <img src={`https://robohash.org/${robo.id}?size=200x200`}></img>
          <h2>{robo.name}</h2>
          <p>{robo.email}</p>
        </div>
        )) : 'doesnt work' : ''}

      </div>
      </div>
  )
}

const mapStateToProps = (state)=>({
  robotics: state,
  loading: state
})
export default connect(mapStateToProps)(RobofriendsSearch);