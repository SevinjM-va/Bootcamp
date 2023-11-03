import React from 'react';
import { connect } from 'react-redux';

import { useEffect, useState } from 'react';

const Robofriends = (props)=>{

  const [data,setData]= useState(null)

  
  useEffect(()=>{
    const fetchedData = async ()=> {
      try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        setData(data);
  } catch(error){
    console.log('error',error)
}};
  fetchedData();
},[]);
// console.log(data)


const inputValue= (event)=>{ //!!!Burda onchange-lə yazı silinəndə array geri qayıtmır. Nə qədər etdim alınmadı.
  // event.preventDefault(); 
  const val = event.key; 
  console.log(val)
    let findRobot = [...data]
    findRobot = data.filter((item)=>item.name.includes(val));
    setData(findRobot);
  }


  return(

    <div className='container'>
    
      <div className='header'>
        <h1>ROBOFRIENDS</h1>
        <input type='text' name='robotName' onChange={inputValue} placeholder='search robots'></input>
      </div>

        
      <div className='rorbotsContainer'>
          {data?.map((robo)=>(
            <div key={robo.id} className='robots'>,
             <img src={`https://robohash.org/${robo.id}?size=200x200`}></img>,
             <h2>{robo.name}</h2>,
             <p>{robo.email}</p>
        </div>
          ))}
      </div>
      
    </div>
  )
}

const mapStateToProps = (state)=>({
  robotics: state
})
export default connect(mapStateToProps)(Robofriends);